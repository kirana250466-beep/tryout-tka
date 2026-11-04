// API quiz. Dipanggil dari src/worker.js (runtime Workers) dan menyimpan data di D1.
// Semua endpoint ada di bawah /api/*.

import { QUIZZES, QUIZ_IDS, LETTERS, isMulti, publicQuiz, studentExplainOf } from "../_lib/quizzes.js";

const TEACHER_KEY = "ferdi";

/* ---------- util ---------- */

const json = (data, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" },
  });

class HttpError extends Error {
  constructor(status, code, extra = {}) {
    super(code);
    this.status = status;
    this.code = code;
    this.extra = extra;
  }
}

// Nama bebas: rapikan spasi, buang karakter kontrol, maksimal 40 karakter.
function cleanName(raw) {
  const display = String(raw ?? "")
    .replace(/[\u0000-\u001f\u007f<>]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 40);
  if (!display) throw new HttpError(400, "name_required");
  return { display, key: display.normalize("NFKC").toLowerCase() };
}

function nameFromHeader(request) {
  let raw = request.headers.get("x-name") || "";
  try {
    raw = decodeURIComponent(raw);
  } catch (_) {}
  return cleanName(raw);
}

/* ---------- database ---------- */

let schemaReady = null;

// Tabel quiz_* menyimpan data per quiz (kolom quiz). Tabel lama (session, students, answers)
// dari versi satu-quiz dibiarkan, tidak dipakai lagi.
function ensureSchema(env) {
  if (!env.DB) {
    throw new HttpError(500, "d1_not_bound", {
      message: "Binding D1 dengan nama variabel DB belum dipasang di Worker ini.",
    });
  }
  if (!schemaReady) {
    const seed = QUIZ_IDS.map((id) =>
      env.DB.prepare("INSERT OR IGNORE INTO quiz_session (quiz, status, round, updated_at) VALUES (?1, 'off', 0, 0)").bind(id)
    );
    schemaReady = env.DB.batch([
      env.DB.prepare(
        "CREATE TABLE IF NOT EXISTS quiz_session (quiz TEXT PRIMARY KEY, status TEXT NOT NULL DEFAULT 'off', round INTEGER NOT NULL DEFAULT 0, updated_at INTEGER NOT NULL DEFAULT 0)"
      ),
      env.DB.prepare(
        "CREATE TABLE IF NOT EXISTS quiz_students (quiz TEXT NOT NULL, round INTEGER NOT NULL, name_key TEXT NOT NULL, display TEXT NOT NULL, created_at INTEGER NOT NULL, last_seen INTEGER NOT NULL, PRIMARY KEY (quiz, round, name_key))"
      ),
      env.DB.prepare(
        "CREATE TABLE IF NOT EXISTS quiz_answers (quiz TEXT NOT NULL, round INTEGER NOT NULL, name_key TEXT NOT NULL, n INTEGER NOT NULL, choice TEXT NOT NULL, correct INTEGER NOT NULL, answered_at INTEGER NOT NULL, PRIMARY KEY (quiz, round, name_key, n))"
      ),
      ...seed,
    ]).catch((err) => {
      schemaReady = null;
      throw err;
    });
  }
  return schemaReady;
}

// Id quiz diambil dari ?quiz=... (GET) atau body.quiz (POST), dan harus ada di daftar.
function pickQuiz(id) {
  const quiz = QUIZZES[String(id || "")];
  if (!quiz) throw new HttpError(400, "bad_quiz");
  return quiz;
}

async function getSession(env, quizId) {
  const row = await env.DB.prepare("SELECT status, round FROM quiz_session WHERE quiz = ?1").bind(quizId).first();
  return { status: row?.status || "off", round: row?.round || 0 };
}

async function listQuizzes(env) {
  const { results } = await env.DB.prepare("SELECT quiz, status, round FROM quiz_session").all();
  const byId = new Map(results.map((r) => [r.quiz, r]));
  return QUIZ_IDS.map((id) => ({
    id,
    title: QUIZZES[id].title,
    desc: QUIZZES[id].desc,
    total: QUIZZES[id].total,
    status: byId.get(id)?.status || "off",
    round: byId.get(id)?.round || 0,
  }));
}

async function registerStudent(env, quizId, round, { display, key }) {
  const now = Date.now();
  await env.DB.prepare(
    "INSERT INTO quiz_students (quiz, round, name_key, display, created_at, last_seen) VALUES (?1, ?2, ?3, ?4, ?5, ?5) " +
      "ON CONFLICT (quiz, round, name_key) DO UPDATE SET last_seen = excluded.last_seen"
  )
    .bind(quizId, round, key, display, now)
    .run();
  const row = await env.DB.prepare("SELECT display FROM quiz_students WHERE quiz = ?1 AND round = ?2 AND name_key = ?3")
    .bind(quizId, round, key)
    .first();
  return row?.display || display;
}

// Pembahasan siswa (jika quiz ini punya) ikut dikirim hanya untuk soal yang sudah dijawab siswa itu.
function withExplain(data, qz, n) {
  const explain = studentExplainOf(qz, n);
  return explain ? { ...data, explain } : data;
}

// Jawaban dikirim sebagai string huruf ("C" atau "ACE"). Hasilnya diurutkan dan tanpa duplikat.
function parseChoice(raw, multi, optionCount) {
  const text = (Array.isArray(raw) ? raw.join("") : String(raw ?? "")).toUpperCase();
  if (!/^[A-E]+$/.test(text)) throw new HttpError(400, "bad_request");
  const letters = [...new Set(text.split(""))].sort();
  if (!multi && letters.length !== 1) throw new HttpError(400, "bad_request");
  // soal dengan 4 pilihan (A sampai D) menolak huruf E
  if (letters.some((l) => LETTERS.indexOf(l) >= optionCount)) throw new HttpError(400, "bad_request");
  return letters.join("");
}

/* ---------- auth guru ---------- */

// Guru = login dengan nama "Ferdi". Jika variabel TEACHER_PIN diisi di Cloudflare,
// guru juga harus memasukkan PIN tersebut.
function requireTeacher(request, env) {
  const { key } = nameFromHeader(request);
  if (key !== TEACHER_KEY) throw new HttpError(403, "teacher_only");
  if (env.TEACHER_PIN && request.headers.get("x-pin") !== String(env.TEACHER_PIN)) {
    throw new HttpError(401, "pin_required");
  }
}

/* ---------- handlers ---------- */

async function login(request, env) {
  const body = await request.json().catch(() => ({}));
  const who = cleanName(body.name);
  const quizzes = await listQuizzes(env);

  if (who.key === TEACHER_KEY) {
    if (env.TEACHER_PIN && String(body.pin ?? "") !== String(env.TEACHER_PIN)) {
      throw new HttpError(401, "pin_required", { needPin: true });
    }
    return json({ role: "teacher", name: "Ferdi", quizzes });
  }
  return json({ role: "student", name: who.display, quizzes });
}

async function quizzesList(env) {
  return json({ quizzes: await listQuizzes(env) });
}

async function status(request, env) {
  const quiz = pickQuiz(new URL(request.url).searchParams.get("quiz"));
  return json({ quiz: quiz.id, ...(await getSession(env, quiz.id)), total: quiz.total });
}

async function quiz(request, env) {
  const who = nameFromHeader(request);
  if (who.key === TEACHER_KEY) throw new HttpError(403, "student_only");
  const qz = pickQuiz(new URL(request.url).searchParams.get("quiz"));
  const session = await getSession(env, qz.id);

  if (session.round === 0 || session.status !== "active") {
    return json({ quiz: qz.id, ...session, ready: false, total: qz.total });
  }

  const display = await registerStudent(env, qz.id, session.round, who);
  const { results } = await env.DB.prepare(
    "SELECT n, choice, correct FROM quiz_answers WHERE quiz = ?1 AND round = ?2 AND name_key = ?3 ORDER BY n"
  )
    .bind(qz.id, session.round, who.key)
    .all();

  const progress = results.map((r) =>
    withExplain(
      { n: r.n, choice: r.choice, correct: !!r.correct, correctKey: qz.questions[r.n - 1].answer },
      qz,
      r.n
    )
  );

  return json({
    quiz: qz.id,
    ...session,
    ready: true,
    total: qz.total,
    name: display,
    ...publicQuiz(qz),
    progress,
  });
}

async function answer(request, env) {
  const who = nameFromHeader(request);
  if (who.key === TEACHER_KEY) throw new HttpError(403, "student_only");

  const body = await request.json().catch(() => ({}));
  const qz = pickQuiz(body.quiz);
  const n = Number(body.n);
  if (!Number.isInteger(n) || n < 1 || n > qz.total) throw new HttpError(400, "bad_request");
  const q = qz.questions[n - 1];
  const choice = parseChoice(body.choice, isMulti(q), q.options.length);

  const session = await getSession(env, qz.id);
  if (session.status !== "active") throw new HttpError(409, "not_active", session);
  if (Number(body.round) !== session.round) throw new HttpError(409, "round_changed", session);

  await registerStudent(env, qz.id, session.round, who);

  const existing = await env.DB.prepare(
    "SELECT choice, correct FROM quiz_answers WHERE quiz = ?1 AND round = ?2 AND name_key = ?3 AND n = ?4"
  )
    .bind(qz.id, session.round, who.key, n)
    .first();
  if (existing) {
    return json(
      withExplain({ n, choice: existing.choice, correct: !!existing.correct, correctKey: q.answer, repeated: true }, qz, n)
    );
  }

  const countRow = await env.DB.prepare(
    "SELECT COUNT(*) AS c FROM quiz_answers WHERE quiz = ?1 AND round = ?2 AND name_key = ?3"
  )
    .bind(qz.id, session.round, who.key)
    .first();
  if (n !== (countRow?.c || 0) + 1) {
    throw new HttpError(400, "out_of_order", { next: (countRow?.c || 0) + 1 });
  }

  // Benar hanya jika himpunan jawaban sama persis dengan kunci (tidak ada nilai sebagian).
  const correct = choice === q.answer ? 1 : 0;
  const now = Date.now();
  await env.DB.batch([
    env.DB.prepare(
      "INSERT OR IGNORE INTO quiz_answers (quiz, round, name_key, n, choice, correct, answered_at) VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7)"
    ).bind(qz.id, session.round, who.key, n, choice, correct, now),
    env.DB.prepare("UPDATE quiz_students SET last_seen = ?4 WHERE quiz = ?1 AND round = ?2 AND name_key = ?3").bind(
      qz.id,
      session.round,
      who.key,
      now
    ),
  ]);

  return json(withExplain({ n, choice, correct: !!correct, correctKey: q.answer }, qz, n));
}

async function teacherQuestions(request, env) {
  requireTeacher(request, env);
  const qz = pickQuiz(new URL(request.url).searchParams.get("quiz"));
  return json({ quiz: qz.id, title: qz.title, questions: qz.questions, passages: qz.passages, total: qz.total });
}

async function teacherRoster(request, env) {
  requireTeacher(request, env);
  const qz = pickQuiz(new URL(request.url).searchParams.get("quiz"));
  const session = await getSession(env, qz.id);
  const { results } = await env.DB.prepare(
    "SELECT s.display AS name, s.last_seen AS lastSeen, " +
      "(SELECT COUNT(*) FROM quiz_answers a WHERE a.quiz = s.quiz AND a.round = s.round AND a.name_key = s.name_key) AS answered, " +
      "(SELECT COALESCE(SUM(a.correct), 0) FROM quiz_answers a WHERE a.quiz = s.quiz AND a.round = s.round AND a.name_key = s.name_key) AS correct " +
      "FROM quiz_students s WHERE s.quiz = ?1 AND s.round = ?2 ORDER BY s.display COLLATE NOCASE"
  )
    .bind(qz.id, session.round)
    .all();
  return json({ quiz: qz.id, ...session, total: qz.total, students: results });
}

async function teacherSession(request, env) {
  requireTeacher(request, env);
  const body = await request.json().catch(() => ({}));
  const qz = pickQuiz(body.quiz);
  const cur = await getSession(env, qz.id);
  const now = Date.now();
  let next;

  switch (body.action) {
    case "start": // mulai baru: ronde baru, semua siswa mulai dari soal 1
      next = { status: "active", round: cur.round + 1 };
      break;
    case "pause":
      if (cur.status !== "active") throw new HttpError(409, "not_active", cur);
      next = { status: "paused", round: cur.round };
      break;
    case "resume": // lanjutkan ronde yang sama tanpa menghapus jawaban
      if (cur.round === 0) throw new HttpError(409, "no_round", cur);
      next = { status: "active", round: cur.round };
      break;
    case "stop":
      next = { status: "off", round: cur.round };
      break;
    default:
      throw new HttpError(400, "bad_action");
  }

  await env.DB.prepare("UPDATE quiz_session SET status = ?1, round = ?2, updated_at = ?3 WHERE quiz = ?4")
    .bind(next.status, next.round, now, qz.id)
    .run();
  return json({ quiz: qz.id, ...next, total: qz.total });
}

/* ---------- router ---------- */

export async function onRequest({ request, env }) {
  try {
    await ensureSchema(env);
    const path = new URL(request.url).pathname.replace(/\/+$/, "");
    const m = request.method;

    if (path === "/api/login" && m === "POST") return await login(request, env);
    if (path === "/api/quizzes" && m === "GET") return await quizzesList(env);
    if (path === "/api/status" && m === "GET") return await status(request, env);
    if (path === "/api/quiz" && m === "GET") return await quiz(request, env);
    if (path === "/api/answer" && m === "POST") return await answer(request, env);
    if (path === "/api/teacher/questions" && m === "GET") return await teacherQuestions(request, env);
    if (path === "/api/teacher/roster" && m === "GET") return await teacherRoster(request, env);
    if (path === "/api/teacher/session" && m === "POST") return await teacherSession(request, env);

    throw new HttpError(404, "not_found");
  } catch (err) {
    if (err instanceof HttpError) return json({ error: err.code, ...err.extra }, err.status);
    console.error(err);
    return json({ error: "server_error", message: String(err?.message || err) }, 500);
  }
}
