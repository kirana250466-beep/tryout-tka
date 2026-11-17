// Bank soal Pemahaman Bacaan dan Menulis 2 (quiz id "pbm2"): 20 soal TPS Pemahaman Bacaan dan Menulis
// (keparalelan, penyusunan dan pemisahan paragraf, kata majemuk berimbuhan, ejaan dan tanda baca, kalimat baku), pilihan A sampai E.
// Dibuat dari dokumen "Soal_Pemahaman_Bacaan_Menulis_No1-20.docx" (soal, kunci, dan pembahasan; Tryout SNBT Naufal Academy #5).
//
// Pembahasan guru dan siswa SAMA:
//  - Isi pembahasan ada di field explain tiap soal (HTML). Mode guru (login "Ferdi") menampilkannya langsung.
//  - Siswa menerima isi yang sama lewat EXPLAIN_SISWA di bawah file ini (dibuat otomatis dari field explain),
//    tepat setelah soal itu dijawab (lihat studentExplainOf di quizzes.js). Mengubah explain berarti mengubah keduanya.
//
// Catatan penyesuaian dari dokumen:
//  - Semua soal berdiri sendiri (tanpa teks bacaan panjang), jadi quiz ini tidak memakai PASSAGES.
//  - Semua 20 soal berjawaban tunggal. Kunci: A B C C C D B A A A A A B C B A B C D C (soal 1 sampai 20), sama dengan "Kunci Jawaban" di tiap pembahasan dokumen.
//  - Huruf miring dan tebal di dokumen dipertahankan lewat field html dan optionsHtml (penting untuk soal ejaan dan keparalelan).
//    Field text dan options tetap berisi versi teks biasa.
//  - Soal 16: di dokumen hanya "pasca bencana" yang dicetak miring, padahal soal menanyakan perbaikan "kata dan tanda baca yang dicetak miring"
//    (pilihan jawaban memuat dua bagian). Di website "Rp250.000.000,00 / tahun" ikut dimiringkan supaya soalnya jelas.
//  - Pada pembahasan, penilaian tiap pilihan (kelas ev) berwarna hijau untuk pilihan yang sama dengan kunci dan merah muda untuk lainnya.
//    Pada soal 17 yang ditanyakan adalah kalimat yang SALAH, jadi kalimat (2) yang berlabel "SALAH" justru berwarna hijau karena itu kuncinya.
//
// File ini hanya dibaca server, jadi kunci dan pembahasan tidak dikirim ke siswa sebelum mereka menjawab.

export const QUESTIONS = [
  {
    "n": 1,
    "text": "Upaya penanggulangan kerusakan ekosistem mangrove di kawasan pesisir dilakukan melalui pembibitan bibit bakau unggul, menata kembali zonasi tambak warga, serta pengedukasian masyarakat mengenai pentingnya sabuk hijau pelindung abrasi.\n\nPerbaikan yang tepat untuk bagian yang dicetak miring agar memenuhi prinsip keparalelan bentuk (kesejajaran) adalah ….",
    "html": "<div class=\"qp\">Upaya penanggulangan kerusakan ekosistem mangrove di kawasan pesisir dilakukan melalui <i>pembibitan</i> bibit bakau unggul, <i>menata kembali</i> zonasi tambak warga, serta <i>pengedukasian</i> masyarakat mengenai pentingnya sabuk hijau pelindung abrasi.</div><div class=\"qp\">Perbaikan yang tepat untuk bagian yang dicetak miring agar memenuhi prinsip keparalelan bentuk (kesejajaran) adalah ….</div>",
    "options": [
      "pembibitan, penataan kembali, serta pengedukasian",
      "membibitkan, penataan kembali, serta diedukasikannya",
      "pembibitan, ditata kembali, serta mengedukasi",
      "membibitkan, penataan kembali, serta pengedukasian",
      "dibibitkannya, ditata kembali, serta pengedukasian"
    ],
    "optionsHtml": [
      "<i>pembibitan, penataan kembali, serta pengedukasian</i>",
      "<i>membibitkan, penataan kembali, serta diedukasikannya</i>",
      "<i>pembibitan, ditata kembali, serta mengedukasi</i>",
      "<i>membibitkan, penataan kembali, serta pengedukasian</i>",
      "<i>dibibitkannya, ditata kembali, serta pengedukasian</i>"
    ],
    "answer": "A",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: A</b></p>\n<p>Prinsip keparalelan (kesejajaran bentuk) menuntut agar unsur-unsur perincian yang memiliki fungsi setara dalam satu kalimat menggunakan bentuk gramatikal yang sejenis.</p>\n<p>Pada kalimat stimulus:</p>\n<p><i>pembibitan</i> merupakan bentuk nomina (pe-/-an).</p>\n<p><i>menata kembali</i> merupakan bentuk verba aktif (me-).</p>\n<p><i>pengedukasian</i> merupakan bentuk nomina (pe-/-an).</p>\n<p>Ketidaksederajatan terjadi pada frasa <i>menata kembali</i> yang berbentuk verba di antara dua bentuk nomina. Agar struktur kalimat sejajar, bentuk verba tersebut harus diubah menjadi nomina yang berimbuhan sepadan, yaitu <i>penataan kembali</i>.</p>\n<p>Dengan demikian, bentuk yang sejajar adalah <b>pembibitan, penataan kembali, serta pengedukasian</b> (semuanya berkategori nomina dengan konfiks pe-/-an).</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah A.</b></p></section>"
  },
  {
    "n": 2,
    "text": "(1) Kendati demikian, adopsi teknologi penyimpanan daya baterai skala besar masih terkendala tingginya biaya investasi awal dan kerentanan rantai pasok material litium.\n\n(2) Dekarbonisasi sektor ketenagalistrikan kini dipandang sebagai pilar utama dalam mitigasi perubahan iklim global.\n\n(3) Integrasi sumber energi terbarukan yang bersifat intermiten, seperti tenaga surya dan bayu, menjadi kunci akselerasi proses dekarbonisasi tersebut.\n\n(4) Oleh sebab itu, inovasi pada material alternatif dan penyediaan skema insentif fiskal sangat mendesak demi menjamin keberlanjutan transisi energi bersih.\n\n(5) Ketidakpastian pasokan akibat variabilitas cuaca tersebut menuntut ketersediaan sistem penyimpan energi yang fleksibel dan berkapasitas andal.\n\nUrutan kalimat yang tepat agar membentuk paragraf yang padu, logis, dan koheren adalah ….",
    "options": [
      "(2)-(1)-(5)-(3)-(4)",
      "(2)-(3)-(5)-(1)-(4)",
      "(3)-(5)-(2)-(1)-(4)",
      "(3)-(2)-(1)-(5)-(4)",
      "(5)-(3)-(2)-(1)-(4)"
    ],
    "answer": "B",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: B</b></p>\n<p>Untuk membentuk paragraf yang padu dan koheren, urutan kalimat harus mengikuti alur penalaran umum ke khusus (deduktif) dan memperhatikan penanda kohesi leksikal serta gramatikal.</p>\n<p><b>Kalimat (2)</b> berperan sebagai kalimat topik pembuka yang menyajikan gagasan utama paling umum, yakni urgensi dekarbonisasi sektor ketenagalistrikan.</p>\n<p><b>Kalimat (3)</b> menguraikan cara mewujudkan dekarbonisasi tersebut melalui integrasi energi terbarukan intermiten (ditautkan oleh frasa repetisi <i>dekarbonisasi tersebut</i>).</p>\n<p><b>Kalimat (5)</b> menjelaskan implikasi dari sifat intermiten (ditautkan oleh anafora <i>variabilitas cuaca tersebut</i>) yang menuntut adanya sistem penyimpan energi yang andal.</p>\n<p><b>Kalimat (1)</b> menghadirkan konjungsi pertentangan antarkalimat <i>Kendati demikian</i> untuk memaparkan kendala nyata dalam penerapan sistem penyimpan daya baterai tersebut.</p>\n<p><b>Kalimat (4)</b> berfungsi sebagai penutup/simpulan logis yang ditandai konjungsi kesimpulan <i>Oleh sebab itu</i> untuk merumuskan solusi atas masalah pada kalimat (1).</p>\n<p>Dengan demikian, susunan yang paling tepat dan logis adalah <b>(2)-(3)-(5)-(1)-(4)</b>.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah B.</b></p></section>"
  },
  {
    "n": 3,
    "text": "Kalimat berikut yang memuat penulisan bentukan kata majemuk dan proses afiksasi yang seluruhnya tepat sesuai kaidah bahasa Indonesia baku adalah ….",
    "html": "<div class=\"qp\">Kalimat berikut yang memuat penulisan bentukan kata majemuk dan proses afiksasi yang <b>seluruhnya tepat</b> sesuai kaidah bahasa Indonesia baku adalah ….</div>",
    "options": [
      "Pihak manajemen berupaya menyebarluaskan panduan keselamatan kerja baru, tetapi mereka belum mempertanggung jawabkan efektivitas anggaran sebelumnya.",
      "Auditor independen meminta direksi perseroan untuk menanda tangani pakta integritas dan menggarisbawahi temuan defisit neraca keuangan.",
      "Satuan tugas segera menindaklanjuti keluhan masyarakat dengan mengikutsertakan pakar lingkungan independen dalam verifikasi lapangan.",
      "Panitia seleksi diminta untuk tidak menganak tirikan peserta afirmasi saat memperbaharui basis data kepegawaian.",
      "Pemerintah daerah menolak mengkambinghitamkan cuaca ekstrem dan berjanji segera melipat gandakan bantuan logistik."
    ],
    "optionsHtml": [
      "Pihak manajemen berupaya <i>menyebarluaskan</i> panduan keselamatan kerja baru, tetapi mereka belum <i>mempertanggung jawabkan</i> efektivitas anggaran sebelumnya.",
      "Auditor independen meminta direksi perseroan untuk <i>menanda tangani</i> pakta integritas dan <i>menggarisbawahi</i> temuan defisit neraca keuangan.",
      "Satuan tugas segera <i>menindaklanjuti</i> keluhan masyarakat dengan <i>mengikutsertakan</i> pakar lingkungan independen dalam verifikasi lapangan.",
      "Panitia seleksi diminta untuk tidak <i>menganak tirikan</i> peserta afirmasi saat <i>memperbaharui</i> basis data kepegawaian.",
      "Pemerintah daerah menolak <i>mengkambinghitamkan</i> cuaca ekstrem dan berjanji segera <i>melipat gandakan</i> bantuan logistik."
    ],
    "answer": "C",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: C</b></p>\n<p>Berdasarkan Pedoman Umum Ejaan Bahasa Indonesia yang Disempurnakan (EYD Edisi V), kaidah penulisan gabungan kata berimbuhan adalah sebagai berikut:</p>\n<p>Jika gabungan kata hanya mendapat awalan ATAU akhiran saja, bentuk dasarnya tetap ditulis terpisah (misalnya: <i>bertepuk tangan</i>, <i>sebar luaskan</i>).</p>\n<p>Jika gabungan kata sekaligus mendapat awalan DAN akhiran (konfiks/imbuhan gabung), penulisannya wajib disatukan/serangkai (misalnya: <i>mempertanggungjawabkan</i>, <i>menandatangani</i>, <i>menindaklanjuti</i>, <i>mengikutsertakan</i>, <i>melipatgandakan</i>).</p>\n<p>Analisis setiap pilihan jawaban:</p>\n<p class=\"ev no\"><b>Pilihan A salah.</b> Kata <i>mempertanggung jawabkan</i> seharusnya ditulis serangkai (<i>mempertanggungjawabkan</i>) karena mendapat imbuhan gabung <i>me-kan</i>.</p>\n<p class=\"ev no\"><b>Pilihan B salah.</b> Kata <i>menanda tangani</i> seharusnya ditulis serangkai (<i>menandatangani</i>) karena mendapat imbuhan gabung <i>me-i</i>.</p>\n<p class=\"ev ok\"><b>Pilihan C BENAR.</b> Bentuk <i>menindaklanjuti</i> (dasar: tindak lanjut + konfiks me-i) dan <i>mengikutsertakan</i> (dasar: ikut serta + konfiks me-kan) keduanya ditulis serangkai secara tepat.</p>\n<p class=\"ev no\"><b>Pilihan D salah.</b> Bentuk <i>menganak tirikan</i> harus ditulis serangkai (<i>menganaktirikan</i>), dan bentuk <i>memperbaharui</i> tidak baku (bentuk baku: <i>memperbarui</i>).</p>\n<p class=\"ev no\"><b>Pilihan E salah.</b> Fonem /k/ pada kata dasar <i>kambing hitam</i> seharusnya luluh menjadi ng (<i>mengambinghitamkan</i>, bukan <i>mengkambinghitamkan</i>), serta <i>melipat gandakan</i> harus ditulis serangkai (<i>melipatgandakan</i>).</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah C.</b></p></section>"
  },
  {
    "n": 4,
    "text": "(1) Urbanisasi yang tidak terkendali di kota-kota megapolitan sering kali memicu ledakan populasi yang membebani daya dukung lingkungan perkotaan. (2) Keterbatasan lahan permukiman memicu maraknya kawasan kumuh di sepanjang bantaran sungai dan kolong jembatan layang. (3) Akibatnya, sistem sanitasi memburuk dan potensi bencana hidrometeorologis seperti genangan banjir kian meningkat. (4) Di sisi lain, adopsi konsep smart city berbasis kecerdasan buatan mulai diterapkan oleh pemerintah daerah guna mengurai kepadatan penduduk. (5) Melalui sensor berbasis data raya, pemerintah kota dapat memetakan konsentrasi warga dan mobilitas transportasi publik secara seketika. (6) Integrasi infrastruktur digital tersebut terbukti membantu penataan ruang dan mempercepat penyaluran layanan tanggap darurat.\n\nAgar menjadi dua paragraf yang padu dan memiliki kesatuan gagasan, wacana tersebut sebaiknya dipecah menjadi dua paragraf dengan menjadikan kalimat ….",
    "html": "<div class=\"qp\">(1) Urbanisasi yang tidak terkendali di kota-kota megapolitan sering kali memicu ledakan populasi yang membebani daya dukung lingkungan perkotaan. (2) Keterbatasan lahan permukiman memicu maraknya kawasan kumuh di sepanjang bantaran sungai dan kolong jembatan layang. (3) Akibatnya, sistem sanitasi memburuk dan potensi bencana hidrometeorologis seperti genangan banjir kian meningkat. (4) Di sisi lain, adopsi konsep <i>smart city</i> berbasis kecerdasan buatan mulai diterapkan oleh pemerintah daerah guna mengurai kepadatan penduduk. (5) Melalui sensor berbasis data raya, pemerintah kota dapat memetakan konsentrasi warga dan mobilitas transportasi publik secara seketika. (6) Integrasi infrastruktur digital tersebut terbukti membantu penataan ruang dan mempercepat penyaluran layanan tanggap darurat.</div><div class=\"qp\">Agar menjadi dua paragraf yang padu dan memiliki kesatuan gagasan, wacana tersebut sebaiknya dipecah menjadi dua paragraf dengan menjadikan kalimat ….</div>",
    "options": [
      "(2) sebagai awal paragraf kedua",
      "(3) sebagai awal paragraf kedua",
      "(4) sebagai awal paragraf kedua",
      "(5) sebagai awal paragraf kedua",
      "(6) sebagai awal paragraf kedua"
    ],
    "answer": "C",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: C</b></p>\n<p>Satu paragraf yang baik hanya memuat satu kesatuan gagasan utama. Apabila terjadi peralihan topik bahasan yang mendasar, wacana harus dipisahkan menjadi paragraf baru.</p>\n<p><b>Kalimat (1), (2), dan (3)</b> memuat fokus gagasan mengenai dampak negatif dan permasalahan akibat urbanisasi tidak terkendali (kepadatan, permukiman kumuh, dan kerusakan sanitasi/banjir).</p>\n<p><b>Kalimat (4), (5), dan (6)</b> mengalami peralihan topik menuju dimensi baru, yaitu penerapan teknologi <i>smart city</i> berbasis kecerdasan buatan sebagai solusi tata kelola kota.</p>\n<p>Oleh karena itu, titik peralihan fokus topik dimulai pada <b>kalimat (4)</b>, sehingga kalimat (4) paling tepat dijadikan kalimat pembuka untuk paragraf kedua.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah C.</b></p></section>"
  },
  {
    "n": 5,
    "text": "Kalimat berikut yang menggunakan tanda hubung (-), tanda pisah (—), atau tanda kurung siku ([…]) secara tepat sesuai kaidah EYD Edisi V adalah ….",
    "html": "<div class=\"qp\">Kalimat berikut yang menggunakan tanda hubung (-), tanda pisah (—), atau tanda kurung siku ([…]) secara <b>tepat</b> sesuai kaidah EYD Edisi V adalah ….</div>",
    "options": [
      "Penyelenggaraan pameran kedirgantaraan rute Jakarta - Surabaya akan berlangsung pada tanggal 12–18 November 2024.",
      "Penyunting naskah kuno menyisipkan huruf perbaikan dalam teks: “Pemberontakan itu berhasil di-[padam]-kan oleh pasukan kerajaan pada abad ke-14.”",
      "Peralatan laboratorium canggih ini (spesifikasi teknis alat dibahas pada Lampiran C [lihat halaman 88—92]) siap dioperasikan bulan depan.",
      "Gerakan pemberdayaan ekonomi masyarakat—seperti yang telah kita diskusikan kemarin—, akan difokuskan pada penguatan sektor UMKM.",
      "Semua kementerian teknis diinstruksikan untuk mematuhi regulasi pasca-sidang kabinet paripurna yang dipimpin oleh Presiden."
    ],
    "answer": "C",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: C</b></p>\n<p>Analisis penerapan kaidah tanda baca sesuai EYD Edisi V:</p>\n<p class=\"ev no\"><b>Pilihan A salah:</b> Hubungan antarkota (rute Jakarta sampai Surabaya) dan rentang tanggal (12 sampai dengan 18) harus menggunakan tanda pisah (—) tanpa spasi (<i>Jakarta—Surabaya</i> dan <i>12—18 November 2024</i>), bukan tanda hubung (-) apalagi dengan spasi.</p>\n<p class=\"ev no\"><b>Pilihan B salah:</b> Tanda kurung siku digunakan untuk mengapit huruf, kata, atau kelompok kata yang ditambahkan atau dikoreksi pada naskah asli tanpa perlu menyisipkan tanda hubung di luar tanda kurung siku (cukup ditulis <i>di[padam]kan</i>).</p>\n<p class=\"ev ok\"><b>Pilihan C BENAR:</b> Tanda kurung siku ([…]) digunakan secara tepat untuk mengapit keterangan/penjelasan yang berada di dalam bagian kalimat yang sudah bertanda kurung biasa. Selain itu, tanda pisah (—) pada <i>88—92</i> tepat digunakan untuk menyatakan ‘sampai dengan’.</p>\n<p class=\"ev no\"><b>Pilihan D salah:</b> Tanda pisah ganda yang mengapit keterangan aposisi tidak boleh diikuti tanda koma sebelum melanjutkan klausa utama kalimat (tanda koma setelah tanda pisah kedua bersifat mubazir dan salah).</p>\n<p class=\"ev no\"><b>Pilihan E salah:</b> Bentuk terikat <i>pasca-</i> ditulis serangkai langsung tanpa tanda hubung apabila diikuti kata dasar berhuruf kecil (seharusnya <i>pascasidang</i>).</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah C.</b></p></section>"
  },
  {
    "n": 6,
    "text": "Kalimat manakah yang menggunakan tanda garis miring (/) secara tepat sesuai dengan kaidah EYD?",
    "options": [
      "Surat keputusan rektor tersebut dicatat dengan nomor: 104 / UN.1 / 2024.",
      "Harga sewa kamar asrama mahasiswa dipatok sebesar Rp750.000,00 / bulan.",
      "Peserta ujian wajib membawa kartu tanda peserta dan / atau kartu identitas resmi.",
      "Setiap warga negara berhak menyampaikan pendapatnya melalui media cetak dan/atau media elektronik.",
      "Tarif ongkos kirim antarpulau ditetapkan sebesar Rp25.000 /kg untuk paket reguler."
    ],
    "answer": "D",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: D</b></p>\n<p>Berdasarkan EYD Edisi V, tanda garis miring (/) ditulis rapat, tanpa spasi di depan maupun di belakangnya. Tanda ini dipakai (1) dalam nomor surat dan nomor pada alamat, (2) sebagai pengganti kata <i>atau</i>, <i>tiap</i>, atau <i>per</i>, dan (3) untuk penandaan masa satu tahun yang terbagi dalam dua tahun takwim.</p>\n<p>Analisis setiap pilihan jawaban:</p>\n<p class=\"ev no\"><b>Pilihan A salah:</b> <i>104 / UN.1 / 2024</i> ditulis dengan spasi; seharusnya <i>104/UN.1/2024</i>.</p>\n<p class=\"ev no\"><b>Pilihan B salah:</b> <i>Rp750.000,00 / bulan</i> (bermakna ‘per bulan’) memakai spasi; seharusnya <i>Rp750.000,00/bulan</i>.</p>\n<p class=\"ev no\"><b>Pilihan C salah:</b> <i>dan / atau</i> memakai spasi; seharusnya <i>dan/atau</i>.</p>\n<p class=\"ev ok\"><b>Pilihan D BENAR:</b> <i>dan/atau</i> ditulis rapat tanpa spasi sebelum dan sesudah garis miring.</p>\n<p class=\"ev no\"><b>Pilihan E salah:</b> <i>Rp25.000 /kg</i> masih menyisakan spasi di depan garis miring; seharusnya <i>Rp25.000/kg</i>.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah D.</b></p></section>"
  },
  {
    "n": 7,
    "text": "Cermatilah pilihan kalimat berikut!\n\nKalimat yang seluruh penulisan ejaan, kata serapan, huruf kapital, dan tanda bacanya ditulis secara TEPAT sesuai kaidah EYD adalah ….",
    "html": "<div class=\"qp\">Cermatilah pilihan kalimat berikut!</div><div class=\"qp\">Kalimat yang seluruh penulisan ejaan, kata serapan, huruf kapital, dan tanda bacanya ditulis secara <b>TEPAT</b> sesuai kaidah EYD adalah ….</div>",
    "options": [
      "Pemerintah Provinsi Jawa Timur saat ini berupaya mempromosikan komoditas unggulan berupa jeruk Bali ke pasar internasional.",
      "Menurut Dr. Ir. Bambang Haryanto, M.M., dekonsentrasi anggaran wajib berpedoman pada asas akuntabilitas, transparansi, dan efisiensi.",
      "Peneliti tersebut telah mem-follow-up survei lapangan; tetapi, responden belum memberikan respons secara komprehensif.",
      "Sebagai langkah awal penataan organisasi, panitia menyelenggarakan pelatihan pra jabatan bagi seluruh sub-koordinator wilayah.",
      "Meskipun para delegasi telah menyepakati draf nota kesepahaman itu, namun realisasi kerja sama masih menunggu izin kementerian."
    ],
    "optionsHtml": [
      "Pemerintah Provinsi Jawa Timur saat ini berupaya mempromosikan komoditas unggulan berupa jeruk Bali ke pasar internasional.",
      "Menurut Dr. Ir. Bambang Haryanto, M.M., dekonsentrasi anggaran wajib berpedoman pada asas akuntabilitas, transparansi, dan efisiensi.",
      "Peneliti tersebut telah mem-<i>follow-up</i> survei lapangan; tetapi, responden belum memberikan respons secara komprehensif.",
      "Sebagai langkah awal penataan organisasi, panitia menyelenggarakan pelatihan pra jabatan bagi seluruh sub-koordinator wilayah.",
      "Meskipun para delegasi telah menyepakati draf nota kesepahaman itu, namun realisasi kerja sama masih menunggu izin kementerian."
    ],
    "answer": "B",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: B</b></p>\n<p>Soal ini menguji empat aspek sekaligus: ejaan, kata serapan, huruf kapital, dan tanda baca. Setiap pilihan perlu diperiksa satu per satu.</p>\n<p class=\"ev no\"><b>Pilihan A salah:</b> Nama geografi yang dipakai sebagai nama jenis ditulis dengan huruf kecil, sehingga seharusnya <i>jeruk bali</i>, bukan <i>jeruk Bali</i>.</p>\n<p class=\"ev ok\"><b>Pilihan B BENAR:</b> Gelar akademik ditulis dengan titik pada setiap singkatan (<i>Dr.</i>, <i>Ir.</i>, <i>M.M.</i>), kata serapan <i>dekonsentrasi</i>, <i>akuntabilitas</i>, <i>transparansi</i>, dan <i>efisiensi</i> sudah baku, begitu pula <i>asas</i> (bukan <i>azas</i>), dan koma sesudah keterangan pembuka <i>Menurut …</i> sudah tepat.</p>\n<p class=\"ev no\"><b>Pilihan C salah:</b> Tanda titik koma sudah berfungsi sebagai pengganti kata penghubung, sehingga tidak boleh diikuti kata <i>tetapi</i>. Seharusnya <i>…; responden belum …</i> atau <i>…, tetapi responden belum …</i>.</p>\n<p class=\"ev no\"><b>Pilihan D salah:</b> Unsur terikat <i>pra-</i> dan <i>sub-</i> ditulis serangkai dengan kata dasar berhuruf kecil: <i>prajabatan</i> dan <i>subkoordinator</i>.</p>\n<p class=\"ev no\"><b>Pilihan E salah:</b> <i>Meskipun …, namun …</i> merupakan penggunaan dua konjungsi sekaligus dalam satu kalimat (konjungsi ganda) sehingga tidak efektif; salah satunya harus dihilangkan.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah B.</b></p></section>"
  },
  {
    "n": 8,
    "text": "Perhatikan kalimat berikut!\n\nUntuk menanggulangi pencemaran limbah industri, pemerintah daerah mewajibkan setiap pabrik melakukan pengolahan limbah mandiri, meremajakan instalasi pipa pembuangan, dan pemantauan kualitas baku mutu air secara berkala.\n\nKalimat di atas tidak efektif karena melanggar prinsip keparalelan bentuk (kesejajaran). Perbaikan yang paling tepat agar kalimat tersebut menjadi efektif adalah ….",
    "html": "<div class=\"qp\">Perhatikan kalimat berikut!</div><div class=\"qp\"><i>Untuk menanggulangi pencemaran limbah industri, pemerintah daerah mewajibkan setiap pabrik melakukan pengolahan limbah mandiri, meremajakan instalasi pipa pembuangan, dan pemantauan kualitas baku mutu air secara berkala.</i></div><div class=\"qp\">Kalimat di atas tidak efektif karena melanggar prinsip keparalelan bentuk (kesejajaran). Perbaikan yang paling tepat agar kalimat tersebut menjadi efektif adalah ….</div>",
    "options": [
      "mengubah kata pemantauan menjadi memantau",
      "mengubah frasa pemerintah daerah mewajibkan menjadi diwajibkan oleh pemerintah daerah",
      "mengubah kata meremajakan menjadi peremajaan",
      "mengubah kata melakukan menjadi dilakukan",
      "menghilangkan kata Untuk pada awal kalimat"
    ],
    "optionsHtml": [
      "mengubah kata <i>pemantauan</i> menjadi <i>memantau</i>",
      "mengubah frasa <i>pemerintah daerah mewajibkan</i> menjadi <i>diwajibkan oleh pemerintah daerah</i>",
      "mengubah kata <i>meremajakan</i> menjadi <i>peremajaan</i>",
      "mengubah kata <i>melakukan</i> menjadi <i>dilakukan</i>",
      "menghilangkan kata <i>Untuk</i> pada awal kalimat"
    ],
    "answer": "A",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: A</b></p>\n<p>Prinsip keparalelan menuntut agar unsur-unsur perincian yang setara memiliki bentuk gramatikal yang sama. Perincian pada kalimat tersebut adalah:</p>\n<p><i>melakukan</i> pengolahan limbah mandiri → frasa verba (verba aktif me-).</p>\n<p><i>meremajakan</i> instalasi pipa pembuangan → frasa verba (verba aktif me-kan).</p>\n<p><i>pemantauan</i> kualitas baku mutu air → nomina (pe-/-an), sehingga menyimpang dari dua unsur sebelumnya.</p>\n<p>Unsur yang tidak sejajar adalah <i>pemantauan</i>. Agar ketiganya sama-sama berbentuk verba aktif, kata tersebut diubah menjadi <i>memantau</i>: <i>melakukan …, meremajakan …, dan memantau …</i>.</p>\n<p class=\"ev no\"><b>Pilihan B salah:</b> Mengubah klausa utama menjadi pasif tidak menyentuh unsur perincian yang tidak sejajar.</p>\n<p class=\"ev no\"><b>Pilihan C salah:</b> Mengubah <i>meremajakan</i> menjadi <i>peremajaan</i> justru menambah penyimpangan, sebab unsur pertama (<i>melakukan</i>) tetap berbentuk verba sementara dua unsur lain berbentuk nomina.</p>\n<p class=\"ev no\"><b>Pilihan D salah:</b> Mengubah <i>melakukan</i> menjadi <i>dilakukan</i> hanya mengubah satu unsur menjadi pasif, sedangkan <i>meremajakan</i> tetap aktif dan <i>pemantauan</i> tetap nomina.</p>\n<p class=\"ev no\"><b>Pilihan E salah:</b> Menghilangkan kata <i>Untuk</i> tidak berkaitan dengan kesejajaran bentuk, dan malah membuat anak kalimat tujuan kehilangan penanda.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah A.</b></p></section>"
  },
  {
    "n": 9,
    "text": "Cermatilah kalimat-kalimat di bawah ini!\n\nPenggunaan tanda titik dua (:) yang TEPAT menurut kaidah bahasa Indonesia terdapat pada kalimat ….",
    "html": "<div class=\"qp\">Cermatilah kalimat-kalimat di bawah ini!</div><div class=\"qp\">Penggunaan tanda titik dua (:) yang <b>TEPAT</b> menurut kaidah bahasa Indonesia terdapat pada kalimat ….</div>",
    "options": [
      "Koperasi siswa menyediakan perlengkapan tulis sekolah: buku catatan, pensil, pulpen, dan penggaris segitiga.",
      "Syarat-syarat yang harus dilampirkan oleh pelamar beasiswa antara lain: salinan ijazah, transkrip nilai, dan sertifikat prestasi.",
      "Tiga aspek utama dalam evaluasi kinerja pegawai adalah: kedisiplinan, integritas, dan capaian target kerja bulanan.",
      "Lembaga penelitian tersebut sedang membutuhkan peralatan laboratorium, yaitu: sentrifuga, mikroskop binokuler, dan autoklaf.",
      "Setiap calon mahasiswa baru diwajibkan untuk membawa: kartu peserta ujian, tanda pengenal diri, dan pasfoto terbaru."
    ],
    "answer": "A",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: A</b></p>\n<p>Menurut EYD Edisi V, tanda titik dua dipakai pada akhir pernyataan lengkap yang diikuti rangkaian atau pemerian. Tanda ini tidak dipakai jika kalimat belum lengkap sebelum rangkaian, misalnya setelah kata <i>adalah</i>, <i>yaitu</i>, <i>antara lain</i>, <i>seperti</i>, atau setelah verba/preposisi yang masih memerlukan pelengkap.</p>\n<p class=\"ev ok\"><b>Pilihan A BENAR:</b> <i>Koperasi siswa menyediakan perlengkapan tulis sekolah</i> sudah merupakan pernyataan lengkap (subjek–predikat–objek), sehingga boleh diikuti titik dua dan rincian.</p>\n<p class=\"ev no\"><b>Pilihan B salah:</b> Titik dua tidak boleh dipakai setelah <i>antara lain</i>; seharusnya <i>… antara lain salinan ijazah, …</i>.</p>\n<p class=\"ev no\"><b>Pilihan C salah:</b> Titik dua tidak boleh dipakai setelah <i>adalah</i>; rangkaian di sana merupakan pelengkap predikat.</p>\n<p class=\"ev no\"><b>Pilihan D salah:</b> Titik dua tidak boleh dipakai setelah <i>yaitu</i>; seharusnya <i>… laboratorium, yaitu sentrifuga, …</i>.</p>\n<p class=\"ev no\"><b>Pilihan E salah:</b> Kalimat belum lengkap karena <i>membawa</i> masih memerlukan objek, sehingga titik dua tidak boleh diletakkan langsung setelahnya.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah A.</b></p></section>"
  },
  {
    "n": 10,
    "text": "Cermatilah kalimat-kalimat berikut!\n\nKalimat yang memiliki struktur gramatikal BAKU serta menerapkan bentukan pasif dan preposisi secara tepat adalah ….",
    "html": "<div class=\"qp\">Cermatilah kalimat-kalimat berikut!</div><div class=\"qp\">Kalimat yang memiliki struktur gramatikal <b>BAKU</b> serta menerapkan bentukan pasif dan preposisi secara tepat adalah ….</div>",
    "options": [
      "Buku pedoman metodologi penelitian terbitan kementerian itu telah kami pelajari bersama di perpustakaan pusat.",
      "Tingkat keberhasilan pemulihan ekosistem mangrove sangat bergantung kepada komitmen masyarakat pesisir.",
      "Tim penilai independen lomba karya ilmiah remaja tersebut terdiri dari lima orang akademisi dan dua orang peneliti senior.",
      "Laporan pertanggungjawaban kegiatan bakti sosial di desa terpencil itu sudah diselesaikan oleh saya kemarin lusa.",
      "Berkas rancangan anggaran tahunan divisi pemasaran harus diserahkan oleh Anda kepada bagian keuangan sebelum tenggat waktu berakhir."
    ],
    "answer": "A",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: A</b></p>\n<p>Dua kaidah yang diuji pada soal ini:</p>\n<p><b>Kalimat pasif dengan pelaku pronomina persona pertama atau kedua</b> (<i>saya</i>, <i>aku</i>, <i>kami</i>, <i>kita</i>, <i>kamu</i>, <i>Anda</i>) dibentuk dengan menempatkan pronomina tepat di depan verba dasar tanpa awalan <i>di-</i> dan tanpa kata <i>oleh</i> (misalnya <i>sudah saya selesaikan</i>, <i>harus Anda serahkan</i>).</p>\n<p><b>Preposisi baku</b> yang menyertai kata tertentu, misalnya <i>bergantung pada</i> dan <i>terdiri atas</i>.</p>\n<p>Analisis setiap pilihan jawaban:</p>\n<p class=\"ev ok\"><b>Pilihan A BENAR:</b> <i>telah kami pelajari</i> sesuai pola pasif dengan pelaku persona pertama, dan preposisi <i>di</i> pada <i>di perpustakaan pusat</i> tepat untuk menyatakan tempat.</p>\n<p class=\"ev no\"><b>Pilihan B salah:</b> Preposisi yang tepat adalah <i>bergantung pada</i>, bukan <i>bergantung kepada</i> (<i>kepada</i> lazim untuk penerima berupa orang).</p>\n<p class=\"ev no\"><b>Pilihan C salah:</b> Bentuk bakunya adalah <i>terdiri atas</i>, bukan <i>terdiri dari</i>.</p>\n<p class=\"ev no\"><b>Pilihan D salah:</b> <i>diselesaikan oleh saya</i> tidak baku; seharusnya <i>sudah saya selesaikan</i>.</p>\n<p class=\"ev no\"><b>Pilihan E salah:</b> <i>diserahkan oleh Anda</i> tidak baku; seharusnya <i>harus Anda serahkan</i>.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah A.</b></p></section>"
  },
  {
    "n": 11,
    "text": "Tahapan awal mitigasi bencana mencakup identifikasi daerah rawan, pemetaan potensi bahaya, […] warga secara berkala, dan penyediaan jalur evakuasi.\n\nKata berimbuhan yang tepat untuk melengkapi bagian rumpang agar kalimat tersebut memiliki kesejajaran bentuk (keparalelan) adalah ….",
    "options": [
      "penyuluhan",
      "menyuluhkan",
      "disuluh",
      "pesuluh",
      "tersuluh"
    ],
    "answer": "A",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: A</b></p>\n<p>Unsur-unsur perincian pada kalimat tersebut berbentuk nomina:</p>\n<p><i>identifikasi</i> daerah rawan → nomina.</p>\n<p><i>pemetaan</i> potensi bahaya → nomina berkonfiks pe-/-an.</p>\n<p><i>penyediaan</i> jalur evakuasi → nomina berkonfiks pe-/-an.</p>\n<p>Agar sejajar, bagian rumpang harus diisi nomina berkonfiks pe-/-an dari kata dasar <i>suluh</i>, yaitu <b>penyuluhan</b> (<i>penyuluhan warga secara berkala</i>).</p>\n<p class=\"ev no\"><b>Pilihan B salah:</b> <i>menyuluhkan</i> adalah verba aktif (me-kan).</p>\n<p class=\"ev no\"><b>Pilihan C salah:</b> <i>disuluh</i> adalah verba pasif (di-).</p>\n<p class=\"ev no\"><b>Pilihan D salah:</b> <i>pesuluh</i> bukan bentukan baku (bentuk bakunya <i>penyuluh</i> untuk orang atau <i>penyuluhan</i> untuk proses).</p>\n<p class=\"ev no\"><b>Pilihan E salah:</b> <i>tersuluh</i> adalah verba pasif keadaan (ter-).</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah A.</b></p></section>"
  },
  {
    "n": 12,
    "text": "Perhatikan kalimat-kalimat acak berikut!\n\n(1) Oleh karena itu, restorasi lahan gambut menjadi prioritas mutlak dalam agenda mitigasi perubahan iklim.\n\n(2) Lahan gambut tropis menyimpan cadangan karbon terestrial yang sangat melimpah.\n\n(3) Pelepasan karbon secara masif ini kemudian memicu peningkatan konsentrasi gas rumah kaca di atmosfer bumi.\n\n(4) Namun, saat lahan basah tersebut mengalami drainase dan terbakar, karbon yang terkunci ribuan tahun akan terlepas ke udara.\n\n(5) Jika tidak segera dipulihkan, degradasi ekosistem ini akan mempercepat laju pemanasan global secara signifikan.\n\nUrutan kalimat yang tepat agar membentuk paragraf yang padu dan koheren adalah ….",
    "options": [
      "(2)-(4)-(3)-(5)-(1)",
      "(2)-(3)-(4)-(1)-(5)",
      "(2)-(4)-(5)-(3)-(1)",
      "(4)-(2)-(3)-(5)-(1)",
      "(4)-(3)-(2)-(1)-(5)"
    ],
    "answer": "A",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: A</b></p>\n<p>Paragraf yang padu disusun dari gagasan umum menuju khusus dengan memperhatikan penanda kohesi (konjungsi dan kata rujukan).</p>\n<p><b>Kalimat (2)</b> menjadi kalimat pembuka (kalimat topik) karena paling umum dan tidak memakai konjungsi: lahan gambut tropis menyimpan cadangan karbon yang melimpah.</p>\n<p><b>Kalimat (4)</b> diawali konjungsi pertentangan <i>Namun</i>; frasa <i>lahan basah tersebut</i> merujuk pada lahan gambut pada kalimat (2). Isinya menjelaskan bahwa ketika gambut dikeringkan dan terbakar, karbon terlepas.</p>\n<p><b>Kalimat (3)</b> memakai frasa rujukan <i>Pelepasan karbon secara masif ini</i> yang merujuk pada karbon yang terlepas pada kalimat (4), lalu menjelaskan akibatnya, yaitu meningkatnya gas rumah kaca.</p>\n<p><b>Kalimat (5)</b> menyampaikan dampak lanjutan dan peringatan: jika tidak dipulihkan, degradasi ekosistem ini mempercepat pemanasan global.</p>\n<p><b>Kalimat (1)</b> diawali konjungsi simpulan <i>Oleh karena itu</i>, sehingga tepat sebagai penutup yang menegaskan restorasi gambut sebagai prioritas.</p>\n<p>Dengan demikian, urutan yang paling tepat adalah <b>(2)-(4)-(3)-(5)-(1)</b>. Urutan lain keliru karena kalimat (4) tidak dapat membuka paragraf (diawali <i>Namun</i>), kalimat (3) tidak dapat langsung mengikuti (2) karena <i>pelepasan karbon … ini</i> belum memiliki acuan, dan kalimat (1) harus berada di akhir sebagai simpulan.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah A.</b></p></section>"
  },
  {
    "n": 13,
    "text": "Kalimat berikut yang memuat penulisan bentukan gabungan kata (kata majemuk) berimbuhan secara tepat adalah ….",
    "html": "<div class=\"qp\">Kalimat berikut yang memuat penulisan bentukan gabungan kata (kata majemuk) berimbuhan secara <b>tepat</b> adalah ….</div>",
    "options": [
      "Pemerintah daerah berupaya menindak lanjuti laporan dugaan pencemaran air tanah.",
      "Panitia penyelenggara telah menandatangani kontrak kerja sama dengan pihak sponsor utama.",
      "Seluruh perwakilan warga bersepakat untuk menggaris bawahi pentingnya kerukunan sosial.",
      "Pihak yayasan meminta bendahara untuk mempertanggung jawabkan penggunaan dana bantuan.",
      "Media massa dilarang memutar balikkan opini publik dengan menyajikan data yang keliru."
    ],
    "answer": "B",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: B</b></p>\n<p>Menurut EYD Edisi V, gabungan kata (kata majemuk) yang mendapat awalan dan akhiran sekaligus (imbuhan gabung/konfiks) ditulis serangkai. Gabungan kata yang tidak berimbuhan tetap ditulis terpisah.</p>\n<p class=\"ev no\"><b>Pilihan A salah:</b> <i>menindak lanjuti</i> seharusnya <i>menindaklanjuti</i> (konfiks me-i).</p>\n<p class=\"ev ok\"><b>Pilihan B BENAR:</b> <i>menandatangani</i> (tanda tangan + me-i) ditulis serangkai, dan <i>kerja sama</i> sebagai kata majemuk tanpa imbuhan tetap ditulis terpisah.</p>\n<p class=\"ev no\"><b>Pilihan C salah:</b> <i>menggaris bawahi</i> seharusnya <i>menggarisbawahi</i> (konfiks me-i).</p>\n<p class=\"ev no\"><b>Pilihan D salah:</b> <i>mempertanggung jawabkan</i> seharusnya <i>mempertanggungjawabkan</i> (konfiks memper-kan).</p>\n<p class=\"ev no\"><b>Pilihan E salah:</b> <i>memutar balikkan</i> seharusnya <i>memutarbalikkan</i> (konfiks me-kan).</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah B.</b></p></section>"
  },
  {
    "n": 14,
    "text": "(1) Terumbu karang merupakan salah satu ekosistem laut yang paling produktif dan memiliki keanekaragaman hayati tertinggi di dunia. (2) Selain menjadi tempat tinggal dan mencari makan bagi ribuan spesies laut, karang juga berfungsi sebagai pelindung alami kawasan pesisir dari hempasan gelombang besar dan abrasi. (3) Keberadaan struktur kalsium karbonat yang masif mampu mereduksi energi ombak hingga lebih dari sembilan puluh persen sebelum mencapai bibir pantai. (4) Namun, saat ini ekosistem yang bernilai tinggi tersebut menghadapi ancaman serius akibat fenomena pemutihan karang (coral bleaching) yang dipicu kenaikan suhu air laut. (5) Suhu permukaan air laut yang menghangat menyebabkan alga simbiotik zooxanthellae terlepas dari jaringan inangnya, sehingga karang kehilangan warna alami dan sumber energi utamanya. (6) Apabila kondisi stres termal berlangsung berkepanjangan, koloni karang yang memutih perlahan-lahan akan mati dan runtuh menjadi puing-puing kapur tak bernyawa.\n\nTeks di atas akan lebih padu jika dipecah menjadi dua paragraf. Pemisahan paragraf yang paling tepat dilakukan dengan menjadikan ….",
    "html": "<div class=\"qp\">(1) Terumbu karang merupakan salah satu ekosistem laut yang paling produktif dan memiliki keanekaragaman hayati tertinggi di dunia. (2) Selain menjadi tempat tinggal dan mencari makan bagi ribuan spesies laut, karang juga berfungsi sebagai pelindung alami kawasan pesisir dari hempasan gelombang besar dan abrasi. (3) Keberadaan struktur kalsium karbonat yang masif mampu mereduksi energi ombak hingga lebih dari sembilan puluh persen sebelum mencapai bibir pantai. (4) Namun, saat ini ekosistem yang bernilai tinggi tersebut menghadapi ancaman serius akibat fenomena pemutihan karang (<i>coral bleaching</i>) yang dipicu kenaikan suhu air laut. (5) Suhu permukaan air laut yang menghangat menyebabkan alga simbiotik <i>zooxanthellae</i> terlepas dari jaringan inangnya, sehingga karang kehilangan warna alami dan sumber energi utamanya. (6) Apabila kondisi stres termal berlangsung berkepanjangan, koloni karang yang memutih perlahan-lahan akan mati dan runtuh menjadi puing-puing kapur tak bernyawa.</div><div class=\"qp\">Teks di atas akan lebih padu jika dipecah menjadi dua paragraf. Pemisahan paragraf yang paling tepat dilakukan dengan menjadikan ….</div>",
    "options": [
      "kalimat (2) sebagai awal paragraf baru",
      "kalimat (3) sebagai awal paragraf baru",
      "kalimat (4) sebagai awal paragraf baru",
      "kalimat (5) sebagai awal paragraf baru",
      "kalimat (6) sebagai awal paragraf baru"
    ],
    "answer": "C",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: C</b></p>\n<p>Satu paragraf hanya memuat satu gagasan utama. Pemisahan paragraf dilakukan pada titik terjadinya peralihan topik.</p>\n<p><b>Kalimat (1), (2), dan (3)</b> membahas keunggulan dan fungsi terumbu karang: ekosistem produktif, tempat hidup berbagai spesies, serta pelindung pesisir yang meredam energi ombak.</p>\n<p><b>Kalimat (4), (5), dan (6)</b> membahas ancaman terhadap terumbu karang: pemutihan karang akibat kenaikan suhu laut, lepasnya alga simbiotik, hingga matinya koloni karang.</p>\n<p>Peralihan topik ditandai oleh konjungsi pertentangan <i>Namun</i> pada <b>kalimat (4)</b> yang membalik gagasan dari manfaat menjadi ancaman. Jadi, kalimat (4) paling tepat menjadi awal paragraf baru. Kalimat (2), (3), (5), dan (6) masih merupakan kelanjutan gagasan dalam paragraf masing-masing sehingga tidak tepat dijadikan pemisah.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah C.</b></p></section>"
  },
  {
    "n": 15,
    "text": "Penggunaan tanda baca hubung (-) atau pisah (—) yang tepat sesuai dengan kaidah EYD terdapat pada kalimat ….",
    "html": "<div class=\"qp\">Penggunaan tanda baca hubung (-) atau pisah (—) yang <b>tepat</b> sesuai dengan kaidah EYD terdapat pada kalimat ….</div>",
    "options": [
      "Konferensi lingkungan hidup itu dijadwalkan berlangsung dari tanggal 10—15 Mei 2024.",
      "Rute penerbangan internasional Denpasar—Sydney mencatat kenaikan jumlah penumpang yang signifikan.",
      "Forum dialog antar-budaya diselenggarakan untuk mempererat hubungan pemuda di kawasan perbatasan.",
      "Seluruh masyarakat se Jawa Tengah diimbau untuk mewaspadai potensi bencana hidrometeorologi.",
      "Perjalanan dinas rute Jakarta-Surabaya ditempuh menggunakan kereta api cepat."
    ],
    "answer": "B",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: B</b></p>\n<p>Menurut EYD Edisi V, tanda pisah (—) ditulis tanpa spasi dan dipakai di antara dua bilangan, tanggal, atau dua nama tempat dengan arti ‘sampai dengan’ atau ‘ke’. Tanda hubung (-) dipakai, antara lain, untuk menyambung awalan <i>se-</i> dengan kata berhuruf kapital.</p>\n<p class=\"ev no\"><b>Pilihan A salah:</b> Tanda pisah sudah bermakna ‘sampai dengan’ sehingga tidak dipakai bersama kata <i>dari</i>. Penulisan yang tepat adalah <i>10—15 Mei 2024</i> atau <i>dari tanggal 10 sampai 15 Mei 2024</i>.</p>\n<p class=\"ev ok\"><b>Pilihan B BENAR:</b> <i>Denpasar—Sydney</i> menyatakan rute ‘dari Denpasar ke Sydney’ sehingga memakai tanda pisah tanpa spasi.</p>\n<p class=\"ev no\"><b>Pilihan C salah:</b> Awalan <i>antar-</i> ditulis serangkai dengan kata dasar berhuruf kecil, yaitu <i>antarbudaya</i>.</p>\n<p class=\"ev no\"><b>Pilihan D salah:</b> Awalan <i>se-</i> yang diikuti kata berhuruf kapital harus diberi tanda hubung, yaitu <i>se-Jawa Tengah</i>.</p>\n<p class=\"ev no\"><b>Pilihan E salah:</b> Rute antarkota memakai tanda pisah, bukan tanda hubung; seharusnya <i>Jakarta—Surabaya</i>.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah B.</b></p></section>"
  },
  {
    "n": 16,
    "text": "Perhatikan kalimat berikut!\n\nPemerintah daerah menganggarkan dana pemulihan pasca bencana sebesar Rp250.000.000,00 / tahun untuk program perbaikan tanggul penahan ombak.\n\nPerbaikan penulisan kata dan tanda baca yang dicetak miring pada kalimat tersebut adalah ….",
    "html": "<div class=\"qp\">Perhatikan kalimat berikut!</div><div class=\"qp\">Pemerintah daerah menganggarkan dana pemulihan <i>pasca bencana</i> sebesar <i>Rp250.000.000,00 / tahun</i> untuk program perbaikan tanggul penahan ombak.</div><div class=\"qp\">Perbaikan penulisan kata dan tanda baca yang dicetak miring pada kalimat tersebut adalah ….</div>",
    "options": [
      "pascabencana dan Rp250.000.000,00/tahun",
      "pasca bencana dan Rp250.000.000,00 / tahun",
      "pasca-bencana dan Rp250.000.000,00/tahun",
      "pascabencana dan Rp250.000.000,00 / tahun",
      "pasca-bencana dan Rp250.000.000,00–tahun"
    ],
    "answer": "A",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: A</b></p>\n<p>Ada dua kaidah EYD Edisi V yang diuji pada kalimat ini:</p>\n<p><i>pasca-</i> adalah unsur terikat yang ditulis serangkai dengan kata dasar berhuruf kecil, sehingga <i>pasca bencana</i> menjadi <i>pascabencana</i>. Tanda hubung hanya dipakai jika diikuti kata berhuruf kapital (misalnya <i>pasca-Reformasi</i>).</p>\n<p>Garis miring yang menyatakan ‘per’ ditulis rapat tanpa spasi, sehingga <i>Rp250.000.000,00 / tahun</i> menjadi <i>Rp250.000.000,00/tahun</i>.</p>\n<p class=\"ev ok\"><b>Pilihan A BENAR:</b> memenuhi kedua kaidah.</p>\n<p class=\"ev no\"><b>Pilihan B salah:</b> <i>pasca bencana</i> masih dipisah dan garis miring masih memakai spasi.</p>\n<p class=\"ev no\"><b>Pilihan C salah:</b> <i>pasca-bencana</i> tidak perlu tanda hubung karena kata dasarnya berhuruf kecil.</p>\n<p class=\"ev no\"><b>Pilihan D salah:</b> <i>pascabencana</i> sudah benar, tetapi garis miring masih memakai spasi.</p>\n<p class=\"ev no\"><b>Pilihan E salah:</b> <i>pasca-bencana</i> keliru, dan tanda pisah/hubung tidak dapat menggantikan garis miring untuk makna ‘per’.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah A.</b></p></section>"
  },
  {
    "n": 17,
    "text": "Bacalah wacana singkat berikut!\n\n(1) Menjelang liburan akhir tahun, keluarga Pak Surya berencana mengunjungi kerabatnya di Kota Padang.\n\n(2) Mereka ingin menikmati panorama Ngarai Sianok serta mencicipi hidangan khas seperti bika Ambon dan rendang daging.\n\n(3) Perjalanan darat tersebut direncanakan berlangsung selama tujuh hari, mulai dari tanggal 24 hingga 30 Desember.\n\n(4) Sebelum berangkat, Pak Surya memastikan semua dokumen kendaraan telah diperiksa dengan saksama.\n\n(5) Bagi mereka, perjalanan kali ini bukan sekadar liburan, melainkan sarana mempererat tali kekeluargaan.\n\nKesalahan penggunaan huruf kapital pada teks tersebut terdapat pada kalimat nomor ….",
    "options": [
      "(1)",
      "(2)",
      "(3)",
      "(4)",
      "(5)"
    ],
    "answer": "B",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: B</b></p>\n<p>Kaidah huruf kapital yang relevan pada teks ini:</p>\n<p>Huruf kapital dipakai pada unsur nama diri geografi (<i>Kota Padang</i>, <i>Ngarai Sianok</i>), nama bulan (<i>Desember</i>), dan sapaan yang diikuti nama orang (<i>Pak Surya</i>).</p>\n<p>Huruf kapital <b>tidak</b> dipakai pada nama geografi yang digunakan sebagai nama jenis (misalnya <i>jeruk bali</i>, <i>pisang ambon</i>, <i>bika ambon</i>).</p>\n<p>Analisis setiap kalimat:</p>\n<p class=\"ev no\"><b>Kalimat (1) benar:</b> <i>Pak Surya</i> (sapaan + nama) dan <i>Kota Padang</i> (nama diri geografi) tepat.</p>\n<p class=\"ev ok\"><b>Kalimat (2) SALAH:</b> <i>bika Ambon</i> adalah nama jenis kue yang berasal dari nama tempat sehingga ditulis dengan huruf kecil, yaitu <i>bika ambon</i>. Sementara itu, <i>Ngarai Sianok</i> sudah tepat.</p>\n<p class=\"ev no\"><b>Kalimat (3) benar:</b> <i>Desember</i> adalah nama bulan sehingga diawali huruf kapital.</p>\n<p class=\"ev no\"><b>Kalimat (4) benar:</b> <i>Pak Surya</i> tepat.</p>\n<p class=\"ev no\"><b>Kalimat (5) benar:</b> tidak ada huruf kapital yang salah.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah B.</b></p></section>"
  },
  {
    "n": 18,
    "text": "Kalimat berikut yang menerapkan prinsip keparalelan bentuk (kesejajaran struktur) secara tepat adalah ….",
    "options": [
      "Kegiatan penelitian ini meliputi pengumpulan data lapangan, menganalisis sampel laboratorium, dan penyusunan laporan akhir.",
      "Pemerintah berupaya memperkuat ketahanan pangan dengan membuka lahan baru, pemberian benih unggul, dan melatih para petani.",
      "Program penanggulangan banjir itu mencakup normalisasi bantaran sungai, pembangunan kolam retensi, dan pembersihan saluran drainase.",
      "Tahapan pelaksanaan kerja sama terdiri atas merancang nota kesepahaman, penandatanganan dokumen resmi, dan evaluasi rutin.",
      "Setiap pelamar diwajibkan melengkapi berkas administrasi, mengunggah portofolio digital, dan pemeriksaan kesehatan langsung."
    ],
    "answer": "C",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: C</b></p>\n<p>Keparalelan bentuk menuntut agar unsur-unsur perincian yang setara memakai kategori kata yang sama (semuanya nomina atau semuanya verba). Analisis bentuk setiap perincian:</p>\n<p class=\"ev no\"><b>Pilihan A salah:</b> <i>pengumpulan</i> (nomina), <i>menganalisis</i> (verba), <i>penyusunan</i> (nomina).</p>\n<p class=\"ev no\"><b>Pilihan B salah:</b> <i>membuka</i> (verba), <i>pemberian</i> (nomina), <i>melatih</i> (verba).</p>\n<p class=\"ev ok\"><b>Pilihan C BENAR:</b> <i>normalisasi</i>, <i>pembangunan</i>, dan <i>pembersihan</i> semuanya nomina sehingga sejajar.</p>\n<p class=\"ev no\"><b>Pilihan D salah:</b> <i>merancang</i> (verba), <i>penandatanganan</i> (nomina), <i>evaluasi</i> (nomina).</p>\n<p class=\"ev no\"><b>Pilihan E salah:</b> <i>melengkapi</i> (verba), <i>mengunggah</i> (verba), <i>pemeriksaan</i> (nomina).</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah C.</b></p></section>"
  },
  {
    "n": 19,
    "text": "Perhatikan kalimat-kalimat berikut!\n\n(1) Jurusan yang paling diminati di kampus itu adalah: Kedokteran, Ilmu Komunikasi, dan Manajemen.\n\n(2) Panitia membutuhkan beberapa perlengkapan kantor, seperti: kertas HVS, map, dan spidol.\n\n(3) Seminar nasional tersebut dihadiri oleh: peneliti, praktisi industri, dan mahasiswa dari berbagai kampus.\n\n(4) Fakultas Teknik memiliki tiga program studi unggulan: Teknik Sipil, Teknik Elektro, dan Teknik Mesin.\n\n(5) Faktor utama keterlambatan proyek antara lain: cuaca buruk, kendala logistik, dan kekurangan pekerja.\n\nPenggunaan tanda titik dua (:) yang tepat sesuai dengan kaidah EYD terdapat pada kalimat bernomor ….",
    "options": [
      "(1)",
      "(2)",
      "(3)",
      "(4)",
      "(5)"
    ],
    "answer": "D",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: D</b></p>\n<p>Tanda titik dua dipakai pada akhir pernyataan yang sudah lengkap bila diikuti rangkaian atau pemerian. Tanda ini tidak dipakai bila rangkaian merupakan pelengkap yang mengakhiri pernyataan, misalnya setelah <i>adalah</i>, <i>seperti</i>, <i>antara lain</i>, atau preposisi.</p>\n<p class=\"ev no\"><b>Kalimat (1) salah:</b> titik dua muncul setelah <i>adalah</i>.</p>\n<p class=\"ev no\"><b>Kalimat (2) salah:</b> titik dua muncul setelah <i>seperti</i>.</p>\n<p class=\"ev no\"><b>Kalimat (3) salah:</b> titik dua muncul setelah preposisi <i>oleh</i> sehingga memutus kalimat yang belum lengkap.</p>\n<p class=\"ev ok\"><b>Kalimat (4) BENAR:</b> <i>Fakultas Teknik memiliki tiga program studi unggulan</i> sudah merupakan pernyataan lengkap (subjek–predikat–objek), lalu diikuti rincian.</p>\n<p class=\"ev no\"><b>Kalimat (5) salah:</b> titik dua muncul setelah <i>antara lain</i>.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah D.</b></p></section>"
  },
  {
    "n": 20,
    "text": "Kalimat yang menggunakan konstruksi kalimat atau asosiasi preposisional yang baku adalah ….",
    "options": [
      "Laporan pertanggungjawaban itu sudah disampaikan oleh saya kepada pimpinan kemarin pagi.",
      "Tim penilai independen tersebut terdiri dari para pakar lingkungan dan akademisi senior.",
      "Keberhasilan inovasi digital ini sangat bergantung pada komitmen seluruh jajaran manajemen.",
      "Permasalahan operasional yang cukup rumit itu harus diselesaikan oleh kami secepatnya.",
      "Rencana kerja tahunan yang telah disusun bersama akan dipelajari oleh kita dalam rapat pleno."
    ],
    "answer": "C",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: C</b></p>\n<p>Soal ini menguji dua hal: bentuk pasif dengan pelaku pronomina persona pertama/kedua (ditempatkan langsung di depan verba dasar tanpa <i>di-</i> dan tanpa <i>oleh</i>) serta penggunaan preposisi baku yang menyertai kata tertentu.</p>\n<p class=\"ev no\"><b>Pilihan A salah:</b> <i>disampaikan oleh saya</i> tidak baku; seharusnya <i>sudah saya sampaikan</i>.</p>\n<p class=\"ev no\"><b>Pilihan B salah:</b> bentuk baku adalah <i>terdiri atas</i>, bukan <i>terdiri dari</i>.</p>\n<p class=\"ev ok\"><b>Pilihan C BENAR:</b> <i>bergantung pada</i> adalah asosiasi preposisional yang baku.</p>\n<p class=\"ev no\"><b>Pilihan D salah:</b> <i>diselesaikan oleh kami</i> tidak baku; seharusnya <i>harus kami selesaikan</i>.</p>\n<p class=\"ev no\"><b>Pilihan E salah:</b> <i>dipelajari oleh kita</i> tidak baku; seharusnya <i>akan kita pelajari</i>.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah C.</b></p></section>"
  }
];

// Pembahasan untuk siswa = pembahasan guru (field explain). Kunci peta adalah nomor soal.
export const EXPLAIN_SISWA = Object.fromEntries(QUESTIONS.map((q) => [String(q.n), q.explain]));
