// Daftar kuis yang tampil di menu. Untuk menambah kuis baru:
// 1. buat file bank soal baru di folder ini (contoh: questions-fisika.js),
// 2. impor di bawah, lalu tambahkan satu objek ke DEFINITIONS.
// Kuis tanpa soal tampil di menu sebagai "Soal belum diisi" dan belum bisa dibuka.

import { QUESTIONS as MATEMATIKA } from "./questions-matematika.js";
import { QUESTIONS as INGGRIS, PASSAGES as INGGRIS_PASSAGES } from "./questions-inggris.js";

export const LETTERS = ["A", "B", "C", "D", "E"];

const DEFINITIONS = [
  {
    id: "matematika", // dipakai di alamat (#matematika) dan di database, jangan diubah setelah dipakai siswa
    title: "Matematika Dasar",
    subtitle: "Rasio, persen, geometri, dan logika bilangan.",
    icon: "π",
    lang: "id",
    questions: MATEMATIKA,
  },
  {
    id: "inggris",
    title: "Bahasa Inggris",
    subtitle: "Membaca dan memahami teks bahasa Inggris.",
    icon: "Aa",
    lang: "en",
    questions: INGGRIS,
    passages: INGGRIS_PASSAGES,
  },
];

function build(def) {
  const passages = def.passages || {};
  const questions = def.questions.map((q, i) => {
    let passage = null;
    if (q.passage) {
      const p = passages[q.passage];
      if (p) passage = { title: p.title || "", text: p.text };
      else console.warn(`[${def.id}] soal ${i + 1}: teks bacaan "${q.passage}" tidak ditemukan di PASSAGES`);
    }
    return { ...q, n: i + 1, passage };
  });
  return {
    id: def.id,
    title: def.title,
    subtitle: def.subtitle,
    icon: def.icon,
    lang: def.lang || "id",
    questions,
    total: questions.length,
  };
}

export const QUIZ_LIST = DEFINITIONS.map(build);
const BY_ID = new Map(QUIZ_LIST.map((q) => [q.id, q]));

export function getQuiz(id) {
  return BY_ID.get(String(id || "").toLowerCase()) || null;
}

// Info ringan untuk menu dan judul halaman (tanpa soal).
export function quizInfo(quiz) {
  return { id: quiz.id, title: quiz.title, subtitle: quiz.subtitle, icon: quiz.icon, lang: quiz.lang, total: quiz.total };
}

// Versi untuk siswa: tanpa kunci dan tanpa pembahasan.
export function publicQuestions(quiz) {
  return quiz.questions.map((q) => ({
    n: q.n,
    text: q.text,
    image: q.image || null,
    passage: q.passage,
    options: q.options,
  }));
}
