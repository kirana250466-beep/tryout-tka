"use strict";

/* ====== state ====== */
const S = {
  role: null, // "student" | "teacher" (null = belum masuk ke kuis mana pun)
  name: "",
  pin: "",
  quiz: null, // id kuis yang sedang dibuka (null = di menu)
  info: null, // info kuis yang sedang dibuka: { id, title, subtitle, icon, lang, total }
  quizzes: [], // daftar kuis untuk menu
  status: "off",
  round: 0,
  total: 0,
  loaded: false, // data soal siswa sudah dimuat untuk ronde ini
  questions: [],
  progress: [], // [{n, choice, correct, correctKey}]
  idx: 0, // indeks soal yang sedang dikerjakan
  busy: false,
  timer: null,
  gen: 0, // naik setiap pindah menu/kuis, supaya balasan server yang terlambat diabaikan
};
const T = { questions: [], i: 0, tab: "bahas" };

const POLL_MS = 4000;
const STORE_KEY = "quiz.login";
const $ = (id) => document.getElementById(id);
const VIEWS = ["menu", "login", "wait", "quiz", "result", "teacher"];

/* ====== util ====== */
function show(view) {
  VIEWS.forEach((v) => ($("view-" + v).hidden = v !== view));
  window.scrollTo(0, 0);
}

let toastTimer;
function toast(msg) {
  const t = $("toast");
  t.textContent = msg;
  t.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => (t.hidden = true), 3200);
}

async function api(path, { method = "GET", body } = {}) {
  const headers = { "x-name": encodeURIComponent(S.name || "") };
  if (S.quiz) headers["x-quiz"] = S.quiz;
  if (S.pin) headers["x-pin"] = S.pin;
  if (body) headers["content-type"] = "application/json";
  const res = await fetch(path, { method, headers, body: body ? JSON.stringify(body) : undefined, cache: "no-store" });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw Object.assign(new Error(data.error || "error"), { status: res.status, data });
  return data;
}

function el(tag, props = {}, children = []) {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(props)) {
    if (k === "class") e.className = v;
    else if (k === "text") e.textContent = v;
    else e.setAttribute(k, v);
  }
  [].concat(children).forEach((c) => c && e.append(c));
  return e;
}

function stopPolling() {
  clearInterval(S.timer);
  S.timer = null;
}

// Nama (dan PIN guru) diingat selama tab terbuka, supaya refresh atau pindah kuis tidak perlu mengetik ulang.
function saveLogin() {
  try {
    if (S.name) sessionStorage.setItem(STORE_KEY, JSON.stringify({ name: S.name, pin: S.pin, quiz: S.quiz }));
    else sessionStorage.removeItem(STORE_KEY);
  } catch (_) {}
}
function loadSaved() {
  try {
    return JSON.parse(sessionStorage.getItem(STORE_KEY) || "null");
  } catch (_) {
    return null;
  }
}

// Bacaan (reading) dan bahasa teks soal. Bahasa Inggris diberi lang="en" supaya terbaca benar oleh pembaca layar.
function renderPassage(prefix, passage) {
  const box = $(prefix + "-passage");
  if (!passage || !passage.text) {
    box.hidden = true;
    return;
  }
  $(prefix + "-passage-title").textContent = passage.title || "Teks bacaan";
  $(prefix + "-passage-text").textContent = passage.text;
  box.open = true;
  box.hidden = false;
}
function setLang(ids) {
  const lang = (S.info && S.info.lang) || "id";
  ids.forEach((id) => $(id).setAttribute("lang", lang));
}

/* ====== menu pilihan kuis ====== */
function statusChip(q) {
  if (q.total === 0) return ["", "Soal belum diisi"];
  if (q.status === "active") return ["on", "Sesi aktif"];
  if (q.status === "paused") return ["paused", "Dijeda"];
  return ["", q.round === 0 ? "Belum dimulai" : "Ditutup"];
}

function renderMenu() {
  $("menu-hello").textContent = S.name ? "Halo, " + S.name + ". Pilih kuis yang mau dikerjakan." : "Pilih kuis yang mau dikerjakan.";
  $("menu-logout").hidden = !S.name;
  const list = $("menu-list");
  list.replaceChildren();
  S.quizzes.forEach((q) => {
    const [cls, label] = statusChip(q);
    const empty = q.total === 0;
    const b = el("button", { class: "quiz-card", type: "button", "data-quiz": q.id }, [
      el("span", { class: "quiz-icon", "aria-hidden": "true", text: q.icon || "?" }),
      el("span", { class: "quiz-body" }, [
        el("span", { class: "quiz-title", text: q.title }),
        el("span", { class: "quiz-sub", text: q.subtitle || "" }),
        el("span", { class: "quiz-meta" }, [
          el("span", { class: "chip " + cls, text: label }),
          empty ? null : el("span", { class: "quiz-count", text: q.total + " soal" }),
        ]),
      ]),
      el("span", { class: "quiz-go", "aria-hidden": "true", text: "→" }),
    ]);
    if (empty) b.disabled = true;
    else b.addEventListener("click", () => pickQuiz(q.id));
    list.append(b);
  });
}

let menuSig = "";
async function loadMenu() {
  const gen = S.gen;
  try {
    const r = await api("/api/quizzes");
    if (gen !== S.gen) return false;
    S.quizzes = r.quizzes;
    $("menu-error").hidden = true;
    const sig = JSON.stringify(r.quizzes) + "|" + S.name;
    if (sig !== menuSig || !$("menu-list").children.length) {
      menuSig = sig;
      renderMenu();
    }
    return true;
  } catch (_) {
    if (gen !== S.gen) return false;
    $("menu-error").textContent = "Tidak bisa terhubung ke server. Mencoba lagi...";
    $("menu-error").hidden = false;
    return false;
  }
}

function resetQuizState() {
  S.gen++;
  Object.assign(S, { role: null, quiz: null, info: null, status: "off", round: 0, total: 0, loaded: false, questions: [], progress: [], idx: 0, busy: false });
  T.questions = [];
  T.i = 0;
}

async function openMenu() {
  stopPolling();
  resetQuizState();
  saveLogin();
  menuSig = "";
  document.title = "Latihan Soal";
  try {
    history.replaceState(null, "", location.pathname + location.search);
  } catch (_) {}
  S.timer = setInterval(() => {
    if (!$("view-menu").hidden) loadMenu();
  }, POLL_MS);
  renderMenu();
  show("menu");
  await loadMenu();
}

function pickQuiz(id) {
  const info = S.quizzes.find((q) => q.id === id);
  if (!info || info.total === 0) return;
  stopPolling();
  S.gen++;
  S.quiz = id;
  S.info = info;
  S.total = info.total;
  document.title = info.title + " · Latihan Soal";
  try {
    history.replaceState(null, "", "#" + id);
  } catch (_) {}
  showLogin();
  if (S.name) {
    // nama sudah dikenal dari kuis sebelumnya: langsung masuk
    $("in-name").value = S.name;
    $("in-pin").value = S.pin || "";
    $("login-form").requestSubmit();
  }
}

function showLogin() {
  const i = S.info;
  $("login-icon").textContent = i.icon || "?";
  $("login-title").textContent = "Latihan Soal " + i.title;
  $("login-desc").textContent =
    i.total + " soal, jawaban langsung diperiksa. Masuk dengan nama kamu. Kalau masuk lagi dengan nama yang sama, pengerjaanmu dilanjutkan.";
  $("login-error").hidden = true;
  show("login");
  $("in-name").focus();
}

/* ====== login / logout ====== */
$("login-form").addEventListener("submit", async (ev) => {
  ev.preventDefault();
  if (!S.quiz) return;
  const gen = S.gen;
  const err = $("login-error");
  err.hidden = true;
  const name = $("in-name").value;
  const pin = $("in-pin").value;
  $("btn-login").disabled = true;
  try {
    const r = await api("/api/login", { method: "POST", body: { name, pin } });
    if (gen !== S.gen) return;
    S.role = r.role;
    S.name = r.name;
    S.pin = r.role === "teacher" ? pin : "";
    S.status = r.status;
    S.round = r.round;
    S.total = r.total;
    if (r.quiz) S.info = r.quiz;
    saveLogin();
    enter();
  } catch (e) {
    if (gen !== S.gen) return;
    if (e.data && e.data.needPin) {
      $("pin-row").hidden = false;
      $("in-pin").focus();
      err.textContent = pin ? "PIN salah." : "Masukkan PIN guru.";
    } else if (e.data && e.data.error === "name_required") {
      err.textContent = "Nama belum diisi.";
    } else if (e.data && e.data.error === "no_questions") {
      err.textContent = "Soal untuk kuis ini belum tersedia. Pilih kuis lain.";
    } else {
      err.textContent = "Tidak bisa terhubung ke server. Coba lagi.";
    }
    err.hidden = false;
  } finally {
    $("btn-login").disabled = false;
  }
});

// Keluar: lupakan nama, kembali ke menu.
function logout() {
  Object.assign(S, { name: "", pin: "" });
  $("in-name").value = "";
  $("in-pin").value = "";
  $("pin-row").hidden = true;
  openMenu();
}

// Menu: kembali ke pilihan kuis, nama tetap diingat.
function toMenu() {
  openMenu();
}

document.addEventListener("click", (ev) => {
  const a = ev.target.closest("[data-action]");
  if (!a) return;
  if (a.dataset.action === "logout") logout();
  else if (a.dataset.action === "menu") toMenu();
});

function enter() {
  stopPolling();
  if (S.role === "teacher") return enterTeacher();
  S.loaded = false;
  syncStudent();
  S.timer = setInterval(syncStudent, POLL_MS);
}

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState !== "visible") return;
  if (!S.quiz) {
    if (!$("view-menu").hidden) loadMenu();
    return;
  }
  if (!S.role) return;
  S.role === "student" ? syncStudent() : refreshRoster();
});

/* ====== siswa ====== */
async function syncStudent() {
  if (S.role !== "student" || S.busy) return;
  const gen = S.gen;
  try {
    const st = await api("/api/status");
    if (gen !== S.gen) return;
    if (st.round !== S.round) {
      S.round = st.round;
      S.loaded = false;
    }
    S.status = st.status;
    S.total = st.total;
    if (st.status === "active" && !S.loaded) await loadQuiz();
    if (gen !== S.gen) return;
    renderStudent();
  } catch (_) {
    /* koneksi putus sebentar: coba lagi di polling berikutnya */
  }
}

async function loadQuiz() {
  const gen = S.gen;
  const q = await api("/api/quiz");
  if (gen !== S.gen || !q.ready) return;
  S.round = q.round;
  S.name = q.name;
  S.questions = q.questions;
  S.progress = q.progress;
  S.idx = q.progress.length;
  S.loaded = true;
  if (S.idx < S.total) renderQuestion();
}

function renderStudent() {
  if (!S.loaded) {
    const t = {
      off: S.round === 0
        ? ["Belum dimulai", "Sesi belum dimulai. Tunggu guru memulai sesi."]
        : ["Sesi ditutup", "Sesi sedang dimatikan oleh guru. Tunggu guru membukanya lagi."],
      paused: ["Sesi dijeda", "Guru sedang menjeda sesi. Tunggu sebentar."],
      active: ["Memuat soal", "Sebentar ya..."],
    }[S.status];
    $("wait-quiz").textContent = S.info ? S.info.title : "";
    $("wait-title").textContent = t[0];
    $("wait-text").textContent = t[1];
    return show("wait");
  }

  if (S.idx >= S.total) return renderResult();

  if ($("view-quiz").hidden) {
    show("quiz");
    renderQuestion();
  }
  const ov = $("overlay");
  if (S.status === "active") {
    ov.hidden = true;
  } else {
    $("overlay-title").textContent = S.status === "paused" ? "Dijeda oleh guru" : "Sesi ditutup oleh guru";
    $("overlay-text").textContent = S.status === "paused"
      ? "Pengerjaan berhenti sebentar. Jawabanmu aman, lanjut otomatis saat guru melanjutkan."
      : "Jawabanmu tersimpan. Kamu bisa lanjut saat guru membuka sesi lagi.";
    ov.hidden = false;
  }
}

function scoreNow() {
  return S.progress.filter((p) => p.correct).length;
}

function renderQuestion() {
  const q = S.questions[S.idx];
  if (!q) return;
  show("quiz");
  $("q-name").textContent = S.name;
  $("q-avatar").textContent = S.name.charAt(0).toUpperCase();
  $("q-score").textContent = "Benar " + scoreNow();
  $("q-count").textContent = (S.info ? S.info.title + " · " : "") + "Soal " + q.n + " dari " + S.total;
  $("q-bar").style.width = (S.idx / S.total) * 100 + "%";
  $("q-text").textContent = q.text;
  renderPassage("q", q.passage);
  setLang(["q-text", "q-passage-text", "q-options"]);

  const img = $("q-img");
  if (q.image) {
    img.src = q.image;
    img.hidden = false;
  } else {
    img.hidden = true;
    img.removeAttribute("src");
  }

  const box = $("q-options");
  box.replaceChildren();
  // Soal berjawaban ganda: klik pilihan untuk memilih atau membatalkan, lalu klik "Kirim jawaban".
  const picked = new Set();
  const sendBtn = $("q-submit");
  sendBtn.hidden = !q.multi;
  sendBtn.disabled = true;
  sendBtn.onclick = q.multi ? () => submit([...picked].sort().join("")) : null;
  $("q-hint").hidden = !q.multi;
  q.options.forEach((txt, i) => {
    const letter = "ABCDE"[i];
    const b = el("button", { class: "opt", type: "button", "data-letter": letter }, [
      el("span", { class: "letter", text: letter }),
      el("span", { text: txt }),
    ]);
    if (q.multi) {
      b.setAttribute("aria-pressed", "false");
      b.addEventListener("click", () => {
        if (picked.has(letter)) picked.delete(letter);
        else picked.add(letter);
        b.classList.toggle("selected", picked.has(letter));
        b.setAttribute("aria-pressed", String(picked.has(letter)));
        sendBtn.disabled = picked.size === 0;
      });
    } else {
      b.addEventListener("click", () => submit(letter));
    }
    box.append(b);
  });

  $("q-feedback").hidden = true;
  $("q-next").hidden = true;
  $("q-next").textContent = S.idx === S.total - 1 ? "Lihat hasil" : "Lanjut";
  S.busy = false;
}

// `choice` = satu huruf ("C") atau beberapa huruf berurutan untuk soal berjawaban ganda ("ACE").
async function submit(choice) {
  if (S.busy) return;
  S.busy = true;
  const gen = S.gen;
  const q = S.questions[S.idx];
  const buttons = [...document.querySelectorAll("#q-options .opt")];
  const sendBtn = $("q-submit");
  buttons.forEach((b) => (b.disabled = true));
  sendBtn.disabled = true;

  try {
    const r = await api("/api/answer", { method: "POST", body: { n: q.n, choice, round: S.round } });
    if (gen !== S.gen) return; // sudah pindah ke menu; jawaban tetap tersimpan di server
    S.progress.push({ n: q.n, choice: r.choice, correct: r.correct, correctKey: r.correctKey });
    sendBtn.hidden = true;
    $("q-hint").hidden = true;
    buttons.forEach((b) => {
      const l = b.dataset.letter;
      b.classList.remove("selected");
      if (r.correctKey.includes(l)) b.classList.add("correct");
      else if (r.choice.includes(l)) b.classList.add("wrong");
      else b.classList.add("dim");
    });
    const fb = $("q-feedback");
    fb.className = "feedback " + (r.correct ? "ok" : "bad");
    fb.textContent = r.correct ? "Benar! 🎉" : "Belum tepat. Jawaban yang benar: " + r.correctKey.split("").join(", ");
    fb.hidden = false;
    $("q-score").textContent = "Benar " + scoreNow();
    $("q-bar").style.width = ((S.idx + 1) / S.total) * 100 + "%";
    $("q-next").hidden = false;
    $("q-next").focus();
    S.busy = false;
  } catch (e) {
    if (gen !== S.gen) return;
    S.busy = false;
    const code = e.data && e.data.error;
    if (code === "not_active") {
      S.status = e.data.status;
      buttons.forEach((b) => (b.disabled = false));
      sendBtn.disabled = !document.querySelector("#q-options .opt.selected");
      renderStudent();
    } else if (code === "round_changed") {
      toast("Guru memulai sesi baru. Soal dimuat ulang.");
      S.loaded = false;
      S.round = e.data.round;
      S.status = e.data.status;
      syncStudent();
    } else {
      buttons.forEach((b) => (b.disabled = false));
      sendBtn.disabled = !document.querySelector("#q-options .opt.selected");
      toast("Jawaban belum terkirim. Coba klik lagi.");
    }
  }
}

$("q-next").addEventListener("click", () => {
  S.idx += 1;
  if (S.idx >= S.total) renderResult();
  else renderQuestion();
});

function renderResult() {
  const correct = scoreNow();
  $("r-quiz").textContent = S.info ? S.info.title : "";
  $("r-name").textContent = S.name;
  $("r-correct").textContent = correct;
  $("r-total").textContent = S.total;
  $("r-percent").textContent = Math.round((correct / S.total) * 100) + "% benar";
  const grid = $("r-grid");
  grid.replaceChildren();
  for (let n = 1; n <= S.total; n++) {
    const p = S.progress.find((x) => x.n === n);
    grid.append(el("span", { class: "cell " + (p ? (p.correct ? "ok" : "bad") : ""), text: String(n) }));
  }
  show("result");
}

/* ====== guru ====== */
async function enterTeacher() {
  const gen = S.gen;
  T.i = 0;
  $("t-quiz").textContent = S.info ? S.info.title : "";
  show("teacher");
  try {
    const q = await api("/api/teacher/questions");
    if (gen !== S.gen) return;
    T.questions = q.questions;
  } catch (e) {
    if (gen !== S.gen) return;
    if (e.status === 401) {
      toast("PIN guru tidak valid.");
      return logout();
    }
    toast("Gagal memuat soal. Muat ulang halaman.");
    return;
  }
  buildNavGrid();
  renderTeacherQuestion();
  setTab(T.tab);
  await refreshRoster();
  if (gen !== S.gen) return;
  S.timer = setInterval(refreshRoster, POLL_MS);
}

function buildNavGrid() {
  const g = $("t-grid");
  g.replaceChildren();
  T.questions.forEach((q, i) => {
    const b = el("button", { class: "cell", type: "button", "aria-label": "Soal " + q.n, text: String(q.n) });
    b.addEventListener("click", () => {
      T.i = i;
      renderTeacherQuestion();
    });
    g.append(b);
  });
}

function renderTeacherQuestion() {
  const q = T.questions[T.i];
  if (!q) return;
  [...$("t-grid").children].forEach((c, i) => c.classList.toggle("current", i === T.i));
  $("t-qno").textContent = "Soal " + q.n + " dari " + T.questions.length;
  $("t-qtext").textContent = q.text;
  renderPassage("t", q.passage);
  setLang(["t-qtext", "t-passage-text", "t-options"]);

  const qi = $("t-qimg");
  qi.hidden = !q.image;
  if (q.image) qi.src = q.image;

  const box = $("t-options");
  box.replaceChildren();
  q.options.forEach((txt, i) => {
    const letter = "ABCDE"[i];
    const isKey = q.answer.includes(letter);
    box.append(
      el("div", { class: "opt" + (isKey ? " correct" : "") }, [
        el("span", { class: "letter", text: letter }),
        el("span", { text: txt + (isKey ? "  ✓" : "") }),
      ])
    );
  });

  $("t-answer").textContent = q.answer
    .split("")
    .map((l) => l + ". " + q.options["ABCDE".indexOf(l)])
    .join("   |   ");

  const ei = $("t-eimg");
  ei.hidden = !q.explainImage;
  if (q.explainImage) ei.src = q.explainImage;
  $("t-explain").innerHTML = q.explain || ""; // konten dari server milik sendiri, bukan input pengguna

  $("t-prev").disabled = T.i === 0;
  $("t-next").disabled = T.i === T.questions.length - 1;
}

$("t-prev").addEventListener("click", () => {
  if (T.i > 0) {
    T.i--;
    renderTeacherQuestion();
    $("t-card").scrollIntoView({ block: "start", behavior: "smooth" });
  }
});
$("t-next").addEventListener("click", () => {
  if (T.i < T.questions.length - 1) {
    T.i++;
    renderTeacherQuestion();
    $("t-card").scrollIntoView({ block: "start", behavior: "smooth" });
  }
});

function setTab(tab) {
  T.tab = tab;
  $("panel-bahas").hidden = tab !== "bahas";
  $("panel-peserta").hidden = tab !== "peserta";
  ["bahas", "peserta"].forEach((t) => {
    const b = $("tab-" + t);
    b.classList.toggle("active", t === tab);
    b.setAttribute("aria-selected", String(t === tab));
  });
}
document.querySelectorAll(".tab").forEach((b) => b.addEventListener("click", () => setTab(b.dataset.tab)));

async function refreshRoster() {
  if (S.role !== "teacher") return;
  const gen = S.gen;
  try {
    const r = await api("/api/teacher/roster");
    if (gen !== S.gen) return;
    S.status = r.status;
    S.round = r.round;
    renderControls();
    renderRoster(r);
  } catch (e) {
    if (gen !== S.gen) return;
    if (e.status === 401) logout();
  }
}

function renderControls() {
  const chip = $("t-status");
  const label = { active: "Aktif", paused: "Dijeda", off: "Mati" }[S.status];
  chip.textContent = label;
  chip.className = "chip " + { active: "on", paused: "paused", off: "off" }[S.status];

  $("t-info").textContent =
    S.round === 0 ? "Belum pernah dimulai." : "Sesi ke-" + S.round + (S.status === "active" ? ", siswa bisa mengerjakan." : ", siswa belum bisa mengerjakan.");

  $("t-pause").hidden = S.status !== "active";
  $("t-resume").hidden = S.status === "active" || S.round === 0;
  $("t-stop").hidden = S.status === "off";
  $("t-start").textContent = S.round === 0 ? "Mulai" : "Mulai Baru";
}

function renderRoster(r) {
  $("t-count").textContent = r.students.length;
  const table = $("t-roster");
  $("t-roster-empty").hidden = r.students.length > 0;
  table.hidden = r.students.length === 0;
  const body = table.querySelector("tbody");
  body.replaceChildren();
  r.students.forEach((s) => {
    const pct = Math.round((s.answered / r.total) * 100);
    const progress = el("td", {}, [
      document.createTextNode(s.answered + " / " + r.total),
      el("span", { class: "bar" }, [el("i", { style: "width:" + pct + "%" })]),
    ]);
    body.append(
      el("tr", {}, [
        el("td", { text: s.name }),
        progress,
        el("td", { text: String(s.correct) }),
        el("td", { text: ago(s.lastSeen) }),
      ])
    );
  });
}

function ago(ts) {
  const sec = Math.max(0, Math.round((Date.now() - ts) / 1000));
  if (sec < 10) return "baru saja";
  if (sec < 60) return sec + " detik lalu";
  const min = Math.round(sec / 60);
  if (min < 60) return min + " menit lalu";
  return Math.round(min / 60) + " jam lalu";
}

async function teacherAction(action) {
  try {
    await api("/api/teacher/session", { method: "POST", body: { action } });
    await refreshRoster();
  } catch (_) {
    toast("Perintah gagal dikirim. Coba lagi.");
  }
}

$("t-start").addEventListener("click", () => {
  if (S.round > 0 && !confirm("Mulai sesi baru? Semua siswa akan mulai lagi dari soal 1. Jawaban sesi sebelumnya tidak ikut dihitung.")) return;
  teacherAction("start");
});
$("t-pause").addEventListener("click", () => teacherAction("pause"));
$("t-resume").addEventListener("click", () => teacherAction("resume"));
$("t-stop").addEventListener("click", () => {
  if (confirm("Matikan sesi? Siswa tidak bisa mengerjakan sampai kamu membukanya lagi.")) teacherAction("stop");
});

/* ====== awal ====== */
(async function init() {
  const saved = loadSaved();
  if (saved && saved.name) {
    S.name = saved.name;
    S.pin = saved.pin || "";
  }
  const fromHash = (location.hash || "").slice(1).toLowerCase(); // alamat langsung, contoh: /#inggris
  await openMenu();
  const want = [fromHash, saved && saved.quiz].find((id) => id && S.quizzes.some((q) => q.id === id && q.total > 0));
  if (want) pickQuiz(want);
})();
