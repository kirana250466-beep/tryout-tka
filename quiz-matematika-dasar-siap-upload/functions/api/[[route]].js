// API quiz. Dipanggil dari src/worker.js (runtime Workers) dan menyimpan data di D1.
// Semua endpoint ada di bawah /api/*. Endpoint per kuis membaca id kuis dari header x-quiz.

import { QUIZ_LIST, getQuiz, quizInfo, publicQuestions, LETTERS } from "../_lib/quizzes.js";

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

// Kuis yang dipilih (header x-quiz). Kuis yang belum punya soal tidak bisa dipakai.
function quizFromHeader(request) {
  const quiz = getQuiz(request.headers.get("x-quiz"));
  if (!quiz) throw new HttpError(400, "unknown_quiz");
  if (quiz.total === 0) throw new HttpError(409, "no_questions");
  return quiz;
}

/* ---------- database ---------- */

let schemaReady = null;

async function prepareSchema(env) {
  await env.DB.batch([
    env.DB.prepare(
      "CREATE TABLE IF NOT EXISTS quiz_session (quiz TEXT PRIMARY KEY, status TEXT NOT NULL DEFAULT 'off', round INTEGER NOT NULL DEFAULT 0, updated_at INTEGER NOT NULL DEFAULT 0)"
    ),
    env.DB.prepare(
      "CREATE TABLE IF NOT EXISTS quiz_students (quiz TEXT NOT NULL, round INTEGER NOT NULL, name_key TEXT NOT NULL, display TEXT NOT NULL, created_at INTEGER NOT NULL, last_seen INTEGER NOT NULL, PRIMARY KEY (quiz, round, name_key))"
    ),
    env.DB.prepare(
      "CREATE TABLE IF NOT EXISTS quiz_answers (quiz TEXT NOT NULL, round INTEGER NOT NULL, name_key TEXT NOT NULL, n INTEGER NOT NULL, choice TEXT NOT NULL, correct INTEGER NOT NULL, answered_at INTEGER NOT NULL, PRIMARY KEY (quiz, round, name_key, n))"
    ),
    env.DB.prepare("CREATE TABLE IF NOT EXISTS quiz_meta (key TEXT PRIMARY KEY, value TEXT)"),
  ]);

  // Versi lama situs ini hanya punya satu kuis (Matematika Dasar) dengan tabel session, students, dan answers.
  // Sekali saja, salin isinya ke tabel baru sebagai kuis "matematika" supaya sesi dan jawaban lama tidak hilang.
  // Tabel lama tidak diubah atau dihapus.
  const done = await env.DB.prepare("SELECT value FROM quiz_meta WHERE key = 'legacy_math_copied'").first();
  if (done) return;

  const { results } = await env.DB.prepare(
    "SELECT name FROM sqlite_master WHERE type = 'table' AND name IN ('session', 'students', 'answers')"
  ).all();
  const steps = [];
  if (results.length === 3) {
    steps.push(
      env.DB.prepare(
        "INSERT OR IGNORE INTO quiz_session (quiz, status, round, updated_at) SELECT 'matematika', status, round, updated_at FROM session WHERE id = 1"
      ),
      env.DB.prepare(
        "INSERT OR IGNORE INTO quiz_students (quiz, round, name_key, display, created_at, last_seen) SELECT 'matematika', round, name_key, display, created_at, last_seen FROM students"
      ),
      env.DB.prepare(
        "INSERT OR IGNORE INTO quiz_answers (quiz, round, name_key, n, choice, correct, answered_at) SELECT 'matematika', round, name_key, n, choice, correct, answered_at FROM answers"
      )
    );
  }
  steps.push(env.DB.prepare("INSERT OR IGNORE INTO quiz_meta (key, value) VALUES ('legacy_math_copied', '1')"));
  await env.DB.batch(steps);
}

function ensureSchema(env) {
  if (!env.DB) {
    throw new HttpError(500, "d1_not_bound", {
      message: "Binding D1 dengan nama variabel DB belum dipasang di Worker ini.",
    });
  }
  if (!schemaReady) {
    schemaReady = prepareSchema(env).catch((err) => {
      schemaReady = null;
      throw err;
    });
  }
  return schemaReady;
}

async function getSession(env, quizId) {
  const row = await env.DB.prepare("SELECT status, round FROM quiz_session WHERE quiz = ?1").bind(quizId).first();
  return { status: row?.status || "off", round: row?.round || 0 };
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

// Daftar kuis untuk menu: info kuis + status sesi masing-masing.
async function quizzes(env) {
  const { results } = await env.DB.prepare("SELECT quiz, status, round FROM quiz_session").all();
  const byQuiz = new Map(results.map((r) => [r.quiz, r]));
  return json({
    quizzes: QUIZ_LIST.map((q) => {
      const s = byQuiz.get(q.id);
      return { ...quizInfo(q), status: s?.status || "off", round: s?.round || 0 };
    }),
  });
}

async function login(request, env) {
  const quiz = quizFromHeader(request);
  const body = await request.json().catch(() => ({}));
  const who = cleanName(body.name);
  const session = await getSession(env, quiz.id);
  const info = quizInfo(quiz);

  if (who.key === TEACHER_KEY) {
    if (env.TEACHER_PIN && String(body.pin ?? "") !== String(env.TEACHER_PIN)) {
      throw new HttpError(401, "pin_required", { needPin: true });
    }
    return json({ role: "teacher", name: "Ferdi", ...session, total: quiz.total, quiz: info });
  }
  return json({ role: "student", name: who.display, ...session, total: quiz.total, quiz: info });
}

async function status(request, env) {
  const quiz = quizFromHeader(request);
  return json({ ...(await getSession(env, quiz.id)), total: quiz.total });
}

async function quiz(request, env) {
  const q = quizFromHeader(request);
  const who = nameFromHeader(request);
  if (who.key === TEACHER_KEY) throw new HttpError(403, "student_only");
  const session = await getSession(env, q.id);

  if (session.round === 0 || session.status !== "active") {
    return json({ ...session, ready: false, total: q.total });
  }

  const display = await registerStudent(env, q.id, session.round, who);
  const { results } = await env.DB.prepare(
    "SELECT n, choice, correct FROM quiz_answers WHERE quiz = ?1 AND round = ?2 AND name_key = ?3 ORDER BY n"
  )
    .bind(q.id, session.round, who.key)
    .all();

  const progress = results
    .filter((r) => q.questions[r.n - 1])
    .map((r) => ({
      n: r.n,
      choice: r.choice,
      correct: !!r.correct,
      correctKey: q.questions[r.n - 1].answer,
    }));

  return json({
    ...session,
    ready: true,
    total: q.total,
    name: display,
    questions: publicQuestions(q),
    progress,
  });
}

async function answer(request, env) {
  const quiz = quizFromHeader(request);
  const who = nameFromHeader(request);
  if (who.key === TEACHER_KEY) throw new HttpError(403, "student_only");

  const body = await request.json().catch(() => ({}));
  const n = Number(body.n);
  const choice = String(body.choice || "").toUpperCase();
  if (!Number.isInteger(n) || n < 1 || n > quiz.total) throw new HttpError(400, "bad_request");
  const q = quiz.questions[n - 1];
  if (!LETTERS.slice(0, q.options.length).includes(choice)) throw new HttpError(400, "bad_request");

  const session = await getSession(env, quiz.id);
  if (session.status !== "active") throw new HttpError(409, "not_active", session);
  if (Number(body.round) !== session.round) throw new HttpError(409, "round_changed", session);

  await registerStudent(env, quiz.id, session.round, who);

  const existing = await env.DB.prepare(
    "SELECT choice, correct FROM quiz_answers WHERE quiz = ?1 AND round = ?2 AND name_key = ?3 AND n = ?4"
  )
    .bind(quiz.id, session.round, who.key, n)
    .first();
  if (existing) {
    return json({ n, choice: existing.choice, correct: !!existing.correct, correctKey: q.answer, repeated: true });
  }

  const countRow = await env.DB.prepare(
    "SELECT COUNT(*) AS c FROM quiz_answers WHERE quiz = ?1 AND round = ?2 AND name_key = ?3"
  )
    .bind(quiz.id, session.round, who.key)
    .first();
  if (n !== (countRow?.c || 0) + 1) {
    throw new HttpError(400, "out_of_order", { next: (countRow?.c || 0) + 1 });
  }

  const correct = choice === q.answer ? 1 : 0;
  const now = Date.now();
  await env.DB.batch([
    env.DB.prepare(
      "INSERT OR IGNORE INTO quiz_answers (quiz, round, name_key, n, choice, correct, answered_at) VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7)"
    ).bind(quiz.id, session.round, who.key, n, choice, correct, now),
    env.DB.prepare("UPDATE quiz_students SET last_seen = ?4 WHERE quiz = ?1 AND round = ?2 AND name_key = ?3").bind(
      quiz.id,
      session.round,
      who.key,
      now
    ),
  ]);

  return json({ n, choice, correct: !!correct, correctKey: q.answer });
}

async function teacherQuestions(request, env) {
  requireTeacher(request, env);
  const quiz = quizFromHeader(request);
  return json({ questions: quiz.questions, total: quiz.total });
}

async function teacherRoster(request, env) {
  requireTeacher(request, env);
  const quiz = quizFromHeader(request);
  const session = await getSession(env, quiz.id);
  const { results } = await env.DB.prepare(
    "SELECT s.display AS name, s.last_seen AS lastSeen, " +
      "(SELECT COUNT(*) FROM quiz_answers a WHERE a.quiz = s.quiz AND a.round = s.round AND a.name_key = s.name_key) AS answered, " +
      "(SELECT COALESCE(SUM(a.correct), 0) FROM quiz_answers a WHERE a.quiz = s.quiz AND a.round = s.round AND a.name_key = s.name_key) AS correct " +
      "FROM quiz_students s WHERE s.quiz = ?1 AND s.round = ?2 ORDER BY s.display COLLATE NOCASE"
  )
    .bind(quiz.id, session.round)
    .all();
  return json({ ...session, total: quiz.total, students: results });
}

async function teacherSession(request, env) {
  requireTeacher(request, env);
  const quiz = quizFromHeader(request);
  const body = await request.json().catch(() => ({}));
  const cur = await getSession(env, quiz.id);
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

  await env.DB.prepare(
    "INSERT INTO quiz_session (quiz, status, round, updated_at) VALUES (?1, ?2, ?3, ?4) " +
      "ON CONFLICT (quiz) DO UPDATE SET status = excluded.status, round = excluded.round, updated_at = excluded.updated_at"
  )
    .bind(quiz.id, next.status, next.round, now)
    .run();
  return json({ ...next, total: quiz.total });
}

/* ---------- router ---------- */

export async function onRequest({ request, env }) {
  try {
    await ensureSchema(env);
    const path = new URL(request.url).pathname.replace(/\/+$/, "");
    const m = request.method;

    if (path === "/api/quizzes" && m === "GET") return await quizzes(env);
    if (path === "/api/login" && m === "POST") return await login(request, env);
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
