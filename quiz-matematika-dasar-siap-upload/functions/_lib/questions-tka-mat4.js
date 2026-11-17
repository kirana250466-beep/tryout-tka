// Bank soal TKA Matematika 4 (quiz id "tka4"): 20 soal pilihan ganda A sampai D (Matematika Kelas IX SMP/MTs).
// Dibuat dari PDF "Latihan Soal TKA Matematika Kelas IX SMP/MTs" (TKA_16_Halaman_1-4.pdf, halaman 1 sampai 4).
// Materi: pola bilangan, statistika, fungsi linear, pecahan dan desimal, bangun datar, transformasi, garis sejajar,
// perbandingan volume, peluang, diagram Venn, teorema Pythagoras, bilangan bulat, skala, bukti pernyataan, dan identitas aljabar.
//
// Pembahasan guru dan siswa SAMA:
//  - Isi pembahasan ada di field explain tiap soal (HTML). Mode guru (login "Ferdi") menampilkannya langsung.
//  - Siswa menerima isi yang sama lewat EXPLAIN_SISWA di bawah file ini (dibuat otomatis dari field explain),
//    tepat setelah soal itu dijawab (lihat studentExplainOf di quizzes.js). Mengubah explain berarti mengubah keduanya.
//
// Catatan penyesuaian dari PDF:
//  - PDF hanya berisi soal (tanpa kunci dan tanpa pembahasan). Kunci dan pembahasan dibuat untuk website ini dan
//    sudah dihitung ulang satu per satu: 20 dari 20 cocok (lihat README, bagian quiz tka4).
//  - Tabel pada soal 1, 2, 3, 8, 9, 10, 15, dan 19 ditulis ulang sebagai tabel HTML (field html, kelas "qtable").
//    Field text tetap berisi versi teks biasa.
//  - Soal 2: di PDF tertulis "Grafik berikut", padahal datanya berupa tabel. Di website ditulis "Tabel berikut".
//  - Pecahan pada soal 4 dan pilihan soal 11 digambar bertumpuk (field html dan optionsHtml, tanpa KaTeX).
//  - Gambar soal: soal 5 (bangun L pada bidang koordinat, img/tka4-q05.png) dan soal 14 (segitiga siku-siku, img/tka4-q14.png).
//    Gambar pembahasan soal 5 (dipecah menjadi dua persegi panjang): img/tka4-p05.png. Gambar digambar ulang dari PDF.
//  - Semua soal berjawaban tunggal (pilih satu).
//
// File ini hanya dibaca server, jadi kunci dan pembahasan tidak dikirim ke siswa sebelum mereka menjawab.

/* ---------- pembantu penulisan HTML ---------- */

// Pecahan bertumpuk tanpa KaTeX.
const frac = (a, b) =>
  `<span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;line-height:1.2;margin:0 3px"><span style="padding:0 5px;border-bottom:1.5px solid currentColor">${a}</span><span style="padding:0 5px">${b}</span></span>`;

const P = (s) => `<div class="qp">${s}</div>`;
const IMG = (src) => `<div class="qp"><img class="qimg" src="${src}" alt="Gambar untuk soal ini"></div>`;

// Tabel dengan baris judul di atas (th) lalu baris data.
const tableV = (head, rows) =>
  `<table class="qtable"><thead><tr>${head.map((h) => `<th>${h}</th>`).join("")}</tr></thead><tbody>${rows
    .map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join("")}</tr>`)
    .join("")}</tbody></table>`;

// Tabel dengan sel pertama tiap baris sebagai judul baris (th).
const tableH = (rows) =>
  `<table class="qtable"><tbody>${rows
    .map((r) => `<tr><th>${r[0]}</th>${r.slice(1).map((c) => `<td>${c}</td>`).join("")}</tr>`)
    .join("")}</tbody></table>`;

/* ---------- pembantu penulisan pembahasan ---------- */

const keystatus = (t) => `<p class="keystatus ok"><b>Jawaban: ${t}</b></p>`;
const title = (t) => `<h4 class="steps-title">${t}</h4>`;
const calc = (t) => `<div class="calc">${t}</div>`;
const jawab = (t) => `<section class="box jawab"><p><b>Jadi, jawaban yang tepat adalah ${t}.</b></p></section>`;
const ok = (t) => `<p class="ev ok"><b>${t}</b></p>`;
const no = (t) => `<p class="ev no"><b>${t}</b></p>`;
const tip = (h, t) => `<section class="box cepat"><h4>${h}</h4><p>${t}</p></section>`;
const trap = (t) => `<section class="box jebakan"><h4>Awas jebakan</h4><p>${t}</p></section>`;
const figure = (src, alt) =>
  `<figure class="ill"><img src="${src}" alt="${alt}" loading="lazy"><figcaption>Gambar: ${alt}</figcaption></figure>`;

export const QUESTIONS = [
  /* ===== 1. Pola bilangan ===== */
  {
    n: 1,
    text:
      "Perhatikan tabel jumlah batang korek api yang digunakan untuk membentuk deretan persegi yang saling berdempetan.\n" +
      "Banyak persegi: 1, 2, 3, 4\nBatang korek api: 4, 7, 10, 13\n" +
      "Setiap persegi baru berbagi satu sisi dengan persegi sebelumnya.\n" +
      "Jika pola tersebut diteruskan, banyak batang korek api yang diperlukan untuk membentuk 12 persegi adalah ....",
    html:
      P("Perhatikan tabel jumlah batang korek api yang digunakan untuk membentuk deretan persegi yang saling berdempetan.") +
      tableH([
        ["Banyak persegi", 1, 2, 3, 4],
        ["Batang korek api", 4, 7, 10, 13],
      ]) +
      P("Setiap persegi baru berbagi satu sisi dengan persegi sebelumnya.") +
      P("Jika pola tersebut diteruskan, banyak batang korek api yang diperlukan untuk membentuk 12 persegi adalah ...."),
    options: ["34", "35", "37", "40"],
    answer: "C",
    explain:
      keystatus("C (37)") +
      title("1. Identifikasi pola") +
      "<p>Banyak persegi 1, 2, 3, 4 memakai batang korek api 4, 7, 10, 13. Setiap persegi baru berbagi satu sisi, sehingga setiap penambahan satu persegi hanya menambah <b>3 batang</b>.</p>" +
      calc("7 − 4 = 3\n10 − 7 = 3\n13 − 10 = 3") +
      title("2. Rumus pola") +
      "<p>Ini barisan aritmetika dengan suku pertama a = 4 dan beda b = 3.</p>" +
      calc("Un = a + (n − 1) × b\nUn = 4 + (n − 1) × 3\nUn = 3n + 1") +
      title("3. Hitung untuk 12 persegi") +
      calc("U12 = 3 × 12 + 1\nU12 = 37") +
      "<p>Cek dengan cara lain: persegi pertama memakai 4 batang, 11 persegi berikutnya masing-masing menambah 3 batang, jadi 4 + 11 × 3 = 37.</p>" +
      tip("💡 Trik", "Pada pola berdempetan, persegi pertama memerlukan 4 batang, persegi berikutnya hanya 3 batang. Jangan mengalikan 4 × 12 = 48 karena sisi yang dipakai bersama tidak dihitung dua kali.") +
      jawab("C"),
  },

  /* ===== 2. Perubahan jumlah pengunjung ===== */
  {
    n: 2,
    text:
      "Tabel berikut menunjukkan jumlah pengunjung perpustakaan selama empat hari.\n" +
      "Senin: 48\nSelasa: 60\nRabu: 54\nKamis: 72\n" +
      "Pernyataan yang benar mengenai perubahan jumlah pengunjung dari Senin ke Kamis adalah ....",
    html:
      P("Tabel berikut menunjukkan jumlah pengunjung perpustakaan selama empat hari.") +
      tableV(["Hari", "Jumlah pengunjung"], [["Senin", 48], ["Selasa", 60], ["Rabu", 54], ["Kamis", 72]]) +
      P("Pernyataan yang benar mengenai perubahan jumlah pengunjung dari Senin ke Kamis adalah ...."),
    options: [
      "Bertambah 24 orang atau 25%",
      "Bertambah 24 orang atau 50%",
      "Bertambah 50 orang atau 50%",
      "Bertambah 24 orang atau 75%",
    ],
    answer: "B",
    explain:
      keystatus("B (bertambah 24 orang atau 50%)") +
      title("1. Ambil data yang dibutuhkan") +
      "<p>Yang ditanyakan hanya perubahan dari Senin ke Kamis, jadi data Selasa dan Rabu tidak dipakai.</p>" +
      calc("Senin = 48 orang\nKamis = 72 orang") +
      title("2. Hitung selisih") +
      calc("Perubahan = 72 − 48 = 24 orang (bertambah)") +
      title("3. Hitung persentase perubahan") +
      "<p>Persentase perubahan dibandingkan dengan nilai <b>awal</b> (Senin).</p>" +
      calc("Persentase = (24 ÷ 48) × 100%\nPersentase = 0,5 × 100% = 50%") +
      trap("Persentase perubahan selalu dibagi nilai awal (48), bukan nilai akhir (72). Jumlah pengunjung bertambah 24 orang, bukan 50 orang, sehingga pilihan C juga salah.") +
      jawab("B"),
  },

  /* ===== 3. Fungsi linear dari tabel ===== */
  {
    n: 3,
    text:
      "Suatu fungsi linear memiliki nilai seperti pada tabel berikut.\n" +
      "x: −1, 1, 3\nf(x): 2, 8, 14\n" +
      "Jika pola fungsi tersebut berlanjut, nilai f(5) adalah ....",
    html:
      P("Suatu fungsi linear memiliki nilai seperti pada tabel berikut.") +
      tableH([
        ["<i>x</i>", "−1", 1, 3],
        ["<i>f</i>(<i>x</i>)", 2, 8, 14],
      ]) +
      P("Jika pola fungsi tersebut berlanjut, nilai <i>f</i>(5) adalah ...."),
    options: ["17", "18", "20", "23"],
    answer: "C",
    explain:
      keystatus("C (20)") +
      title("1. Tentukan gradien") +
      "<p>Fungsi linear berbentuk f(x) = ax + b. Gunakan dua titik dari tabel, yaitu (−1, 2) dan (1, 8).</p>" +
      calc("a = (8 − 2) ÷ (1 − (−1))\na = 6 ÷ 2 = 3") +
      title("2. Tentukan konstanta b") +
      calc("f(1) = 3(1) + b = 8\nb = 8 − 3 = 5\nf(x) = 3x + 5") +
      "<p>Cek dengan titik ketiga: f(3) = 3(3) + 5 = 14 ✔ (sesuai tabel).</p>" +
      title("3. Hitung f(5)") +
      calc("f(5) = 3(5) + 5 = 20") +
      tip("💡 Trik", "Nilai x pada tabel naik 2 setiap kolom dan nilai f(x) naik 6. Dari x = 3 ke x = 5 naik 2 lagi, jadi f(5) = 14 + 6 = 20.") +
      jawab("C"),
  },

  /* ===== 4. Menganalisis beberapa pernyataan ===== */
  {
    n: 4,
    text:
      "Perhatikan informasi berikut.\n" +
      "Pernyataan I : 0,4 = 2/5\nPernyataan II : 3/8 = 0,38\nPernyataan III : 40% = 2/5\n" +
      "Pernyataan yang benar adalah ....",
    html:
      P("Perhatikan informasi berikut.") +
      P(`<b>Pernyataan I</b> : 0,4 = ${frac(2, 5)}`) +
      P(`<b>Pernyataan II</b> : ${frac(3, 8)} = 0,38`) +
      P(`<b>Pernyataan III</b> : 40% = ${frac(2, 5)}`) +
      P("Pernyataan yang benar adalah ...."),
    options: ["I saja", "I dan II", "I dan III", "I, II, dan III"],
    answer: "C",
    explain:
      keystatus("C (I dan III)") +
      "<p>Periksa setiap pernyataan satu per satu.</p>" +
      ok("Pernyataan I. Benar.") +
      calc("0,4 = 4/10 = 2/5") +
      no("Pernyataan II. Salah.") +
      calc("3/8 = 3 ÷ 8 = 0,375") +
      "<p>0,375 tidak sama dengan 0,38. Angka 0,38 hanyalah hasil pembulatan, bukan nilai yang sama persis.</p>" +
      ok("Pernyataan III. Benar.") +
      calc("40% = 40/100 = 2/5") +
      trap("Kesamaan pada tanda “=” harus tepat, bukan hampir sama. 0,375 dan 0,38 berbeda.") +
      jawab("C"),
  },

  /* ===== 5. Luas bangun gabungan ===== */
  {
    n: 5,
    text:
      "Sebuah bangun berbentuk huruf L memiliki titik sudut berurutan sebagai berikut pada bidang koordinat:\n" +
      "(0, 0), (8, 0), (8, 3), (5, 3), (5, 6), (0, 6)\n" +
      "Semua satuan panjang dinyatakan dalam sentimeter.\n" +
      "Luas bangun tersebut adalah ....",
    html:
      P("Sebuah bangun berbentuk huruf L memiliki titik sudut berurutan sebagai berikut pada bidang koordinat:") +
      P("(0, 0), (8, 0), (8, 3), (5, 3), (5, 6), (0, 6)") +
      P("Semua satuan panjang dinyatakan dalam sentimeter.") +
      IMG("img/tka4-q05.png") +
      P("Luas bangun tersebut adalah ...."),
    options: ["33 cm²", "36 cm²", "39 cm²", "42 cm²"],
    answer: "C",
    explain:
      keystatus("C (39 cm²)") +
      "<p>Bangun L dapat dipecah menjadi dua persegi panjang.</p>" +
      figure("img/tka4-p05.png", "bangun L dipecah menjadi persegi panjang I (5 × 6) dan persegi panjang II (3 × 3)") +
      title("1. Luas persegi panjang I (kiri)") +
      "<p>Lebar dari x = 0 sampai x = 5, tinggi dari y = 0 sampai y = 6.</p>" +
      calc("L1 = 5 × 6 = 30 cm²") +
      title("2. Luas persegi panjang II (kanan bawah)") +
      "<p>Lebar dari x = 5 sampai x = 8, yaitu 3 cm. Tinggi dari y = 0 sampai y = 3, yaitu 3 cm.</p>" +
      calc("L2 = 3 × 3 = 9 cm²") +
      title("3. Jumlahkan") +
      calc("L = 30 + 9 = 39 cm²") +
      tip("💡 Cek dengan cara lain", "Persegi panjang besar 8 × 6 = 48 cm², dikurangi bagian kosong di kanan atas 3 × 3 = 9 cm². Hasilnya 48 − 9 = 39 cm² ✔") +
      jawab("C"),
  },

  /* ===== 6. Transformasi koordinat ===== */
  {
    n: 6,
    text:
      "Titik P(−2, 5) dicerminkan terhadap sumbu-X. Hasil pencerminan kemudian ditranslasikan 4 satuan ke kanan dan 3 satuan ke bawah.\n" +
      "Koordinat akhir titik tersebut adalah ....",
    options: ["(2, 8)", "(2, −8)", "(−6, 2)", "(6, −2)"],
    answer: "B",
    explain:
      keystatus("B (2, −8)") +
      title("1. Pencerminan terhadap sumbu-X") +
      "<p>Pencerminan terhadap sumbu-X mengubah tanda y, sedangkan x tetap: (x, y) → (x, −y).</p>" +
      calc("P(−2, 5) → P′(−2, −5)") +
      title("2. Translasi 4 satuan ke kanan dan 3 satuan ke bawah") +
      "<p>Ke kanan berarti x ditambah 4. Ke bawah berarti y dikurangi 3.</p>" +
      calc("x = −2 + 4 = 2\ny = −5 − 3 = −8") +
      "<p>Koordinat akhirnya adalah <b>(2, −8)</b>.</p>" +
      trap("Pencerminan terhadap sumbu-X hanya mengubah tanda y, bukan x. Dan “ke bawah” berarti y dikurangi, bukan ditambah.") +
      jawab("B"),
  },

  /* ===== 7. Sudut pada garis sejajar ===== */
  {
    n: 7,
    text:
      "Dua garis sejajar dipotong oleh sebuah garis transversal. Sepasang sudut dalam sepihak masing-masing berukuran (2x + 10)° dan (4x + 20)°.\n" +
      "Perhatikan hubungan sudut berikut.\n" +
      "(2x + 10)° + (4x + 20)° = 180°\n" +
      "Besar sudut yang lebih kecil adalah ....",
    options: ["50°", "60°", "70°", "120°"],
    answer: "B",
    explain:
      keystatus("B (60°)") +
      title("1. Selesaikan persamaan") +
      "<p>Sudut dalam sepihak jumlahnya 180°.</p>" +
      calc("(2x + 10) + (4x + 20) = 180\n6x + 30 = 180\n6x = 150\nx = 25") +
      title("2. Hitung kedua sudut") +
      calc("Sudut pertama = 2(25) + 10 = 60°\nSudut kedua = 4(25) + 20 = 120°") +
      "<p>Cek: 60° + 120° = 180° ✔</p>" +
      title("3. Pilih yang lebih kecil") +
      "<p>Sudut yang lebih kecil adalah <b>60°</b>.</p>" +
      trap("Nilai x = 25 bukan jawaban akhir. Setelah mendapat x, hitung dulu kedua sudutnya, lalu pilih yang lebih kecil. Sudut 120° adalah sudut yang lebih besar.") +
      jawab("B"),
  },

  /* ===== 8. Perbandingan volume ===== */
  {
    n: 8,
    text:
      "Dua kubus memiliki ukuran seperti pada tabel berikut.\n" +
      "Kubus I: panjang rusuk 3 cm\nKubus II: panjang rusuk 5 cm\n" +
      "Perbandingan volume Kubus I terhadap Kubus II adalah ....",
    html:
      P("Dua kubus memiliki ukuran seperti pada tabel berikut.") +
      tableV(["Kubus", "Panjang rusuk"], [["I", "3 cm"], ["II", "5 cm"]]) +
      P("Perbandingan volume Kubus I terhadap Kubus II adalah ...."),
    options: ["3 : 5", "9 : 25", "27 : 125", "27 : 25"],
    answer: "C",
    explain:
      keystatus("C (27 : 125)") +
      title("1. Hitung volume tiap kubus") +
      "<p>Volume kubus = rusuk × rusuk × rusuk = s³.</p>" +
      calc("Kubus I : V = 3³ = 27 cm³\nKubus II : V = 5³ = 125 cm³") +
      title("2. Bandingkan") +
      calc("VI : VII = 27 : 125") +
      "<p>27 dan 125 tidak punya faktor persekutuan selain 1, jadi perbandingan sudah paling sederhana.</p>" +
      tip("💡 Trik", "Jika rusuk berbanding 3 : 5, maka luas permukaan berbanding 3² : 5² = 9 : 25, dan volume berbanding 3³ : 5³ = 27 : 125.") +
      trap("Perbandingan 3 : 5 adalah perbandingan rusuk, dan 9 : 25 adalah perbandingan luas. Yang ditanyakan volume, jadi dipangkatkan tiga.") +
      jawab("C"),
  },

  /* ===== 9. Rata-rata dari tabel frekuensi ===== */
  {
    n: 9,
    text:
      "Hasil tes 10 siswa dirangkum dalam tabel berikut.\n" +
      "Nilai 60: frekuensi 2\nNilai 70: frekuensi 3\nNilai 80: frekuensi 4\nNilai 90: frekuensi 1\n" +
      "Rata-rata nilai seluruh siswa adalah ....",
    html:
      P("Hasil tes 10 siswa dirangkum dalam tabel berikut.") +
      tableV(["Nilai", "Frekuensi"], [[60, 2], [70, 3], [80, 4], [90, 1]]) +
      P("Rata-rata nilai seluruh siswa adalah ...."),
    options: ["72", "74", "76", "80"],
    answer: "B",
    explain:
      keystatus("B (74)") +
      title("1. Hitung jumlah seluruh nilai") +
      "<p>Kalikan setiap nilai dengan frekuensinya, lalu jumlahkan.</p>" +
      `<div class="table-wrap"><table class="dt"><tbody>
<tr><td>60 × 2</td><td>= <b>120</b></td></tr>
<tr><td>70 × 3</td><td>= <b>210</b></td></tr>
<tr><td>80 × 4</td><td>= <b>320</b></td></tr>
<tr><td>90 × 1</td><td>= <b>90</b></td></tr>
<tr><td>Jumlah</td><td>= <b>740</b></td></tr>
</tbody></table></div>` +
      title("2. Bagi dengan banyak siswa") +
      calc("Banyak siswa = 2 + 3 + 4 + 1 = 10\nRata-rata = 740 ÷ 10 = 74") +
      trap("Jangan menghitung rata-rata dari empat nilai saja, (60 + 70 + 80 + 90) ÷ 4 = 75. Setiap nilai harus dihitung sebanyak frekuensinya.") +
      jawab("B"),
  },

  /* ===== 10. Membandingkan dua kelompok data ===== */
  {
    n: 10,
    text:
      "Diberikan dua kelompok data berikut.\n" +
      "Kelompok A: 3, 5, 5, 7, 10\nKelompok B: 2, 4, 6, 8, 10\n" +
      "Pernyataan yang benar adalah ....",
    html:
      P("Diberikan dua kelompok data berikut.") +
      tableV(["Kelompok A", "Kelompok B"], [["3, 5, 5, 7, 10", "2, 4, 6, 8, 10"]]) +
      P("Pernyataan yang benar adalah ...."),
    options: [
      "Median A lebih besar daripada median B.",
      "Median B lebih besar daripada median A sebesar 1.",
      "Rata-rata A lebih besar daripada rata-rata B.",
      "Rata-rata B lebih besar daripada rata-rata A sebesar 1.",
    ],
    answer: "B",
    explain:
      keystatus("B") +
      title("1. Hitung median dan rata-rata") +
      "<p>Kedua kelompok sudah terurut dan masing-masing berisi 5 data, jadi median adalah data ke-3.</p>" +
      calc("Kelompok A\nMedian = 5\nRata-rata = (3 + 5 + 5 + 7 + 10) ÷ 5 = 30 ÷ 5 = 6") +
      calc("Kelompok B\nMedian = 6\nRata-rata = (2 + 4 + 6 + 8 + 10) ÷ 5 = 30 ÷ 5 = 6") +
      title("2. Periksa tiap pernyataan") +
      no("A. Salah.") +
      "<p>Median A = 5 lebih kecil daripada median B = 6.</p>" +
      ok("B. Benar.") +
      "<p>Median B − median A = 6 − 5 = 1.</p>" +
      no("C. Salah.") +
      "<p>Rata-rata A dan B sama, yaitu 6.</p>" +
      no("D. Salah.") +
      "<p>Rata-rata A dan B sama, selisihnya 0, bukan 1.</p>" +
      jawab("B"),
  },

  /* ===== 11. Peluang kejadian majemuk ===== */
  {
    n: 11,
    text:
      "Sebuah kantong berisi 4 bola merah dan 3 bola biru. Dua bola diambil secara acak satu demi satu tanpa pengembalian.\n" +
      "Peluang terambil dua bola yang berbeda warna adalah ....",
    options: ["2/7", "3/7", "4/7", "5/7"],
    optionsHtml: [frac(2, 7), frac(3, 7), frac(4, 7), frac(5, 7)],
    answer: "C",
    explain:
      keystatus("C (4/7)") +
      title("1. Tentukan kemungkinan yang berbeda warna") +
      "<p>Ada 4 merah dan 3 biru, total 7 bola. Dua bola berbeda warna terjadi bila <b>merah lalu biru</b> atau <b>biru lalu merah</b>.</p>" +
      title("2. Hitung peluang tiap urutan (tanpa pengembalian)") +
      calc("P(merah, biru) = 4/7 × 3/6 = 12/42\nP(biru, merah) = 3/7 × 4/6 = 12/42") +
      "<p>Setelah satu bola diambil dan tidak dikembalikan, jumlah bola tersisa 6.</p>" +
      title("3. Jumlahkan") +
      calc("P = 12/42 + 12/42 = 24/42 = 4/7") +
      tip("💡 Cek dengan kombinasi", "Cara memilih 1 merah dan 1 biru: 4 × 3 = 12. Cara memilih 2 bola dari 7: C(7, 2) = 21. Peluangnya 12/21 = 4/7 ✔") +
      trap("Karena tanpa pengembalian, penyebut pengambilan kedua adalah 6, bukan 7. Dan jangan lupa menjumlahkan kedua urutan (merah-biru dan biru-merah).") +
      jawab("C"),
  },

  /* ===== 12. Diagram Venn ===== */
  {
    n: 12,
    text:
      "Dalam sebuah kelas yang terdiri atas 30 siswa, dilakukan survei tentang pelajaran yang disukai.\n" +
      "• 18 siswa menyukai Matematika.\n• 14 siswa menyukai IPA.\n• 7 siswa menyukai kedua pelajaran tersebut.\n" +
      "Diagram Venn dapat diinterpretasikan dengan dua himpunan yang saling beririsan.\n" +
      "Banyak siswa yang tidak menyukai Matematika maupun IPA adalah ....",
    options: ["3 siswa", "5 siswa", "7 siswa", "9 siswa"],
    answer: "B",
    explain:
      keystatus("B (5 siswa)") +
      title("1. Hitung yang menyukai paling sedikit satu pelajaran") +
      "<p>Gunakan rumus gabungan dua himpunan, dengan M = Matematika dan I = IPA.</p>" +
      calc("n(M ∪ I) = n(M) + n(I) − n(M ∩ I)\nn(M ∪ I) = 18 + 14 − 7 = 25") +
      title("2. Hitung yang tidak menyukai keduanya") +
      calc("Tidak keduanya = 30 − 25 = 5 siswa") +
      "<p>Cek dengan diagram Venn: hanya Matematika = 18 − 7 = 11, hanya IPA = 14 − 7 = 7, keduanya = 7. Jumlahnya 11 + 7 + 7 = 25 ✔</p>" +
      trap("Angka 18 dan 14 sudah memuat 7 siswa yang menyukai keduanya. Jika langsung dijumlahkan, 18 + 14 = 32 lebih dari 30 siswa, jadi irisannya harus dikurangi.") +
      jawab("B"),
  },

  /* ===== 13. Fungsi linear dari dua titik ===== */
  {
    n: 13,
    text:
      "Sebuah grafik fungsi linear melewati titik A(1, 4) dan B(3, 10).\n" +
      "Berdasarkan kedua titik tersebut, nilai fungsi saat x = 6 adalah ....",
    options: ["16", "18", "19", "22"],
    answer: "C",
    explain:
      keystatus("C (19)") +
      title("1. Tentukan gradien") +
      calc("m = (10 − 4) ÷ (3 − 1) = 6 ÷ 2 = 3") +
      title("2. Tentukan persamaan garis") +
      calc("y − y1 = m(x − x1)\ny − 4 = 3(x − 1)\ny = 3x − 3 + 4\ny = 3x + 1") +
      "<p>Cek dengan titik B: y = 3(3) + 1 = 10 ✔</p>" +
      title("3. Hitung nilai saat x = 6") +
      calc("y = 3(6) + 1 = 19") +
      tip("💡 Trik", "Dari x = 3 ke x = 6 naik 3, jadi y naik 3 × 3 = 9. Nilai y = 10 + 9 = 19.") +
      jawab("C"),
  },

  /* ===== 14. Keliling segitiga siku-siku ===== */
  {
    n: 14,
    text:
      "Sebuah segitiga siku-siku mempunyai dua sisi tegak lurus dengan panjang masing-masing 9 cm dan 12 cm.\n" +
      "Perhatikan diagram berikut.\n" +
      "Keliling segitiga tersebut adalah ....",
    html:
      P("Sebuah segitiga siku-siku mempunyai dua sisi tegak lurus dengan panjang masing-masing 9 cm dan 12 cm.") +
      P("Perhatikan diagram berikut.") +
      IMG("img/tka4-q14.png") +
      P("Keliling segitiga tersebut adalah ...."),
    options: ["30 cm", "32 cm", "36 cm", "42 cm"],
    answer: "C",
    explain:
      keystatus("C (36 cm)") +
      title("1. Hitung sisi miring dengan teorema Pythagoras") +
      calc("c² = 9² + 12²\nc² = 81 + 144 = 225\nc = √225 = 15 cm") +
      title("2. Hitung keliling") +
      calc("K = 9 + 12 + 15 = 36 cm") +
      tip("💡 Trik", "9, 12, 15 adalah kelipatan 3 dari tripel Pythagoras 3, 4, 5. Jadi sisi miringnya pasti 5 × 3 = 15 cm.") +
      trap("Keliling mencakup ketiga sisi. Jangan berhenti di 9 + 12 = 21 karena sisi miring harus ikut dijumlahkan.") +
      jawab("C"),
  },

  /* ===== 15. Median dan jangkauan ===== */
  {
    n: 15,
    text:
      "Suhu udara yang tercatat selama lima hari adalah sebagai berikut.\n" +
      "Senin: 28°C\nSelasa: 31°C\nRabu: 29°C\nKamis: 33°C\nJumat: 29°C\n" +
      "Median dan jangkauan data suhu tersebut berturut-turut adalah ....",
    html:
      P("Suhu udara yang tercatat selama lima hari adalah sebagai berikut.") +
      tableV(["Hari", "Suhu"], [["Senin", "28°C"], ["Selasa", "31°C"], ["Rabu", "29°C"], ["Kamis", "33°C"], ["Jumat", "29°C"]]) +
      P("Median dan jangkauan data suhu tersebut berturut-turut adalah ...."),
    options: ["28°C dan 5°C", "29°C dan 5°C", "29°C dan 4°C", "31°C dan 5°C"],
    answer: "B",
    explain:
      keystatus("B (29°C dan 5°C)") +
      title("1. Urutkan data dari yang terkecil") +
      calc("28, 29, 29, 31, 33") +
      title("2. Tentukan median") +
      "<p>Ada 5 data, jadi median adalah data ke-3 setelah diurutkan.</p>" +
      calc("Median = 29°C") +
      title("3. Tentukan jangkauan") +
      calc("Jangkauan = data terbesar − data terkecil\nJangkauan = 33 − 28 = 5°C") +
      trap("Median harus dicari setelah data diurutkan, bukan dari urutan hari. Dan jangkauan adalah selisih data terbesar dan terkecil (33 − 28 = 5), bukan 4.") +
      jawab("B"),
  },

  /* ===== 16. Bilangan bulat genap pada interval ===== */
  {
    n: 16,
    text:
      "Bilangan x adalah bilangan bulat yang memenuhi:\n−2 < x ≤ 3\n" +
      "Selain itu, x merupakan bilangan genap.\n" +
      "Banyak nilai x yang memenuhi seluruh syarat adalah ....",
    options: ["1", "2", "3", "4"],
    answer: "B",
    explain:
      keystatus("B (2)") +
      title("1. Daftar bilangan bulat pada interval") +
      "<p>Tanda “<” pada −2 berarti −2 <b>tidak</b> ikut. Tanda “≤” pada 3 berarti 3 <b>ikut</b>.</p>" +
      calc("x = −1, 0, 1, 2, 3") +
      title("2. Pilih yang genap") +
      "<p>Bilangan genap adalah bilangan bulat yang habis dibagi 2. Nol termasuk bilangan genap (0 = 2 × 0).</p>" +
      calc("Genap: 0 dan 2") +
      "<p>Banyak nilai x yang memenuhi adalah <b>2</b>.</p>" +
      trap("Nol adalah bilangan genap, jadi ikut dihitung. Sebaliknya, −2 memang genap tetapi tidak masuk karena batasnya −2 < x.") +
      jawab("B"),
  },

  /* ===== 17. Skala peta ===== */
  {
    n: 17,
    text:
      "Pada sebuah peta berskala 1 : 50.000, jarak lokasi A ke B adalah 3,4 cm, sedangkan jarak B ke C adalah 2,6 cm.\n" +
      "Jika seseorang menempuh rute A–B–C, jarak sebenarnya yang ditempuh adalah ....",
    options: ["1,5 km", "2,5 km", "3 km", "3,5 km"],
    answer: "C",
    explain:
      keystatus("C (3 km)") +
      title("1. Jumlahkan jarak pada peta") +
      "<p>Rute A–B–C melewati dua ruas, jadi jarak pada peta dijumlahkan.</p>" +
      calc("Jarak peta = 3,4 + 2,6 = 6 cm") +
      title("2. Kalikan dengan penyebut skala") +
      "<p>Skala 1 : 50.000 berarti 1 cm pada peta mewakili 50.000 cm sebenarnya.</p>" +
      calc("Jarak sebenarnya = 6 × 50.000 = 300.000 cm") +
      title("3. Ubah ke kilometer") +
      calc("100.000 cm = 1 km\n300.000 cm = 3 km") +
      "<p>Cek dengan menghitung terpisah: A–B = 3,4 × 50.000 = 170.000 cm = 1,7 km, B–C = 2,6 × 50.000 = 130.000 cm = 1,3 km. Jumlahnya 3 km ✔</p>" +
      trap("Hasil kali 6 × 50.000 masih dalam sentimeter. Ubah ke kilometer dengan membagi 100.000 (bukan 1.000).") +
      jawab("C"),
  },

  /* ===== 18. Sifat bilangan ganjil ===== */
  {
    n: 18,
    text:
      "Diketahui n adalah bilangan bulat ganjil.\n" +
      "Perhatikan pernyataan berikut.\n" +
      "I. n² selalu ganjil.\nII. n² − 1 selalu genap.\nIII. n² − 1 selalu habis dibagi 8.\n" +
      "Pernyataan yang benar adalah ....",
    options: ["I saja", "I dan II", "II dan III", "I, II, dan III"],
    answer: "D",
    explain:
      keystatus("D (I, II, dan III)") +
      "<p>Karena n ganjil, tulis n = 2k + 1 dengan k bilangan bulat.</p>" +
      ok("Pernyataan I. Benar.") +
      calc("n² = (2k + 1)² = 4k² + 4k + 1 = 2(2k² + 2k) + 1") +
      "<p>Bentuknya 2 × (bilangan bulat) + 1, jadi n² selalu ganjil.</p>" +
      ok("Pernyataan II. Benar.") +
      calc("n² − 1 = 4k² + 4k = 4k(k + 1)") +
      "<p>Bentuk ini kelipatan 4, sehingga pasti genap. (Cara cepat: ganjil dikurangi 1 hasilnya genap.)</p>" +
      ok("Pernyataan III. Benar.") +
      "<p>k(k + 1) adalah hasil kali dua bilangan bulat berurutan, sehingga selalu genap, misalnya k(k + 1) = 2m.</p>" +
      calc("n² − 1 = 4 × k(k + 1) = 4 × 2m = 8m") +
      "<p>Jadi n² − 1 selalu habis dibagi 8.</p>" +
      "<p>Uji dengan contoh: n = 3 → 9 − 1 = 8, n = 5 → 25 − 1 = 24, n = 7 → 49 − 1 = 48. Semuanya kelipatan 8 ✔</p>" +
      jawab("D"),
  },

  /* ===== 19. Rumus dari tabel ===== */
  {
    n: 19,
    text:
      "Perhatikan tabel berikut.\n" +
      "x: 1, 2, 3, 4\ny: 2, 6, 12, 20\n" +
      "Jika pola hubungan antara x dan y mengikuti rumus y = x(x + 1), nilai y saat x = 8 adalah ....",
    html:
      P("Perhatikan tabel berikut.") +
      tableH([
        ["<i>x</i>", 1, 2, 3, 4],
        ["<i>y</i>", 2, 6, 12, 20],
      ]) +
      P("Jika pola hubungan antara <i>x</i> dan <i>y</i> mengikuti rumus <i>y</i> = <i>x</i>(<i>x</i> + 1), nilai <i>y</i> saat <i>x</i> = 8 adalah ...."),
    options: ["56", "64", "72", "80"],
    answer: "C",
    explain:
      keystatus("C (72)") +
      title("1. Pastikan rumus cocok dengan tabel") +
      calc("x = 1 → 1 × 2 = 2\nx = 2 → 2 × 3 = 6\nx = 3 → 3 × 4 = 12\nx = 4 → 4 × 5 = 20") +
      "<p>Semua cocok dengan tabel ✔</p>" +
      title("2. Substitusikan x = 8") +
      calc("y = x(x + 1)\ny = 8 × (8 + 1)\ny = 8 × 9 = 72") +
      trap("56 = 7 × 8 adalah nilai untuk x = 7, dan 64 = 8 × 8 melupakan “+ 1” pada faktor kedua. Substitusikan x = 8 ke kedua x pada rumus.") +
      jawab("C"),
  },

  /* ===== 20. Identitas aljabar ===== */
  {
    n: 20,
    text:
      "Dua bilangan real positif x dan y memenuhi:\nx + y = 10, xy = 21\n" +
      "Seorang siswa ingin menentukan x² + y² tanpa menghitung nilai x dan y secara terpisah.\n" +
      "Strategi yang tepat adalah menggunakan identitas:\nx² + y² = (x + y)² − 2xy\n" +
      "Nilai x² + y² adalah ....",
    options: ["42", "49", "58", "79"],
    answer: "C",
    explain:
      keystatus("C (58)") +
      title("1. Gunakan identitas yang diberikan") +
      calc("x² + y² = (x + y)² − 2xy") +
      title("2. Substitusikan x + y = 10 dan xy = 21") +
      calc("x² + y² = 10² − 2(21)\nx² + y² = 100 − 42\nx² + y² = 58") +
      "<p>Cek dengan mencari x dan y: x dan y adalah akar dari t² − 10t + 21 = 0, yaitu (t − 3)(t − 7) = 0, jadi 3 dan 7. Maka 3² + 7² = 9 + 49 = 58 ✔</p>" +
      trap("Suku kedua pada identitas adalah 2xy, bukan xy. Jika lupa mengalikan 2, hasilnya 100 − 21 = 79 (pilihan D yang keliru).") +
      jawab("C"),
  },
];

// Pembahasan untuk siswa = pembahasan guru (field explain). Kunci peta adalah nomor soal.
export const EXPLAIN_SISWA = Object.fromEntries(QUESTIONS.map((q) => [String(q.n), q.explain]));
