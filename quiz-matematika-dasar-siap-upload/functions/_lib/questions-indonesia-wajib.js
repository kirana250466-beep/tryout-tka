// Bank soal Bahasa Indonesia Wajib (quiz id "indw"): 30 soal berbasis teks bacaan, pilihan A sampai E.
// Dibuat dari dokumen "Soal Bahasa Indonesia No1-30" (soal, kunci jawaban, dan pembahasan).
//
// Format sama dengan questions-indonesia.js:
//   passage : kunci ke PASSAGES (teks bacaan yang dipakai bersama beberapa soal)
//   answer  : satu huruf, atau beberapa huruf berurutan untuk soal dengan lebih dari satu
//             jawaban benar (contoh "ACE"). Soal seperti itu otomatis tampil sebagai pilihan ganda kompleks.
//   explain : HTML pembahasan. HANYA tampil di mode guru (login "Ferdi").
//
// Quiz ini TIDAK punya pembahasan untuk siswa: quizzes.js tidak memberi parameter studentExplain,
// jadi siswa hanya melihat benar/salah setelah menjawab. Kunci dan pembahasan hanya dibaca server.
//
// Catatan penting:
//  - Soal 7, 14, 21, dan 26 di dokumen berbentuk tabel Ya/Tidak. Di website diubah menjadi pilihan ganda
//    kompleks (pilih semua pernyataan yang sesuai bacaan; soal 7: pilih semua yang salah). Penilaiannya setara:
//    benar hanya jika kelima pernyataan tepat.
//  - Soal 22: kunci mengikuti dokumen (A). Dokumen mencatat kunci sumber awal tertulis E, tetapi E justru ada
//    di bacaan sehingga tidak cocok dengan kata "kecuali". Catatan ini tampil di mode guru.
//  - Soal 13: opsi C di dokumen tertulis "Mehilangkan", diperbaiki menjadi "Menghilangkan".
//  - Soal 30: soal menyebut "paragraf pertama", padahal kata meteorologi ada di paragraf kedua (catatan ada
//    di dokumen sumber). Jawaban tetap D.
//  - Soal 14 memakai teks yang sama dengan soal 12 dan 13; soal 27 dan 28 memakai teks yang sama.

export const PASSAGES = {
  "brisbane": {
    "title": "Mencari Tempat Tinggal di Brisbane",
    "range": "1",
    "html": "<p>Adora Seroya tidak menyangka akan sangat sulit menemukan tempat tinggal ketika dia pindah ke Brisbane untuk bekerja. Pengalaman pertama perempuan asal Afrika Selatan di Australia malah disibukkan dengan perjuangan menemukan akomodasi di kawasan Brisbane yang tiada akhirnya. Padahal, ia telah bekerja di industri perhotelan yang sangat bergantung pada pekerja internasional.</p>"
  },
  "posca": {
    "title": "Posca, Minuman Anggur Terbuat dari Cuka dan Air Khusus Budak Romawi",
    "range": "2–4",
    "html": "<p><b>P1</b> Minuman anggur sudah ada sejak zaman kuni. Namun, yang pasti minuman anggur zaman modern seperti sekarang tentu berbeda. Salah satunya adalah posca, minuman anggur rakyat di Roma kuno dan Yunani sekitar abad kedua SM. Dikutip dari Ancient Pages, kata <i>posca</i> berasal dari bahasa Latin <i>potor</i> yang berarti “meminum”. Sementara dalam bahasa Yunani, <i>epoxos</i> yang memiliki arti sangat tajam. Posca merupakan adalah campuran medis yang dibuat dari anggur asam atau cuka. Minuman ini biasanya dijadikan pelepas dahaga dan penat bagi para prajurit, kelas bawah dan budak Romawi kuno.</p><p><b>P2</b> Fakta baru terungkap dari penelitian terkini yang menunjukkan bahwa posca sebenarnya merupakan minuman yang cukup menyehatkan. Hal ini lantaran minuman tersebut memiliki manfaat kesehatan karena mengandung vitamin C dan keasamannya yang kuat dengan mudah membunuh semua bakteri berbahaya. Selain itu, bahan-bahan yang terkandung dalam posca adalah tambahan bumbu penyedap dan rempah- rempah, terutama biji ketumbar, sehingga membuat rasa posca jauh lebih enak.</p><p><b>P3</b> Di Roma kuno, minum anggur murni dianggap biadab. Karena itu, konsentrat anggur dicampur air menjadi posca, dengan tingkat alkohol yang setara sekitar dua hingga tiga bir murah saat ini. Posca menjadi minuman yang sangat umum di antara kelas masyarakat yang lebih miskin karena harganya yang murah dan kandungan alkoholnya yang rendah.</p>"
  },
  "ayam": {
    "title": "Amerika Serikat, Konsumen Daging Ayam Terbesar di Dunia",
    "range": "5–7",
    "html": "<p><b>P1</b> (1) Makanan terpopuler saat ini adalah daging ayam. (2) Orang Amerika mencatat bahwa konsumsi daging ayam lebih tinggi daripada daging lain. (3) Andrew Lawler, jurnalis veteran dan penulis buku <i>Why Did the Chicken Cross the World: The Epic Saga of the Bird That Powers Civilization</i>, menjelaskan bahwa ayam goreng sekarang ini sebenarnya berasal dari Afrika. (4) Ia mengklaim bahwa hewan yang paling penting bagi penyebaran peradaban seluruh dunia adalah ayam. (5) Dia juga mengisahkan sejarah domestikasi ayam: dari ayam hutan di kawasan Asia Selatan sampai Asia Tenggara sekitar 10.000 tahun lalu, sampai menjadi spesies fleksibel yang mampu “melayani kebutuhan” makanan manusia. (6) Menurutnya, ayam yang hidup saat ini merupakan keturunan ayam hutan merah yang dikenal sangat pemalu, bahkan dapat mengalami kematian akibat serangan jantung ketika ditangkap karena tingkat stres yang tinggi.</p><p><b>P2</b> (7) Namun, para ilmuwan juga yakin kalau ayam pada mulanya tidak dibawa melintasi benua. (8) Dalam masyarakat kuno maupun budaya tradisi yang masih bertahan hingga kini, ayam memegang peranan penting, termasuk sebagai bagian dari fungsi sosial dan spiritual dari berbagai ritual keagamaan. (9) Menurut Lawyer, ayam sudah ada dan muncul di berbagai kebudayaan berbeda dalam seluruh sejarah umat manusia. (10) Pada buku itu juga dijelaskan mengenai terjalinnya relasi antarspesies, manusia dan ayam, yang digambarkan hubungan itu sukses, bersimbiosis mutualisme, sehingga evolusi ayam telah mendukung peradaban manusia.</p>"
  },
  "kerajaan": {
    "title": "Dokumenter Pangeran Harry dan Meghan",
    "range": "8",
    "html": "<p><b>P1</b> Istana Buckingham tidak memberikan tanggapan soal laporan tidak adanya anggota keluarga kerajaan dihubungi oleh produser yang membuat dokumenter terbaru, Pangeran Harry dan Megan Markle. Tiga episode awal dari keseluruhan enam episode telah ditayangkan secara global oleh Netflix pada hari Kamis.</p><p><b>P2</b> Pada bagian pertama disebutkan bahwa keluarga kerajaan memilih untuk tidak memberikan tanggapan maupun berpartisipasi dalam pembuatan dokumenter tersebut. “Ini adalah cerita mengenai kehidupan Harry dan Meghan, dari sumber- sumber pribadi yang belum pernah ditayangkan sebelumnya,” demikian kalimat pembuka di serial tersebut. “Semua wawancara diselesaikan pada bulan Agustus 2022.” “Anggota keluarga kerajaan menolak memberikan komentar mengenai isi dari seluruh tayangan.”</p>"
  },
  "basij": {
    "title": "Kasus Pembunuhan Anggota Basij di Iran",
    "range": "9",
    "html": "<p><b>P1</b> Seorang anggota pasukan paramiliter yang berafiliasi dengan Pengawal Revolusi Islam Iran dihukum atas tuduhan pembunuhan. Sebanyak sebelas terdakwa lainnya menerima sanksi pidana penjara, dengan durasi hukuman paling lama selama 25 tahun. Menurut laporan dari IRNA, kantor berita negara lain, tiga belas pria dan tiga anak di bawah umur dituduh membunuh Ruhollah Ajamian, anggota Basij, cabang sukarelawan paramiliter dari Garda Revolusi Iran (IRG).</p><p><b>P2</b> Dalam laporan tersebut, Masoud Setayeshi selaku juru bicara kehakiman menyampaikan tuduhan tanpa memberikan bukti pendukung yang memadai. Pembunuhan diduga terjadi pada 12 November, di Karaj, dekat Teheran ketika sekelompok pria mengejar dan menyerang Ajamian dengan pisau dan batu, menurut laporan itu.</p>"
  },
  "toraja": {
    "title": "Remaja Berdarah Indonesia Menang Lomba di Australia Setelah Menceritakan Tradisi Toraja",
    "range": "10–11",
    "html": "<p><b>P1</b> <i>Death is at the centre of life in Tana Toraja — this ritual is how they honour those who have passed.</i> Demikian bunyi sepenggal kalimat yang diceritakan Fasha Adriana, perempuan keturunan Toraja, yang tinggal di kawasan Endeavour Hills di Melbourne, Australia. Tulisannya soal ritual upacara adat kematian di Toraja telah memenangkan hati para juri hingga menobatkannya sebagai salah satu pemenang dalam program Takeover Melbourne 2022.</p><p><b>P2</b> Sebagai sebuah platform kreatif, Takeover Melbourne memberi kesempatan kepada ratusan anak muda dari seluruh Melbourne untuk mengungkapkan identitas mereka melalui cerita yang mereka sampaikan. Fasha menceritakan pengalamannya saat mengikuti upacara adat di Toraja di tahun 2013.</p><p><b>P3</b> Fasha menyatakan bahwa kematian sering dipandang sebagai isu yang sensitif dan tabu, tetapi melalui ceritanya ia berupaya menawarkan perspektif alternatif tentang perjalanan dan siklus kehidupan. “Hal ini penting untuk dibicarakan karena bagi kebanyakan orang, termasuk saya sendiri, kematian sering dilihat sebagai sesuatu yang suram dan mengerikan,” kata Fasha saat dihubungi Sani Riyana dari ABC Indonesia. “Apresiasi yang besar terhadap kebudayaan” menjadi alasan mengapa Fasha yang berusia 17 tahun ingin menceritakan bagaimana kematian diperingati kepada warga Australia. “Saya sangat bangga bisa menjadi bagian dari kebudayaan ini,” katanya.</p>"
  },
  "opium": {
    "title": "Petani Bunga Australia Berurusan dengan Polisi Karena Tak Sengaja Tanam Opium",
    "range": "12–14",
    "html": "<p><b>P1</b> Ketika menanam biji tanaman poppy beberapa waktu lalu, Kate Dixon tidak menyangka malah akan mengundang satuan anti narkoba ke kebunnya di pinggiran kota Hobart, Tasmania. Selama ini Kate mengelola perkebunan bunga <b><i>komersial</i></b>, yang dipasok ke toko-toko bunga. Setiap musim semi seperti saat ini, kebunnya dipenuhi berbagai jenis bunga, baik bunga khas Australia maupun bunga yang berasal dari Afrika Selatan.</p><p><b>P2</b> Kate menanam bunga poppy berwarna merah muda di salah satu sudut kebunnya pada tahun ini. Namun betapa kagetnya Kate ketika aparat dari Departemen Lingkungan Hidup Tasmania menghubungi dirinya karena jenis tanaman itu dilarang untuk dibudidayakan. “Saya ditelepon oleh mereka yang melaporkan melihat foto-foto tanaman di akun Instagram saya. Mereka menduga ini bunga poppy terlarang, yang memerlukan izin untuk ditanam di Tasmania,” ujar Kate.</p><p><b>P3</b> “Saya menanamnya murni untuk acara pernikahan. Saya sama sekali tidak tahu,” ujarnya. Kate mengaku membeli bibit tanaman dari pemasok benih Australia yang terdaftar. Seorang petugas Departemen Lingkungan Hidup Tasmania datang ke kebun Kate untuk memeriksa tanaman tersebut dan mengambil sampel untuk diuji. Hasilnya menunjukkan Kate secara tidak sengaja menanam dua spesies opium yang dilarang, yaitu <i>Papaver somniferum</i> dan <i>Papaver bracteatum</i>. Bunga poppy jenis ini ditanam secara komersial di Tasmania dengan pengawasan ketat untuk mengekstrak bahan alkaloid yang dikandungnya termasuk morfin, tebain, dan kodein untuk digunakan dalam obat-obatan.</p>"
  },
  "twitter": {
    "title": "Giliran Ratusan Karyawan Twitter Memilih Keluar karena Diminta Bekerja Lebih Lama",
    "range": "15–16",
    "html": "<p><b>P1</b> Menyusul ultimatum yang diberikan oleh pemilik baru Twitter, Elon Musk, diperkirakan ratusan karyawan akan meninggalkan perusahaan tersebut. Elon meminta karyawannya untuk mau bekerja “bekerja lebih lama dengan intensitas tinggi” atau pilihan lainnya adalah keluar. Sebanyak 42 persen pekerja Twitter memilih untuk “mengambil opsi keluar, saya bebas!”, dalam jajak pendapat menggunakan aplikasi Blind.</p><p><b>P2</b> Aplikasi tersebut memverifikasi karyawan menggunakan email kantor mereka, sekaligus memungkinkan pengguna untuk berbagi informasi secara anonim. Seperempat memilih untuk tetap bekerja, “enggan”, dan hanya tujuh persen yang memilih “ya untuk tetap tinggal, saya hardcore”. Dua sumber mengatakan kantor Twitter akan ditutup dan menghentikan akses bagi karyawannya sampai Senin (21/11).</p>"
  },
  "covid": {
    "title": "COVID Varian Campuran Menyebar di Asia Termasuk Indonesia",
    "range": "17–18",
    "html": "<p><b>P1</b> Penyebaran COVID-19 varian campuran yang dikenal dengan Varian XXB kini dialami sejumlah negara di Asia termasuk Indonesia. Menjelang musim liburan Natal dan Tahun baru, kasusnya diprediksi meningkat. Pemerintah Indonesia melaporkan tambahan 7.822 kasus positif pada Kamis (17/11/2022), sehingga total kasus sejak Maret 2020 mencapai 6.590.113, dengan 6.370.351 orang telah dinyatakan sembuh.</p><p><b>P2</b> Disebutkan, saat ini tercatat 60.471 kasus aktif, dan 38 pasien meninggal kemarin, menjadikan total kematian 159.291 orang. Pakar kesehatan masyarakat dari Australian National University, Sanjaya Senanayake, mengatakan bahwa varian XXB merupakan gabungan subvarian yang bersaing untuk menjadi dominan. “Semuanya masih Omicron, tapi subvariannya baru. Jadi mereka akan menantang sistem kekebalan tubuh kita, dan saya memprediksi terjadinya peningkatan kasus,” kata Dr Senanayake kepada ABC News. “Tapi karena kekebalan hibrida kita, ini akan menjadi penularan gelombang pendek dan hal jumlah kasus dan rawat inap,” tambahnya.</p>"
  },
  "kalimat19": {
    "title": "Kalimat untuk Soal 19",
    "range": "19",
    "html": "<p>Telah <b><i>diprediksikan</i></b> bahwa bukan hanya universitas yang besar yang membangun kehadirannya di daerah.</p>"
  },
  "kalimat20": {
    "title": "Kalimat untuk Soal 20",
    "range": "20",
    "html": "<p>Film tersebut sukses karena menyajikan alur cerita <i>sensasional</i> yang tidak terduga.</p>"
  },
  "ukraina": {
    "title": "Tak Akan Berhenti Bahkan Saat Natal, Rusia Bakal Gempur Ukraina Habis-habisan",
    "range": "21",
    "html": "<p><b>P1</b> Pada Kamis (15/12/2022), seorang Jenderal Ukraina menyatakan bahwa Moskwa sedang berjuang untuk menghadapi perang panjang yang hendak menaklukkan seluruh Ukraina. Pasukan Rusia terus menggempur dua kota strategis, sementara pasukan Kyiv menembaki Donetsk yang dikuasai Rusia di timur. Dilansir dari Reuters, kedua belah pihak telah mengesampingkan gencatan senjata dan saat ini tidak ada pembicaraan untuk mengakhiri konflik terbesar di Eropa sejak Perang Dunia Kedua yang telah berlangsung hampir 10 bulan.</p><p><b>P2</b> Penembakan Rusia menewaskan dua orang di pusat Kherson, kota selatan yang dibebaskan oleh Ukraina bulan lalu, kata Kyrylo Tymoshenko, wakil kepala kantor presiden. Penembakan tersebut juga mengakibatkan padamnya listrik kota. Pasukan Rusia menyerang infrastruktur penting di timur laut kota Kharkiv, menyebabkan beberapa ledakan, tulis wali kotanya, Ihor Terekhov, di aplikasi Telegram.</p><p><b>P3</b> Pada hari Kamis, Alexei Kulemzin, walikota Donetsk yang dilantik Rusia, mengatakan bahwa Ukraina telah menembakkan 40 roket dari beberapa peluncur roket BM-21 Grad ke kota tersebut. Dia mengatakan itu sebagai serangan terberat di sana sejak 2014, ketika separatis yang didukung Rusia merebutnya dari kendali Kyiv.</p>"
  },
  "iptek": {
    "title": "IPTEK",
    "range": "22",
    "html": "<p><b>P1</b> Ilmu Pengetahuan dan Teknologi (IPTEK) modern adalah salah satu bagian dari peradaban manusia yang hadir dan memasuki percaturan politik ketika Isaac Newton membacakan buku <i>Principia Philosophia Mathematica</i> kepada anggota <i>Royal Society of London</i> pada 28 April 1686. Mulai saat itu, perkembangannya melesat begitu cepat, hingga menyebabkan timbulnya revolusi industri di Inggris, dan kemudian menyebar ke kawasan Eropa daratan dan Amerika. Hingga saat ini, di akhir abad XX, IPTEK modern telah mengalami perkembangan yang jauh lebih pesat.</p><p><b>P2</b> Begitu besarnya pengaruh perkembangan IPTEK modern terhadap kemajuan peradaban umat manusia, ditambah dengan fakta bahwa ilmu pengetahuan dan teknologi (IPTEK) modern memiliki sifat yang universal, hal tersebut mampu diterima oleh masyarakat Indonesia dengan mudah. Bahkan, karena dianggap bermanfaat untuk meningkatkan martabat kemanusiaan serta berperan sebagai sarana paling representatif dalam mengejar ketertinggalan Indonesia dari negara maju lainnya, pengembangan Ilmu pengetahuan dan Teknologi (IPTEK) pun menjadi prioritas pada aspek pembangunan.</p>"
  },
  "selundup": {
    "title": "Pura-pura Hamil, Wanita Tertangkap Menyelundupkan 200 Prosesor Intel dan iPhone",
    "range": "23–26",
    "html": "<p>(1) Seorang wanita mencoba mengelabui petugas bea cukai dengan mengatakan bahwa dirinya sedang hamil. (2) Padahal, wanita tersebut berupaya menyelundupkan ratusan prosesor Intel dan iPhone dengan mengikatnya di perut dan dibalut alat prostetik. (3) Insiden ini terjadi di China. Wanita tersebut tertangkap berbohong saat melewati pemeriksaan bea cukai di pelabuhan Gongpei di Zhuhai, China. (4) Awalnya, wanita itu masuk dari Makau pada 25 November. (5) Namun saat melewati pemeriksaan, petugas bea cukai mencurigai postur tubuhnya yang dinilai tak normal. (6) Ketika ditanya, wanita itu berkata dirinya sedang hamil sekitar 5-6 bulan. (7) Petugas tak percaya begitu saja, karena menurutnya perut wanita itu terlalu besar untuk usia kehamilan tersebut. (8) Dalam skenario normal, memang tidak seharusnya mengamati penampilan wanita hamil karena dianggap kurang etis. (9) Akhirnya, petugas bea cukai memakai mesin inspeksi, wanita itu ketahuan tidak benar-benar sedang hamil. Ia justru menggunakan alat prostetik di tubuhnya, yaitu alat yang menyerupai anggota tubuh. (10) Dalam kasus tersebut, wanita itu memakai alat prostetik perut berbahan silikon untuk membalut dan menyembunyikan 202 prosesor Intel serta sembilan iPhone.</p>"
  },
  "digital": {
    "title": "Pentingnya Digitalisasi di Sektor Pelayaran RI",
    "range": "27–28",
    "html": "<p>(1) Sektor digitalisasi perlu diadaptasi oleh semua sektor guna menjaga kinerja dan kelangsungan usaha. (2) Hal itu dilakukan juga oleh pemerintah di sektor kelautan dan pelayaran. (3) Direktur Jenderal Perhubungan Laut Kementerian Perhubungan Arif Toha menjelaskan, dengan digitalisasi, pelayanan terhadap kapal mulai dari masuk pelabuhan, sandar, bongkar muat dan keluar dari pelabuhan dapat dengan mudah diproses dan diawasi. (4) Digitalisasi dipilih menjadi cara paling efektif untuk meningkatkan pelayanan, menjawab tantangan bisnis maritim secara global, serta mendukung kelestarian lingkungan melalui kegiatan operasional yang bersih dan efisien. (5) Hal tersebut disampaikan Direktur Jenderal Perhubungan Laut, Arif Toha saat membuka Rapat Koordinasi Teknis (Rakornis) Bidang Lalu Lintas dan Angkutan Laut Tahun 2022 yang mengusung tema “Layanan Digital Hadapi Tantangan Global” dalam keterangannya ditulis Kamis (8/12/2022). (6) Dia menyatakan, digitalisasi dinilai tidak terlepas dari aspek lain yang tak kalah penting di sektor bisnis pelayaran. (7) Digitalisasi perlu didukung dengan hal mengenai tarif petikemas, standar layanan penumpang, pengelolaan kapal milik negara, kebijakan operasional kapal pesiar domestik, hingga kegiatan bongkar muat di pelabuhan, tambahnya.</p>"
  },
  "meratus": {
    "title": "Kehidupan Masyarakat Desa Hinas",
    "range": "29",
    "html": "<p>(1) Saat matahari terbit di Batu Kambar, Desa Hinas Kiri, Kecamatan Batang Alai Timur, Kabupaten Hulu Sungai Tengah, Kalimantan Selatan, ratusan warga keluar rumah. (2) Ada yang langsung pergi ke <i>pahumaan</i> (ladang), ada yang pergi ke pasar, ada pula yang berangkat ke sekolah. (3) Warga di daerah pedalaman Pegunungan Meratus memiliki kebiasaan bangun pagi, karena mereka juga sudah terbiasa tidur sore akibat ketiadaan akses listrik. (4) Karena itu, aktivitas pagi di Pegunungan Meratus betul-betul menggeliat dan dinamis. (5) Hari itu kebetulan adalah Hari Pasar Tradisional yang diselenggarakan sekali dalam sepekan. (6) Masyarakat dari berbagai balai adat Dayak Meratus, yang jarak tempuhnya mencapai 18 jam dengan jalan kaki, beramai-ramai ke pasar untuk membeli keperluan hidup “modern”, mulai dari bahan pangan, sandang, hingga papan. (7) Tradisionalisme yang dimulai dari cara makan, mandi, berinteraksi, hingga pandangan hidup benar-benar masih melekat hingga menjadi identitas warga daerah. (8) Seiring berjalannya waktu, keterpencilan wilayah pedalaman memang mulai mudah dijangkau, tetapi kehidupan yang alami tetap melekat hingga saat ini. (9) Seperti di hulu Sungai Selatan atau Sungai Tengah yang mempunyai komunitas adat terbesar di Kalimantan Selatan. (10) Tradisionalisme di satu sisi menjadi kebanggaan, tetapi di sisi lain menyisakan pertanyaan akan capaian sebuah kesejahteraan masyarakat.</p>"
  },
  "cuaca": {
    "title": "Cuaca Dingin Inggris Bisa sampai Minus 6 Derajat Celsius",
    "range": "30",
    "html": "<p><b>P1</b> <i>Met Office</i> Inggris mengeluarkan peringatan kuning untuk es dan salju setiap hari dalam minggu ini. Dilansir dari Sky News, peringatan cuaca kuning tersebut berlaku untuk beberapa bagian Utara dan Skotlandia. Mereka memperingatkan bahwa hujan salju dan permukaan es akan menganggu perjalanan di Inggris.</p><p><b>P2</b> Kantor badan <b><i>meteorologi</i></b> telah mengeluarkan peringatan bahwa salju akan membawa cuaca dingin dan membekukan bagi sebagian besar warga di Inggris, pada Selasa pagi (13/12/2022), ditambah dengan salju yang akan menutupi banyak bagian negara. Kemudian, hamparan salju dan lapisan es akan mengakibatkan kondisi perjalanan yang sulit, es dan kabut di Irlandia Utara, dan salju dan es di Skotlandia. Dengan prediksi salju di Skotlandia utara dan timur laut Inggris, berikut adalah gambaran suhu yang dapat dialami wilayah di Inggris Raya dalam beberapa hari mendatang.</p><p><b>P3</b> Di London, suhu diperkirakan sekitar 3°C pada siang hari dan bisa turun hingga -2C pada malam hari besok. Sementara itu, Manchester bisa melihat suhu turun ke −6°C pada hari Kamis (15/12/2022). Di Edinburgh, suhu bisa turun hingga −4°C pada Kamis pekan ini. Dan di Cardiff, suhu juga diperkirakan akan dingin, dengan prediksi −1°C untuk hari Kamis.</p>"
  }
};

export const QUESTIONS = [
  {
    "n": 1,
    "passage": "brisbane",
    "text": "Sinonim dari kata “akomodasi” sesuai dengan bacaan di atas adalah…",
    "options": [
      "Tempat tinggal sementara",
      "Rumah tangga",
      "Tempat sementara",
      "Tempat wisata",
      "Tempat berteduh"
    ],
    "answer": "A",
    "explain": "<p class=\"keystatus ok\"><b>Kunci: A</b></p>\n<section class=\"box rumus\"><h4>Pembahasan</h4><p>Cari kata <i>akomodasi</i> di teks: “…perjuangan menemukan <b>akomodasi</b> di kawasan Brisbane yang tiada akhirnya.” Kalimat sebelumnya menyebut Adora kesulitan <b>menemukan tempat tinggal</b> ketika pindah ke Brisbane untuk bekerja. Jadi akomodasi berarti tempat tinggal.</p><p>Menurut KBBI, akomodasi adalah sesuatu yang disediakan untuk memenuhi kebutuhan, misalnya tempat menginap atau tempat tinggal sementara bagi orang yang bepergian. Padanan yang paling tepat adalah <b>tempat tinggal sementara</b> (pilihan A).</p><p>Pilihan lain kurang tepat: <i>rumah tangga</i> berarti urusan atau keluarga dalam rumah, bukan tempat; <i>tempat sementara</i> terlalu umum dan tidak jelas untuk apa; <i>tempat wisata</i> adalah tempat berlibur; <i>tempat berteduh</i> berarti tempat berlindung dari hujan atau panas, bukan tempat tinggal selama bekerja.</p></section>"
  },
  {
    "n": 2,
    "passage": "posca",
    "text": "Pernyataan yang tidak relevan dari teks di atas adalah…",
    "options": [
      "Posca memiliki manfaat kesehatan dengan vitamin C dan membunuh bakteri berbahaya",
      "Masyarakat Roma kuno menganggap anggur murni sebagai aktivitas yang beradab",
      "Minuman anggur zaman modern berbeda dengan zaman kuno",
      "Kandungan alkohol dalam posca lebih rendah dibandingkan minuman beralkohol lainnya",
      "Posca menjadi minuman yang umum dikonsumsi masyarakat miskin"
    ],
    "answer": "B",
    "explain": "<p class=\"keystatus ok\"><b>Kunci: B</b></p>\n<section class=\"box rumus\"><h4>Pembahasan</h4><p>Perhatikan kata <b>tidak relevan</b>: yang dicari adalah pernyataan yang <b>tidak sesuai dengan isi teks</b>. Cocokkan tiap pilihan dengan teks:</p><p>A – sesuai. Paragraf 2 menyebut posca bermanfaat bagi kesehatan karena mengandung vitamin C dan keasamannya kuat sehingga membunuh bakteri berbahaya.</p><p>B – <b>tidak sesuai</b>. Teks mengatakan bahwa di Roma kuno minum anggur murni dianggap <b>biadab</b> (kasar, tidak beradab). Pilihan B malah menyebutnya “beradab”, jadi berlawanan dengan teks.</p><p>C – sesuai. Paragraf 1 menyebut minuman anggur zaman modern tentu berbeda dengan zaman dahulu.</p><p>D – sesuai. Paragraf 3 menyebut kadar alkohol posca setara dua sampai tiga bir murah, jadi tergolong rendah.</p><p>E – sesuai. Paragraf 3 menyebut posca sangat umum di kalangan masyarakat miskin karena murah dan alkoholnya rendah.</p></section>"
  },
  {
    "n": 3,
    "passage": "posca",
    "text": "Sinonim yang tepat untuk kata “dahaga” pada paragraf pertama teks di atas adalah…",
    "options": [
      "Kenyang",
      "Haus",
      "Sedikit",
      "Dingin",
      "Penuh"
    ],
    "answer": "B",
    "explain": "<p class=\"keystatus ok\"><b>Kunci: B</b></p>\n<section class=\"box rumus\"><h4>Pembahasan</h4><p>Lihat kalimat di paragraf pertama: “Minuman ini biasanya dijadikan pelepas <b>dahaga</b> dan penat…” Artinya, minuman itu dipakai untuk menghilangkan rasa ___ dan lelah.</p><p><i>Dahaga</i> berarti <b>haus</b>, yaitu rasa kering di kerongkongan dan ingin minum (menurut KBBI). Karena itu padanannya adalah <i>haus</i> (pilihan B).</p><p>Pilihan lain artinya berbeda: <i>kenyang</i> = perut penuh setelah makan, <i>sedikit</i> = jumlahnya kecil, <i>dingin</i> = suhu rendah, <i>penuh</i> = tidak ada ruang tersisa.</p></section>"
  },
  {
    "n": 4,
    "passage": "posca",
    "text": "Di dalam teks terdapat pernyataan “Ada fakta baru terungkap yang menunjukkan penelitian terbaru bahwa posca sebenarnya cukup sehat untuk dikonsumsi.” Dari pilihan pernyataan di bawah ini, yang termasuk penjelas yang tepat untuk pernyataan di atas adalah…",
    "options": [
      "Hal ini lantaran minuman tersebut memiliki manfaat kesehatan karena mengandung vitamin C dan keasamannya yang kuat dengan mudah membunuh semua bakteri berbahaya.",
      "Minuman ini umumnya dikonsumsi oleh prajurit, masyarakat kelas bawah, dan budak pada masa Romawi Kuno untuk menghilangkan dahaga serta mengurangi kelelahan.",
      "Minuman ini biasanya dijadikan pelepas dahaga dan penat bagi para prajurit, kelas bawah dan budak Romawi kuno.",
      "Di samping bahan utamanya, posca turut diperkaya dengan sejumlah bumbu penyedap dan rempah-rempah, khususnya biji ketumbar, sehingga menghasilkan rasa yang lebih enak.",
      "Minum anggur murni dianggap biadab di Roma kuno"
    ],
    "answer": "A",
    "explain": "<p class=\"keystatus ok\"><b>Kunci: A</b></p>\n<section class=\"box rumus\"><h4>Pembahasan</h4><p>“Penjelas” adalah kalimat yang <b>menerangkan alasan atau rincian</b> dari sebuah pernyataan. Pernyataan di soal berbunyi: posca ternyata cukup sehat untuk dikonsumsi. Jadi penjelasnya harus berisi <b>alasan mengapa posca sehat</b>.</p><p>Teks langsung menjawabnya di kalimat yang diawali “<i>Hal ini lantaran…</i>”. Kata <i>lantaran</i> berarti “karena”. Alasannya: posca mengandung vitamin C dan keasamannya yang kuat dapat membunuh bakteri berbahaya. Itulah pilihan A.</p><p>Pilihan lain tidak menjelaskan mengapa posca sehat:</p><p>B dan C – menjelaskan siapa yang biasa meminumnya dan untuk apa (melepas haus dan lelah).</p><p>D – menjelaskan bumbu dan rempah yang membuat rasanya lebih enak.</p><p>E – menjelaskan bahwa minum anggur murni dianggap biadab di Roma kuno.</p></section>"
  },
  {
    "n": 5,
    "passage": "ayam",
    "text": "Fakta tentang ayam yang terdapat pada kalimat…",
    "options": [
      "kalimat (5) paragraf pertama",
      "kalimat (7) paragraf kedua",
      "kalimat (1) paragraf pertama",
      "kalimat (3) paragraf pertama",
      "kalimat (9) paragraf kedua"
    ],
    "answer": "A",
    "explain": "<p class=\"keystatus ok\"><b>Kunci: A</b></p>\n<section class=\"box rumus\"><h4>Pembahasan</h4><p><b>Fakta</b> adalah hal yang benar-benar terjadi dan bisa dibuktikan, misalnya lewat data, angka, tahun, atau tempat. <b>Opini</b> (pendapat) adalah penilaian atau keyakinan seseorang, biasanya ditandai kata seperti “menurut”, “yakin”, atau “terpopuler”.</p><p>Kalimat (5) menceritakan sejarah domestikasi ayam: dari ayam hutan di Asia Selatan sampai Asia Tenggara sekitar 10.000 tahun lalu hingga menjadi ayam yang dikonsumsi manusia. Ada <b>waktu (10.000 tahun lalu) dan tempat (Asia Selatan hingga Asia Tenggara)</b> yang bisa dibuktikan, sehingga ini adalah fakta (pilihan A).</p><p>Pilihan lain lebih bersifat pendapat atau klaim seseorang:</p><p>B – kalimat (7) berisi keyakinan para ilmuwan (“yakin kalau…”).</p><p>C – kalimat (1) memakai kata “terpopuler”, yaitu penilaian, bukan angka yang dibuktikan.</p><p>D – kalimat (3) berisi penjelasan dari satu orang, yaitu penulis buku Andrew Lawler, tentang asal ayam goreng; ini klaim pribadi seorang penulis.</p><p>E – kalimat (9) diawali “Menurut Lawyer…”, tanda bahwa itu pendapat seseorang.</p></section>"
  },
  {
    "n": 6,
    "passage": "ayam",
    "text": "Menurut informasi dalam teks, faktor apa yang membuat ayam memiliki popularitas yang berkelanjutan dalam peradaban manusia hingga masa kini?",
    "options": [
      "Berperan penting dalam tradisi masyarakat",
      "Memiliki hubungan mutualistis dengan manusia",
      "Ayam mudah diternakkan",
      "Ayam mudah dijinakkan daripada unggas liar lain",
      "Perkembangan peradaban manusia didukung oleh ayam"
    ],
    "answer": "A",
    "explain": "<p class=\"keystatus ok\"><b>Kunci: A</b></p>\n<section class=\"box rumus\"><h4>Pembahasan</h4><p>Soal menanyakan faktor yang membuat ayam <b>tetap populer sampai sekarang</b>. Cari bagian teks yang menyebut hal yang masih berlaku hingga kini. Kalimat (8) berbunyi: “Dalam masyarakat kuno maupun budaya tradisi yang <b>masih bertahan hingga kini</b>, ayam memegang peranan penting, termasuk sebagai bagian dari fungsi sosial dan spiritual dari berbagai ritual keagamaan.”</p><p>Artinya, sejak dulu hingga sekarang ayam punya <b>peran penting dalam tradisi masyarakat</b> (misalnya dalam ritual keagamaan), sehingga ayam tetap dipakai dan dikenal. Itulah pilihan A.</p><p>Pilihan lain kurang tepat:</p><p>B – hubungan saling menguntungkan (mutualisme) memang disebut, tetapi teks tidak menghubungkannya dengan bertahannya popularitas ayam hingga kini; yang disebut “masih bertahan hingga kini” adalah tradisi.</p><p>C dan D – teks tidak mengatakan ayam mudah diternakkan atau lebih mudah dijinakkan daripada unggas liar lain. Teks malah menyebut ayam hutan merah sangat pemalu.</p><p>E – perkembangan peradaban yang didukung ayam adalah akibat dari hubungan manusia dan ayam, bukan penyebab popularitasnya.</p></section>"
  },
  {
    "n": 7,
    "passage": "ayam",
    "text": "Perhatikan pernyataan-pernyataan berikut berdasarkan teks. Pilih semua pernyataan yang salah.",
    "options": [
      "Evolusi ayam dan peradaban manusia bersifat saling menguntungkan.",
      "Ayam yang saat ini diternakkan untuk memenuhi kebutuhan manusia merupakan keturunan dari ayam hutan merah.",
      "Ayam muncul dalam kehidupan masyarakat yang hanya berada di wilayah Asia.",
      "Salah satu hewan yang memberikan kontribusi penting bagi kehidupan manusia adalah ayam",
      "Ayam dari Afrika pertama kali dibudidayakan manusia 10.000 tahun lalu."
    ],
    "answer": "CE",
    "explain": "<p class=\"keystatus ok\"><b>Kunci: C · E</b> · Ada 2 jawaban benar · Pilih Semua</p>\n<section class=\"box catatan\"><h4>Bentuk soal di website</h4><p>Di dokumen sumber soal ini berupa tabel Ya/Tidak. Di website diubah menjadi pilihan ganda kompleks: siswa memilih semua pernyataan yang <b>salah</b>. Soal dianggap benar hanya jika semua pernyataan tepat.</p></section>\n<section class=\"box rumus\"><h4>Pembahasan</h4><p>Soal meminta pernyataan yang <b>salah</b> menurut teks. Caranya: cocokkan tiap pernyataan dengan isi teks, lalu tandai mana yang benar dan mana yang salah.</p><p>1 – <b>Benar.</b> Teks menyebut hubungan manusia dan ayam bersifat saling menguntungkan (mutualisme), sehingga evolusi ayam mendukung peradaban manusia.</p><p>2 – <b>Benar.</b> Ayam yang kini diternakkan adalah keturunan ayam hutan merah (kalimat 6).</p><p>3 – <b>Salah.</b> Ayam muncul dalam berbagai kebudayaan di seluruh sejarah manusia (kalimat 9), termasuk Afrika, Asia Selatan, hingga Asia Tenggara, bukan hanya di Asia.</p><p>4 – <b>Benar.</b> Kalimat (4) menyebut ayam sebagai hewan paling penting bagi penyebaran peradaban di seluruh dunia.</p><p>5 – <b>Salah.</b> Yang pertama dibudidayakan sekitar 10.000 tahun lalu adalah ayam hutan di kawasan Asia Selatan hingga Asia Tenggara, bukan ayam dari Afrika.</p><p>Jadi, pernyataan yang salah adalah nomor <b>3</b> dan nomor <b>5</b>.</p></section>"
  },
  {
    "n": 8,
    "passage": "kerajaan",
    "text": "Respon yang diberikan oleh keluarga kerajaan berdasarkan teks di atas adalah…",
    "options": [
      "Memberikan dukungan tayangan dokumenter kepada Netflix",
      "Mencabut hak siar dengan Netflix",
      "Menolak memberikan tanggapan atas dokumenter Netflix",
      "Membenarkan pernyataan Pangeran Harry dan Megan Markle",
      "Memblokir hubungan dengan Pangeran Harry"
    ],
    "answer": "C",
    "explain": "<p class=\"keystatus ok\"><b>Kunci: C</b></p>\n<section class=\"box rumus\"><h4>Pembahasan</h4><p>Soal menanyakan <b>tanggapan keluarga kerajaan</b> terhadap dokumenter. Jawabannya ada di awal teks: “Istana Buckingham tidak memberikan tanggapan…”. Di paragraf kedua juga disebut bahwa keluarga kerajaan memilih tidak memberikan tanggapan maupun berpartisipasi, dan “menolak memberikan komentar” mengenai isi tayangan.</p><p>Jadi respons mereka adalah <b>menolak memberikan tanggapan</b> atas dokumenter Netflix (pilihan C).</p><p>Pilihan lain tidak disebut di teks: mendukung tayangan (A), mencabut hak siar (B), membenarkan pernyataan Harry dan Meghan (D), atau memblokir hubungan dengan Pangeran Harry (E). Yang ada hanyalah sikap diam dan menolak berkomentar.</p></section>"
  },
  {
    "n": 9,
    "passage": "basij",
    "text": "Menurut informasi yang terdapat dalam teks, Ruhollah Ajamian merupakan …",
    "options": [
      "Anggota pasukan paramiliter yang berafiliasi dengan Pengawal Revolusi Islam Iran",
      "Penyerang yang menggunakan pisau dan batu",
      "Pelaku pembunuhan terhadap anggota pasukan paramiliter Iran",
      "Penerima vonis mati atas tuduhan pembunuhan",
      "Seorang saksi yang mengetahui peristiwa pembunuhan di Karaj, kota yang terletak tidak jauh dari Teheran."
    ],
    "answer": "A",
    "explain": "<p class=\"keystatus ok\"><b>Kunci: A</b></p>\n<section class=\"box rumus\"><h4>Pembahasan</h4><p>Soal menanyakan siapa Ruhollah Ajamian menurut teks. Cari namanya: “…dituduh membunuh Ruhollah Ajamian, <b>anggota Basij, cabang sukarelawan paramiliter</b> dari Garda Revolusi Iran (IRG).”</p><p>Artinya, Ajamian adalah anggota Basij, yaitu pasukan paramiliter (kelompok bersenjata di luar tentara resmi) yang berafiliasi dengan Pengawal Revolusi Islam Iran. Itu sesuai pilihan A. Dalam kasus ini ia adalah <b>korban</b> yang dibunuh.</p><p>Pilihan lain kurang tepat:</p><p>B dan C – penyerang atau pelaku adalah sekelompok pria yang dituduh; Ajamian justru korbannya.</p><p>D – teks menyebut hukuman penjara paling lama 25 tahun, bukan vonis mati, dan itu bukan untuk Ajamian.</p><p>E – Ajamian bukan saksi, melainkan orang yang diserang.</p></section>"
  },
  {
    "n": 10,
    "passage": "toraja",
    "text": "Program Takeover Melbourne menurut bacaan di atas adalah…",
    "options": [
      "Program untuk memberikan tempat pada imigran di Australia",
      "Program untuk perkumpulan masyarakat Toraja di Australia",
      "Program untuk menceritakan identitas asal lewat bercerita di Australia",
      "Program untuk merehabilitasi kehidupan anak-anak di Australia",
      "Program untuk memberikan tunjangan dukungan kepada para imigran di Australia."
    ],
    "answer": "C",
    "explain": "<p class=\"keystatus ok\"><b>Kunci: C</b></p>\n<section class=\"box rumus\"><h4>Pembahasan</h4><p>Soal menanyakan arti program Takeover Melbourne menurut bacaan. Lihat paragraf kedua: “Sebagai sebuah platform kreatif, Takeover Melbourne memberi kesempatan kepada ratusan anak muda dari seluruh Melbourne untuk mengungkapkan identitas mereka melalui cerita yang mereka sampaikan.”</p><p>Artinya, program itu adalah <b>wadah bagi anak muda untuk menceritakan identitas asal mereka lewat bercerita</b> (<i>storytelling</i>). Itu sesuai pilihan C.</p><p>Pilihan lain tidak disebut di teks: tempat bagi imigran (A), perkumpulan masyarakat Toraja (B), merehabilitasi kehidupan anak-anak (D), atau tunjangan bagi imigran (E). Fasha hanyalah salah satu peserta yang menceritakan tradisi Toraja.</p></section>"
  },
  {
    "n": 11,
    "passage": "toraja",
    "text": "Makna kata “identitas” pada paragraf kedua teks di atas adalah…",
    "options": [
      "Pengenalan keadaan seseorang",
      "Ciri-ciri atau keadaan khusus seseorang",
      "Kekhususan suatu bangsa",
      "Pemberian label pada seseorang",
      "Sisi negatif seseorang"
    ],
    "answer": "B",
    "explain": "<p class=\"keystatus ok\"><b>Kunci: B</b></p>\n<section class=\"box rumus\"><h4>Pembahasan</h4><p>Kata <i>identitas</i> muncul di paragraf kedua: “…untuk mengungkapkan <b>identitas</b> mereka melalui cerita…”. Di situ para anak muda menceritakan siapa diri mereka, misalnya asal-usul dan budayanya (seperti Fasha yang menceritakan tradisi Toraja).</p><p>Jadi <i>identitas</i> di sini berarti <b>ciri-ciri atau keadaan khusus seseorang</b> (pilihan B).</p><p>Pilihan lain kurang tepat: <i>pengenalan keadaan seseorang</i> berarti kegiatan mengenal, bukan ciri itu sendiri; <i>kekhususan suatu bangsa</i> terlalu sempit karena yang dimaksud adalah pribadi masing-masing anak muda; <i>pemberian label</i> berarti memberi cap; <i>sisi negatif</i> tidak sesuai karena identitas tidak selalu buruk.</p></section>"
  },
  {
    "n": 12,
    "passage": "opium",
    "text": "Pernyataan yang tidak tepat berdasarkan teks tersebut yaitu…",
    "options": [
      "Kate dihubungi oleh Departemen Lingkungan Hidup Tasmania untuk menanyakan tempat ia memperoleh bibit tanaman opium",
      "Departemen Lingkungan Hidup Tasmania memeriksa tanaman opium untuk diuji sampelnya",
      "Bahan alkaloid tidak bisa diekstrak secara bebas di Tasmania",
      "Tanaman opium yang ditanam berwarna merah muda",
      "Bunga opium dapat ditanam secara bebas di Tasmania"
    ],
    "answer": "E",
    "explain": "<p class=\"keystatus ok\"><b>Kunci: E</b></p>\n<section class=\"box rumus\"><h4>Pembahasan</h4><p>Perhatikan kata <b>tidak tepat</b>: yang dicari adalah pernyataan yang <b>salah</b> menurut teks. Periksa tiap pilihan:</p><p>A – sesuai. Kate dihubungi aparat Departemen Lingkungan Hidup Tasmania, lalu ia menyampaikan bahwa bibitnya dibeli dari pemasok benih yang terdaftar.</p><p>B – sesuai. Petugas datang ke kebun, memeriksa tanaman, dan mengambil sampel untuk diuji.</p><p>C – sesuai. Bunga poppy jenis itu hanya ditanam secara komersial dengan pengawasan ketat untuk diambil bahan alkaloidnya, jadi tidak bisa diekstrak sebebasnya.</p><p>D – sesuai. Paragraf 2 menyebut Kate menanam bunga poppy berwarna merah muda.</p><p>E – <b>salah</b>. Teks menyebut ada dua spesies opium yang dilarang, dan bunga poppy terlarang memerlukan izin untuk ditanam di Tasmania. Jadi bunga opium tidak boleh ditanam secara bebas.</p></section>"
  },
  {
    "n": 13,
    "passage": "opium",
    "text": "Pada paragraf pertama, sinonim dari kata komersial adalah…",
    "options": [
      "Membayar",
      "Menguntungkan",
      "Menghilangkan",
      "Memberikan",
      "Merugikan"
    ],
    "answer": "B",
    "explain": "<p class=\"keystatus ok\"><b>Kunci: B</b></p>\n<section class=\"box rumus\"><h4>Pembahasan</h4><p>Lihat kalimatnya: “Selama ini Kate mengelola perkebunan bunga <b>komersial</b>, yang dipasok ke toko-toko bunga.” Artinya, kebun itu dikelola untuk <b>dijual</b> dan mencari untung, bukan sekadar hobi.</p><p>Menurut KBBI, <i>komersial</i> berhubungan dengan niaga atau perdagangan dan bernilai niaga tinggi. Dari pilihan yang ada, yang paling dekat artinya adalah <b>menguntungkan</b> (pilihan B).</p><p>Pilihan lain: <i>membayar</i> = memberi uang, <i>menghilangkan</i> = membuat jadi tidak ada, <i>memberikan</i> = menyerahkan, <i>merugikan</i> = kebalikan dari untung.</p></section>\n<section class=\"box catatan warn\"><h4>Catatan</h4><p>Opsi C di dokumen sumber tertulis “Mehilangkan” (salah ketik). Di website diperbaiki menjadi “Menghilangkan”; kunci tidak berubah.</p></section>"
  },
  {
    "n": 14,
    "passage": "opium",
    "text": "Perhatikan pernyataan-pernyataan berikut. Pilih semua pernyataan yang sesuai dengan bacaan (jawaban “Ya”). Pernyataan yang tidak kamu pilih dianggap “Tidak”.",
    "options": [
      "Di Tasmania, bibit bunga Poppy diperjualbelikan.",
      "Kate Dixon hanya memiliki koleksi tanaman yang berasal dari Australia.",
      "Papaver somniferum dan Papaver bracteatum diawasi peredarannya di Australia.",
      "Morfin, tebain, dan kodein yang digunakan dalam obat-obatan ditemukan dalam bunga Opium.",
      "Departemen Lingkungan Hidup memiliki kewenangan untuk menetapkan klasifikasi tanaman yang dapat dan tidak dapat dibudidayakan secara bebas."
    ],
    "answer": "ACDE",
    "explain": "<p class=\"keystatus ok\"><b>Kunci: A · C · D · E</b> · Ada 4 jawaban benar · Pilih Semua</p>\n<section class=\"box catatan\"><h4>Bentuk soal di website</h4><p>Di dokumen sumber soal ini berupa tabel Ya/Tidak. Di website diubah menjadi pilihan ganda kompleks: siswa memilih semua pernyataan yang jawabannya <b>Ya</b> (yang tidak dipilih dianggap Tidak). Soal dianggap benar hanya jika semua pernyataan tepat.</p></section>\n<section class=\"box rumus\"><h4>Pembahasan</h4><p>Cara mudahnya: cocokkan setiap pernyataan dengan isi bacaan. Jika ada di bacaan, jawabannya Ya. Jika bertentangan atau tidak disebut, jawabannya Tidak.</p><ul><li><b>A · Ya.</b> Kate membeli bibit poppy dari pemasok benih Australia yang terdaftar. Artinya bibit itu memang dijual secara resmi.</li><li><b>B · Tidak.</b> Paragraf pertama menyebut kebun Kate berisi bunga khas Australia dan juga bunga dari Afrika Selatan. Jadi tidak hanya dari Australia.</li><li><b>C · Ya.</b> Kedua jenis poppy ini ditanam secara komersial di Tasmania (negara bagian Australia) dengan pengawasan ketat.</li><li><b>D · Ya.</b> Ketiganya diambil dari alkaloid, yaitu zat alami dalam bunga opium, lalu dipakai sebagai bahan obat.</li><li><b>E · Ya.</b> Departemen Lingkungan Hidup Tasmania menghubungi Kate dan menyatakan tanaman yang ia tanam dilarang. Artinya mereka berwenang menentukan tanaman mana yang boleh dan tidak boleh ditanam.</li></ul></section>"
  },
  {
    "n": 15,
    "passage": "twitter",
    "text": "Istilah “ultimatum” dalam teks tersebut memiliki makna yang sepadan dengan…",
    "options": [
      "Ancaman",
      "Invasi",
      "Agresi",
      "Dukungan",
      "Serangan"
    ],
    "answer": "A",
    "explain": "<p class=\"keystatus ok\"><b>Kunci: A</b></p>\n<section class=\"box rumus\"><h4>Pembahasan</h4><p>Ultimatum adalah peringatan terakhir yang disertai batas waktu. Jika tidak dituruti, akan ada akibatnya.</p><p>Dalam teks, Elon Musk memberi karyawan dua pilihan: bekerja lebih lama dengan intensitas tinggi, atau keluar. Pilihan seperti ini bernada ancaman. KBBI (Kamus Besar Bahasa Indonesia) juga mengartikan ultimatum sebagai “peringatan dengan ancaman”.</p><p>Invasi, agresi, dan serangan berkaitan dengan penyerbuan ke wilayah atau pihak lain, sedangkan dukungan berarti bantuan. Keempatnya tidak cocok dengan maksud ultimatum.</p></section>"
  },
  {
    "n": 16,
    "passage": "twitter",
    "text": "Sinonim dari kata anonim pada paragraf kedua adalah…",
    "options": [
      "Tanpa suara",
      "Tanpa kehadiran",
      "Tanpa rekaman",
      "Tanpa nama",
      "Tanpa identitas"
    ],
    "answer": "D",
    "explain": "<p class=\"keystatus ok\"><b>Kunci: D</b></p>\n<section class=\"box rumus\"><h4>Pembahasan</h4><p>Anonim berarti tanpa nama atau tidak diketahui siapa orangnya. Contohnya surat kaleng, yaitu surat yang tidak mencantumkan nama pengirim.</p><p>Pada paragraf kedua, aplikasi Blind memungkinkan pengguna berbagi informasi secara anonim, artinya tanpa menyebutkan nama mereka.</p><p>Pilihan E (tanpa identitas) memang mirip, tetapi KBBI menyebut <i>tanpa nama</i> sebagai arti utamanya. Pilihan lain (tanpa suara, tanpa kehadiran, tanpa rekaman) tidak berkaitan dengan makna anonim.</p></section>"
  },
  {
    "n": 17,
    "passage": "covid",
    "text": "Pernyataan yang benar berdasarkan informasi dalam teks tersebut adalah…",
    "options": [
      "COVID kasus XXB merupakan varian yang berbeda dari Omicron",
      "Terdapat 6.590.113 kasus sembuh COVID XXB",
      "Tambahan kasus aktif COVID mencapai 7.822 kasus di Indonesia",
      "Terdapat 60.471 pasien meninggal dalam COVID varian XXB",
      "Sanjaya Senanayake menyatakan bahwa kemungkinan akan terbentuk kekebalan terhadap varian COVID XXB"
    ],
    "answer": "C",
    "explain": "<p class=\"keystatus ok\"><b>Kunci: C</b></p>\n<section class=\"box rumus\"><h4>Pembahasan</h4><p>Cara mudahnya: cocokkan setiap pilihan dengan isi bacaan.</p><p><b>A. Salah.</b> Pakar menyebut “semuanya masih Omicron”. Jadi XXB bukan varian yang berbeda dari Omicron, melainkan gabungan subvarian Omicron.</p><p><b>B. Salah.</b> Angka 6.590.113 adalah total kasus sejak Maret 2020. Orang yang sembuh berjumlah 6.370.351.</p><p><b>C. Benar.</b> Pemerintah melaporkan tambahan 7.822 kasus positif baru pada Kamis (17/11/2022). Di pilihan C tertulis “kasus aktif”, tetapi maksudnya tambahan kasus baru dengan angka yang sama.</p><p><b>D. Salah.</b> Angka 60.471 adalah jumlah kasus aktif, bukan pasien yang meninggal. Pasien meninggal berjumlah 38 orang pada hari itu, dengan total 159.291 orang.</p><p><b>E. Salah.</b> Pakar tidak menyatakan akan terbentuk kekebalan baru. Ia justru mengatakan subvarian baru akan menantang sistem kekebalan tubuh dan memprediksi kasus meningkat.</p></section>"
  },
  {
    "n": 18,
    "passage": "covid",
    "text": "Arti kata “varian” pada paragraf pertama teks di atas adalah…",
    "options": [
      "Kuantitas",
      "Kualitas",
      "Besar",
      "Jenis",
      "Ukuran"
    ],
    "answer": "D",
    "explain": "<p class=\"keystatus ok\"><b>Kunci: D</b></p>\n<section class=\"box rumus\"><h4>Pembahasan</h4><p>Varian artinya bentuk atau jenis yang berbeda dari bentuk aslinya. Jadi “Varian XXB” berarti jenis COVID-19 yang bentuknya sedikit berbeda dari yang sudah ada.</p><p>Contoh sehari-hari: “varian rasa” pada makanan berarti jenis rasa yang berbeda-beda. KBBI mengartikan varian sebagai bentuk yang berbeda atau menyimpang dari yang asli atau baku.</p><p>Kuantitas berarti jumlah, kualitas berarti mutu, sedangkan besar dan ukuran berkaitan dengan dimensi. Tidak satu pun menunjukkan jenis.</p></section>"
  },
  {
    "n": 19,
    "passage": "kalimat19",
    "text": "Kata “prediksi” pada kalimat tersebut memiliki makna…",
    "options": [
      "Diperkirakan",
      "Perhitungan",
      "Dihitung",
      "Diramal",
      "Dikira"
    ],
    "answer": "A",
    "explain": "<p class=\"keystatus ok\"><b>Kunci: A</b></p>\n<section class=\"box rumus\"><h4>Pembahasan</h4><p>Prediksi artinya perkiraan tentang sesuatu yang akan terjadi. Kata “diprediksikan” berarti “diperkirakan”. Contoh: “Hujan diprediksi turun sore ini” sama maknanya dengan “Hujan diperkirakan turun sore ini”.</p><p>KBBI mengartikan prediksi sebagai ramalan atau prakiraan. Pilihan D (diramal) juga dekat, tetapi untuk kalimat berita atau ilmiah seperti ini, kata <i>diperkirakan</i> lebih lazim dipakai.</p><p>Perhitungan dan dihitung berarti mengolah angka, sedangkan dikira lebih bernuansa dugaan santai.</p></section>"
  },
  {
    "n": 20,
    "passage": "kalimat20",
    "text": "Kata sensasional pada kalimat di atas memiliki makna…",
    "options": [
      "bersifat menyedihkan",
      "membahagiakan",
      "menarik hati",
      "bersifat menggemparkan",
      "membuat perasaan sedih"
    ],
    "answer": "D",
    "explain": "<p class=\"keystatus ok\"><b>Kunci: D</b></p>\n<section class=\"box rumus\"><h4>Pembahasan</h4><p>Sensasional artinya menggemparkan, yaitu membuat banyak orang terkejut dan ramai membicarakannya. Alur cerita yang sensasional adalah alur yang penuh kejutan sampai membuat penonton heboh.</p><p>Hal ini cocok dengan kalimatnya, karena alur ceritanya disebut “tidak terduga”. KBBI mengartikan sensasional sebagai bersifat merangsang perasaan atau bersifat menggemparkan.</p><p>Menyedihkan, membahagiakan, dan membuat perasaan sedih hanya menunjuk satu jenis perasaan tertentu. Menarik hati berarti membuat orang suka, tidak sama dengan membuat gempar.</p></section>"
  },
  {
    "n": 21,
    "passage": "ukraina",
    "text": "Perhatikan pernyataan-pernyataan berikut. Pilih semua pernyataan yang sesuai dengan bacaan (jawaban “Ya”). Pernyataan yang tidak kamu pilih dianggap “Tidak”.",
    "options": [
      "Rusia tidak menyerah untuk menaklukkan seluruh wilayah Ukraina.",
      "Konflik Rusia-Ukraina menjadi konflik terbesar pasca Perang Dunia II.",
      "Kota Kyiv mendapatkan serangan sejumlah 40 roket.",
      "Penembakan Kota Donetsk menewaskan lebih dari dua orang.",
      "Gencatan senjata mencapai kebuntuan antara Rusia dan Ukraina."
    ],
    "answer": "ABE",
    "explain": "<p class=\"keystatus ok\"><b>Kunci: A · B · E</b> · Ada 3 jawaban benar · Pilih Semua</p>\n<section class=\"box catatan\"><h4>Bentuk soal di website</h4><p>Di dokumen sumber soal ini berupa tabel Ya/Tidak. Di website diubah menjadi pilihan ganda kompleks: siswa memilih semua pernyataan yang jawabannya <b>Ya</b> (yang tidak dipilih dianggap Tidak). Soal dianggap benar hanya jika semua pernyataan tepat.</p></section>\n<section class=\"box rumus\"><h4>Pembahasan</h4><p>Cara mudahnya: cari kalimat di bacaan yang membahas hal yang sama, lalu bandingkan.</p><ul><li><b>A · Ya.</b> Bacaan menyebut perang panjang yang hendak menaklukkan seluruh Ukraina, dan pasukan Rusia terus menggempur dua kota strategis. Rusia belum berhenti.</li><li><b>B · Ya.</b> Bacaan menyebut konflik ini sebagai konflik terbesar di Eropa sejak Perang Dunia Kedua.</li><li><b>C · Tidak.</b> Yang terkena 40 roket adalah kota Donetsk, bukan Kyiv. Roket itu justru ditembakkan oleh Ukraina (pasukan Kyiv).</li><li><b>D · Tidak.</b> Penembakan yang menewaskan dua orang terjadi di Kherson, bukan Donetsk. Bacaan tidak menyebut korban tewas di Donetsk.</li><li><b>E · Ya.</b> Kedua pihak telah mengesampingkan gencatan senjata dan tidak ada pembicaraan untuk mengakhiri konflik. Artinya tidak ada kemajuan.</li></ul></section>"
  },
  {
    "n": 22,
    "passage": "iptek",
    "text": "Pernyataan-pernyataan di bawah ini dikemukakan dalam bacaan di atas, kecuali…",
    "options": [
      "Iptek modern berkembang pesat sejak abad XX.",
      "Iptek modern merupakan bagian dari peradaban manusia.",
      "Pembangunan bidang Iptek di Indonesia cukup mendapat prioritas.",
      "Iptek memiliki kemanfaatan bagi peningkatan martabat kemanusiaan manusia",
      "Iptek modern memiliki sifat universal di dalam dirinya."
    ],
    "answer": "A",
    "explain": "<p class=\"keystatus ok\"><b>Kunci: A</b></p>\n<section class=\"box rumus\"><h4>Pembahasan</h4><p>Kata <i>kecuali</i> berarti kita harus mencari pernyataan yang <b>tidak</b> ada dalam bacaan. Periksa satu per satu:</p><p><b>A. Tidak sesuai bacaan.</b> Bacaan menyebut IPTEK modern melesat cepat sejak tahun 1686, bukan sejak abad XX. Abad XX hanya disebut sebagai masa ketika perkembangannya makin pesat.</p><p><b>B. Ada.</b> Paragraf pertama: IPTEK modern adalah bagian dari peradaban manusia.</p><p><b>C. Ada.</b> Paragraf kedua: pengembangan IPTEK menjadi prioritas pada aspek pembangunan.</p><p><b>D. Ada.</b> Paragraf kedua: IPTEK dianggap bermanfaat untuk meningkatkan martabat kemanusiaan.</p><p><b>E. Ada.</b> Paragraf kedua: IPTEK modern memiliki sifat yang universal.</p><p>Karena hanya pilihan A yang tidak ada dalam bacaan, jawabannya A.</p></section>\n<section class=\"box catatan warn\"><h4>Catatan</h4><p><i>Kunci jawaban pada sumber awal tertulis E. Namun pilihan E justru disebutkan dalam bacaan (paragraf kedua), sehingga tidak cocok dengan kata “kecuali”. Mohon dicek kembali sebelum dipakai.</i></p></section>"
  },
  {
    "n": 23,
    "passage": "selundup",
    "text": "Pernyataan yang tidak berhubungan dengan bacaan di atas adalah…",
    "options": [
      "Sejumlah 202 prosesor Intel dan 9 iPhone disembunyikan wanita di dalam alat prostetik perut",
      "Penyelundupan prosesor Intel dan iPhone digagalkan oleh bea cukai Makau",
      "Petugas bea cukai tidak menggagalkan penyelundupan prosesor Intel dan iPhone",
      "Petugas bea cukai menggunakan alat prostetik perut",
      "Postur tubuh wanita tersebut normal untuk kehamilan usia 5-6 bulan."
    ],
    "answer": "B",
    "explain": "<p class=\"keystatus ok\"><b>Kunci: B</b></p>\n<section class=\"box rumus\"><h4>Pembahasan</h4><p>Soal ini meminta pernyataan yang tidak dibahas sama sekali dalam bacaan. Periksa satu per satu:</p><p><b>A. Ada dalam bacaan.</b> Kalimat (10) menyebut 202 prosesor Intel dan sembilan iPhone disembunyikan di alat prostetik perut.</p><p><b>B. Tidak ada dalam bacaan.</b> Bacaan tidak membahas bea cukai Makau. Pemeriksaan dilakukan petugas bea cukai di pelabuhan Gongpei, Zhuhai, China. Makau hanya disebut sebagai tempat asal wanita itu sebelum masuk ke China.</p><p><b>C. Dibahas, tetapi isinya keliru.</b> Petugas justru berhasil menggagalkan penyelundupan.</p><p><b>D. Dibahas, tetapi isinya keliru.</b> Yang memakai alat prostetik adalah wanita itu, sedangkan petugas memakai mesin inspeksi.</p><p><b>E. Dibahas, tetapi isinya keliru.</b> Petugas curiga karena postur tubuh wanita itu dinilai tidak normal untuk kehamilan 5-6 bulan.</p><p>Jadi pernyataan yang paling tidak berhubungan dengan bacaan adalah B.</p></section>"
  },
  {
    "n": 24,
    "passage": "selundup",
    "text": "Kalimat yang bersifat non formal terdapat pada…",
    "options": [
      "Kalimat (5)",
      "Kalimat (6)",
      "Kalimat (7)",
      "Kalimat (8)",
      "Kalimat (9)"
    ],
    "answer": "D",
    "explain": "<p class=\"keystatus ok\"><b>Kunci: D</b></p>\n<section class=\"box rumus\"><h4>Pembahasan</h4><p>Bahasa formal itu lugas, baku, dan menyampaikan fakta. Bahasa non formal terdengar seperti orang sedang mengobrol atau menyampaikan pendapat.</p><p>Kalimat (8) berbunyi: “Dalam skenario normal, memang tidak seharusnya mengamati penampilan wanita hamil karena dianggap kurang etis.” Kata <i>memang</i> biasa dipakai dalam obrolan untuk menegaskan pendapat, dan isinya berupa penilaian (“dianggap kurang etis”), bukan laporan kejadian.</p><p>Kalimat (5), (6), (7), dan (9) menceritakan jalannya kejadian secara langsung, seperti laporan berita.</p></section>"
  },
  {
    "n": 25,
    "passage": "selundup",
    "text": "Inti dari bacaan di atas adalah…",
    "options": [
      "Penyelidikan atas kasus penyelundupan prosesor Intel dan iPhone",
      "Penggunaan mesin inspeksi untuk menggagalkan penyelundupan prosesor Intel dan iPhone",
      "Petugas bea cukai bertugas menggagalkan penyelundupan",
      "Penggagalan upaya penyelundupan prosesor Intel dan iPhone oleh wanita yang berpura-pura hamil",
      "Wanita yang menggunakan alat prostetik untuk menyelundupkan prosesor Intel dan iPhone"
    ],
    "answer": "D",
    "explain": "<p class=\"keystatus ok\"><b>Kunci: D</b></p>\n<section class=\"box rumus\"><h4>Pembahasan</h4><p>Inti bacaan adalah gagasan utama yang mewakili seluruh isi teks, bukan hanya satu bagian.</p><p>Isi teks: seorang wanita berpura-pura hamil untuk menyelundupkan prosesor Intel dan iPhone, tetapi aksinya digagalkan petugas bea cukai. Pilihan D memuat semua unsur itu: pelakunya (wanita yang berpura-pura hamil), perbuatannya (upaya penyelundupan), dan akhirnya (digagalkan).</p><p><b>A. Tidak tepat.</b> Teks tidak membahas penyelidikan lanjutan.</p><p><b>B. Terlalu sempit.</b> Mesin inspeksi hanya salah satu alat yang dipakai petugas.</p><p><b>C. Terlalu umum.</b> Tidak menyebut kasus yang sebenarnya diceritakan.</p><p><b>E. Kurang lengkap.</b> Hanya menyebut aksi wanita itu, tanpa menyebut bahwa ia berpura-pura hamil dan penyelundupannya digagalkan.</p></section>"
  },
  {
    "n": 26,
    "passage": "selundup",
    "text": "Perhatikan pernyataan-pernyataan berikut. Pilih semua pernyataan yang sesuai dengan bacaan (jawaban “Ya”). Pernyataan yang tidak kamu pilih dianggap “Tidak”.",
    "options": [
      "Perut Wanita yang berpura-pura hamil berukuran tidak wajar untuk usia kehamilannya.",
      "Ponsel dan prosesor komputer diselipkan di dalam alat prostetik.",
      "Prostetik yang digunakan berbentuk mirip dengan kondisi hamil sebenarnya.",
      "Awalnya petugas bea cukai tidak curiga dengan Wanita yang menggunakan prostetik.",
      "Pemeriksaan tubuh Wanita tersebut dilakukan di pelabuhan Gongpei di Zhuhai, China."
    ],
    "answer": "ABE",
    "explain": "<p class=\"keystatus ok\"><b>Kunci: A · B · E</b> · Ada 3 jawaban benar · Pilih Semua</p>\n<section class=\"box catatan\"><h4>Bentuk soal di website</h4><p>Di dokumen sumber soal ini berupa tabel Ya/Tidak. Di website diubah menjadi pilihan ganda kompleks: siswa memilih semua pernyataan yang jawabannya <b>Ya</b> (yang tidak dipilih dianggap Tidak). Soal dianggap benar hanya jika semua pernyataan tepat.</p></section>\n<section class=\"box rumus\"><h4>Pembahasan</h4><p>Cara mudahnya: cari kalimat di bacaan yang membahas hal yang sama, lalu bandingkan.</p><ul><li><b>A · Ya.</b> Wanita itu mengaku hamil 5-6 bulan, tetapi petugas menilai perutnya terlalu besar untuk usia kehamilan tersebut (kalimat 7).</li><li><b>B · Ya.</b> Alat prostetik perut dipakai untuk menyembunyikan 202 prosesor Intel dan sembilan iPhone (kalimat 10). iPhone adalah ponsel, dan prosesor Intel adalah prosesor komputer.</li><li><b>C · Tidak.</b> Petugas justru curiga karena postur tubuh wanita itu dinilai tidak normal (kalimat 5). Artinya bentuk perutnya tidak sama dengan perut orang hamil pada umumnya.</li><li><b>D · Tidak.</b> Sejak pemeriksaan, petugas sudah mencurigai postur tubuhnya (kalimat 5) dan tidak percaya begitu saja pada pengakuan hamil (kalimat 7).</li><li><b>E · Ya.</b> Kalimat (3) menyebut wanita itu tertangkap saat melewati pemeriksaan bea cukai di pelabuhan Gongpei, Zhuhai, China.</li></ul></section>"
  },
  {
    "n": 27,
    "passage": "digital",
    "text": "Berdasarkan teks tersebut, kalimat manakah yang merupakan solusi meningkatkan pelayanan sektor kelautan…",
    "options": [
      "1",
      "2",
      "3",
      "4",
      "5"
    ],
    "answer": "D",
    "explain": "<p class=\"keystatus ok\"><b>Kunci: D</b></p>\n<section class=\"box rumus\"><h4>Pembahasan</h4><p>Solusi adalah jalan keluar atau cara untuk memperbaiki sesuatu. Jadi kita mencari kalimat yang menyebut <i>cara</i> untuk meningkatkan pelayanan. Biasanya kalimat seperti ini memuat kata penilaian, misalnya “paling”, “sebaiknya”, atau “seharusnya”. Periksa satu per satu:</p><p><b>Kalimat (1).</b> Pernyataan umum bahwa semua sektor perlu beradaptasi dengan digitalisasi. Bukan cara khusus untuk meningkatkan pelayanan sektor kelautan.</p><p><b>Kalimat (2).</b> Hanya menyampaikan fakta bahwa pemerintah juga melakukannya di sektor kelautan dan pelayaran.</p><p><b>Kalimat (3).</b> Menjelaskan manfaat digitalisasi, yaitu pelayanan kapal jadi mudah diproses dan diawasi. Ini penjelasan, bukan saran.</p><p><b>Kalimat (4).</b> Inilah solusinya. Digitalisasi disebut “cara paling efektif untuk meningkatkan pelayanan”.</p><p><b>Kalimat (5).</b> Hanya keterangan siapa yang menyampaikan, di acara apa, dan kapan.</p><p>Jadi kalimat yang berisi solusi meningkatkan pelayanan adalah kalimat (4).</p></section>"
  },
  {
    "n": 28,
    "passage": "digital",
    "text": "Berdasarkan informasi yang terdapat pada teks bacaan, aspek yang menjadi pendukung digitalisasi pelayaran antara lain …",
    "options": [
      "Adaptasi sektor digital untuk menjaga kinerja dan kelangsungan usaha",
      "Digitalisasi terhadap kapal dan pelayanan",
      "Menjawab tantangan bisnis maritim secara global",
      "Mendukung kegiatan operasional yang bersih dan efisien",
      "Pengaturan tarif petikemas, standar layanan penumpang, pengelolaan kapal milik negara"
    ],
    "answer": "E",
    "explain": "<p class=\"keystatus ok\"><b>Kunci: E</b></p>\n<section class=\"box rumus\"><h4>Pembahasan</h4><p>Soal menanyakan <b>aspek pendukung</b> digitalisasi pelayaran, yaitu hal-hal yang perlu menyertai digitalisasi. Kalimat (7) menjawabnya: “Digitalisasi perlu <b>didukung dengan</b> hal mengenai tarif petikemas, standar layanan penumpang, pengelolaan kapal milik negara, kebijakan operasional kapal pesiar domestik, hingga kegiatan bongkar muat di pelabuhan.”</p><p>Kata “didukung dengan” menunjukkan bahwa itulah aspek pendukungnya. <i>Petikemas</i> (peti kemas) adalah kontainer besar untuk mengangkut barang. Jadi jawabannya adalah <b>pengaturan tarif petikemas, standar layanan penumpang, dan pengelolaan kapal milik negara</b> (pilihan E).</p><p>Pilihan lain bukan aspek pendukung, melainkan alasan atau tujuan digitalisasi:</p><p>A – adaptasi sektor digital untuk menjaga kinerja dan kelangsungan usaha adalah alasan digitalisasi diperlukan (kalimat 1).</p><p>B – digitalisasi terhadap kapal dan pelayanan adalah bentuk digitalisasinya sendiri (kalimat 3).</p><p>C dan D – menjawab tantangan bisnis maritim global dan mendukung kegiatan operasional yang bersih dan efisien adalah tujuan atau manfaat digitalisasi (kalimat 4).</p></section>"
  },
  {
    "n": 29,
    "passage": "meratus",
    "text": "Judul yang tepat untuk bacaan di atas adalah …",
    "options": [
      "Kisah Kehidupan dari Batu Kambar, Desa Hinas Kiri.",
      "Identitas Warga Pedalaman Pegunungan Meratus.",
      "Kehidupan Tradisional Masyarakat Pegunungan Meratus.",
      "Tradisionalisme Menjadi Kebanggaan bagi Masyarakat Pegunungan Meratus.",
      "Selama 18 Jam Berjalan Menuju Pasar untuk Keperluan Hidup “Modern”"
    ],
    "answer": "C",
    "explain": "<p class=\"keystatus ok\"><b>Kunci: C</b></p>\n<section class=\"box rumus\"><h4>Pembahasan</h4><p>Judul yang baik harus mewakili <b>seluruh isi teks</b>, tidak hanya satu bagian. Isi teks ini: warga Pegunungan Meratus bangun pagi dan beraktivitas (ke ladang, pasar, dan sekolah), terbiasa tidur sore karena tidak ada listrik, mengadakan pasar tradisional setiap pekan, dan masih memegang cara hidup tradisional (cara makan, mandi, berinteraksi, hingga pandangan hidup).</p><p>Semuanya menggambarkan <b>kehidupan tradisional masyarakat Pegunungan Meratus</b>, sehingga pilihan C paling tepat.</p><p>Pilihan lain hanya mewakili sebagian teks:</p><p>A – hanya menyebut tempat dan kejadian di awal teks (Batu Kambar, Desa Hinas Kiri).</p><p>B – soal “identitas warga” hanya dibahas di kalimat (7), padahal teks membahas banyak hal lain.</p><p>D – “kebanggaan” hanya satu sisi di kalimat (10); di sisi lain, teks juga menyisakan pertanyaan tentang kesejahteraan masyarakat.</p><p>E – perjalanan 18 jam ke pasar hanyalah satu rincian di kalimat (6).</p></section>"
  },
  {
    "n": 30,
    "passage": "cuaca",
    "text": "Kata meteorologi pada paragraf pertama memiliki sinonim dengan?",
    "options": [
      "Iklim",
      "Kemarau",
      "Hujan",
      "Cuaca",
      "Perubahan cuaca"
    ],
    "answer": "D",
    "explain": "<p class=\"keystatus ok\"><b>Kunci: D</b></p>\n<section class=\"box rumus\"><h4>Pembahasan</h4><p>Soal menanyakan sinonim (padanan kata) dari <i>meteorologi</i>. Cari kata itu di teks: “Kantor badan <b>meteorologi</b> telah mengeluarkan peringatan bahwa salju akan membawa cuaca dingin…”. Lembaga inilah yang mengeluarkan peringatan dan prakiraan cuaca (di paragraf pertama disebut <i>Met Office</i>).</p><p>Menurut KBBI, <i>meteorologi</i> adalah ilmu pengetahuan tentang ciri-ciri fisika dan kimia atmosfer (untuk meramalkan keadaan cuaca). Karena itu kata ini paling dekat dengan <b>cuaca</b> (pilihan D).</p><p>Pilihan lain: <i>iklim</i> = pola cuaca dalam jangka waktu panjang, <i>kemarau</i> = musim kering, <i>hujan</i> = air yang turun dari langit, <i>perubahan cuaca</i> = berubahnya keadaan cuaca (bukan ilmu atau bidangnya).</p></section>\n<section class=\"box catatan warn\"><h4>Catatan</h4><p>Kata <i>meteorologi</i> pada teks sebenarnya berada di paragraf kedua; jawabannya tetap D.</p></section>"
  }
];
