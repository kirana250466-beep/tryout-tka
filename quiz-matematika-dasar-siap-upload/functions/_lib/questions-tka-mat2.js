// Bank soal TKA Matematika 2 (quiz id "tka2"), soal nomor 1 sampai 30 (4 pilihan: A sampai D).
// Dibuat dari dua PDF dengan soal yang sama: "Pembahasan Visual - Soal Latihan TKA Matematika Kelas IX SMP/MTs"
// (untuk pengajar) dan "Versi Siswa" (untuk siswa). Materi: bilangan, perbandingan dan persamaan, aljabar dan fungsi,
// pola bilangan, geometri, bangun ruang, transformasi, statistika, dan peluang.
//
// Catatan:
//  - Kunci jawaban mengikuti kunci di PDF, dan sudah dihitung ulang satu per satu: 30 dari 30 cocok.
//  - Pembahasan pengajar (field explain): langkah penyelesaian, jawaban, trik, awas jebakan, dan pertanyaan pancingan.
//    Hanya dikirim ke mode guru (login "Ferdi").
//  - Gambar pada explainImage (img/tka2-t01.png sampai tka2-t30.png) adalah ilustrasi dari PDF pengajar.
//    Gambar memuat jawaban, jadi hanya tampil di mode guru.
//  - Pembahasan siswa ada di pembahasan-tka-mat2.js (gambar img/tka2-s01.png sampai tka2-s30.png).
//  - Soal 24 (pertanyaan pancingan): kalimat di PDF "di seberang J" diperjelas menjadi "di luar J pada garis yang sama dari P".
//
// File ini hanya dibaca server, jadi kunci jawaban dan pembahasan tidak dikirim ke siswa sebelum mereka menjawab.

export const QUESTIONS = [
  {
    "n": 1,
    "text": "Massa Bumi diperkirakan 5,97×10²⁴ kg, sedangkan massa Bulan 7,3×10²² kg. Massa Bumi adalah sekitar ... kali massa Bulan.",
    "options": [
      "8,2",
      "18",
      "82",
      "820"
    ],
    "answer": "C",
    "explain": "<p class=\"keystatus ok\"><b>Kunci: C</b> · Materi: Notasi Ilmiah · Perbandingan</p>\n<h4 class=\"steps-title\">Langkah penyelesaian</h4>\n<ol class=\"steps\"><li>Kata “... kali” berarti <b>bagi</b>: massa Bumi ÷ massa Bulan.</li><li>Bagi <b>angka depannya</b> dulu: 5,97 ÷ 7,3 ≈ <b>0,818</b>.</li><li>Bagi pangkat 10 → <b>pangkatnya dikurangi</b>: 10²⁴ ÷ 10²² = 10²⁴⁻²² = <b>10²</b> (= 100).</li><li>Gabungkan: 0,818 × 100 = 81,8 → dibulatkan <b>82</b> kali.</li><li>Cek akal sehat: 8,2 terlalu kecil dan 820 terlalu besar, jadi 82 yang masuk akal ✔</li></ol>\n<section class=\"box jawab\"><p><b>JAWABAN  ▶  </b>82  →  jawaban <b>C</b>.</p></section>\n<section class=\"box cepat\"><h4>💡 Trik</h4><p>Bagi pangkat 10 = KURANGI pangkatnya. Kali pangkat 10 = TAMBAH pangkatnya. Hasilnya sama dengan “geser koma” sebanyak selisih pangkat.</p></section>\n<section class=\"box jebakan\"><h4>⚠️ Awas jebakan</h4><p>Jangan membagi 24 ÷ 22! Pangkat 10 itu dikurangi, bukan dibagi.</p></section>\n<section class=\"box awam\"><h4>💬 Tanya ke siswa</h4><p>Kalau 5.000.000 ÷ 50.000, berapa hasilnya? (100) Itu sama saja dengan 5×10⁶ ÷ 5×10⁴ — pangkatnya dikurangi.</p></section>",
    "explainImage": "img/tka2-t01.png"
  },
  {
    "n": 2,
    "text": "Diameter virus 3×10⁻⁸ m, sedangkan diameter bakteri 1,5×10⁻⁶ m. Bakteri tersebut berukuran ... kali lebih besar dari virus.",
    "options": [
      "5",
      "50",
      "500",
      "0,5"
    ],
    "answer": "B",
    "explain": "<p class=\"keystatus ok\"><b>Kunci: B</b> · Materi: Notasi Ilmiah · Perbandingan</p>\n<h4 class=\"steps-title\">Langkah penyelesaian</h4>\n<ol class=\"steps\"><li>“Berapa kali lebih besar” → besar ÷ kecil = <b>bakteri ÷ virus</b>.</li><li>Bagi angka depan: 1,5 ÷ 3 = <b>0,5</b>.</li><li>Bagi pangkat 10 → <b>kurangi pangkatnya</b>: 10⁻⁶ ÷ 10⁻⁸ = 10⁻⁶⁻⁽⁻⁸⁾ = 10⁻⁶⁺⁸ = <b>10²</b>.</li><li>Gabungkan: 0,5 × 100 = <b>50</b> kali.</li><li>Cek: 50 virus dijejer persis sepanjang 1 bakteri (lihat gambar) ✔</li></ol>\n<section class=\"box jawab\"><p><b>JAWABAN  ▶  </b>50  →  jawaban <b>B</b>.</p></section>\n<section class=\"box cepat\"><h4>💡 Trik</h4><p>Minus bertemu minus jadi plus: −6 − (−8) = −6 + 8 = 2. Ragu? Pakai garis bilangan.</p></section>\n<section class=\"box jebakan\"><h4>⚠️ Awas jebakan</h4><p>Opsi 0,5 adalah jebakan: itu baru hasil bagi angka depan, pangkat 10-nya belum dihitung.</p></section>\n<section class=\"box awam\"><h4>💬 Tanya ke siswa</h4><p>Mana yang lebih kecil, 10⁻⁸ atau 10⁻⁶? Berapa langkah jarak keduanya di garis bilangan?</p></section>",
    "explainImage": "img/tka2-t02.png"
  },
  {
    "n": 3,
    "text": "Taman persegi luas 50 m². Panjang sisi dinyatakan dalam beberapa bentuk: √50 m, √49 m, 6,25 m, 13/4 m. Manakah yang merupakan bilangan irasional?",
    "options": [
      "√49",
      "√50",
      "6,25",
      "13/4"
    ],
    "answer": "B",
    "explain": "<p class=\"keystatus ok\"><b>Kunci: B</b> · Materi: Bilangan Rasional &amp; Irasional</p>\n<h4 class=\"steps-title\">Langkah penyelesaian</h4>\n<ol class=\"steps\"><li><b>Rasional</b> = bisa ditulis pecahan a/b. <b>Irasional</b> = desimalnya <b>tak berakhir &amp; tak berpola</b>.</li><li>√49 = 7 (bilangan bulat) → rasional ✔</li><li>6,25 = 25/4 dan 13/4 sama-sama pecahan → rasional ✔</li><li>√50: 50 <b>bukan</b> kuadrat sempurna (antara 7² = 49 dan 8² = 64) → 7,0710678… tak pernah selesai → <b>irasional</b>.</li></ol>\n<section class=\"box jawab\"><p><b>JAWABAN  ▶  </b>√50  →  jawaban <b>B</b>.</p></section>\n<section class=\"box cepat\"><h4>💡 Trik</h4><p>Akar dari kuadrat sempurna (1, 4, 9, 16, 25, 36, 49, 64…) → rasional. Akar dari bilangan lain → irasional.</p></section>\n<section class=\"box jebakan\"><h4>⚠️ Awas jebakan</h4><p>Jangan tertipu tanda akar! √49 memakai tanda akar tapi rasional. Yang menentukan adalah isi di dalam akar.</p></section>\n<section class=\"box awam\"><h4>💬 Tanya ke siswa</h4><p>Menurutmu √50 lebih dekat ke 7 atau ke 8? Kenapa angkanya tidak bisa ditulis sampai habis?</p></section>",
    "explainImage": "img/tka2-t03.png"
  },
  {
    "n": 4,
    "text": "Tiga mercusuar berkedip dengan interval 18 detik, 24 detik, dan 30 detik. Ketiganya berkedip bersamaan pertama kali pada pukul 20.00.00. Pada pukul berapa ketiganya berkedip bersamaan lagi?",
    "options": [
      "20.04.00",
      "20.05.00",
      "20.06.00",
      "20.08.00"
    ],
    "answer": "C",
    "explain": "<p class=\"keystatus ok\"><b>Kunci: C</b> · Materi: KPK · Pola Berulang</p>\n<h4 class=\"steps-title\">Langkah penyelesaian</h4>\n<ol class=\"steps\"><li>“Bersamaan lagi” → <b>KPK</b> dari 18, 24, dan 30.</li><li>Faktor prima: 18 = 2×3² · 24 = 2³×3 · 30 = 2×3×5.</li><li>KPK: ambil semua faktor dengan <b>pangkat TERBESAR</b> → 2³×3²×5 = 8×9×5 = <b>360 detik</b>.</li><li>Ubah ke menit: 360 ÷ 60 = <b>6 menit</b>.</li><li>Tambah ke jam awal: 20.00.00 + 6 menit = <b>20.06.00</b>.</li></ol>\n<section class=\"box jawab\"><p><b>JAWABAN  ▶  </b>20.06.00  →  jawaban <b>C</b>.</p></section>\n<section class=\"box cepat\"><h4>💡 Trik</h4><p>KPK = pangkat TERBESAR, FPB = pangkat TERKECIL. Soal “bersamaan lagi / berulang” → KPK.</p></section>\n<section class=\"box jebakan\"><h4>⚠️ Awas jebakan</h4><p>360 itu DETIK! Pilihan jawaban berupa jam, jadi wajib diubah ke menit (÷ 60) dulu.</p></section>\n<section class=\"box awam\"><h4>💬 Tanya ke siswa</h4><p>Kalau hanya lampu 18 dan 24 detik, kapan bersamaan? (72 detik). Kenapa lampu 30 detik membuatnya jadi 360?</p></section>",
    "explainImage": "img/tka2-t04.png"
  },
  {
    "n": 5,
    "text": "Bentuk sederhana dari (3⁴ × 3⁻²) ÷ (3⁻³ × 3⁵) adalah ...",
    "options": [
      "1",
      "3",
      "9",
      "1/3"
    ],
    "answer": "A",
    "explain": "<p class=\"keystatus ok\"><b>Kunci: A</b> · Materi: Sifat Eksponen</p>\n<h4 class=\"steps-title\">Langkah penyelesaian</h4>\n<ol class=\"steps\"><li>Kali bilangan pokok sama → pangkat <b>DITAMBAH</b>.</li><li>Pembilang: 3⁴ × 3⁻² = 3⁴⁺⁽⁻²⁾ = <b>3²</b>.</li><li>Penyebut: 3⁻³ × 3⁵ = 3⁻³⁺⁵ = <b>3²</b>.</li><li>Bagi → pangkat dikurangi: 3² ÷ 3² = 3²⁻² = 3⁰ = <b>1</b>.</li><li>Cek: 9 ÷ 9 = 1 ✔</li></ol>\n<section class=\"box jawab\"><p><b>JAWABAN  ▶  </b>1  →  jawaban <b>A</b>.</p></section>\n<section class=\"box cepat\"><h4>💡 Trik</h4><p>Kalau pembilang dan penyebut sama, hasilnya pasti 1. Hitung dulu pangkat total di tiap sisi (lihat garis bilangan).</p></section>\n<section class=\"box jebakan\"><h4>⚠️ Awas jebakan</h4><p>Jangan mengalikan pangkatnya (4 × −2). Kali bilangan sama → pangkat DITAMBAH: 4 + (−2).</p></section>\n<section class=\"box awam\"><h4>💬 Tanya ke siswa</h4><p>Berapa nilai 3⁰? Kenapa bukan 0? (karena 3² ÷ 3² = 9 ÷ 9 = 1)</p></section>",
    "explainImage": "img/tka2-t05.png"
  },
  {
    "n": 6,
    "text": "Pabrik dengan 8 mesin menyelesaikan pesanan dalam 15 hari. Jika pesanan harus selesai dalam 10 hari dengan kecepatan tiap mesin sama, berapa mesin tambahan yang diperlukan?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "answer": "C",
    "explain": "<p class=\"keystatus ok\"><b>Kunci: C</b> · Materi: Perbandingan Berbalik Nilai</p>\n<h4 class=\"steps-title\">Langkah penyelesaian</h4>\n<ol class=\"steps\"><li>Mesin makin banyak → hari makin singkat: <b>berbalik nilai</b> (hasil kali tetap).</li><li>Total “pekerjaan” = 8 mesin × 15 hari = <b>120 mesin-hari</b>.</li><li>Mau selesai 10 hari → mesin = 120 ÷ 10 = <b>12 mesin</b>.</li><li>Tambahan = 12 − 8 = <b>4 mesin</b>.</li><li>Cek: 12 × 10 = 120 ✔</li></ol>\n<section class=\"box jawab\"><p><b>JAWABAN  ▶  </b>4  →  jawaban <b>C</b>.</p></section>\n<section class=\"box cepat\"><h4>💡 Trik</h4><p>Berbalik nilai → KALIKAN dulu (mesin × hari) lalu bagi. Senilai → kali silang.</p></section>\n<section class=\"box jebakan\"><h4>⚠️ Awas jebakan</h4><p>Soal bertanya mesin TAMBAHAN, bukan total. Jawaban 12 itu total — jangan lupa kurangi 8.</p></section>\n<section class=\"box awam\"><h4>💬 Tanya ke siswa</h4><p>Kalau mesinnya jadi 2× lipat, harinya jadi berapa kali? (setengahnya)</p></section>",
    "explainImage": "img/tka2-t06.png"
  },
  {
    "n": 7,
    "text": "Lima tahun lagi, umur Pak Joko akan menjadi dua kali umur anaknya lima tahun lagi. Jika umur anaknya sekarang 10 tahun, berapa umur Pak Joko sekarang?",
    "options": [
      "20 tahun",
      "23 tahun",
      "25 tahun",
      "28 tahun"
    ],
    "answer": "C",
    "explain": "<p class=\"keystatus ok\"><b>Kunci: C</b> · Materi: Persamaan Linear · Cerita Umur</p>\n<h4 class=\"steps-title\">Langkah penyelesaian</h4>\n<ol class=\"steps\"><li>Anak 5 tahun lagi: 10 + 5 = <b>15 tahun</b>.</li><li>Pak Joko 5 tahun lagi = 2 × 15 = <b>30 tahun</b>.</li><li>Itu umur <b>lima tahun lagi</b>. Umur sekarang = 30 − 5 = <b>25 tahun</b>.</li><li>Persamaan: x + 5 = 2(10 + 5) → x = 25.</li><li>Cek: 25 + 5 = 30 = 2 × 15 ✔</li></ol>\n<section class=\"box jawab\"><p><b>JAWABAN  ▶  </b>25 tahun  →  jawaban <b>C</b>.</p></section>\n<section class=\"box cepat\"><h4>💡 Trik</h4><p>Soal umur: tulis dua kolom (SEKARANG dan LIMA TAHUN LAGI) supaya tidak tertukar.</p></section>\n<section class=\"box jebakan\"><h4>⚠️ Awas jebakan</h4><p>30 adalah jebakan! Itu umur Pak Joko LIMA TAHUN LAGI, bukan sekarang.</p></section>\n<section class=\"box awam\"><h4>💬 Tanya ke siswa</h4><p>Kenapa di akhir kita mengurangi 5? Pak Joko sekarang lebih tua atau lebih muda dari 30?</p></section>",
    "explainImage": "img/tka2-t07.png"
  },
  {
    "n": 8,
    "text": "Tarif parkir Rp5.000 untuk jam pertama, ditambah Rp3.000 untuk setiap jam berikutnya. Jika anggaran maksimal Rp32.000, berapa lama maksimal ia bisa parkir?",
    "options": [
      "8 jam",
      "9 jam",
      "10 jam",
      "11 jam"
    ],
    "answer": "C",
    "explain": "<p class=\"keystatus ok\"><b>Kunci: C</b> · Materi: Pertidaksamaan Linear</p>\n<h4 class=\"steps-title\">Langkah penyelesaian</h4>\n<ol class=\"steps\"><li>Misal lama parkir = x jam. Jam pertama Rp5.000, sisanya (x − 1) jam × Rp3.000.</li><li>Model: <b>5.000 + 3.000(x − 1) ≤ 32.000</b>.</li><li>Kurangi 5.000: 3.000(x − 1) ≤ 27.000 → bagi 3.000: x − 1 ≤ 9.</li><li>Tambah 1: <b>x ≤ 10</b> → maksimal 10 jam.</li><li>Cek: 5.000 + 9 × 3.000 = 32.000 ✔ (11 jam = 35.000 → kelebihan).</li></ol>\n<section class=\"box jawab\"><p><b>JAWABAN  ▶  </b>10 jam  →  jawaban <b>C</b>.</p></section>\n<section class=\"box cepat\"><h4>💡 Trik</h4><p>“Maksimal / paling banyak / tidak lebih dari” → tanda ≤.</p></section>\n<section class=\"box jebakan\"><h4>⚠️ Awas jebakan</h4><p>Jam pertama tarifnya BEDA. Jangan hitung 3.000 × x; hanya (x − 1) jam yang kena Rp3.000.</p></section>\n<section class=\"box awam\"><h4>💬 Tanya ke siswa</h4><p>Parkir 10 jam bayar berapa? 11 jam? Mana yang masih cukup uangnya?</p></section>",
    "explainImage": "img/tka2-t08.png"
  },
  {
    "n": 9,
    "text": "Harga 3 tiket dewasa dan 2 tiket anak Rp96.000. Harga 2 tiket dewasa dan 4 tiket anak Rp88.000. Berapa harga 1 tiket dewasa?",
    "options": [
      "Rp22.000",
      "Rp24.000",
      "Rp26.000",
      "Rp28.000"
    ],
    "answer": "C",
    "explain": "<p class=\"keystatus ok\"><b>Kunci: C</b> · Materi: SPLDV · Eliminasi</p>\n<h4 class=\"steps-title\">Langkah penyelesaian</h4>\n<ol class=\"steps\"><li>Misal dewasa = d, anak = a → (1) 3d + 2a = 96.000 · (2) 2d + 4a = 88.000.</li><li>Samakan jumlah anak: kalikan (1) dengan 2 → (3) 6d + 4a = 192.000.</li><li>Kurangkan (3) − (2): <b>4a habis</b> → 4d = 104.000 → <b>d = 26.000</b>.</li><li>Cari anak (untuk cek): 2(26.000) + 4a = 88.000 → a = 9.000.</li><li>Cek (1): 3(26.000) + 2(9.000) = 78.000 + 18.000 = 96.000 ✔</li></ol>\n<section class=\"box jawab\"><p><b>JAWABAN  ▶  </b>Rp26.000  →  jawaban <b>C</b>.</p></section>\n<section class=\"box cepat\"><h4>💡 Trik</h4><p>Eliminasi: buat salah satu huruf punya koefisien SAMA, lalu kurangkan supaya hilang.</p></section>\n<section class=\"box jebakan\"><h4>⚠️ Awas jebakan</h4><p>Kalikan SEMUA bagian persamaan, termasuk angka di kanan (96.000 × 2 = 192.000).</p></section>\n<section class=\"box awam\"><h4>💬 Tanya ke siswa</h4><p>Kenapa kita pilih mengalikan persamaan pertama dengan 2, bukan dengan 3?</p></section>",
    "explainImage": "img/tka2-t09.png"
  },
  {
    "n": 10,
    "text": "Lima tahun yang lalu umur ayah 4 kali umur anaknya. Lima tahun yang akan datang umur ayah menjadi 2 kali umur anaknya. Berapa umur ayah sekarang?",
    "options": [
      "20 tahun",
      "22 tahun",
      "25 tahun",
      "30 tahun"
    ],
    "answer": "C",
    "explain": "<p class=\"keystatus ok\"><b>Kunci: C</b> · Materi: SPLDV · Cerita Umur</p>\n<h4 class=\"steps-title\">Langkah penyelesaian</h4>\n<ol class=\"steps\"><li>Misal ayah = x, anak = y (umur SEKARANG).</li><li>5 tahun lalu: x − 5 = 4(y − 5) → x = 4y − 15.</li><li>5 tahun lagi: x + 5 = 2(y + 5) → x = 2y + 5.</li><li>Samakan: 4y − 15 = 2y + 5 → 2y = 20 → <b>y = 10</b>.</li><li>Ayah: x = 2(10) + 5 = <b>25</b>. Cek: 20 = 4×5 ✔ dan 30 = 2×15 ✔</li></ol>\n<section class=\"box jawab\"><p><b>JAWABAN  ▶  </b>25 tahun  →  jawaban <b>C</b>.</p></section>\n<section class=\"box cepat\"><h4>💡 Trik</h4><p>Selisih umur tidak pernah berubah! Ayah selalu 15 tahun lebih tua (lihat tabel) — bisa dipakai untuk mengecek jawaban.</p></section>\n<section class=\"box jebakan\"><h4>⚠️ Awas jebakan</h4><p>Untuk “5 tahun lalu”, KEDUA umur dikurangi 5: (x − 5) dan (y − 5), bukan salah satu saja.</p></section>\n<section class=\"box awam\"><h4>💬 Tanya ke siswa</h4><p>Dari tabel umur: kapan ayah 4× anak? Kapan 2×? Apa yang sama di ketiga kolom?</p></section>",
    "explainImage": "img/tka2-t10.png"
  },
  {
    "n": 11,
    "text": "Keliling dua taman dinyatakan sebagai 2(3x + 4y) − (x − 2y) meter. Bentuk paling sederhana dari ekspresi tersebut adalah ...",
    "options": [
      "5x + 10y",
      "5x + 6y",
      "7x + 6y",
      "7x + 10y"
    ],
    "answer": "A",
    "explain": "<p class=\"keystatus ok\"><b>Kunci: A</b> · Materi: Bentuk Aljabar</p>\n<h4 class=\"steps-title\">Langkah penyelesaian</h4>\n<ol class=\"steps\"><li>Buka kurung pertama (distributif): 2(3x + 4y) = <b>6x + 8y</b>.</li><li>Buka kurung kedua: tanda minus <b>membalik semua isi kurung</b> → −(x − 2y) = <b>−x + 2y</b>.</li><li>Gabungkan suku sejenis: x → 6x − x = <b>5x</b>; y → 8y + 2y = <b>10y</b>.</li><li>Hasil: <b>5x + 10y</b>.</li><li>Cek x=1, y=1: 2(7) − (1 − 2) = 14 + 1 = 15 dan 5 + 10 = 15 ✔</li></ol>\n<section class=\"box jawab\"><p><b>JAWABAN  ▶  </b>5x + 10y  →  jawaban <b>A</b>.</p></section>\n<section class=\"box cepat\"><h4>💡 Trik</h4><p>Tanda minus di depan kurung = pintu pembalik: semua tanda di dalamnya berubah (+ ↔ −).</p></section>\n<section class=\"box jebakan\"><h4>⚠️ Awas jebakan</h4><p>Kesalahan paling umum: −(x − 2y) ditulis −x − 2y. Suku kedua harus ikut berubah jadi +2y!</p></section>\n<section class=\"box awam\"><h4>💬 Tanya ke siswa</h4><p>Kalau x = 1 dan y = 1, masukkan ke bentuk awal dan akhir. Hasilnya sama?</p></section>",
    "explainImage": "img/tka2-t11.png"
  },
  {
    "n": 12,
    "text": "Biaya pengiriman f(x) = 8.000 + 1.500x (rupiah), x = berat paket (kg). Jika domain fungsi {1, 3, 5, 7}, tentukan range fungsi tersebut.",
    "options": [
      "{9.500, 12.500, 15.500, 18.500}",
      "{1, 3, 5, 7}",
      "{8.000, 9.500, 11.000, 12.500}",
      "{9.500, 11.000, 12.500, 14.000}"
    ],
    "answer": "A",
    "explain": "<p class=\"keystatus ok\"><b>Kunci: A</b> · Materi: Fungsi · Domain &amp; Range</p>\n<h4 class=\"steps-title\">Langkah penyelesaian</h4>\n<ol class=\"steps\"><li><b>Domain</b> = bahan masukan (kg). <b>Range</b> = hasil keluaran f(x) (rupiah).</li><li>x = 1 → 8.000 + 1.500 = <b>9.500</b></li><li>x = 3 → 8.000 + 4.500 = <b>12.500</b></li><li>x = 5 → 8.000 + 7.500 = <b>15.500</b> · x = 7 → 8.000 + 10.500 = <b>18.500</b></li><li>Range = {9.500; 12.500; 15.500; 18.500}.</li></ol>\n<section class=\"box jawab\"><p><b>JAWABAN  ▶  </b>{9.500, 12.500, 15.500, 18.500}  →  jawaban <b>A</b>.</p></section>\n<section class=\"box cepat\"><h4>💡 Trik</h4><p>Bayangkan fungsi sebagai MESIN: x masuk dari kiri, f(x) keluar dari kanan.</p></section>\n<section class=\"box jebakan\"><h4>⚠️ Awas jebakan</h4><p>Opsi B = domainnya sendiri. Opsi C memakai x = 0,1,2,3 dan opsi D memakai x = 1,2,3,4 — bukan 1,3,5,7.</p></section>\n<section class=\"box awam\"><h4>💬 Tanya ke siswa</h4><p>Kalau paket 0 kg, biayanya berapa? (8.000: biaya tetap). Apa arti angka 1.500?</p></section>",
    "explainImage": "img/tka2-t12.png"
  },
  {
    "n": 13,
    "text": "Perhatikan barisan geometri: 2, 6, 18, 54, .... Suku ke-7 dari barisan tersebut adalah ...",
    "options": [
      "486",
      "972",
      "1.458",
      "4.374"
    ],
    "answer": "C",
    "explain": "<p class=\"keystatus ok\"><b>Kunci: C</b> · Materi: Barisan Geometri</p>\n<h4 class=\"steps-title\">Langkah penyelesaian</h4>\n<ol class=\"steps\"><li>Cari rasio: r = 6 ÷ 2 = <b>3</b> (tiap suku dikali 3).</li><li>Rumus: Uₙ = a × rⁿ⁻¹ → U₇ = 2 × 3⁶.</li><li>3⁶ = 3 × 3 × 3 × 3 × 3 × 3 = <b>729</b>.</li><li>U₇ = 2 × 729 = <b>1.458</b>.</li><li>Cek dengan menyambung: 54 → 162 → 486 → 1.458 ✔</li></ol>\n<section class=\"box jawab\"><p><b>JAWABAN  ▶  </b>1.458  →  jawaban <b>C</b>.</p></section>\n<section class=\"box cepat\"><h4>💡 Trik</h4><p>Barisan geometri = dikali terus-menerus (seperti domino ×3). Pangkatnya selalu (n − 1), bukan n.</p></section>\n<section class=\"box jebakan\"><h4>⚠️ Awas jebakan</h4><p>486 itu suku ke-6! Pangkat 3⁶ muncul karena n − 1 = 7 − 1 = 6.</p></section>\n<section class=\"box awam\"><h4>💬 Tanya ke siswa</h4><p>Dari suku ke-1 sampai suku ke-7, kita mengalikan 3 sebanyak berapa kali? (6 kali)</p></section>",
    "explainImage": "img/tka2-t13.png"
  },
  {
    "n": 14,
    "text": "Jumlah 10 suku pertama dari barisan aritmetika dengan suku pertama 7 dan beda 4 adalah ...",
    "options": [
      "220",
      "230",
      "250",
      "270"
    ],
    "answer": "C",
    "explain": "<p class=\"keystatus ok\"><b>Kunci: C</b> · Materi: Deret Aritmetika</p>\n<h4 class=\"steps-title\">Langkah penyelesaian</h4>\n<ol class=\"steps\"><li>Aritmetika = ditambah terus (beda 4): 7, 11, 15, 19, …</li><li>Rumus jumlah: Sₙ = n/2 × [2a + (n − 1)b].</li><li>S₁₀ = 10/2 × [2(7) + 9(4)] = 5 × [14 + 36].</li><li>= 5 × 50 = <b>250</b>.</li><li>Cara Gauss: U₁₀ = 7 + 9×4 = 43 → 7 + 43 = 50; ada 5 pasangan → 5 × 50 = 250 ✔</li></ol>\n<section class=\"box jawab\"><p><b>JAWABAN  ▶  </b>250  →  jawaban <b>C</b>.</p></section>\n<section class=\"box cepat\"><h4>💡 Trik</h4><p>Cerita Gauss: jumlahkan suku pertama + terakhir; ada n/2 pasangan yang jumlahnya sama.</p></section>\n<section class=\"box jebakan\"><h4>⚠️ Awas jebakan</h4><p>Rumus memakai (n − 1) = 9, bukan 10. Kalau salah pakai 10 → hasilnya 270 (opsi D).</p></section>\n<section class=\"box awam\"><h4>💬 Tanya ke siswa</h4><p>Kenapa semua pasangan jumlahnya 50? Coba pasangkan 11 dengan 39.</p></section>",
    "explainImage": "img/tka2-t14.png"
  },
  {
    "n": 15,
    "text": "Garis p sejajar garis q, dipotong transversal r. Sudut dalam berseberangan pada garis p adalah (2x + 15)°, dan pada garis q adalah (3x − 25)°. Besar sudut tersebut adalah ...",
    "options": [
      "85°",
      "90°",
      "95°",
      "100°"
    ],
    "answer": "C",
    "explain": "<p class=\"keystatus ok\"><b>Kunci: C</b> · Materi: Garis Sejajar &amp; Sudut</p>\n<h4 class=\"steps-title\">Langkah penyelesaian</h4>\n<ol class=\"steps\"><li>Dua garis sejajar dipotong garis lain → <b>sudut dalam berseberangan SAMA besar</b> (bentuk huruf Z).</li><li>Samakan: 2x + 15 = 3x − 25.</li><li>Pindahkan suku: 15 + 25 = 3x − 2x → <b>x = 40</b>.</li><li>Besar sudut: 2(40) + 15 = <b>95°</b>.</li><li>Cek: 3(40) − 25 = 95° ✔ (konsisten)</li></ol>\n<section class=\"box jawab\"><p><b>JAWABAN  ▶  </b>95°  →  jawaban <b>C</b>.</p></section>\n<section class=\"box cepat\"><h4>💡 Trik</h4><p>Kenali huruf: Z = dalam berseberangan (sama), F = sehadap (sama), C = sepihak (jumlah 180°).</p></section>\n<section class=\"box jebakan\"><h4>⚠️ Awas jebakan</h4><p>Soal minta BESAR SUDUT, bukan x. Setelah dapat x = 40, wajib substitusi ke bentuk sudutnya.</p></section>\n<section class=\"box awam\"><h4>💬 Tanya ke siswa</h4><p>Kalau sudutnya sepihak (huruf C), persamaannya jadi apa? (2x + 15 + 3x − 25 = 180)</p></section>",
    "explainImage": "img/tka2-t15.png"
  },
  {
    "n": 16,
    "text": "Sebuah segitiga memiliki tiga sudut: (2x + 5)°, (3x − 5)°, dan (4x)°. Tentukan sudut terkecil dari segitiga tersebut.",
    "options": [
      "40°",
      "45°",
      "55°",
      "80°"
    ],
    "answer": "B",
    "explain": "<p class=\"keystatus ok\"><b>Kunci: B</b> · Materi: Jumlah Sudut Segitiga</p>\n<h4 class=\"steps-title\">Langkah penyelesaian</h4>\n<ol class=\"steps\"><li>Jumlah sudut segitiga = <b>180°</b>.</li><li>(2x + 5) + (3x − 5) + 4x = 180 → 9x = 180 → <b>x = 20</b>.</li><li>Hitung tiap sudut: 2(20)+5 = <b>45°</b> · 3(20)−5 = <b>55°</b> · 4(20) = <b>80°</b>.</li><li>Cek: 45 + 55 + 80 = 180 ✔</li><li>Yang ditanya sudut <b>TERKECIL</b> → <b>45°</b>.</li></ol>\n<section class=\"box jawab\"><p><b>JAWABAN  ▶  </b>45°  →  jawaban <b>B</b>.</p></section>\n<section class=\"box cepat\"><h4>💡 Trik</h4><p>Suku +5 dan −5 saling menghapus. Tinggal 2x + 3x + 4x = 9x.</p></section>\n<section class=\"box jebakan\"><h4>⚠️ Awas jebakan</h4><p>Jangan berhenti di x = 20 atau memilih 80° (terbesar). Baca kata “terkecil”.</p></section>\n<section class=\"box awam\"><h4>💬 Tanya ke siswa</h4><p>Kalau ketiga sudut digunting lalu dijejer, bentuknya apa? (garis lurus = 180°)</p></section>",
    "explainImage": "img/tka2-t16.png"
  },
  {
    "n": 17,
    "text": "Sebuah drone terbang dari pangkalan sejauh 9 km ke arah timur, kemudian 12 km ke arah utara. Berapa jarak drone dari pangkalan (garis lurus)?",
    "options": [
      "13 km",
      "14 km",
      "15 km",
      "16 km"
    ],
    "answer": "C",
    "explain": "<p class=\"keystatus ok\"><b>Kunci: C</b> · Materi: Teorema Pythagoras</p>\n<h4 class=\"steps-title\">Langkah penyelesaian</h4>\n<ol class=\"steps\"><li>Timur lalu utara membentuk <b>sudut siku-siku</b> → jarak lurus = sisi miring.</li><li>Pythagoras: c² = 9² + 12² = 81 + 144 = <b>225</b>.</li><li>c = √225 = <b>15 km</b>.</li><li>Trik cepat: 9-12-15 = 3 × (3-4-5).</li><li>Cek: sisi miring harus lebih dari 12 dan kurang dari 9 + 12 = 21 ✔</li></ol>\n<section class=\"box jawab\"><p><b>JAWABAN  ▶  </b>15 km  →  jawaban <b>C</b>.</p></section>\n<section class=\"box cepat\"><h4>💡 Trik</h4><p>Hafalkan tripel Pythagoras: 3-4-5, 5-12-13, 8-15-17, 7-24-25 beserta kelipatannya.</p></section>\n<section class=\"box jebakan\"><h4>⚠️ Awas jebakan</h4><p>Jangan menjumlah 9 + 12 = 21 (itu jalan memutar). Jarak lurus selalu lebih pendek.</p></section>\n<section class=\"box awam\"><h4>💬 Tanya ke siswa</h4><p>Kenapa jalan lurus (15) lebih pendek daripada lewat sudut siku (21)?</p></section>",
    "explainImage": "img/tka2-t17.png"
  },
  {
    "n": 18,
    "text": "Sebuah kapal berlayar dari pelabuhan sejauh 24 km ke arah barat, lalu berbelok tegak lurus dan berlayar sejauh d km, sehingga jaraknya dari pelabuhan menjadi 26 km (garis lurus). Berapa nilai d?",
    "options": [
      "8 km",
      "9 km",
      "10 km",
      "12 km"
    ],
    "answer": "C",
    "explain": "<p class=\"keystatus ok\"><b>Kunci: C</b> · Materi: Teorema Pythagoras</p>\n<h4 class=\"steps-title\">Langkah penyelesaian</h4>\n<ol class=\"steps\"><li>Belok tegak lurus → segitiga siku-siku. Jarak 26 km adalah <b>sisi miring</b> (terpanjang).</li><li>Cari sisi tegak: <b>d² = 26² − 24²</b> (sisi miring dikurangi!).</li><li>d² = 676 − 576 = 100 → d = √100 = <b>10 km</b>.</li><li>Trik: 10-24-26 = 2 × (5-12-13) ✔</li></ol>\n<section class=\"box jawab\"><p><b>JAWABAN  ▶  </b>10 km  →  jawaban <b>C</b>.</p></section>\n<section class=\"box cepat\"><h4>💡 Trik</h4><p>Cari sisi MIRING → JUMLAHKAN kuadrat. Cari sisi TEGAK → KURANGKAN kuadrat.</p></section>\n<section class=\"box jebakan\"><h4>⚠️ Awas jebakan</h4><p>Jangan menjumlah 24² + 26² (= 1.252, bukan kuadrat sempurna). Sisi miring selalu yang terbesar (26).</p></section>\n<section class=\"box awam\"><h4>💬 Tanya ke siswa</h4><p>Kenapa 26 tidak boleh jadi sisi tegak? Sisi mana yang paling panjang di segitiga siku-siku?</p></section>",
    "explainImage": "img/tka2-t18.png"
  },
  {
    "n": 19,
    "text": "Segitiga ABC dan DEF memiliki AB = DE, AC = DF, dan BC = EF. Berdasarkan kriteria kekongruenan, kedua segitiga tersebut kongruen menurut ...",
    "options": [
      "Sisi-Sisi-Sisi (SSS)",
      "Sisi-Sudut-Sisi (SAS)",
      "Sudut-Sisi-Sudut (ASA)",
      "Sudut-Sudut (AA)"
    ],
    "answer": "A",
    "explain": "<p class=\"keystatus ok\"><b>Kunci: A</b> · Materi: Kekongruenan Segitiga</p>\n<h4 class=\"steps-title\">Langkah penyelesaian</h4>\n<ol class=\"steps\"><li>Kongruen = sama persis (bentuk dan ukuran).</li><li>Diketahui <b>tiga pasang sisi</b> sama panjang: AB = DE, AC = DF, BC = EF.</li><li>Tidak ada keterangan sudut sama sekali → kriteria yang cocok: <b>Sisi-Sisi-Sisi (SSS)</b>.</li><li>SAS dan ASA butuh sudut. AA hanya membuat sebangun (bentuk sama, ukuran boleh beda).</li></ol>\n<section class=\"box jawab\"><p><b>JAWABAN  ▶  </b>Sisi-Sisi-Sisi (SSS)  →  jawaban <b>A</b>.</p></section>\n<section class=\"box cepat\"><h4>💡 Trik</h4><p>Hitung dulu apa yang diketahui: 3 sisi = SSS · 2 sisi + sudut di antaranya = SAS · 2 sudut + 1 sisi = ASA.</p></section>\n<section class=\"box jebakan\"><h4>⚠️ Awas jebakan</h4><p>AA TIDAK menjamin kongruen — hanya sebangun. Segitiga kecil dan besar bisa punya sudut yang sama.</p></section>\n<section class=\"box awam\"><h4>💬 Tanya ke siswa</h4><p>Tiga batang lidi disambung jadi segitiga: bisakah bentuknya berbeda-beda? (tidak: kaku → SSS)</p></section>",
    "explainImage": "img/tka2-t19.png"
  },
  {
    "n": 20,
    "text": "Sebuah limas segiempat beraturan memiliki alas persegi bersisi 8 cm, dengan tinggi sisi tegak (apotema) 10 cm. Luas permukaan limas tersebut adalah ...",
    "options": [
      "160 cm²",
      "192 cm²",
      "224 cm²",
      "256 cm²"
    ],
    "answer": "C",
    "explain": "<p class=\"keystatus ok\"><b>Kunci: C</b> · Materi: Jaring-Jaring Limas</p>\n<h4 class=\"steps-title\">Langkah penyelesaian</h4>\n<ol class=\"steps\"><li>Luas permukaan = luas alas + luas 4 segitiga sisi tegak (lihat jaring-jaring).</li><li>Alas: 8 × 8 = <b>64 cm²</b>.</li><li>Satu segitiga: ½ × alas × tinggi = ½ × 8 × 10 = <b>40 cm²</b>.</li><li>Empat segitiga: 4 × 40 = <b>160 cm²</b>.</li><li>Total: 64 + 160 = <b>224 cm²</b>.</li></ol>\n<section class=\"box jawab\"><p><b>JAWABAN  ▶  </b>224 cm²  →  jawaban <b>C</b>.</p></section>\n<section class=\"box cepat\"><h4>💡 Trik</h4><p>Apotema = tinggi segitiga sisi tegak (yang miring). Sudah diberikan → tidak perlu Pythagoras lagi.</p></section>\n<section class=\"box jebakan\"><h4>⚠️ Awas jebakan</h4><p>Jangan lupa alasnya! 160 cm² (opsi A) baru selimutnya. Luas permukaan = selimut + alas.</p></section>\n<section class=\"box awam\"><h4>💬 Tanya ke siswa</h4><p>Kalau kardus limas dibuka, bentuknya mirip apa? Sebutkan bangun-bangun penyusunnya.</p></section>",
    "explainImage": "img/tka2-t20.png"
  },
  {
    "n": 21,
    "text": "Titik G(−5, 3) ditranslasikan oleh vektor (7, −9). Tentukan koordinat bayangannya.",
    "options": [
      "(2, −6)",
      "(−2, 6)",
      "(2, 6)",
      "(12, −6)"
    ],
    "answer": "A",
    "explain": "<p class=\"keystatus ok\"><b>Kunci: A</b> · Materi: Translasi (Pergeseran)</p>\n<h4 class=\"steps-title\">Langkah penyelesaian</h4>\n<ol class=\"steps\"><li>Translasi = <b>geser</b>. Angka atas = geser kanan/kiri (x), angka bawah = geser naik/turun (y).</li><li>x′ = −5 + 7 = <b>2</b> (geser 7 ke kanan).</li><li>y′ = 3 + (−9) = <b>−6</b> (geser 9 ke bawah).</li><li>Bayangan G′(<b>2, −6</b>).</li></ol>\n<section class=\"box jawab\"><p><b>JAWABAN  ▶  </b>(2, −6)  →  jawaban <b>A</b>.</p></section>\n<section class=\"box cepat\"><h4>💡 Trik</h4><p>Bayangan = titik awal + vektor. Positif → kanan/atas, negatif → kiri/bawah.</p></section>\n<section class=\"box jebakan\"><h4>⚠️ Awas jebakan</h4><p>Hati-hati tanda: 3 + (−9) = −6, bukan 6. Dan −5 + 7 = 2 (bukan 12).</p></section>\n<section class=\"box awam\"><h4>💬 Tanya ke siswa</h4><p>Kalau digeser lagi dengan vektor (−7, 9), titiknya kembali ke mana? (ke G)</p></section>",
    "explainImage": "img/tka2-t21.png"
  },
  {
    "n": 22,
    "text": "Titik H(−6, 4) dicerminkan terhadap garis y = x. Tentukan koordinat bayangannya.",
    "options": [
      "(−6, 4)",
      "(4, −6)",
      "(6, −4)",
      "(−4, 6)"
    ],
    "answer": "B",
    "explain": "<p class=\"keystatus ok\"><b>Kunci: B</b> · Materi: Refleksi (Pencerminan)</p>\n<h4 class=\"steps-title\">Langkah penyelesaian</h4>\n<ol class=\"steps\"><li>Cermin y = x → <b>tukar posisi</b> x dan y: (x, y) → (y, x).</li><li>H(−6, 4) → H′(<b>4, −6</b>).</li><li>Tanda ikut pindah bersama angkanya (−6 tetap −6).</li><li>Cek: titik tengah H dan H′ = (−1, −1) berada di garis y = x ✔</li></ol>\n<section class=\"box jawab\"><p><b>JAWABAN  ▶  </b>(4, −6)  →  jawaban <b>B</b>.</p></section>\n<section class=\"box cepat\"><h4>💡 Trik</h4><p>y = x: tukar. y = −x: tukar + ganti kedua tanda. Sumbu x: y ganti tanda. Sumbu y: x ganti tanda.</p></section>\n<section class=\"box jebakan\"><h4>⚠️ Awas jebakan</h4><p>Opsi (−4, 6) adalah hasil cermin terhadap y = −x. Angka berpindah membawa tandanya sendiri.</p></section>\n<section class=\"box awam\"><h4>💬 Tanya ke siswa</h4><p>Garis penghubung titik dan bayangannya tegak lurus dengan cermin. Coba lihat di gambar!</p></section>",
    "explainImage": "img/tka2-t22.png"
  },
  {
    "n": 23,
    "text": "Titik I(3, −4) dirotasikan 180° terhadap titik pusat O(0, 0). Tentukan koordinat bayangannya.",
    "options": [
      "(3, 4)",
      "(−3, 4)",
      "(−3, −4)",
      "(4, −3)"
    ],
    "answer": "B",
    "explain": "<p class=\"keystatus ok\"><b>Kunci: B</b> · Materi: Rotasi (Perputaran)</p>\n<h4 class=\"steps-title\">Langkah penyelesaian</h4>\n<ol class=\"steps\"><li>Putar 180° = putar setengah lingkaran → titik jatuh di seberang pusat dengan <b>jarak sama</b>.</li><li>Aturan: (x, y) → (−x, −y) — kedua tanda berbalik.</li><li>I(3, −4) → I′(<b>−3, 4</b>).</li><li>Cek: I, O, dan I′ segaris, O tepat di tengah ✔</li></ol>\n<section class=\"box jawab\"><p><b>JAWABAN  ▶  </b>(−3, 4)  →  jawaban <b>B</b>.</p></section>\n<section class=\"box cepat\"><h4>💡 Trik</h4><p>Rotasi 180° = balik KEDUA tanda. Cermin sumbu x atau y hanya membalik SATU tanda.</p></section>\n<section class=\"box jebakan\"><h4>⚠️ Awas jebakan</h4><p>(3, 4) = cermin terhadap sumbu x dan (−3, −4) = cermin terhadap sumbu y. Rotasi 180° membalik keduanya.</p></section>\n<section class=\"box awam\"><h4>💬 Tanya ke siswa</h4><p>Satu putaran penuh 360°. Titik mana yang tidak berpindah saat diputar? (pusat O)</p></section>",
    "explainImage": "img/tka2-t23.png"
  },
  {
    "n": 24,
    "text": "Titik J(8, −12) didilatasi dengan pusat P(2, −2) dan faktor skala ½. Tentukan koordinat bayangannya.",
    "options": [
      "(5, −7)",
      "(4, −6)",
      "(3, −5)",
      "(6, −8)"
    ],
    "answer": "A",
    "explain": "<p class=\"keystatus ok\"><b>Kunci: A</b> · Materi: Dilatasi (Perbesaran)</p>\n<h4 class=\"steps-title\">Langkah penyelesaian</h4>\n<ol class=\"steps\"><li>Pusat BUKAN O → pakai rumus: x′ = k(x − a) + a dan y′ = k(y − b) + b, pusat (a, b) = (2, −2).</li><li>x′ = ½(8 − 2) + 2 = 3 + 2 = <b>5</b>.</li><li>y′ = ½(−12 − (−2)) + (−2) = ½(−10) − 2 = <b>−7</b>.</li><li>Bayangan J′(<b>5, −7</b>).</li><li>Trik: k = ½ → J′ adalah <b>titik tengah</b> P dan J: ((2+8)/2, (−2−12)/2) = (5, −7) ✔</li></ol>\n<section class=\"box jawab\"><p><b>JAWABAN  ▶  </b>(5, −7)  →  jawaban <b>A</b>.</p></section>\n<section class=\"box cepat\"><h4>💡 Trik</h4><p>Dilatasi berpusat di P dengan k = ½ → bayangannya tepat di tengah-tengah antara P dan titik asal.</p></section>\n<section class=\"box jebakan\"><h4>⚠️ Awas jebakan</h4><p>Lupa menambah kembali pusat (+a, +b) di akhir, atau memakai pusat O → hasilnya (4, −6) (opsi B).</p></section>\n<section class=\"box awam\"><h4>💬 Tanya ke siswa</h4><p>Kalau faktor skalanya 2, bayangannya ada di mana? (di luar J pada garis yang sama dari P, 2× lebih jauh dari P)</p></section>",
    "explainImage": "img/tka2-t24.png"
  },
  {
    "n": 25,
    "text": "Sebuah prisma beralas trapesium dengan sisi sejajar 10 cm dan 6 cm serta tinggi trapesium 5 cm. Tinggi prisma 12 cm. Volume prisma tersebut adalah ...",
    "options": [
      "420 cm³",
      "450 cm³",
      "480 cm³",
      "500 cm³"
    ],
    "answer": "C",
    "explain": "<p class=\"keystatus ok\"><b>Kunci: C</b> · Materi: Volume Prisma</p>\n<h4 class=\"steps-title\">Langkah penyelesaian</h4>\n<ol class=\"steps\"><li>Volume prisma = <b>luas alas × tinggi prisma</b>.</li><li>Luas alas (trapesium) = ½ × (10 + 6) × 5 = ½ × 16 × 5 = <b>40 cm²</b>.</li><li>Volume = 40 × 12 = <b>480 cm³</b>.</li><li>Bayangkan 12 lembar trapesium (masing-masing 40 cm²) ditumpuk setinggi 12 cm.</li></ol>\n<section class=\"box jawab\"><p><b>JAWABAN  ▶  </b>480 cm³  →  jawaban <b>C</b>.</p></section>\n<section class=\"box cepat\"><h4>💡 Trik</h4><p>Ada DUA tinggi: tinggi trapesium (5 cm, dipakai di luas alas) dan tinggi prisma (12 cm, mengalikan di akhir).</p></section>\n<section class=\"box jebakan\"><h4>⚠️ Awas jebakan</h4><p>Tertukar tinggi 5 dan 12. Jangan memasukkan 12 ke dalam rumus luas trapesium.</p></section>\n<section class=\"box awam\"><h4>💬 Tanya ke siswa</h4><p>Mana yang berbentuk bidang datar dan mana yang berbentuk benda? Tinggi yang mana yang “menumpuk”?</p></section>",
    "explainImage": "img/tka2-t25.png"
  },
  {
    "n": 26,
    "text": "Data waktu tempuh (menit) 9 karyawan menuju kantor: 18, 22, 26, 30, 30, 30, 34, 38, 42. Tentukan mean dan modus data tersebut secara berurutan.",
    "options": [
      "28 dan 30",
      "30 dan 30",
      "30 dan 34",
      "32 dan 30"
    ],
    "answer": "B",
    "explain": "<p class=\"keystatus ok\"><b>Kunci: B</b> · Materi: Mean &amp; Modus</p>\n<h4 class=\"steps-title\">Langkah penyelesaian</h4>\n<ol class=\"steps\"><li><b>Mean</b> = jumlah semua data ÷ banyak data.</li><li>Jumlah = 18+22+26+30+30+30+34+38+42 = <b>270</b>; banyak data = 9.</li><li>Mean = 270 ÷ 9 = <b>30</b>.</li><li><b>Modus</b> = data yang paling sering muncul → 30 muncul 3 kali → <b>30</b>.</li><li>Trik cepat: pasangan 18+42, 22+38, 26+34 masing-masing 60 → rata-ratanya 30 ✔</li></ol>\n<section class=\"box jawab\"><p><b>JAWABAN  ▶  </b>30 dan 30  →  jawaban <b>B</b>.</p></section>\n<section class=\"box cepat\"><h4>💡 Trik</h4><p>Mean = titik seimbang (seperti papan jungkat-jungkit). Modus = tumpukan terbanyak.</p></section>\n<section class=\"box jebakan\"><h4>⚠️ Awas jebakan</h4><p>Pada umumnya mean ≠ modus. Di soal ini kebetulan sama karena datanya simetris.</p></section>\n<section class=\"box awam\"><h4>💬 Tanya ke siswa</h4><p>Kalau 42 diganti 60, mean naik atau turun? Modusnya berubah? (mean naik, modus tetap 30)</p></section>",
    "explainImage": "img/tka2-t26.png"
  },
  {
    "n": 27,
    "text": "Rata-rata nilai suatu kelompok n siswa adalah 72. Setelah seorang siswa baru dengan nilai 90 bergabung, rata-rata kelompok menjadi 75. Berapa banyak siswa (n) sebelum penambahan tersebut?",
    "options": [
      "4",
      "5",
      "6",
      "7"
    ],
    "answer": "B",
    "explain": "<p class=\"keystatus ok\"><b>Kunci: B</b> · Materi: Rata-rata Gabungan</p>\n<h4 class=\"steps-title\">Langkah penyelesaian</h4>\n<ol class=\"steps\"><li>Total nilai awal = 72 × n = <b>72n</b>.</li><li>Setelah bergabung: banyak siswa (n + 1), total nilai (72n + 90).</li><li>Rata-rata baru: (72n + 90) ÷ (n + 1) = 75.</li><li>Kali silang: 72n + 90 = 75n + 75 → 15 = 3n → <b>n = 5</b>.</li><li>Cek: (72×5 + 90) ÷ 6 = 450 ÷ 6 = 75 ✔</li></ol>\n<section class=\"box jawab\"><p><b>JAWABAN  ▶  </b>5  →  jawaban <b>B</b>.</p></section>\n<section class=\"box cepat\"><h4>💡 Trik</h4><p>Cara cepat: nilai 90 melebihi rata-rata baru (75) sebesar 15. Kelebihan itu dibagi ke siswa lama yang naik 3 per orang → 15 ÷ 3 = 5.</p></section>\n<section class=\"box jebakan\"><h4>⚠️ Awas jebakan</h4><p>Banyak siswa setelah bergabung = n + 1, bukan n. Banyak yang lupa menambah 1.</p></section>\n<section class=\"box awam\"><h4>💬 Tanya ke siswa</h4><p>Kenapa rata-rata hanya naik 3 padahal siswa baru bernilai 90? Ke mana “kelebihan” nilainya dibagi?</p></section>",
    "explainImage": "img/tka2-t27.png"
  },
  {
    "n": 28,
    "text": "Diagram batang menunjukkan buku terjual selama 5 bulan: Januari 120, Februari 150, Maret 90, April 180, Mei 160. Berapa persentase kenaikan penjualan dari Maret ke April?",
    "options": [
      "50%",
      "80%",
      "100%",
      "120%"
    ],
    "answer": "C",
    "explain": "<p class=\"keystatus ok\"><b>Kunci: C</b> · Materi: Persentase · Diagram Batang</p>\n<h4 class=\"steps-title\">Langkah penyelesaian</h4>\n<ol class=\"steps\"><li>Baca diagram: Maret = 90, April = 180.</li><li>Kenaikan = 180 − 90 = <b>90 buku</b>.</li><li>Persentase kenaikan = kenaikan ÷ <b>nilai awal</b> × 100%.</li><li>= 90 ÷ 90 × 100% = <b>100%</b> (jadi 2 kali lipat).</li><li>Cek: naik 100% dari 90 → 90 + 90 = 180 ✔</li></ol>\n<section class=\"box jawab\"><p><b>JAWABAN  ▶  </b>100%  →  jawaban <b>C</b>.</p></section>\n<section class=\"box cepat\"><h4>💡 Trik</h4><p>Persen kenaikan SELALU dibagi nilai AWAL (Maret), bukan nilai akhir (April).</p></section>\n<section class=\"box jebakan\"><h4>⚠️ Awas jebakan</h4><p>90 ÷ 180 = 50% adalah jebakan (dibagi nilai akhir). Soal bilang “dari Maret”, jadi pembaginya Maret.</p></section>\n<section class=\"box awam\"><h4>💬 Tanya ke siswa</h4><p>Kalau naik 100%, nilainya jadi berapa kali lipat? Kalau naik 50%?</p></section>",
    "explainImage": "img/tka2-t28.png"
  },
  {
    "n": 29,
    "text": "Dalam sebuah kantong terdapat 15 kelereng bernomor 1 sampai 15. Diambil satu kelereng secara acak. Tentukan peluang terambil kelereng bernomor kelipatan 3 atau kelipatan 5.",
    "options": [
      "7/15",
      "8/15",
      "1/3",
      "1/2"
    ],
    "answer": "A",
    "explain": "<p class=\"keystatus ok\"><b>Kunci: A</b> · Materi: Peluang · Diagram Venn</p>\n<h4 class=\"steps-title\">Langkah penyelesaian</h4>\n<ol class=\"steps\"><li>Semua kemungkinan: n(S) = <b>15</b>.</li><li>Kelipatan 3: 3, 6, 9, 12, 15 → 5 bilangan.</li><li>Kelipatan 5: 5, 10, 15 → 3 bilangan.</li><li>Angka 15 muncul di kedua daftar → dihitung <b>SEKALI</b>: 5 + 3 − 1 = <b>7</b>.</li><li>Peluang = <b>7/15</b>.</li></ol>\n<section class=\"box jawab\"><p><b>JAWABAN  ▶  </b>7/15  →  jawaban <b>A</b>.</p></section>\n<section class=\"box cepat\"><h4>💡 Trik</h4><p>Kata “atau” dengan irisan: n(A ∪ B) = n(A) + n(B) − n(A ∩ B). Gambar Venn supaya tidak terhitung dobel.</p></section>\n<section class=\"box jebakan\"><h4>⚠️ Awas jebakan</h4><p>5 + 3 = 8 (opsi 8/15) adalah jebakan: angka 15 terhitung dua kali.</p></section>\n<section class=\"box awam\"><h4>💬 Tanya ke siswa</h4><p>Angka mana yang masuk di kedua lingkaran? Kenapa tidak boleh dihitung dua kali?</p></section>",
    "explainImage": "img/tka2-t29.png"
  },
  {
    "n": 30,
    "text": "Sebuah pabrik menguji 200 produk dan menemukan 14 produk cacat. Tentukan frekuensi relatif produk yang TIDAK cacat.",
    "options": [
      "0,07",
      "0,86",
      "0,93",
      "0,14"
    ],
    "answer": "C",
    "explain": "<p class=\"keystatus ok\"><b>Kunci: C</b> · Materi: Frekuensi Relatif</p>\n<h4 class=\"steps-title\">Langkah penyelesaian</h4>\n<ol class=\"steps\"><li>Produk tidak cacat = 200 − 14 = <b>186</b>.</li><li>Frekuensi relatif = banyak kejadian ÷ total percobaan.</li><li>= 186 ÷ 200 = <b>0,93</b>.</li><li>Cara lain: cacat = 14/200 = 0,07 → tidak cacat = 1 − 0,07 = 0,93 ✔</li></ol>\n<section class=\"box jawab\"><p><b>JAWABAN  ▶  </b>0,93  →  jawaban <b>C</b>.</p></section>\n<section class=\"box cepat\"><h4>💡 Trik</h4><p>Frekuensi relatif “kejadian” + “bukan kejadian” selalu = 1 (atau 100%).</p></section>\n<section class=\"box jebakan\"><h4>⚠️ Awas jebakan</h4><p>0,07 adalah frekuensi relatif produk CACAT. Soal minta yang TIDAK cacat — baca kata “tidak”!</p></section>\n<section class=\"box awam\"><h4>💬 Tanya ke siswa</h4><p>Kalau 7 dari 100 produk cacat, berapa persen yang bagus?</p></section>",
    "explainImage": "img/tka2-t30.png"
  }
];
