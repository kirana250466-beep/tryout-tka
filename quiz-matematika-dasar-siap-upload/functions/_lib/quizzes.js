// Daftar quiz yang tersedia di menu. Untuk menambah quiz baru:
//   1) buat file bank soal (lihat questions-inggris.js sebagai contoh),
//   2) impor di sini, lalu tambahkan satu entri di QUIZZES dengan id singkat yang belum dipakai.
// Id dipakai sebagai kunci di database, jadi jangan diubah setelah ada data siswa.
// Parameter terakhir make() (studentExplain) opsional: peta nomor soal -> HTML pembahasan untuk siswa.
// Quiz yang mengisinya (sekarang "ind", "snbt", "tka2", "tka3", "tka4", dan "pu") menampilkan pembahasan ke siswa setelah soal itu dijawab.
// Soal yang memuat rumus atau tabel boleh punya field opsional html dan optionsHtml (lihat questions-snbt.js).

import { QUESTIONS as ING, PASSAGES as ING_PASSAGES } from "./questions-inggris.js";
import { QUESTIONS as TKA } from "./questions-tka-mat.js";
import { QUESTIONS as TKA2 } from "./questions-tka-mat2.js";
import { EXPLAIN_SISWA as TKA2_EXPLAIN } from "./pembahasan-tka-mat2.js";
import { QUESTIONS as IND, PASSAGES as IND_PASSAGES } from "./questions-indonesia.js";
import { EXPLAIN_SISWA as IND_EXPLAIN } from "./pembahasan-indonesia.js";
import { QUESTIONS as INDW, PASSAGES as INDW_PASSAGES } from "./questions-indonesia-wajib.js";
import { QUESTIONS as SNBT } from "./questions-snbt.js";
import { EXPLAIN_SISWA as SNBT_EXPLAIN } from "./pembahasan-snbt.js";
import { QUESTIONS as PU, EXPLAIN_SISWA as PU_EXPLAIN } from "./questions-penalaran-umum.js";
import { QUESTIONS as TKA3, EXPLAIN_SISWA as TKA3_EXPLAIN } from "./questions-tka-mat3.js";
import { QUESTIONS as TKA4, EXPLAIN_SISWA as TKA4_EXPLAIN } from "./questions-tka-mat4.js";

export const LETTERS = ["A", "B", "C", "D", "E"];

function make(id, title, desc, questions, passages = {}, studentExplain = null) {
  return { id, title, desc, questions, passages, total: questions.length, studentExplain };
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
  // Pembahasan pengajar ada di field explain tiap soal (hanya mode guru); pembahasan siswa bergambar di TKA2_EXPLAIN.
  tka2: make(
    "tka2",
    "TKA Matematika 2",
    "30 soal pilihan ganda A sampai D (Matematika Kelas IX SMP/MTs): bilangan, aljabar, barisan, geometri, transformasi, statistika, dan peluang. Pembahasan bergambar tampil setelah kamu menjawab.",
    TKA2,
    {},
    TKA2_EXPLAIN
  ),
  // Pembahasan guru dan siswa sama: field explain tiap soal di questions-tka-mat3.js, diteruskan ke siswa lewat TKA3_EXPLAIN.
  tka3: make(
    "tka3",
    "TKA Matematika 3",
    "30 soal pilihan ganda A sampai D: bilangan berpangkat, bentuk akar, persamaan linear, fungsi, barisan, geometri, transformasi, statistika, dan soal cerita. Empat soal (No. 10, 17, 28, dan 30) punya lebih dari satu jawaban benar. Pembahasan tampil setelah kamu menjawab.",
    TKA3,
    {},
    TKA3_EXPLAIN
  ),
  // Pembahasan guru dan siswa sama: field explain tiap soal di questions-tka-mat4.js, diteruskan ke siswa lewat TKA4_EXPLAIN.
  tka4: make(
    "tka4",
    "TKA Matematika 4",
    "20 soal pilihan ganda A sampai D (Matematika Kelas IX SMP/MTs): pola bilangan, fungsi linear, statistika, peluang, diagram Venn, geometri, transformasi, skala, dan aljabar. Pembahasan tampil setelah kamu menjawab.",
    TKA4,
    {},
    TKA4_EXPLAIN
  ),
  ind: make(
    "ind",
    "Bahasa Indonesia Lanjutan",
    "30 soal berbasis 6 teks: laporan penelitian, teks dengan diagram, cerpen, teks ilmiah, dan eksposisi. Sembilan soal punya lebih dari satu jawaban benar. Pembahasan tampil setelah kamu menjawab.",
    IND,
    IND_PASSAGES,
    IND_EXPLAIN
  ),
  // Tanpa parameter terakhir (studentExplain): siswa tidak melihat pembahasan, hanya benar/salah.
  indw: make(
    "indw",
    "Bahasa Indonesia Wajib",
    "30 soal berbasis teks bacaan: sinonim dan makna kata, isi bacaan, fakta, gagasan utama, dan judul. Empat soal berupa pilihan ganda kompleks (pilih semua yang tepat).",
    INDW,
    INDW_PASSAGES
  ),
  // Pembahasan pengajar ada di field explain tiap soal (hanya mode guru); pembahasan siswa bergambar di SNBT_EXPLAIN.
  snbt: make(
    "snbt",
    "SNBT Kuantitatif",
    "20 soal Pengetahuan Kuantitatif (Tryout SNBT Naufal Academy #5): matriks, fungsi, trigonometri, geometri, statistika, peluang, dan aritmetika sosial. Pembahasan bergambar tampil setelah kamu menjawab.",
    SNBT,
    {},
    SNBT_EXPLAIN
  ),
  // Pembahasan guru dan siswa sama: field explain tiap soal di questions-penalaran-umum.js, diteruskan ke siswa lewat PU_EXPLAIN.
  pu: make(
    "pu",
    "Penalaran Umum",
    "30 soal TPS Penalaran Umum: penarikan simpulan (modus ponens, modus tollens, silogisme, pernyataan berkuantor), logika analitik, penalaran kuantitatif, dan pola bilangan. Dua soal (No. 3 dan 18) punya lebih dari satu jawaban benar. Pembahasan tampil setelah kamu menjawab.",
    PU,
    {},
    PU_EXPLAIN
  ),
};

export const QUIZ_IDS = Object.keys(QUIZZES);

export const isMulti = (q) => q.answer.length > 1;

// Pembahasan untuk siswa (HTML) atau null bila quiz ini tidak punya. Hanya dipanggil dari jalur
// yang sudah memastikan siswa itu sudah menjawab soal nomor n.
export const studentExplainOf = (quiz, n) => (quiz.studentExplain && quiz.studentExplain[n]) || null;

// Versi untuk siswa: tanpa kunci dan tanpa pembahasan.
export function publicQuiz(quiz) {
  return {
    questions: quiz.questions.map((q) => ({
      n: q.n,
      text: q.text,
      html: q.html || null,
      image: q.image || null,
      options: q.options,
      optionsHtml: q.optionsHtml || null,
      passage: q.passage || null,
      multi: isMulti(q),
    })),
    passages: quiz.passages,
  };
}
