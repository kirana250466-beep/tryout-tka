"use strict";

/* ====== state ====== */
const S = {
  role: null, // "student" | "teacher"
  name: "",
  pin: "",
  quizzes: [], // [{id, title, desc, total, status, round}]
  quiz: null, // id quiz yang sedang dibuka
  status: "off",
  round: 0,
  total: 25,
  loaded: false, // data soal siswa sudah dimuat untuk ronde ini
  questions: [],
  passages: {},
  passageOpen: {}, // id teks bacaan -> terbuka / tertutup (diingat selama sesi)
  progress: [], // [{n, choice, correct, correctKey, explain?}]
  review: null, // nomor soal yang sedang ditinjau di halaman tinjauan (null = tidak sedang meninjau)
  idx: 0, // indeks soal yang sedang dikerjakan
  picked: new Set(), // pilihan sementara untuk soal berjawaban ganda
  busy: false,
  timer: null,
};
const T = { questions: [], passages: {}, i: 0, tab: "bahas" };

const POLL_MS = 4000;
const $ = (id) => document.getElementById(id);
const VIEWS = ["login", "menu", "wait", "quiz", "result", "review", "teacher"];

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
  if (S.pin) headers["x-pin"] = S.pin;
  if (body) headers["content-type"] = "application/json";
  const res = await fetch(path, { method, headers, body: body ? JSON.stringify(body) : undefined, cache: "no-store" });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw Object.assign(new Error(data.error || "error"), { status: res.status, data });
  return data;
}

// Tambahkan ?quiz=<id> ke alamat API untuk quiz yang sedang dibuka.
const withQuiz = (path) => path + (path.includes("?") ? "&" : "?") + "quiz=" + encodeURIComponent(S.quiz);

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

const quizInfo = (id) => S.quizzes.find((q) => q.id === id);
const quizTitle = () => (quizInfo(S.quiz) || {}).title || "";
const letterList = (key) => key.split("").join(", ");

/* ====== login / logout ====== */
$("login-form").addEventListener("submit", async (ev) => {
  ev.preventDefault();
  const err = $("login-error");
  err.hidden = true;
  const name = $("in-name").value;
  const pin = $("in-pin").value;
  $("btn-login").disabled = true;
  try {
    const r = await api("/api/login", { method: "POST", body: { name, pin } });
    S.role = r.role;
    S.name = r.name;
    S.pin = r.role === "teacher" ? pin : "";
    S.quizzes = r.quizzes;
    sessionStorage.setItem("quiz.login", JSON.stringify({ name: S.name, pin: S.pin }));
    enter();
  } catch (e) {
    if (e.data && e.data.needPin) {
      $("pin-row").hidden = false;
      $("in-pin").focus();
      err.textContent = pin ? "PIN salah." : "Masukkan PIN guru.";
    } else if (e.data && e.data.error === "name_required") {
      err.textContent = "Nama belum diisi.";
    } else {
      err.textContent = "Tidak bisa terhubung ke server. Coba lagi.";
    }
    err.hidden = false;
  } finally {
    $("btn-login").disabled = false;
  }
});

function logout() {
  stopPolling();
  sessionStorage.removeItem("quiz.login");
  sessionStorage.removeItem("quiz.pick");
  Object.assign(S, {
    role: null, name: "", pin: "", quizzes: [], quiz: null, loaded: false,
    questions: [], passages: {}, progress: [], idx: 0, picked: new Set(), busy: false, review: null,
  });
  $("in-name").value = "";
  $("in-pin").value = "";
  $("pin-row").hidden = true;
  show("login");
  $("in-name").focus();
}

document.addEventListener("click", (ev) => {
  if (ev.target.closest('[data-action="logout"]')) logout();
  else if (ev.target.closest('[data-action="menu"]')) {
    sessionStorage.removeItem("quiz.pick");
    showMenu();
  }
});

// Setelah login: kembali ke quiz terakhir yang dibuka (jika halaman dimuat ulang), atau tampilkan menu.
function enter() {
  stopPolling();
  const pick = sessionStorage.getItem("quiz.pick");
  if (pick && quizInfo(pick)) return openQuiz(pick);
  showMenu();
}

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState !== "visible" || !S.role) return;
  if (!S.quiz) refreshMenu();
  else S.role === "student" ? syncStudent() : refreshRoster();
});

/* ====== menu pilih quiz ====== */
function showMenu() {
  stopPolling();
  S.quiz = null;
  S.loaded = false;
  S.busy = false;
  S.review = null;
  $("menu-title").textContent = S.role === "teacher" ? "Pilih quiz untuk dikelola" : "Pilih quiz";
  $("menu-sub").textContent = "Halo, " + S.name + ".";
  renderMenu();
  show("menu");
  refreshMenu();
  S.timer = setInterval(refreshMenu, POLL_MS);
}

async function refreshMenu() {
  if (S.quiz || !S.role) return;
  try {
    const r = await api("/api/quizzes");
    S.quizzes = r.quizzes;
    renderMenu();
  } catch (_) {
    /* koneksi putus sebentar: coba lagi di polling berikutnya */
  }
}

function statusLabel(q) {
  if (q.status === "active") return ["Aktif", "on"];
  if (q.status === "paused") return ["Dijeda", "paused"];
  if (S.role === "teacher") return ["Mati", "off"];
  return [q.round === 0 ? "Belum dibuka" : "Ditutup", "off"];
}

function renderMenu() {
  const list = $("menu-list");
  list.replaceChildren();
  S.quizzes.forEach((q) => {
    const [label, cls] = statusLabel(q);
    const card = el("button", { class: "quiz-card", type: "button", "data-quiz": q.id, role: "listitem" }, [
      el("span", { class: "qc-main" }, [
        el("strong", { class: "qc-title", text: q.title }),
        el("span", { class: "qc-desc", text: q.desc }),
      ]),
      el("span", { class: "chip " + cls, text: label }),
    ]);
    card.addEventListener("click", () => openQuiz(q.id));
    list.append(card);
  });
}

function openQuiz(id) {
  stopPolling();
  S.quiz = id;
  sessionStorage.setItem("quiz.pick", id);
  const info = quizInfo(id);
  S.total = info ? info.total : 25;
  S.status = info ? info.status : "off";
  S.round = info ? info.round : 0;
  S.loaded = false;
  S.questions = [];
  S.progress = [];
  S.idx = 0;
  S.busy = false;
  S.review = null;
  if (S.role === "teacher") return enterTeacher();
  syncStudent();
  S.timer = setInterval(syncStudent, POLL_MS);
}

/* ====== siswa ====== */
async function syncStudent() {
  if (S.role !== "student" || !S.quiz || S.busy) return;
  const quizAtStart = S.quiz;
  try {
    const st = await api(withQuiz("/api/status"));
    if (S.quiz !== quizAtStart) return; // pengguna sudah pindah quiz
    if (st.round !== S.round) {
      S.round = st.round;
      S.loaded = false;
    }
    S.status = st.status;
    S.total = st.total;
    if (st.status === "active" && !S.loaded) await loadQuiz();
    if (S.quiz !== quizAtStart) return;
    renderStudent();
  } catch (_) {
    /* koneksi putus sebentar: coba lagi di polling berikutnya */
  }
}

async function loadQuiz() {
  const quizAtStart = S.quiz;
  const q = await api(withQuiz("/api/quiz"));
  if (S.quiz !== quizAtStart || !q.ready) return;
  S.round = q.round;
  S.name = q.name;
  S.questions = q.questions;
  S.passages = q.passages || {};
  S.progress = q.progress;
  S.idx = q.progress.length;
  S.review = null;
  S.loaded = true;
  if (S.idx < S.total) renderQuestion();
}

function renderStudent() {
  if (!S.loaded) {
    const t = {
      off: S.round === 0
        ? ["Belum dimulai", "Quiz " + quizTitle() + " belum dimulai. Tunggu guru memulai sesi."]
        : ["Sesi ditutup", "Sesi sedang dimatikan oleh guru. Tunggu guru membukanya lagi."],
      paused: ["Sesi dijeda", "Guru sedang menjeda sesi. Tunggu sebentar."],
      active: ["Memuat soal", "Sebentar ya..."],
    }[S.status];
    $("wait-title").textContent = t[0];
    $("wait-text").textContent = t[1];
    return show("wait");
  }

  if (S.idx >= S.total) {
    if (S.review == null) renderResult(); // saat meninjau soal, polling tidak boleh menarik kembali ke halaman hasil
    return;
  }

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

// Tampilkan teks bacaan (jika soal punya) di elemen <details> yang diberikan.
function renderPassage(prefix, q, passages, remember) {
  const det = $(prefix + "-passage");
  const p = q.passage ? passages[q.passage] : null;
  if (!p) {
    det.hidden = true;
    return;
  }
  $(prefix + "-passage-title").textContent = "Teks bacaan: " + p.title + " (soal " + p.range + ")";
  $(prefix + "-passage-body").innerHTML = p.html; // konten dari server milik sendiri, bukan input pengguna
  det.hidden = false;
  det.dataset.pid = q.passage;
  det.open = remember ? S.passageOpen[q.passage] !== false : true;
}

$("q-passage").addEventListener("toggle", (ev) => {
  const pid = ev.target.dataset.pid;
  if (pid && !ev.target.hidden) S.passageOpen[pid] = ev.target.open;
});

function renderQuestion() {
  const q = S.questions[S.idx];
  if (!q) return;
  show("quiz");
  $("q-name").textContent = S.name;
  $("q-avatar").textContent = S.name.charAt(0).toUpperCase();
  $("q-score").textContent = "Benar " + scoreNow();
  $("q-count").textContent = quizTitle() + " · Soal " + q.n + " dari " + S.total;
  $("q-bar").style.width = (S.idx / S.total) * 100 + "%";
  $("q-text").textContent = q.text;
  renderPassage("q", q, S.passages, true);

  const img = $("q-img");
  if (q.image) {
    img.src = q.image;
    img.hidden = false;
  } else {
    img.hidden = true;
    img.removeAttribute("src");
  }

  S.picked = new Set();
  const box = $("q-options");
  box.replaceChildren();
  box.classList.toggle("multi", !!q.multi);
  q.options.forEach((txt, i) => {
    const letter = "ABCDE"[i];
    const b = el("button", { class: "opt", type: "button", "data-letter": letter }, [
      el("span", { class: "letter", text: letter }),
      el("span", { text: txt }),
    ]);
    if (q.multi) {
      b.setAttribute("aria-pressed", "false");
      b.addEventListener("click", () => togglePick(letter, b));
    } else {
      b.addEventListener("click", () => submit([letter]));
    }
    box.append(b);
  });

  $("q-hint").hidden = !q.multi;
  const sub = $("q-submit");
  sub.hidden = !q.multi;
  sub.disabled = true;

  $("q-feedback").hidden = true;
  $("q-next").hidden = true;
  $("q-next").textContent = S.idx === S.total - 1 ? "Lihat hasil" : "Lanjut";
  $("q-next2").textContent = $("q-next").textContent;
  $("q-explain").hidden = true;
  $("q-explain-body").replaceChildren();
  S.busy = false;
}

function togglePick(letter, btn) {
  if (S.busy) return;
  if (S.picked.has(letter)) S.picked.delete(letter);
  else S.picked.add(letter);
  const on = S.picked.has(letter);
  btn.classList.toggle("picked", on);
  btn.setAttribute("aria-pressed", String(on));
  $("q-submit").disabled = S.picked.size === 0;
}

$("q-submit").addEventListener("click", () => {
  if (S.picked.size) submit([...S.picked].sort());
});

async function submit(letters) {
  if (S.busy) return;
  S.busy = true;
  const q = S.questions[S.idx];
  const buttons = [...document.querySelectorAll("#q-options .opt")];
  buttons.forEach((b) => (b.disabled = true));
  $("q-submit").disabled = true;

  try {
    const r = await api("/api/answer", {
      method: "POST",
      body: { quiz: S.quiz, n: q.n, choice: letters.join(""), round: S.round },
    });
    S.progress.push({ n: q.n, choice: r.choice, correct: r.correct, correctKey: r.correctKey, explain: r.explain });
    showResult(q, r, buttons);
    S.busy = false;
  } catch (e) {
    S.busy = false;
    const code = e.data && e.data.error;
    if (code === "not_active") {
      S.status = e.data.status;
      buttons.forEach((b) => (b.disabled = false));
      $("q-submit").disabled = S.picked.size === 0;
      renderStudent();
    } else if (code === "round_changed") {
      toast("Guru memulai sesi baru. Soal dimuat ulang.");
      S.loaded = false;
      S.round = e.data.round;
      S.status = e.data.status;
      syncStudent();
    } else {
      buttons.forEach((b) => (b.disabled = false));
      $("q-submit").disabled = S.picked.size === 0;
      toast("Jawaban belum terkirim. Coba klik lagi.");
    }
  }
}

// Beri warna tiap pilihan: benar, salah, terlewat (soal ganda), atau redup. r = {choice, correctKey}.
function markOptions(q, r, buttons) {
  const keys = new Set(r.correctKey.split(""));
  const chosen = new Set(r.choice.split(""));
  buttons.forEach((b) => {
    const l = b.dataset.letter;
    b.classList.remove("picked");
    if (q.multi) {
      if (keys.has(l) && chosen.has(l)) b.classList.add("correct");
      else if (keys.has(l)) b.classList.add("missed");
      else if (chosen.has(l)) b.classList.add("wrong");
      else b.classList.add("dim");
    } else if (keys.has(l)) b.classList.add("correct");
    else if (chosen.has(l)) b.classList.add("wrong");
    else b.classList.add("dim");
  });
}

function feedbackText(q, r) {
  return r.correct
    ? q.multi ? "Benar! Semua jawaban tepat. 🎉" : "Benar! 🎉"
    : "Belum tepat. Jawaban yang benar: " + letterList(r.correctKey);
}

function showResult(q, r, buttons) {
  markOptions(q, r, buttons);
  $("q-submit").hidden = true;
  const fb = $("q-feedback");
  fb.className = "feedback " + (r.correct ? "ok" : "bad");
  fb.textContent = feedbackText(q, r);
  fb.hidden = false;
  $("q-score").textContent = "Benar " + scoreNow();
  $("q-bar").style.width = ((S.idx + 1) / S.total) * 100 + "%";
  $("q-next").hidden = false;
  // Pembahasan siswa (hanya quiz yang punya): dikirim server setelah soal ini dijawab.
  const panel = $("q-explain");
  if (r.explain) {
    $("q-explain-title").textContent = "Pembahasan soal " + q.n;
    $("q-explain-body").innerHTML = r.explain; // konten dari server milik sendiri, bukan input pengguna
    panel.open = true;
    panel.hidden = false;
  } else {
    panel.hidden = true;
  }
  $("q-next").focus();
}

function goNext() {
  S.idx += 1;
  if (S.idx >= S.total) renderResult();
  else renderQuestion();
}
$("q-next").addEventListener("click", goNext);
$("q-next2").addEventListener("click", goNext);

function renderResult() {
  const correct = scoreNow();
  $("r-name").textContent = S.name;
  $("r-correct").textContent = correct;
  $("r-total").textContent = S.total;
  $("r-percent").textContent = quizTitle() + ": " + Math.round((correct / S.total) * 100) + "% benar";
  const grid = $("r-grid");
  grid.replaceChildren();
  let reviewable = false;
  for (let n = 1; n <= S.total; n++) {
    const p = S.progress.find((x) => x.n === n);
    const cls = "cell " + (p ? (p.correct ? "ok" : "bad") : "");
    if (p && p.explain) {
      reviewable = true;
      const b = el("button", { class: cls, type: "button", "aria-label": "Lihat soal dan pembahasan nomor " + n, text: String(n) });
      b.addEventListener("click", () => openReview(n));
      grid.append(b);
    } else {
      grid.append(el("span", { class: cls, text: String(n) }));
    }
  }
  $("r-hint").hidden = !reviewable;
  S.review = null;
  show("result");
}

/* ====== tinjau soal + pembahasan (setelah selesai) ====== */
function openReview(n) {
  const q = S.questions[n - 1];
  const p = S.progress.find((x) => x.n === n);
  if (!q || !p || !p.explain) return;
  S.review = n;
  $("rv-name").textContent = S.name;
  $("rv-avatar").textContent = S.name.charAt(0).toUpperCase();
  $("rv-count").textContent = quizTitle() + " · Tinjau soal " + n + " dari " + S.total;
  $("rv-text").textContent = q.text;
  renderPassage("rv", q, S.passages, false);

  const img = $("rv-img");
  img.hidden = !q.image;
  if (q.image) img.src = q.image;
  else img.removeAttribute("src");

  const box = $("rv-options");
  box.replaceChildren();
  box.classList.toggle("multi", !!q.multi);
  const buttons = q.options.map((txt, i) => {
    const letter = "ABCDE"[i];
    const b = el("button", { class: "opt", type: "button", "data-letter": letter, disabled: "" }, [
      el("span", { class: "letter", text: letter }),
      el("span", { text: txt }),
    ]);
    box.append(b);
    return b;
  });
  markOptions(q, p, buttons);

  const fb = $("rv-feedback");
  fb.className = "feedback " + (p.correct ? "ok" : "bad");
  fb.textContent = feedbackText(q, p) + " Jawabanmu: " + letterList(p.choice) + ".";
  $("rv-explain").innerHTML = p.explain; // konten dari server milik sendiri, bukan input pengguna

  $("rv-prev").disabled = n <= 1;
  $("rv-next").disabled = n >= S.total;
  show("review");
}

function leaveReview() {
  S.review = null;
  renderResult();
}
$("rv-prev").addEventListener("click", () => S.review > 1 && openReview(S.review - 1));
$("rv-next").addEventListener("click", () => S.review < S.total && openReview(S.review + 1));
$("rv-back").addEventListener("click", leaveReview);
$("rv-back-top").addEventListener("click", leaveReview);

/* ====== guru ====== */
async function enterTeacher() {
  show("teacher");
  $("t-who").textContent = "Mode Guru · " + quizTitle();
  try {
    const q = await api(withQuiz("/api/teacher/questions"));
    T.questions = q.questions;
    T.passages = q.passages || {};
    T.i = 0;
  } catch (e) {
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
  const multi = q.answer.length > 1;
  [...$("t-grid").children].forEach((c, i) => c.classList.toggle("current", i === T.i));
  $("t-qno").textContent =
    "Soal " + q.n + " dari " + T.questions.length + (multi ? " · lebih dari satu jawaban benar" : "");
  $("t-qtext").textContent = q.text;
  renderPassage("t", q, T.passages, false);

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

  $("t-answer").textContent = multi
    ? letterList(q.answer)
    : q.answer + ". " + q.options["ABCDE".indexOf(q.answer)];

  const ei = $("t-eimg");
  ei.hidden = !q.explainImage;
  if (q.explainImage) ei.src = q.explainImage;
  $("t-explain").innerHTML = q.explain; // konten dari server milik sendiri, bukan input pengguna

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
  if (S.role !== "teacher" || !S.quiz) return;
  const quizAtStart = S.quiz;
  try {
    const r = await api(withQuiz("/api/teacher/roster"));
    if (S.quiz !== quizAtStart) return;
    S.status = r.status;
    S.round = r.round;
    renderControls();
    renderRoster(r);
  } catch (e) {
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
    await api("/api/teacher/session", { method: "POST", body: { action, quiz: S.quiz } });
    await refreshRoster();
  } catch (_) {
    toast("Perintah gagal dikirim. Coba lagi.");
  }
}

$("t-start").addEventListener("click", () => {
  if (S.round > 0 && !confirm("Mulai sesi baru untuk " + quizTitle() + "? Semua siswa akan mulai lagi dari soal 1. Jawaban sesi sebelumnya tidak ikut dihitung.")) return;
  teacherAction("start");
});
$("t-pause").addEventListener("click", () => teacherAction("pause"));
$("t-resume").addEventListener("click", () => teacherAction("resume"));
$("t-stop").addEventListener("click", () => {
  if (confirm("Matikan sesi " + quizTitle() + "? Siswa tidak bisa mengerjakan sampai kamu membukanya lagi.")) teacherAction("stop");
});

/* ====== awal ====== */
(function init() {
  show("login");
  try {
    const saved = JSON.parse(sessionStorage.getItem("quiz.login") || "null");
    if (saved && saved.name) {
      $("in-name").value = saved.name;
      $("in-pin").value = saved.pin || "";
      $("login-form").requestSubmit();
    }
  } catch (_) {}
})();
