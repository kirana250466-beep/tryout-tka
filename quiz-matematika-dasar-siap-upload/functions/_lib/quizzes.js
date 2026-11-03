// Daftar quiz yang tersedia di menu. Untuk menambah quiz baru:
//   1) buat file bank soal (lihat questions-inggris.js sebagai contoh),
//   2) impor di sini, lalu tambahkan satu entri di QUIZZES dengan id singkat yang belum dipakai.
// Id dipakai sebagai kunci di database, jadi jangan diubah setelah ada data siswa.

import { QUESTIONS as ING, PASSAGES as ING_PASSAGES } from "./questions-inggris.js";
import { QUESTIONS as TKA } from "./questions-tka-mat.js";

export const LETTERS = ["A", "B", "C", "D", "E"];

function make(id, title, desc, questions, passages = {}) {
  return { id, title, desc, questions, passages, total: questions.length };
}

export const QUIZZES = {
  ing: make(
    "ing",
    "Bahasa Inggris",
    "25 soal berbasis teks bacaan dan grafik. Beberapa soal punya lebih dari satu jawaban benar.",
    ING,
    ING_PASSAGES
  ),
  tka: make("tka", "Matematika TKA", "30 soal pilihan ganda A sampai D: aljabar, barisan, peluang, geometri, dan statistika.", TKA),
};

export const QUIZ_IDS = Object.keys(QUIZZES);

export const isMulti = (q) => q.answer.length > 1;

// Versi untuk siswa: tanpa kunci dan tanpa pembahasan.
export function publicQuiz(quiz) {
  return {
    questions: quiz.questions.map((q) => ({
      n: q.n,
      text: q.text,
      image: q.image || null,
      options: q.options,
      passage: q.passage || null,
      multi: isMulti(q),
    })),
    passages: quiz.passages,
  };
}
