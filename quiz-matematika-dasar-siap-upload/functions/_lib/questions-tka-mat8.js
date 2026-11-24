// Bank soal TKA Matematika 8 (quiz id "tka8"): 17 soal dari "TKA_17.pdf" (Simulasi TKA Matematika SMP/MTs, Elemen Bilangan,
// submateri Bilangan Real), pilihan A sampai D. Materi: operasi hitung dalam transaksi, estimasi, faktorisasi prima, rasio dan proporsi,
// perbandingan senilai dan berbalik nilai, membandingkan bilangan rasional, operasi bilangan bulat, diskon bertahap, laju perubahan,
// skala, bilangan berpangkat dan akar, serta bilangan rasional dan irasional.
//
// Pembahasan guru dan siswa SAMA:
//  - Isi pembahasan ada di field explain tiap soal (HTML). Mode guru (login "Ferdi") menampilkannya langsung.
//  - Siswa menerima isi yang sama lewat EXPLAIN_SISWA di bawah file ini (dibuat otomatis dari field explain),
//    tepat setelah soal itu dijawab (lihat studentExplainOf di quizzes.js). Mengubah explain berarti mengubah keduanya.
//
// PENTING, soal yang hilang: PDF berjudul "20 soal", tetapi halaman soalnya hanya memuat nomor 1-6 dan 10-20. Soal nomor 7, 8, dan 9
// tidak ada di PDF (halaman pembahasan hanya menyebut jawabannya: no. 7 = C (128), no. 8 = 9,6 m, no. 9 = 7,25 x 10^-5), jadi tidak dibuat
// dan tidak ditebak. Karena aplikasi menampilkan "Soal n dari total", nomor di website dibuat berurutan 1 sampai 17:
//   website 1-6 = PDF 1-6, website 7-17 = PDF 10-20.
// Bila halaman yang hilang ditemukan, soal 7-9 bisa ditambahkan dan nomornya disusun ulang.
//
// Catatan kunci (kunci di PDF tidak cocok dengan soal yang tercetak, kunci di sini dihitung ulang dari teks soal):
//  - Website no. 3 (PDF 3): pilihan soal 6, 12, 18, 36, sedangkan pembahasan PDF menyebut "6, 12, dan 36; 72 bukan" dengan kunci A, B, C.
//    Semua pilihan (6, 12, 18, 36) membagi FPB = 36, jadi kuncinya A, B, C, D.
//  - Website no. 4 (PDF 4): soal menyebut perbandingan konsentrat : air = 2 : 5 dengan air 2,5 liter, sedangkan pembahasan PDF memakai 3 : 5
//    dan menjawab 4,0 liter (C). Untuk soal yang tercetak (2 : 5): konsentrat 1 liter + air 2,5 liter = 3,5 liter, kunci B.
//    Bila soal aslinya 3 : 5, ubah teks soal menjadi 3 : 5 dan kunci menjadi C.
//  - Website no. 6 (PDF 6): pembahasan PDF membahas soal lain (5/8 dan 2/3), tidak cocok dengan tabel Rani 3/8, Dito 5/12, Siska 7/16, Arman 2/5.
//    Pembahasan ditulis baru: 7/16 terbesar, kunci C (Siska).
//  - Website no. 15 (PDF 18): pembahasan PDF memuat koreksi sendiri ("A dan C benar ... koreksi kunci akhir: A, B, dan C"). Hasil hitung
//    11, 24, 21 memang membuat A, B, C benar dan D salah. Pembahasan dirapikan tanpa kalimat koreksi.
//  - Website no. 12 (PDF 15), 13 (PDF 16), 14 (PDF 17), 16 (PDF 19), dan 17 (PDF 20): PDF tidak memuat kunci per huruf (hanya perhitungan),
//    kunci diturunkan dari perhitungan itu.
//  - Semua kunci sudah dihitung ulang satu per satu: 17 dari 17 cocok dengan kunci di file ini.
//
// Catatan penyesuaian format:
//  - PDF menyebut "Soal 1-14 dan 18: satu jawaban" dan "Soal 15-17: pilih semua", tetapi kalimat soal 2, 3, dan 18 sendiri berbunyi
//    "Pilih semua ...". Kalimat soal yang dipakai. Pilihan ganda kompleks (pilih semua yang benar, benar hanya jika sama persis dengan kunci):
//    website no. 2, 3, 12, 13, 14, 15, 16, 17.
//  - Website no. 16 (PDF 19, tabel rasional/irasional) dan no. 17 (PDF 20, tabel kategori senilai / berbalik nilai / tidak dapat dikategorikan)
//    di PDF berupa tabel kategori per baris. Website hanya mendukung pilihan ganda, jadi dijadikan "pilih semua bilangan yang rasional"
//    (kunci A, C) dan "pilih semua situasi yang berbalik nilai" (kunci B, D). Kategori semua baris tetap dijelaskan di pembahasan.
//  - Judul tiap soal di PDF (mis. "Skala") tidak ditampilkan di soal; topiknya muncul di pembahasan ("Topik: ..."). Soal PDF 17 dan 18 tidak
//    punya judul, topiknya diisi "Bilangan real" (submateri PDF).
//  - Rumus ditulis dengan HTML biasa tanpa KaTeX: pecahan bertumpuk, akar dengan garis atas, dan pangkat dengan superskrip (field html dan
//    optionsHtml). Field text dan options berisi versi teks biasa.
//  - Gambar keran dan ember (PDF 12, website no. 9) dipotong dari halaman PDF: img/tka8-q09.png. Tabel dibuat ulang sebagai tabel HTML.
//  - Pada pembahasan soal pilihan ganda kompleks, penilaian tiap pilihan (kelas ev) berwarna hijau untuk pilihan yang benar dan merah muda
//    untuk lainnya. Kotak "Jadi, jawaban yang tepat adalah ..." ditambahkan di akhir tiap pembahasan seperti quiz lain.
//
// Kunci (website no. 1 sampai 17): C | A,B,C | A,B,C,D | B | C | C | C | B | C | C | D | A,B,D | B,C | A,B,C | A,B,C | A,C | B,D
//
// File ini hanya dibaca server, jadi kunci dan pembahasan tidak dikirim ke siswa sebelum mereka menjawab.

export const QUESTIONS = [
  {
    "n": 1,
    "text": "Sebuah toko bahan kue menjual tepung terigu seharga Rp18.500,00 per kg dan gula pasir seharga Rp24.000,00 per kg. Seorang pembeli mengambil 2,4 kg tepung dan 1,6 kg gula.\nJumlah yang harus dibayar pembeli adalah ....",
    "html": "<div class=\"qp\">Sebuah toko bahan kue menjual tepung terigu seharga Rp18.500,00 per kg dan gula pasir seharga Rp24.000,00 per kg. Seorang pembeli mengambil 2,4 kg tepung dan 1,6 kg gula.</div><div class=\"qp\">Jumlah yang harus dibayar pembeli adalah ....</div>",
    "options": [
      "Rp78.600,00",
      "Rp80.400,00",
      "Rp82.800,00",
      "Rp84.200,00"
    ],
    "answer": "C",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: C</b> · Topik: Operasi aritmetika dalam transaksi</p>\n<ul><li>Tepung: 2,4 × Rp18.500 = Rp44.400</li><li>Gula: 1,6 × Rp24.000 = Rp38.400</li><li>Total: Rp44.400 + Rp38.400 = <b>Rp82.800</b></li></ul>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah C.</b></p></section>"
  },
  {
    "n": 2,
    "text": "Harga beras di sebuah toko adalah Rp12.750,00 per kg. Seorang pedagang membeli 19,6 kg beras. Ia ingin memperkirakan total biaya sebelum menghitungnya secara tepat.\nPilih semua pernyataan yang benar.",
    "html": "<div class=\"qp\">Harga beras di sebuah toko adalah Rp12.750,00 per kg. Seorang pedagang membeli 19,6 kg beras. Ia ingin memperkirakan total biaya sebelum menghitungnya secara tepat.</div><div class=\"qp\">Pilih semua pernyataan yang benar.</div>",
    "options": [
      "Total biaya kurang dari Rp260.000,00.",
      "Total biaya lebih dari Rp240.000,00.",
      "Perkiraan menghasilkan Rp250.000,00.",
      "Total biaya mendekati Rp230.000,00."
    ],
    "answer": "ABC",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: A, B, C (pilihan A, B, dan C)</b> · Topik: Estimasi hasil perhitungan</p>\n<p>Biaya tepatnya: 19,6 × Rp12.750 = <b>Rp249.900</b>. Untuk memperkirakan, bulatkan 19,6 kg menjadi 20 kg dan Rp12.750 menjadi Rp12.500: 20 × Rp12.500 = Rp250.000.</p>\n<p class=\"ev ok\"><b>A. Pernyataan benar.</b> Rp249.900 lebih kecil dari Rp260.000.</p>\n<p class=\"ev ok\"><b>B. Pernyataan benar.</b> Rp249.900 lebih besar dari Rp240.000.</p>\n<p class=\"ev ok\"><b>C. Pernyataan benar.</b> Perkiraan 20 × Rp12.500 memang menghasilkan Rp250.000.</p>\n<p class=\"ev no\"><b>D. Pernyataan salah.</b> Biaya tepatnya Rp249.900, selisihnya sekitar Rp19.900 dari Rp230.000, jadi tidak mendekati Rp230.000.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah A, B, dan C.</b></p></section>"
  },
  {
    "n": 3,
    "text": "Tiga bilangan adalah 180, 252, dan 396. Seorang siswa ingin menentukan bilangan yang merupakan faktor persekutuan ketiganya dengan menggunakan faktorisasi prima.\nPilih semua bilangan berikut yang merupakan faktor persekutuan ketiga bilangan tersebut.",
    "html": "<div class=\"qp\">Tiga bilangan adalah 180, 252, dan 396. Seorang siswa ingin menentukan bilangan yang merupakan faktor persekutuan ketiganya dengan menggunakan faktorisasi prima.</div><div class=\"qp\">Pilih semua bilangan berikut yang merupakan faktor persekutuan ketiga bilangan tersebut.</div>",
    "options": [
      "6",
      "12",
      "18",
      "36"
    ],
    "answer": "ABCD",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: A, B, C, D (semua pilihan benar)</b> · Topik: Faktorisasi prima</p>\n<ul><li>180 = 2<sup>2</sup> × 3<sup>2</sup> × 5</li><li>252 = 2<sup>2</sup> × 3<sup>2</sup> × 7</li><li>396 = 2<sup>2</sup> × 3<sup>2</sup> × 11</li></ul>\n<p>Faktor prima yang sama pada ketiganya adalah 2<sup>2</sup> × 3<sup>2</sup> = 36, jadi FPB-nya 36. Faktor persekutuan ketiga bilangan adalah semua faktor dari 36, yaitu 1, 2, 3, 4, 6, 9, 12, 18, dan 36.</p>\n<p class=\"ev ok\"><b>A. Faktor persekutuan.</b> 6 membagi 36. Cek: 180 ÷ 6 = 30, 252 ÷ 6 = 42, 396 ÷ 6 = 66.</p>\n<p class=\"ev ok\"><b>B. Faktor persekutuan.</b> 12 membagi 36. Cek: 180 ÷ 12 = 15, 252 ÷ 12 = 21, 396 ÷ 12 = 33.</p>\n<p class=\"ev ok\"><b>C. Faktor persekutuan.</b> 18 membagi 36. Cek: 180 ÷ 18 = 10, 252 ÷ 18 = 14, 396 ÷ 18 = 22.</p>\n<p class=\"ev ok\"><b>D. Faktor persekutuan.</b> 36 adalah FPB-nya sendiri. Cek: 180 ÷ 36 = 5, 252 ÷ 36 = 7, 396 ÷ 36 = 11.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah A, B, C, dan D.</b></p></section>"
  },
  {
    "n": 4,
    "text": "Sebuah usaha minuman menggunakan konsentrat dan air dengan perbandingan volume 2 : 5. Untuk satu kali produksi, tersedia 2,5 liter air. Seluruh air akan digunakan dengan perbandingan yang tetap.\nVolume minuman yang dapat dibuat adalah ....",
    "html": "<div class=\"qp\">Sebuah usaha minuman menggunakan konsentrat dan air dengan perbandingan volume 2 : 5. Untuk satu kali produksi, tersedia 2,5 liter air. Seluruh air akan digunakan dengan perbandingan yang tetap.</div><div class=\"qp\">Volume minuman yang dapat dibuat adalah ....</div>",
    "options": [
      "3,0 liter",
      "3,5 liter",
      "4,0 liter",
      "4,5 liter"
    ],
    "answer": "B",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: B</b> · Topik: Rasio dan proporsi</p>\n<ul><li>Air = 5 bagian = 2,5 liter, jadi 1 bagian = 0,5 liter</li><li>Konsentrat = 2 bagian = 2 × 0,5 = 1 liter</li><li>Volume minuman = 1 + 2,5 = <b>3,5 liter</b> (7 bagian × 0,5 liter)</li></ul>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah B.</b></p></section>"
  },
  {
    "n": 5,
    "text": "Sebuah pekerjaan dapat diselesaikan oleh 6 pekerja dalam 15 hari. Kemampuan setiap pekerja dianggap sama dan seluruh pekerja bekerja dengan durasi yang sama setiap hari.\nJika pekerjaan tersebut dikerjakan oleh 8 pekerja dengan produktivitas yang tetap, waktu yang diperlukan adalah ....",
    "html": "<div class=\"qp\">Sebuah pekerjaan dapat diselesaikan oleh 6 pekerja dalam 15 hari. Kemampuan setiap pekerja dianggap sama dan seluruh pekerja bekerja dengan durasi yang sama setiap hari.</div><div class=\"qp\">Jika pekerjaan tersebut dikerjakan oleh 8 pekerja dengan produktivitas yang tetap, waktu yang diperlukan adalah ....</div>",
    "options": [
      "9 hari",
      "10 hari",
      "11,25 hari",
      "12,5 hari"
    ],
    "answer": "C",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: C</b> · Topik: Perbandingan berbalik nilai</p>\n<p>Banyak pekerja dan waktu berbanding terbalik, jadi hasil kali keduanya tetap.</p>\n<ul><li>Beban kerja: 6 × 15 = 90 pekerja-hari</li><li>Waktu untuk 8 pekerja: 90 ÷ 8 = <b>11,25 hari</b></li></ul>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah C.</b></p></section>"
  },
  {
    "n": 6,
    "text": "Empat siswa mencatat bagian dari suatu pekerjaan yang telah diselesaikan.\nNama Siswa | Bagian Pekerjaan yang Diselesaikan\nRani | 3/8\nDito | 5/12\nSiska | 7/16\nArman | 2/5\nSiswa yang mencatat bagian pekerjaan paling besar adalah ....",
    "html": "<div class=\"qp\">Empat siswa mencatat bagian dari suatu pekerjaan yang telah diselesaikan.</div><table class=\"qtable\"><thead><tr><th>Nama Siswa</th><th>Bagian Pekerjaan yang Diselesaikan</th></tr></thead><tbody><tr><td>Rani</td><td><span style=\"display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;line-height:1.2;margin:0 3px\"><span style=\"padding:0 5px;border-bottom:1.5px solid currentColor\">3</span><span style=\"padding:0 5px\">8</span></span></td></tr><tr><td>Dito</td><td><span style=\"display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;line-height:1.2;margin:0 3px\"><span style=\"padding:0 5px;border-bottom:1.5px solid currentColor\">5</span><span style=\"padding:0 5px\">12</span></span></td></tr><tr><td>Siska</td><td><span style=\"display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;line-height:1.2;margin:0 3px\"><span style=\"padding:0 5px;border-bottom:1.5px solid currentColor\">7</span><span style=\"padding:0 5px\">16</span></span></td></tr><tr><td>Arman</td><td><span style=\"display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;line-height:1.2;margin:0 3px\"><span style=\"padding:0 5px;border-bottom:1.5px solid currentColor\">2</span><span style=\"padding:0 5px\">5</span></span></td></tr></tbody></table><div class=\"qp\">Siswa yang mencatat bagian pekerjaan paling besar adalah ....</div>",
    "options": [
      "Rani",
      "Dito",
      "Siska",
      "Arman"
    ],
    "answer": "C",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: C</b> · Topik: Membandingkan bilangan rasional</p>\n<p>Samakan penyebutnya (KPK dari 8, 12, 16, dan 5 adalah 240) atau ubah ke desimal.</p>\n<ul><li>Rani: 3/8 = 90/240 = 0,375</li><li>Dito: 5/12 = 100/240 ≈ 0,417</li><li>Siska: 7/16 = 105/240 = 0,4375</li><li>Arman: 2/5 = 96/240 = 0,4</li></ul>\n<p>Bagian terbesar adalah 7/16, yaitu milik <b>Siska</b>.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah C.</b></p></section>"
  },
  {
    "n": 7,
    "text": "Pada pukul 05.00, suhu di sebuah daerah pegunungan tercatat −3 °C. Menjelang siang, suhu naik 8 °C. Sore harinya suhu turun 11 °C, lalu malam hari naik lagi 6 °C.\nSuhu pada malam hari adalah ....",
    "html": "<div class=\"qp\">Pada pukul 05.00, suhu di sebuah daerah pegunungan tercatat −3 °C. Menjelang siang, suhu naik 8 °C. Sore harinya suhu turun 11 °C, lalu malam hari naik lagi 6 °C.</div><div class=\"qp\">Suhu pada malam hari adalah ....</div>",
    "options": [
      "−2 °C",
      "−1 °C",
      "0 °C",
      "1 °C"
    ],
    "answer": "C",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: C</b> · Topik: Operasi bilangan bulat</p>\n<ul><li>−3 + 8 = 5</li><li>5 − 11 = −6</li><li>−6 + 6 = <b>0</b></li></ul>\n<p>Jadi, suhu pada malam hari adalah 0 °C.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah C.</b></p></section>"
  },
  {
    "n": 8,
    "text": "Sebuah jaket berharga Rp250.000,00. Saat promosi, toko memberikan potongan 20%. Setelah potongan pertama diterapkan, pembeli memperoleh potongan tambahan 10% dari harga setelah diskon pertama.\nHarga akhir jaket adalah ....",
    "html": "<div class=\"qp\">Sebuah jaket berharga Rp250.000,00. Saat promosi, toko memberikan potongan 20%. Setelah potongan pertama diterapkan, pembeli memperoleh potongan tambahan 10% dari harga setelah diskon pertama.</div><div class=\"qp\">Harga akhir jaket adalah ....</div>",
    "options": [
      "Rp175.000,00",
      "Rp180.000,00",
      "Rp185.000,00",
      "Rp200.000,00"
    ],
    "answer": "B",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: B</b> · Topik: Perubahan harga bertahap</p>\n<ul><li>Setelah diskon 20%: Rp250.000 × 80% = Rp200.000</li><li>Diskon tambahan 10% dari harga itu: 10% × Rp200.000 = Rp20.000</li><li>Harga akhir: Rp200.000 − Rp20.000 = <b>Rp180.000</b></li></ul>\n<p>Dua diskon bertahap tidak sama dengan diskon 30% (yang akan menghasilkan Rp175.000), karena diskon kedua dihitung dari harga yang sudah turun.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah B.</b></p></section>"
  },
  {
    "n": 9,
    "text": "Sebuah keran mengalirkan air sebanyak 18 liter dalam waktu 3 menit. Dengan debit yang tetap, keran tersebut dibuka selama 7,5 menit.\nWaktu (menit) | Volume Air (liter)\n3 | 18\n7,5 | …\nVolume air yang mengalir selama waktu tersebut adalah ....",
    "html": "<div class=\"qp\">Sebuah keran mengalirkan air sebanyak 18 liter dalam waktu 3 menit. Dengan debit yang tetap, keran tersebut dibuka selama 7,5 menit.</div><div class=\"qp\"><img class=\"qimg\" src=\"img/tka8-q09.png\" alt=\"Keran mengalirkan air ke dalam ember\" style=\"max-width:260px\"></div><table class=\"qtable\"><thead><tr><th>Waktu (menit)</th><th>Volume Air (liter)</th></tr></thead><tbody><tr><td>3</td><td>18</td></tr><tr><td>7,5</td><td>…</td></tr></tbody></table><div class=\"qp\">Volume air yang mengalir selama waktu tersebut adalah ....</div>",
    "options": [
      "36 liter",
      "40 liter",
      "45 liter",
      "54 liter"
    ],
    "answer": "C",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: C</b> · Topik: Laju perubahan</p>\n<ul><li>Debit = 18 ÷ 3 = 6 liter/menit</li><li>Volume dalam 7,5 menit: 6 × 7,5 = <b>45 liter</b></li></ul>\n<p>Debit tetap, jadi volume air berbanding lurus dengan waktu.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah C.</b></p></section>"
  },
  {
    "n": 10,
    "text": "Pada peta berskala 1 : 250.000, jarak antara Kota P dan Kota Q adalah 7,2 cm. Sebuah kendaraan menempuh perjalanan dari Kota P ke Kota Q melalui jalur yang sesuai dengan jarak pada peta tersebut.\nJarak kedua kota sebenarnya adalah ....",
    "html": "<div class=\"qp\">Pada peta berskala 1 : 250.000, jarak antara Kota P dan Kota Q adalah 7,2 cm. Sebuah kendaraan menempuh perjalanan dari Kota P ke Kota Q melalui jalur yang sesuai dengan jarak pada peta tersebut.</div><div class=\"qp\">Jarak kedua kota sebenarnya adalah ....</div>",
    "options": [
      "1,8 km",
      "7,2 km",
      "18 km",
      "180 km"
    ],
    "answer": "C",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: C</b> · Topik: Skala</p>\n<p>Skala 1 : 250.000 berarti 1 cm pada peta mewakili 250.000 cm di lapangan.</p>\n<ul><li>7,2 × 250.000 = 1.800.000 cm</li><li>1.800.000 cm = 18.000 m = <b>18 km</b></li></ul>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah C.</b></p></section>"
  },
  {
    "n": 11,
    "text": "Perhatikan bilangan berikut.\n7,05;   √50;   7,1;   50/7\nBilangan yang nilainya paling besar adalah ....",
    "html": "<div class=\"qp\">Perhatikan bilangan berikut.</div><div class=\"qp\">7,05;&nbsp;&nbsp; √<span style=\"border-top:1.5px solid currentColor;padding:0 2px;margin-left:1px\">50</span>;&nbsp;&nbsp; 7,1;&nbsp;&nbsp; <span style=\"display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;line-height:1.2;margin:0 3px\"><span style=\"padding:0 5px;border-bottom:1.5px solid currentColor\">50</span><span style=\"padding:0 5px\">7</span></span></div><div class=\"qp\">Bilangan yang nilainya paling besar adalah ....</div>",
    "options": [
      "7,05",
      "√50",
      "7,1",
      "50/7"
    ],
    "optionsHtml": [
      "7,05",
      "√<span style=\"border-top:1.5px solid currentColor;padding:0 2px;margin-left:1px\">50</span>",
      "7,1",
      "<span style=\"display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;line-height:1.2;margin:0 3px\"><span style=\"padding:0 5px;border-bottom:1.5px solid currentColor\">50</span><span style=\"padding:0 5px\">7</span></span>"
    ],
    "answer": "D",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: D</b> · Topik: Perbandingan dan sifat bilangan</p>\n<ul><li>50/7 ≈ 7,143</li><li>√50 ≈ 7,071 (karena 7,07 × 7,07 ≈ 49,98)</li><li>7,1</li><li>7,05</li></ul>\n<p>Urutan dari terbesar: 50/7 &gt; 7,1 &gt; √50 &gt; 7,05. Jadi, bilangan terbesar adalah 50/7.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah D.</b></p></section>"
  },
  {
    "n": 12,
    "text": "Sebuah dapur menggunakan 350 gram tepung untuk membuat 5 porsi kue dengan ukuran yang sama. Jumlah tepung dianggap berbanding lurus dengan jumlah porsi.\nPilih semua pernyataan yang benar.",
    "html": "<div class=\"qp\">Sebuah dapur menggunakan 350 gram tepung untuk membuat 5 porsi kue dengan ukuran yang sama. Jumlah tepung dianggap berbanding lurus dengan jumlah porsi.</div><div class=\"qp\">Pilih semua pernyataan yang benar.</div>",
    "options": [
      "Untuk 8 porsi diperlukan 560 gram tepung.",
      "Untuk 10 porsi diperlukan 700 gram tepung.",
      "Untuk 12 porsi diperlukan 800 gram tepung.",
      "Dengan 1,05 kg tepung dapat dibuat 15 porsi."
    ],
    "answer": "ABD",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: A, B, D (pilihan A, B, dan D)</b> · Topik: Perbandingan senilai</p>\n<p>Tepung per porsi = 350 ÷ 5 = <b>70 gram</b>.</p>\n<p class=\"ev ok\"><b>A. Pernyataan benar.</b> 8 × 70 = 560 gram, sesuai pernyataan.</p>\n<p class=\"ev ok\"><b>B. Pernyataan benar.</b> 10 × 70 = 700 gram, sesuai pernyataan.</p>\n<p class=\"ev no\"><b>C. Pernyataan salah.</b> 12 × 70 = 840 gram, bukan 800 gram.</p>\n<p class=\"ev ok\"><b>D. Pernyataan benar.</b> 1,05 kg = 1.050 gram, dan 1.050 ÷ 70 = 15 porsi, sesuai pernyataan.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah A, B, dan D.</b></p></section>"
  },
  {
    "n": 13,
    "text": "Sebuah toko menjual 398 kotak alat tulis dengan harga Rp51.000,00 per kotak. Sebelum menghitung jumlah pendapatan secara tepat, pemilik toko membuat perkiraan.\nPilih semua pernyataan yang benar.",
    "html": "<div class=\"qp\">Sebuah toko menjual 398 kotak alat tulis dengan harga Rp51.000,00 per kotak. Sebelum menghitung jumlah pendapatan secara tepat, pemilik toko membuat perkiraan.</div><div class=\"qp\">Pilih semua pernyataan yang benar.</div>",
    "options": [
      "Pendapatan tepatnya kurang dari Rp20.000.000,00.",
      "Pendapatan tepatnya lebih dari Rp20.000.000,00.",
      "Perkiraan 400 × Rp50.000,00 menghasilkan Rp20.000.000,00.",
      "Pendapatan tepatnya lebih dari Rp21.000.000,00."
    ],
    "answer": "BC",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: B, C (pilihan B dan C)</b> · Topik: Estimasi dan kewajaran hasil</p>\n<ul><li>Pendapatan tepat: 398 × Rp51.000 = <b>Rp20.298.000</b></li><li>Perkiraan: 400 × Rp50.000 = Rp20.000.000</li></ul>\n<p class=\"ev no\"><b>A. Pernyataan salah.</b> Rp20.298.000 tidak kurang dari Rp20.000.000.</p>\n<p class=\"ev ok\"><b>B. Pernyataan benar.</b> Rp20.298.000 lebih besar dari Rp20.000.000.</p>\n<p class=\"ev ok\"><b>C. Pernyataan benar.</b> 400 × Rp50.000 memang menghasilkan Rp20.000.000.</p>\n<p class=\"ev no\"><b>D. Pernyataan salah.</b> Rp20.298.000 lebih kecil dari Rp21.000.000.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah B dan C.</b></p></section>"
  },
  {
    "n": 14,
    "text": "Seorang siswa menuliskan empat pernyataan berikut saat mengerjakan latihan bilangan real. Pilih semua pernyataan yang benar.",
    "html": "<div class=\"qp\">Seorang siswa menuliskan empat pernyataan berikut saat mengerjakan latihan bilangan real. Pilih semua pernyataan yang benar.</div>",
    "options": [
      "2³ × 2⁴ = 2⁷",
      "√81 + √16 = 13",
      "10⁻³ = 0,001",
      "√2 merupakan bilangan rasional."
    ],
    "optionsHtml": [
      "2<sup>3</sup> × 2<sup>4</sup> = 2<sup>7</sup>",
      "√<span style=\"border-top:1.5px solid currentColor;padding:0 2px;margin-left:1px\">81</span> + √<span style=\"border-top:1.5px solid currentColor;padding:0 2px;margin-left:1px\">16</span> = 13",
      "10<sup>-3</sup> = 0,001",
      "√<span style=\"border-top:1.5px solid currentColor;padding:0 2px;margin-left:1px\">2</span> merupakan bilangan rasional."
    ],
    "answer": "ABC",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: A, B, C (pilihan A, B, dan C)</b> · Topik: Bilangan real</p>\n<p>Gunakan aturan pangkat dan sifat akar.</p>\n<p class=\"ev ok\"><b>A. Pernyataan benar.</b> Pada perkalian bilangan berpangkat dengan bilangan pokok sama, pangkatnya dijumlahkan: 2<sup>3+4</sup> = 2<sup>7</sup>.</p>\n<p class=\"ev ok\"><b>B. Pernyataan benar.</b> √81 = 9 dan √16 = 4, jadi 9 + 4 = 13.</p>\n<p class=\"ev ok\"><b>C. Pernyataan benar.</b> 10<sup>-3</sup> = 1/10<sup>3</sup> = 1/1.000 = 0,001.</p>\n<p class=\"ev no\"><b>D. Pernyataan salah.</b> √2 ≈ 1,41421… adalah desimal yang tidak berhenti dan tidak berulang, jadi irasional, bukan rasional.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah A, B, dan C.</b></p></section>"
  },
  {
    "n": 15,
    "text": "Seorang siswa mengerjakan tiga operasi bilangan berikut.\n1. (2³ + √144 − 3²)\n2. (5² − √81 + 2³)\n3. (√196 + 2⁴ − 3²)\nPilih semua pernyataan yang benar berdasarkan hasil perhitungan tersebut.",
    "html": "<div class=\"qp\">Seorang siswa mengerjakan tiga operasi bilangan berikut.</div><div class=\"qp\">1. (2<sup>3</sup> + √<span style=\"border-top:1.5px solid currentColor;padding:0 2px;margin-left:1px\">144</span> − 3<sup>2</sup>)<br>2. (5<sup>2</sup> − √<span style=\"border-top:1.5px solid currentColor;padding:0 2px;margin-left:1px\">81</span> + 2<sup>3</sup>)<br>3. (√<span style=\"border-top:1.5px solid currentColor;padding:0 2px;margin-left:1px\">196</span> + 2<sup>4</sup> − 3<sup>2</sup>)</div><div class=\"qp\">Pilih semua pernyataan yang benar berdasarkan hasil perhitungan tersebut.</div>",
    "options": [
      "Hasil operasi nomor 1 adalah 11.",
      "Hasil operasi nomor 2 adalah 24.",
      "Hasil operasi nomor 3 adalah 21.",
      "Hasil operasi nomor 1 lebih besar daripada hasil operasi nomor 2."
    ],
    "answer": "ABC",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: A, B, C (pilihan A, B, dan C)</b> · Topik: Bilangan real</p>\n<ul><li>Nomor 1: 2<sup>3</sup> + √144 − 3<sup>2</sup> = 8 + 12 − 9 = 11</li><li>Nomor 2: 5<sup>2</sup> − √81 + 2<sup>3</sup> = 25 − 9 + 8 = 24</li><li>Nomor 3: √196 + 2<sup>4</sup> − 3<sup>2</sup> = 14 + 16 − 9 = 21</li></ul>\n<p class=\"ev ok\"><b>A. Pernyataan benar.</b> Hasil operasi nomor 1 memang 11.</p>\n<p class=\"ev ok\"><b>B. Pernyataan benar.</b> Hasil operasi nomor 2 memang 24.</p>\n<p class=\"ev ok\"><b>C. Pernyataan benar.</b> Hasil operasi nomor 3 memang 21.</p>\n<p class=\"ev no\"><b>D. Pernyataan salah.</b> Hasil nomor 1 (11) lebih kecil dari hasil nomor 2 (24), bukan lebih besar.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah A, B, dan C.</b></p></section>"
  },
  {
    "n": 16,
    "text": "Tentukan apakah setiap bilangan termasuk rasional atau irasional. Pilih semua bilangan berikut yang termasuk bilangan rasional.",
    "html": "<div class=\"qp\">Tentukan apakah setiap bilangan termasuk rasional atau irasional. Pilih semua bilangan berikut yang termasuk bilangan rasional.</div>",
    "options": [
      "√49",
      "√18",
      "0,125",
      "π"
    ],
    "optionsHtml": [
      "√<span style=\"border-top:1.5px solid currentColor;padding:0 2px;margin-left:1px\">49</span>",
      "√<span style=\"border-top:1.5px solid currentColor;padding:0 2px;margin-left:1px\">18</span>",
      "0,125",
      "π"
    ],
    "answer": "AC",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: A, C (pilihan A dan C)</b> · Topik: Bilangan rasional dan irasional</p>\n<p>Bilangan rasional dapat ditulis sebagai pecahan a/b dengan b ≠ 0. Bilangan irasional berupa desimal yang tidak berhenti dan tidak berulang.</p>\n<p class=\"ev ok\"><b>A. Rasional.</b> √49 = 7, bilangan bulat, jadi rasional.</p>\n<p class=\"ev no\"><b>B. Bukan rasional (irasional).</b> √18 = 3√2, hasil akarnya tidak bulat dan tidak dapat ditulis sebagai pecahan, jadi irasional.</p>\n<p class=\"ev ok\"><b>C. Rasional.</b> 0,125 = 1/8, jadi rasional.</p>\n<p class=\"ev no\"><b>D. Bukan rasional (irasional).</b> π adalah bilangan irasional.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah A dan C.</b></p></section>"
  },
  {
    "n": 17,
    "text": "Hubungan yang dimaksud dapat berupa perbandingan senilai, perbandingan berbalik nilai, atau tidak dapat dikategorikan sebagai keduanya berdasarkan informasi yang diberikan.\nPilih semua situasi berikut yang menunjukkan perbandingan berbalik nilai.",
    "html": "<div class=\"qp\">Hubungan yang dimaksud dapat berupa perbandingan senilai, perbandingan berbalik nilai, atau tidak dapat dikategorikan sebagai keduanya berdasarkan informasi yang diberikan.</div><div class=\"qp\">Pilih semua situasi berikut yang menunjukkan perbandingan berbalik nilai.</div>",
    "options": [
      "Dengan harga per kilogram tetap, semakin banyak kilogram beras yang dibeli, semakin besar total harganya.",
      "Untuk pekerjaan yang sama, semakin banyak pekerja dengan produktivitas sama, semakin sedikit waktu penyelesaian.",
      "Kecepatan kendaraan meningkat, tetapi jarak perjalanan dan lama perjalanan sama-sama berubah tanpa informasi tambahan.",
      "Dengan jarak tetap, semakin tinggi kecepatan rata-rata kendaraan, semakin singkat waktu tempuhnya."
    ],
    "answer": "BD",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: B, D (pilihan B dan D)</b> · Topik: Perbandingan senilai dan berbalik nilai</p>\n<p>Perbandingan senilai: kedua besaran naik atau turun bersama. Perbandingan berbalik nilai: satu besaran naik, besaran lainnya turun, dengan hasil kali tetap.</p>\n<p class=\"ev no\"><b>A. Bukan berbalik nilai.</b> Harga per kilogram tetap, sehingga total harga berbanding lurus (senilai) dengan banyak kilogram.</p>\n<p class=\"ev ok\"><b>B. Berbalik nilai.</b> Beban kerja tetap, sehingga banyak pekerja dan waktu penyelesaian berbanding terbalik.</p>\n<p class=\"ev no\"><b>C. Bukan berbalik nilai.</b> Informasinya kurang: kecepatan naik, tetapi jarak dan lama perjalanan sama-sama berubah, sehingga hubungannya tidak dapat dikategorikan senilai maupun berbalik nilai.</p>\n<p class=\"ev ok\"><b>D. Berbalik nilai.</b> Jarak tetap, sehingga kecepatan dan waktu tempuh berbanding terbalik.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah B dan D.</b></p></section>"
  }
];

// Pembahasan untuk siswa = pembahasan guru (field explain). Kunci peta adalah nomor soal.
export const EXPLAIN_SISWA = Object.fromEntries(QUESTIONS.map((q) => [String(q.n), q.explain]));
