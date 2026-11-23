// Bank soal Pengetahuan dan Pemahaman Umum (quiz id "ppu"): 20 soal TPS Pengetahuan dan Pemahaman Umum, pilihan A sampai E,
// berbasis 4 teks bacaan: brain rot (1-5), bahasa gaul Generasi Alpha (6-10), suneung Korea Selatan (11-15),
// penangkapan penyandang disabilitas (16-19). Soal 20 berdiri sendiri (bahasa Glekglekglek, tanpa teks bacaan).
// Dibuat dari dokumen "Soal_dan_Pembahasan_TPS_PPU.docx" (soal, kunci, dan pembahasan).
//
// Format sama dengan questions-pbm.js:
//   passage : kunci ke PASSAGES (teks bacaan)
//   answer  : satu huruf (semua soal di quiz ini berjawaban tunggal)
//
// Pembahasan guru dan siswa SAMA:
//  - Isi pembahasan ada di field explain tiap soal (HTML). Mode guru (login "Ferdi") menampilkannya langsung.
//  - Siswa menerima isi yang sama lewat EXPLAIN_SISWA di bawah file ini (dibuat otomatis dari field explain),
//    tepat setelah soal itu dijawab (lihat studentExplainOf di quizzes.js). Mengubah explain berarti mengubah keduanya.
//
// Catatan penyesuaian dari dokumen:
//  - Soal 6 di dokumen berupa isian angka (jawaban 4), padahal website hanya mendukung pilihan ganda.
//    Diubah menjadi pilihan ganda A sampai E berisi nomor kalimat (1) sampai (5) (paragraf 1 memang terdiri atas lima kalimat),
//    kunci D = kalimat (4). Catatan "Hanya diisi dengan angka" dihapus. Label jawaban dan kalimat penutup pembahasan disesuaikan menjadi huruf.
//  - Soal 4: pembahasan di dokumen berhenti sebelum analisis tiap opsi (ada catatan "lanjutan pembahasan soal ini tidak terlihat pada foto").
//    Analisis opsi A sampai E ditulis ulang di sini mengikuti pola dasar S-P-O-konj-P-O pada pembahasan. Kunci D sesuai dokumen. Cocokkan dengan pembahasan aslinya bila ada.
//  - Soal 1, pembahasan butir 5: contoh "lari-lari (berlari terus-menerus), ..." terpotong di dokumen. Tanda "..." dibuang, contoh lain tidak ditambahkan.
//  - Catatan transkripsi dari foto di dokumen (kalimat berawalan "Catatan:") tidak ditampilkan, termasuk keterangan tanda (...) pada teks 1 dan teks 4.
//  - Teks bacaan 1 sampai 3 diberi label P1 dan P2 di depan tiap paragraf (seperti quiz Pemahaman Bacaan dan Menulis). Teks 4 satu paragraf, tanpa label.
//  - Huruf miring dan tebal di dokumen dipertahankan lewat field html dan optionsHtml. Field text dan options berisi versi teks biasa.
//  - Pada pembahasan, penilaian tiap pilihan (kelas ev) berwarna hijau untuk pilihan yang sama dengan kunci dan merah muda untuk lainnya.
//  - Kunci: E B A D B D E B B A B D D B A D E C B D (soal 1 sampai 20), sama dengan "Jawaban" di tiap soal dokumen.
//
// File ini hanya dibaca server, jadi kunci dan pembahasan tidak dikirim ke siswa sebelum mereka menjawab.

export const PASSAGES = {
  "brain": {
    "title": "Brain Rot",
    "range": "1–5",
    "html": "<p><b>P1</b> (1) Fenomena <i>brain rot</i> merujuk pada kondisi penurunan kualitas mental yang sering kali disebabkan oleh konsumsi berlebihan terhadap konten yang kurang bermakna atau monoton. (2) Dalam era digital ini, paparan terus-menerus dari media sosial, video hiburan ringan, atau permainan daring tanpa variasi intelektual sering dianggap sebagai salah satu penyebab utama. (3) Otak yang terbiasa dengan stimulasi instan dan sederhana cenderung kehilangan kemampuan untuk berpikir kritis, berkonsentrasi, atau menyelesaikan tugas-tugas yang membutuhkan pemikiran mendalam. (4) Akibatnya, produktivitas individu menurun dan dengan lebih mudah merasa bosan atau kehilangan motivasi.</p>\n<p><b>P2</b> (5) Upaya mengatasi <i>brain rot</i> penting untuk dilakukan dengan mengatur konsumsi konten secara bijak dan memberikan waktu bagi otak untuk beristirahat atau memproses informasi secara mendalam. (6) Membaca buku, bermain teka-teki, atau berdiskusi tentang topik-topik kompleks dapat membantu menjaga otak tetap aktif dan sehat. (7) … (8) Dengan demikian, seseorang dapat melindungi dirinya dari efek buruk <i>brain rot</i> dan memastikan keseimbangan antara hiburan dan pengembangan diri.</p>"
  },
  "alpha": {
    "title": "Bahasa Gaul Generasi Alpha",
    "range": "6–10",
    "html": "<p><b>P1</b> (1) Generasi Alpha, generasi yang tumbuh di tengah derasnya arus digital, menciptakan dan mengadopsi istilah-istilah gaul yang menggambarkan budaya modern dan gaya hidup mereka. (2) Istilah seperti <i>mewing, rizz, sigma, skibidi</i>, dan beberapa contoh yang sedang populer di kalangan mereka. (3) <i>Mewing</i>, misalnya, yang merujuk pada teknik melatih rahang untuk memperbaiki bentuk wajah, digunakan untuk menunjukkan orang yang sedang menambah karisma atau menarik perhatian orang lain, sedangkan <i>rizz</i> adalah singkatan dari <i>charisma</i> yang digunakan untuk menggambarkan kemampuan seseorang dalam memikat hati orang lain. (4) Kedua kata ini tentu saja belum terdapat dalam Kamus Besar Bahasa Indonesia sehingga masih dianggap sebagai kata yang tidak baku. (5) Sementara itu, <i>sigma</i> berarti ‘keren’ dan <i>skibidi</i> berarti ‘jelek’.</p>\n<p><b>P2</b> (6) Bahasa gaul mereka sering kali berkembang dari meme, video TikTok, atau diskusi daring di berbagai platform. (7) Meskipun sebagian orang menganggap istilah ini hanya lelucon atau hiburan, bahasa gaul Generasi Alpha menunjukkan bagaimana teknologi dan budaya digital membentuk cara generasi muda memahami dan berinteraksi dengan dunia di sekitar mereka. (8) Fenomena bahasa gaul Generasi Alpha mencerminkan pola komunikasi mereka yang cepat, inovatif, dan terpengaruh oleh budaya internet. (9) Tren ini tidak hanya menjadi cara untuk mengekspresikan identitas mereka, tetapi juga membentuk subkultur baru yang kadang sulit dipahami oleh orang lain.</p>"
  },
  "suneung": {
    "title": "Suneung (Ujian Masuk Universitas Korea Selatan)",
    "range": "11–15",
    "html": "<p><b>P1</b> (1) CSAT (<i>the College Scholastic Ability Test</i>) atau <i>suneung</i> merupakan ujian masuk universitas di Korea Selatan. (2) Ujian yang dikenal sebagai salah satu ujian tersulit di dunia ini dianggap sebagai penentu masa depan para pelajar di sana. (3) Pelajar yang berhasil lulus <i>suneung</i> dan masuk ke universitas top di sana, terutama Seoul National University, Universitas Yonsei, atau Universitas Korea, diprediksikan akan memiliki masa depan yang sangat cerah. (4) Oleh sebab itu, banyak pelajar di Korea Selatan yang belajar mati-matian setiap hari demi lulus <i>suneung</i> dan masuk ke universitas unggulan di sana.</p>\n<p><b>P2</b> (5) <i>Suneung</i> tidak hanya dianggap penting bagi para pelajar dan orang tua di Korea Selatan, tetapi juga dianggap penting oleh pemerintah. (6) Pemerintah Korea Selatan pun melakukan berbagai kebijakan yang mendukung kelancaran persiapan dan pelaksanaan <i>suneung</i>, seperti dialihkannya jalur penerbangan agar jauh dari lokasi ujian, penutupan sementara toko dan bank, mengerahkan polisi untuk memastikan kelancaran lalu lintas, kegiatan militer dihentikan sementara, dan penambahan armada transportasi umum, pada hari-hari ujian. (7) Bahkan, pemerintah Korea Selatan pun melarang pemutaran lagu-lagu dengan lirik dan melodi yang adiktif, seperti “APT.” dari Rosé dan “Sorry Sorry” dari Super Junior, pada masa persiapan <i>suneung</i> karena menilai bahwa lagu-lagu ini bisa mengganggu konsentrasi pelajar.</p>"
  },
  "disabilitas": {
    "title": "Penangkapan Penyandang Disabilitas",
    "range": "16–19",
    "html": "<p>(1) Pada Desember 2024, berita tentang penangkapan seorang penyandang disabilitas yang tidak memiliki tangan menghebohkan masyarakat Indonesia. (2) Ia ditangkap karena melakukan pelecehan seksual terhadap beberapa perempuan. (3) Awalnya, saat berita ini baru keluar, hampir … masyarakat menganggap bahwa … melakukan kesalahan. (4) Namun, pihak kepolisian pun menjelaskan bukti-bukti yang menunjukkan bahwa mereka tidak salah tangkap. (5) Pelaku dengan disabilitas ternyata memanipulasi dan mengancam korban-korbannya agar tindakannya lancar. (6) Hal ini tentunya menggemparkan masyarakat yang menyangka bahwa orang itu tidak mungkin bisa melakukan apa yang dituduhkan kepadanya. (7) Kasus pelecehan seksual yang dilakukan penyandang disabilitas itu tentunya bisa menjadi pelajaran berharga bagi masyarakat dan menunjukkan bahwa masyarakat memang tidak boleh menilai orang berdasarkan kondisi fisiknya. (8) Buktinya, orang dengan disabilitas tidak selalu lemah, bahkan ternyata bisa melakukan tindakan kriminal. (9) Sebaliknya, orang dengan penampilan yang menyeramkan justru bisa memiliki hati yang bersih.</p>"
  }
};

export const QUESTIONS = [
  {
    "n": 1,
    "passage": "brain",
    "text": "Manakah reduplikasi yang memiliki makna yang sama dengan reduplikasi yang terdapat dalam kalimat (2)?",
    "options": [
      "Ibu membeli sayur-sayuran segar di pasar pagi tadi.",
      "Budaya tolong-menolong pada zaman ini mulai sulit ditemukan.",
      "Rumah itu dicat dengan warna-warni yang cerah dan menarik.",
      "Para siswa diminta untuk membaca buku-buku yang tersedia di perpustakaan.",
      "Anak kecil itu terlihat kesal dan mulai memukul-mukul meja dengan tangannya."
    ],
    "answer": "E",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: E</b></p>\n<p>Reduplikasi dalam bahasa Indonesia, atau pengulangan kata, memiliki berbagai makna tergantung pada konteksnya. Berikut beberapa makna yang dihasilkan oleh reduplikasi:</p>\n<p><b>1. Makna Jamak atau Banyak</b></p>\n<p>Reduplikasi digunakan untuk menunjukkan jumlah yang lebih dari satu atau kolektivitas.</p>\n<p>Contoh: <i>anak-anak (banyak anak), buku-buku (banyak buku).</i></p>\n<p><b>2. Makna Intensitas atau Penekanan</b></p>\n<p>Reduplikasi dapat memberikan penekanan pada sifat atau keadaan.</p>\n<p>Contoh: <i>baik-baik (sangat baik), besar-besar (sangat besar).</i></p>\n<p><b>3. Makna Menyerupai atau Mirip</b></p>\n<p>Digunakan untuk menunjukkan sesuatu yang menyerupai atau mirip dengan hal lain.</p>\n<p>Contoh: <i>rumah-rumahan (mainan yang menyerupai rumah), mobil-mobilan (mainan berbentuk mobil).</i></p>\n<p><b>4. Makna Variasi atau Keanekaragaman</b></p>\n<p>Reduplikasi menunjukkan keberagaman atau variasi dari suatu hal.</p>\n<p>Contoh: <i>warna-warni (beraneka warna), sayur-sayuran (bermacam-macam sayur).</i></p>\n<p><b>5. Makna Gerakan atau Kegiatan yang Berulang</b></p>\n<p>Digunakan untuk menunjukkan aktivitas yang dilakukan secara berulang-ulang atau terus-menerus.</p>\n<p>Contoh: <i>lari-lari (berlari terus-menerus)</i></p>\n<p><b>6. Makna saling</b></p>\n<p>Digunakan untuk menunjukkan aktivitas saling berbalas (resiprok).</p>\n<p>Contoh: <i>pukul-memukul</i></p>\n<p>Kata ulang <i>terus-menerus</i> dalam konteks kalimat (2) menyatakan makna ‘kegiatan yang berulang/berkali-kali’. Kata ulang yang bermakna sama adalah <i>memukul-mukul</i> yang bermakna ‘memukul berkali-kali’ yang ada pada opsi E. Sementara itu, reduplikasi pada opsi lainnya tidak memiliki makna yang sama dengan penjabaran sebagai berikut.</p>\n<p class=\"ev no\">Opsi A: sayur-sayuran bermakna ‘beragam sayuran’.</p>\n<p class=\"ev no\">Opsi B: tolong-menolong bermakna ‘saling menolong’.</p>\n<p class=\"ev no\">Opsi C: warna-warni bermakna ‘beragam warna’.</p>\n<p class=\"ev no\">Opsi D: buku-buku bermakna ‘banyak buku’.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah E.</b></p></section>"
  },
  {
    "n": 2,
    "passage": "brain",
    "text": "Klausa produktivitas individu menurun pada kalimat (4) akan menjadi tepat apabila diperbaiki menjadi ....",
    "html": "<div class=\"qp\">Klausa <i>produktivitas individu menurun</i> pada kalimat (4) akan menjadi tepat apabila diperbaiki menjadi ....</div>",
    "options": [
      "penurunan produktivitas dialami oleh individu",
      "individu mengalami penurunan produktivitas",
      "individu alami penurunan produktivitas",
      "produktivitas yang menurun dialami oleh individu",
      "individu menurun produktivitasnya"
    ],
    "answer": "B",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: B</b></p>\n<p>Perhatikan struktur kalimat (4) berikut!</p>\n<p><i>Akibatnya <b>(K)</b>, produktivitas individu <b>(S)</b> menurun <b>(P)</b> dan <b>(Konj)</b> dengan lebih mudah <b>(K)</b> merasa <b>(P)</b> bosan atau kehilangan motivasi <b>(O)</b>.</i></p>\n<p>Kalimat (4) merupakan kalimat majemuk setara yang tersusun atas dua klausa. Klausa 1 adalah <i>produktivitas individu</i> <b>(S)</b> <i>menurun</i> <b>(P)</b>, sedangkan klausa 2 adalah <i>dengan lebih mudah</i> <b>(K)</b> <i>merasa</i> <b>(P)</b> <i>bosan atau kehilangan motivasi</i> <b>(O)</b>.</p>\n<p>Bagian klausa 2 mengalami pelesapan subjek yang menunjukkan bahwa subjek klausa 2 sama dengan subjek klausa 1. Subjek dalam klausa 1 adalah <i>produktivitas individu</i>. Jika subjek ini dimasukkan ke dalam klausa 2, didapatkan struktur kalimat lengkapnya sebagai berikut.</p>\n<p><i>produktivitas individu <b>(S)</b> dengan lebih mudah <b>(K)</b> merasa <b>(P)</b> bosan atau kehilangan motivasi <b>(O)</b></i></p>\n<p>Berdasarkan informasi tersebut, kita memahami bahwa <i>yang merasa bosan adalah produktivitas individu,</i> padahal <i>yang seharusnya merasakan bosan adalah seseorang atau individu.</i> Dengan demikian, kalimat (4) mengandung ketidaklogisan. Agar kalimatnya menjadi logis, struktur klausa induk yang diminta dalam soal harus diperbaiki dengan cara mengganti subjeknya menjadi <i>individu.</i></p>\n<p>Perbaikan yang mengubah unsur subjeknya menjadi individu ada pada opsi B, C, dan E. Di antara ketiga opsi ini, perbaikan yang efektif ada pada opsi B: <i>individu</i> <b>(S)</b> <i>mengalami</i> <b>(P)</b> <i>penurunan produktivitas</i> <b>(O)</b>. Sementara itu, opsi C salah karena pembentukan verba pasif persona <i>alami.</i> Kalimat dalam opsi C tidak mengandung pelaku berupa kata ganti orang pertama dan kedua sehingga bentukan pasif persona tidak diperlukan. Opsi E merupakan contoh kalimat yang rancu/ambigu dan justru mengubah informasi awal. Dalam kalimat (4), <i>yang menurun adalah produktivitas,</i> bukan individunya, sedangkan dalam redaksi E, yang menurun bisa saja mengacu pada <i>individu.</i></p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah B.</b></p></section>"
  },
  {
    "n": 3,
    "passage": "brain",
    "text": "Kata yang paling tepat untuk menggambarkan sikap penulis dalam teks tersebut adalah ....",
    "options": [
      "cemas",
      "apriori",
      "skeptis",
      "iba",
      "dialektis"
    ],
    "answer": "A",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: A</b></p>\n<p>Posisi atau sikap penulis adalah perspektif yang digunakan penulis dalam membuat tulisan. Penulis dapat bersikap netral atau memihak ke suatu sisi. Sikap penulis dalam teks berkaitan erat dengan masalah utama dan tujuan kepenulisan yang dapat dicermati berdasarkan ide pokok yang tercantum dalam sebuah paragraf atau teks. Sikap penulis juga dapat dilihat berdasarkan jenis teks dan opini yang disampaikan penulis.</p>\n<p>Teks terdiri atas dua paragraf. Paragraf 1 berisi informasi utama mengenai <i>fenomena brain rot, baik dari segi penyebab maupun dampak yang ditimbulkannya.</i> Sementara itu, paragraf 2 berisi informasi utama tentang <i>pentingnya mengatasi brain rot.</i> Karena informasi utama paragraf 2 berisi saran/masukan penulis, ini menunjukkan bahwa teks berjenis argumentasi. Sikap yang ditunjukkan penulis dalam teks ini tergambar dalam dampak negatif yang ditimbulkan sehingga permasalahan ini membuat penulis bersikap <i>cemas.</i> Opsi jawaban lain salah dengan penjabaran sebagai berikut.</p>\n<p class=\"ev no\"><b>Opsi B</b> Apriori adalah ‘berpraanggapan sebelum mengetahui (melihat, menyelidiki, dan sebagainya) keadaan yang sebenarnya’. Sikap ini tidak ditunjukkan oleh penulis karena apa yang disampaikan dalam teks bukanlah sebuah praanggapan.</p>\n<p class=\"ev no\"><b>Opsi C</b> Skeptis adalah ‘sikap yang menunjukkan kekurangpercayaan atau keraguan terhadap suatu hal’. Penulis tidak menunjukkan adanya keraguan penulis atas permasalahan yang disampaikan.</p>\n<p class=\"ev no\"><b>Opsi D</b> Iba adalah ‘berbelas kasihan, terharu, dan kasihan’. Penulis tidak menunjukkan rasa kasihannya terhadap orang-orang yang mengalami brain rot. Penulis lebih bersikap khawatir dan cemas tentang fenomena yang melanda ini.</p>\n<p class=\"ev no\"><b>Opsi E</b> Dialektis atau dialektik berkaitan dengan dialektika, yaitu hal berbahasa dan bernalar dengan dialog sebagai cara untuk menyelidiki suatu masalah. Yang dilakukan penulis dalam teks tidak meminta pembaca untuk berdiskusi mengenai brain rot, tetapi meyakinkan betapa pentingnya kita untuk mengatasi brain rot.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah A.</b></p></section>"
  },
  {
    "n": 4,
    "passage": "brain",
    "text": "Manakah kalimat yang memiliki pola dasar yang sama dengan kalimat (8)?",
    "options": [
      "Saya tetap pergi ke sekolah meskipun hujan deras sejak pagi.",
      "Dina belajar dengan giat agar bisa lulus ujian dengan nilai yang baik.",
      "Kami berhenti berjalan karena hujan mulai turun dengan deras.",
      "Kami akan menikmati udara pantai atau mengunjungi kebun binatang.",
      "Ayah membaca koran di teras dan ibu memasak di dapur."
    ],
    "answer": "D",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: D</b></p>\n<p>Pola kalimat ditentukan oleh unsur-unsur yang membentuk kalimat tersebut, mulai dari subjek (S), predikat (P), objek (O), pelengkap (Pel), dan keterangan (K). Sementara itu, pola dasar dibentuk dari unsur yang wajib ada dalam kalimat, yaitu subjek dan predikat. Objek dan/atau pelengkap juga dapat menjadi pola dasar apabila dibutuhkan oleh predikatnya. Sementara itu, unsur keterangan tidak termasuk ke dalam pola dasar.</p>\n<p>Berikut adalah analisis struktur kalimat (8).</p>\n<p><i>Dengan demikian <b>(konj.)</b>, seseorang <b>(S)</b> dapat melindungi <b>(P)</b> dirinya <b>(O)</b> dari efek buruk brain rot <b>(K)</b> dan <b>(konj.)</b> memastikan <b>(P)</b> keseimbangan <b>(O)</b> antara hiburan dan pengembangan diri <b>(K)</b>.</i></p>\n<p>Kalimat (8) merupakan kalimat majemuk setara sehingga ada dua pola dasar di setiap klausanya. Pola dasar kalimat (8) adalah <b>S-P-O-konj,-P-O.</b> Perhatikan analisis struktur setiap opsi jawaban berikut.</p>\n<p class=\"ev no\"><b>Opsi A tidak tepat.</b> <i>Saya</i> <b>(S)</b> <i>tetap pergi</i> <b>(P)</b> <i>ke sekolah</i> <b>(K)</b> <i>meskipun</i> <b>(konj.)</b> <i>hujan</i> <b>(S)</b> <i>deras</i> <b>(P)</b> <i>sejak pagi</i> <b>(K)</b>. Pola dasarnya S-P-konj-S-P.</p>\n<p class=\"ev no\"><b>Opsi B tidak tepat.</b> <i>Dina</i> <b>(S)</b> <i>belajar</i> <b>(P)</b> <i>dengan giat</i> <b>(K)</b> <i>agar</i> <b>(konj.)</b> <i>bisa lulus</i> <b>(P)</b> <i>ujian</i> <b>(O)</b> <i>dengan nilai yang baik</i> <b>(K)</b>. Klausa pertama tidak berobjek, jadi pola dasarnya S-P-konj-P-O.</p>\n<p class=\"ev no\"><b>Opsi C tidak tepat.</b> <i>Kami</i> <b>(S)</b> <i>berhenti berjalan</i> <b>(P)</b> <i>karena</i> <b>(konj.)</b> <i>hujan</i> <b>(S)</b> <i>mulai turun</i> <b>(P)</b> <i>dengan deras</i> <b>(K)</b>. Pola dasarnya S-P-konj-S-P.</p>\n<p class=\"ev ok\"><b>Opsi D tepat.</b> <i>Kami</i> <b>(S)</b> <i>akan menikmati</i> <b>(P)</b> <i>udara pantai</i> <b>(O)</b> <i>atau</i> <b>(konj.)</b> <i>mengunjungi</i> <b>(P)</b> <i>kebun binatang</i> <b>(O)</b>. Pola dasarnya S-P-O-konj-P-O, sama dengan kalimat (8).</p>\n<p class=\"ev no\"><b>Opsi E tidak tepat.</b> <i>Ayah</i> <b>(S)</b> <i>membaca</i> <b>(P)</b> <i>koran</i> <b>(O)</b> <i>di teras</i> <b>(K)</b> <i>dan</i> <b>(konj.)</b> <i>ibu</i> <b>(S)</b> <i>memasak</i> <b>(P)</b> <i>di dapur</i> <b>(K)</b>. Klausa kedua punya subjek sendiri dan tidak berobjek, jadi pola dasarnya S-P-O-konj-S-P.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah D.</b></p></section>"
  },
  {
    "n": 5,
    "passage": "brain",
    "text": "Kalimat pasif yang efektif untuk melengkapi kalimat (7) adalah ....",
    "options": [
      "Selain itu, mengurangi menatap layar hp dan aktivitas fisik diperbanyak juga terbukti efektif dalam meningkatkan fungsi kognitif.",
      "Selain itu, mengurangi menatap layar hp dan memperbanyak aktivitas fisik juga terbukti efektif dalam meningkatkan fungsi kognitif.",
      "Selain itu, menatap layar hp dikurangi dan aktivitas fisik diperbanyak juga terbukti efektif dalam meningkatkan fungsi kognitif.",
      "Selain itu, fungsi kognitif dapat ditingkatkan dengan mengurangi menatap layar hp dan memperbanyak aktivitas fisik.",
      "Selain itu, fungsi kognitif yang ternyata dapat ditingkatkan dengan mengurangi menatap layar hp dan memperbanyak aktivitas fisik."
    ],
    "answer": "B",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: B</b></p>\n<p>Kalimat pasif merupakan kalimat yang subjeknya menjadi tujuan perbuatan dari predikat verbalnya. Kalimat pasif ditandai dengan adanya kata kerja pasif (umumnya ditandai dengan kata kerja berawalan ter-, di-, atau ke-an). Untuk menemukan kalimat pasif, kita perlu menganalisis struktur setiap kalimat dalam pilihan jawaban dan menganalisis kepaduan kalimatnya dengan teks.</p>\n<p>Berikut adalah analisis struktur kalimat di setiap pilihan jawaban.</p>\n<p class=\"ev no\"><b>Opsi A</b> <i>Selain itu <b>(konj.)</b>, mengurangi menatap layar hp dan aktivitas fisik diperbanyak <b>(S)</b> juga terbukti <b>(P)</b> efektif <b>(Pel.)</b> dalam meningkatkan fungsi kognitif <b>(K)</b>.</i></p>\n<p>Kalimat dalam opsi A merupakan kalimat pasif, tetapi mengandung ketidaksejajaran dalam rincian di unsur subjeknya. Rincian yang pertama berupa frasa verbal (mengurangi menatap layar hp), sedangkan rincian yang kedua berupa klausa. Seharusnya, rincian yang kedua diperbaiki menjadi memperbanyak aktivitas fisik.</p>\n<p class=\"ev no\"><b>Opsi B</b> <i>Selain itu <b>(konj.)</b>, mengurangi menatap layar hp dan memperbanyak aktivitas fisik <b>(S)</b> juga terbukti <b>(P)</b> efektif <b>(Pel.)</b> dalam meningkatkan fungsi kognitif <b>(K)</b>.</i></p>\n<p>Kalimat dalam opsi B merupakan kalimat pasif yang efektif.</p>\n<p class=\"ev no\"><b>Opsi C</b> <i>Selain itu <b>(konj.)</b>, menatap layar hp <b>(S)</b> dikurangi <b>(P)</b> dan <b>(konj.)</b> aktivitas fisik <b>(S)</b> diperbanyak <b>(P)</b> juga terbukti <b>(P)</b> efektif <b>(Pel.)</b> dalam meningkatkan fungsi kognitif <b>(K)</b>.</i></p>\n<p>Kalimat C merupakan kalimat yang rancu karena adanya tiga predikat tanpa hubungan klausa yang jelas, terutama hubungannya dengan predikat yang ketiga (terbukti).</p>\n<p class=\"ev no\"><b>Opsi D</b> <i>Selain itu <b>(konj.)</b>, fungsi kognitif <b>(S)</b> dapat ditingkatkan <b>(P)</b> dengan mengurangi menatap layar hp dan memperbanyak aktivitas fisik <b>(K)</b>.</i></p>\n<p>Kalimat dalam opsi D merupakan kalimat pasif yang efektif.</p>\n<p class=\"ev no\"><b>Opsi E</b> <i>Selain itu <b>(konj.)</b>, fungsi kognitif yang ternyata dapat ditingkatkan dengan mengurangi menatap layar hp dan memperbanyak aktivitas fisik <b>(S)</b>.</i></p>\n<p>Kalimat dalam opsi E termasuk kalimat yang tidak efektif karena tidak memiliki kelengkapan struktur.</p>\n<p>Dari kelima kalimat dalam pilihan jawaban, hanya opsi B dan D yang termasuk kalimat pasif yang efektif. Namun, di antara kedua pilihan ini, kalimat dalam opsi D tidak padu dengan paragraf yang ada sehingga jawaban yang tepat adalah opsi B.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah B.</b></p></section>"
  },
  {
    "n": 6,
    "passage": "alpha",
    "text": "Kalimat yang tidak menjelaskan gagasan utama dalam paragraf 1 adalah ....",
    "options": [
      "(1)",
      "(2)",
      "(3)",
      "(4)",
      "(5)"
    ],
    "answer": "D",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: D</b></p>\n<p>Kalimat yang tidak menjelaskan gagasan utama dalam paragraf disebut juga dengan kalimat sumbang, yaitu kalimat yang informasinya tidak padu dengan gagasan utama. Kalimat sumbang merupakan salah satu penyebab kelemahan suatu paragraf sehingga harus dihilangkan agar paragraf menjadi padu. Itulah sebabnya kalimat sumbang akan mengandung makna lain dari yang tertulis dalam bacaan.</p>\n<p>Teks terdiri atas dua paragraf. Paragraf 1 terdiri atas lima kalimat. Secara umum, teks membahas istilah-istilah gaul yang diciptakan oleh Generasi Alpha. Gagasan utamanya tercantum dalam kalimat (1) yang pengertian istilah-istilahnya dijelaskan oleh kalimat (2), (3), dan (5). Sayangnya, kalimat (4) yang berisi informasi mengenai istilah-istilah tersebut dianggap sebagai kata yang tidak baku tidak padu dengan gagasan utamanya dan mengganggu kepaduan informasi antara kalimat (3) dan (5). Dengan demikian, jawaban yang tepat adalah kalimat (4).</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah D, yaitu kalimat (4).</b></p></section>"
  },
  {
    "n": 7,
    "passage": "alpha",
    "text": "Kata berpasangan tetap dalam teks tersebut terdapat dalam kalimat ....",
    "options": [
      "(2)",
      "(3)",
      "(4)",
      "(6)",
      "(9)"
    ],
    "answer": "E",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: E</b></p>\n<p>Kata berpasangan tetap atau kata majemuk adalah kelompok kata yang membentuk makna baru, tetapi makna tersebut masih bisa ditelusuri dari kata pembentuknya. Kata majemuk tidak bisa disisipi dengan kata lain dan tidak dapat ditukar posisinya. Kata majemuk dibedakan dengan frasa dari makna yang terbentuk. Frasa tidak membentuk makna baru, dapat disisipi kata lain, serta pilihan kata masih bisa dipertukarkan dengan kata lain tanpa mengubah maksud awal.</p>\n<p>Kata berpasangan tetap ada pada kalimat (9), yaitu pada kata <i>subkultur</i>. Kata ini merupakan bagian dari kata majemuk yang terbentuk atas dua kata, yaitu bentuk terikat <i>sub-</i> dan kata <i>kultur</i>. Kedua kata ini membentuk satu istilah, yaitu <i>subkultur</i>. Kedua kata ini berpasangan tetap dan tidak bisa diganti dengan kata lainnya.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah E.</b></p></section>"
  },
  {
    "n": 8,
    "passage": "alpha",
    "text": "Paragraf 2 perlu disusun ulang agar menjadi padu. Pengelompokan kalimat yang tepat adalah ....",
    "options": [
      "8-9-6-7",
      "8-6-9-7",
      "6-8-7-9",
      "6-9-8-7",
      "6-8-9-7"
    ],
    "answer": "B",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: B</b></p>\n<p>Kalimat-kalimat pada paragraf 2 tersusun secara acak sehingga informasi pada paragraf itu tidak padu. Oleh sebab itu, kalimat-kalimat ini perlu disusun ulang agar informasi pada paragraf menjadi runtut dan padu. Langkah pertama untuk menyusunnya adalah dengan menentukan kalimat yang mengandung informasi yang paling umum untuk kita tetapkan sebagai gagasan utama. Setelah itu, tentukan kalimat yang mampu menjadi gagasan penjelas atas gagasan utama tersebut, lalu susun berdasarkan urutan informasi yang tepat.</p>\n<p>Paragraf 2 dalam soal terdiri atas empat kalimat. Dari keempat kalimat, kalimat yang mengandung informasi umum adalah kalimat (8). Kalimat (8) ini menjadi gagasan utama yang masih membahas fenomena bahasa gaul Generasi Alpha yang mencerminkan pola komunikasi yang cepat, inovatif, dan terpengaruh oleh budaya internet. Komunikasi yang cepat, inovatif, dan terpengaruh oleh budaya internet ini dijelaskan lebih lanjut dengan kalimat (6). Informasi bahwa bahasa gaul mereka sering kali berkembang dari meme, video TikTok, atau diskusi daring di berbagai platform menjadi bukti bahwa bahasa gaul Generasi Alpha memang terpengaruh oleh budaya internet. Dari analisis ini, kita bisa langsung menemukan bahwa jawaban yang tepat ada pada opsi B dengan urutan 8-6-9-7. Berikut adalah susunannya yang padu.</p>\n<p><i>(8) Fenomena bahasa gaul Generasi Alpha mencerminkan pola komunikasi mereka yang cepat, inovatif, dan terpengaruh oleh budaya internet. (6) Bahasa gaul mereka sering kali berkembang dari meme, video TikTok, atau diskusi daring di berbagai platform. (9) Tren ini tidak hanya menjadi cara untuk mengekspresikan identitas mereka, tetapi juga membentuk subkultur baru yang kadang sulit dipahami oleh orang lain. (7) Meskipun sebagian orang menganggap istilah ini hanya lelucon atau hiburan, bahasa gaul Generasi Alpha menunjukkan bagaimana teknologi dan budaya digital membentuk cara generasi muda memahami dan berinteraksi dengan dunia di sekitar mereka.</i></p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah B.</b></p></section>"
  },
  {
    "n": 9,
    "passage": "alpha",
    "text": "Kalimat yang mengandung ketidaklengkapan struktur adalah kalimat ....",
    "options": [
      "(1)",
      "(2)",
      "(3)",
      "(4)",
      "(5)"
    ],
    "answer": "B",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: B</b></p>\n<p>Sebuah kalimat dikatakan lengkap apabila minimal memiliki unsur subjek dan predikat. Objek dan/atau pelengkap dapat muncul yang bergantung dengan predikatnya. Perhatikan analisis unsur kalimat di setiap pilihan jawaban.</p>\n<p><i>(1) Generasi Alpha <b>(S)</b>, generasi yang tumbuh di tengah derasnya arus digital <b>(K)</b>, menciptakan <b>(P)</b> dan <b>(konj.)</b> mengadopsi <b>(P)</b> istilah-istilah gaul yang menggambarkan budaya modern dan gaya hidup mereka <b>(O)</b>.</i></p>\n<p><i>(2) Istilah seperti mewing, rizz, sigma, skibidi, dan beberapa contoh yang sedang populer di kalangan mereka <b>(S)</b>.</i></p>\n<p><i>(3) Mewing <b>(S)</b>, misalnya <b>(K)</b>, yang merujuk pada teknik melatih rahang untuk memperbaiki bentuk wajah <b>(k. tambahan)</b>, digunakan <b>(P)</b> untuk menunjukkan orang yang sedang menambah karisma atau menarik perhatian orang lain <b>(K)</b>, sedangkan <b>(konj.)</b> rizz <b>(S)</b> adalah <b>(P)</b> singkatan dari charisma yang digunakan untuk menggambarkan kemampuan seseorang dalam memikat hati orang lain <b>(Pel.)</b>.</i></p>\n<p><i>(4) Kedua kata ini <b>(S)</b> tentu saja belum terdapat <b>(P)</b> dalam Kamus Besar Bahasa Indonesia <b>(K)</b> sehingga masih dianggap sebagai kata yang tidak baku <b>(K)</b>.</i></p>\n<p><i>(5) Sementara itu <b>(konj.)</b>, sigma <b>(S)</b> berarti <b>(P)</b> ‘keren’ <b>(Pel.)</b> dan <b>(konj.)</b> skibidi <b>(S)</b> berarti <b>(P)</b> ‘jelek’ <b>(Pel.)</b>.</i></p>\n<p>Dari analisis tersebut, terlihat bahwa yang tidak memiliki kelengkapan struktur ada pada kalimat (2) karena tidak memiliki unsur predikat.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah B.</b></p></section>"
  },
  {
    "n": 10,
    "passage": "alpha",
    "text": "Kata yang mengandung makna asosiatif terdapat pada kalimat ....",
    "options": [
      "(1)",
      "(3)",
      "(5)",
      "(7)",
      "(9)"
    ],
    "answer": "A",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: A</b></p>\n<p>Makna asosiatif terkait dengan makna yang terbentuk karena pertautan ingatan dan nilai rasa. Makna asosiatif ini juga berkaitan dengan makna konotatif yang keduanya mengandung nilai rasa.</p>\n<p>Kata yang mengandung makna asosiatif terdapat pada kalimat (1). Kata yang dimaksud adalah deras. Dalam KBBI, kata deras memiliki makna sebagai berikut.</p>\n<ul><li><i>a</i> sangat cepat (tentang aliran, gerakan, dan sebagainya): air itu mengalir dengan --nya</li><li><i>a</i> lebat (tentang hujan)</li></ul>\n<p>Dalam konteks kalimat (1), <i>deras</i> mengacu pada arus digital yang diasosiasikan seperti arus/aliran air yang sangat cepat sehingga munculnya kata <i>deras</i> digunakan untuk mengasosiasikan gambar ini.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah A.</b></p></section>"
  },
  {
    "n": 11,
    "passage": "suneung",
    "text": "Perbaikan yang tepat untuk kelompok kata dialihkannya jalur penerbangan agar jauh lokasi ujian, penutupan sementara toko dan bank, mengerahkan polisi untuk memastikan kelancaran lalu lintas, kegiatan militer dihentikan sementara, dan penambahan armada transportasi umum yang ada di kalimat (6) adalah ....",
    "html": "<div class=\"qp\">Perbaikan yang tepat untuk kelompok kata <i>dialihkannya jalur penerbangan agar jauh lokasi ujian, penutupan sementara toko dan bank, mengerahkan polisi untuk memastikan kelancaran lalu lintas, kegiatan militer dihentikan sementara, dan penambahan armada transportasi umum</i> yang ada di kalimat (6) adalah ....</div>",
    "options": [
      "dialihkannya jalur penerbangan agar jauh lokasi ujian, toko dan bank ditutup sementara, polisi dikerahkan untuk memastikan kelancaran lalu lintas, kegiatan militer dihentikan sementara, dan ditambahkannya armada transportasi umum",
      "jalur penerbangan dialihkan agar jauh dari lokasi ujian, toko dan bank ditutup sementara, polisi dikerahkan untuk memastikan kelancaran lalu lintas, kegiatan militer dihentikan sementara, dan armada transportasi umum ditambahkan",
      "pengalihan jalur penerbangan agar jauh lokasi ujian, penutupan sementara toko dan bank, pengerahan polisi untuk memastikan kelancaran lalu lintas, menghentikan sementara kegiatan militer, dan menambahkan armada transportasi umum",
      "peralihan jalur penerbangan agar jauh lokasi ujian, penutupan sementara toko dan bank, pengerahan polisi untuk memastikan kelancaran lalu lintas, pemberhentian sementara kegiatan militer, dan pertambahan armada transportasi umum",
      "beralihnya jalur penerbangan agar jauh lokasi ujian, ditutupnya toko dan bank sementara, dikerahkannya polisi untuk memastikan kelancaran lalu lintas, berhentinya kegiatan militer sementara, dan bertambahnya armada transportasi umum"
    ],
    "answer": "B",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: B</b></p>\n<p>Kita harus menganalisis struktur kalimat (6) dulu untuk mengetahui posisi perincian.</p>\n<p><i>Pemerintah Korea Selatan <b>(S)</b> pun melakukan <b>(P)</b> berbagai kebijakan yang mendukung kelancaran persiapan dan pelaksanaan suneung <b>(O)</b>, seperti dialihkannya jalur penerbangan agar jauh dari lokasi ujian, penutupan sementara toko dan bank, mengerahkan polisi untuk memastikan kelancaran lalu lintas, kegiatan militer dihentikan sementara, dan penambahan armada transportasi umum <b>(Ket. tambahan)</b></i>, pada hari-hari ujian <b>(K)</b>.</p>\n<p>Perincian terdapat pada keterangan tambahan. Perincian menyebutkan berbagai kebijakan yang dilakukan pemerintah Korsel untuk mendukung kelancaran <i>suneung</i>, yaitu:</p>\n<ul><li><i>dialihkannya jalur penerbangan agar jauh dari lokasi ujian</i> → frasa nominal</li><li><i>penutupan sementara toko dan bank</i> → frasa nominal</li><li><i>mengerahkan polisi untuk memastikan kelancaran lalu lintas</i> → frasa verbal</li><li><i>kegiatan militer <b>(S)</b> dihentikan <b>(P)</b> sementara <b>(K)</b></i> → klausa</li><li><i>penambahan armada transportasi umum</i> → frasa nominal</li></ul>\n<p>Perincian pertama, kedua, dan kelima merupakan frasa nominal, perincian ketiga merupakan frasa verbal, sedangkan perincian keempat termasuk ke dalam klausa. Hal ini menunjukkan bahwa kalimat (6) mengalami ketidaksejajaran karena memiliki perincian yang tidak sejajar. Padahal, sebuah kalimat harus memenuhi syarat kesejajaran agar bisa disebut efektif. Kesejajaran menuntut adanya kesamaan jenis dan makna kata pada kata-kata yang berada pada unsur yang sama. Agar sejajar dan membentuk informasi yang logis, kita perlu mengubah keempat perincian tersebut ke dalam bentuk klausa:</p>\n<ul><li><i>jalur penerbangan <b>(S)</b> dialihkan <b>(P)</b> agar jauh dari lokasi ujian <b>(K)</b></i></li><li><i>toko dan bank <b>(S)</b> ditutup <b>(P)</b> sementara <b>(K)</b></i></li><li><i>polisi <b>(S)</b> dikerahkan <b>(P)</b> untuk memastikan kelancaran lalu lintas <b>(K)</b></i></li><li><i>kegiatan militer <b>(S)</b> dihentikan <b>(P)</b> sementara <b>(K)</b></i></li><li><i>armada transportasi umum <b>(S)</b> ditambahkan <b>(P)</b></i></li></ul>\n<p>Opsi jawaban lainnya salah karena perinciannya masih belum sejajar.</p>\n<section class=\"box jawab\"><p><b>Jadi, pilihan jawaban yang tepat adalah B.</b></p></section>"
  },
  {
    "n": 12,
    "passage": "suneung",
    "text": "Kalimat yang mengandung hubungan makna yang sama dengan yang terkandung pada kalimat (3) adalah ...",
    "options": [
      "Ular laut bertanduk (Acalyptophis peronii) sering kali berkamuflase saat memburu mangsanya.",
      "Ular menggunakan feromon untuk berkomunikasi secara nonverbal dengan sesamanya.",
      "Ular laut umumnya memiliki racun yang lebih mematikan sebagai bentuk adaptasi terhadap lingkungan hidup yang lebih menantang.",
      "Hydrophis belcheri merupakan salah satu jenis ular laut yang habitatnya berada di perairan dangkal di sekitar pulau-pulau di Asia Tenggara dan Australia.",
      "Ular tidak mampu mendengar suara desisan mereka karena desisan memiliki frekuensi suara yang lebih tinggi daripada frekuensi suara yang dapat didengar ular."
    ],
    "optionsHtml": [
      "Ular laut bertanduk (<i>Acalyptophis peronii</i>) sering kali berkamuflase saat memburu mangsanya.",
      "Ular menggunakan feromon untuk berkomunikasi secara nonverbal dengan sesamanya.",
      "Ular laut umumnya memiliki racun yang lebih mematikan sebagai bentuk adaptasi terhadap lingkungan hidup yang lebih menantang.",
      "<i>Hydrophis belcheri</i> merupakan salah satu jenis ular laut yang habitatnya berada di perairan dangkal di sekitar pulau-pulau di Asia Tenggara dan Australia.",
      "Ular tidak mampu mendengar suara desisan mereka karena desisan memiliki frekuensi suara yang lebih tinggi daripada frekuensi suara yang dapat didengar ular."
    ],
    "answer": "D",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: D</b></p>\n<p>Soal menanyakan kalimat yang mengandung <b>hubungan makna yang sama</b> dengan yang terkandung pada kalimat (3) yang berbunyi <i>Pelajar yang berhasil lulus suneung dan masuk ke universitas top di sana, terutama Seoul National University, Universitas Yonsei, atau Universitas Korea, diprediksikan akan memiliki masa depan yang sangat cerah.</i></p>\n<p>Dalam kalimat (3), terdapat kata-kata dengan <b>hubungan bertingkat atau hubungan hierarkis</b>. Makna bertingkat berkaitan dengan salah satu jenis hubungan makna kata, yakni <b>hipernim dan hiponim</b>. Jika diminta untuk mencari kata yang memiliki makna bertingkat, kita perlu mencari tahu hipernim ataupun hiponim kata tersebut. Hipernim adalah kata yang memiliki makna yang lebih luas dan meliputi makna dari beberapa kata yang lebih khusus. Sementara itu, hiponim adalah kata yang memiliki makna yang lebih sempit dan meliputi makna dari satu kata yang lebih umum. Dalam kalimat (3), <i><b>universitas top di sana (Korea Selatan)</b></i> merupakan <b>hipernim</b> dari <i><b>Seoul National University, Universitas Yonsei</b></i>, dan <i><b>Universitas Korea</b></i>, sedangkan <i>Seoul National University, Universitas Yonsei,</i> dan <i>Universitas Korea</i> merupakan hiponim dari <i>universitas top di sana (Korea Selatan)</i>.</p>\n<p>Hubungan bertingkat dapat ditemukan pada <b>opsi D</b>. Dalam opsi D, disebutkan bahwa <i>Hydrophis belcheri</i> merupakan salah satu jenis ular laut. Artinya, <b><i>Hydrophis belcheri</i> merupakan hiponim dari <i>ular laut</i></b>, sedangkan <b><i>ular laut</i> merupakan hipernim dari <i>Hydrophis belcheri</i></b>.</p>\n<p class=\"ev no\">Sementara itu, opsi A, B, C, dan E tidak tepat karena tidak memiliki kata-kata yang berhubungan hierarkis.</p>\n<section class=\"box jawab\"><p><b>Jadi, pilihan jawaban yang tepat adalah D.</b></p></section>"
  },
  {
    "n": 13,
    "passage": "suneung",
    "text": "Frasa dengan pola makna yang sama dengan frasa konsentrasi pelajar (kalimat 7) adalah ....",
    "html": "<div class=\"qp\">Frasa dengan pola makna yang sama dengan frasa <i>konsentrasi pelajar</i> (kalimat 7) adalah ....</div>",
    "options": [
      "taplak meja",
      "kamar saya",
      "artis ibu kota",
      "kewajiban ayah",
      "seragam sekolah"
    ],
    "answer": "D",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: D</b></p>\n<p>Soal berkaitan dengan <b>pola makna frasa</b>. Frasa adalah gabungan dua kata atau lebih yang bersifat nonpredikatif dan hanya menduduki satu unsur dalam kalimat, misalnya hanya sebagai subjek atau hanya sebagai predikat. Setiap frasa memiliki pola dan maknanya masing-masing. Pola frasa ditentukan oleh kelas kata dari kata-kata pembentuknya, sedangkan makna frasa ditentukan oleh makna kata-kata pembentuknya.</p>\n<p>Frasa <i>konsentrasi pelajar</i> pada kalimat (7) terbentuk dari kata-kata berikut.</p>\n<ul><li><b>Kata 1:</b> <i>konsentrasi</i> yang merupakan nomina (kata benda)</li><li><b>Kata 2:</b> <i>pelajar</i> yang merupakan nomina (kata benda)</li></ul>\n<p>Berdasarkan kelas kata pembentuknya, pola frasa tersebut adalah <b>nomina-nomina</b>. Inti frasa tersebut adalah kata <i>konsentrasi</i>, sedangkan <i>pelajar</i> merupakan pewatas (sesuatu yang digunakan untuk membatasi). Frasa tersebut berjenis frasa nominal yang bermakna ‘konsentrasi <b>milik</b> pelajar’. Jadi, pola makna dari frasa tersebut adalah <i>kata 1 <b>milik</b> kata 2</i>.</p>\n<p>Frasa yang berpola makna sama dengan frasa <i>konsentrasi pelajar</i> adalah frasa <i><b>kewajiban ayah</b></i>. Frasa tersebut memiliki pola sebagai berikut.</p>\n<ul><li><b>Kata pembentuk:</b> <i>kewajiban</i> (nomina) dan <i>ayah</i> (nomina)</li><li><b>Pola frasa:</b> nomina-nomina</li><li><b>Makna frasa:</b> ‘kewajiban <b>milik</b> ayah’</li><li><b>Pola makna frasa:</b> <i>kata 1 <b>milik</b> kata 2</i></li></ul>\n<p class=\"ev no\">Sementara itu, pilihan jawaban A, B, C, dan E tidak tepat.</p>\n<p class=\"ev no\"><b>Pilihan A tidak tepat</b> karena frasa <i>taplak meja</i> adalah <b>nomina-nomina</b> dan bermakna ‘taplak <b>untuk</b> meja’.</p>\n<p class=\"ev no\"><b>Pilihan B tidak tepat</b> karena frasa <i>kamar saya</i> adalah <b>nomina-pronomina</b> dan bermakna ‘kamar <b>milik</b> saya’.</p>\n<p class=\"ev no\"><b>Pilihan C tidak tepat</b> karena frasa <i>artis ibu kota</i> adalah <b>nomina-kata majemuk nominal</b> dan bermakna ‘artis <b>yang ada di</b> ibu kota’.</p>\n<p class=\"ev no\"><b>Pilihan E tidak tepat</b> karena frasa <i>seragam sekolah</i> adalah <b>nomina-nomina</b> dan bermakna ‘seragam <b>untuk</b> sekolah’.</p>\n<section class=\"box jawab\"><p><b>Jadi, pilihan jawaban yang tepat adalah D.</b></p></section>"
  },
  {
    "n": 14,
    "passage": "suneung",
    "text": "Imbuhan meng- pada kata mengganggu yang ada di kalimat (7) memiliki makna yang sama dengan makna imbuhan meng- pada kata bercetak miring yang ada di kalimat ...",
    "html": "<div class=\"qp\">Imbuhan <i>meng-</i> pada kata <i>mengganggu</i> yang ada di kalimat (7) memiliki makna yang sama dengan makna imbuhan <i>meng-</i> pada kata bercetak miring yang ada di kalimat ...</div>",
    "options": [
      "Video tentang pria muda yang mencaci orang tua itu sedang viral.",
      "Kakek memukul ular kobra itu dengan balok kayu yang ada di rumah.",
      "Sungai yang dulunya jernih itu kini mengeruh akibat kemasukan polutan.",
      "Kasus pencurian sepeda motor di Desa X memuncak pada musim hujan.",
      "Setiap malam tahun baru, orang-orang di RT 001 menyatai bersama-sama."
    ],
    "optionsHtml": [
      "Video tentang pria muda yang <i>mencaci</i> orang tua itu sedang viral.",
      "Kakek <i>memukul</i> ular kobra itu dengan balok kayu yang ada di rumah.",
      "Sungai yang dulunya jernih itu kini <i>mengeruh</i> akibat kemasukan polutan.",
      "Kasus pencurian sepeda motor di Desa X <i>memuncak</i> pada musim hujan.",
      "Setiap malam tahun baru, orang-orang di RT 001 <i>menyatai</i> bersama-sama."
    ],
    "answer": "B",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: B</b></p>\n<p>Setiap imbuhan memiliki fungsi dan makna. Fungsi menunjukkan bahwa imbuhan mampu membentuk kelas kata, sedangkan makna menunjukkan bahwa setiap imbuhan akan membentuk makna yang berbeda bergantung pada kata dasar yang dilekatinya.</p>\n<p>Kata <i>mengganggu</i> terdiri atas imbuhan <i>meng-</i> yang dilekatkan pada kata <i>ganggu</i>. Kata <i>ganggu</i> termasuk ke dalam kelas <b>kata kerja (verba)</b>. Imbuhan <i>meng-</i> yang dilekatkan dengan kata kerja hanya dapat membentuk satu makna, yaitu <b>‘pangkal verba (melakukan hal yang disebutkan oleh kata dasar)’</b>.</p>\n<p>Untuk mencari kata dengan makna imbuhan yang sama dengan imbuhan <i>meng-</i> pada kata <i>mengganggu</i>, kita bisa menganalisis kelas kata dari kata dasarnya terlebih dahulu.</p>\n<ul><li><b>Mencaci:</b> <i>meng-</i> + <i>caci</i> (nomina) → Imbuhan <i>meng-</i> pada kata <i>mencaci</i> membentuk makna ‘mengeluarkan’.</li><li><b>Memukul:</b> <i>meng-</i> + <i>pukul</i> (verba) → Imbuhan <i>meng-</i> pada kata <i>memukul</i> membentuk makna <b>‘pangkal verba’</b>.</li><li><b>Mengeruh:</b> <i>meng-</i> + <i>keruh</i> (adjektiva) → Imbuhan <i>meng-</i> pada kata <i>mengeruh</i> membentuk makna ‘menjadi’.</li><li><b>Memuncak:</b> <i>meng-</i> + <i>puncak</i> (nomina kiasan) → Imbuhan <i>meng-</i> pada kata <i>memuncak</i> membentuk makna ‘menuju’.</li><li><b>Menyatai:</b> <i>meng-</i> + <i>satai</i> (nomina) → Imbuhan <i>meng-</i> pada kata <i>menyatai</i> membentuk makna ‘membuat’.</li></ul>\n<p>Berdasarkan penjelasan di atas, kata dengan makna imbuhan <i>meng-</i> yang sama dengan imbuhan <i>meng-</i> pada kata <i>mengganggu</i> adalah kata <i><b>memukul</b></i> yang ada di <b>opsi B</b> (<i>Kakek memukul ular kobra itu dengan balok kayu yang ada di rumah.</i>). Pasalnya, imbuhan <i>meng-</i> pada kata <i>mengganggu</i> dan <i>memukul</i> sama-sama memiliki makna <b>‘pangkal verba’</b>.</p>\n<section class=\"box jawab\"><p><b>Jadi, pilihan jawaban yang tepat adalah B.</b></p></section>"
  },
  {
    "n": 15,
    "passage": "suneung",
    "text": "Apa tujuan yang ingin disampaikan penulis dalam teks di atas?",
    "options": [
      "Menjelaskan pentingnya suneung bagi masyarakat Korea Selatan",
      "Menginformasikan peran suneung bagi para pelajar yang ada di Korea Selatan",
      "Menjelaskan alasan pelajar di Korea Selatan belajar begitu keras demi lulus suneung",
      "Menunjukkan bahwa suneung pantas disebut sebagai salah satu ujian tersulit di dunia",
      "Memberikan penjelasan tentang peran pemerintah Korea Selatan terhadap kelancaran suneung"
    ],
    "optionsHtml": [
      "Menjelaskan pentingnya <i>suneung</i> bagi masyarakat Korea Selatan",
      "Menginformasikan peran <i>suneung</i> bagi para pelajar yang ada di Korea Selatan",
      "Menjelaskan alasan pelajar di Korea Selatan belajar begitu keras demi lulus <i>suneung</i>",
      "Menunjukkan bahwa <i>suneung</i> pantas disebut sebagai salah satu ujian tersulit di dunia",
      "Memberikan penjelasan tentang peran pemerintah Korea Selatan terhadap kelancaran <i>suneung</i>"
    ],
    "answer": "A",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: A</b></p>\n<p>Soal menanyakan <b>tujuan penulisan teks</b>. Setiap teks dibuat dengan tujuannya masing-masing. Untuk menentukan tujuan penulisan teks, kita bisa melihatnya dari sikap yang ditunjukkan penulis dalam teks serta informasi yang disampaikannya. Untuk menentukan tujuan dari suatu teks, pembaca perlu memahami isi dari teks dan jenis teksnya terlebih dahulu.</p>\n<p>Teks dalam soal tersebut memiliki dua paragraf. <b>Paragraf 1</b> membahas <b>banyaknya pelajar di Korea Selatan yang belajar mati-matian setiap hari demi lulus <i>suneung</i></b>. Pada paragraf 1, penulis menyampaikan bahwa hal tersebut terjadi karena <i>suneung</i> dianggap sebagai penentu masa depan para pelajar di sana. Sementara itu, <b>paragraf 2</b> membahas <b><i>suneung</i> yang juga dianggap penting oleh pemerintah</b>. Pada paragraf 2, penulis menyebutkan berbagai kebijakan pemerintah Korea Selatan untuk mendukung kelancaran persiapan dan pelaksanaan <i>suneung</i>. Berdasarkan penjelasan tersebut, kita dapat menyimpulkan bahwa sebenarnya, teks tersebut merupakan <b>teks eksposisi</b>. Dalam teks tersebut, penulis hanya <b>menginformasikan bahwa <i>suneung</i> begitu penting bagi masyarakat Korea Selatan</b>.</p>\n<p class=\"ev no\"><b>Opsi B dan C tidak tepat</b> karena hanya memuat informasi pada paragraf 1.</p>\n<p class=\"ev no\"><b>Opsi D tidak tepat</b> karena bukti bahwa <i>suneung</i> pantas disebut sebagai salah satu ujian tersulit di dunia tidak dijelaskan dalam teks.</p>\n<p class=\"ev no\"><b>Opsi E tidak tepat</b> karena hanya memuat informasi pada paragraf 2.</p>\n<section class=\"box jawab\"><p><b>Jadi, pilihan jawaban yang tepat adalah A.</b></p></section>"
  },
  {
    "n": 16,
    "passage": "disabilitas",
    "text": "Teks di atas harus dipisahkan menjadi beberapa paragraf. Pengelompokan kalimat yang tepat adalah ....",
    "options": [
      "(1-2-3) dan (4-5-6-7-8-9)",
      "(1-2-3-4) dan (5-6-7-8-9)",
      "(1-2-3-4-5) dan (6-7-8-9)",
      "(1-2-3-4-5-6) dan (7-8-9)",
      "(1-2-3-4-5-6-7) dan (8-9)"
    ],
    "answer": "D",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: D</b></p>\n<p>Soal berkaitan dengan <b>kepaduan paragraf</b>. Salah satu syarat paragraf yang baik adalah hanya mengandung satu gagasan utama dan gagasan utama ini didukung oleh beberapa gagasan penjelas. Oleh sebab itu, untuk memisahkan teks di atas menjadi beberapa paragraf yang padu, kita perlu memahami isi teksnya secara menyeluruh.</p>\n<p>Teks di atas terdiri atas sembilan kalimat, tetapi memiliki beberapa gagasan utama sehingga tidak padu. <b>Gagasan utama yang pertama</b> terdapat pada <b>kalimat (1)</b> yang membahas <b>berita tentang penangkapan seorang penyandang disabilitas yang tidak memiliki tangan yang menghebohkan masyarakat Indonesia</b>. Kalimat (2) hingga (6) masih membahas berita tersebut.</p>\n<p>Sementara itu, <b>kalimat (7)</b> mulai membahas hal yang berbeda sebab mulai membahas <b>pelajaran yang bisa diambil dari penangkapan orang dengan disabilitas tersebut</b>. Informasi pada kalimat (8) dan (9) memperkuat penjelasan pada kalimat (7).</p>\n<p>Berdasarkan penjelasan tersebut, dapat disimpulkan bahwa pengelompokan kalimat yang tepat adalah <b>(1-2-3-4-5-6) dan (7-8-9)</b>.</p>\n<p class=\"ev no\"><b>Pilihan jawaban A, B, C, dan E tidak tepat</b> sebab pengelompokan ini akan membentuk paragraf yang tidak padu.</p>\n<section class=\"box jawab\"><p><b>Jadi, pilihan jawaban yang tepat adalah D.</b></p></section>"
  },
  {
    "n": 17,
    "passage": "disabilitas",
    "text": "Ilustrasi yang menunjukkan kondisi yang hampir serupa dengan hal yang dibahas dalam teks adalah ...",
    "options": [
      "Seorang yang mengidap sosiopat cenderung bersikap impulsif dan tidak memiliki kontrol emosi yang baik.",
      "Magnus Carlsen yang menjadi juara catur dunia saat ini ternyata memiliki IQ yang sangat tinggi, yakni mencapai angka 190.",
      "Orang-orang mengagumi G-Dragon karena ia tidak hanya dikenal sebagai seorang yang sangat jenius dalam bidang musik, tetapi ia juga dikenal sebagai ikon mode di Korea Selatan.",
      "Banyak masyarakat yang kecewa terhadap putusan hakim yang dianggap hanya memberikan hukuman ringan kepada koruptor yang telah merugikan negara sebesar 271 triliun rupiah.",
      "Masyarakat Amerika Serikat terkejut saat sebuah geng motor di sana menghancurkan arena pertarungan anjing dan menyelamatkan hewan-hewan malang tersebut dari pemiliknya yang kejam."
    ],
    "answer": "E",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: E</b></p>\n<p>Untuk menjawab soal ini, dibutuhkan konsep mengenai <b>hubungan analogi</b> antara permasalahan utama dalam teks dengan pernyataan dalam opsi jawaban. Hubungan analogi adalah hubungan perumpamaan yang terjalin di antara dua hal/kondisi karena adanya kesamaan sifat atau bentuk.</p>\n<p>Teks di atas terdiri atas sembilan kalimat, tetapi memiliki dua gagasan utama. <b>Gagasan utama yang pertama</b> membahas <b>berita tentang penangkapan seorang penyandang disabilitas yang tidak memiliki tangan yang menghebohkan masyarakat Indonesia</b>. Sementara itu, <b>gagasan utama kedua</b> membahas <b>pelajaran yang bisa diambil dari penangkapan orang dengan disabilitas tersebut</b>. Dalam teks, tepatnya pada kalimat-kalimat yang menjelaskan gagasan utama pertama, dijelaskan bahwa penyandang disabilitas yang dianggap masyarakat sebagai orang yang tidak berdaya itu ternyata bisa melakukan tindakan kriminal. Hal inilah yang kemudian dibahas dalam kalimat (7) yang menyebutkan bahwa kasus tersebut tentunya bisa menjadi pelajaran berharga bagi masyarakat dan menunjukkan bahwa masyarakat memang tidak boleh menilai orang berdasarkan kondisi fisiknya.</p>\n<p>Berdasarkan penjelasan tersebut, analogi yang mirip dengan kasus yang dijelaskan pada teks terdapat pada <b>opsi E</b>. Pada opsi ini, dijelaskan bahwa <b>masyarakat terkejut ketika salah satu geng motor justru melakukan tindakan terpuji</b>. Pasalnya, <b>geng motor umumnya dipandang masyarakat sebagai kelompok yang menyeramkan atau sering melakukan tindakan kriminal.</b> Artinya, dalam kedua kasus ini, terdapat hal yang dimiliki/dilakukan seseorang yang berbeda dari anggapan masyarakat.</p>\n<p class=\"ev no\"><b>Opsi A, B, C, dan D tidak tepat</b> karena tidak menunjukkan kasus yang sama atau mirip dengan yang dibahas dalam teks.</p>\n<p class=\"ev no\">Opsi A hanya menjelaskan karakteristik sosiopat, bukan menjelaskan karakter sosiopat yang ternyata berbeda dari anggapan kebanyakan orang.</p>\n<p class=\"ev no\">Opsi B dan C hanya menginformasikan keunggulan yang dimiliki Magnus Carlsen dan G-Dragon tanpa menyebutkan sesuatu hal negatif yang dilakukan mereka.</p>\n<p class=\"ev no\">Opsi D hanya menginformasikan kekecewaan masyarakat terhadap suatu putusan hukum yang dianggap tidak adil.</p>\n<section class=\"box jawab\"><p><b>Jadi, pilihan jawaban yang tepat adalah E.</b></p></section>"
  },
  {
    "n": 18,
    "passage": "disabilitas",
    "text": "Apakah hubungan yang terbentuk antara kalimat (5) dan (6)?",
    "options": [
      "Pemerian",
      "Penguatan",
      "Penyebaban",
      "Penyimpulan",
      "Pertentangan"
    ],
    "answer": "C",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: C</b></p>\n<p>Soal menanyakan <b>hubungan antarkalimat</b>. Kalimat-kalimat yang terdapat dalam suatu wacana harus disusun secara runtut agar membentuk suatu kesatuan. Salah satu hal yang menunjukkan hubungan antarkalimat ini adalah keberadaan konjungsi antarkalimat. Namun, jika tidak ada konjungsi antarkalimat, kita perlu menganalisis hubungan antarkalimat dengan memahami hubungan konteks kalimat-kalimat tersebut.</p>\n<p>Berikut ini adalah bunyi dari kalimat (5) dan (6).</p>\n<p><i>(5) Pelaku dengan disabilitas ternyata memanipulasi dan mengancam korban-korbannya agar tindakannya lancar. (6) Hal ini tentunya menggemparkan masyarakat yang menyangka bahwa orang itu tidak mungkin bisa melakukan apa yang dituduhkan kepadanya.</i></p>\n<p>Kalimat (5) menjelaskan bahwa pelaku dengan disabilitas yang ditangkap ternyata memanipulasi dan mengancam korban-korbannya demi melancarkan tindakannya. Sementara itu, kalimat (6) menjelaskan bahwa hal itu menggemparkan masyarakat. Frasa <i>hal itu</i> merujuk tindakan pelaku dengan disabilitas tersebut sehingga informasi pada kalimat (6) menjelaskan bahwa <b>tindakan manipulasi dan pengancaman dari pelaku disabilitas itu menggemparkan masyarakat</b>. Artinya, informasi yang ada di <b>kalimat (5) merupakan penyebab dari hal yang dibahas pada kalimat (6)</b>. Oleh sebab itu, hubungan antara kedua kalimat tersebut adalah <b>penyebaban</b>.</p>\n<p class=\"ev no\"><b>Pilihan jawaban A tidak tepat</b> karena informasi pada kalimat (6) tidak menjelaskan secara lebih detail bentuk manipulasi atau ancaman yang dilakukan pelaku.</p>\n<p class=\"ev no\"><b>Pilihan jawaban B tidak tepat</b> karena informasi pada kalimat (6) tidak memberikan bukti atau argumentasi yang menunjukkan bahwa pelaku benar-benar memanipulasi dan mengancam korbannya.</p>\n<p class=\"ev no\"><b>Pilihan jawaban D tidak tepat</b> sebab kalimat (6) tidak memberikan penyimpulan terkait informasi yang telah disampaikan pada kalimat (5).</p>\n<p class=\"ev no\"><b>Pilihan jawaban E tidak tepat</b> karena informasi pada kalimat (6) tidak bertentangan dengan informasi pada kalimat (5).</p>\n<section class=\"box jawab\"><p><b>Jadi, pilihan jawaban yang tepat adalah C.</b></p></section>"
  },
  {
    "n": 19,
    "passage": "disabilitas",
    "text": "Kata-kata yang tepat untuk mengisi bagian rumpang di kalimat (3) agar kalimatnya menjadi utuh adalah ....",
    "options": [
      "sedikit - polisi",
      "seluruh - polisi",
      "semua - orang",
      "sebagian - korban",
      "semua - masyarakat"
    ],
    "answer": "B",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: B</b></p>\n<p>Kita diminta untuk mencari <b>kata-kata yang tepat untuk mengisi bagian rumpang</b> pada suatu kalimat. Kata-kata ini harus membentuk struktur dan makna yang tepat sehingga diharapkan informasi pada kalimat tersebut dapat tersampaikan dengan mudah. Langkah awal adalah dengan menganalisis struktur kalimatnya terlebih dahulu agar kita memahami diksi yang dibutuhkan untuk membuat kalimatnya menjadi sempurna.</p>\n<p>Perhatikanlah struktur kalimat (3) berikut!</p>\n<p><i>Awalnya <b>(K)</b>, saat berita ini baru keluar <b>(K)</b>, hampir … masyarakat <b>(S)</b> menganggap <b>(P)</b> bahwa … melakukan kesalahan <b>(O)</b>.</i></p>\n<p>Bagian rumpang 1 terletak pada subjek. Subjek merupakan frasa nominal dengan kata <i>masyarakat</i> sebagai inti frasanya. Berdasarkan hubungan antara kata <i>hampir</i> dan <i>masyarakat</i>, kata yang tepat untuk mengisi <b>bagian rumpang 1 adalah <i>semua, seluruh,</i> atau <i>sebagian</i>.</b> Sementara itu, kata <i>sedikit</i> tidak tepat untuk mengisi bagian rumpang 1 sebab kata <i>hampir</i> sudah bermakna ‘kurang sedikit’.</p>\n<p>Bagian rumpang 2 termasuk bagian dari objek. Bagian objeknya merupakan klausa anak: <i>… <b>(S)</b> melakukan <b>(P)</b> kesalahan <b>(O)</b></i>. Jika kita memperhatikan informasi pada kalimat (4) yang menentang informasi pada kalimat (3), kita dapat menyimpulkan bahwa kata yang tepat untuk mengisi <b>bagian rumpang 2 adalah <i>polisi</i></b>, bukan <i>masyarakat</i> atau <i>korban</i>. Apabila bagian rumpang 2 diisi dengan <i>masyarakat</i> atau <i>korban</i>, informasi kalimat (3) menjadi tidak logis atau tidak sesuai dengan informasi yang disampaikan pada kalimat (4).</p>\n<p>Jika bagian rumpang tersebut diisi, informasi pada kalimat (3) akan menjadi lengkap:</p>\n<p><i>Awalnya <b>(K)</b>, saat berita ini baru keluar <b>(K)</b>, hampir <b>seluruh</b> masyarakat <b>(S)</b> menganggap <b>(P)</b> bahwa <b>polisi</b> melakukan kesalahan <b>(O)</b>.</i></p>\n<section class=\"box jawab\"><p><b>Jadi, pilihan jawaban yang tepat adalah B.</b></p></section>"
  },
  {
    "n": 20,
    "text": "Perhatikan data dalam bahasa Glekglekglek berikut ini.\n1. Kopi matcha iced bubblegum teh latte. : Ibu sudah membelikan ayah kopi kemarin.\n2. Jamu jus bubble kopi ba jigur mocha. : Ayah akan membeli teh di pasar hari ini.\n3. Ocha kopi bandrek bobagum teh mocha? : Apakah ibu membuatkan ayah bubur hari ini?\nBerdasarkan data tersebut, bagaimanakah cara yang paling tepat untuk mengungkapkan kalimat “Ayah tidak akan membuat teh besok” dalam bahasa Glekglekglek?",
    "html": "<div class=\"qp\"><b>Perhatikan data dalam bahasa Glekglekglek berikut ini.</b></div><div class=\"qp\">1. <i>Kopi matcha iced bubblegum teh latte.</i> : Ibu sudah membelikan ayah kopi kemarin.</div><div class=\"qp\">2. <i>Jamu jus bubble kopi ba jigur mocha.</i> : Ayah akan membeli teh di pasar hari ini.</div><div class=\"qp\">3. <i>Ocha kopi bandrek bobagum teh mocha?</i> : Apakah ibu membuatkan ayah bubur hari ini?</div><div class=\"qp\">Berdasarkan data tersebut, bagaimanakah cara yang paling tepat untuk mengungkapkan kalimat “Ayah tidak akan membuat teh besok” dalam bahasa Glekglekglek?</div>",
    "options": [
      "Kopi chai jus boba teh soda.",
      "Jamu kopi iced jus boba latte.",
      "Kopi chai jus boba jamu soda.",
      "Jamu chai jus boba kopi soda.",
      "Matcha chai jus boba teh soda."
    ],
    "answer": "D",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: D</b></p>\n<p>Bahasa Glekglekglek menggunakan sistem enkripsi simetris sehingga untuk memecahkan maknanya, kita perlu memeriksa kata-kata yang memiliki bentuk yang sama secara simetris. Pertama, analisis kata yang sama dalam tiap data di dalam bahasa Indonesia. Kedua, jika tidak ada lagi kata yang sama yang hadir di lebih dari satu data, gunakanlah analogi dengan melihat bentukan yang mirip.</p>\n<p>Ilustrasi memberikan kita tiga data. Dari ketiga data tersebut, ada beberapa kata yang sama, yaitu sebagai berikut.</p>\n<ul><li>Kata <i><b>kopi</b></i> berarti ‘ayah’.</li><li>Kata <i><b>teh</b></i> berarti ‘ibu’.</li><li>Kata <i><b>mocha</b></i> berarti ‘hari ini’.</li><li>Kata <i><b>bubble</b></i> bermakna ‘membeli’, sedangkan <i><b>boba</b></i> bermakna ‘membuat’. Jika ada akhiran <i>-kan</i> pada predikat verba bahasa Glekglekglek, kita harus menambahkan <i>-gum</i> di belakang katanya.</li></ul>\n<p>Berdasarkan data tersebut, kita bisa memahami lagi bahwa:</p>\n<ul><li>Pola kalimat dalam bahasa Glekglekglek adalah <b>O-Pel-P-S-K</b> atau <b>O-P-S-K</b>.</li><li>Letak pewatas frasa berada di depan inti frasanya.</li><li>Kata <i><b>jamu</b></i> berarti ‘teh’.</li><li>Kata <i><b>jus</b></i> berarti ‘akan’.</li><li>Kata <i><b>iced</b></i> berarti ‘sudah’.</li><li>Kata <i><b>latte</b></i> berarti ‘kemarin’.</li><li>Frasa <i><b>ba jigur</b></i> berarti ‘di pasar’.</li><li>Kata <i><b>ocha</b></i> berarti ‘apakah’.</li><li>Kata <i><b>bandrek</b></i> berarti ‘bubur’.</li></ul>\n<p>Dari glosarium tersebut, kita bisa menganalisis cara untuk mengungkapkan kalimat “Ayah tidak akan membuat teh besok” dalam bahasa Glekglekglek.</p>\n<p><i>Ayah <b>(S)</b> tidak akan membuat <b>(P)</b> teh <b>(O)</b> besok <b>(K)</b>.</i></p>\n<p>Susunan pola kalimat dalam bahasa Glekglekglek: <b>O-P-S-K</b></p>\n<p>Teh - tidak akan membuat - ayah - besok</p>\n<p><i><b>jamu</b></i> - … <i><b>jus boba</b></i> - <i><b>kopi</b></i> - …</p>\n<p>Berdasarkan informasi tersebut, kita dapat menyimpulkan bahwa jawaban yang paling tepat terdapat pada <b>opsi D:</b> <i><b>Jamu</b></i> (teh) <i><b>chai jus boba</b></i> (tidak akan membuat) <i><b>kopi</b></i> (ayah) <i><b>soda</b></i> (besok).</p>\n<p class=\"ev no\"><b>Opsi A salah</b> karena bermakna ‘ibu tidak akan membeli ayah besok’.</p>\n<p class=\"ev no\"><b>Opsi B salah</b> karena bermakna ‘sudah akan membeli teh ayah besok’.</p>\n<p class=\"ev no\"><b>Opsi C salah</b> karena bermakna ‘teh tidak akan membeli ayah besok’.</p>\n<p class=\"ev no\"><b>Opsi E salah</b> karena bermakna ‘ibu tidak akan membuat kopi besok’.</p>\n<section class=\"box jawab\"><p><b>Jadi, pilihan jawaban yang tepat adalah D.</b></p></section>"
  }
];

// Pembahasan untuk siswa = pembahasan guru (field explain). Kunci peta adalah nomor soal.
export const EXPLAIN_SISWA = Object.fromEntries(QUESTIONS.map((q) => [String(q.n), q.explain]));
