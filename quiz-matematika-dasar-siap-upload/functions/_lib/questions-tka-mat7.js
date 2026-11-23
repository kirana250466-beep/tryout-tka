// Bank soal TKA Matematika 7 (quiz id "tka7"): 30 soal Try Out 5 TKA SMP Matematika (Kelas IX), pilihan A sampai D.
// Dibuat dari dokumen "Soal_TKA_SMP_Matematika_TryOut5_Soal1-30.docx" (soal, kunci, pembahasan ringkas, dan rekap kunci).
// Materi: barisan dan deret aritmetika, fungsi linear, peluang dan proporsi data, volume bangun ruang gabungan, SPLDV,
// aritmetika sosial, luas dan keliling bangun datar, teorema Pythagoras, persamaan garis lurus, perbandingan, transformasi geometri,
// statistika (mean, median, modus), lingkaran, skala peta, volume tabung, persentase, dan jarak pada kisi koordinat.
//
// Pembahasan guru dan siswa SAMA:
//  - Isi pembahasan ada di field explain tiap soal (HTML). Mode guru (login "Ferdi") menampilkannya langsung.
//  - Siswa menerima isi yang sama lewat EXPLAIN_SISWA di bawah file ini (dibuat otomatis dari field explain),
//    tepat setelah soal itu dijawab (lihat studentExplainOf di quizzes.js). Mengubah explain berarti mengubah keduanya.
//
// Catatan penyesuaian dari dokumen:
//  - 21 soal berupa pilihan ganda A sampai D (satu jawaban). 9 soal (No. 1, 3, 7, 16, 17, 18, 20, 23, 27) di dokumen berupa tabel
//    pernyataan Benar / Salah. Di website semuanya dijadikan pilihan ganda kompleks, seperti soal 10 dan 17 pada quiz tka3:
//    tiap pernyataan menjadi satu pilihan (pernyataan 1 = A, 2 = B, dst.), siswa memilih SEMUA pernyataan yang benar, dan jawaban
//    dianggap benar hanya jika pilihannya sama persis dengan kunci. Kalimat "tentukan apakah setiap pernyataan berikut Benar atau
//    Salah" diganti "pilih semua pernyataan berikut yang benar" (soal 16 dan 20 sudah berbunyi "pilih semua" di dokumen).
//    Kunci: soal 1 = A, C; soal 3 = A, C; soal 7 = A, C, D; soal 16 = A, C; soal 17 = A, C; soal 20 = A, C, D; soal 23 = A, B, C;
//    soal 27 = A, B. Soal 18 hanya punya satu pernyataan benar (B), jadi menjadi pilihan tunggal dan kalimat soalnya berbunyi
//    "pilih pernyataan berikut yang benar".
//  - Pada pembahasan soal Benar/Salah, "(1) BENAR — ..." ditulis "A. Pernyataan benar. ..." (hijau) atau "A. Pernyataan salah. ..." (merah muda);
//    rujukan "pernyataan (2)" dan sejenisnya di kotak "Awas!" disesuaikan menjadi huruf pilihan.
//  - Judul topik tiap soal (mis. "Fungsi Linear") dan label jenis soal ("Pilihan Ganda", "Pernyataan Benar / Salah") tidak ditampilkan di soal
//    supaya tidak membocorkan cara menyelesaikan; topik muncul di pembahasan ("Topik: ..."). Penanda jawaban benar di dokumen (huruf tebal,
//    kolom BENAR / SALAH) tidak ikut dipakai di soal.
//  - Kotak "Awas!" di dokumen ditampilkan sebagai kotak jebakan (kelas box jebakan), huruf pertama kalimatnya dikapitalkan.
//    Di akhir tiap pembahasan ditambahkan kotak "Jadi, jawaban yang tepat adalah ..." seperti quiz lain.
//    Spasi pemisah panjang di dokumen (soal 5, 12, 14, 19) ditampilkan sebagai baris baru.
//  - Tabel data ditulis ulang sebagai tabel HTML (field html, kelas qtable). Pecahan pada pilihan soal 21 digambar bertumpuk (field optionsHtml,
//    tanpa KaTeX); pecahan lain tetap ditulis dengan garis miring seperti di dokumen. Field text dan options berisi versi teks biasa.
//  - Gambar diambil dari dokumen: soal 4, 7, 8, 10, 11, 15, 24, 25, 26 (img/tka7-q04.png, q07, q08, q10, q11, q15, q24, q25, q26),
//    dan soal 30 memakai ulang gambar soal 7 (img/tka7-q07.png). Semua gambar ada di bagian soal, tidak ada di pembahasan.
//    Gambar soal 26 sudah memuat keterangan "7 kisi" pada jalur robot (seperti di dokumen).
//  - Soal 28: dokumen memuat dua catatan yang isinya sama (12% dari total anggaran); keduanya dipertahankan.
//  - Soal 30: kalimat "Keluarga tersebut ..." tidak punya rujukan di soal itu sendiri (rujukannya ada di soal 7), tetapi gambar sudah
//    memuat semua ukuran yang dibutuhkan, jadi teks dibiarkan seperti di dokumen.
//  - Kunci mengikuti tabel "Rekap Kunci Jawaban" di dokumen, cocok dengan penanda jawaban di tiap soal, dan sudah dihitung ulang satu per satu:
//    30 dari 30 cocok.
//
// Kunci (soal 1 sampai 30): A,C D A,C A C A A,C,D B C D A D A C A A,C A,C B D A,C,D D A A,B,C A D B A,B B B B
//
// File ini hanya dibaca server, jadi kunci dan pembahasan tidak dikirim ke siswa sebelum mereka menjawab.

export const QUESTIONS = [
  {
    "n": 1,
    "text": "Seorang karyawan menyusun rencana tabungan bulanan sebagai berikut: pada bulan pertama ia menabung Rp200.000, dan setiap bulan berikutnya jumlah tabungannya bertambah tetap sebesar Rp50.000 dibandingkan bulan sebelumnya. Rencana ini akan dijalankan secara konsisten selama 15 bulan.\nBerdasarkan rencana tersebut, pilih semua pernyataan berikut yang benar.",
    "html": "<div class=\"qp\">Seorang karyawan menyusun rencana tabungan bulanan sebagai berikut: pada bulan pertama ia menabung <b>Rp200.000</b>, dan setiap bulan berikutnya jumlah tabungannya bertambah tetap sebesar <b>Rp50.000</b> dibandingkan bulan sebelumnya. Rencana ini akan dijalankan secara konsisten selama <b>15 bulan</b>.</div><div class=\"qp\">Berdasarkan rencana tersebut, pilih <b>semua</b> pernyataan berikut yang <b>benar</b>.</div>",
    "options": [
      "Jumlah tabungan pada bulan ke-10 adalah Rp650.000.",
      "Selisih tabungan antara bulan ke-12 dan bulan ke-7 adalah Rp200.000.",
      "Total seluruh tabungan dari bulan ke-1 hingga bulan ke-15 adalah Rp8.250.000."
    ],
    "answer": "AC",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: A, C (pernyataan 1 dan 3)</b> · Topik: Barisan &amp; Deret Aritmetika</p>\n<p>Diketahui <b>a = 200.000</b> dan <b>b = 50.000</b>. Rumus: U<sub>n</sub> = a + (n − 1)b dan S<sub>n</sub> = n/2 × (a + U<sub>n</sub>).</p>\n<p class=\"ev ok\"><b>A. Pernyataan benar.</b> U<sub>10</sub> = 200.000 + 9 × 50.000 = <b>650.000</b>.</p>\n<p class=\"ev no\"><b>B. Pernyataan salah.</b> U<sub>12</sub> − U<sub>7</sub> = 5b = 5 × 50.000 = <b>250.000</b>, bukan 200.000.</p>\n<p class=\"ev ok\"><b>C. Pernyataan benar.</b> U<sub>15</sub> = 200.000 + 14 × 50.000 = 900.000, maka S<sub>15</sub> = 15/2 × (200.000 + 900.000) = <b>8.250.000</b>.</p>\n<section class=\"box jebakan\"><h4>Awas!</h4><p>Selisih dua suku = (selisih nomor suku) × b. Dari suku ke-7 ke ke-12 ada 5 langkah.</p></section>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah A dan C.</b></p></section>"
  },
  {
    "n": 2,
    "text": "Sebuah aplikasi PDAM mencatat tagihan air rumah tangga berdasarkan pemakaian sebagai berikut.\nBulan | Pemakaian | Tagihan\nJanuari | 10 m³ | Rp50.000\nFebruari | 15 m³ | Rp70.000\nJika hubungan antara pemakaian air dan besar tagihan bersifat linear dan pola ini terus berlaku, berapa perkiraan tagihan untuk pemakaian 20 m³ pada bulan berikutnya?",
    "html": "<div class=\"qp\">Sebuah aplikasi PDAM mencatat tagihan air rumah tangga berdasarkan pemakaian sebagai berikut.</div><table class=\"qtable\"><thead><tr><th>Bulan</th><th>Pemakaian</th><th>Tagihan</th></tr></thead><tbody><tr><td>Januari</td><td>10 m³</td><td>Rp50.000</td></tr><tr><td>Februari</td><td>15 m³</td><td>Rp70.000</td></tr></tbody></table><div class=\"qp\">Jika hubungan antara pemakaian air dan besar tagihan bersifat linear dan pola ini terus berlaku, berapa perkiraan tagihan untuk pemakaian <b>20 m³</b> pada bulan berikutnya?</div>",
    "options": [
      "Rp100.000",
      "Rp93.300",
      "Rp80.000",
      "Rp90.000"
    ],
    "answer": "D",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: D</b> · Topik: Fungsi Linear</p>\n<ul><li>Dua titik: (10 ; 50.000) dan (15 ; 70.000).</li><li>Kenaikan tiap 1 m³ = (70.000 − 50.000) ÷ (15 − 10) = <b>Rp4.000</b>.</li><li>Tagihan 20 m³ = 70.000 + (20 − 15) × 4.000 = <b>Rp90.000</b>.</li></ul>\n<section class=\"box jebakan\"><h4>Awas!</h4><p>Tiap tambah 5 m³ tagihan naik Rp20.000, jadi 70.000 + 20.000 = 90.000 (langsung ketemu).</p></section>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah D.</b></p></section>"
  },
  {
    "n": 3,
    "text": "Sebuah kampanye daur ulang di dua sekolah memeriksa sampel sampah yang dikumpulkan siswa untuk menilai ketepatan pemilahan. Hasil pemeriksaan dicatat dalam tabel berikut.\nSekolah | Jumlah Sampel Diperiksa | Jumlah Sampah Terpilah Benar\nSMP A | 50 | 32\nSMP B | 80 | 56\nBerdasarkan tabel tersebut, pilih semua pernyataan berikut yang benar.",
    "html": "<div class=\"qp\">Sebuah kampanye daur ulang di dua sekolah memeriksa sampel sampah yang dikumpulkan siswa untuk menilai ketepatan pemilahan. Hasil pemeriksaan dicatat dalam tabel berikut.</div><table class=\"qtable\"><thead><tr><th>Sekolah</th><th>Jumlah Sampel Diperiksa</th><th>Jumlah Sampah Terpilah Benar</th></tr></thead><tbody><tr><td>SMP A</td><td>50</td><td>32</td></tr><tr><td>SMP B</td><td>80</td><td>56</td></tr></tbody></table><div class=\"qp\">Berdasarkan tabel tersebut, pilih <b>semua</b> pernyataan berikut yang <b>benar</b>.</div>",
    "options": [
      "Peluang sampah terpilah dengan benar di SMP B lebih besar dibandingkan SMP A.",
      "Karena jumlah sampel yang diperiksa di SMP B lebih banyak, peluang keberhasilan pemilahan sampah di SMP B pasti lebih besar.",
      "Jika data kedua sekolah digabungkan, peluang sampah terpilah dengan benar secara keseluruhan adalah 88/130."
    ],
    "answer": "AC",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: A, C (pernyataan 1 dan 3)</b> · Topik: Peluang (Proporsi Data)</p>\n<p>Peluang = banyak terpilah benar ÷ banyak sampel diperiksa.</p>\n<p class=\"ev ok\"><b>A. Pernyataan benar.</b> SMP A = 32/50 = <b>64%</b>; SMP B = 56/80 = <b>70%</b>. Karena 70% &gt; 64%, SMP B lebih besar.</p>\n<p class=\"ev no\"><b>B. Pernyataan salah.</b> Peluang ditentukan oleh <b>perbandingan (proporsi)</b>, bukan oleh banyaknya sampel. Alasannya keliru.</p>\n<p class=\"ev ok\"><b>C. Pernyataan benar.</b> (32 + 56) ÷ (50 + 80) = <b>88/130</b> (≈ 67,7%).</p>\n<section class=\"box jebakan\"><h4>Awas!</h4><p>Kesimpulan benar tetapi alasan salah → pernyataan tetap dinilai Salah.</p></section>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah A dan C.</b></p></section>"
  },
  {
    "n": 4,
    "text": "Sebuah usaha logistik menyewa kontainer penyimpanan sementara berbentuk gabungan balok dan prisma segitiga untuk menyimpan barang selama masa gudang utama direnovasi. Dokumen spesifikasi kontainer menyebutkan sebagai berikut.\n\nSpesifikasi Kontainer\nBagian Balok: panjang 6 m, lebar 3 m, tinggi 2,5 m\nBagian Atap (Prisma Segitiga): alas segitiga 3 m, tinggi segitiga 1,2 m, panjang kontainer 6 m\nBerapa kapasitas volume total ruang penyimpanan di dalam kontainer tersebut?",
    "html": "<div class=\"qp\">Sebuah usaha logistik menyewa kontainer penyimpanan sementara berbentuk gabungan balok dan prisma segitiga untuk menyimpan barang selama masa gudang utama direnovasi. Dokumen spesifikasi kontainer menyebutkan sebagai berikut.</div><div class=\"qp\"><img class=\"qimg\" src=\"img/tka7-q04.png\" alt=\"Kontainer berbentuk balok 6 m x 3 m x 2,5 m dengan atap prisma segitiga setinggi 1,2 m\"></div><div class=\"qp\"><b>Spesifikasi Kontainer</b></div><div class=\"qp\"><ul style=\"margin:4px 0 0;padding-left:22px\"><li>Bagian Balok: panjang 6 m, lebar 3 m, tinggi 2,5 m</li><li>Bagian Atap (Prisma Segitiga): alas segitiga 3 m, tinggi segitiga 1,2 m, panjang kontainer 6 m</li></ul></div><div class=\"qp\">Berapa kapasitas volume total ruang penyimpanan di dalam kontainer tersebut?</div>",
    "options": [
      "55,8 m³",
      "45 m³",
      "67,5 m³",
      "56,7 m³"
    ],
    "answer": "A",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: A</b> · Topik: Volume Bangun Ruang Gabungan</p>\n<ul><li>Volume balok = p × l × t = 6 × 3 × 2,5 = <b>45 m³</b>.</li><li>Volume prisma = luas alas segitiga × panjang = (½ × 3 × 1,2) × 6 = 1,8 × 6 = <b>10,8 m³</b>.</li><li>Volume total = 45 + 10,8 = <b>55,8 m³</b>.</li></ul>\n<section class=\"box jebakan\"><h4>Awas!</h4><p>45 m³ (opsi B) hanya menghitung balok. Atap juga bagian ruang penyimpanan, jadi harus ditambahkan.</p></section>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah A.</b></p></section>"
  },
  {
    "n": 5,
    "text": "Koperasi siswa sebuah SMP menjual dua jenis alat tulis dalam paket promo awal tahun ajaran, yaitu paket pensil dan paket pulpen. Laporan penjualan koperasi mencatat bahwa dalam satu hari terjual 60 paket dengan total pendapatan Rp1.020.000. Harga satu paket pensil adalah Rp15.000, sedangkan harga satu paket pulpen adalah Rp20.000.\nBerapa selisih jumlah paket pensil dan paket pulpen yang terjual pada hari itu?",
    "html": "<div class=\"qp\">Koperasi siswa sebuah SMP menjual dua jenis alat tulis dalam paket promo awal tahun ajaran, yaitu paket pensil dan paket pulpen. Laporan penjualan koperasi mencatat bahwa dalam satu hari terjual <b>60 paket</b> dengan total pendapatan <b>Rp1.020.000</b>. Harga satu paket pensil adalah Rp15.000, sedangkan harga satu paket pulpen adalah Rp20.000.</div><div class=\"qp\">Berapa selisih jumlah paket pensil dan paket pulpen yang terjual pada hari itu?</div>",
    "options": [
      "8 paket",
      "24 paket",
      "12 paket",
      "16 paket"
    ],
    "answer": "C",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: C</b> · Topik: Sistem Persamaan Linear Dua Variabel</p>\n<ul><li>Misal x = paket pensil, y = paket pulpen.<br>(i) x + y = 60<br>(ii) 15.000x + 20.000y = 1.020.000 → 3x + 4y = 204.</li><li>(ii) − 3 × (i): (3x + 4y) − (3x + 3y) = 204 − 180 → <b>y = 24</b>, sehingga <b>x = 36</b>.</li><li>Selisih = 36 − 24 = <b>12 paket</b>.</li></ul>\n<section class=\"box jebakan\"><h4>Awas!</h4><p>24 (opsi B) adalah jumlah paket pulpen, bukan selisihnya.</p></section>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah C.</b></p></section>"
  },
  {
    "n": 6,
    "text": "Warung makan \"Bu Sari\" mencatat pendapatan mingguan selama sebulan dalam buku catatan usaha sebagai berikut.\nMinggu 1 | Minggu 2 | Minggu 3 | Minggu 4\nRp2.400.000 | Rp2.800.000 | Rp3.000.000 | Rp3.200.000\nSetiap minggu, biaya operasional yang dikeluarkan adalah 65% dari pendapatan minggu tersebut, ditambah biaya sewa tetap sebesar Rp150.000 per minggu.\nBerapa rata-rata keuntungan (setelah dikurangi seluruh biaya) per minggu selama bulan tersebut?",
    "html": "<div class=\"qp\">Warung makan \"Bu Sari\" mencatat pendapatan mingguan selama sebulan dalam buku catatan usaha sebagai berikut.</div><table class=\"qtable\"><thead><tr><th>Minggu 1</th><th>Minggu 2</th><th>Minggu 3</th><th>Minggu 4</th></tr></thead><tbody><tr><td>Rp2.400.000</td><td>Rp2.800.000</td><td>Rp3.000.000</td><td>Rp3.200.000</td></tr></tbody></table><div class=\"qp\">Setiap minggu, biaya operasional yang dikeluarkan adalah <b>65%</b> dari pendapatan minggu tersebut, ditambah biaya sewa tetap sebesar <b>Rp150.000</b> per minggu.</div><div class=\"qp\">Berapa rata-rata keuntungan (setelah dikurangi seluruh biaya) per minggu selama bulan tersebut?</div>",
    "options": [
      "Rp847.500",
      "Rp678.000",
      "Rp997.500",
      "Rp1.702.500"
    ],
    "answer": "A",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: A</b> · Topik: Aritmetika Sosial (Untung–Rugi)</p>\n<ul><li>Total pendapatan = 2,4 + 2,8 + 3,0 + 3,2 = <b>11,4 juta</b> → rata-rata = 11.400.000 ÷ 4 = <b>2.850.000</b> per minggu.</li><li>Biaya operasional 65% → sisa untung kotor <b>35%</b> dari pendapatan.</li><li>Untung rata-rata = 35% × 2.850.000 − 150.000 = 997.500 − 150.000 = <b>Rp847.500</b>.</li></ul>\n<section class=\"box jebakan\"><h4>Awas!</h4><p>Rp997.500 (opsi C) lupa mengurangi sewa tetap Rp150.000.</p></section>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah A.</b></p></section>"
  },
  {
    "n": 7,
    "text": "Sebuah keluarga merancang taman atap (rooftop garden) di atas rumahnya. Denah menunjukkan area atap berbentuk persegi panjang berukuran 12 m × 9 m. Pada salah satu sudut area tersebut terdapat ruang instalasi panel surya berukuran 4 m × 3 m yang tidak dapat digunakan untuk taman.\n\nBerdasarkan denah tersebut, pilih semua pernyataan berikut yang benar.",
    "html": "<div class=\"qp\">Sebuah keluarga merancang taman atap (rooftop garden) di atas rumahnya. Denah menunjukkan area atap berbentuk persegi panjang berukuran <b>12 m × 9 m</b>. Pada salah satu sudut area tersebut terdapat ruang instalasi panel surya berukuran <b>4 m × 3 m</b> yang tidak dapat digunakan untuk taman.</div><div class=\"qp\"><img class=\"qimg\" src=\"img/tka7-q07.png\" alt=\"Denah atap: persegi panjang 12 m x 9 m dengan ruang panel surya 4 m x 3 m di satu sudut\"></div><div class=\"qp\">Berdasarkan denah tersebut, pilih <b>semua</b> pernyataan berikut yang <b>benar</b>.</div>",
    "options": [
      "Luas area taman atap yang dapat dimanfaatkan adalah 96 m².",
      "Bentuk area taman tersebut dapat dianggap sebagai persegi panjang utuh berukuran 12 m × 9 m, sehingga luasnya adalah 108 m².",
      "Jika ruang instalasi panel surya diperbesar menjadi 5 m × 4 m, luas area taman yang dapat dimanfaatkan akan berkurang menjadi 88 m².",
      "Keliling area taman yang dapat dimanfaatkan tetap sama dengan keliling persegi panjang 12 m × 9 m, karena posisi ruang instalasi panel surya berada tepat di salah satu sudut area."
    ],
    "answer": "ACD",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: A, C, D (pernyataan 1, 3, dan 4)</b> · Topik: Luas &amp; Keliling Bangun Datar</p>\n<p class=\"ev ok\"><b>A. Pernyataan benar.</b> Luas taman = 12 × 9 − 4 × 3 = 108 − 12 = <b>96 m²</b>.</p>\n<p class=\"ev no\"><b>B. Pernyataan salah.</b> Satu sudut dipakai panel, jadi bentuknya bukan persegi panjang utuh (berbentuk “L”). Luas 108 m² belum dikurangi panel.</p>\n<p class=\"ev ok\"><b>C. Pernyataan benar.</b> Panel 5 × 4 = 20 m², maka 108 − 20 = <b>88 m²</b>.</p>\n<p class=\"ev ok\"><b>D. Pernyataan benar.</b> Keliling bentuk L = 12 + 9 + 8 + 6 + 4 + 3 = <b>42 m</b> = 2 × (12 + 9). Memotong sebuah sudut tidak mengubah keliling.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah A, C, dan D.</b></p></section>"
  },
  {
    "n": 8,
    "text": "Tim pemadam kebakaran menyandarkan tangga darurat pada dinding sebuah gedung untuk evakuasi korban di lantai atas. Catatan prosedur keselamatan tim menuliskan ketentuan berikut.\n\n“Untuk kestabilan optimal saat evakuasi, jarak antara kaki tangga dengan dinding gedung harus 3,6 meter, dengan panjang tangga yang digunakan adalah 8,5 meter.”\nBerapa tinggi maksimum dinding gedung yang dapat dijangkau oleh ujung atas tangga tersebut?",
    "html": "<div class=\"qp\">Tim pemadam kebakaran menyandarkan tangga darurat pada dinding sebuah gedung untuk evakuasi korban di lantai atas. Catatan prosedur keselamatan tim menuliskan ketentuan berikut.</div><div class=\"qp\"><img class=\"qimg\" src=\"img/tka7-q08.png\" alt=\"Tangga bersandar pada dinding gedung; jarak kaki tangga ke dinding 3,6 m, panjang tangga 8,5 m\"></div><div class=\"qp\"><i>“Untuk kestabilan optimal saat evakuasi, jarak antara kaki tangga dengan dinding gedung harus 3,6 meter, dengan panjang tangga yang digunakan adalah 8,5 meter.”</i></div><div class=\"qp\">Berapa tinggi maksimum dinding gedung yang dapat dijangkau oleh ujung atas tangga tersebut?</div>",
    "options": [
      "4,9 m",
      "7,7 m",
      "9,2 m",
      "6,1 m"
    ],
    "answer": "B",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: B</b> · Topik: Teorema Pythagoras</p>\n<ul><li>Tangga, dinding, dan tanah membentuk segitiga siku-siku; <b>tangga = sisi miring (8,5 m)</b>.</li><li>h² = 8,5² − 3,6² = 72,25 − 12,96 = <b>59,29</b>.</li><li>h = √59,29 = <b>7,7 m</b>.</li></ul>\n<section class=\"box jebakan\"><h4>Awas!</h4><p>4,9 m (opsi A) berasal dari 8,5 − 3,6. Pythagoras tidak boleh dikurangi langsung; kuadratkan dulu.</p></section>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah B.</b></p></section>"
  },
  {
    "n": 9,
    "text": "Laporan Pemeriksaan Kesehatan Siswa: Frekuensi Miopia\nSekolah | Siswa yang Diperiksa | Siswa dengan Miopia\nSMP X | 240 | 36\nSMP Y | 180 | 30\nDinas kesehatan akan memprioritaskan salah satu sekolah untuk menerima program edukasi kesehatan mata lanjutan, dengan mempertimbangkan sekolah yang memiliki proporsi risiko rabun jauh lebih tinggi.\nSekolah manakah yang seharusnya diprioritaskan, beserta alasannya?",
    "html": "<div class=\"qp\"><b>Laporan Pemeriksaan Kesehatan Siswa: Frekuensi Miopia</b></div><table class=\"qtable\"><thead><tr><th>Sekolah</th><th>Siswa yang Diperiksa</th><th>Siswa dengan Miopia</th></tr></thead><tbody><tr><td>SMP X</td><td>240</td><td>36</td></tr><tr><td>SMP Y</td><td>180</td><td>30</td></tr></tbody></table><div class=\"qp\">Dinas kesehatan akan memprioritaskan salah satu sekolah untuk menerima program edukasi kesehatan mata lanjutan, dengan mempertimbangkan sekolah yang memiliki proporsi risiko rabun jauh lebih tinggi.</div><div class=\"qp\">Sekolah manakah yang seharusnya diprioritaskan, beserta alasannya?</div>",
    "options": [
      "Kedua sekolah sama, karena jumlah siswa yang diperiksa berbeda sehingga datanya tidak dapat dibandingkan.",
      "SMP X, karena jumlah siswa yang terindikasi rabun jauh lebih banyak dibandingkan SMP Y.",
      "SMP Y, karena peluang terindikasi rabun jauh pada SMP Y lebih besar dibandingkan SMP X.",
      "SMP X, karena peluang terindikasi rabun jauh pada SMP X lebih kecil dibandingkan SMP Y."
    ],
    "answer": "C",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: C</b> · Topik: Perbandingan &amp; Proporsi Data</p>\n<ul><li>Bandingkan <b>proporsi (persentase)</b>, bukan jumlah mentah.</li><li>SMP X = 36/240 = 3/20 = <b>15%</b>.</li><li>SMP Y = 30/180 = 1/6 ≈ <b>16,7%</b>.</li><li>16,7% &gt; 15%, maka risiko di <b>SMP Y lebih tinggi</b> dan itulah yang diprioritaskan.</li></ul>\n<section class=\"box jebakan\"><h4>Awas!</h4><p>Opsi B menggoda karena 36 &gt; 30, tetapi jumlah siswa yang diperiksa tiap sekolah berbeda, sehingga harus dibandingkan secara proporsional.</p></section>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah C.</b></p></section>"
  },
  {
    "n": 10,
    "text": "Seorang pengusaha kedai kopi lokal mencatat pendapatan usahanya setiap bulan sejak awal beroperasi. Hubungan antara bulan usaha berjalan dan pendapatan bulanan (dalam jutaan rupiah) membentuk pola garis lurus yang melalui titik (2, 18) dan (5, 33) pada grafik berikut.\n\nJika pola pertumbuhan pendapatan tersebut terus berlanjut, berapa perkiraan pendapatan usaha pada bulan ke-12?",
    "html": "<div class=\"qp\">Seorang pengusaha kedai kopi lokal mencatat pendapatan usahanya setiap bulan sejak awal beroperasi. Hubungan antara bulan usaha berjalan dan pendapatan bulanan (dalam jutaan rupiah) membentuk pola garis lurus yang melalui titik <b>(2, 18)</b> dan <b>(5, 33)</b> pada grafik berikut.</div><div class=\"qp\"><img class=\"qimg\" src=\"img/tka7-q10.png\" alt=\"Grafik pendapatan bulanan kedai kopi: garis lurus melalui titik (2, 18) dan (5, 33)\"></div><div class=\"qp\">Jika pola pertumbuhan pendapatan tersebut terus berlanjut, berapa perkiraan pendapatan usaha pada <b>bulan ke-12</b>?</div>",
    "options": [
      "Rp64.000.000",
      "Rp73.000.000",
      "Rp60.000.000",
      "Rp68.000.000"
    ],
    "answer": "D",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: D</b> · Topik: Persamaan Garis Lurus</p>\n<ul><li>Gradien m = (33 − 18) ÷ (5 − 2) = <b>5</b> (naik Rp5 juta per bulan).</li><li>Persamaan: y − 18 = 5(x − 2) → <b>y = 5x + 8</b>.</li><li>Bulan ke-12: y = 5(12) + 8 = <b>68 juta = Rp68.000.000</b>.</li></ul>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah D.</b></p></section>"
  },
  {
    "n": 11,
    "text": "Dinas pertamanan kota merancang sebuah taman kota dengan denah sebagai berikut. Taman berbentuk persegi panjang berukuran 25 m × 14 m. Pada salah satu sisi lebar taman terdapat area bermain berbentuk setengah lingkaran dengan diameter sama dengan lebar taman.\n\nDinas pertamanan akan menanam rumput di seluruh area taman tersebut, termasuk area bermain berbentuk setengah lingkaran. Berapakah luas total area yang akan ditanami rumput? (gunakan π = 22/7)",
    "html": "<div class=\"qp\">Dinas pertamanan kota merancang sebuah taman kota dengan denah sebagai berikut. Taman berbentuk persegi panjang berukuran <b>25 m × 14 m</b>. Pada salah satu sisi lebar taman terdapat area bermain berbentuk setengah lingkaran dengan diameter sama dengan lebar taman.</div><div class=\"qp\"><img class=\"qimg\" src=\"img/tka7-q11.png\" alt=\"Denah taman: persegi panjang 25 m x 14 m dengan area bermain setengah lingkaran di sisi lebar\"></div><div class=\"qp\">Dinas pertamanan akan menanam rumput di seluruh area taman tersebut, termasuk area bermain berbentuk setengah lingkaran. Berapakah luas total area yang akan ditanami rumput? (gunakan π = 22/7)</div>",
    "options": [
      "427 m²",
      "350 m²",
      "504 m²",
      "273 m²"
    ],
    "answer": "A",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: A</b> · Topik: Luas Gabungan Bangun Datar</p>\n<ul><li>Luas persegi panjang = 25 × 14 = <b>350 m²</b>.</li><li>Diameter 14 m → r = 7 m. Luas setengah lingkaran = ½ × π × r² = ½ × 22/7 × 7 × 7 = <b>77 m²</b>.</li><li>Luas total = 350 + 77 = <b>427 m²</b>.</li></ul>\n<section class=\"box jebakan\"><h4>Awas!</h4><p>350 m² (opsi B) lupa menambahkan area bermain.</p></section>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah A.</b></p></section>"
  },
  {
    "n": 12,
    "text": "Perhatikan tabel peminjaman buku berikut!\nKategori Buku | Kelas VII | Kelas VIII | Kelas IX\nFiksi | 45 | 38 | 52\nNon-Fiksi | 20 | 25 | 18\nSains | 15 | 22 | 30\nKomik | 30 | 15 | 10\nKepala perpustakaan ingin mengetahui kategori buku yang secara proporsional paling diminati oleh siswa kelas IX, menggunakan indikator perbandingan jumlah peminjaman kelas IX terhadap total peminjaman kategori tersebut di seluruh tingkat kelas.\nKategori buku manakah yang memiliki perbandingan tersebut paling tinggi?",
    "html": "<div class=\"qp\">Perhatikan tabel peminjaman buku berikut!</div><table class=\"qtable\"><thead><tr><th>Kategori Buku</th><th>Kelas VII</th><th>Kelas VIII</th><th>Kelas IX</th></tr></thead><tbody><tr><th>Fiksi</th><td>45</td><td>38</td><td>52</td></tr><tr><th>Non-Fiksi</th><td>20</td><td>25</td><td>18</td></tr><tr><th>Sains</th><td>15</td><td>22</td><td>30</td></tr><tr><th>Komik</th><td>30</td><td>15</td><td>10</td></tr></tbody></table><div class=\"qp\">Kepala perpustakaan ingin mengetahui kategori buku yang secara proporsional paling diminati oleh siswa kelas IX, menggunakan indikator perbandingan jumlah peminjaman kelas IX terhadap total peminjaman kategori tersebut di seluruh tingkat kelas.</div><div class=\"qp\">Kategori buku manakah yang memiliki perbandingan tersebut paling tinggi?</div>",
    "options": [
      "Komik",
      "Fiksi",
      "Non-Fiksi",
      "Sains"
    ],
    "answer": "D",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: D</b> · Topik: Perbandingan &amp; Proporsi Data</p>\n<ul><li>Perbandingan = peminjaman kelas IX ÷ total peminjaman kategori (VII + VIII + IX).</li><li>Fiksi: 52/135 ≈ 38,5%<br>Non-Fiksi: 18/63 ≈ 28,6%</li><li><b>Sains: 30/67 ≈ 44,8% (tertinggi)</b><br>Komik: 10/55 ≈ 18,2%</li></ul>\n<section class=\"box jebakan\"><h4>Awas!</h4><p>Fiksi punya peminjaman kelas IX terbanyak (52), tetapi pertanyaannya soal proporsi, bukan jumlah.</p></section>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah D.</b></p></section>"
  },
  {
    "n": 13,
    "text": "Sebuah komunitas warga merencanakan pembangunan pos kesehatan lingkungan dengan total dana yang dibutuhkan sebesar Rp150.000.000. Dana tersebut direncanakan berasal dari tiga sumber dengan perbandingan (swadaya warga) : (dana CSR perusahaan) : (bantuan pemerintah desa) = 3 : 5 : 2.\nSetelah proses pengumpulan berlangsung, dana CSR yang benar-benar cair hanya 80% dari jumlah yang direncanakan berdasarkan rasio tersebut, sedangkan swadaya warga dan bantuan pemerintah desa cair sepenuhnya sesuai rencana.\nPanitia pembangunan hanya akan memulai proyek jika total dana yang benar-benar terkumpul mencapai minimal 90% dari total dana yang dibutuhkan.\nApakah proyek tersebut dapat mulai dilaksanakan, dan berapa total dana yang benar-benar terkumpul?",
    "html": "<div class=\"qp\">Sebuah komunitas warga merencanakan pembangunan pos kesehatan lingkungan dengan total dana yang dibutuhkan sebesar <b>Rp150.000.000</b>. Dana tersebut direncanakan berasal dari tiga sumber dengan perbandingan (swadaya warga) : (dana CSR perusahaan) : (bantuan pemerintah desa) = <b>3 : 5 : 2</b>.</div><div class=\"qp\">Setelah proses pengumpulan berlangsung, dana CSR yang benar-benar cair hanya <b>80%</b> dari jumlah yang direncanakan berdasarkan rasio tersebut, sedangkan swadaya warga dan bantuan pemerintah desa cair sepenuhnya sesuai rencana.</div><div class=\"qp\">Panitia pembangunan hanya akan memulai proyek jika total dana yang benar-benar terkumpul mencapai minimal <b>90%</b> dari total dana yang dibutuhkan.</div><div class=\"qp\">Apakah proyek tersebut dapat mulai dilaksanakan, dan berapa total dana yang benar-benar terkumpul?</div>",
    "options": [
      "Dapat dilaksanakan, dengan total dana terkumpul Rp135.000.000",
      "Tidak dapat dilaksanakan, karena total dana terkumpul hanya Rp127.500.000",
      "Tidak dapat dilaksanakan, karena total dana terkumpul hanya Rp120.000.000",
      "Dapat dilaksanakan, dengan total dana terkumpul Rp150.000.000"
    ],
    "answer": "A",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: A</b> · Topik: Perbandingan Senilai &amp; Persentase</p>\n<ul><li>Jumlah rasio = 3 + 5 + 2 = 10. Swadaya = 3/10 × 150 juta = <b>45 juta</b>; CSR (rencana) = 5/10 × 150 juta = <b>75 juta</b>; Desa = 2/10 × 150 juta = <b>30 juta</b>.</li><li>CSR yang cair = 80% × 75 juta = <b>60 juta</b>.</li><li>Dana terkumpul = 45 + 60 + 30 = <b>135 juta</b>.</li><li>Syarat minimal 90% × 150 juta = <b>135 juta</b>. Karena 135 juta ≥ 135 juta, syarat <b>terpenuhi</b> → proyek dapat dilaksanakan.</li></ul>\n<section class=\"box jebakan\"><h4>Awas!</h4><p>Dana tepat sama dengan batas. “Minimal” berarti sama dengan batas pun tetap lolos.</p></section>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah A.</b></p></section>"
  },
  {
    "n": 14,
    "text": "Panitia sebuah konser musik menjual dua jenis tiket, yaitu tiket VIP dan tiket Reguler. Harga tiket VIP adalah Rp200.000, sedangkan harga tiket Reguler adalah Rp120.000. Pada hari penyelenggaraan, seluruh 400 tiket yang tersedia terjual habis dengan total pendapatan sebesar Rp58.000.000.\nBerapa jumlah tiket VIP yang terjual?",
    "html": "<div class=\"qp\">Panitia sebuah konser musik menjual dua jenis tiket, yaitu tiket VIP dan tiket Reguler. Harga tiket VIP adalah <b>Rp200.000</b>, sedangkan harga tiket Reguler adalah <b>Rp120.000</b>. Pada hari penyelenggaraan, seluruh <b>400 tiket</b> yang tersedia terjual habis dengan total pendapatan sebesar <b>Rp58.000.000</b>.</div><div class=\"qp\">Berapa jumlah tiket VIP yang terjual?</div>",
    "options": [
      "100 tiket",
      "150 tiket",
      "125 tiket",
      "275 tiket"
    ],
    "answer": "C",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: C</b> · Topik: Sistem Persamaan Linear Dua Variabel</p>\n<ul><li>Misal V = tiket VIP, R = tiket Reguler.<br>(i) V + R = 400<br>(ii) 200.000V + 120.000R = 58.000.000 → 5V + 3R = 1.450.</li><li>Substitusi R = 400 − V: 5V + 3(400 − V) = 1.450 → 2V + 1.200 = 1.450 → <b>V = 125</b>.</li><li>Cek: 125 × 200.000 + 275 × 120.000 = 25 juta + 33 juta = <b>58 juta</b> (cocok).</li></ul>\n<section class=\"box jebakan\"><h4>Awas!</h4><p>275 (opsi D) adalah jumlah tiket Reguler, bukan VIP.</p></section>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah C.</b></p></section>"
  },
  {
    "n": 15,
    "text": "Seorang animator mengedit posisi dua titik sudut sebuah objek grafis, M dan N, melalui dua tahap transformasi berturut-turut. Tahap kedua diterapkan pada hasil tahap pertama.\n\nLog Posisi Titik Objek\nPosisi awal | M(2, 1), N(2, 5)\nSetelah Tahap 1 | M(−2, 1), N(−2, 5)\nPosisi akhir (Tahap 2 diterapkan pada hasil Tahap 1) | M(−2, −1), N(−2, −5)\nManakah kombinasi proses transformasi yang mungkin terjadi pada Tahap 1 dan Tahap 2?",
    "html": "<div class=\"qp\">Seorang animator mengedit posisi dua titik sudut sebuah objek grafis, <b>M</b> dan <b>N</b>, melalui dua tahap transformasi berturut-turut. Tahap kedua diterapkan pada hasil tahap pertama.</div><div class=\"qp\"><img class=\"qimg\" src=\"img/tka7-q15.png\" alt=\"Bidang koordinat: posisi awal, setelah tahap 1, dan posisi akhir titik M dan N\"></div><table class=\"qtable\"><thead><tr><th colspan=\"2\">Log Posisi Titik Objek</th></tr></thead><tbody><tr><th>Posisi awal</th><td><b>M(2, 1), N(2, 5)</b></td></tr><tr><th>Setelah Tahap 1</th><td><b>M(−2, 1), N(−2, 5)</b></td></tr><tr><th>Posisi akhir (Tahap 2 diterapkan pada hasil Tahap 1)</th><td><b>M(−2, −1), N(−2, −5)</b></td></tr></tbody></table><div class=\"qp\">Manakah kombinasi proses transformasi yang mungkin terjadi pada Tahap 1 dan Tahap 2?</div>",
    "options": [
      "Refleksi terhadap sumbu-y, kemudian refleksi terhadap sumbu-x",
      "Rotasi 180° terhadap titik asal, kemudian refleksi terhadap sumbu-y",
      "Refleksi terhadap sumbu-x, kemudian refleksi terhadap sumbu-y",
      "Refleksi terhadap sumbu-y, kemudian rotasi 180° terhadap titik asal"
    ],
    "answer": "A",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: A</b> · Topik: Transformasi Geometri (Refleksi)</p>\n<ul><li>Lacak satu titik: <b>M(2, 1) → (−2, 1) → (−2, −1)</b>.</li><li><b>Tahap 1:</b> hanya x yang berubah tanda → (x, y) menjadi (−x, y) = <b>refleksi terhadap sumbu-y</b>.</li><li><b>Tahap 2:</b> hanya y yang berubah tanda → (x, y) menjadi (x, −y) = <b>refleksi terhadap sumbu-x</b>.</li><li>Cek titik N: (2, 5) → (−2, 5) → (−2, −5) (cocok).</li></ul>\n<section class=\"box jebakan\"><h4>Awas!</h4><p>Rotasi 180° mengubah <b>kedua</b> tanda sekaligus, jadi (2, 1) menjadi (−2, −1), bukan (−2, 1). Opsi B salah di Tahap 1; opsi C juga salah di Tahap 1 (refleksi sumbu-x memberi (2, −1)); opsi D salah di Tahap 2 (hasilnya (2, −1)).</p></section>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah A.</b></p></section>"
  },
  {
    "n": 16,
    "text": "Perpustakaan sekolah menyusun laporan peminjaman buku bulan ini berdasarkan kategori dan tingkat kelas.\nKategori Buku | Kelas VII | Kelas VIII | Kelas IX\nFiksi | 45 | 38 | 52\nNon-Fiksi | 20 | 25 | 18\nSains | 15 | 22 | 30\nKomik | 30 | 15 | 10\nBerdasarkan tabel tersebut, pernyataan manakah yang benar? (Pilih semua pernyataan yang sesuai.)",
    "html": "<div class=\"qp\">Perpustakaan sekolah menyusun laporan peminjaman buku bulan ini berdasarkan kategori dan tingkat kelas.</div><table class=\"qtable\"><thead><tr><th>Kategori Buku</th><th>Kelas VII</th><th>Kelas VIII</th><th>Kelas IX</th></tr></thead><tbody><tr><th>Fiksi</th><td>45</td><td>38</td><td>52</td></tr><tr><th>Non-Fiksi</th><td>20</td><td>25</td><td>18</td></tr><tr><th>Sains</th><td>15</td><td>22</td><td>30</td></tr><tr><th>Komik</th><td>30</td><td>15</td><td>10</td></tr></tbody></table><div class=\"qp\">Berdasarkan tabel tersebut, pernyataan manakah yang benar? (Pilih semua pernyataan yang sesuai.)</div>",
    "options": [
      "Total peminjaman buku Fiksi di seluruh kelas lebih banyak dibandingkan total peminjaman kategori lain.",
      "Selisih peminjaman buku Sains antara kelas VII dan kelas IX lebih besar dibandingkan selisih peminjaman Komik antara kelas VII dan kelas IX.",
      "Jika kategori Non-Fiksi dan Sains digabungkan menjadi kelompok “Pengetahuan”, kelompok tersebut memiliki jumlah peminjaman terbanyak di kelas IX dibandingkan tingkat kelas lainnya.",
      "Rata-rata peminjaman Komik di ketiga kelas lebih besar daripada rata-rata peminjaman Non-Fiksi di ketiga kelas."
    ],
    "answer": "AC",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: A, C (pernyataan 1 dan 3)</b> · Topik: Membaca Tabel &amp; Membandingkan Data</p>\n<p>Total per kategori: Fiksi <b>135</b>, Non-Fiksi <b>63</b>, Sains <b>67</b>, Komik <b>55</b>.</p>\n<p class=\"ev ok\"><b>A. Pernyataan benar.</b> 135 lebih besar daripada 63, 67, dan 55.</p>\n<p class=\"ev no\"><b>B. Pernyataan salah.</b> Sains: 30 − 15 = <b>15</b>; Komik: 30 − 10 = <b>20</b>. Selisih 15 tidak lebih besar dari 20.</p>\n<p class=\"ev ok\"><b>C. Pernyataan benar.</b> Pengetahuan: kelas VII = 20 + 15 = 35; VIII = 25 + 22 = 47; IX = 18 + 30 = <b>48</b> (terbanyak).</p>\n<p class=\"ev no\"><b>D. Pernyataan salah.</b> Komik: 55 ÷ 3 ≈ <b>18,3</b>; Non-Fiksi: 63 ÷ 3 = <b>21</b>. Jadi Komik lebih kecil.</p>\n<section class=\"box jebakan\"><h4>Awas!</h4><p>Pernyataan B membandingkan <b>selisih</b>, bukan jumlah. Hitung selisih tiap kategori dulu, baru bandingkan.</p></section>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah A dan C.</b></p></section>"
  },
  {
    "n": 17,
    "text": "Sebuah lintasan lari berbentuk lingkaran di kompleks olahraga memiliki keliling lintasan bagian dalam sepanjang 88 meter.\nBerdasarkan informasi tersebut, pilih semua pernyataan berikut yang benar.",
    "html": "<div class=\"qp\">Sebuah lintasan lari berbentuk lingkaran di kompleks olahraga memiliki keliling lintasan bagian dalam sepanjang <b>88 meter</b>.</div><div class=\"qp\">Berdasarkan informasi tersebut, pilih <b>semua</b> pernyataan berikut yang <b>benar</b>.</div>",
    "options": [
      "Jika jari-jari lintasan bagian dalam diperbesar tiga kali lipat, keliling lintasan yang baru juga akan menjadi tiga kali lipat.",
      "Jika jari-jari lintasan bagian dalam diperbesar tiga kali lipat, luas area di dalam lintasan tersebut juga akan menjadi tiga kali lipat.",
      "Biaya pengecatan permukaan area di dalam lintasan (dihitung berdasarkan luas per meter persegi) akan menjadi sembilan kali lipat biaya semula jika jari-jari lintasan diperbesar tiga kali lipat."
    ],
    "answer": "AC",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: A, C (pernyataan 1 dan 3)</b> · Topik: Lingkaran: Keliling &amp; Luas</p>\n<p>K = 2πr → 88 = 2 × 22/7 × r → <b>r = 14 m</b>. Luas = πr² = 22/7 × 14 × 14 = <b>616 m²</b>.</p>\n<p class=\"ev ok\"><b>A. Pernyataan benar.</b> r menjadi 42 m → K = 2 × 22/7 × 42 = <b>264 m</b> = 3 × 88.</p>\n<p class=\"ev no\"><b>B. Pernyataan salah.</b> Luas baru = 22/7 × 42 × 42 = <b>5.544 m²</b> = <b>9 ×</b> 616, bukan 3 ×.</p>\n<p class=\"ev ok\"><b>C. Pernyataan benar.</b> Biaya cat sebanding dengan luas, maka ikut naik <b>9 kali</b> (3² = 9).</p>\n<section class=\"box jebakan\"><h4>Awas!</h4><p>Jari-jari × k → keliling × k, tetapi luas × k². Jangan menyamakan keduanya.</p></section>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah A dan C.</b></p></section>"
  },
  {
    "n": 18,
    "text": "Sebuah keluarga mencatat pemakaian air harian di rumah selama satu minggu melalui meteran air sebagai berikut (dalam liter).\nSenin | Selasa | Rabu | Kamis | Jumat | Sabtu | Minggu\n150 | 145 | 155 | 140 | 150 | 145 | 480\nCatatan: hari Minggu (480 liter) adalah hari mencuci karpet dan menguras bak mandi.\nBerdasarkan data tersebut, pilih pernyataan berikut yang benar.",
    "html": "<div class=\"qp\">Sebuah keluarga mencatat pemakaian air harian di rumah selama satu minggu melalui meteran air sebagai berikut (dalam liter).</div><table class=\"qtable\"><thead><tr><th>Senin</th><th>Selasa</th><th>Rabu</th><th>Kamis</th><th>Jumat</th><th>Sabtu</th><th>Minggu</th></tr></thead><tbody><tr><td>150</td><td>145</td><td>155</td><td>140</td><td>150</td><td>145</td><td>480</td></tr></tbody></table><div class=\"qp\"><i>Catatan: hari Minggu (480 liter) adalah hari mencuci karpet dan menguras bak mandi.</i></div><div class=\"qp\">Berdasarkan data tersebut, pilih pernyataan berikut yang <b>benar</b>.</div>",
    "options": [
      "Nilai rata-rata (mean) pemakaian air harian merupakan ukuran yang paling representatif untuk menggambarkan kebiasaan pemakaian air sehari-hari keluarga tersebut, karena mempertimbangkan seluruh data.",
      "Nilai median lebih tepat digunakan untuk menggambarkan kebiasaan pemakaian air sehari-hari dibandingkan rata-rata, karena tidak dipengaruhi secara signifikan oleh data ekstrem.",
      "Modus data tersebut dapat digunakan untuk menentukan total pemakaian air selama satu minggu."
    ],
    "answer": "B",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: B (pernyataan 2)</b> · Topik: Statistika: Mean, Median, Modus</p>\n<p>Urutkan: 140, 145, 145, <b>150</b>, 150, 155, 480. Total = 1.365 → <b>mean = 1.365 ÷ 7 = 195</b>; <b>median = 150</b> (data ke-4); <b>modus = 145 dan 150</b> (masing-masing 2 kali).</p>\n<p class=\"ev no\"><b>A. Pernyataan salah.</b> Mean 195 L lebih besar daripada 6 dari 7 hari karena terdongkrak 480 L, sehingga tidak mewakili kebiasaan harian.</p>\n<p class=\"ev ok\"><b>B. Pernyataan benar.</b> Median 150 L dekat dengan pemakaian hari-hari biasa dan tidak ikut tergeser oleh 480 L.</p>\n<p class=\"ev no\"><b>C. Pernyataan salah.</b> Modus hanya nilai yang paling sering muncul. Total dihitung dengan <b>menjumlahkan</b> seluruh data (1.365 L).</p>\n<section class=\"box jebakan\"><h4>Awas!</h4><p>Tanpa hari Minggu, rata-rata turun menjadi 147,5 L. Data ekstrem (outlier) menggeser mean jauh, tetapi median hampir tidak berubah.</p></section>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah B.</b></p></section>"
  },
  {
    "n": 19,
    "text": "Sebuah keluarga memantau pemakaian data internet empat anggota keluarga melalui aplikasi operator seluler selama periode pemantauan yang berbeda-beda. Hasil pemantauan dicatat dalam laporan berikut.\nAnggota Keluarga | Total Pemakaian Data (GB) | Jumlah Hari Pemantauan\nAyah | 60 | 15\nIbu | 48 | 12\nKakak | 84 | 21\nAdik | 36 | 6\nKeluarga tersebut ingin memilih anggota dengan kebiasaan pemakaian data harian tertinggi untuk dipertimbangkan menaikkan kuota paketnya.\nAnggota keluarga manakah yang memiliki rata-rata pemakaian data per hari tertinggi?",
    "html": "<div class=\"qp\">Sebuah keluarga memantau pemakaian data internet empat anggota keluarga melalui aplikasi operator seluler selama periode pemantauan yang berbeda-beda. Hasil pemantauan dicatat dalam laporan berikut.</div><table class=\"qtable\"><thead><tr><th>Anggota Keluarga</th><th>Total Pemakaian Data (GB)</th><th>Jumlah Hari Pemantauan</th></tr></thead><tbody><tr><th>Ayah</th><td>60</td><td>15</td></tr><tr><th>Ibu</th><td>48</td><td>12</td></tr><tr><th>Kakak</th><td>84</td><td>21</td></tr><tr><th>Adik</th><td>36</td><td>6</td></tr></tbody></table><div class=\"qp\">Keluarga tersebut ingin memilih anggota dengan kebiasaan pemakaian data harian tertinggi untuk dipertimbangkan menaikkan kuota paketnya.</div><div class=\"qp\">Anggota keluarga manakah yang memiliki rata-rata pemakaian data per hari tertinggi?</div>",
    "options": [
      "Kakak",
      "Ibu",
      "Ayah",
      "Adik"
    ],
    "answer": "D",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: D</b> · Topik: Rata-rata (Laju per Hari)</p>\n<ul><li>Rata-rata per hari = total GB ÷ jumlah hari.</li><li>Ayah: 60 ÷ 15 = <b>4 GB</b><br>Ibu: 48 ÷ 12 = <b>4 GB</b><br>Kakak: 84 ÷ 21 = <b>4 GB</b></li><li><b>Adik: 36 ÷ 6 = 6 GB (tertinggi)</b></li></ul>\n<section class=\"box jebakan\"><h4>Awas!</h4><p>Kakak punya total terbesar (84 GB), tetapi dipantau paling lama (21 hari). Yang ditanya rata-rata <b>per hari</b>, bukan total.</p></section>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah D.</b></p></section>"
  },
  {
    "n": 20,
    "text": "Program skrining kesehatan sekolah memeriksa gangguan penglihatan (rabun jauh) pada siswa di dua sekolah. Hasil skrining dicatat dalam laporan berikut.\nSekolah | Siswa yang Diperiksa | Siswa dengan Miopia\nSMP X | 240 | 36\nSMP Y | 180 | 30\nBerdasarkan laporan tersebut, tentukan pernyataan manakah yang benar. (Pilih semua pernyataan yang sesuai.)",
    "html": "<div class=\"qp\">Program skrining kesehatan sekolah memeriksa gangguan penglihatan (rabun jauh) pada siswa di dua sekolah. Hasil skrining dicatat dalam laporan berikut.</div><table class=\"qtable\"><thead><tr><th>Sekolah</th><th>Siswa yang Diperiksa</th><th>Siswa dengan Miopia</th></tr></thead><tbody><tr><td>SMP X</td><td>240</td><td>36</td></tr><tr><td>SMP Y</td><td>180</td><td>30</td></tr></tbody></table><div class=\"qp\">Berdasarkan laporan tersebut, tentukan pernyataan manakah yang benar. (Pilih semua pernyataan yang sesuai.)</div>",
    "options": [
      "Peluang seorang siswa terindikasi rabun jauh di SMP Y lebih besar dibandingkan di SMP X.",
      "Karena jumlah siswa yang diperiksa di SMP X lebih banyak, peluang terindikasi rabun jauh di SMP X pasti lebih besar.",
      "Jika data kedua sekolah digabungkan, peluang seorang siswa terindikasi rabun jauh dari data gabungan tersebut adalah 66/420.",
      "Peluang seorang siswa tidak terindikasi rabun jauh di SMP X lebih besar dibandingkan peluang tidak terindikasi rabun jauh di SMP Y."
    ],
    "answer": "ACD",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: A, C, D (pernyataan 1, 3, dan 4)</b> · Topik: Peluang (Proporsi Data)</p>\n<p>Peluang = siswa terindikasi ÷ siswa diperiksa.</p>\n<p class=\"ev ok\"><b>A. Pernyataan benar.</b> SMP X = 36/240 = <b>15%</b>; SMP Y = 30/180 ≈ <b>16,7%</b>. Jadi Y lebih besar.</p>\n<p class=\"ev no\"><b>B. Pernyataan salah.</b> Yang menentukan adalah <b>proporsi</b>, bukan banyaknya siswa yang diperiksa.</p>\n<p class=\"ev ok\"><b>C. Pernyataan benar.</b> (36 + 30) ÷ (240 + 180) = <b>66/420</b>.</p>\n<p class=\"ev ok\"><b>D. Pernyataan benar.</b> Tidak terindikasi: SMP X = 204/240 = <b>85%</b>; SMP Y = 150/180 ≈ <b>83,3%</b>. Jadi X lebih besar.</p>\n<section class=\"box jebakan\"><h4>Awas!</h4><p>Peluang tidak terindikasi = 1 − peluang terindikasi. Karena SMP Y lebih berisiko, peluang “tidak terindikasi”-nya otomatis lebih kecil, sehingga D sejalan dengan A.</p></section>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah A, C, dan D.</b></p></section>"
  },
  {
    "n": 21,
    "text": "Sebuah stasiun pengamatan cuaca mencatat kondisi cuaca harian di suatu wilayah selama 60 hari. Hasil pencatatan dirangkum dalam tabel frekuensi berikut.\nKondisi Cuaca | Frekuensi (Kemunculan)\nCerah | 24\nBerawan | 18\nHujan Ringan | 12\nHujan Lebat | 6\nBerdasarkan data tersebut, berapa peluang suatu hari yang dipilih secara acak dari periode pengamatan tersebut mengalami cuaca berawan?",
    "html": "<div class=\"qp\">Sebuah stasiun pengamatan cuaca mencatat kondisi cuaca harian di suatu wilayah selama <b>60 hari</b>. Hasil pencatatan dirangkum dalam tabel frekuensi berikut.</div><table class=\"qtable\"><thead><tr><th>Kondisi Cuaca</th><th>Frekuensi (Kemunculan)</th></tr></thead><tbody><tr><th>Cerah</th><td>24</td></tr><tr><th>Berawan</th><td>18</td></tr><tr><th>Hujan Ringan</th><td>12</td></tr><tr><th>Hujan Lebat</th><td>6</td></tr></tbody></table><div class=\"qp\">Berdasarkan data tersebut, berapa peluang suatu hari yang dipilih secara acak dari periode pengamatan tersebut mengalami cuaca berawan?</div>",
    "options": [
      "3/7",
      "1/5",
      "2/5",
      "3/10"
    ],
    "optionsHtml": [
      "<span style=\"display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;line-height:1.2;margin:0 3px\"><span style=\"padding:0 5px;border-bottom:1.5px solid currentColor\">3</span><span style=\"padding:0 5px\">7</span></span>",
      "<span style=\"display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;line-height:1.2;margin:0 3px\"><span style=\"padding:0 5px;border-bottom:1.5px solid currentColor\">1</span><span style=\"padding:0 5px\">5</span></span>",
      "<span style=\"display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;line-height:1.2;margin:0 3px\"><span style=\"padding:0 5px;border-bottom:1.5px solid currentColor\">2</span><span style=\"padding:0 5px\">5</span></span>",
      "<span style=\"display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;line-height:1.2;margin:0 3px\"><span style=\"padding:0 5px;border-bottom:1.5px solid currentColor\">3</span><span style=\"padding:0 5px\">10</span></span>"
    ],
    "answer": "D",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: D</b> · Topik: Peluang Kejadian</p>\n<ul><li>Peluang = banyak kejadian yang diminati ÷ banyak seluruh kejadian.</li><li>Seluruh hari = 24 + 18 + 12 + 6 = <b>60</b> (sesuai soal).</li><li>Berawan = 18 hari → P = 18/60 = <b>3/10</b>.</li></ul>\n<section class=\"box jebakan\"><h4>Awas!</h4><p>2/5 adalah peluang Cerah (24/60) dan 1/5 adalah peluang Hujan Ringan (12/60). Pastikan memakai baris <b>Berawan</b>.</p></section>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah D.</b></p></section>"
  },
  {
    "n": 22,
    "text": "Aplikasi PLN Mobile menampilkan rincian tagihan listrik pascabayar seorang pelanggan sebagai berikut.\nRincian Tagihan Listrik\nID Pelanggan | 5321XXXXXX\nBiaya Beban Tetap per Bulan | Rp25.000\nTarif Pemakaian Energi | Rp1.500 per kWh\nTotal Tagihan Bulan Ini | Rp325.000\nBerapa kWh energi listrik yang digunakan pelanggan tersebut bulan ini?",
    "html": "<div class=\"qp\">Aplikasi PLN Mobile menampilkan rincian tagihan listrik pascabayar seorang pelanggan sebagai berikut.</div><table class=\"qtable\"><thead><tr><th colspan=\"2\">Rincian Tagihan Listrik</th></tr></thead><tbody><tr><th>ID Pelanggan</th><td><b>5321XXXXXX</b></td></tr><tr><th>Biaya Beban Tetap per Bulan</th><td><b>Rp25.000</b></td></tr><tr><th>Tarif Pemakaian Energi</th><td><b>Rp1.500 per kWh</b></td></tr><tr><th>Total Tagihan Bulan Ini</th><td><b>Rp325.000</b></td></tr></tbody></table><div class=\"qp\">Berapa kWh energi listrik yang digunakan pelanggan tersebut bulan ini?</div>",
    "options": [
      "200 kWh",
      "183 kWh",
      "217 kWh",
      "233 kWh"
    ],
    "answer": "A",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: A</b> · Topik: Persamaan Linear (Tagihan Listrik)</p>\n<ul><li>Total tagihan = beban tetap + (tarif × kWh).</li><li>325.000 = 25.000 + 1.500 × x → 1.500x = <b>300.000</b>.</li><li>x = 300.000 ÷ 1.500 = <b>200 kWh</b>.</li></ul>\n<section class=\"box jebakan\"><h4>Awas!</h4><p>217 (opsi C) berasal dari 325.000 ÷ 1.500 ≈ 216,7 karena lupa mengurangi beban tetap. 233 (opsi D) justru menambahkan beban tetap.</p></section>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah A.</b></p></section>"
  },
  {
    "n": 23,
    "text": "Badan Penanggulangan Bencana Daerah (BPBD) menerbitkan peta jalur evakuasi kawasan rawan banjir dengan keterangan skala 1 : 20.000. Jarak antara titik kumpul warga dan posko evakuasi pada peta tersebut terukur sepanjang 7,5 cm.\nBerdasarkan informasi tersebut, pilih semua pernyataan berikut yang benar.",
    "html": "<div class=\"qp\">Badan Penanggulangan Bencana Daerah (BPBD) menerbitkan peta jalur evakuasi kawasan rawan banjir dengan keterangan skala <b>1 : 20.000</b>. Jarak antara titik kumpul warga dan posko evakuasi pada peta tersebut terukur sepanjang <b>7,5 cm</b>.</div><div class=\"qp\">Berdasarkan informasi tersebut, pilih <b>semua</b> pernyataan berikut yang <b>benar</b>.</div>",
    "options": [
      "Jarak sebenarnya antara titik kumpul warga dan posko evakuasi adalah 1,5 km.",
      "Jika BPBD menerbitkan ulang peta dengan skala 1 : 10.000, jarak antara titik kumpul warga dan posko evakuasi akan tergambar lebih panjang pada peta yang baru dibandingkan pada peta sebelumnya.",
      "Sebuah jalur evakuasi lain yang berjarak sebenarnya 3 km akan tergambar sepanjang 15 cm pada peta berskala 1 : 20.000 ini."
    ],
    "answer": "ABC",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: A, B, C (semua pernyataan benar)</b> · Topik: Skala pada Peta</p>\n<p>Jarak sebenarnya = jarak pada peta × penyebut skala.</p>\n<p class=\"ev ok\"><b>A. Pernyataan benar.</b> 7,5 × 20.000 = 150.000 cm = 1.500 m = <b>1,5 km</b>.</p>\n<p class=\"ev ok\"><b>B. Pernyataan benar.</b> Pada skala 1 : 10.000: 150.000 ÷ 10.000 = <b>15 cm</b>, lebih panjang daripada 7,5 cm.</p>\n<p class=\"ev ok\"><b>C. Pernyataan benar.</b> 3 km = 300.000 cm → 300.000 ÷ 20.000 = <b>15 cm</b>.</p>\n<section class=\"box jebakan\"><h4>Awas!</h4><p>1 km = 100.000 cm. Penyebut skala yang lebih kecil berarti peta lebih besar, sehingga jarak di peta ikut lebih panjang.</p></section>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah A, B, dan C.</b></p></section>"
  },
  {
    "n": 24,
    "text": "Petugas pemeliharaan memeriksa tangki air berbentuk tabung yang digunakan sebagai cadangan air di sebuah kompleks perumahan.\n\nLaporan Pemeliharaan Tangki\nKapasitas tangki ketika penuh: 9.240 liter\nDiameter tangki: 2,8 m\nBerapakah tinggi tangki air tersebut? (gunakan π = 22/7)",
    "html": "<div class=\"qp\">Petugas pemeliharaan memeriksa tangki air berbentuk tabung yang digunakan sebagai cadangan air di sebuah kompleks perumahan.</div><div class=\"qp\"><img class=\"qimg\" src=\"img/tka7-q24.png\" alt=\"Tangki air berbentuk tabung berdiameter 2,8 m dengan kapasitas penuh 9.240 liter\"></div><div class=\"qp\"><b>Laporan Pemeliharaan Tangki</b></div><div class=\"qp\"><ul style=\"margin:4px 0 0;padding-left:22px\"><li>Kapasitas tangki ketika penuh: 9.240 liter</li><li>Diameter tangki: 2,8 m</li></ul></div><div class=\"qp\">Berapakah tinggi tangki air tersebut? (gunakan π = 22/7)</div>",
    "options": [
      "1,5 m",
      "4,5 m",
      "6 m",
      "3 m"
    ],
    "answer": "A",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: A</b> · Topik: Volume Tabung</p>\n<ul><li>Samakan satuan: 9.240 liter = <b>9,24 m³</b> (1 m³ = 1.000 liter).</li><li>d = 2,8 m → <b>r = 1,4 m</b>. Luas alas = πr² = 22/7 × 1,4 × 1,4 = <b>6,16 m²</b>.</li><li>V = luas alas × t → t = 9,24 ÷ 6,16 = <b>1,5 m</b>.</li></ul>\n<section class=\"box jebakan\"><h4>Awas!</h4><p>Ubah liter ke m³ dulu, dan ingat r = <b>setengah</b> diameter. Memakai 2,8 sebagai jari-jari akan memberi tinggi yang jauh lebih kecil (± 0,375 m).</p></section>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah A.</b></p></section>"
  },
  {
    "n": 25,
    "text": "Sebuah aplikasi desain grafis digital mencatat riwayat perubahan posisi dua titik sudut sebuah logo, P dan Q, selama proses pengeditan berikut. Proses Edit 2 diterapkan langsung pada posisi titik hasil Edit 1, bukan pada posisi awal logo.\n\nLog Posisi Titik Logo\nPosisi awal | P(1, 2), Q(4, 2)\nSetelah Edit 1 | P(1, −1), Q(4, −1)\nPosisi akhir (Edit 2 diterapkan pada hasil Edit 1) | P(−1, −1), Q(−4, −1)\nManakah kombinasi proses edit yang mungkin terjadi pada Edit 1 dan Edit 2?",
    "html": "<div class=\"qp\">Sebuah aplikasi desain grafis digital mencatat riwayat perubahan posisi dua titik sudut sebuah logo, <b>P</b> dan <b>Q</b>, selama proses pengeditan berikut. Proses Edit 2 diterapkan langsung pada posisi titik hasil Edit 1, bukan pada posisi awal logo.</div><div class=\"qp\"><img class=\"qimg\" src=\"img/tka7-q25.png\" alt=\"Bidang koordinat: posisi awal, setelah Edit 1, dan posisi akhir titik P dan Q\"></div><table class=\"qtable\"><thead><tr><th colspan=\"2\">Log Posisi Titik Logo</th></tr></thead><tbody><tr><th>Posisi awal</th><td><b>P(1, 2), Q(4, 2)</b></td></tr><tr><th>Setelah Edit 1</th><td><b>P(1, −1), Q(4, −1)</b></td></tr><tr><th>Posisi akhir (Edit 2 diterapkan pada hasil Edit 1)</th><td><b>P(−1, −1), Q(−4, −1)</b></td></tr></tbody></table><div class=\"qp\">Manakah kombinasi proses edit yang mungkin terjadi pada Edit 1 dan Edit 2?</div>",
    "options": [
      "Refleksi terhadap sumbu-x, kemudian translasi (0, −3)",
      "Refleksi terhadap sumbu-y, kemudian translasi (0, −3)",
      "Translasi (0, −3), kemudian refleksi terhadap sumbu-x",
      "Translasi (0, −3), kemudian refleksi terhadap sumbu-y"
    ],
    "answer": "D",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: D</b> · Topik: Translasi &amp; Refleksi</p>\n<ul><li><b>Edit 1:</b> P(1, 2) → (1, −1) dan Q(4, 2) → (4, −1). x tetap, y turun 3 → <b>translasi (0, −3)</b>.</li><li><b>Edit 2:</b> (1, −1) → (−1, −1) dan (4, −1) → (−4, −1). x berubah tanda, y tetap → <b>refleksi terhadap sumbu-y</b>.</li><li>Urutannya translasi dulu, lalu refleksi sumbu-y → <b>opsi D</b>.</li></ul>\n<section class=\"box jebakan\"><h4>Awas!</h4><p>Opsi A dan B salah di Edit 1 (refleksi sumbu-x memberi (1, −2); refleksi sumbu-y memberi (−1, 2)). Opsi C salah di Edit 2 (refleksi sumbu-x pada (1, −1) memberi (1, 1)).</p></section>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah D.</b></p></section>"
  },
  {
    "n": 26,
    "text": "Sebuah gudang logistik menggunakan robot otomatis untuk mengambil barang. Sistem navigasi robot bergerak mengikuti jalur rak yang hanya membentang secara horizontal dan vertikal, tanpa jalur diagonal.\n\nData Posisi (1 satuan kisi = 2 meter)\nPosisi stasiun pengisian robot: (3, 2)\nPosisi rak barang tujuan: (10, 9)\nBerapa jarak tempuh minimum yang harus dilalui robot dari stasiun pengisian menuju rak barang tujuan melalui jalur yang tersedia?",
    "html": "<div class=\"qp\">Sebuah gudang logistik menggunakan robot otomatis untuk mengambil barang. Sistem navigasi robot bergerak mengikuti jalur rak yang <b>hanya membentang secara horizontal dan vertikal</b>, tanpa jalur diagonal.</div><div class=\"qp\"><img class=\"qimg\" src=\"img/tka7-q26.png\" alt=\"Kisi koordinat: stasiun pengisian robot (3, 2) dan rak tujuan (10, 9), 1 kisi = 2 meter\"></div><div class=\"qp\"><b>Data Posisi</b> (1 satuan kisi = 2 meter)</div><div class=\"qp\"><ul style=\"margin:4px 0 0;padding-left:22px\"><li>Posisi stasiun pengisian robot: (3, 2)</li><li>Posisi rak barang tujuan: (10, 9)</li></ul></div><div class=\"qp\">Berapa jarak tempuh minimum yang harus dilalui robot dari stasiun pengisian menuju rak barang tujuan melalui jalur yang tersedia?</div>",
    "options": [
      "14 m",
      "28 m",
      "19,8 m",
      "21 m"
    ],
    "answer": "B",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: B</b> · Topik: Jarak pada Kisi Koordinat</p>\n<ul><li>Robot hanya boleh bergerak lurus (mendatar atau tegak): jarak = |Δx| + |Δy|.</li><li>Δx = 10 − 3 = <b>7 kisi</b>; Δy = 9 − 2 = <b>7 kisi</b> → 7 + 7 = <b>14 kisi</b>.</li><li>1 kisi = 2 m → 14 × 2 = <b>28 m</b>.</li></ul>\n<section class=\"box jebakan\"><h4>Awas!</h4><p>14 m (opsi A) lupa mengalikan 2 m per kisi. 19,8 m (opsi C) memakai garis diagonal (√98 × 2), padahal jalur diagonal tidak ada.</p></section>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah B.</b></p></section>"
  },
  {
    "n": 27,
    "text": "Sebuah pabrik garmen mencatat data produksi dalam laporan produksi mingguan berikut.\nData Produksi\nJumlah mesin jahit | 15 unit\nJam kerja per hari | 8 jam\nTotal produksi per hari | 600 potong pakaian\nLaporan ini mengasumsikan seluruh mesin bekerja dengan kecepatan yang sama dan tidak ada gangguan produksi. Berdasarkan data tersebut, pilih semua pernyataan berikut yang benar.",
    "html": "<div class=\"qp\">Sebuah pabrik garmen mencatat data produksi dalam laporan produksi mingguan berikut.</div><table class=\"qtable\"><thead><tr><th colspan=\"2\">Data Produksi</th></tr></thead><tbody><tr><th>Jumlah mesin jahit</th><td><b>15 unit</b></td></tr><tr><th>Jam kerja per hari</th><td><b>8 jam</b></td></tr><tr><th>Total produksi per hari</th><td><b>600 potong pakaian</b></td></tr></tbody></table><div class=\"qp\">Laporan ini mengasumsikan seluruh mesin bekerja dengan kecepatan yang sama dan tidak ada gangguan produksi. Berdasarkan data tersebut, pilih <b>semua</b> pernyataan berikut yang <b>benar</b>.</div>",
    "options": [
      "Jika jumlah mesin ditambah menjadi 20 unit dengan jam kerja tetap 8 jam per hari, total produksi per hari akan menjadi 800 potong pakaian.",
      "Jika pabrik ingin mencapai produksi 600 potong pakaian dalam waktu 6 jam per hari (bukan 8 jam), jumlah mesin yang dibutuhkan adalah 20 unit.",
      "Jika jumlah mesin dikurangi menjadi 10 unit sementara jam kerja tetap 8 jam, total produksi per hari akan tetap 600 potong pakaian karena total jam kerja pabrik tidak berubah."
    ],
    "answer": "AB",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: A, B (pernyataan 1 dan 2)</b> · Topik: Perbandingan Senilai &amp; Berbalik Nilai</p>\n<p>Laju produksi = 600 ÷ (15 mesin × 8 jam) = <b>5 potong per mesin per jam</b>.</p>\n<p class=\"ev ok\"><b>A. Pernyataan benar.</b> 20 × 8 × 5 = <b>800 potong</b>.</p>\n<p class=\"ev ok\"><b>B. Pernyataan benar.</b> Jumlah mesin = 600 ÷ (6 × 5) = <b>20 unit</b> (jam kerja lebih singkat → mesin harus lebih banyak).</p>\n<p class=\"ev no\"><b>C. Pernyataan salah.</b> 10 × 8 × 5 = <b>400 potong</b>. Total jam kerja mesin turun dari 120 menjadi 80 mesin-jam.</p>\n<section class=\"box jebakan\"><h4>Awas!</h4><p>Produksi bergantung pada <b>mesin × jam kerja</b>, bukan salah satunya saja.</p></section>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah A dan B.</b></p></section>"
  },
  {
    "n": 28,
    "text": "Laporan anggaran operasional tahunan sebuah SMP menunjukkan rincian berikut.\nKategori Anggaran | Alokasi\nGaji dan Honorarium | 45%\nBuku dan Bahan Belajar | Rp36.000.000\nPemeliharaan Fasilitas | 30%\nKegiatan Siswa | Anggaran Sisa\nCatatan penting: alokasi Buku dan Bahan Belajar (Rp36.000.000) setara dengan 12% dari total anggaran tahunan.\nCatatan pada laporan: alokasi untuk Pengadaan Buku dan Alat Belajar tersebut setara dengan 12% dari total anggaran tahunan sekolah.\nBerapa besar alokasi untuk Kegiatan Siswa?",
    "html": "<div class=\"qp\">Laporan anggaran operasional tahunan sebuah SMP menunjukkan rincian berikut.</div><table class=\"qtable\"><thead><tr><th>Kategori Anggaran</th><th>Alokasi</th></tr></thead><tbody><tr><th>Gaji dan Honorarium</th><td>45%</td></tr><tr><th>Buku dan Bahan Belajar</th><td>Rp36.000.000</td></tr><tr><th>Pemeliharaan Fasilitas</th><td>30%</td></tr><tr><th>Kegiatan Siswa</th><td>Anggaran Sisa</td></tr></tbody></table><div class=\"qp\"><i>Catatan penting: alokasi Buku dan Bahan Belajar (Rp36.000.000) setara dengan 12% dari total anggaran tahunan.</i></div><div class=\"qp\">Catatan pada laporan: alokasi untuk Pengadaan Buku dan Alat Belajar tersebut setara dengan <b>12%</b> dari total anggaran tahunan sekolah.</div><div class=\"qp\">Berapa besar alokasi untuk Kegiatan Siswa?</div>",
    "options": [
      "Rp36.000.000",
      "Rp39.000.000",
      "Rp30.000.000",
      "Rp45.000.000"
    ],
    "answer": "B",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: B</b> · Topik: Persentase &amp; Anggaran</p>\n<ul><li>Total anggaran: 12% = Rp36.000.000 → 1% = Rp3.000.000 → 100% = <b>Rp300.000.000</b>.</li><li>Persen Kegiatan Siswa = 100% − 45% − 30% − 12% = <b>13%</b>.</li><li>13% × Rp300.000.000 = <b>Rp39.000.000</b>.</li></ul>\n<section class=\"box jebakan\"><h4>Awas!</h4><p>Rp36.000.000 (opsi A) adalah alokasi Buku (12%), bukan Kegiatan Siswa. Jangan lupa ikut mengurangkan 12% milik Buku saat mencari sisa persen. Opsi C = 10% dan D = 15%.</p></section>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah B.</b></p></section>"
  },
  {
    "n": 29,
    "text": "Sebuah aplikasi marketplace mengadakan flash sale untuk kategori elektronik. Ketentuan promo yang berlaku sebagai berikut: diskon 25% dari harga barang, kemudian dikenakan biaya layanan sebesar 5% dari harga setelah diskon.\nNotifikasi pembayaran yang diterima pembeli menunjukkan:\nRincian Pembayaran\nKategori | Elektronik\nTotal Pembayaran | Rp189.000\nBerapakah harga barang tersebut sebelum diskon?",
    "html": "<div class=\"qp\">Sebuah aplikasi marketplace mengadakan flash sale untuk kategori elektronik. Ketentuan promo yang berlaku sebagai berikut: diskon <b>25%</b> dari harga barang, kemudian dikenakan biaya layanan sebesar <b>5%</b> dari harga setelah diskon.</div><div class=\"qp\">Notifikasi pembayaran yang diterima pembeli menunjukkan:</div><table class=\"qtable\"><thead><tr><th colspan=\"2\">Rincian Pembayaran</th></tr></thead><tbody><tr><th>Kategori</th><td><b>Elektronik</b></td></tr><tr><th>Total Pembayaran</th><td><b>Rp189.000</b></td></tr></tbody></table><div class=\"qp\">Berapakah harga barang tersebut sebelum diskon?</div>",
    "options": [
      "Rp180.000",
      "Rp240.000",
      "Rp252.000",
      "Rp236.250"
    ],
    "answer": "B",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: B</b> · Topik: Persentase Bertingkat (Diskon &amp; Biaya)</p>\n<ul><li>Misal harga awal = <b>H</b>. Setelah diskon 25% → 0,75H.</li><li>Biaya layanan 5% dari harga setelah diskon → 0,75H × 1,05 = <b>0,7875H</b>.</li><li>0,7875H = 189.000 → H = 189.000 ÷ 0,7875 = <b>Rp240.000</b>.</li><li>Cek: 240.000 → diskon 25% = 180.000 → +5% = 189.000 (cocok).</li></ul>\n<section class=\"box jebakan\"><h4>Awas!</h4><p>Biaya layanan dihitung dari harga <b>setelah diskon</b>, bukan harga awal, jadi bukan “diskon bersih 20%”. Rp236.250 (D) = 189.000 ÷ 0,8; Rp252.000 (C) = 189.000 ÷ 0,75 (lupa biaya layanan); Rp180.000 (A) = 189.000 ÷ 1,05 (baru membalik biaya layanan).</p></section>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah B.</b></p></section>"
  },
  {
    "n": 30,
    "text": "Perhatikan gambar berikut!\n\nLuas area taman yang dapat dimanfaatkan: 96 m²\nKeluarga tersebut akan memasang pembatas tanaman (border) di sepanjang seluruh tepi area taman yang dapat dimanfaatkan, termasuk bagian tepi yang berbatasan dengan ruang instalasi panel surya. Biaya pemasangan pembatas adalah Rp95.000 per meter.\nBerapa total biaya pemasangan pembatas tanaman tersebut?",
    "html": "<div class=\"qp\">Perhatikan gambar berikut!</div><div class=\"qp\"><img class=\"qimg\" src=\"img/tka7-q07.png\" alt=\"Denah atap berbentuk persegi panjang 12 m x 9 m dengan ruang panel surya 4 m x 3 m di satu sudut\"></div><div class=\"qp\"><i>Luas area taman yang dapat dimanfaatkan: 96 m²</i></div><div class=\"qp\">Keluarga tersebut akan memasang pembatas tanaman (border) di sepanjang seluruh tepi area taman yang dapat dimanfaatkan, termasuk bagian tepi yang berbatasan dengan ruang instalasi panel surya. Biaya pemasangan pembatas adalah <b>Rp95.000 per meter</b>.</div><div class=\"qp\">Berapa total biaya pemasangan pembatas tanaman tersebut?</div>",
    "options": [
      "Rp3.610.000",
      "Rp3.990.000",
      "Rp4.560.000",
      "Rp5.130.000"
    ],
    "answer": "B",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: B</b> · Topik: Keliling Bangun Gabungan (Bentuk L)</p>\n<ul><li>Area taman berbentuk <b>L</b>: persegi panjang 12 × 9 m dipotong pojok panel surya 4 × 3 m (luas 108 − 12 = 96 m²).</li><li>Tepi luar: 12 + 9 + (12 − 4) + (9 − 3) = <b>35 m</b>. Tepi di samping panel surya: 4 + 3 = <b>7 m</b>.</li><li>Panjang pembatas = 35 + 7 = <b>42 m</b> (cara cepat: potongan di pojok tidak mengubah keliling → 2 × (12 + 9) = 42 m).</li><li>Biaya = 42 × Rp95.000 = <b>Rp3.990.000</b>.</li></ul>\n<section class=\"box jebakan\"><h4>Awas!</h4><p>Pembatas harus mengelilingi <b>semua</b> sisi bentuk L, termasuk 2 sisi yang menempel panel surya. Opsi A setara 38 m, berarti ada 4 m tepi yang terlewat.</p></section>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah B.</b></p></section>"
  }
];

// Pembahasan untuk siswa = pembahasan guru (field explain). Kunci peta adalah nomor soal.
export const EXPLAIN_SISWA = Object.fromEntries(QUESTIONS.map((q) => [String(q.n), q.explain]));
