// Bank soal Pemahaman Bacaan dan Menulis (quiz id "pbm"): 20 soal TPS Pemahaman Bacaan dan Menulis, pilihan A sampai E,
// berbasis 4 teks bacaan (masing-masing dipakai bersama 5 soal): topi baseball (1-5), sahabat dan depresi (6-10),
// klakson "telolet" (11-15), binatang dan hewan (16-20).
// Dibuat dari dokumen "Soal_dan_Pembahasan_TPS_Pemahaman_Bacaan_Menulis_No1-20.docx" (soal, kunci, dan pembahasan).
//
// Format sama dengan questions-indonesia.js:
//   passage : kunci ke PASSAGES (teks bacaan)
//   answer  : satu huruf (semua soal di quiz ini berjawaban tunggal)
//
// Pembahasan guru dan siswa SAMA:
//  - Isi pembahasan ada di field explain tiap soal (HTML). Mode guru (login "Ferdi") menampilkannya langsung.
//  - Siswa menerima isi yang sama lewat EXPLAIN_SISWA di bawah file ini (dibuat otomatis dari field explain),
//    tepat setelah soal itu dijawab (lihat studentExplainOf di quizzes.js). Mengubah explain berarti mengubah keduanya.
//
// Catatan penyesuaian dari dokumen:
//  - Soal 12 dan 18 di dokumen berupa isian angka (jawaban 1 dan 2), padahal website hanya mendukung pilihan ganda.
//    Diubah menjadi pilihan ganda A sampai E berisi nomor kalimat dan kalimat "Catatan: Hanya diisi dengan angka" dihapus.
//    Soal 12: pilihan (1), (2), (4), (5), (6) = lima kalimat yang memuat kata bercetak tebal pada teks 3 (kunci A = kalimat 1).
//    Soal 18: pilihan (1), (2), (4), (6), (10) (kunci B = kalimat 2); pengecoh dipilih dari kalimat teks 4 yang juga dibahas di pembahasan.
//    Kalimat penutup dan label jawaban pada pembahasan kedua soal itu disesuaikan menjadi huruf (isi pembahasan tidak diubah).
//  - Soal 5, pilihan D: di dokumen kalimatnya terpotong ("... aksesori para ..." dan catatan "lanjutan opsi D tidak tampak pada foto").
//    Dilengkapi menjadi "... aksesori para pemain dan fan baseball." Pilihan D memang salah (lihat pembahasan), jadi kunci tidak terpengaruh.
//    Cocokkan dengan soal aslinya bila ada.
//  - Teks bacaan diberi label P1 dan P2 di depan tiap paragraf (seperti quiz Bahasa Indonesia) karena beberapa soal menyebut "paragraf kedua".
//    Kata bercetak tebal pada teks 3 dipertahankan karena dipakai soal 12. Sumber kutipan teks 2 (Halodoc) ikut ditampilkan.
//  - Huruf miring dan tebal di dokumen dipertahankan lewat field html dan optionsHtml. Field text dan options berisi versi teks biasa.
//  - Pada pembahasan, penilaian tiap pilihan (kelas ev) berwarna hijau untuk pilihan yang sama dengan kunci dan merah muda untuk lainnya.
//  - Kunci: E D E D C D A E E B C A E C D D E B A A (soal 1 sampai 20), sama dengan tabel "Kunci Jawaban" di akhir dokumen dan "Jawaban yang benar" di tiap pembahasan.
//
// File ini hanya dibaca server, jadi kunci dan pembahasan tidak dikirim ke siswa sebelum mereka menjawab.

export const PASSAGES = {
  "topi": {
    "title": "Topi Baseball",
    "range": "1–5",
    "html": "<p><b>P1</b> (1) Topi <i>baseball</i> atau bisbol pertama kali diperkenalkan sebagai bagian dari seragam olahraga pada pertengahan abad ke-19. (2) Awalnya, topi ini dirancang untuk melindungi pemain bisbol dari sinar matahari yang dapat mengganggu pandangan saat bermain di lapangan terbuka. (3) Salah satu tim pertama yang menggunakan topi ini adalah tim Brooklyn Excelsiors pada tahun 1860. (4) Topi mereka memiliki visor atau pelindung matahari yang lebar yang menjadi ciri khas utama topi <i>baseball</i> hingga kini. (5) Seiring waktu, topi bisbol tidak hanya menjadi pelengkap seragam olahraga, tetapi juga ikon dan identitas tim.</p>\n<p><b>P2</b> (6) Pada awal perkembangannya, topi bisbol digunakan secara eksklusif oleh pemain dan fan olahraga tersebut. (7) Namun, pada abad ke-20, popularitasnya meluas ke berbagai kalangan masyarakat umum, terutama di Amerika Serikat. (8) Hal ini didukung oleh kenyamanan dan desainnya yang praktis sehingga cocok digunakan untuk berbagai aktivitas sehari-hari. (9) Selain itu, produsen mulai menambahkan logo, warna, dan desain khas pada topi dan menjadikannya alat promosi untuk tim olahraga, merek, atau kampanye tertentu. (10) Kini, topi baseball tidak lagi terbatas pada dunia olahraga, tetapi telah menjadi bagian penting dari <i>fashion</i> global. (11) Dari atlet hingga selebritas, semua kalangan menggunakan topi <i>baseball</i> sebagai aksesoris serbaguna yang memadukan fungsi dan gaya.</p>"
  },
  "sahabat": {
    "title": "Sahabat dan Depresi",
    "range": "6–10",
    "html": "<p><b>P1</b> (1) Selain keluarga, keberadaan sahabat juga bisa jadi kekuatan bagi seseorang. (2) Dari segi kesehatan mental, ternyata, memiliki sahabat bisa mencegah atau mengembalikan depresi. (3) Hal ini pernah diteliti oleh para peneliti dari University of Warwick, Inggris. (4) Penelitian ini menggunakan data dari The National Longitudinal Study of Adolescent to Adult Health yang melibatkan lebih dari 2.000 remaja di Amerika Serikat. (5) Hasilnya menunjukkan bahwa memiliki sahabat yang sehat secara mental dapat meningkatkan kemungkinan pemulihan dari depresi hingga dua kali lipat dalam jangka waktu 6 hingga 12 bulan. (6) Mereka juga menemukan bahwa remaja dengan banyak teman yang memiliki suasana hati yang sehat memiliki kemungkinan lebih rendah untuk mengalami depresi.</p>\n<p><b>P2</b> (7) Depresi termasuk kategori penyakit mental yang tidak menular, tetapi hal itu sangat memengaruhi kesehatan masyarakat global. (8) Faktor sosial, seperti memiliki sahabat atau dukungan sosial, terbukti berperan penting dalam pencegahan depresi dan pemulihan akibat depresi. (9) [...] depresi tidak dapat menyebar seperti penyakit menular, suasana hati yang sehat dari orang-orang di sekitar kita dapat memengaruhi kondisi mental seseorang. (10) Oleh karena itu, memiliki sahabat yang mendukung secara emosional dapat menjadi salah satu cara efektif.</p>\n<p style=\"overflow-wrap:anywhere\">Redaksi Halodoc. (2022). Benarkah Memiliki Sahabat Bisa Mencegah Depresi? Diambil 20 Januari 2025 dari https://www.halodoc.com/artikel/benarkah-memiliki-sahabat-bisa-mencegah-depresi?srsltid=AfmBOoqd4xN1-EAXwg2Kp3dmh6im7j_u-SdWT5p2LiWJHhqI4SC_oIF9.</p>"
  },
  "telolet": {
    "title": "Klakson “Telolet”",
    "range": "11–15",
    "html": "<p><b>P1</b> (1) Pembuatan klakson yang berbunyi “<i>telolet</i>” kini menjadi tren di kalangan <b>supir</b> bus di beberapa daerah. (2) <b>Klakson</b> tersebut biasanya digunakan untuk menarik perhatian penumpang atau hanya sekadar hiburan. (3) Namun, penggunaan klakson ini ternyata dapat mengancam keselamatan perjalanan. (4) Bunyi yang keras yang dihasilkan klakson tersebut bisa mengganggu konsentrasi pengemudi, baik <b>pengemudi</b> bus maupun pengemudi kendaraan lainnya.</p>\n<p><b>P2</b> (5) Selain itu, penggunaan klakson “<i>telolet</i>” juga mengganggu sistem pembagian angin yang digunakan untuk <b>pengereman</b> bus. (6) Tenaga angin yang ada di dalam <b>bus</b> akan berkurang akibat penggunaan klakson tersebut sehingga proses pengereman menjadi tidak maksimal. (7) Kondisi ini dapat meningkatkan risiko kecelakaan karena pengereman yang tidak optimal membuat bus sulit berhenti secara cepat. (8) Oleh karena itu, penggunaan klakson yang tidak sesuai standar perlu diatur dengan tegas untuk mencegah hal-hal yang tidak diinginkan.</p>"
  },
  "hewan": {
    "title": "Binatang dan Hewan",
    "range": "16–20",
    "html": "<p><b>P1</b> (1) Secara umum, istilah <i>binatang</i> dan <i>hewan</i> sering digunakan secara bergantian dalam percakapan sehari-hari, tetapi keduanya memiliki nuansa makna yang berbeda. (2) Kita menyebut tempat hewan dipamerkan dengan sebutan <i>kebun binatang</i>, bukan <i>kebun hewan</i>, sedangkan dokter yang mengobati binatang adalah <i>dokter hewan</i>, bukan <i>dokter binatang</i>. (3) Kata <i>hewan</i> cenderung digunakan dalam konteks ilmiah dan formal untuk merujuk pada semua makhluk hidup dari kingdom animalia. (4) Sementara itu, <i>binatang</i> lebih sering dipakai dalam konteks sehari-hari dan memiliki konotasi yang lebih umum, bahkan terkadang negatif. (5) Misalnya, istilah <i>binatang buas</i> kerap digunakan untuk menggambarkan hewan liar yang berbahaya. (6) Meski demikian, dalam penggunaan sehari-hari, masyarakat sering kali tidak membedakan keduanya secara tegas.</p>\n<p><b>P2</b> (7) Perbedaan lain antara <i>binatang</i> dan <i>hewan</i> juga dapat terlihat dari konteks budaya dan emosional. (8) Kata <i>hewan</i> sering digunakan dalam diskusi ilmiah, seperti pelajaran biologi atau penelitian tentang jenis spesies tertentu. (9) Sebaliknya, <i>binatang</i> lebih sering muncul dalam cerita rakyat, peribahasa, atau ungkapan yang melibatkan sifat-sifat tertentu, seperti <i>binatang peliharaan</i> atau <i>binatang ternak</i>. (10) Kata <i>hewan</i> lebih netral. (11) Dengan memahami perbedaan ini, kita dapat memilih kata yang lebih tepat sesuai dengan konteks penggunaan dan maknanya.</p>"
  }
};

export const QUESTIONS = [
  {
    "n": 1,
    "passage": "topi",
    "text": "Penulisan kata yang SALAH terdapat pada kalimat ....",
    "options": [
      "(4)",
      "(5)",
      "(6)",
      "(9)",
      "(11)"
    ],
    "answer": "E",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: E</b></p>\n<p>Penulisan kata perlu ditulis secara tepat agar maksudnya dapat dipahami pembaca. Penulisan kata meliputi penulisan kata baku dan tidak baku, kata depan, bentuk terikat, kata berimbuhan, dan sebagainya yang diatur dalam KBBI dan EYD.</p>\n<p>Penulisan kata yang tidak tepat terdapat pada kalimat (11), yakni kata <i>aksesoris</i>. Kata <i>aksesoris</i> merupakan bentuk tidak baku dari kata <b><i>aksesori</i></b>. Menurut <i>Kamus Besar Bahasa Indonesia</i>, kata <i>aksesori</i> bermakna ‘barang tambahan; alat ekstra; barang yang berfungsi sebagai pelengkap dan pemanis busana’. Sementara itu, penulisan kata pada kalimat (4), (5), (6), dan (9) sudah tepat.</p>\n<p>Penggunaan akhiran /s/ pada bahasa Indonesia kurang tepat. Penggunaan huruf ini pada bagian akhir sebuah kata sebenarnya mengikuti aturan penulisan dalam bahasa Inggris yang bermakna jamak. Namun, makna jamak dalam bahasa Indonesia ditandai dengan pengulangan atau penambahan adverbia banyak, beberapa, dan sebagainya.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah E.</b></p></section>"
  },
  {
    "n": 2,
    "passage": "topi",
    "text": "Kalimat (3) perlu disempurnakan dengan cara ....",
    "html": "<div class=\"qp\">Kalimat (3) perlu disempurnakan dengan cara ....</div>",
    "options": [
      "mengganti kata adalah dengan ialah",
      "mengganti kata pada dengan di",
      "mengawali kata tim setelah adalah dengan huruf kapital",
      "menghilangkan kata tim setelah kata adalah",
      "menghilangkan kata pada setelah Excelsiors"
    ],
    "optionsHtml": [
      "mengganti kata <i>adalah</i> dengan <i>ialah</i>",
      "mengganti kata <i>pada</i> dengan <i>di</i>",
      "mengawali kata <i>tim</i> setelah <i>adalah</i> dengan huruf kapital",
      "menghilangkan kata <i>tim</i> setelah kata <i>adalah</i>",
      "menghilangkan kata <i>pada</i> setelah <i>Excelsiors</i>"
    ],
    "answer": "D",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: D</b></p>\n<p>Jika sebuah kalimat perlu diperbaiki atau disempurnakan, besar kemungkinan bahwa kalimat tersebut tidak efektif. Syarat keefektifan sebuah kalimat meliputi kesepadanan (kelengkapan dan kejelasan struktur), kesejajaran, kehematan, kecermatan, dan kelogisan. Untuk mengecek keefektifan sebuah kalimat, kita dapat menganalisis struktur kalimat tersebut terlebih dahulu. Struktur kalimat (3) adalah sebagai berikut.</p>\n<p><i>Salah satu tim pertama yang menggunakan topi ini</i> <b>(S)</b> <i>adalah</i> <b>(P)</b> <i>tim Brooklyn Excelsiors</i> <b>(Pel.)</b> <i>pada tahun 1860</i> <b>(K)</b>.</p>\n<p>Sekilas, kalimat tersebut terlihat efektif. Namun, terdapat penggunaan kata yang lewah, yakni kata <b><i>tim</i></b> <b>sebelum Brooklyn Excelsiors</b>. Kata <i>tim</i> tidak perlu dituliskan kembali karena sudah disebutkan pada awal kalimat. Penggunaan kata tim pada bagian tersebut merupakan pengulangan unsur yang tidak perlu.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah D.</b></p></section>"
  },
  {
    "n": 3,
    "passage": "topi",
    "text": "Kalimat manakah yang paling tepat sebagai kalimat inti dari kalimat (10)?",
    "options": [
      "Topi tidak terbatas.",
      "Topi baseball tidak terbatas.",
      "Topi terbatas.",
      "Topi terbatas olahraga.",
      "Topi terbatas, tetapi menjadi bagian."
    ],
    "answer": "E",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: E</b></p>\n<p>Kalimat inti merupakan pokok pembicaraan dalam sebuah kalimat. Inti sebuah kalimat dapat ditentukan dari unsur subjek (S) dan predikat (P). Unsur objek (O) dan/atau pelengkap (Pel) dapat pula menjadi bagian dari inti kalimat apabila memang dibutuhkan oleh predikatnya. Unsur keterangan bukan bagian dari inti kalimat. Perhatikan pula bahwa kalimat inti tidak mengandung perluasan. Selain itu, kalimat inti juga tidak boleh berupa inversi (predikat mendahului subjek).</p>\n<p>Kalimat (10) memiliki struktur sebagai berikut.</p>\n<p><i>Kini</i> <b>(konj.)</b>, <i>topi baseball</i> <b>(S)</b> <i>tidak lagi terbatas</i> <b>(P)</b> <i>pada dunia olahraga</i> <b>(K)</b>, <i>tetapi telah menjadi</i> <b>(P)</b> <i>bagian penting</i> <b>(Pel.)</b> <i>dari fashion global</i> <b>(K)</b>.</p>\n<p>Jika dilihat dari strukturnya, inti dari kalimat tersebut adalah <i>Topi baseball</i> <b>(S)</b> <i>tidak lagi terbatas</i> <b>(P)</b>, <i>tetapi menjadi</i> <b>(P)</b> <i>bagian penting</i> <b>(Pel.)</b>. Namun, masih terdapat perluasan pada bagian subjek, predikat, dan pelengkap.</p>\n<ul><li>Inti dari frasa <i>topi baseball</i> pada bagian subjek adalah <b>topi</b>, sedangkan bagian <i>baseball</i> merupakan pewatasnya.</li><li>Inti dari frasa <i>tidak lagi terbatas</i> pada bagian predikat adalah <b>terbatas</b>, sedangkan bagian <i>tidak lagi</i> merupakan pewatasnya.</li><li>Inti dari frasa <i>bagian penting</i> pada bagian pelengkap klausa kedua adalah <b>bagian</b>, sedangkan bagian <i>penting</i> merupakan pewatasnya.</li></ul>\n<p>Berdasarkan penjelasan tersebut, kalimat yang paling tepat sebagai kalimat inti dari kalimat (10) adalah <i>Topi</i> <b>(S)</b> <i>terbatas</i> <b>(P)</b>, <i>tetapi menjadi</i> <b>(P)</b> <i>bagian</i> <b>(Pel.)</b>.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah E.</b></p></section>"
  },
  {
    "n": 4,
    "passage": "topi",
    "text": "Manakah perbaikan kalimat (2) yang paling efektif?",
    "options": [
      "Awalnya, topi ini dirancang untuk melindungi pemain bisbol dari cahaya matahari yang dapat mengganggu pandangan saat bermain di lapangan terbuka.",
      "Awalnya, topi ini akan dirancang untuk melindungi pemain bisbol dari sinar matahari yang dapat mengganggu pandangan saat mereka bermain di lapangan terbuka.",
      "Awalnya, topi ini dirancang untuk melindungi pemain bisbol dari panas matahari yang dapat mengganggu pandangan saat bermain di lapangan terbuka.",
      "Awalnya, topi ini dirancang untuk melindungi pemain bisbol dari sinar matahari yang dapat mengganggu pandangan saat mereka bermain di lapangan terbuka.",
      "Awalnya, topi ini dirancang untuk melindungi pemain bisbol dari matahari yang dapat mengganggu pandangan saat mereka bermain di lapangan terbuka."
    ],
    "answer": "D",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: D</b></p>\n<p>Jika sebuah kalimat perlu diperbaiki, besar kemungkinan bahwa kalimat tersebut tidak efektif. Keefektifan sebuah kalimat ditentukan oleh kesepadanan (kelengkapan dan kejelasan struktur), kesejajaran, kehematan, kecermatan, dan kelogisan. Berikut adalah analisis kalimat (2).</p>\n<p><i>Awalnya, topi ini</i> <b>(S)</b> <i>dirancang</i> <b>(P)</b> <i>untuk melindungi pemain bisbol dari sinar matahari yang dapat mengganggu pandangan saat bermain di lapangan terbuka</i> <b>(K)</b>.</p>\n<p>Kalimat tersebut memuat induk dan anak kalimat.</p>\n<ul><li>Induk kalimat: <i>topi ini</i> <b>(S)</b> <i>dirancang</i> <b>(P)</b></li><li>Anak kalimat: <i>bermain</i> <b>(P)</b> <i>di lapangan terbuka</i> <b>(K)</b></li></ul>\n<p>Subjek pada anak kalimat tidak ada sehingga subjeknya akan sama dengan induk kalimat. Jadi, dapat diketahui bahwa subjek pada anak kalimat adalah <b>topi ini</b>. Jika subjek pada anak kalimat adalah <b>topi ini, informasi pada anak kalimat tidak logis</b> karena <b>topi tidak bisa bermain di lapangan</b>. Agar menjadi efektif, kalimat (2) perlu diperbaiki dengan cara memunculkan subjek pada anak kalimat, yaitu <b><i>mereka</i></b>.</p>\n<ul><li><i>Mereka</i> <b>(S)</b> <i>bermain</i> <b>(P)</b> <i>di lapangan terbuka</i> <b>(K)</b>.</li></ul>\n<p>Kalimat lengkapnya menjadi <i>Awalnya, topi ini</i> <b>(S)</b> <i>dirancang</i> <b>(P)</b> <i>untuk melindungi pemain bisbol dari sinar matahari yang dapat mengganggu pandangan saat mereka bermain di lapangan terbuka</i> <b>(K)</b>.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah D.</b></p></section>"
  },
  {
    "n": 5,
    "passage": "topi",
    "text": "Manakah di bawah ini yang dapat menjadi inti dari paragraf kedua?",
    "html": "<div class=\"qp\">Manakah di bawah ini yang dapat menjadi inti dari paragraf kedua?</div>",
    "options": [
      "Topi baseball yang awalnya hanya digunakan untuk atlet baseball kini digunakan oleh para selebritas dunia sebagai bagian dari fashion.",
      "Topi baseball tidak lagi digunakan secara eksklusif oleh para pemain dan fan baseball, tetapi juga oleh masyarakat umum di Amerika Serikat.",
      "Topi baseball yang awalnya eksklusif hanya untuk pemain menjadi aksesori yang populer di berbagai kalangan.",
      "Masyarakat di Amerika Serikat memopulerkan topi baseball yang awalnya merupakan aksesori para pemain dan fan baseball.",
      "Topi baseball yang awalnya eksklusif pada akhirnya diberi sentuhan warna, logo, dan desain khas agar masyarakat luas tertarik untuk membeli dan memakai."
    ],
    "optionsHtml": [
      "Topi <i>baseball</i> yang awalnya hanya digunakan untuk atlet baseball kini digunakan oleh para selebritas dunia sebagai bagian dari <i>fashion</i>.",
      "Topi <i>baseball</i> tidak lagi digunakan secara eksklusif oleh para pemain dan fan <i>baseball</i>, tetapi juga oleh masyarakat umum di Amerika Serikat.",
      "Topi <i>baseball</i> yang awalnya eksklusif hanya untuk pemain menjadi aksesori yang populer di berbagai kalangan.",
      "Masyarakat di Amerika Serikat memopulerkan topi <i>baseball</i> yang awalnya merupakan aksesori para pemain dan fan <i>baseball</i>.",
      "Topi <i>baseball</i> yang awalnya eksklusif pada akhirnya diberi sentuhan warna, logo, dan desain khas agar masyarakat luas tertarik untuk membeli dan memakai."
    ],
    "answer": "C",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: C</b></p>\n<p>Inti teks merupakan inti pembahasan dalam sebuah teks. Untuk menemukan inti dari sebuah teks, kita perlu mengetahui ide pokok masing-masing paragraf terlebih dahulu (jika paragraf lebih dari satu). Setelah itu, kita perlu menggabungkan ide pokok tiap paragraf dan analisis pilihan jawaban.</p>\n<p>Paragraf kedua memuat 6 kalimat yang membahas perkembangan penggunaan topi bisbol di dunia. Topi bisbol, disebutkan dalam paragraf kedua, awalnya digunakan secara eksklusif oleh pemain dan fan bisbol. Popularitas topi ini mulai meluas pada masyarakat umum di Amerika Serikat pada abad ke-20.</p>\n<p>Dari ide pokok yang sudah ditemukan, dapat disimpulkan bahwa inti teks tersebut adalah <b>Topi</b> <b><i>baseball</i></b> <b>yang awalnya eksklusif hanya untuk pemain menjadi aksesori yang populer di berbagai kalangan</b>.</p>\n<p class=\"ev no\"><b>Pilihan A tidak tepat</b> karena pengguna topi <i>baseball</i> kini sangat luas, tidak hanya selebritas.</p>\n<p class=\"ev no\"><b>Pilihan B tidak tepat</b> karena topi <i>baseball</i> kini tidak hanya populer di Amerika Serikat, tetapi seluruh dunia.</p>\n<p class=\"ev no\"><b>Pilihan D tidak tepat</b> karena tidak ada penjelasan masyarakat Amerika Serikat-lah yang memopulerkan topi <i>baseball</i>.</p>\n<p class=\"ev no\"><b>Pilihan E tidak tepat</b> karena penambahan sentuhan warna, logo, dan desain khas dilakukan untuk kepentingan promosi merek dan kampanye.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah C.</b></p></section>"
  },
  {
    "n": 6,
    "passage": "sahabat",
    "text": "Kata sambung yang tepat untuk melengkapi [...] pada kalimat (9) adalah ....",
    "options": [
      "jika",
      "manakala",
      "karena",
      "sekalipun",
      "tatkala"
    ],
    "answer": "D",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: D</b></p>\n<p>Kata sambung atau konjungsi merupakan kata atau ungkapan penghubung antarkata, antarfrasa, antarklausa, dan antarkalimat. Terdapat beberapa jenis konjungsi, yakni konjungsi koordinatif, korelatif, dan subordinatif. Setiap konjungsi tersebut memiliki fungsinya masing-masing. Oleh karena itu, penempatan konjungsi ke dalam sebuah kalimat harus disesuaikan pula dengan fungsinya.</p>\n<p>Kalimat (9) berbunyi <i>[...] depresi tidak dapat menyebar seperti penyakit menular, suasana hati yang sehat dari orang-orang di sekitar kita dapat memengaruhi kondisi mental seseorang.</i> Dalam kalimat tersebut, disebutkan bahwa depresi tidak dapat menular. Di kalimat tersebut juga disebutkan bahwa suasana hati yang sehat dari orang-orang di sekitar kita dapat memengaruhi kondisi mental seseorang. Kedua hal tersebut memuat informasi yang cukup berlawanan. Klausa pertama menunjukkan bahwa depresi tidak menular, tetapi klausa kedua menjelaskan bahwa suasana hati sekitar mampu memengaruhi kondisi mental seseorang. Konjungsi yang tepat untuk menghubungkan klausa pertama dan kedua adalah konjungsi perlawanan, seperti konjungsi <i>meskipun, walaupun, sungguhpun,</i> dan <i>sekalipun.</i> Berdasarkan penjelasan tersebut, kata sambung yang tepat untuk melengkapi [...] pada kalimat (9) adalah <b><i>sekalipun</i></b>.</p>\n<p>(9) <b>[Sekalipun]</b> <i>depresi tidak dapat menyebar seperti penyakit menular, suasana hati yang sehat dari orang-orang di sekitar kita dapat memengaruhi kondisi mental seseorang.</i></p>\n<p class=\"ev no\"><b>Pilihan A dan B tidak tepat</b> karena konjungsi <i>jika</i> dan <i>manakala</i> menandai hubungan persyaratan.</p>\n<p class=\"ev no\"><b>Pilihan C tidak tepat</b> karena konjungsi <i>karena</i> menandai hubungan penyebaban.</p>\n<p class=\"ev no\"><b>Pilihan E tidak tepat</b> karena konjungsi <i>tatkala</i> menandai hubungan waktu.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah D.</b></p></section>"
  },
  {
    "n": 7,
    "passage": "sahabat",
    "text": "Agar efektif, kalimat (7) perlu diperbaiki dengan cara ....",
    "html": "<div class=\"qp\">Agar efektif, kalimat (7) perlu diperbaiki dengan cara ....</div>",
    "options": [
      "menghilangkan frasa hal itu",
      "menghilangkan kata kategori",
      "menambahkan kata secara sebelum global",
      "mengganti kata termasuk dengan merupakan",
      "mengganti kata memengaruhi dengan mempengaruhi"
    ],
    "optionsHtml": [
      "menghilangkan frasa <i>hal itu</i>",
      "menghilangkan kata <i>kategori</i>",
      "menambahkan kata <i>secara</i> sebelum <i>global</i>",
      "mengganti kata <i>termasuk</i> dengan <i>merupakan</i>",
      "mengganti kata <i>memengaruhi</i> dengan <i>mempengaruhi</i>"
    ],
    "answer": "A",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: A</b></p>\n<p>Jika sebuah kalimat perlu diperbaiki atau disempurnakan, besar kemungkinan bahwa kalimat tersebut tidak efektif. Syarat keefektifan sebuah kalimat meliputi kesepadanan (kelengkapan dan kejelasan struktur), kesejajaran, kehematan, kecermatan, dan kelogisan. Untuk mengecek keefektifan sebuah kalimat, kita dapat menganalisis struktur kalimat tersebut terlebih dahulu. Struktur kalimat (7) adalah sebagai berikut.</p>\n<p><i>Depresi</i> <b>(S)</b> <i>termasuk</i> <b>(P)</b> <i>kategori penyakit mental yang tidak menular</i> <b>(Pel)</b>, <i>tetapi</i> <b>(Konj)</b> <i>hal itu</i> <b>(S)</b> <i>sangat memengaruhi</i> <b>(P)</b> <i>kesehatan</i> <b>(O)</b> <i>masyarakat global</i> <b>(Pel)</b>.</p>\n<p>Jika dilihat secara sekilas, kalimat (7) tidak memuat kesalahan. Namun, karena subjek pada klausa kedua dan pertama sama, klausa kedua tidak perlu memunculkan unsur subjek. Penggunaan unsur subjek pada klausa pertama dan kedua, padahal subjek kedua klausa tersebut sama, akan membuat kalimat tersebut tidak memenuhi syarat kehematan. Agar efektif, kalimat (7) perlu diperbaiki dengan cara <b>menghilangkan frasa</b> <b><i>hal itu.</i></b> Jadi, kalimat (7) akan menjadi sebagai berikut.</p>\n<p><i>Depresi</i> <b>(S)</b> <i>termasuk</i> <b>(P)</b> <i>kategori penyakit mental yang tidak menular</i> <b>(Pel)</b>, <i>tetapi</i> <b>(Konj)</b> <i>sangat memengaruhi</i> <b>(P)</b> <i>kesehatan</i> <b>(O)</b> <i>masyarakat global</i> <b>(Pel)</b>.</p>\n<p class=\"ev no\"><b>Pilihan B tidak tepat</b> karena menghilangkan kata <i>kategori</i> akan mengubah maksud kalimat.</p>\n<p class=\"ev no\"><b>Pilihan C tidak tepat</b> karena menambahkan kata <i>secara</i> sebelum <i>global</i> tidak akan membuat kalimat (7) memenuhi syarat kehematan.</p>\n<p class=\"ev no\"><b>Pilihan D tidak tepat</b> karena mengganti kata <i>termasuk</i> dengan <i>merupakan</i> tidak akan membuat kalimat (7) memenuhi syarat kehematan.</p>\n<p class=\"ev no\"><b>Pilihan E tidak tepat</b> karena penulisan kata <i>memengaruhi</i> sudah tepat. Kata berawalan huruf <i>k, t, s,</i> dan <i>p</i> dan memuat huruf kedua vokal (<i>a, i, u, e,</i> dan <i>o</i>) akan melesapkan huruf pertama jika bertemu dengan imbuhan <i>meng-</i>.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah A.</b></p></section>"
  },
  {
    "n": 8,
    "passage": "sahabat",
    "text": "Kata yang paling tepat menggantikan kata mengembalikan dalam kalimat (2) adalah ....",
    "html": "<div class=\"qp\">Kata yang paling tepat menggantikan kata <i>mengembalikan</i> dalam kalimat (2) adalah ....</div>",
    "options": [
      "mengembalikkan",
      "memulihkan",
      "pemulihan",
      "mengafiatkan",
      "mengurangi"
    ],
    "answer": "E",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: E</b></p>\n<p>Jika sebuah kata perlu digantikan oleh kata lainnya, ada dua kemungkinan. Pertama, kita diminta mencari sinonim dari kata tersebut; kedua, kita diminta mengganti kata pada soal dengan kata lainnya karena penggunaan kata yang terdapat pada soal tidak tepat. Untuk memahaminya, kita perlu memahami maksud kata <i>mengembalikan</i> pada kalimat (2) terlebih dahulu.</p>\n<p>Kalimat (2) berbunyi <i>Dari segi kesehatan mental, ternyata, memiliki sahabat bisa mencegah atau mengembalikan depresi.</i> Kata <i>mengembalikan</i> bermakna sebagai berikut.</p>\n<ul><li>‘menjadikan (membuat, menaruh, dan sebagainya) kembali’</li><li>‘memulangkan (pinjaman dan sebagainya)’</li><li>‘memberikan (mengirimkan, membayarkan, dan sebagainya) kembali’</li><li>‘memulihkan (kepada keadaan semula)’</li></ul>\n<p>Jika dilihat dari makna kata <i>mengembalikan,</i> kata tersebut tidak tepat diletakkan pada kalimat (2). Karena salah satu makna kata <i>mengembalikan</i> adalah <i>memulihkan,</i> sesuai konteks kalimat (2), yang dikembalikan adalah depresi. Jadi, depresinya dikembalikan. Makna tersebut tidak sesuai dengan informasi yang ada pada kalimat (2). Karena tidak sesuai konteksnya, kata <i>mengembalikan</i> pada kalimat (2) perlu diganti, yakni diganti dengan kata <b><i>mengurangi.</i></b> Jadi, depresinya yang berkurang.</p>\n<p class=\"ev no\"><b>Pilihan A tidak tepat</b> karena kata <i>mengembalikan</i> tidak perlu menggunakan dobel huruf <i>k.</i></p>\n<p class=\"ev no\"><b>Pilihan B dan C tidak tepat</b> karena kata <i>memulihkan</i> dan <i>pemulihan</i> memuat makna yang tidak tepat untuk konteks kalimat (2).</p>\n<p class=\"ev no\"><b>Pilihan D tidak tepat</b> karena kata <i>mengafiatkan</i> bermakna ‘menyehatkan’. Hal tersebut tidak sesuai konteks kalimat (2). Yang dimaksud disehatkan adalah orangnya, bukan depresinya.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah E.</b></p></section>"
  },
  {
    "n": 9,
    "passage": "sahabat",
    "text": "Pernyataan yang paling tepat untuk melengkapi kalimat (10) adalah ....",
    "options": [
      "agar depresi bukan hanya menular, melainkan juga bisa menyebarkan energi positif ke lingkungan sekitar",
      "untuk menjaga kestabilan emosi karena pengaruh baik dari sahabat dan keluarga akibat depresi",
      "menjaga depresi tidak kembali dirasakan oleh orang-orang di sekeliling kita.",
      "agar kita tidak mudah terserang depresi dan bipolar yang membahayakan kesehatan mental seseorang",
      "untuk mengatasi dan mencegah depresi dengan risiko yang rendah dan biaya yang terjangkau"
    ],
    "answer": "E",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: E</b></p>\n<p>Kalimat (10) berbunyi <i>Oleh karena itu, memiliki sahabat yang mendukung secara emosional dapat menjadi salah satu cara efektif.</i> Untuk melengkapi sebuah kalimat, kita perlu memahami konteks bacaan terlebih dahulu. Kalimat (10) terdapat pada paragraf kedua. Paragraf kedua membahas depresi yang tidak menular, tetapi suasana hati yang sehat dari orang-orang sekitar dapat memengaruhi kondisi mental seseorang. Dalam paragraf tersebut, dikatakan pula bahwa faktor sosial berperan penting dalam pencegahan depresi dan pemulihan akibat depresi. Dari penjelasan tersebut pernyataan yang tepat untuk melengkapi informasi kalimat (10) adalah <i>Oleh karena itu, memiliki sahabat yang mendukung secara emosional dapat menjadi salah satu cara efektif</i> <b><i>untuk mengatasi dan mencegah depresi dengan risiko yang rendah dan biaya yang terjangkau.</i></b></p>\n<p class=\"ev no\"><b>Pilihan A tidak tepat</b> karena teks tersebut menjelaskan bahwa depresi bukan penyakit menular.</p>\n<p class=\"ev no\"><b>Pilihan B tidak tepat</b> karena memuat informasi yang rancu. Pengaruh baik dari sahabat dan keluarga akibat depresi tidak sesuai dengan isi teks.</p>\n<p class=\"ev no\"><b>Pilihan C tidak tepat</b> karena yang dijaga adalah kesehatan mentalnya bukan depresinya. Selain itu, pernyataan pada pilihan C membuat kalimat (10) tidak efektif karena predikat yang rancu.</p>\n<p class=\"ev no\"><b>Pilihan D tidak tepat</b> karena teks tidak membahas selain depresi, termasuk bipolar.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah E.</b></p></section>"
  },
  {
    "n": 10,
    "passage": "sahabat",
    "text": "Manakah kalimat yang paling tepat sebagai penggabungan kalimat (3) dan (4)?",
    "options": [
      "Hal ini pernah diteliti oleh para peneliti dari University of Warwick, Inggris yang menggunakan data dari The National Longitudinal Study of Adolescent to Adult Health yang melibatkan lebih dari 2.000 remaja di Amerika Serikat.",
      "Hal ini pernah diteliti oleh para peneliti dari University of Warwick, Inggris, dengan menggunakan data dari The National Longitudinal Study of Adolescent to Adult Health yang melibatkan lebih dari 2.000 remaja di Amerika Serikat.",
      "Hal ini pernah diteliti oleh para peneliti dari University of Warwick, Inggris, tatkala mereka menggunakan data dari The National Longitudinal Study of Adolescent to Adult Health yang melibatkan lebih dari 2.000 remaja di Amerika Serikat.",
      "Hal ini pernah diteliti oleh para peneliti dari University of Warwick, Inggris, sebab mereka menggunakan data dari The National Longitudinal Study of Adolescent to Adult Health yang melibatkan lebih dari 2.000 remaja di Amerika Serikat.",
      "Hal ini pernah diteliti oleh para peneliti dari University of Warwick, Inggris, manakala mereka menggunakan data dari The National Longitudinal Study of Adolescent to Adult Health yang melibatkan lebih dari 2.000 remaja di Amerika Serikat."
    ],
    "answer": "B",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: B</b></p>\n<p>Untuk menggabungkan dua kalimat atau lebih, kita perlu mengetahui konteks kalimat-kalimat tersebut terlebih dahulu. Kalimat yang akan digabungkan adalah kalimat (3) dan (4).</p>\n<ul><li>(3) Hal ini pernah diteliti oleh para peneliti dari University of Warwick, Inggris.</li><li>(4) Penelitian ini menggunakan data dari The National Longitudinal Study of Adolescent to Adult Health yang melibatkan lebih dari 2.000 remaja di Amerika Serikat.</li></ul>\n<p>Kalimat (4) menambahkan informasi dalam kalimat (3), yakni seputar penelitian, tepatnya data yang digunakan dalam penelitian yang dilakukan oleh para peneliti dari University of Warwick. Penggabungan kedua kalimat tersebut yang tepat adalah <b><i>Hal ini pernah diteliti oleh para peneliti dari University of Warwick, Inggris, dengan menggunakan data dari The National Longitudinal Study of Adolescent to Adult Health yang melibatkan lebih dari 2.000 remaja di Amerika Serikat.</i></b> Penggunaan kata <i>dengan</i> menunjukkan alat atau cara (data) yang digunakan dalam penelitian tersebut.</p>\n<p class=\"ev no\"><b>Pilihan A tidak tepat</b> karena penggunaan kata <i>yang</i> setelah <i>Inggris</i> membuat maknanya ambigu, apakah Inggris yang menggunakan data dari The National Longitudinal Study of Adolescent to Adult Health atau penelitiannya.</p>\n<p class=\"ev no\"><b>Pilihan C tidak tepat</b> karena konjungsi <i>tatkala</i> menandai hubungan waktu. Kalimat (3) dan (4) tidak memuat hubungan waktu.</p>\n<p class=\"ev no\"><b>Pilihan D tidak tepat</b> karena konjungsi <i>sebab</i> menandai hubungan penyebaban. Kalimat (3) bukan sebab terjadinya kalimat (4).</p>\n<p class=\"ev no\"><b>Pilihan E tidak tepat</b> karena konjungsi <i>manakala</i> menandai hubungan persyaratan. Kalimat (4) bukan syarat terjadinya kalimat (3), begitu juga sebaliknya.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah B.</b></p></section>"
  },
  {
    "n": 11,
    "passage": "telolet",
    "text": "Kata ini pada kalimat (7) merujuk pada ....",
    "html": "<div class=\"qp\">Kata <i>ini</i> pada kalimat (7) merujuk pada ....</div>",
    "options": [
      "tenaga angin yang ada di dalam bus",
      "sistem pengereman yang digunakan bus",
      "menyusutnya tenaga angin dalam bus",
      "tidak maksimalnya pengereman karena adanya klakson “telolet”",
      "sistem pembagian angin yang digunakan untuk pengereman bus"
    ],
    "optionsHtml": [
      "tenaga angin yang ada di dalam bus",
      "sistem pengereman yang digunakan bus",
      "menyusutnya tenaga angin dalam bus",
      "tidak maksimalnya pengereman karena adanya klakson “<i>telolet</i>”",
      "sistem pembagian angin yang digunakan untuk pengereman bus"
    ],
    "answer": "C",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: C</b></p>\n<p>Kata rujukan merupakan salah satu kohesi yang digunakan membuat kalimat menjadi padu. Kata rujukan akan berkaitan dengan informasi yang ada di kalimat-kalimat sebelumnya. Untuk menentukan rujukan kata yang dimaksud, kita perlu memahami konteks kalimat yang memuat rujukan dan kalimat-kalimat sebelumnya terlebih dahulu.</p>\n<p>Kata <i>ini</i> terdapat pada kalimat (7) <b><i>Kondisi ini dapat meningkatkan risiko kecelakaan karena pengereman yang tidak optimal membuat bus sulit berhenti secara cepat.</i></b> Kata <i>ini</i> dalam kalimat (7) merupakan kata rujukan yang digunakan untuk merujuk pada sesuatu yang dibicarakan pada kalimat sebelumnya. Kalimat sebelum (7) membahas penggunaan klakson “<i>telolet</i>” yang mengganggu sistem pembagian angin yang digunakan untuk pengereman bus dan berakibat pada pengereman bus yang tidak maksimal. Sementara itu, kalimat (7) membahas kondisi yang dapat meningkatkan risiko kecelakaan. Kondisi yang dimaksud adalah kondisi berkurangnya/menyusutnya tenaga angin yang ada di dalam bus. Kondisi berkurangnya tenaga angin di dalam bus dapat meningkatkan risiko kecelakaan seperti yang dijelaskan pada kalimat (7). Dari penjelasan tersebut, kata <i>ini</i> pada kalimat (7) merujuk pada <b>menyusutnya tenaga angin dalam bus</b>.</p>\n<p class=\"ev no\"><b>Pilihan A tidak tepat</b> karena tidak spesifik menjelaskan tenaga angin sesuai dengan konteks bacaan.</p>\n<p class=\"ev no\"><b>Pilihan B tidak tepat</b> karena tidak spesifik menjelaskan sistem pengereman seperti apa yang digunakan oleh bus.</p>\n<p class=\"ev no\"><b>Pilihan D tidak tepat</b> karena yang membuat pengereman tidak maksimal adalah penggunaan klakson “<i>telolet</i>”, bukan adanya klakson tersebut. Kata <i>penggunaan</i> dan <i>adanya</i> memuat maksud yang berbeda.</p>\n<p class=\"ev no\"><b>Pilihan E tidak tepat</b> karena tidak dijelaskan secara spesifik tentang sistem pembagian angin yang digunakan untuk pengereman bus.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah C.</b></p></section>"
  },
  {
    "n": 12,
    "passage": "telolet",
    "text": "Penulisan kata bercetak tebal yang SALAH terdapat pada kalimat nomor ….",
    "options": [
      "(1)",
      "(2)",
      "(4)",
      "(5)",
      "(6)"
    ],
    "answer": "A",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: A</b></p>\n<p>Penulisan kata perlu ditulis secara tepat agar maksudnya dapat dipahami pembaca. Penulisan kata meliputi penulisan kata baku dan tidak baku, kata depan, bentuk terikat, kata berimbuhan, dan sebagainya yang diatur dalam KBBI dan EYD.</p>\n<p>Penulisan kata yang salah terdapat dalam <b>kalimat (1)</b> <i>Pembuatan klakson yang berbunyi telolet kini menjadi tren di kalangan</i> <b><i>supir</i></b> <i>bus di beberapa daerah.</i> Kata <i>supir</i> merupakan bentuk tidak baku dari <i>sopir</i>. Kalau melihat sejarahnya, <i>sopir</i> adalah kata serapan dari bahasa Perancis, yakni kata <i>chauffeur</i> yang akhirnya diadaptasi ke dalam bahasa Indonesia menjadi <i>sopir</i>. Menurut KBBI, kata <i>sopir</i> bermakna ‘pengemudi mobil (bemo dan sebagainya)’.</p>\n<p>Sementara itu, penggunaan kata lain dalam bacaan sudah tepat. Berdasarkan penjelasan tersebut, penggunaan kata yang SALAH pada bacaan tersebut terdapat pada <b>kalimat (1)</b>.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah A, yaitu kalimat (1).</b></p></section>"
  },
  {
    "n": 13,
    "passage": "telolet",
    "text": "Apa judul yang paling tepat untuk bacaan tersebut?",
    "html": "<div class=\"qp\">Apa judul yang paling tepat untuk bacaan tersebut?</div>",
    "options": [
      "Alasan di Balik Pembuatan Klakson “Telolet” yang Berbahaya pada Bus",
      "Dampak Pembuatan Klakson “Telolet” terhadap Kendaraan",
      "Gangguan yang Dihasilkan Akibat Bunyi Klakson “Telolet”",
      "Perlunya Mengenal Klakson “Telolet” sebelum Membuatnya",
      "Impak Negatif dari Penggunaan Klakson “Telolet” pada Bus"
    ],
    "optionsHtml": [
      "Alasan di Balik Pembuatan Klakson “<i>Telolet</i>” yang Berbahaya pada Bus",
      "Dampak Pembuatan Klakson “<i>Telolet</i>” terhadap Kendaraan",
      "Gangguan yang Dihasilkan Akibat Bunyi Klakson “<i>Telolet</i>”",
      "Perlunya Mengenal Klakson “<i>Telolet</i>” sebelum Membuatnya",
      "Impak Negatif dari Penggunaan Klakson “<i>Telolet</i>” pada Bus"
    ],
    "answer": "E",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: E</b></p>\n<p>Judul merupakan kepala karangan yang biasanya ada di bagian paling atas dari sebuah tulisan. Judul yang baik adalah yang memuat gambaran keseluruhan isi bacaan. Untuk menentukan sebuah judul, kita perlu memahami bacaan dengan saksama.</p>\n<p>Bacaan tersebut terdiri atas dua paragraf. Paragraf pertama dan kedua masing-masing terdiri atas 4 kalimat. Paragraf pertama membahas pembuatan klakson yang ternyata dapat mengancam keselamatan perjalanan, baik pengemudi bus maupun pengemudi kendaraan lainnya. Sementara itu, paragraf kedua membahas penggunaan klakson yang ternyata mengganggu sistem pembagian angin dan menyebabkan pengereman tidak maksimal sehingga meningkatkan risiko kecelakaan. Dari penjelasan tersebut, bacaan tersebut membahas penggunaan klakson pada bus ternyata meningkatkan risiko kecelakaan. Judul yang paling tepat untuk bacaan tersebut adalah <b><i>Impak Negatif dari Penggunaan Klakson “Telolet” pada Bus.</i></b></p>\n<p class=\"ev no\"><b>Pilihan A tidak tepat</b> karena teks tersebut tidak menjelaskan alasan di balik pembuatan klakson “<i>telolet</i>”. Teks tersebut membahas bahayanya penggunaan klakson tersebut.</p>\n<p class=\"ev no\"><b>Pilihan B tidak tepat</b> karena dampak pembuatan klakson “<i>telolet</i>” yang dibahas dalam bacaan hanya terhadap bus, tidak pada kendaraan lainnya.</p>\n<p class=\"ev no\"><b>Pilihan C tidak tepat</b> karena yang dibahas dalam bacaan bukan dampak dari adanya bunyi klakson “<i>telolet</i>”, tetapi fokus ke dampak pembuatan klakson tersebut terhadap bus.</p>\n<p class=\"ev no\"><b>Pilihan D tidak tepat</b> karena tidak sesuai isi bacaan.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah E.</b></p></section>"
  },
  {
    "n": 14,
    "passage": "telolet",
    "text": "Kalimat inti dari kalimat utama yang terdapat pada paragraf pertama bacaan tersebut adalah ...",
    "options": [
      "Klakson mengancam.",
      "Klakson menjadi tren.",
      "Penggunaan mengancam keselamatan.",
      "Pembuatan menjadi tren.",
      "Bunyi mengganggu konsentrasi."
    ],
    "answer": "C",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: C</b></p>\n<p>Kalimat inti merupakan pokok pembicaraan dalam sebuah kalimat. Inti sebuah kalimat dapat ditentukan dari unsur subjek (S) dan predikat (P). Unsur objek (O) dan/atau pelengkap (Pel) dapat pula menjadi bagian dari kalimat inti apabila memang dibutuhkan oleh predikatnya. Unsur keterangan bukan bagian dari kalimat inti. Perhatikan pula bahwa kalimat inti tidak mengandung perluasan. Selain itu, kalimat inti tidak boleh inversi (predikat mendahului subjek), tidak boleh memuat negasi, dan harus berupa kalimat pernyataan.</p>\n<p>Karena soal menanyakan kalimat inti dari kalimat utama paragraf pertama, kita perlu menemukan kalimat utama bacaan terlebih dahulu sebelum menentukan kalimat intinya. Kalimat utama memuat ide pokok. Ide pokok pada paragraf pertama adalah penggunaan klakson “<i>telolet</i>” yang ternyata dapat mengancam keselamatan perjalanan. Kalimat utama tersebut terdapat pada kalimat (3). Berikut adalah analisis kalimat inti dari kalimat (3).</p>\n<p><i>Namun</i> <b>(konj)</b>, <i>penggunaan klakson ini</i> <b>(S)</b> <i>ternyata dapat mengancam</i> <b>(P)</b> <i>keselamatan perjalanan</i> <b>(O)</b>.</p>\n<p>Jika dilihat dari strukturnya, inti kalimat tersebut adalah <i>penggunaan klakson ini</i> <b>(S)</b> <i>ternyata dapat mengancam</i> <b>(P)</b> <i>keselamatan perjalanan</i> <b>(O)</b>. Namun, masih terdapat perluasan pada bagian subjek, predikat, dan objek.</p>\n<ul><li>Inti dari <i>penggunaan klakson ini</i> pada bagian subjek adalah <b><i>penggunaan</i></b>.</li><li>Inti dari <i>ternyata dapat mengancam</i> pada bagian predikat adalah <b><i>mengancam</i></b>.</li><li>Inti dari <i>keselamatan perjalanan</i> pada bagian objek adalah <b><i>keselamatan</i></b>.</li></ul>\n<p>Berdasarkan penjelasan tersebut, kalimat inti dari kalimat utama yang terdapat pada paragraf pertama dalam teks tersebut adalah <i>penggunaan</i> <b>(S)</b> <i>mengancam</i> <b>(P)</b> <i>keselamatan</i> <b>(O)</b>.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah C.</b></p></section>"
  },
  {
    "n": 15,
    "passage": "telolet",
    "text": "Berdasarkan informasi dari paragraf kedua, dapat diasumsikan bahwa ….",
    "html": "<div class=\"qp\">Berdasarkan informasi dari paragraf kedua, dapat diasumsikan bahwa ….</div>",
    "options": [
      "Pengereman bus dapat terganggu karena adanya bunyi klakson “telolet”.",
      "Kecelakaan dapat dicegah dengan menghindari penggunaan klakson “telolet”.",
      "Klakson “telolet” membuat bus tidak dapat mengerem dan dapat menyebabkan kecelakaan.",
      "Penggunaan klakson “telolet” membuat tenaga angin yang ada di dalam bus menyusut.",
      "Pengereman yang tidak maksimal pada bus terjadi karena klakson “telolet”."
    ],
    "optionsHtml": [
      "Pengereman bus dapat terganggu karena adanya bunyi klakson “<i>telolet</i>”.",
      "Kecelakaan dapat dicegah dengan menghindari penggunaan klakson “<i>telolet</i>”.",
      "Klakson “<i>telolet</i>” membuat bus tidak dapat mengerem dan dapat menyebabkan kecelakaan.",
      "Penggunaan klakson “<i>telolet</i>” membuat tenaga angin yang ada di dalam bus menyusut.",
      "Pengereman yang tidak maksimal pada bus terjadi karena klakson “<i>telolet</i>”."
    ],
    "answer": "D",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: D</b></p>\n<p>Simpulan merupakan kesudahan pendapat atau pendapat terakhir yang berdasarkan pada uraian sebelumnya. Untuk dapat menemukan simpulan yang tepat, pembaca perlu mencermati kalimat-kalimat dalam teks.</p>\n<p>Bacaan tersebut terdiri atas dua paragraf. Paragraf pertama dan kedua masing-masing terdiri atas 4 kalimat. Paragraf pertama membahas pembuatan klakson yang ternyata dapat mengancam keselamatan perjalanan, baik pengemudi bus maupun pengemudi kendaraan lainnya. Sementara itu, paragraf kedua membahas penggunaan klakson yang ternyata mengganggu sistem pembagian angin dan menyebabkan pengereman tidak maksimal sehingga meningkatkan risiko kecelakaan. Dari penjelasan tersebut, bacaan tersebut membahas penggunaan klakson pada bus ternyata meningkatkan risiko kecelakaan.</p>\n<p>Berikut adalah analisis lima pilihan jawaban tersebut.</p>\n<p class=\"ev no\"><b>Pilihan A tidak tepat</b> karena berdasarkan penjelasan bacaan, pengereman bus dapat terganggu karena penggunaan klakson “<i>telolet</i>” mengganggu sistem pembagian angin yang digunakan untuk pengereman bus sehingga meningkatkan risiko kecelakaan. Jadi, yang membuat pengereman terganggu adalah pembuatan klaksonnya, bukan bunyinya.</p>\n<p class=\"ev no\"><b>Pilihan B tidak tepat</b> karena tidak semua kecelakaan disebabkan penggunaan klakson “<i>telolet</i>” sehingga menghindari penggunaan klakson tersebut belum tentu pasti terhindar dari kecelakaan.</p>\n<p class=\"ev no\"><b>Pilihan C tidak tepat</b> karena berdasarkan bacaan, penggunaan klakson “<i>telolet</i>” tidak membuat bus tidak dapat mengerem, hanya saja membuat pengereman tidak optimal.</p>\n<p class=\"ev ok\"><b>Pilihan D tepat</b> karena sesuai dengan isi bacaan, penggunaan klakson “<i>telolet</i>” membuat tenaga angin yang ada di dalam bus menyusut.</p>\n<p class=\"ev no\"><b>Pilihan E tidak tepat</b> karena klakson “<i>telolet</i>” menyebabkan pengereman tidak maksimal, tetapi tidak semua pengereman yang tidak maksimal pada bus pasti terjadi gara-gara klakson “<i>telolet</i>”.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah D.</b></p></section>"
  },
  {
    "n": 16,
    "passage": "hewan",
    "text": "Kalimat berikut perlu ditambahkan ke dalam teks.\n\nPenggunaan binatang juga kadang memiliki nuansa negatif, seperti untuk menggambarkan perilaku manusia yang dianggap kasar atau tidak beradab.\n\nKalimat tersebut paling tepat ditempatkan setelah kalimat ....",
    "html": "<div class=\"qp\">Kalimat berikut perlu ditambahkan ke dalam teks.</div><div class=\"qp\"><i>Penggunaan binatang juga kadang memiliki nuansa negatif, seperti untuk menggambarkan perilaku manusia yang dianggap kasar atau tidak beradab.</i></div><div class=\"qp\">Kalimat tersebut paling tepat ditempatkan setelah kalimat ....</div>",
    "options": [
      "(5)",
      "(7)",
      "(8)",
      "(9)",
      "(10)"
    ],
    "answer": "D",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: D</b></p>\n<p>Untuk menambahkan sebuah kalimat dalam bacaan, kita perlu memahami maksud kalimat yang perlu ditambahkan terlebih dahulu kemudian kita juga perlu memahami konteks bacaan. Kalimat yang perlu ditambahkan berisi informasi terkait nilai rasa penggunaan kata <i>hewan</i> dan <i>binatang</i>. Berarti, kalimat tersebut perlu ditambahkan setelah kalimat yang juga membahas nilai rasa. Untuk bisa menjawabnya, kita perlu memahami isi bacaan yang terdapat pada soal.</p>\n<p>Kalimat (1) membahas penggunaan kata <i>hewan</i> dan <i>binatang</i>. Kalimat (3) membahas konteks penggunaan kata <i>hewan</i>. Kalimat (4) dan (5) membahas hal yang berlawanan dengan kalimat (3), yaitu konteks penggunaan kata <i>binatang</i>. Kalimat (6) membahas kesulitan masyarakat dalam membedakan kedua istilah tersebut. Kalimat (7) membahas penggunaan <i>hewan</i> dan <i>binatang</i> dalam konteks budaya dan emosional. Kalimat (8) membahas penggunaan kata <i>hewan</i> yang biasanya ada pada hal-hal ilmiah. Kalimat (9) membahas adanya penambahan sifat pada penggunaan kata <i>binatang</i>. Sementara kalimat (10) membahas <b>nilai rasa dari kata</b> <b><i>hewan</i></b> <b>yang netral, nilai rasa dari kata</b> <b><i>binatang</i></b> <b>tidak disebutkan pada paragraf, tetapi disebutkan dalam kalimat tambahan</b>.</p>\n<p>Dari penjelasan tersebut, kalimat tambahan yang terdapat pada soal dapat diletakkan <b>setelah kalimat (9)</b> agar menyebut nilai rasa dari tiap-tiap kata, <b><i>hewan</i></b> <b>netral</b> dan <b><i>binatang</i></b> <b>lebih negatif</b>. Jika dimasukkan kalimatnya, paragraf 2 menjadi</p>\n<p><i>(7) Perbedaan lain antara binatang dan hewan juga dapat terlihat dari konteks budaya dan emosional. (8) Kata hewan sering digunakan dalam diskusi ilmiah, seperti pelajaran biologi atau penelitian tentang jenis spesies tertentu. (9) Sebaliknya, binatang lebih sering muncul dalam cerita rakyat, peribahasa, atau ungkapan yang melibatkan sifat-sifat tertentu, seperti binatang peliharaan atau binatang ternak.</i> <b><i>Penggunaan binatang juga kadang memiliki nuansa negatif, seperti untuk menggambarkan perilaku manusia yang dianggap kasar atau tidak beradab.</i></b> <i>(10) Kata hewan lebih netral. (11) Dengan memahami perbedaan ini, kita dapat memilih kata yang lebih tepat sesuai dengan konteks penggunaan dan maknanya.</i></p>\n<p>Kalimat (9) membahas penggunaan kata <i>binatang</i> yang kadang menyisipkan sifat dan kalimat tambahannya membahas nilai rasa kata <i>binatang</i>, ditambah kalimat (10) yang juga membahas nilai rasa dari kata <i>hewan</i>. Kedua kalimat tersebut padu karena membahas <b>nilai rasa</b>.</p>\n<p>Berdasarkan penjelasan tersebut, kalimat tambahan yang ada pada soal tepat jika diletakkan <b>setelah kalimat (9)</b>.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah D.</b></p></section>"
  },
  {
    "n": 17,
    "passage": "hewan",
    "text": "Kata yang dapat dihilangkan tanpa mengubah makna secara keseluruhan pada kalimat (8) adalah ....",
    "options": [
      "kata",
      "sering",
      "biologi",
      "penelitian",
      "jenis"
    ],
    "answer": "E",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: E</b></p>\n<p>Jika terdapat soal yang meminta kita menghilangkan kata dalam sebuah bacaan, berarti kalimat tersebut tidak efektif karena tidak memenuhi syarat kehematan.</p>\n<p>Kalimat (8) berbunyi <i>Kata</i> <b><i>hewan</i></b> <i>sering digunakan dalam diskusi ilmiah, seperti pelajaran biologi atau penelitian tentang jenis spesies tertentu.</i> Berdasarkan KBBI, kata <i>spesies</i> memiliki makna ‘satuan dasar klasifikasi biologi; <b>jenis</b>’.</p>\n<p>Makna kata <i>spesies</i> yang juga <i>jenis</i> tersebut membuat kalimat (8) tidak hemat karena mengulang kata <i>jenis</i> (<i>jenis</i> dan <i>spesies</i> memiliki makna yang sama).</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah E.</b></p></section>"
  },
  {
    "n": 18,
    "passage": "hewan",
    "text": "Kalimat yang TIDAK berkaitan dengan gagasan utama bacaan adalah ....",
    "options": [
      "(1)",
      "(2)",
      "(4)",
      "(6)",
      "(10)"
    ],
    "answer": "B",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: B</b></p>\n<p>Sebuah bacaan harus memuat kalimat-kalimat yang saling berkaitan dan memuat atau membahas ide pokok yang sama. Jika terdapat kalimat yang tidak berkaitan dengan ide pokok dalam bacaan, kalimat tersebut merupakan kalimat sumbang. Untuk mengetahui kalimat sumbang dalam sebuah bacaan, kita perlu memahami ide pokok bacaan terlebih dahulu.</p>\n<p>Bacaan yang terdapat pada soal terdiri atas dua paragraf. Paragraf pertama memuat 6 kalimat, sedangkan paragraf kedua memuat 5 kalimat. Kalimat (1) membahas seputar penggunaan kata <i>hewan</i> dan <i>binatang</i>. Kalimat (2) membahas mengapa kita membedakan penggunaan kata <i>hewan</i> dan <i>binatang</i> pada <i>kebun binatang</i> dan <i>dokter hewan</i>. Kalimat (3), (4), (5), dan (6) membahas kapan menggunakan kata <i>binatang</i> dan <i>hewan</i> dalam kehidupan sehari-hari. Dari gambaran tersebut, dapat diketahui bahwa kalimat (1) merupakan pengantar untuk membahas penggunaan kata <i>binatang</i> dan <i>hewan</i>, sedangkan kalimat (3) hingga (6) membahas kapan dan dalam konteks apa kedua kata tersebut digunakan.</p>\n<p>Sementara itu, kalimat (2) membahas penggunaan kata <i>hewan</i> dan <i>binatang</i> dalam istilah <i>kebun binatang</i> dan <i>dokter hewan</i>. Kalimat (2) terlihat tidak membahas hal yang sama dengan kalimat lain yang membahas waktu dan konteks penggunaan kata <i>binatang</i> dan <i>hewan</i>. Berdasarkan penjelasan tersebut, kalimat (2) memuat informasi yang sumbang.</p>\n<p>Jadi, kalimat yang TIDAK berkaitan dengan gagasan utama bacaan adalah <b>kalimat (2)</b>.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah B, yaitu kalimat (2).</b></p></section>"
  },
  {
    "n": 19,
    "passage": "hewan",
    "text": "Kalimat manakah yang paling tepat sebagai perluasan kalimat (10) agar padu dengan kalimat lain?",
    "html": "<div class=\"qp\">Kalimat manakah yang paling tepat sebagai perluasan kalimat (10) agar padu dengan kalimat lain?</div>",
    "options": [
      "Di sisi lain, kata hewan lebih netral dan tidak membawa konotasi tertentu.",
      "Kata hewan lebih netral karena terdengar lebih halus dan sopan.",
      "Kata hewan lebih netral karena secara tidak sadar kita pun sering menggunakan kata ini untuk konteks yang lebih halus dan sopan.",
      "Di sisi lain, kata hewan lebih netral karena tidak menimbulkan perasaan tersinggung bagi orang yang mendengarnya.",
      "Di sisi lain, kata hewan lebih netral karena dalam konteks ilmiah pun kita sering menggunakan kata ini."
    ],
    "optionsHtml": [
      "Di sisi lain, kata <i>hewan</i> lebih netral dan tidak membawa konotasi tertentu.",
      "Kata <i>hewan</i> lebih netral karena terdengar lebih halus dan sopan.",
      "Kata <i>hewan</i> lebih netral karena secara tidak sadar kita pun sering menggunakan kata ini untuk konteks yang lebih halus dan sopan.",
      "Di sisi lain, kata <i>hewan</i> lebih netral karena tidak menimbulkan perasaan tersinggung bagi orang yang mendengarnya.",
      "Di sisi lain, kata <i>hewan</i> lebih netral karena dalam konteks ilmiah pun kita sering menggunakan kata ini."
    ],
    "answer": "A",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: A</b></p>\n<p>Sebuah kalimat dapat diperluas dengan menambahkan keterangan ataupun informasi tambahan tertentu ke dalamnya. Namun, perluasan kalimat harus dilakukan dengan tetap memperhatikan konteks atau kepaduannya dengan paragraf.</p>\n<p>Kalimat (10) pada teks tersebut berbunyi <i>Kata hewan lebih netral.</i> Kalimat tersebut didahului oleh kalimat (7), (8), dan (9) yang <b>membahas nilai rasa</b> dari kata <i>binatang</i> dan <i>hewan</i>. Dengan kata lain, paragraf kedua yang terdiri atas kalimat (7) hingga (11) <b>membahas nilai rasa</b>.</p>\n<p>Informasi tersebut dapat digunakan untuk memperluas kalimat (10) agar padu dengan kalimat-kalimat lain dalam teks. Perluasan kalimat (10) yang tepat adalah <b><i>Di sisi lain, kata hewan lebih netral dan tidak membawa konotasi tertentu.</i></b> (pilihan A). Sementara itu, pilihan lain tidak tepat karena membuat perluasannya tidak padu dengan informasi yang ada di dalam teks. Selain itu, beberapa pilihan lainnya juga menunjukkan kalimat yang tidak efektif.</p>\n<p class=\"ev no\"><b>Pilihan B tidak tepat</b> karena paragraf kedua tidak membahas kehalusan dan kesopanan penggunaan kata <i>hewan</i> dan <i>binatang</i>.</p>\n<p class=\"ev no\"><b>Pilihan C tidak tepat</b> karena paragraf kedua tidak membahas kesadaran kita mengenai penggunaan kedua kata tersebut.</p>\n<p class=\"ev no\"><b>Pilihan D tidak tepat</b> karena teks tersebut tidak membicarakan pandangan orang lain terhadap penggunaan kedua kata tersebut.</p>\n<p class=\"ev no\"><b>Pilihan E tidak tepat</b> karena kalimat sebelum dan setelahnya tidak lagi membahas konteks ilmiah.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah A.</b></p></section>"
  },
  {
    "n": 20,
    "passage": "hewan",
    "text": "Penulisan kata kingdom dalam kalimat (3) seharusnya ....",
    "html": "<div class=\"qp\">Penulisan kata kingdom dalam kalimat (3) seharusnya ....</div>",
    "options": [
      "dibiarkan saja (sudah benar)",
      "diganti kingdom",
      "diganti kerajaan",
      "diganti kelompok",
      "diganti Kingdom"
    ],
    "optionsHtml": [
      "dibiarkan saja (sudah benar)",
      "diganti <i>kingdom</i>",
      "diganti kerajaan",
      "diganti kelompok",
      "diganti Kingdom"
    ],
    "answer": "A",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: A</b></p>\n<p>Penulisan kata perlu ditulis secara tepat agar maksudnya dapat dipahami pembaca. Penulisan kata meliputi penulisan kata baku dan tidak baku, kata depan, bentuk terikat, kata berimbuhan, dan sebagainya yang diatur dalam KBBI dan EYD.</p>\n<p>Penulisan kata <i>kingdom</i> (tidak miring) pada kalimat (3) sudah tepat. Pasalnya, kalimat tersebut memuat informasi dalam <b>konteks biologi</b>. Dalam KBBI, kata <i>kingdom</i> memiliki makna ‘<b><i>Bio</i></b> tingkat taksonomi tertinggi yang digunakan untuk mengelompokkan makhluk hidup berdasarkan karakteristik umum’. Makna ini sudah mengacu pada konteks biologi sehingga sudah menjadi bagian dalam bahasa Indonesia. Dengan demikian, penulisannya sudah tepat dengan menggunakan <b>huruf tegak, tidak miring, dan tidak diawali huruf kapital</b>.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah A.</b></p></section>"
  }
];

// Pembahasan untuk siswa = pembahasan guru (field explain). Kunci peta adalah nomor soal.
export const EXPLAIN_SISWA = Object.fromEntries(QUESTIONS.map((q) => [String(q.n), q.explain]));
