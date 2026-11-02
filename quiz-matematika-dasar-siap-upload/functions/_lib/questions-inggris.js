// Bank soal Bahasa Inggris. File ini hanya dibaca server (Worker), jadi kunci jawaban
// dan pembahasan tidak pernah dikirim ke siswa sebelum mereka menjawab.
//
// Cara mengisi:
// 1. Soal bacaan (reading): tulis teksnya sekali di PASSAGES, lalu panggil dengan `passage: "namaTeks"`
//    di setiap soal yang memakai teks itu. Pisahkan paragraf dengan satu baris kosong.
// 2. `options` boleh 2 sampai 5 pilihan (huruf A, B, C, ... mengikuti urutan).
// 3. `answer` = huruf kunci jawaban. `explain` = pembahasan (HTML sederhana, hanya dilihat guru).
// 4. Nomor soal mengikuti urutan di daftar QUESTIONS. Tidak perlu menulis nomor.
// 5. Gambar (opsional): `image` untuk soal dan `explainImage` untuk pembahasan, file-nya di public/img.
//
// Selama QUESTIONS masih kosong, kuis Bahasa Inggris di menu tampil "Soal belum diisi"
// dan belum bisa dibuka. Begitu diisi dan di-deploy, kuis otomatis aktif.

export const PASSAGES = {
  // teks1: {
  //   title: "Text 1",
  //   text: `Paragraf pertama.

  // Paragraf kedua.`,
  // },
};

export const QUESTIONS = [
  // {
  //   passage: "teks1",
  //   text: "What is the main idea of the text?",
  //   options: ["Pilihan A", "Pilihan B", "Pilihan C", "Pilihan D", "Pilihan E"],
  //   answer: "B",
  //   explain: `
  // <p>Penjelasan dengan bahasa sederhana.</p>
  // <p class="key">Intinya: ...</p>`,
  // },
];
