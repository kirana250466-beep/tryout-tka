// Daftar quiz yang tersedia di menu. Untuk menambah quiz baru:
//   1) buat file bank soal (lihat questions-inggris.js sebagai contoh),
//   2) impor di sini, lalu tambahkan satu entri di QUIZZES dengan id singkat yang belum dipakai.
// Id dipakai sebagai kunci di database, jadi jangan diubah setelah ada data siswa.
// Parameter terakhir make() (studentExplain) opsional: peta nomor soal -> HTML pembahasan untuk siswa.
// Quiz yang mengisinya (sekarang "ind", "snbt", "tka2", "tka3", "tka4", "pu", "pbm", "pbm2", "ppu", "ppu2", "tka7", "tka8", "litinggris", dan "litinggris2") menampilkan pembahasan ke siswa setelah soal itu dijawab.
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
import { QUESTIONS as TKA7, EXPLAIN_SISWA as TKA7_EXPLAIN } from "./questions-tka-mat7.js";
import { QUESTIONS as TKA8, EXPLAIN_SISWA as TKA8_EXPLAIN } from "./questions-tka-mat8.js";
import { QUESTIONS as LIT, PASSAGES as LIT_PASSAGES, EXPLAIN_SISWA as LIT_EXPLAIN } from "./questions-lit-inggris.js";
import { QUESTIONS as LIT2, PASSAGES as LIT2_PASSAGES, EXPLAIN_SISWA as LIT2_EXPLAIN } from "./questions-lit-inggris2.js";
import { QUESTIONS as PBM, PASSAGES as PBM_PASSAGES, EXPLAIN_SISWA as PBM_EXPLAIN } from "./questions-pbm.js";
import { QUESTIONS as PBM2, EXPLAIN_SISWA as PBM2_EXPLAIN } from "./questions-pbm2.js";
import { QUESTIONS as PPU, PASSAGES as PPU_PASSAGES, EXPLAIN_SISWA as PPU_EXPLAIN } from "./questions-ppu.js";
import { QUESTIONS as PPU2, EXPLAIN_SISWA as PPU2_EXPLAIN } from "./questions-ppu2.js";

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
  // Pembahasan guru dan siswa sama: field explain tiap soal di questions-pbm.js, diteruskan ke siswa lewat PBM_EXPLAIN.
  pbm: make(
    "pbm",
    "Pemahaman Bacaan dan Menulis",
    "20 soal TPS Pemahaman Bacaan dan Menulis berbasis 4 teks bacaan (topi baseball, sahabat dan depresi, klakson \u201ctelolet\u201d, binatang dan hewan): penulisan kata, keefektifan kalimat, kalimat inti, konjungsi, kata rujukan, judul, serta penggabungan dan perluasan kalimat. Pembahasan tampil setelah kamu menjawab.",
    PBM,
    PBM_PASSAGES,
    PBM_EXPLAIN
  ),
  // Pembahasan guru dan siswa sama: field explain tiap soal di questions-pbm2.js, diteruskan ke siswa lewat PBM2_EXPLAIN.
  pbm2: make(
    "pbm2",
    "Pemahaman Bacaan dan Menulis 2",
    "20 soal TPS Pemahaman Bacaan dan Menulis: keparalelan kalimat, urutan dan pemisahan paragraf, kata majemuk berimbuhan, ejaan dan tanda baca (EYD Edisi V), serta kalimat baku. Pembahasan tampil setelah kamu menjawab.",
    PBM2,
    {},
    PBM2_EXPLAIN
  ),
  // Pembahasan guru dan siswa sama: field explain tiap soal di questions-ppu.js, diteruskan ke siswa lewat PPU_EXPLAIN.
  ppu: make(
    "ppu",
    "Pengetahuan dan Pemahaman Umum",
    "20 soal TPS Pengetahuan dan Pemahaman Umum berbasis 4 teks bacaan (brain rot, bahasa gaul Generasi Alpha, suneung Korea Selatan, dan kasus penyandang disabilitas): reduplikasi, struktur dan keefektifan kalimat, sikap dan tujuan penulis, kepaduan paragraf, hubungan makna, imbuhan, hubungan antarkalimat, dan analisis data bahasa fiktif. Pembahasan tampil setelah kamu menjawab.",
    PPU,
    PPU_PASSAGES,
    PPU_EXPLAIN
  ),
  // Pembahasan guru dan siswa sama: field explain tiap soal di questions-ppu2.js, diteruskan ke siswa lewat PPU2_EXPLAIN.
  ppu2: make(
    "ppu2",
    "Pengetahuan dan Pemahaman Umum 2",
    "20 soal TPS Pengetahuan dan Pemahaman Umum (Tryout SNBT Naufal Academy #5), tiap soal dengan teks atau data sendiri: bahasa artifisial, strategi penalaran penulis, kelemahan penalaran, rujukan anafora dan katafora, kalimat efektif dan inti kalimat, makna kontekstual, nada penulis, serta kolokasi. Pembahasan tampil setelah kamu menjawab.",
    PPU2,
    {},
    PPU2_EXPLAIN
  ),
  // Pembahasan guru dan siswa sama: field explain tiap soal di questions-tka-mat7.js, diteruskan ke siswa lewat TKA7_EXPLAIN.
  tka7: make(
    "tka7",
    "TKA Matematika 7",
    "30 soal Try Out 5 TKA SMP Matematika (Kelas IX): barisan dan deret, fungsi dan persamaan garis, SPLDV, aritmetika sosial, bangun datar dan bangun ruang, Pythagoras, transformasi, statistika, peluang, dan skala. Sembilan soal (No. 1, 3, 7, 16, 17, 18, 20, 23, dan 27) berupa pernyataan: pilih semua yang benar. Pembahasan tampil setelah kamu menjawab.",
    TKA7,
    {},
    TKA7_EXPLAIN
  ),
  // Pembahasan guru dan siswa sama: field explain tiap soal di questions-tka-mat8.js, diteruskan ke siswa lewat TKA8_EXPLAIN.
  tka8: make(
    "tka8",
    "TKA Matematika 8",
    "17 soal Simulasi TKA Matematika SMP/MTs, elemen Bilangan (submateri Bilangan Real): operasi hitung dan estimasi, faktorisasi prima, rasio dan proporsi, perbandingan senilai dan berbalik nilai, skala, bilangan berpangkat dan akar, serta bilangan rasional dan irasional. Delapan soal (No. 2, 3, 12, 13, 14, 15, 16, dan 17) berupa pilihan ganda kompleks: pilih semua yang benar. Pembahasan tampil setelah kamu menjawab.",
    TKA8,
    {},
    TKA8_EXPLAIN
  ),
  // Pembahasan guru dan siswa sama: field explain tiap soal di questions-lit-inggris.js, diteruskan ke siswa lewat LIT_EXPLAIN.
  litinggris: make(
    "litinggris",
    "Literasi Bahasa Inggris",
    "16 soal literasi Bahasa Inggris berbasis tiga bacaan (people-pleasing dan self-validation, efek sambaran petir, dan diskusi forum tentang rajin dan malas): hubungan antar konsep, nada dan tujuan penulis, letak informasi, inferensi, parafrase, fakta dan opini, kesimpulan, kepercayaan komentar, dan arti kata. Teks bacaan yang tampil masih berupa ringkasan. Pembahasan tampil setelah kamu menjawab.",
    LIT,
    LIT_PASSAGES,
    LIT_EXPLAIN
  ),
  // Pembahasan guru dan siswa sama: field explain tiap soal di questions-lit-inggris2.js, diteruskan ke siswa lewat LIT2_EXPLAIN.
  litinggris2: make(
    "litinggris2",
    "Literasi Bahasa Inggris 2",
    "20 soal Literasi Bahasa Inggris (Tryout SNBT Naufal Academy #5) berbasis 8 bacaan: deep-sea mining, precision fermentation, jaringan jamur mikoriza, de-extinction, trophic cascade, urban vertical farming, neuroplasticity, dan kendaraan otonom. Gagasan utama, tujuan dan sikap penulis, struktur teks, rujukan kata ganti, makna kata, analogi, dan inferensi. Pembahasan tampil setelah kamu menjawab.",
    LIT2,
    LIT2_PASSAGES,
    LIT2_EXPLAIN
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
