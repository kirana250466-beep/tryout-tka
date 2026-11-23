// Bank soal Pengetahuan dan Pemahaman Umum 2 (quiz id "ppu2"): 20 soal subtes Pengetahuan dan Pemahaman Umum,
// Tryout SNBT Gratis #5 Naufal Academy, pilihan A sampai E, semuanya berjawaban tunggal. Tiap soal berdiri sendiri dengan
// teks atau data sendiri (tidak ada teks bacaan bersama), jadi quiz ini tidak memakai PASSAGES: teks soal dimasukkan ke field html.
// Dibuat dari dokumen "Soal_dan_Pembahasan_Tryout_SNBT_5_Naufal_Academy.docx" (soal, kunci, dan pembahasan).
//
// Pembahasan guru dan siswa SAMA:
//  - Isi pembahasan ada di field explain tiap soal (HTML). Mode guru (login "Ferdi") menampilkannya langsung.
//  - Siswa menerima isi yang sama lewat EXPLAIN_SISWA di bawah file ini (dibuat otomatis dari field explain),
//    tepat setelah soal itu dijawab (lihat studentExplainOf di quizzes.js). Mengubah explain berarti mengubah keduanya.
//
// SUMBER KUNCI (penting): menurut catatan di dokumen, kunci dan pembahasan nomor 1-5 diambil dari tangkapan layar Naufal Academy,
// sedangkan nomor 6-20 TIDAK tampil di tangkapan layar sehingga "disusun mandiri". Kunci nomor 6-20 belum dicocokkan dengan kunci resmi.
// Soal yang paling layak dicek ulang: nomor 10 (menempuh jalur hukum vs mengambil langkah hukum, keduanya lazim) dan nomor 20
// (kolokasi; pilihan B, C, dan E juga dipakai penutur sehari-hari).
//
// Catatan penyesuaian dari dokumen:
//  - Soal 1: pembahasan di sumber terpotong di bagian akhir; kalimat simpulan dilengkapi (menurut catatan dokumen).
//  - Soal 6: di dokumen kelima kalimat teks ditulis satu per baris, padahal soal dan pembahasan menyebut "paragraf pertama" dan "paragraf kedua".
//    Di website kalimat (1)-(3) dijadikan paragraf P1 dan kalimat (4)-(5) paragraf P2, sesuai pembahasan.
//  - Teks bernomor kalimat (soal 3 sampai 6 dan 12 sampai 16) digabung menjadi satu paragraf; data bahasa artifisial (soal 1 dan 11) tetap satu baris per data.
//  - Huruf miring dan tebal di dokumen dipertahankan lewat field html dan optionsHtml. Kata bercetak tebal pada soal 14, 16, dan 18 dipakai soal itu.
//    Field text dan options berisi versi teks biasa.
//  - Pada pembahasan, penilaian tiap pilihan (kelas ev) berwarna hijau untuk pilihan yang sama dengan kunci dan merah muda untuk lainnya.
//    Daftar "Mengapa pilihan lain keliru" di dokumen diberi label "Pilihan X" tanpa mengubah isinya.
//  - Kotak "Jadi, jawaban yang tepat adalah X." ditambahkan di akhir tiap pembahasan (seperti quiz lain); isi pembahasan tidak diubah.
//  - Kunci: A C B C A A C C B B A A B A A C A B C A (soal 1 sampai 20), sama dengan tabel "Rekap Kunci Jawaban" di dokumen.
//
// File ini hanya dibaca server, jadi kunci dan pembahasan tidak dikirim ke siswa sebelum mereka menjawab.

export const QUESTIONS = [
  {
    "n": 1,
    "text": "Perhatikan konstruksi kalimat dalam bahasa artifisial berikut beserta terjemahannya!\n1. morva klinu denta pelis = Kucing hitam memanjat pagar.\n2. morvan klinu dentak pelis = Kucing-kucing hitam telah memanjat pagar.\n3. bavur zomi dentak pelis = Tupai cokelat telah memanjat pagar.\n4. morvati zomi serpa dahan = Anak kucing cokelat melompati dahan.\nBerdasarkan pola pembentukan kalimat di atas, bagaimanakah cara menerjemahkan kalimat “Anak tupai hitam telah melompati pagar” ke dalam bahasa artifisial tersebut?",
    "html": "<div class=\"qp\">Perhatikan konstruksi kalimat dalam bahasa artifisial berikut beserta terjemahannya!</div><div class=\"qp\">1. <i>morva klinu denta pelis</i> = Kucing hitam memanjat pagar.</div><div class=\"qp\">2. <i>morvan klinu dentak pelis</i> = Kucing-kucing hitam telah memanjat pagar.</div><div class=\"qp\">3. <i>bavur zomi dentak pelis</i> = Tupai cokelat telah memanjat pagar.</div><div class=\"qp\">4. <i>morvati zomi serpa dahan</i> = Anak kucing cokelat melompati dahan.</div><div class=\"qp\">Berdasarkan pola pembentukan kalimat di atas, bagaimanakah cara menerjemahkan kalimat <b>“Anak tupai hitam telah melompati pagar”</b> ke dalam bahasa artifisial tersebut?</div>",
    "options": [
      "bavurti klinu serpak pelis",
      "bavurn klinu serpak pelis",
      "bavurti zomi serpak pelis",
      "bavurti klinu serpa pelis",
      "morvati klinu serpak pelis"
    ],
    "optionsHtml": [
      "<i>bavurti klinu serpak pelis</i>",
      "<i>bavurn klinu serpak pelis</i>",
      "<i>bavurti zomi serpak pelis</i>",
      "<i>bavurti klinu serpa pelis</i>",
      "<i>morvati klinu serpak pelis</i>"
    ],
    "answer": "A",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: A</b></p>\n<p>Untuk memecahkan kode sintaksis dan morfologi bahasa artifisial tersebut, kita uraikan korespondensi setiap konstituen:</p>\n<p><b>1. Analisis Leksikal Nomina (Subjek/Objek)</b></p>\n<ul><li><i>morva</i> = kucing</li><li><i>bavur</i> = tupai</li><li><i>pelis</i> = pagar</li><li><i>dahan</i> = dahan</li></ul>\n<p><b>2. Analisis Adjektiva (Warna)</b></p>\n<ul><li><i>klinu</i> = hitam</li><li><i>zomi</i> = cokelat</li></ul>\n<p><b>3. Analisis Morfologi Nomina (Afiksasi)</b></p>\n<ul><li>Sufiks <i>-n</i> menyatakan bentuk jamak (<i>morva</i> → <i>morvan</i> = kucing-kucing).</li><li>Sufiks <i>-ti</i> menyatakan bentuk diminutif/anak (<i>morva</i> → <i>morvati</i> = anak kucing).</li></ul>\n<p>Maka, “anak tupai” diterjemahkan menjadi <i>bavurti</i>.</p>\n<p><b>4. Analisis Verba dan Aspek (Predikat)</b></p>\n<ul><li><i>denta</i> = memanjat; <i>dentak</i> = telah memanjat (sufiks <i>-k</i> menyatakan aspek perfektif/selesai).</li><li><i>serpa</i> = melompati; maka “telah melompati” mendapatkan sufiks <i>-k</i> menjadi <i>serpak</i>.</li></ul>\n<p><b>5. Sintesis Kalimat</b></p>\n<ul><li>Anak tupai = <i>bavurti</i></li><li>hitam = <i>klinu</i></li><li>telah melompati = <i>serpak</i></li><li>pagar = <i>pelis</i></li></ul>\n<p>Dengan demikian, terjemahan yang tepat adalah <b>bavurti klinu serpak pelis</b> (opsi A).</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah A.</b></p></section>"
  },
  {
    "n": 2,
    "text": "Sebagaimana tata kelola air bersih perkotaan yang tidak menitikberatkan pengawasan pada setiap tetes air di keran konsumen, melainkan menyaring dan mensterilkan kontaminan di hulu instalasi pengolahan, regulasi terhadap kecerdasan buatan generatif seharusnya tidak dibebankan kepada pengguna akhir. Pemerintah harus mengawasi korporasi pengembang pada tahap kurasi data latih (hulu). Apabila residu bias atau racun informasi dibiarkan lolos di hulu, penyaringan di tingkat hilir (pengguna) hanya akan memicu kebocoran kognitif massal yang mustahil dibendung.\nBerdasarkan kutipan teks di atas, strategi penalaran utama yang digunakan oleh penulis untuk mempertahankan tesisnya adalah ....",
    "html": "<div class=\"qp\">Sebagaimana tata kelola air bersih perkotaan yang tidak menitikberatkan pengawasan pada setiap tetes air di keran konsumen, melainkan menyaring dan mensterilkan kontaminan di hulu instalasi pengolahan, regulasi terhadap kecerdasan buatan generatif seharusnya tidak dibebankan kepada pengguna akhir. Pemerintah harus mengawasi korporasi pengembang pada tahap kurasi data latih (hulu). Apabila residu bias atau racun informasi dibiarkan lolos di hulu, penyaringan di tingkat hilir (pengguna) hanya akan memicu kebocoran kognitif massal yang mustahil dibendung.</div><div class=\"qp\">Berdasarkan kutipan teks di atas, strategi penalaran utama yang digunakan oleh penulis untuk mempertahankan tesisnya adalah ....</div>",
    "options": [
      "penalaran deduktif silogistis yang menurunkan simpulan partikular dari premis mayor teoretis",
      "generalisasi induktif berdasarkan perbandingan sampel empiris di berbagai negara maju",
      "penalaran analogikal dengan memetakan keserupaan relasional antara sistem sanitasi air dan regulasi teknologi",
      "argumentasi berbasis otoritas (ad verecundiam) dengan mengutip regulasi teknis instalasi publik",
      "penalaran kausalitas sirkular yang mengasumsikan akibat hilir sebagai sebab tunggal kekacauan di hulu"
    ],
    "optionsHtml": [
      "penalaran deduktif silogistis yang menurunkan simpulan partikular dari premis mayor teoretis",
      "generalisasi induktif berdasarkan perbandingan sampel empiris di berbagai negara maju",
      "penalaran analogikal dengan memetakan keserupaan relasional antara sistem sanitasi air dan regulasi teknologi",
      "argumentasi berbasis otoritas (<i>ad verecundiam</i>) dengan mengutip regulasi teknis instalasi publik",
      "penalaran kausalitas sirkular yang mengasumsikan akibat hilir sebagai sebab tunggal kekacauan di hulu"
    ],
    "answer": "C",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: C</b></p>\n<p>Penulis menggunakan strategi <b>penalaran analogikal</b> (<i>argument by analogy</i>).</p>\n<p>Hal ini ditunjukkan oleh:</p>\n<p><b>1. Pemetaan relasi isomorfis</b></p>\n<p>Antara domain sumber (sistem pengolahan air bersih) dan domain target (regulasi kecerdasan buatan generatif).</p>\n<p><b>2. Korespondensi struktural</b></p>\n<ul><li>Hulu sanitasi air (instalasi penyaringan) ↔︎ Hulu kecerdasan buatan (kurasi data latih oleh korporasi).</li><li>Hilir sanitasi air (keran konsumen) ↔︎ Hilir kecerdasan buatan (pengguna akhir).</li><li>Kontaminan air ↔︎ Residu bias dan racun informasi.</li></ul>\n<p>Penulis mentransfer prinsip logika keberhasilan pengawasan di hulu pada sistem air untuk meyakinkan pembaca bahwa regulasi AI pun harus diletakkan di hulu, bukan di hilir.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah C.</b></p></section>"
  },
  {
    "n": 3,
    "text": "(1) Pemerintah kota berencana mengganti seluruh armada transportasi publik berbahan bakar fosil dengan bus bertenaga listrik mulai kuartal depan guna menekan emisi karbon perkotaan hingga 40%. (2) Kebijakan ini disambut antusias oleh aktivis lingkungan karena dinilai sebagai lompatan progresif menuju kota berkelanjutan. (3) Sebagai langkah awal, sebanyak dua ratus unit bus listrik akan langsung dioperasikan di koridor utama dengan tarif yang disubsidi penuh selama enam bulan pertama. (4) Di sisi lain, dewan transportasi mengingatkan bahwa kesuksesan transisi armada ramah lingkungan ini sangat bergantung pada keandalan infrastruktur pengisian daya cepat (SPKLU) dan kesiapan pasokan listrik daerah. (5) Namun, pemerintah kota tetap bersikukuh bahwa proyek ini dipastikan berjalan lancar tanpa hambatan teknis yang berarti dan akan langsung merevitalisasi ekonomi kawasan urban.\nKelemahan penalaran atau informasi yang terdapat di dalam wacana tersebut ditunjukkan oleh ....",
    "html": "<div class=\"qp\">(1) Pemerintah kota berencana mengganti seluruh armada transportasi publik berbahan bakar fosil dengan bus bertenaga listrik mulai kuartal depan guna menekan emisi karbon perkotaan hingga 40%. (2) Kebijakan ini disambut antusias oleh aktivis lingkungan karena dinilai sebagai lompatan progresif menuju kota berkelanjutan. (3) Sebagai langkah awal, sebanyak dua ratus unit bus listrik akan langsung dioperasikan di koridor utama dengan tarif yang disubsidi penuh selama enam bulan pertama. (4) Di sisi lain, dewan transportasi mengingatkan bahwa kesuksesan transisi armada ramah lingkungan ini sangat bergantung pada keandalan infrastruktur pengisian daya cepat (SPKLU) dan kesiapan pasokan listrik daerah. (5) Namun, pemerintah kota tetap bersikukuh bahwa proyek ini dipastikan berjalan lancar tanpa hambatan teknis yang berarti dan akan langsung merevitalisasi ekonomi kawasan urban.</div><div class=\"qp\">Kelemahan penalaran atau informasi yang terdapat di dalam wacana tersebut ditunjukkan oleh ....</div>",
    "options": [
      "pengabaian peran aktivis lingkungan dalam penyusunan trayek operasional armada transportasi publik",
      "ketiadaan landasan logis atau bukti mitigasi konkret atas klaim optimisme pemerintah terhadap risiko teknis pada kalimat (5)",
      "pertentangan tak logis antara kebijakan subsidi tarif selama enam bulan dengan proyeksi reduksi emisi karbon",
      "ketiadaan data kuantitatif mengenai total unit bus berbahan bakar fosil yang saat ini sedang aktif beroperasi",
      "ketidakpaduan leksikal antara konsep kota berkelanjutan dengan penyediaan sarana transportasi massal"
    ],
    "answer": "B",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: B</b></p>\n<p>Kelemahan teks (<i>information gap</i> / <i>logical weakness</i>) terletak pada <b>kalimat (5)</b>.</p>\n<p>Pada kalimat (4), dewan transportasi telah mengajukan peringatan rasional mengenai faktor penentu keberhasilan, yaitu keandalan infrastruktur SPKLU dan kesiapan pasokan listrik. Namun, kalimat (5) menyajikan respons pemerintah yang bersikukuh optimis bahwa proyek “dipastikan berjalan lancar tanpa hambatan teknis yang berarti” tanpa menyertakan dasar penjelasan, bukti kesiapan infrastruktur, ataupun skema mitigasi teknis untuk menjawab kekhawatiran tersebut. Hal ini menciptakan lompatan logika berupa optimisme tanpa dasar rasional.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah B.</b></p></section>"
  },
  {
    "n": 4,
    "text": "(1) Hutan mangrove memiliki fungsi ekologis yang sangat vital sebagai benteng alami kawasan pesisir. (2) Vegetasi unik ini mampu meredam energi gelombang pasang dan mencegah laju abrasi pantai secara berkelanjutan. (3) Selain itu, ekosistem tersebut menjadi habitat pemijahan yang ideal bagi beraneka ragam biota laut bernilai ekonomis. (4) Oleh karena itu, pelestarian hutan bakau harus diprioritaskan demi melindungi masyarakat pesisir dari ancaman abrasi.\nFrasa ekosistem tersebut pada kalimat (3) merujuk secara anaforis kepada ....",
    "html": "<div class=\"qp\">(1) Hutan mangrove memiliki fungsi ekologis yang sangat vital sebagai benteng alami kawasan pesisir. (2) Vegetasi unik ini mampu meredam energi gelombang pasang dan mencegah laju abrasi pantai secara berkelanjutan. (3) Selain itu, ekosistem tersebut menjadi habitat pemijahan yang ideal bagi beraneka ragam biota laut bernilai ekonomis. (4) Oleh karena itu, pelestarian hutan bakau harus diprioritaskan demi melindungi masyarakat pesisir dari ancaman abrasi.</div><div class=\"qp\">Frasa <i>ekosistem tersebut</i> pada kalimat (3) merujuk secara anaforis kepada ....</div>",
    "options": [
      "benteng alami",
      "gelombang pasang",
      "hutan mangrove",
      "biota laut",
      "kawasan pesisir"
    ],
    "answer": "C",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: C</b></p>\n<p>Rujukan anafora adalah peranti kohesi gramatikal yang merujuk kembali pada konstituen atau entitas yang telah disebutkan sebelumnya dalam wacana.</p>\n<p>Frasa nomina <i>ekosistem tersebut</i> pada kalimat (3) mengacu pada subjek utama yang sedang dibahas pada kalimat (1) dan (2), yaitu <b>hutan mangrove</b> (yang juga diparafrasakan sebagai <i>vegetasi unik ini</i> pada kalimat 2).</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah C.</b></p></section>"
  },
  {
    "n": 5,
    "text": "(1) Kurang tidur kronis pada kalangan remaja telah menjadi krisis kesehatan publik yang sering kali luput dari perhatian orang tua dan pendidik. (2) Studi medis menunjukkan bahwa remaja yang tidur kurang dari tujuh jam per malam mengalami penurunan konsentrasi belajar, pelemahan memori jangka pendek, dan instabilitas emosi di sekolah. (3) Gangguan fungsi kognitif ini secara langsung memicu penurunan performa akademik serta meningkatkan risiko stres berkepanjangan pada pelajar.\nGagasan yang paling logis dan berkesinambungan untuk melanjutkan paragraf di atas adalah ....",
    "html": "<div class=\"qp\">(1) Kurang tidur kronis pada kalangan remaja telah menjadi krisis kesehatan publik yang sering kali luput dari perhatian orang tua dan pendidik. (2) Studi medis menunjukkan bahwa remaja yang tidur kurang dari tujuh jam per malam mengalami penurunan konsentrasi belajar, pelemahan memori jangka pendek, dan instabilitas emosi di sekolah. (3) Gangguan fungsi kognitif ini secara langsung memicu penurunan performa akademik serta meningkatkan risiko stres berkepanjangan pada pelajar.</div><div class=\"qp\">Gagasan yang paling logis dan berkesinambungan untuk melanjutkan paragraf di atas adalah ....</div>",
    "options": [
      "Oleh sebab itu, pihak sekolah dan orang tua perlu bersinergi merancang manajemen jadwal yang menjamin pemenuhan jam istirahat remaja.",
      "Sementara itu, industri farmasi terus memproduksi suplemen tidur yang ditujukan khusus bagi anak-anak usia prasekolah.",
      "Akan tetapi, universitas-universitas terkemuka dunia kini justru menaikkan standar nilai kelulusan akademik mahasiswa.",
      "Akibatnya, sebagian besar orang dewasa memilih beralih mengonsumsi minuman berkafein tinggi setiap pagi.",
      "Di samping itu, suhu pendingin ruangan di kamar tidur terbukti menentukan kecepatan seseorang untuk terlelap."
    ],
    "answer": "A",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: A</b></p>\n<p>Kelanjutan gagasan teks (kontinuitas paragraf) harus memiliki keterikatan logis yang koheren dengan premis penutup paragraf sebelumnya.</p>\n<p>Teks membahas krisis kurang tidur pada remaja beserta dampak negatifnya terhadap akademik dan psikologis pelajar (kalimat 1–3). Langkah lanjutan yang mengalir secara alami pasca-identifikasi masalah dan dampak adalah pemberian simpulan solusi atau rekomendasi tindakan konkret bagi pihak terkait (orang tua dan sekolah) yang telah diidentifikasi pada kalimat (1). Opsi A secara tepat menyediakan kesinambungan tersebut.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah A.</b></p></section>"
  },
  {
    "n": 6,
    "text": "P1 (1) Upaya digitalisasi manuskrip kuno di berbagai daerah di Indonesia menghadapi sejumlah tantangan pelik. (2) Selain keterbatasan anggaran pelestarian, sebagian besar para filolog-filolog daerah belum tersertifikasi dalam teknik preservasi digital. (3) Akibatnya, proses alih media sering kali terhambat atau menghasilkan salinan beresolusi rendah yang rentan mengalami degradasi data.\nP2 (4) Menyikapi persoalan tersebut, konsorsium perpustakaan nasional mulai merintis lokakarya komprehensif bagi kurator naskah tradisional guna menjembatani kesenjangan kompetensi pemindaian. (5) Inisiatif ini tidak hanya mentransfer keterampilan teknis restorasi digital, tetapi juga menyediakan akses infrastruktur modern.\nTeks di atas memiliki ketidakefektifan kalimat akibat redundansi morfologis pada kalimat (2) serta keterkaitan logis tertentu antarkedua paragraf. Perbaikan yang tepat untuk kalimat (2) dan fungsi logis paragraf kedua terhadap paragraf pertama adalah ...",
    "html": "<div class=\"qp\"><b>P1</b> (1) Upaya digitalisasi manuskrip kuno di berbagai daerah di Indonesia menghadapi sejumlah tantangan pelik. (2) Selain keterbatasan anggaran pelestarian, sebagian besar para filolog-filolog daerah belum tersertifikasi dalam teknik preservasi digital. (3) Akibatnya, proses alih media sering kali terhambat atau menghasilkan salinan beresolusi rendah yang rentan mengalami degradasi data.</div><div class=\"qp\"><b>P2</b> (4) Menyikapi persoalan tersebut, konsorsium perpustakaan nasional mulai merintis lokakarya komprehensif bagi kurator naskah tradisional guna menjembatani kesenjangan kompetensi pemindaian. (5) Inisiatif ini tidak hanya mentransfer keterampilan teknis restorasi digital, tetapi juga menyediakan akses infrastruktur modern.</div><div class=\"qp\">Teks di atas memiliki ketidakefektifan kalimat akibat redundansi morfologis pada kalimat (2) serta keterkaitan logis tertentu antarkedua paragraf. Perbaikan yang tepat untuk kalimat (2) dan fungsi logis paragraf kedua terhadap paragraf pertama adalah ...</div>",
    "options": [
      "Menghapus kata para dan mengubah filolog-filolog menjadi filolog; paragraf kedua berfungsi menyajikan solusi atas permasalahan yang dipaparkan pada paragraf pertama.",
      "Menghapus kata sebagian besar dan mempertahankan para filolog-filolog; paragraf kedua berfungsi memperluas data masalah dari paragraf pertama.",
      "Mengganti frasa sebagian besar para dengan seluruh; paragraf kedua berfungsi membantah argumentasi pada paragraf pertama.",
      "Mengubah kata filolog-filolog menjadi para filolog saja; paragraf kedua berfungsi memberikan analogi pembanding bagi paragraf pertama.",
      "Menghapus kata selain dan mempertahankan para filolog-filolog; paragraf kedua berfungsi menyimpulkan inti dari paragraf pertama."
    ],
    "optionsHtml": [
      "Menghapus kata <i>para</i> dan mengubah <i>filolog-filolog</i> menjadi <i>filolog</i>; paragraf kedua berfungsi menyajikan solusi atas permasalahan yang dipaparkan pada paragraf pertama.",
      "Menghapus kata <i>sebagian besar</i> dan mempertahankan <i>para filolog-filolog</i>; paragraf kedua berfungsi memperluas data masalah dari paragraf pertama.",
      "Mengganti frasa <i>sebagian besar para</i> dengan <i>seluruh</i>; paragraf kedua berfungsi membantah argumentasi pada paragraf pertama.",
      "Mengubah kata <i>filolog-filolog</i> menjadi <i>para filolog</i> saja; paragraf kedua berfungsi memberikan analogi pembanding bagi paragraf pertama.",
      "Menghapus kata <i>selain</i> dan mempertahankan <i>para filolog-filolog</i>; paragraf kedua berfungsi menyimpulkan inti dari paragraf pertama."
    ],
    "answer": "A",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: A</b></p>\n<p>Soal meminta dua hal: (1) perbaikan kalimat (2) dan (2) fungsi logis paragraf kedua terhadap paragraf pertama.</p>\n<p><b>1. Perbaikan kalimat (2)</b></p>\n<p>Frasa <i>sebagian besar para filolog-filolog</i> memuat tiga penanda jamak sekaligus: kuantor <i>sebagian besar</i>, kata <i>para</i>, dan reduplikasi <i>filolog-filolog</i>. Satu penanda jamak sudah cukup, sehingga kalimat efektifnya menjadi <i>“…sebagian besar filolog daerah belum tersertifikasi…”</i> (hapus <i>para</i> dan ubah <i>filolog-filolog</i> menjadi <i>filolog</i>).</p>\n<p><b>2. Fungsi logis paragraf kedua</b></p>\n<p>Paragraf pertama (kalimat 1–3) memaparkan masalah: keterbatasan anggaran, filolog yang belum tersertifikasi, dan salinan digital beresolusi rendah. Paragraf kedua dibuka dengan <i>“Menyikapi persoalan tersebut…”</i> lalu memaparkan lokakarya kurator naskah. Artinya, paragraf kedua berfungsi menyajikan <b>solusi</b> atas masalah di paragraf pertama.</p>\n<p><b>Mengapa pilihan lain keliru</b></p>\n<p class=\"ev no\"><b>Pilihan B</b>: redundansi tetap ada (<i>para</i> + reduplikasi), dan paragraf kedua tidak sekadar menambah data masalah.</p>\n<p class=\"ev no\"><b>Pilihan C</b>: mengganti <i>sebagian besar</i> dengan <i>seluruh</i> mengubah makna, dan paragraf kedua tidak membantah paragraf pertama.</p>\n<p class=\"ev no\"><b>Pilihan D</b>: paragraf kedua bukan analogi pembanding; tidak ada perbandingan dua hal dalam teks.</p>\n<p class=\"ev no\"><b>Pilihan E</b>: kata <i>selain</i> justru menjadi penghubung penambahan yang benar, dan paragraf kedua bukan simpulan melainkan langkah penanganan.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah A.</b></p></section>"
  },
  {
    "n": 7,
    "text": "Meskipun menghadapi fluktuasi harga komoditas global yang sangat tajam sepanjang kuartal pertama tahun ini, perusahaan agribisnis terkemuka tersebut berhasil membukukan laba bersih sebesar dua triliun rupiah melalui optimalisasi efisiensi rantai pasok.\nInti dari kalimat majemuk bertingkat di atas adalah ...",
    "html": "<div class=\"qp\">Meskipun menghadapi fluktuasi harga komoditas global yang sangat tajam sepanjang kuartal pertama tahun ini, perusahaan agribisnis terkemuka tersebut berhasil membukukan laba bersih sebesar dua triliun rupiah melalui optimalisasi efisiensi rantai pasok.</div><div class=\"qp\">Inti dari kalimat majemuk bertingkat di atas adalah ...</div>",
    "options": [
      "Perusahaan agribisnis menghadapi fluktuasi harga komoditas.",
      "Fluktuasi harga komoditas membukukan laba bersih.",
      "Perusahaan agribisnis membukukan laba bersih.",
      "Optimalisasi efisiensi rantai pasok menekan fluktuasi harga.",
      "Laba bersih dua triliun rupiah mengoptimalkan efisiensi rantai pasok."
    ],
    "answer": "C",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: C</b></p>\n<p>Kalimat majemuk bertingkat terdiri atas induk kalimat dan anak kalimat. Inti kalimat dicari pada <b>induk kalimat</b>, yaitu pola Subjek–Predikat–Objek tanpa keterangan.</p>\n<ul><li><b>Anak kalimat</b> (konsesif, diawali <i>meskipun</i>): <i>Meskipun menghadapi fluktuasi harga komoditas global yang sangat tajam sepanjang kuartal pertama tahun ini.</i></li><li><b>Induk kalimat</b>: <i>perusahaan agribisnis terkemuka tersebut berhasil membukukan laba bersih sebesar dua triliun rupiah melalui optimalisasi efisiensi rantai pasok.</i></li></ul>\n<p>Dari induk kalimat, unsur intinya adalah <b>perusahaan agribisnis</b> (S) — <b>membukukan</b> (P) — <b>laba bersih</b> (O). Kata <i>berhasil</i>, <i>terkemuka tersebut</i>, <i>sebesar dua triliun rupiah</i>, dan <i>melalui optimalisasi…</i> hanya unsur penjelas/keterangan.</p>\n<p>Opsi A diambil dari anak kalimat, bukan induk. Opsi B salah karena fluktuasi harga tidak dapat menjadi pelaku “membukukan”. Opsi D dan E mengubah hubungan antarunsur sehingga menyimpang dari makna kalimat asli.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah C.</b></p></section>"
  },
  {
    "n": 8,
    "text": "Penerapan teknologi penangkapan karbon dalam skala industri masih terbentur oleh biaya modal yang membengkak serta ketiadaan kerangka regulasi insentif fiskal yang definitif. Kondisi ketidakpastian ini menciptakan ruang abu-abu bagi para investor energi baru terbarukan dalam menentukan kalkulasi kelayakan proyek jangka panjang.\nMakna kontekstual dari frasa ruang abu-abu pada teks di atas adalah ...",
    "html": "<div class=\"qp\">Penerapan teknologi penangkapan karbon dalam skala industri masih terbentur oleh biaya modal yang membengkak serta ketiadaan kerangka regulasi insentif fiskal yang definitif. Kondisi ketidakpastian ini menciptakan <b>ruang abu-abu</b> bagi para investor energi baru terbarukan dalam menentukan kalkulasi kelayakan proyek jangka panjang.</div><div class=\"qp\">Makna kontekstual dari frasa <b>ruang abu-abu</b> pada teks di atas adalah ...</div>",
    "options": [
      "kawasan operasional industri yang menimbulkan pencemaran udara",
      "lingkungan investasi yang dipenuhi kerugian finansial",
      "situasi ketidakjelasan aturan hukum atau pedoman bertindak",
      "wilayah terpencil yang belum tersentuh infrastruktur energi",
      "kondisi pasar yang didominasi transaksi ilegal tersembunyi"
    ],
    "answer": "C",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: C</b></p>\n<p><i>Ruang abu-abu</i> adalah ungkapan kiasan (makna konotatif). Warna abu-abu berada di antara hitam dan putih, sehingga melambangkan kondisi yang tidak jelas, tidak tegas, dan tidak ada kepastian aturan.</p>\n<p>Petunjuk konteks ada pada kalimat sebelumnya: <i>“ketiadaan kerangka regulasi insentif fiskal yang definitif”</i> dan <i>“Kondisi ketidakpastian ini”</i>. Karena regulasi belum pasti, investor sulit menghitung kelayakan proyek. Jadi, <i>ruang abu-abu</i> bermakna <b>situasi ketidakjelasan aturan hukum atau pedoman bertindak</b>.</p>\n<p><b>Mengapa pilihan lain keliru</b></p>\n<p class=\"ev no\"><b>Pilihan A dan D</b>: menafsirkan <i>ruang</i> secara harfiah sebagai kawasan/wilayah, padahal frasa ini bermakna kiasan.</p>\n<p class=\"ev no\"><b>Pilihan B</b>: teks menyebut biaya modal membengkak, tetapi tidak menyebut investor mengalami kerugian; <i>ruang abu-abu</i> merujuk ketidakpastian, bukan kerugian.</p>\n<p class=\"ev no\"><b>Pilihan E</b>: teks tidak membahas transaksi ilegal; hanya ada ketiadaan aturan yang pasti.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah C.</b></p></section>"
  },
  {
    "n": 9,
    "text": "Penggunaan kecerdasan buatan generatif dalam penulisan karya ilmiah akademik konon digadang-gadang dapat memangkas durasi riset secara revolusioner. Akan tetapi, klaim tersebut tampaknya terlampau melebih-lebihkan realitas jika menilik tingginya frekuensi fabrikasi referensi yang kerap dimunculkan algoritma. Tanpa adanya verifikasi ketat dari periset manusia, integrasi instan ini justru berpotensi merusak integritas keilmuan alih-alih meningkatkan mutu keilmuan.\nMelalui pencermatan penanda modalitas epistemik seperti konon, tampaknya, dan berpotensi, nada (tone) penulis terhadap efektivitas kecerdasan buatan generatif dalam wacana tersebut dapat dikategorikan sebagai ...",
    "html": "<div class=\"qp\">Penggunaan kecerdasan buatan generatif dalam penulisan karya ilmiah akademik konon digadang-gadang dapat memangkas durasi riset secara revolusioner. Akan tetapi, klaim tersebut tampaknya terlampau melebih-lebihkan realitas jika menilik tingginya frekuensi fabrikasi referensi yang kerap dimunculkan algoritma. Tanpa adanya verifikasi ketat dari periset manusia, integrasi instan ini justru berpotensi merusak integritas keilmuan alih-alih meningkatkan mutu keilmuan.</div><div class=\"qp\">Melalui pencermatan penanda modalitas epistemik seperti <i>konon</i>, <i>tampaknya</i>, dan <i>berpotensi</i>, nada (<i>tone</i>) penulis terhadap efektivitas kecerdasan buatan generatif dalam wacana tersebut dapat dikategorikan sebagai ...</div>",
    "options": [
      "optimistis dan apresiatif",
      "skeptis dan kritis",
      "sarkastis dan sinis",
      "objektif dan pasrah",
      "ambivalen dan acuh"
    ],
    "answer": "B",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: B</b></p>\n<p>Modalitas epistemik menunjukkan tingkat keyakinan atau jarak penulis terhadap suatu klaim. Penanda dalam teks:</p>\n<ul><li><i>konon digadang-gadang</i>: penulis menjaga jarak dari klaim yang hanya “katanya”, bukan fakta yang ia yakini.</li><li><i>tampaknya terlampau melebih-lebihkan</i>: penulis menilai klaim tersebut berlebihan.</li><li><i>berpotensi merusak integritas keilmuan</i>: penulis mengingatkan risiko jika tidak ada verifikasi.</li></ul>\n<p>Ditambah konjungsi pertentangan <i>Akan tetapi</i> dan argumen berupa fakta fabrikasi referensi, sikap penulis adalah meragukan klaim sekaligus menilainya dengan alasan, yaitu <b>skeptis dan kritis</b>.</p>\n<p><b>Mengapa pilihan lain keliru</b></p>\n<p class=\"ev no\"><b>Pilihan A</b>: penulis tidak memuji; ia justru meragukan klaim manfaat.</p>\n<p class=\"ev no\"><b>Pilihan C</b>: tidak ada ejekan atau sindiran; bahasanya tetap akademis dan berargumen.</p>\n<p class=\"ev no\"><b>Pilihan D</b>: penulis tidak pasrah; ia menuntut verifikasi ketat dari periset manusia.</p>\n<p class=\"ev no\"><b>Pilihan E</b>: penulis memiliki sikap yang jelas, tidak acuh dan tidak bimbang.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah B.</b></p></section>"
  },
  {
    "n": 10,
    "text": "Setelah upaya mediasi secara kekeluargaan tidak membuahkan hasil, pihak penggugat akhirnya memutuskan untuk [...] demi menuntut keadilan atas perampasan aset warisan.\nPasangan kata (kolokasi) yang paling lazim dan baku untuk mengisi bagian rumpang pada kalimat di atas adalah ...",
    "html": "<div class=\"qp\">Setelah upaya mediasi secara kekeluargaan tidak membuahkan hasil, pihak penggugat akhirnya memutuskan untuk [...] demi menuntut keadilan atas perampasan aset warisan.</div><div class=\"qp\">Pasangan kata (kolokasi) yang paling lazim dan baku untuk mengisi bagian rumpang pada kalimat di atas adalah ...</div>",
    "options": [
      "mengambil langkah hukum",
      "menempuh jalur hukum",
      "meniti jalan hukum",
      "menapaki proses hukum",
      "mengarungi kaidah hukum"
    ],
    "answer": "B",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: B</b></p>\n<p>Kolokasi adalah pasangan kata yang lazim digunakan bersama. Dalam konteks seseorang membawa sengketa ke ranah peradilan setelah mediasi gagal, kolokasi yang paling mapan adalah <b>menempuh jalur hukum</b>. Kata <i>menempuh</i> lazim berpasangan dengan <i>jalur</i>, <i>jalan</i>, atau <i>upaya</i> (menempuh jalur hukum, menempuh upaya hukum).</p>\n<p><b>Mengapa pilihan lain kurang tepat</b></p>\n<p class=\"ev no\"><b>Pilihan A</b>: <i>mengambil langkah hukum</i> juga dikenal dan tidak salah secara makna, tetapi <i>menempuh jalur hukum</i> adalah ungkapan yang paling baku dan paling sering dipakai untuk konteks sengketa seperti ini.</p>\n<p class=\"ev no\"><b>Pilihan C</b>: <i>meniti</i> lazim untuk jembatan, titian, atau karier; <i>meniti jalan hukum</i> bernuansa kiasan dan kurang lazim.</p>\n<p class=\"ev no\"><b>Pilihan D</b>: <i>menapaki</i> berpasangan dengan jalan, jejak, atau tangga karier; untuk hukum, kolokasi yang benar adalah <i>menjalani proses hukum</i>.</p>\n<p class=\"ev no\"><b>Pilihan E</b>: <i>mengarungi</i> berpasangan dengan laut atau kehidupan; <i>kaidah hukum</i> ditaati atau dilanggar, bukan diarungi.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah B.</b></p></section>"
  },
  {
    "n": 11,
    "text": "Perhatikan data bahasa buatan (artifisial) berikut!\n1. fenik akrem talis → Seorang pemuda sedang membangun desa.\n2. feniko ikrem talis → Para pemuda telah membangun desa.\n3. guru asim taliso → Seorang guru sedang mengunjungi desa-desa.\nBerdasarkan pola pembentukan kalimat pada bahasa artifisial di atas, bagaimanakah cara mengatakan “Para guru telah mengunjungi desa”?",
    "html": "<div class=\"qp\">Perhatikan data bahasa buatan (artifisial) berikut!</div><div class=\"qp\">1. <i>fenik akrem talis</i> → Seorang pemuda sedang membangun desa.</div><div class=\"qp\">2. <i>feniko ikrem talis</i> → Para pemuda telah membangun desa.</div><div class=\"qp\">3. <i>guru asim taliso</i> → Seorang guru sedang mengunjungi desa-desa.</div><div class=\"qp\">Berdasarkan pola pembentukan kalimat pada bahasa artifisial di atas, bagaimanakah cara mengatakan <b>“Para guru telah mengunjungi desa”</b>?</div>",
    "options": [
      "guruo isim talis",
      "guruo asim taliso",
      "guru isim taliso",
      "guruo ikrem talis",
      "guru isim talis"
    ],
    "optionsHtml": [
      "<i>guruo isim talis</i>",
      "<i>guruo asim taliso</i>",
      "<i>guru isim taliso</i>",
      "<i>guruo ikrem talis</i>",
      "<i>guru isim talis</i>"
    ],
    "answer": "A",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: A</b></p>\n<p>Pola kalimat: Subjek – Predikat – Objek. Uraikan data tiap unsur:</p>\n<p><b>1. Nomina (jamak ditandai sufiks -o)</b></p>\n<ul><li><i>fenik</i> = seorang pemuda; <i>feniko</i> = para pemuda.</li><li><i>talis</i> = desa; <i>taliso</i> = desa-desa.</li><li>Maka <i>guru</i> = seorang guru, dan para guru = <b>guruo</b>.</li></ul>\n<p><b>2. Verba dan aspek (ditandai vokal awal)</b></p>\n<ul><li><i>akrem</i> = sedang membangun; <i>ikrem</i> = telah membangun. Vokal awal <i>a-</i> menandai aspek progresif (sedang), vokal awal <i>i-</i> menandai aspek perfektif (telah).</li><li><i>asim</i> = sedang mengunjungi, sehingga telah mengunjungi = <b>isim</b>.</li></ul>\n<p><b>3. Penyusunan kalimat</b></p>\n<p>Para guru = <i>guruo</i>; telah mengunjungi = <i>isim</i>; desa (tunggal) = <i>talis</i>. Jadi kalimatnya adalah <b>guruo isim talis</b>.</p>\n<p><b>Mengapa pilihan lain keliru</b></p>\n<p class=\"ev no\"><b>Pilihan B</b>: <i>guruo asim taliso</i> = para guru sedang mengunjungi desa-desa (aspek dan objek salah).</p>\n<p class=\"ev no\"><b>Pilihan C</b>: <i>guru isim taliso</i> = seorang guru telah mengunjungi desa-desa (subjek tunggal dan objek jamak).</p>\n<p class=\"ev no\"><b>Pilihan D</b>: <i>guruo ikrem talis</i> = para guru telah membangun desa (verba salah).</p>\n<p class=\"ev no\"><b>Pilihan E</b>: <i>guru isim talis</i> = seorang guru telah mengunjungi desa (subjek tidak jamak).</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah A.</b></p></section>"
  },
  {
    "n": 12,
    "text": "(1) Otak manusia sering disamakan dengan komputer: unit pemroses sentral mengolah informasi, memori menyimpan data, dan sistem saraf bertindak sebagai kabel sirkuit. (2) Namun, para pakar neurosains kognitif menegaskan bahwa perbandingan ini cacat logika karena sirkuit otak bersifat plastis dan hidup—tiap kali ada rangsangan baru, arsitektur fisik jaringan saraf akan secara dinamis menyusun ulang dirinya sendiri, sesuatu yang mustahil terjadi pada cip silikon yang rigid. (3) Berdasarkan hasil riset klinis Dr. Elena Rostova dan konsensus Masyarakat Neurosains Internasional, plastisitas sinaptik ini hanya dapat dioptimalkan jika individu terpapar masalah kognitif yang bervariasi, bukan melalui pengulangan algoritmis mekanis. (4) Dengan demikian, kurikulum pelatihan kecerdasan manusia tidak boleh mengadopsi model pemutakhiran peranti lunak (software update) komputer, melainkan harus diperlakukan layaknya ekosistem biologis yang memerlukan keragaman stimulus alami.\nBerdasarkan struktur teks di atas, bagaimana penulis membangun dan memvalidasi argumennya untuk menolak model pelatihan kecerdasan mekanis?",
    "html": "<div class=\"qp\">(1) Otak manusia sering disamakan dengan komputer: unit pemroses sentral mengolah informasi, memori menyimpan data, dan sistem saraf bertindak sebagai kabel sirkuit. (2) Namun, para pakar neurosains kognitif menegaskan bahwa perbandingan ini cacat logika karena sirkuit otak bersifat plastis dan hidup—tiap kali ada rangsangan baru, arsitektur fisik jaringan saraf akan secara dinamis menyusun ulang dirinya sendiri, sesuatu yang mustahil terjadi pada cip silikon yang rigid. (3) Berdasarkan hasil riset klinis Dr. Elena Rostova dan konsensus Masyarakat Neurosains Internasional, plastisitas sinaptik ini hanya dapat dioptimalkan jika individu terpapar masalah kognitif yang bervariasi, bukan melalui pengulangan algoritmis mekanis. (4) Dengan demikian, kurikulum pelatihan kecerdasan manusia tidak boleh mengadopsi model pemutakhiran peranti lunak (<i>software update</i>) komputer, melainkan harus diperlakukan layaknya ekosistem biologis yang memerlukan keragaman stimulus alami.</div><div class=\"qp\">Berdasarkan struktur teks di atas, bagaimana penulis membangun dan memvalidasi argumennya untuk menolak model pelatihan kecerdasan mekanis?</div>",
    "options": [
      "Menerapkan penalaran berbasis otoritas ilmiah untuk membongkar analogi komputer yang keliru, lalu mengajukan analogi alternatif berupa ekosistem biologis.",
      "Menyusun silogisme deduktif murni dari definisi teknis cip silikon tanpa mempertimbangkan bukti observasi empiris.",
      "Menggunakan generalisasi induktif berbasis satu laporan kasus Dr. Elena Rostova untuk menggugurkan prinsip ilmu informatika.",
      "Menggunakan pendekatan falasi ad populum dengan mengklaim bahwa semua pakar menolak penggunaan teknologi komputer di sekolah.",
      "Menyajikan penalaran abduktif untuk menduga kerusakan sistem saraf akibat kesalahan pemutakhiran peranti lunak."
    ],
    "optionsHtml": [
      "Menerapkan penalaran berbasis otoritas ilmiah untuk membongkar analogi komputer yang keliru, lalu mengajukan analogi alternatif berupa ekosistem biologis.",
      "Menyusun silogisme deduktif murni dari definisi teknis cip silikon tanpa mempertimbangkan bukti observasi empiris.",
      "Menggunakan generalisasi induktif berbasis satu laporan kasus Dr. Elena Rostova untuk menggugurkan prinsip ilmu informatika.",
      "Menggunakan pendekatan falasi <i>ad populum</i> dengan mengklaim bahwa semua pakar menolak penggunaan teknologi komputer di sekolah.",
      "Menyajikan penalaran abduktif untuk menduga kerusakan sistem saraf akibat kesalahan pemutakhiran peranti lunak."
    ],
    "answer": "A",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: A</b></p>\n<p>Struktur argumen teks:</p>\n<ul><li>Kalimat (1): memaparkan analogi yang akan ditolak (otak = komputer).</li><li>Kalimat (2): membongkar analogi dengan pernyataan pakar neurosains kognitif, bahwa otak bersifat plastis sedangkan cip silikon rigid, sehingga analogi cacat.</li><li>Kalimat (3): memvalidasi dengan otoritas ilmiah yang relevan, yakni riset klinis Dr. Elena Rostova dan konsensus Masyarakat Neurosains Internasional.</li><li>Kalimat (4): menyimpulkan dan mengajukan analogi alternatif, yaitu pelatihan kecerdasan manusia harus diperlakukan layaknya ekosistem biologis.</li></ul>\n<p>Jadi penulis memakai <b>penalaran berbasis otoritas ilmiah</b> untuk membongkar analogi yang keliru, lalu menawarkan <b>analogi alternatif</b> (ekosistem biologis).</p>\n<p><b>Mengapa pilihan lain keliru</b></p>\n<p class=\"ev no\"><b>Pilihan B</b>: teks tidak berangkat dari definisi teknis dengan silogisme murni; penulis justru memakai bukti riset dan pendapat pakar.</p>\n<p class=\"ev no\"><b>Pilihan C</b>: rujukannya bukan satu laporan kasus, melainkan riset klinis dan konsensus organisasi; teks juga tidak menggugurkan prinsip ilmu informatika.</p>\n<p class=\"ev no\"><b>Pilihan D</b>: teks tidak mengklaim bahwa semua pakar menolak teknologi komputer di sekolah.</p>\n<p class=\"ev no\"><b>Pilihan E</b>: teks tidak menduga adanya kerusakan sistem saraf; tidak ada penalaran abduktif.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah A.</b></p></section>"
  },
  {
    "n": 13,
    "text": "(1) Pemerintah kota berencana menerapkan larangan total penggunaan kendaraan bermotor pribadi di kawasan sentra niaga mulai awal tahun depan. (2) Kebijakan drastis ini diambil guna memangkas emisi karbon harian serta mengurai kemacetan kronis yang telah menurunkan produktivitas warga. (3) Seluruh ruas jalan di kawasan tersebut nantinya dialihfungsikan khusus untuk koridor pejalan kaki, pesepeda, dan armada transportasi massal bertenaga listrik. (4) Pemerintah kota meyakini bahwa langkah penutupan akses kendaraan pribadi ini akan langsung mendongkrak perputaran ekonomi dan omzet para pemilik toko ritel setempat. (5) Oleh karena itu, sanksi administratif dan denda maksimal akan diberlakukan secara tegas bagi pengendara pribadi yang melanggar batas zonasi tersebut.\nKelemahan penalaran atau celah informasi (information gap) yang terdapat dalam wacana di atas adalah ....",
    "html": "<div class=\"qp\">(1) Pemerintah kota berencana menerapkan larangan total penggunaan kendaraan bermotor pribadi di kawasan sentra niaga mulai awal tahun depan. (2) Kebijakan drastis ini diambil guna memangkas emisi karbon harian serta mengurai kemacetan kronis yang telah menurunkan produktivitas warga. (3) Seluruh ruas jalan di kawasan tersebut nantinya dialihfungsikan khusus untuk koridor pejalan kaki, pesepeda, dan armada transportasi massal bertenaga listrik. (4) Pemerintah kota meyakini bahwa langkah penutupan akses kendaraan pribadi ini akan langsung mendongkrak perputaran ekonomi dan omzet para pemilik toko ritel setempat. (5) Oleh karena itu, sanksi administratif dan denda maksimal akan diberlakukan secara tegas bagi pengendara pribadi yang melanggar batas zonasi tersebut.</div><div class=\"qp\">Kelemahan penalaran atau celah informasi (<i>information gap</i>) yang terdapat dalam wacana di atas adalah ....</div>",
    "options": [
      "penulis tidak memaparkan persentase kontribusi armada bus listrik terhadap pengurangan emisi kota secara menyeluruh",
      "ketiadaan penjelasan rasional mengenai mekanisme bagaimana penutupan akses kendaraan pribadi dapat langsung melipatgandakan omzet pelaku ritel",
      "penulis mengabaikan fakta hukum bahwa sanksi denda administratif tidak memiliki payung hukum yang sah di tingkat daerah",
      "tidak dimasukkannya rincian harga sewa sepeda publik yang akan disediakan di sepanjang koridor sentra niaga",
      "ketiadaan data mengenai jumlah pejalan kaki yang melintasi kawasan tersebut sebelum diterapkannya kebijakan pembatasan"
    ],
    "answer": "B",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: B</b></p>\n<p>Celah informasi terletak pada <b>kalimat (4)</b>. Pemerintah kota meyakini bahwa penutupan akses kendaraan pribadi <i>“akan langsung mendongkrak perputaran ekonomi dan omzet”</i> pemilik toko ritel. Klaim ini disampaikan tanpa data, bukti, maupun penjelasan mekanisme: bagaimana hilangnya akses kendaraan pribadi dapat langsung menaikkan omzet toko? Tidak ada rantai sebab-akibat yang menghubungkan keduanya, sehingga terjadi lompatan logika (<i>unsupported claim</i>).</p>\n<p><b>Mengapa pilihan lain keliru</b></p>\n<p class=\"ev no\"><b>Pilihan A</b>: persentase kontribusi bus listrik tidak menjadi dasar klaim apa pun dalam teks.</p>\n<p class=\"ev no\"><b>Pilihan C</b>: payung hukum denda adalah pengetahuan di luar teks, bukan celah logika yang tampak dari wacana.</p>\n<p class=\"ev no\"><b>Pilihan D</b>: harga sewa sepeda publik tidak berkaitan dengan klaim-klaim utama wacana.</p>\n<p class=\"ev no\"><b>Pilihan E</b>: data jumlah pejalan kaki sebelum kebijakan bukan penopang klaim yang paling bermasalah; celah paling mendasar ada pada klaim dampak ekonomi.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah B.</b></p></section>"
  },
  {
    "n": 14,
    "text": "(1) Meski kerap diabaikan, hal ini sejatinya merupakan tonggak kemajuan peradaban modern: kecakapan suatu masyarakat dalam mengarsip dan merawat pengetahuan secara sistematis. (2) Tradisi pencatatan tersebut telah terbukti menyelamatkan berbagai manuskrip kedokteran kuno saat kota-kota tua dilanda kehancuran perang. (3) Tanpa dokumen-dokumen tersebut, generasi penerus niscaya akan kehilangan pijakan sains dan terpaksa memulai pencarian ilmiah dari awal kembali. (4) Oleh sebab itu, preservasi literatur bukan sekadar tindakan administratif, melainkan strategi menjaga ketahanan intelektual bangsa.\nBerdasarkan wacana di atas, fungsi hubungan penunjukan (kohesi gramatikal) pada frasa hal ini di kalimat (1) dan dokumen-dokumen tersebut di kalimat (3) berturut-turut adalah ....",
    "html": "<div class=\"qp\">(1) Meski kerap diabaikan, <b>hal ini</b> sejatinya merupakan tonggak kemajuan peradaban modern: kecakapan suatu masyarakat dalam mengarsip dan merawat pengetahuan secara sistematis. (2) Tradisi pencatatan tersebut telah terbukti menyelamatkan berbagai manuskrip kedokteran kuno saat kota-kota tua dilanda kehancuran perang. (3) Tanpa <b>dokumen-dokumen tersebut</b>, generasi penerus niscaya akan kehilangan pijakan sains dan terpaksa memulai pencarian ilmiah dari awal kembali. (4) Oleh sebab itu, preservasi literatur bukan sekadar tindakan administratif, melainkan strategi menjaga ketahanan intelektual bangsa.</div><div class=\"qp\">Berdasarkan wacana di atas, fungsi hubungan penunjukan (kohesi gramatikal) pada frasa <b>hal ini</b> di kalimat (1) dan <b>dokumen-dokumen tersebut</b> di kalimat (3) berturut-turut adalah ....</div>",
    "options": [
      "katafora yang menunjuk ke depan pada klausul kecakapan mengarsip; anafora yang menunjuk ke belakang pada manuskrip kedokteran kuno",
      "anafora yang menunjuk ke belakang pada tradisi masa lalu; katafora yang menunjuk ke depan pada pencarian ilmiah",
      "deiksis persona yang menunjuk penulis wacana; deiksis tempat yang menunjuk perpustakaan kota-kota tua",
      "katafora yang menunjuk ke depan pada kehancuran perang; anafora yang menunjuk ke belakang pada tonggak kemajuan",
      "anafora yang menunjuk ke belakang pada peradaban modern; anafora yang menunjuk ke belakang pada preservasi literatur"
    ],
    "answer": "A",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: A</b></p>\n<p>Penunjukan (referensi) gramatikal dibedakan menjadi <b>anafora</b> (acuan sudah disebut sebelumnya, menunjuk ke belakang) dan <b>katafora</b> (acuan disebut sesudahnya, menunjuk ke depan).</p>\n<ul><li><b>hal ini (kalimat 1)</b>: kalimat (1) adalah kalimat pertama, sehingga tidak ada acuan sebelumnya. Acuannya muncul sesudah tanda titik dua, yaitu <i>“kecakapan suatu masyarakat dalam mengarsip dan merawat pengetahuan secara sistematis”</i>. Jadi ini <b>katafora</b>.</li><li><b>dokumen-dokumen tersebut (kalimat 3)</b>: acuannya sudah disebut pada kalimat (2), yaitu hasil tradisi pencatatan berupa <i>manuskrip kedokteran kuno</i>. Jadi ini <b>anafora</b>.</li></ul>\n<p><b>Mengapa pilihan lain keliru</b></p>\n<p class=\"ev no\"><b>Pilihan B</b>: urutannya terbalik; <i>hal ini</i> bukan anafora karena tidak ada acuan sebelumnya.</p>\n<p class=\"ev no\"><b>Pilihan C</b>: kedua frasa adalah penunjuk (demonstratif), bukan deiksis persona atau tempat yang merujuk penulis atau perpustakaan.</p>\n<p class=\"ev no\"><b>Pilihan D</b>: <i>hal ini</i> tidak menunjuk ke <i>kehancuran perang</i>, dan <i>dokumen-dokumen tersebut</i> bukan menunjuk ke <i>tonggak kemajuan</i>.</p>\n<p class=\"ev no\"><b>Pilihan E</b>: <i>hal ini</i> tidak mungkin anafora karena berada di kalimat pertama.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah A.</b></p></section>"
  },
  {
    "n": 15,
    "text": "(1) Beberapa tahun belakangan, tren penggunaan gawai pada anak usia dini di perkotaan kian mengkhawatirkan. (2) Riset terbaru lembaga pemerhati anak mencatat bahwa lebih dari 65% anak di bawah usia lima tahun telah menatap layar gawai rata-rata lebih dari tiga jam sehari. (3) Durasi pemakaian yang berlebihan ini terbukti memicu peningkatan kasus keterlambatan bicara (speech delay) dan kesulitan konsentrasi pada anak. (4) Menanggapi persoalan tersebut, para dokter spesialis anak menyerukan pentingnya panduan detoksifikasi digital dalam lingkungan keluarga.\nHal yang paling mungkin melatarbelakangi penulisan wacana tersebut adalah ....",
    "html": "<div class=\"qp\">(1) Beberapa tahun belakangan, tren penggunaan gawai pada anak usia dini di perkotaan kian mengkhawatirkan. (2) Riset terbaru lembaga pemerhati anak mencatat bahwa lebih dari 65% anak di bawah usia lima tahun telah menatap layar gawai rata-rata lebih dari tiga jam sehari. (3) Durasi pemakaian yang berlebihan ini terbukti memicu peningkatan kasus keterlambatan bicara (<i>speech delay</i>) dan kesulitan konsentrasi pada anak. (4) Menanggapi persoalan tersebut, para dokter spesialis anak menyerukan pentingnya panduan detoksifikasi digital dalam lingkungan keluarga.</div><div class=\"qp\">Hal yang paling mungkin melatarbelakangi penulisan wacana tersebut adalah ....</div>",
    "options": [
      "keprihatinan terhadap meningkatnya gangguan perkembangan anak akibat paparan gawai yang berlebih",
      "keberhasilan program detoksifikasi digital yang dipelopori oleh rumah sakit di kawasan perkotaan",
      "kelangkaan gawai khusus anak dengan fitur pembatasan durasi layar otomatis di pasaran",
      "penolakan para orang tua terhadap diagnosis keterlambatan bicara yang diberikan oleh dokter",
      "persaingan komersial antara pengembang aplikasi edukasi balita dan produsen mainan konvensional"
    ],
    "answer": "A",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: A</b></p>\n<p>Latar belakang penulisan adalah masalah atau keadaan yang mendorong penulis menulis wacana. Alur teks:</p>\n<ul><li>Kalimat (1): tren penggunaan gawai pada anak usia dini <i>kian mengkhawatirkan</i>.</li><li>Kalimat (2): data bahwa lebih dari 65% anak balita menatap layar lebih dari tiga jam sehari.</li><li>Kalimat (3): dampaknya, yaitu keterlambatan bicara dan kesulitan konsentrasi.</li><li>Kalimat (4): seruan dokter untuk detoksifikasi digital.</li></ul>\n<p>Semuanya bertumpu pada kekhawatiran terhadap gangguan perkembangan anak akibat paparan gawai berlebih, sehingga latar belakang penulisan adalah <b>keprihatinan</b> tersebut.</p>\n<p><b>Mengapa pilihan lain keliru</b></p>\n<p class=\"ev no\"><b>Pilihan B</b>: detoksifikasi digital baru diserukan, belum ada program yang dinyatakan berhasil.</p>\n<p class=\"ev no\"><b>Pilihan C dan E</b>: kelangkaan gawai khusus anak dan persaingan komersial tidak dibahas dalam teks.</p>\n<p class=\"ev no\"><b>Pilihan D</b>: tidak ada informasi tentang orang tua yang menolak diagnosis dokter.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah A.</b></p></section>"
  },
  {
    "n": 16,
    "text": "(1) Pemerintah daerah menggelar lokakarya penanganan sampah plastik di kawasan pesisir. (2) Berbagai daftar nama-nama peserta telah diverifikasi oleh panitia sebelum acara pembukaan dimulai. (3) Peserta lokakarya diharapkan mampu merumuskan kebijakan yang solutif serta aplikatif. (4) Dengan demikian, pencemaran lingkungan pesisir dapat diminimalkan secara bertahap.\nFrasa bercetak tebal pada kalimat (2) tidak efektif karena mengalami pemborosan kata (pleonasme). Perbaikan yang paling tepat agar kalimat tersebut menjadi efektif adalah ....",
    "html": "<div class=\"qp\">(1) Pemerintah daerah menggelar lokakarya penanganan sampah plastik di kawasan pesisir. (2) Berbagai <b>daftar nama-nama peserta</b> telah diverifikasi oleh panitia sebelum acara pembukaan dimulai. (3) Peserta lokakarya diharapkan mampu merumuskan kebijakan yang solutif serta aplikatif. (4) Dengan demikian, pencemaran lingkungan pesisir dapat diminimalkan secara bertahap.</div><div class=\"qp\">Frasa bercetak tebal pada kalimat (2) tidak efektif karena mengalami pemborosan kata (pleonasme). Perbaikan yang paling tepat agar kalimat tersebut menjadi efektif adalah ....</div>",
    "options": [
      "daftar-daftar nama peserta",
      "berbagai nama para peserta",
      "daftar nama peserta",
      "berbagai daftar nama peserta",
      "sekumpulan nama para peserta"
    ],
    "answer": "C",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: C</b></p>\n<p>Kalimat asli: “Berbagai <b>daftar nama-nama peserta</b> telah diverifikasi…”. Ada dua sumber pemborosan:</p>\n<ul><li><i>daftar</i> sudah bermakna kumpulan nama, sehingga <i>nama-nama</i> (bentuk jamak) berlebihan. Cukup <i>daftar nama</i>.</li><li>Kata <i>berbagai</i> sudah ada di depan frasa bercetak tebal dan sudah menyatakan jamak. Pengganti tidak boleh memuat penanda jamak atau kata <i>berbagai</i> lagi.</li></ul>\n<p>Hasilnya: “Berbagai <b>daftar nama peserta</b> telah diverifikasi oleh panitia…” (opsi C).</p>\n<p><b>Mengapa pilihan lain keliru</b></p>\n<p class=\"ev no\"><b>Pilihan A</b>: <i>daftar-daftar</i> menambah penanda jamak ganda setelah <i>berbagai</i>.</p>\n<p class=\"ev no\"><b>Pilihan B dan D</b>: mengulang <i>berbagai</i> sehingga menjadi “Berbagai berbagai …”.</p>\n<p class=\"ev no\"><b>Pilihan E</b>: <i>sekumpulan</i> dan <i>para</i> tumpang tindih, serta <i>berbagai sekumpulan</i> tidak logis.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah C.</b></p></section>"
  },
  {
    "n": 17,
    "text": "Meskipun menghadapi ketidakpastian ekonomi global yang terus berfluktuasi sejak awal dekade, perusahaan teknologi multinasional yang berpusat di Tokyo tersebut akhirnya meluncurkan lini produk kecerdasan buatan terbarunya pada kuartal ketiga tahun ini demi merebut pangsa pasar Asia Tenggara.\nInti dari kalimat majemuk di atas adalah ....",
    "html": "<div class=\"qp\">Meskipun menghadapi ketidakpastian ekonomi global yang terus berfluktuasi sejak awal dekade, perusahaan teknologi multinasional yang berpusat di Tokyo tersebut akhirnya meluncurkan lini produk kecerdasan buatan terbarunya pada kuartal ketiga tahun ini demi merebut pangsa pasar Asia Tenggara.</div><div class=\"qp\">Inti dari kalimat majemuk di atas adalah ....</div>",
    "options": [
      "Perusahaan teknologi meluncurkan produk.",
      "Perusahaan menghadapi ketidakpastian ekonomi.",
      "Perusahaan teknologi berpusat di Tokyo.",
      "Produk kecerdasan buatan merebut pangsa pasar.",
      "Peluncuran produk memperluas pasar Asia Tenggara."
    ],
    "answer": "A",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: A</b></p>\n<p>Kalimat ini majemuk bertingkat. Inti kalimat ada pada induk kalimat.</p>\n<ul><li><b>Anak kalimat</b> (konsesif): <i>Meskipun menghadapi ketidakpastian ekonomi global yang terus berfluktuasi sejak awal dekade.</i></li><li><b>Induk kalimat</b>: <i>perusahaan teknologi multinasional yang berpusat di Tokyo tersebut akhirnya meluncurkan lini produk kecerdasan buatan terbarunya pada kuartal ketiga tahun ini demi merebut pangsa pasar Asia Tenggara.</i></li></ul>\n<p>Setelah semua keterangan dibuang (<i>multinasional</i>, <i>yang berpusat di Tokyo</i>, <i>akhirnya</i>, <i>terbarunya</i>, keterangan waktu dan tujuan), unsur intinya adalah <b>perusahaan teknologi</b> (S) — <b>meluncurkan</b> (P) — <b>produk</b> (O).</p>\n<p><b>Mengapa pilihan lain keliru</b></p>\n<p class=\"ev no\"><b>Pilihan B</b>: berasal dari anak kalimat, bukan induk kalimat.</p>\n<p class=\"ev no\"><b>Pilihan C</b>: <i>yang berpusat di Tokyo</i> hanya klausa penjelas subjek.</p>\n<p class=\"ev no\"><b>Pilihan D dan E</b>: mengubah pelaku dan makna kalimat; yang merebut pangsa pasar adalah perusahaan melalui peluncuran produk, bukan produk itu sendiri.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah A.</b></p></section>"
  },
  {
    "n": 18,
    "text": "Dalam lanskap riset biomedis kontemporer, penerapan teknologi penyuntingan gen sering kali dianggap sebagai sebuah pedang bermata dua. Di satu sisi, teknologi ini membuka harapan kesembuhan bagi penderita kelainan genetik langka yang sebelumnya mustahil diobati. Namun, di sisi lain, potensi penyalahgunaannya untuk rekayasa genetik non-terapetik memicu kecemasan bioetis yang mendalam di kalangan ilmuwan dan regulator dunia.\nMakna kontekstual dari frasa pedang bermata dua pada wacana di atas adalah ....",
    "html": "<div class=\"qp\">Dalam lanskap riset biomedis kontemporer, penerapan teknologi penyuntingan gen sering kali dianggap sebagai sebuah <b>pedang bermata dua</b>. Di satu sisi, teknologi ini membuka harapan kesembuhan bagi penderita kelainan genetik langka yang sebelumnya mustahil diobati. Namun, di sisi lain, potensi penyalahgunaannya untuk rekayasa genetik non-terapetik memicu kecemasan bioetis yang mendalam di kalangan ilmuwan dan regulator dunia.</div><div class=\"qp\">Makna kontekstual dari frasa <b>pedang bermata dua</b> pada wacana di atas adalah ....</div>",
    "options": [
      "teknologi mutakhir yang dapat digunakan untuk menangani dua penyakit sekaligus",
      "sesuatu yang mendatangkan manfaat besar sekaligus menyimpan potensi bahaya",
      "instrumen medis yang membutuhkan regulasi ganda dari para ilmuwan dunia",
      "perdebatan sengit antara dua kubu peneliti yang memiliki perspektif berbeda",
      "sebuah terobosan ilmiah yang belum teruji efektivitas dan keamanannya"
    ],
    "answer": "B",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: B</b></p>\n<p><i>Pedang bermata dua</i> adalah idiom, yaitu sesuatu yang dapat membawa keuntungan sekaligus kerugian. Teks menjelaskannya sendiri melalui pola kontras:</p>\n<ul><li><i>Di satu sisi</i>: teknologi membuka harapan kesembuhan penyakit genetik langka (<b>manfaat</b>).</li><li><i>Di sisi lain</i>: potensi penyalahgunaan untuk rekayasa genetik non-terapetik memicu kecemasan bioetis (<b>risiko</b>).</li></ul>\n<p>Jadi maknanya adalah <b>sesuatu yang mendatangkan manfaat besar sekaligus menyimpan potensi bahaya</b>.</p>\n<p><b>Mengapa pilihan lain keliru</b></p>\n<p class=\"ev no\"><b>Pilihan A</b>: menafsirkan <i>dua</i> secara harfiah (dua penyakit).</p>\n<p class=\"ev no\"><b>Pilihan C</b>: tidak ada pembahasan regulasi ganda dalam teks.</p>\n<p class=\"ev no\"><b>Pilihan D</b>: teks tidak membahas perdebatan dua kubu peneliti.</p>\n<p class=\"ev no\"><b>Pilihan E</b>: teks tidak menyatakan teknologi itu belum teruji; yang ditekankan adalah manfaat dan risiko penyalahgunaan.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah B.</b></p></section>"
  },
  {
    "n": 19,
    "text": "Data terkini menunjukkan bahwa investasi pada sektor energi baru dan terbarukan di Indonesia mulai menorehkan capaian konkret. Berdasarkan evaluasi kementerian terkait, efisiensi operasional pembangkit tenaga surya dan bayu naik sebesar 25% dalam kurun waktu dua tahun terakhir. Didukung oleh regulasi insentif yang kian bersahabat dan derasnya arus modal hijau global, pencapaian target emisi nol bersih bukan lagi sekadar impian di atas kertas, melainkan sasaran strategis yang sangat realistis untuk digapai lebih cepat.\nNada (tone) penulis yang tergambar dalam paragraf tersebut adalah ....",
    "html": "<div class=\"qp\">Data terkini menunjukkan bahwa investasi pada sektor energi baru dan terbarukan di Indonesia mulai menorehkan capaian konkret. Berdasarkan evaluasi kementerian terkait, efisiensi operasional pembangkit tenaga surya dan bayu naik sebesar 25% dalam kurun waktu dua tahun terakhir. Didukung oleh regulasi insentif yang kian bersahabat dan derasnya arus modal hijau global, pencapaian target emisi nol bersih bukan lagi sekadar impian di atas kertas, melainkan sasaran strategis yang sangat realistis untuk digapai lebih cepat.</div><div class=\"qp\">Nada (<i>tone</i>) penulis yang tergambar dalam paragraf tersebut adalah ....</div>",
    "options": [
      "skeptis",
      "sinis",
      "optimis",
      "khawatir",
      "apatis"
    ],
    "answer": "C",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: C</b></p>\n<p>Nada penulis dapat dikenali dari pilihan kata dan sudut pandang yang dominan. Paragraf ini penuh ungkapan positif dan penuh keyakinan:</p>\n<ul><li><i>mulai menorehkan capaian konkret</i></li><li><i>efisiensi … naik sebesar 25%</i></li><li><i>regulasi insentif yang kian bersahabat</i> dan <i>derasnya arus modal hijau global</i></li><li><i>bukan lagi sekadar impian di atas kertas, melainkan sasaran strategis yang sangat realistis untuk digapai lebih cepat</i></li></ul>\n<p>Penulis memandang masa depan energi terbarukan secara positif dan yakin, yaitu bernada <b>optimis</b>.</p>\n<p><b>Mengapa pilihan lain keliru</b></p>\n<p class=\"ev no\"><b>Pilihan A</b>: skeptis berarti meragukan, padahal penulis menegaskan capaian.</p>\n<p class=\"ev no\"><b>Pilihan B</b>: sinis berarti menyindir atau mencemooh; tidak ada sindiran.</p>\n<p class=\"ev no\"><b>Pilihan D</b>: tidak ada ungkapan cemas atau takut.</p>\n<p class=\"ev no\"><b>Pilihan E</b>: apatis berarti tidak peduli, sedangkan penulis antusias terhadap capaian.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah C.</b></p></section>"
  },
  {
    "n": 20,
    "text": "Kalimat berikut yang menggunakan pasangan kata (kolokasi) yang tepat dan alami menurut kaidah bahasa Indonesia baku adalah ....",
    "html": "<div class=\"qp\">Kalimat berikut yang menggunakan pasangan kata (kolokasi) yang tepat dan alami menurut kaidah bahasa Indonesia baku adalah ....</div>",
    "options": [
      "Pelari muda berbakat tersebut berhasil mencetak rekor nasional baru pada kejuaraan atletik musim ini.",
      "Setelah menggelar rapat selama berjam-jam, dewan juri akhirnya membuat keputusan yang tidak dapat diganggu gugat.",
      "Wilayah lereng perbukitan itu kerap kali diguyur hujan keras menjelang pergantian tahun.",
      "Kedua negara tetangga sepakat untuk mendirikan hubungan kerja sama pertahanan maritim.",
      "Tim evakuasi segera melakukan pertolongan pertama kepada korban yang mengalami cedera ringan."
    ],
    "answer": "A",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: A</b></p>\n<p>Periksa pasangan kata (kolokasi) pada setiap kalimat:</p>\n<p class=\"ev ok\"><b>Pilihan A (tepat)</b>: <i>mencetak rekor</i> adalah kolokasi yang lazim (seperti <i>mencetak gol</i> dan <i>mencetak skor</i>). Kata lain dalam kalimat juga wajar.</p>\n<p class=\"ev no\"><b>Pilihan B</b>: kolokasi yang lazim adalah <i>mengambil keputusan</i>; <i>membuat keputusan</i> merupakan terjemahan harfiah dari <i>make a decision</i>.</p>\n<p class=\"ev no\"><b>Pilihan C</b>: <i>hujan</i> berpasangan dengan <i>deras</i> atau <i>lebat</i>, bukan <i>keras</i> (<i>keras</i> untuk angin, suara, atau benda padat).</p>\n<p class=\"ev no\"><b>Pilihan D</b>: <i>mendirikan</i> berpasangan dengan bangunan, organisasi, atau perusahaan; untuk hubungan kerja sama yang lazim adalah <i>menjalin</i> atau <i>membangun</i>.</p>\n<p class=\"ev no\"><b>Pilihan E</b>: karena ada penerima (<i>kepada korban</i>), kolokasi yang lebih lazim adalah <i>memberikan pertolongan pertama</i>; <i>melakukan pertolongan pertama</i> kurang alami dibanding pilihan A.</p>\n<p>Dengan demikian, kalimat yang kolokasinya paling tepat dan alami adalah <b>opsi A</b>.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah A.</b></p></section>"
  }
];

// Pembahasan untuk siswa = pembahasan guru (field explain). Kunci peta adalah nomor soal.
export const EXPLAIN_SISWA = Object.fromEntries(QUESTIONS.map((q) => [String(q.n), q.explain]));
