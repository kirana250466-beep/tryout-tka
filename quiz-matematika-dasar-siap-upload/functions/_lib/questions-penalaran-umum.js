// Bank soal Penalaran Umum (quiz id "pu"): 30 soal TPS Penalaran Umum, pilihan A sampai E.
// Dibuat dari dokumen "Soal_TPS_Penalaran_Umum_Gabungan_No1-30.docx" (soal, kunci, dan pembahasan).
//
// Pembahasan guru dan siswa SAMA:
//  - Isi pembahasan ada di field explain tiap soal (HTML). Mode guru (login "Ferdi") menampilkannya langsung.
//  - Siswa menerima isi yang sama lewat EXPLAIN_SISWA di bawah file ini (dibuat otomatis dari field explain),
//    tepat setelah soal itu dijawab (lihat studentExplainOf di quizzes.js). Mengubah explain berarti mengubah keduanya.
//
// Catatan penyesuaian dari dokumen:
//  - Soal 3 di dokumen berbentuk tabel Benar/Salah. Di website diubah menjadi pilihan ganda kompleks:
//    pilih semua pernyataan yang BENAR (kunci B, C, D). Benar hanya jika himpunan pilihan sama persis dengan kunci.
//  - Soal 18 (pilih semua): pilihan H, M, L, I, F menjadi A sampai E, kunci A, B, D (H, M, I). Teks soal menyebut "delapan
//    mahasiswa" padahal hanya tujuh nama tertulis; dibiarkan sesuai dokumen, jawaban tidak terpengaruh. Pada pembahasan,
//    rantai nilai "H > I > M" di dokumen diperbaiki karena I dan M tidak dibandingkan di soal (hasil akhir tetap H, I, M).
//  - Soal 23 dan 28 di dokumen berupa isian angka (jawaban 10 dan 3), padahal website hanya mendukung pilihan ganda.
//    Diubah menjadi pilihan ganda A sampai E. Pengecoh soal 23: 9, 9,4, 9,6, 10,6 (kesalahan hitung yang umum),
//    soal 28: 0 sampai 4 (sisa pembagian yang mungkin). Frasa "Jawaban hanya dalam bentuk angka" dihapus.
//  - Soal 7: awal penjelasan opsi C terpotong di dokumen; kalimatnya dilengkapi dari kalimat lanjutannya.
//  - Soal 9: label penjelasan produktivitas yang tertulis "D" di dokumen dibetulkan menjadi opsi C.
//  - Soal 29: kalimat penutup pembahasan di dokumen tertulis "C"; dibetulkan menjadi B sesuai kunci.
//  - Soal 30: salah ketik "Rp13.500.00,00" pada soal di aplikasi dibaca sebagai Rp13.500.000,00.
//  - Soal 20, 21: kata kunci negasi (TIDAK MUNGKIN, PALING TIDAK BERPELUANG) ditulis kapital sebagai pengganti cetak tebal.
//  - Gambar soal 22 dan 23: img/pu-q22.png dan img/pu-q23.png (dari dokumen).
//  - Soal 21 memakai field html (tabel); field text tetap berisi versi teks biasa sebagai cadangan.
//  - Kunci sudah dihitung ulang satu per satu: 30 dari 30 sama dengan dokumen.
//
// File ini hanya dibaca server, jadi kunci dan pembahasan tidak dikirim ke siswa sebelum mereka menjawab.

export const QUESTIONS = [
  {
    "n": 1,
    "text": "Lebih dari 60% energi listrik yang digunakan di seluruh dunia berasal dari bahan bakar fosil, seperti batu bara, minyak, dan gas alam. Namun, penggunaan energi fosil secara berlebihan menyebabkan berbagai masalah lingkungan, seperti polusi udara dan emisi gas rumah kaca. Oleh karena itu, diperlukan pemahaman dan tindakan untuk menghemat energi listrik dan beralih ke sumber energi terbarukan.\n\nBerdasarkan informasi tersebut, manakah pernyataan yang PASTI BENAR?",
    "options": [
      "Energi listrik dari bahan bakar fosil adalah satu-satunya sumber energi yang dapat memenuhi kebutuhan manusia saat ini.",
      "Penggunaan energi listrik yang boros akan mempercepat habisnya cadangan bahan bakar fosil dan memperburuk masalah lingkungan.",
      "Semua sumber energi terbarukan menghasilkan listrik dengan efisiensi yang sama seperti bahan bakar fosil.",
      "Polusi udara yang dihasilkan dari bahan bakar fosil hanya berdampak pada lingkungan lokal, bukan global.",
      "Tidak ada cara untuk mengurangi dampak penggunaan energi listrik dari bahan bakar fosil terhadap lingkungan."
    ],
    "answer": "B",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: B</b></p>\n<h4 class=\"steps-title\">Analisis tiap opsi</h4>\n<p class=\"ev no\"><b>A. Salah.</b> Saat ini ada berbagai sumber energi alternatif yang juga dapat digunakan untuk memenuhi kebutuhan listrik.</p><p class=\"ev ok\"><b>B. Benar.</b> Penggunaan energi yang tidak efisien berarti lebih banyak bahan bakar fosil yang dibakar. Hal ini tidak hanya mempercepat habisnya cadangan, tetapi juga meningkatkan emisi karbon.</p><p class=\"ev no\"><b>C. Salah.</b> Informasi tersebut tidak ada di dalam teks.</p><p class=\"ev no\"><b>D. Salah.</b> Polusi dari bahan bakar fosil, seperti emisi gas rumah kaca, berdampak global melalui perubahan iklim.</p><p class=\"ev no\"><b>E. Salah.</b> Ada banyak cara untuk mengurangi dampak tersebut, seperti beralih ke energi terbarukan.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah B.</b></p></section>"
  },
  {
    "n": 2,
    "text": "Polusi udara adalah masalah yang sering dijumpai, terutama di daerah perkotaan. Penyebab utama polusi udara meliputi emisi dari kendaraan bermotor, asap dari pabrik, pembakaran sampah secara sembarangan, dan kurangnya ruang hijau. Polusi udara dapat menyebabkan gangguan kesehatan, seperti gangguan pernapasan, serta kerusakan lingkungan.\n\nBerdasarkan informasi tersebut, langkah yang SALAH untuk mengurangi polusi udara adalah ...",
    "options": [
      "Menggunakan transportasi umum atau kendaraan ramah lingkungan.",
      "Menanam pohon atau membuat taman di sekitar rumah.",
      "Mendorong pabrik untuk menerapkan industri hijau.",
      "Membakar sampah rumah tangga untuk mengurangi jumlah sampah di tempat pembuangan akhir.",
      "Mendorong pemerintah untuk membuat kebijakan terkait pengendalian emisi dari kendaraan dan pabrik."
    ],
    "answer": "D",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: D</b></p>\n<p>Soal meminta langkah yang <b>salah</b>, jadi cari langkah yang justru tidak mengurangi polusi udara.</p>\n<h4 class=\"steps-title\">Analisis tiap opsi</h4>\n<p class=\"ev no\"><b>A. Langkah benar.</b> Efektif mengurangi polusi udara karena mengurangi jumlah kendaraan pribadi di jalan yang menghasilkan emisi.</p><p class=\"ev no\"><b>B. Langkah benar.</b> Hal tersebut membantu mengatasi kurangnya ruang hijau.</p><p class=\"ev no\"><b>C. Langkah benar.</b> Hal tersebut membantu mengatasi asap dari pabrik.</p><p class=\"ev ok\"><b>D. Langkah salah.</b> Membakar sampah justru menghasilkan polusi udara, seperti karbon monoksida yang berbahaya bagi kesehatan dan lingkungan.</p><p class=\"ev no\"><b>E. Langkah benar.</b> Kebijakan ini membantu mengurangi sumber utama polusi udara secara sistematis.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah D.</b></p></section>"
  },
  {
    "n": 3,
    "text": "Pembelajaran daring adalah salah satu solusi yang digunakan untuk melayani kebutuhan peserta didik di masa pandemi. Pembelajaran daring memberikan fleksibilitas waktu dan tempat bagi peserta didik. Namun, banyak masalah yang dihadapi oleh para guru dan peserta didik saat melaksanakan pembelajaran daring. Menurut praktisi pendidikan, pembelajaran daring secara psikologis berdampak pada kurangnya hubungan emosional antara guru dan peserta didik. Hubungan tersebut menjadi kurang intens karena tidak adanya interaksi langsung yang mendalam sehingga kurang melibatkan perasaan.\n\nBerdasarkan teks tersebut, pilih SEMUA pernyataan yang BENAR!",
    "options": [
      "Pembelajaran daring tetap dapat menciptakan hubungan emosional yang erat antara guru dan peserta didik.",
      "Guru sulit memastikan perhatian peserta didik saat mengikuti pembelajaran daring.",
      "Pembelajaran daring memberikan fleksibilitas waktu dan tempat bagi peserta didik.",
      "Pembelajaran daring cenderung membuat interaksi guru dan peserta didik menjadi kurang personal.",
      "Pembelajaran daring tidak memunculkan masalah."
    ],
    "answer": "BCD",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: B, C, D</b></p>\n<p>Periksa tiap pernyataan dengan teks. Pernyataan yang sesuai teks dipilih.</p>\n<h4 class=\"steps-title\">Analisis tiap pernyataan</h4>\n<p class=\"ev no\"><b>A. Pernyataan salah.</b> Menurut praktisi pendidikan, hubungan emosional guru dan peserta didik dalam pembelajaran daring cenderung kurang intens dan kurang melibatkan perasaan karena tidak ada interaksi langsung.</p><p class=\"ev ok\"><b>B. Pernyataan benar.</b> Dalam pembelajaran daring, guru sering kali tidak dapat melihat langsung ekspresi atau perilaku peserta didik, sehingga sulit memastikan apakah mereka benar-benar memperhatikan.</p><p class=\"ev ok\"><b>C. Pernyataan benar.</b> Salah satu keunggulan pembelajaran daring adalah fleksibilitasnya: peserta didik dapat belajar kapan saja dan di mana saja selama ada akses internet.</p><p class=\"ev ok\"><b>D. Pernyataan benar.</b> Interaksi tidak berlangsung tatap muka langsung, sehingga hubungan emosional dan perhatian individual menjadi terbatas.</p><p class=\"ev no\"><b>E. Pernyataan salah.</b> Teks menyebutkan banyak masalah yang dihadapi guru dan peserta didik saat pembelajaran daring.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah B, C, dan D.</b></p></section>"
  },
  {
    "n": 4,
    "text": "Buah alpukat selain dikonsumsi juga dapat dimanfaatkan untuk perawatan tubuh. Kandungan seperti lemak sehat, vitamin E, dan antioksidan dalam alpukat memiliki manfaat luar biasa. Lemak sehat membantu melembapkan kulit, sementara vitamin E dan antioksidan melindungi kulit dari penuaan dini serta efek buruk radikal bebas. Selain itu, ekstrak alpukat sering digunakan dalam produk kecantikan untuk memperbaiki tekstur kulit.\n\nManakah pernyataan berikut yang TIDAK MEMPERKUAT informasi di atas?",
    "options": [
      "Antioksidan dalam alpukat memerlukan proses pengolahan khusus yang lama agar dapat memberikan manfaat maksimal.",
      "Lemak sehat dalam alpukat membantu menjaga kelembapan kulit dengan mengunci kadar air di dalamnya.",
      "Vitamin E yang terkandung dalam alpukat berfungsi sebagai pelindung kulit dari kerusakan akibat radikal bebas.",
      "Ekstrak alpukat sering digunakan dalam produk kecantikan untuk menghaluskan tekstur kulit.",
      "Konsumsi alpukat secara rutin membantu menjaga kesehatan kulit dan melindunginya dari penuaan dini."
    ],
    "answer": "A",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: A</b></p>\n<p>Soal meminta pernyataan yang <b>tidak memperkuat</b> teks, yaitu pernyataan yang tidak didukung atau tidak ada dalam teks.</p>\n<h4 class=\"steps-title\">Analisis tiap opsi</h4>\n<p class=\"ev ok\"><b>A. Tidak memperkuat.</b> Teks tidak menyebutkan bahwa antioksidan memerlukan pengolahan khusus yang lama untuk memberikan manfaatnya.</p><p class=\"ev no\"><b>B. Memperkuat.</b> Lemak sehat dalam alpukat berperan melembapkan kulit dengan menjaga kelembapan alaminya.</p><p class=\"ev no\"><b>C. Memperkuat.</b> Vitamin E dalam alpukat memiliki sifat melindungi kulit dari efek buruk radikal bebas.</p><p class=\"ev no\"><b>D. Memperkuat.</b> Sesuai dengan klaim dalam teks tentang manfaat ekstrak alpukat pada produk kecantikan.</p><p class=\"ev no\"><b>E. Memperkuat.</b> Sesuai dengan teks yang menyebutkan manfaat konsumsi alpukat untuk menjaga kesehatan kulit dan melawan penuaan dini.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah A.</b></p></section>"
  },
  {
    "n": 5,
    "text": "Mobil listrik menjadi salah satu inovasi kendaraan ramah lingkungan yang kini banyak digunakan. Dibandingkan mobil berbahan bakar konvensional, mobil listrik menawarkan berbagai keunggulan, seperti efisiensi energi yang lebih tinggi, pengurangan emisi karbon, dan biaya operasional yang lebih rendah. Selain itu, mobil listrik dirancang dengan teknologi canggih yang memungkinkan performa lebih baik, seperti akselerasi yang lebih cepat dan penggunaan baterai dengan daya tahan yang makin lama.\n\nMenurut Elon Musk, CEO Tesla, “Mobil listrik adalah solusi utama dalam menghadapi perubahan iklim karena secara signifikan dapat mengurangi emisi karbon dibandingkan kendaraan berbahan bakar fosil. Mengadopsi mobil listrik bukan hanya tentang efisiensi energi, tetapi juga tanggung jawab terhadap bumi.”\n\nManakah pernyataan berikut yang MEMPERKUAT pendapat Elon Musk dalam teks?",
    "options": [
      "Mobil listrik memerlukan biaya perawatan yang lebih tinggi dibandingkan mobil konvensional.",
      "Harga mobil listrik yang lebih tinggi membatasi akses masyarakat umum untuk memilikinya.",
      "Infrastruktur pengisian daya yang belum memadai menjadi kendala utama penggunaan mobil listrik.",
      "Mobil listrik hanya dapat digunakan dalam jarak pendek karena kapasitas baterainya terbatas.",
      "Teknologi pada mobil listrik membantu mengurangi emisi karbon dan mendukung kelestarian lingkungan."
    ],
    "answer": "E",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: E</b></p>\n<p>Pendapat Elon Musk: mobil listrik adalah solusi menghadapi perubahan iklim karena mengurangi emisi karbon, dan mengadopsinya adalah tanggung jawab terhadap bumi.</p>\n<p>Opsi <b>E</b> memperkuat pendapat itu karena menyatakan bahwa teknologi mobil listrik membantu mengurangi emisi karbon dan mendukung kelestarian lingkungan.</p>\n<p>Opsi A, B, C, dan D justru menyoroti keterbatasan atau tantangan mobil listrik, sehingga tidak sesuai dengan fokus pendapat Elon Musk tentang keunggulan mobil listrik.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah E.</b></p></section>"
  },
  {
    "n": 6,
    "text": "Perhatikan dua pernyataan berikut!\n\n(1) Kemacetan lalu lintas di kota besar sering terjadi akibat jumlah kendaraan yang melebihi kapasitas jalan raya.\n(2) Sebuah survei menunjukkan bahwa rata-rata waktu perjalanan kerja di kota besar meningkat hingga 30% akibat jumlah kendaraan yang terus bertambah.\n\nManakah hubungan antara pernyataan (1) dan pernyataan (2) yang tepat?",
    "options": [
      "Pernyataan (1) adalah penyebab dan pernyataan (2) adalah akibat.",
      "Pernyataan (2) adalah penyebab dan pernyataan (1) adalah akibat.",
      "Pernyataan (1) dan (2) adalah penyebab dan tidak saling berhubungan.",
      "Pernyataan (1) dan (2) adalah akibat dari dua penyebab dan tidak saling berhubungan.",
      "Pernyataan (1) dan (2) adalah akibat dari penyebab yang sama."
    ],
    "answer": "E",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: E</b></p>\n<p><b>Pernyataan (1)</b> menyatakan kemacetan terjadi akibat jumlah kendaraan yang melebihi kapasitas jalan raya. Ini adalah salah satu dampak dari jumlah kendaraan yang melebihi kapasitas.</p>\n<p><b>Pernyataan (2)</b> memberikan data bahwa waktu perjalanan kerja meningkat hingga 30%. Ini adalah dampak dari jumlah kendaraan yang terus bertambah.</p>\n<p>Keduanya tidak saling menjadi sebab atau akibat secara langsung. Keduanya adalah akibat dari <b>penyebab yang sama</b>, yaitu infrastruktur jalan yang tidak memadai untuk menampung pertumbuhan kendaraan di kota besar.</p>\n<h4 class=\"steps-title\">Evaluasi opsi</h4>\n<p class=\"ev no\"><b>A. Salah.</b> Pernyataan (1) bukan penyebab dari pernyataan (2).</p><p class=\"ev no\"><b>B. Salah.</b> Pernyataan (2) bukan penyebab dari pernyataan (1).</p><p class=\"ev no\"><b>C. Salah.</b> Keduanya berhubungan sebagai dampak dari penyebab yang sama.</p><p class=\"ev no\"><b>D. Salah.</b> Keduanya tidak berasal dari dua penyebab berbeda, melainkan penyebab yang sama.</p><p class=\"ev ok\"><b>E. Benar.</b> Keduanya akibat dari penyebab yang sama, yaitu jumlah kendaraan yang terus bertambah atau melebihi kapasitas.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah E.</b></p></section>"
  },
  {
    "n": 7,
    "text": "Ketika berolahraga di gym, atlet Z dapat mencapai performa latihan yang maksimal. Namun, ketika berolahraga di rumah, performa atlet Z cenderung menurun.\n\nManakah pernyataan berikut yang PALING MUNGKIN menjelaskan perbedaan kedua kondisi tersebut?",
    "options": [
      "Gym menyediakan alat-alat latihan yang tidak tersedia di rumah.",
      "Di rumah, atlet Z sering terganggu oleh suara televisi atau anggota keluarga.",
      "Atlet Z merasa lebih nyaman berolahraga di rumah dibandingkan di gym.",
      "Atlet Z dapat memanggil pelatih pribadi ke rumah.",
      "Atlet Z lebih sering melewatkan pemanasan saat berolahraga di rumah."
    ],
    "answer": "A",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: A</b></p>\n<p>Soal ini mencari <b>penyebab utama</b> mengapa performa atlet Z lebih baik di gym daripada di rumah.</p>\n<h4 class=\"steps-title\">Analisis tiap opsi</h4>\n<p class=\"ev ok\"><b>A. Benar.</b> Salah satu keunggulan gym adalah alat-alat latihan yang lengkap. Alat itu memungkinkan variasi latihan lebih banyak dan intensitas lebih tinggi. Di rumah, keterbatasan alat membatasi jenis latihan sehingga performa cenderung menurun.</p><p class=\"ev no\"><b>B. Kurang relevan.</b> Soal tidak menyebutkan adanya gangguan di rumah. Gangguan memang dapat memengaruhi performa, tetapi bukan alasan utama dibandingkan keterbatasan alat.</p><p class=\"ev no\"><b>C. Salah.</b> Jika atlet Z lebih nyaman di rumah, seharusnya performanya tidak menurun, bahkan mungkin meningkat. Kenyamanan bukan faktor yang menjelaskan perbedaan performa ini.</p><p class=\"ev no\"><b>D. Tidak relevan.</b> Soal tidak memuat informasi tentang pelatih pribadi. Bahkan jika pelatih hadir di rumah, keterbatasan alat tetap menjadi hambatan.</p><p class=\"ev no\"><b>E. Salah.</b> Melewatkan pemanasan adalah kebiasaan yang tidak khusus pada lokasi latihan, dan tidak berkaitan dengan ketersediaan alat atau fasilitas di gym.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah A.</b></p></section>"
  },
  {
    "n": 8,
    "text": "Di era digital seperti sekarang, penggunaan teknologi dalam kehidupan sehari-hari menjadi hal yang tidak terhindarkan. Namun, penggunaan teknologi yang tidak terkontrol, seperti terlalu sering menggunakan ponsel atau perangkat elektronik lainnya, dapat berdampak negatif pada kesehatan, termasuk gangguan tidur, penglihatan, dan menurunnya kemampuan konsentrasi. Oleh karena itu, penting untuk mengatur waktu penggunaan teknologi dengan bijak, sesuai kebutuhan, dan memperhatikan keseimbangan dengan aktivitas fisik dan sosial.\n\nBerdasarkan paragraf tersebut, manakah asumsi PALING MUNGKIN yang mendasari argumen tersebut?",
    "options": [
      "Penggunaan teknologi yang tidak terkontrol dapat mengurangi produktivitas harian seseorang.",
      "Keseimbangan antara penggunaan teknologi dan aktivitas fisik atau sosial adalah kunci hidup sehat.",
      "Teknologi sebaiknya hanya digunakan oleh orang dewasa yang dapat mengontrol waktu penggunaannya.",
      "Penggunaan ponsel terlalu lama merupakan penyebab utama gangguan kesehatan.",
      "Teknologi harus dibatasi untuk mencegah dampak buruk pada kesehatan masyarakat."
    ],
    "answer": "B",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: B</b></p>\n<p>Paragraf menekankan pentingnya mengatur penggunaan teknologi secara bijak agar tidak berdampak negatif pada kesehatan. Fokusnya adalah <b>keseimbangan</b> antara teknologi dan aktivitas lain, bukan sekadar pelarangan atau pembatasan ketat.</p>\n<h4 class=\"steps-title\">Analisis tiap opsi</h4>\n<p class=\"ev no\"><b>A. Salah.</b> Teknologi yang tidak terkontrol memang dapat memengaruhi produktivitas, tetapi itu bukan inti argumen. Fokus paragraf adalah dampak kesehatan.</p><p class=\"ev ok\"><b>B. Benar.</b> Paragraf dengan jelas menekankan pentingnya keseimbangan antara penggunaan teknologi dan aktivitas fisik serta sosial untuk menjaga kesehatan.</p><p class=\"ev no\"><b>C. Salah.</b> Paragraf tidak membahas batasan teknologi hanya untuk orang dewasa. Fokusnya pada pengaturan penggunaan teknologi oleh semua orang.</p><p class=\"ev no\"><b>D. Salah.</b> Gangguan kesehatan disebutkan, tetapi ponsel bukan satu-satunya penyebab sehingga pernyataan ini tidak mencakup keseluruhan konteks.</p><p class=\"ev no\"><b>E. Salah.</b> Paragraf tidak menyarankan pelarangan atau pembatasan total, melainkan pengaturan penggunaan secara bijak.</p>\n<p>Paragraf mengarahkan pembaca untuk tidak meninggalkan teknologi sepenuhnya, tetapi bijak menggunakannya sambil menjaga kesehatan lewat keseimbangan aktivitas lain.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah B.</b></p></section>"
  },
  {
    "n": 9,
    "text": "Sebuah perusahaan teknologi meluncurkan perangkat pintar baru yang dirancang untuk membantu produktivitas, seperti fitur pengingat otomatis, analisis data kerja, dan integrasi dengan berbagai aplikasi lain. Namun, perangkat tersebut juga membutuhkan koneksi internet yang stabil dan sering mengumpulkan data pengguna untuk meningkatkan performanya. Akibatnya, beberapa pengguna melaporkan bahwa privasi mereka terganggu dan merasa tidak nyaman dengan data yang dikumpulkan.\n\nManakah pernyataan yang paling MENJELASKAN AKIBAT dari penggunaan perangkat pintar tersebut terhadap privasi pengguna?",
    "options": [
      "Data pribadi pengguna berpotensi disalahgunakan oleh pihak yang tidak bertanggung jawab.",
      "Perangkat pintar membutuhkan koneksi internet yang stabil agar dapat digunakan.",
      "Pengguna menjadi lebih produktif karena perangkat pintar mempermudah pengelolaan pekerjaan.",
      "Perusahaan memperkenalkan kebijakan privasi yang lebih ketat untuk menjaga kepercayaan pengguna.",
      "Pengguna harus membayar biaya tambahan untuk mengakses fitur premium perangkat tersebut."
    ],
    "answer": "A",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: A</b></p>\n<p>Soal membahas dampak perangkat pintar terhadap privasi pengguna, terutama terkait pengumpulan data pengguna.</p>\n<h4 class=\"steps-title\">Analisis tiap opsi</h4>\n<p class=\"ev ok\"><b>A. Benar.</b> Pengumpulan data oleh perangkat pintar membuka potensi penyalahgunaan data, yang merupakan dampak langsung terhadap privasi pengguna.</p><p class=\"ev no\"><b>B. Salah.</b> Kebutuhan koneksi internet adalah syarat teknis, bukan akibat terhadap privasi.</p><p class=\"ev no\"><b>C. Salah.</b> Perangkat pintar memang dapat meningkatkan produktivitas, tetapi itu bukan akibat yang terkait privasi pengguna.</p><p class=\"ev no\"><b>D. Salah.</b> Kebijakan privasi yang lebih ketat adalah solusi yang mungkin diambil, bukan akibat langsung dari pengumpulan data.</p><p class=\"ev no\"><b>E. Salah.</b> Biaya tambahan untuk fitur premium tidak berkaitan dengan isu privasi yang dibahas.</p>\n<p>Perangkat yang mengumpulkan data pengguna dirancang untuk meningkatkan pengalaman dan performa, tetapi juga membawa risiko terhadap privasi. Data yang terkumpul bisa bocor atau disalahgunakan pihak lain, dan inilah kekhawatiran utama pengguna.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah A.</b></p></section>"
  },
  {
    "n": 10,
    "text": "Pengelolaan air bersih di rumah tangga menjadi salah satu hal yang penting untuk diperhatikan. Air bersih harus digunakan secara bijak, terutama untuk kebutuhan mendasar seperti minum, memasak, mandi, dan mencuci. Menggunakan air bersih secara efisien tidak hanya membantu mengurangi tagihan air, tetapi juga menjaga ketersediaan air bersih untuk masa depan. Oleh karena itu, setiap anggota keluarga harus ikut berperan dalam mempraktikkan penghematan air.\n\nPernyataan yang PALING DIDUKUNG oleh bacaan tersebut adalah ...",
    "options": [
      "Air bersih harus digunakan untuk kebutuhan yang lebih penting seperti memasak dan minum dibandingkan mencuci.",
      "Pemerintah perlu menyediakan lebih banyak kampanye tentang penggunaan air bersih.",
      "Pengelolaan air bersih yang baik dapat membantu meningkatkan kualitas hidup masyarakat secara keseluruhan.",
      "Air bersih yang tidak digunakan secara bijak akan habis dalam beberapa tahun ke depan.",
      "Penghematan air bersih harus menjadi kebiasaan yang dilakukan oleh seluruh anggota keluarga."
    ],
    "answer": "E",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: E</b></p>\n<p>Soal berfokus pada pentingnya penggunaan air bersih secara bijak dan keterlibatan setiap anggota keluarga dalam menghemat air.</p>\n<h4 class=\"steps-title\">Analisis tiap opsi</h4>\n<p class=\"ev no\"><b>A. Salah.</b> Memasak dan minum memang lebih penting, tetapi teks tidak menyebutkan prioritas penggunaan air. Fokus teks adalah penghematan secara umum.</p><p class=\"ev no\"><b>B. Salah.</b> Kampanye bisa relevan, tetapi teks tidak menyebutkan peran pemerintah. Teks berfokus pada peran keluarga.</p><p class=\"ev no\"><b>C. Salah.</b> Pengelolaan air memang dapat meningkatkan kualitas hidup, tetapi teks tidak membahas dampak seluas itu, hanya praktik di rumah tangga.</p><p class=\"ev no\"><b>D. Salah.</b> Teks tidak menyatakan bahwa air akan habis dalam waktu tertentu.</p><p class=\"ev ok\"><b>E. Benar.</b> Teks secara langsung menyebutkan bahwa setiap anggota keluarga harus ikut berperan dalam penghematan air.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah E.</b></p></section>"
  },
  {
    "n": 11,
    "text": "Premis 1: Orang yang memiliki penyakit gangguan lambung tidak boleh telat makan dan mengonsumsi makanan pedas.\nPremis 2: Bima adalah pasien yang menderita penyakit mag.\n\nSimpulan yang PALING TEPAT berdasarkan dua premis tersebut adalah ...",
    "options": [
      "Bima boleh telat makan dan mengonsumsi makanan pedas.",
      "Bima tidak boleh telat makan, tetapi boleh mengonsumsi makanan pedas.",
      "Bima boleh telat makan dan boleh sedikit mengonsumsi makanan pedas.",
      "Bima tidak boleh telat makan dan mengonsumsi makanan pedas.",
      "Bima boleh telat makan, tetapi tidak boleh mengonsumsi makanan pedas."
    ],
    "answer": "D",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: D</b></p>\n<p>Penyakit mag adalah penyakit gangguan pada lambung. Konteks soal dapat ditulis dalam logika implikasi:</p>\n<p><b>Premis 1:</b> Jika orang memiliki penyakit gangguan lambung, maka tidak boleh telat makan dan mengonsumsi makanan pedas (<i>p</i> ⇒ <i>q</i>).</p>\n<p><b>Premis 2:</b> Bima adalah pasien yang menderita penyakit mag (<i>p</i>).</p>\n<p>Penarikan simpulan memakai <b>modus ponens</b>:</p>\n<div class=\"calc\">P1:  p ⇒ q\nP2:  p\n∴    q</div>\n<p>Jadi simpulannya adalah <i>q</i>: Bima tidak boleh telat makan dan mengonsumsi makanan pedas.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah D.</b></p></section>"
  },
  {
    "n": 12,
    "text": "1. Jika Dimas belajar dengan serius, maka Dimas lolos SNBT.\n2. Jika Dimas lolos SNBT, maka Dimas dibelikan HP baru.\n3. Jika Dimas dibelikan HP baru, maka Dimas akan menjual HP lamanya.\n4. Hari ini, Dimas akan menjual HP lamanya.\n\nSimpulan yang PALING TEPAT berdasarkan pernyataan-pernyataan tersebut adalah ...",
    "options": [
      "Dimas lolos SNBT.",
      "Dimas dibelikan HP baru.",
      "Dimas belajar dengan serius.",
      "Dimas tidak belajar dengan serius.",
      "Tidak dapat ditarik kesimpulan."
    ],
    "answer": "E",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: E</b></p>\n<p>Konteks soal dalam logika implikasi:</p>\n<p><b>Premis 1:</b> Dimas belajar serius ⇒ lolos SNBT (<i>p</i> ⇒ <i>q</i>)<br><b>Premis 2:</b> Lolos SNBT ⇒ dibelikan HP baru (<i>q</i> ⇒ <i>r</i>)<br><b>Premis 3:</b> Dibelikan HP baru ⇒ menjual HP lama (<i>r</i> ⇒ <i>s</i>)<br><b>Premis 4:</b> Hari ini Dimas menjual HP lamanya (<i>s</i>)</p>\n<p>Pertama, tarik simpulan dengan <b>silogisme</b>:</p>\n<div class=\"calc\">P1:  p ⇒ q\nP2:  q ⇒ r\n∴    p ⇒ r\n\n     p ⇒ r\nP3:  r ⇒ s\n∴    p ⇒ s</div>\n<p>Kemudian, dari <i>p</i> ⇒ <i>s</i> dan <i>s</i> tidak ada simpulan yang dapat ditarik. <i>s</i> adalah akibat, bukan syarat, sehingga tidak memastikan <i>p</i>.</p>\n<div class=\"calc\">     p ⇒ s\nP4:  s\n∴    (tidak ada kesimpulan)</div>\n<p>Dengan demikian, tidak dapat ditarik kesimpulan.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah E.</b></p></section>"
  },
  {
    "n": 13,
    "text": "Dalam perjanjian kerja yang ditandatangani bersama, disebutkan bahwa karyawan tidak diberikan pesangon atau perusahaan dinyatakan bangkrut. Ternyata, perusahaan tidak bangkrut.\n\nSimpulan yang PALING TEPAT berdasarkan informasi tersebut adalah ...",
    "options": [
      "Karyawan tidak diberikan pesangon.",
      "Karyawan diberikan pesangon.",
      "Tidak semua karyawan diberikan pesangon.",
      "Perusahaan belum tentu bangkrut.",
      "Perusahaan tidak bangkrut dan karyawan tidak diberikan pesangon."
    ],
    "answer": "A",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: A</b></p>\n<p>Konteks soal dalam logika:</p>\n<p><b>Premis 1:</b> Karyawan tidak diberikan pesangon atau perusahaan dinyatakan bangkrut (∼<i>p</i> ∨ <i>q</i>).<br><b>Premis 2:</b> Perusahaan tidak bangkrut (∼<i>q</i>).</p>\n<p>Ingat bahwa <i>p</i> ⇒ <i>q</i> ekuivalen dengan ∼<i>p</i> ∨ <i>q</i>. Jadi Premis 1 dapat ditulis ulang:</p>\n<p><b>Premis 1:</b> Jika karyawan diberikan pesangon, maka perusahaan dinyatakan bangkrut (<i>p</i> ⇒ <i>q</i>).<br><b>Premis 2:</b> Perusahaan tidak bangkrut (∼<i>q</i>).</p>\n<p>Penarikan simpulan memakai <b>modus tollens</b>:</p>\n<div class=\"calc\">P1:  p ⇒ q\nP2:  ∼q\n∴    ∼p</div>\n<p>Simpulannya adalah ∼<i>p</i>: karyawan tidak diberikan pesangon.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah A.</b></p></section>"
  },
  {
    "n": 14,
    "text": "1. Semua penumpang bus menggunakan pembayaran nontunai.\n2. Sebagian pekerja menumpang bus setiap hari.\n\nSimpulan dari pernyataan-pernyataan tersebut adalah ...",
    "options": [
      "Sebagian pekerja menggunakan pembayaran nontunai saat menumpang bus.",
      "Sebagian pekerja tidak menggunakan pembayaran nontunai saat menumpang bus.",
      "Semua pekerja tidak menggunakan pembayaran nontunai saat menumpang bus.",
      "Semua pekerja menggunakan pembayaran nontunai saat menumpang bus.",
      "Semua penumpang menggunakan pembayaran nontunai saat menumpang bus, kecuali pekerja."
    ],
    "answer": "A",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: A</b></p>\n<p><b>Pernyataan 1:</b> Tidak ada penumpang bus yang memakai pembayaran selain nontunai. Semua penumpang tanpa pengecualian memakai pembayaran nontunai.</p>\n<p><b>Pernyataan 2:</b> Ada pekerja (tidak semua) yang menjadi bagian dari penumpang bus.</p>\n<p>Karena sebagian pekerja adalah penumpang bus, dan semua penumpang bus memakai pembayaran nontunai, maka <b>sebagian pekerja menggunakan pembayaran nontunai saat menumpang bus</b>.</p>\n<h4 class=\"steps-title\">Analisis tiap opsi</h4>\n<p class=\"ev ok\"><b>A. Benar.</b> Sebagian pekerja adalah penumpang bus, dan semua penumpang bus memakai pembayaran nontunai.</p><p class=\"ev no\"><b>B. Salah.</b> Semua penumpang bus, termasuk pekerja yang menumpang bus, memakai pembayaran nontunai.</p><p class=\"ev no\"><b>C. Salah.</b> Bertentangan dengan pernyataan bahwa semua penumpang bus memakai pembayaran nontunai.</p><p class=\"ev no\"><b>D. Salah.</b> Pernyataan hanya menyebut “sebagian pekerja” menumpang bus, bukan semua pekerja.</p><p class=\"ev no\"><b>E. Salah.</b> Pernyataan pertama menyebut semua penumpang tanpa pengecualian memakai pembayaran nontunai.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah A.</b></p></section>"
  },
  {
    "n": 15,
    "text": "Perhatikan dua pernyataan berikut.\n\n1. Sebagian anggota OSIS mahir berkomunikasi dengan bahasa asing.\n2. Semua yang mahir berkomunikasi dengan bahasa asing adalah siswa yang pandai berpidato.\n\nSimpulan yang PALING TEPAT berdasarkan dua pernyataan tersebut adalah ...",
    "options": [
      "Sebagian yang pandai berpidato adalah anggota OSIS.",
      "Sebagian yang pandai berpidato bukan anggota OSIS.",
      "Sebagian anggota OSIS tidak pandai berpidato.",
      "Sebagian anggota OSIS pandai berpidato.",
      "Sebagian anggota OSIS tidak mahir berkomunikasi dengan bahasa asing, tetapi pandai berpidato."
    ],
    "answer": "D",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: D</b></p>\n<p><b>Pernyataan 1:</b> Ada sebagian anggota OSIS (bukan semua) yang mahir berkomunikasi dengan bahasa asing.</p>\n<p><b>Pernyataan 2:</b> Siapa pun yang mahir bahasa asing <b>pasti</b> pandai berpidato. Karena sebagian anggota OSIS mahir bahasa asing (pernyataan 1), maka sebagian anggota OSIS tersebut pasti juga pandai berpidato.</p>\n<h4 class=\"steps-title\">Analisis tiap opsi</h4>\n<p class=\"ev no\"><b>A. Salah.</b> Tidak ada pernyataan yang menunjukkan bahwa semua atau sebagian yang pandai berpidato adalah anggota OSIS. Yang disebutkan hanya hubungan antara bahasa asing dan pidato.</p><p class=\"ev no\"><b>B. Salah.</b> Tidak ada informasi tentang siswa yang pandai berpidato tetapi bukan anggota OSIS.</p><p class=\"ev no\"><b>C. Salah.</b> Tidak dapat disimpulkan dari dua pernyataan, karena tidak ada data tentang anggota OSIS yang tidak pandai berpidato.</p><p class=\"ev ok\"><b>D. Benar.</b> Sebagian anggota OSIS mahir bahasa asing, dan semua yang mahir bahasa asing pasti pandai berpidato. Maka sebagian anggota OSIS pasti pandai berpidato.</p><p class=\"ev no\"><b>E. Salah.</b> Tidak ada data tentang anggota OSIS yang tidak mahir bahasa asing tetapi pandai berpidato.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah D.</b></p></section>"
  },
  {
    "n": 16,
    "text": "Sebuah instansi membuka lowongan untuk dua orang. Enam orang telah mengikuti rangkaian seleksi. Peserta yang akan diterima adalah peserta yang memiliki nilai tes bidang minimal 320 dan nilai psikotes minimal 80. Ayu salah satu peserta memiliki nilai tes bidang 400 dan nilai psikotes 90.\n\nSimpulan berdasarkan teks adalah Ayu pasti diterima di instansi tersebut.\n\nManakah pernyataan berikut yang menggambarkan kualitas simpulan tersebut?",
    "options": [
      "Simpulan tersebut pasti benar.",
      "Simpulan tersebut pasti salah.",
      "Simpulan tersebut mungkin benar.",
      "Simpulan tidak relevan dengan informasi yang diberikan.",
      "Simpulan tidak dapat ditarik karena informasi tidak cukup."
    ],
    "answer": "C",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: C</b></p>\n<p>Kriteria instansi: nilai <b>tes bidang minimal 320</b> dan <b>nilai psikotes minimal 80</b>. Namun lowongan hanya dua, sehingga dari enam peserta akan dipilih <b>dua peringkat terbaik</b>.</p>\n<p>Ayu memiliki nilai tes bidang 400 dan psikotes 90, sudah melebihi nilai minimal (320 dan 80). Namun, soal tidak memberi informasi apakah Ayu masuk dua peringkat terbaik atau tidak.</p>\n<p>Karena itu, simpulan “Ayu pasti diterima” <b>mungkin benar</b>, belum tentu benar.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah C.</b></p></section>"
  },
  {
    "n": 17,
    "text": "Suatu institusi pendidikan mengadakan program belajar nongelar dengan menawarkan beberapa mata kuliah, yaitu A, B, C, D, dan E. Seseorang yang memiliki latar belakang pendidikan S1 rumpun sains dan teknologi dapat mengikuti minimal satu atau semua mata kuliah yang ditawarkan. Namun, seseorang yang memiliki latar belakang pendidikan S1 rumpun sosial dan bahasa dapat mengikuti mata kuliah B dan/atau E. Budi adalah seorang mahasiswa yang mengikuti mata kuliah A, B, dan E.\n\nSimpulan: Budi memiliki latar belakang pendidikan S1 rumpun sosial dan bahasa.\n\nManakah pernyataan berikut yang menggambarkan kualitas simpulan tersebut?",
    "options": [
      "Simpulan tersebut pasti benar.",
      "Simpulan tersebut pasti salah.",
      "Simpulan tersebut mungkin benar.",
      "Simpulan tidak relevan dengan informasi yang diberikan.",
      "Simpulan tidak dapat ditarik karena informasi tidak cukup."
    ],
    "answer": "B",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: B</b></p>\n<p><b>Rumpun sains dan teknologi</b> dapat mengikuti minimal satu atau semua mata kuliah. <b>Rumpun sosial dan bahasa</b> hanya dapat mengikuti mata kuliah B dan/atau E.</p>\n<p>Budi mengikuti mata kuliah <b>A, B, dan E</b>. Mata kuliah A hanya bisa diikuti rumpun sains dan teknologi, sedangkan B dan E bisa diikuti kedua rumpun. Jadi Budi berasal dari rumpun sains dan teknologi.</p>\n<p>Dengan demikian, simpulan bahwa Budi berasal dari rumpun sosial dan bahasa <b>pasti salah</b>.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah B.</b></p></section>"
  },
  {
    "n": 18,
    "text": "Delapan mahasiswa, yaitu F, G, H, I, K, L, dan M telah mengikuti ujian dengan nilai sebagai berikut.\n\n1. Nilai F lebih besar daripada G tetapi lebih kecil daripada nilai L.\n2. Nilai H lebih kecil dari nilai K tetapi lebih besar dari I.\n3. Nilai M lebih kecil daripada nilai H.\n\nJika nilai G sama besar dengan nilai K, maka mahasiswa yang nilainya lebih kecil dari G dan K adalah ...\n\n(Pilih semua jawaban yang benar.)",
    "options": [
      "H",
      "M",
      "L",
      "I",
      "F"
    ],
    "answer": "ABD",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: A, B, D (H, M, dan I)</b></p>\n<p>Pakai tanda <b>&gt;</b> untuk “lebih besar”.</p>\n<p><b>Ketentuan 1:</b> F &gt; G dan L &gt; F.<br><b>Ketentuan 2:</b> K &gt; H dan H &gt; I.<br><b>Ketentuan 3:</b> H &gt; M.</p>\n<p>Diketahui G = K. Gabungkan semua ketentuan:</p>\n<div class=\"calc\">L &gt; F &gt; G = K &gt; H\nH &gt; I   dan   H &gt; M</div>\n<p>Yang nilainya lebih kecil dari G dan K adalah <b>H, I, dan M</b>. Nilai I dan M tidak perlu dibandingkan satu sama lain, karena keduanya sama-sama di bawah H. L dan F nilainya lebih besar dari G dan K.</p>\n<h4 class=\"steps-title\">Analisis tiap opsi</h4>\n<p class=\"ev ok\"><b>A. Dipilih.</b> H lebih kecil dari K (dan K = G).</p><p class=\"ev ok\"><b>B. Dipilih.</b> M lebih kecil dari H, sehingga lebih kecil dari K dan G.</p><p class=\"ev no\"><b>C. Tidak dipilih.</b> L lebih besar dari F, dan F lebih besar dari G.</p><p class=\"ev ok\"><b>D. Dipilih.</b> I lebih kecil dari H, sehingga lebih kecil dari K dan G.</p><p class=\"ev no\"><b>E. Tidak dipilih.</b> F lebih besar dari G dan K.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah H, I, dan M.</b></p></section>"
  },
  {
    "n": 19,
    "text": "Diketahui lima orang siswa bisa berbahasa Indonesia. Selain itu mereka mempunyai kemampuan bahasa asing. Siswa P bisa berbahasa Jepang dan Jerman. Q bisa berbahasa Arab, Spanyol, dan Jerman. R bisa berbahasa Perancis dan Spanyol. S bisa berbahasa Jepang, Arab, dan Korea. T bisa berbahasa Korea dan Spanyol.\n\nDi antara pilihan berikut, siswa yang tidak bisa saling berkomunikasi menggunakan bahasa asing adalah ...",
    "options": [
      "P dan S",
      "Q dan S",
      "P dan R",
      "R dan T",
      "S dan T"
    ],
    "answer": "C",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: C</b></p>\n<p>Dua siswa tidak bisa saling berkomunikasi bahasa asing jika <b>tidak ada bahasa asing yang sama</b> yang mereka kuasai.</p>\n<p>P: Jepang, Jerman<br>Q: Arab, Spanyol, Jerman<br>R: Perancis, Spanyol<br>S: Jepang, Arab, Korea<br>T: Korea, Spanyol</p>\n<h4 class=\"steps-title\">Cek tiap pasangan</h4>\n<p class=\"ev no\"><b>A. Bisa.</b> P dan S sama-sama bisa bahasa Jepang.</p><p class=\"ev no\"><b>B. Bisa.</b> Q dan S sama-sama bisa bahasa Arab.</p><p class=\"ev ok\"><b>C. Tidak bisa.</b> P (Jepang, Jerman) dan R (Perancis, Spanyol) tidak punya bahasa asing yang sama.</p><p class=\"ev no\"><b>D. Bisa.</b> R dan T sama-sama bisa bahasa Spanyol.</p><p class=\"ev no\"><b>E. Bisa.</b> S dan T sama-sama bisa bahasa Korea.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah C.</b></p></section>"
  },
  {
    "n": 20,
    "text": "Enam orang peneliti akan mempresentasikan karya ilmiah mereka dengan tiga topik yang berbeda di sebuah seminar. Ali dan Eka mempresentasikan tentang perubahan iklim. Bayu dan Fina mempresentasikan tentang konservasi hutan. Citra dan Dinda mempresentasikan tentang ekosistem laut. Urutan presentasi mereka diatur sebagai berikut.\n\n- Di antara presentasi perubahan iklim ada dua presentasi konservasi hutan.\n- Di antara dua presentasi konservasi hutan ada satu presentasi ekosistem laut.\n- Salah satu presenter topik ekosistem laut berada pada urutan terakhir.\n\nDiketahui Ali presentasi pertama kali, urutan presentasi yang TIDAK MUNGKIN adalah ...",
    "options": [
      "Ali, Bayu, Citra, Fina, Eka, Dinda",
      "Ali, Fina, Citra, Bayu, Eka, Dinda",
      "Ali, Bayu, Dinda, Fina, Eka, Citra",
      "Ali, Fina, Bayu, Dinda, Eka, Citra",
      "Ali, Fina, Dinda, Bayu, Eka, Citra"
    ],
    "answer": "D",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: D</b></p>\n<p>Ali (perubahan iklim) di urutan pertama. Topiknya: Ali dan Eka = perubahan iklim, Bayu dan Fina = konservasi hutan, Citra dan Dinda = ekosistem laut.</p>\n<p><b>Ketentuan 1:</b> Di antara presentasi perubahan iklim ada dua presentasi konservasi hutan. Karena Ali di urutan 1, maka Bayu dan Fina berada di antara Ali dan Eka. Urutan sementara: <b>Ali, Bayu, Fina, Eka</b> atau <b>Ali, Fina, Bayu, Eka</b>.</p>\n<p><b>Ketentuan 2:</b> Di antara dua presentasi konservasi hutan ada satu presentasi ekosistem laut. Jadi salah satu dari Citra atau Dinda berada di antara Bayu dan Fina.</p>\n<p><b>Ketentuan 3:</b> Salah satu dari Citra atau Dinda berada di urutan terakhir.</p>\n<p>Urutan yang mungkin:</p>\n<p>Ali, Bayu, Citra, Fina, Eka, Dinda<br>Ali, Fina, Citra, Bayu, Eka, Dinda<br>Ali, Bayu, Dinda, Fina, Eka, Citra<br>Ali, Fina, Dinda, Bayu, Eka, Citra</p>\n<p>Urutan <b>Ali, Fina, Bayu, Dinda, Eka, Citra</b> tidak ada dalam daftar. Di urutan itu Fina dan Bayu bersebelahan, tidak ada presentasi ekosistem laut di antara keduanya.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah D.</b></p></section>"
  },
  {
    "n": 21,
    "text": "Suatu kampus mengadakan penerimaan calon mahasiswa jalur prestasi rapor. Nilai rapor yang dipertimbangkan adalah nilai rata-rata rapor keseluruhan mapel dan nilai mata pelajaran (mapel) pendukung. Berikut ini merupakan tabel lima siswa yang mendaftar kampus tersebut.\n\nNama | Nilai rata-rata rapor | Nilai mapel pendukung\nGina | 85 | 88\nFika | 89 | 85\nRima | 84 | 92\nLinda | 88 | 90\nHilda | 86 | 89\n\nKampus menetapkan nilai akhir merupakan gabungan nilai rata-rata rapor dan nilai mapel pendukung dengan bobot masing-masing 50%. Siswa yang PALING TIDAK BERPELUANG diterima adalah ...",
    "html": "<div class=\"qp\">Suatu kampus mengadakan penerimaan calon mahasiswa jalur prestasi rapor. Nilai rapor yang dipertimbangkan adalah nilai rata-rata rapor keseluruhan mapel dan nilai mata pelajaran (mapel) pendukung. Berikut ini merupakan tabel lima siswa yang mendaftar kampus tersebut.</div><table class=\"qtable\"><thead><tr><th>Nama</th><th>Nilai rata-rata rapor</th><th>Nilai mapel pendukung</th></tr></thead><tbody><tr><td>Gina</td><td>85</td><td>88</td></tr><tr><td>Fika</td><td>89</td><td>85</td></tr><tr><td>Rima</td><td>84</td><td>92</td></tr><tr><td>Linda</td><td>88</td><td>90</td></tr><tr><td>Hilda</td><td>86</td><td>89</td></tr></tbody></table><div class=\"qp\">Kampus menetapkan nilai akhir merupakan gabungan nilai rata-rata rapor dan nilai mapel pendukung dengan bobot masing-masing 50%. Siswa yang PALING TIDAK BERPELUANG diterima adalah ...</div>",
    "options": [
      "Rima",
      "Linda",
      "Hilda",
      "Gina",
      "Fika"
    ],
    "answer": "D",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: D</b></p>\n<p>Siswa yang paling tidak berpeluang adalah siswa dengan <b>nilai akhir terkecil</b>. Bobot masing-masing 50%, sehingga:</p>\n<div class=\"calc\">N = 50% × A + 50% × B</div>\n<p>dengan A = nilai rata-rata rapor dan B = nilai mapel pendukung.</p>\n<div class=\"table-wrap\"><table class=\"dt\"><thead><tr><th>Nama</th><th>Perhitungan</th><th>Nilai akhir</th></tr></thead><tbody><tr><td>Gina</td><td>50% × 85 + 50% × 88 = 42,5 + 44</td><td class=\"ok\">86,5</td></tr><tr><td>Fika</td><td>50% × 89 + 50% × 85 = 44,5 + 42,5</td><td>87</td></tr><tr><td>Rima</td><td>50% × 84 + 50% × 92 = 42 + 46</td><td>88</td></tr><tr><td>Linda</td><td>50% × 88 + 50% × 90 = 44 + 45</td><td>89</td></tr><tr><td>Hilda</td><td>50% × 86 + 50% × 89 = 43 + 44,5</td><td>87,5</td></tr></tbody></table></div>\n<p>Nilai akhir terkecil dimiliki Gina (86,5), sehingga Gina paling tidak berpeluang diterima.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah D.</b></p></section>"
  },
  {
    "n": 22,
    "text": "Grafik berikut menunjukkan produksi gula (dalam ton) dari tiga pabrik selama 5 bulan.\n\nDi antara pilihan berikut, persentase kenaikan tertinggi terjadi pada ...",
    "image": "img/pu-q22.png",
    "options": [
      "Pabrik A selama Januari-Februari",
      "Pabrik B selama Februari-Maret",
      "Pabrik C selama Maret-April",
      "Pabrik B selama April-Mei",
      "Pabrik A selama April-Mei"
    ],
    "answer": "B",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: B</b></p>\n<p>Persentase kenaikan dihitung dengan rumus:</p>\n<div class=\"calc\">Persentase kenaikan = (besar kenaikan ÷ kondisi awal) × 100%</div>\n<h4 class=\"steps-title\">Hitung tiap opsi</h4>\n<p class=\"ev no\"><b>A. 10%.</b> Pabrik A, Januari-Februari: (55 − 50) ÷ 50 × 100% = 5/50 × 100% = 10%.</p><p class=\"ev ok\"><b>B. 20%.</b> Pabrik B, Februari-Maret: (60 − 50) ÷ 50 × 100% = 10/50 × 100% = 20%.</p><p class=\"ev no\"><b>C. sekitar 11,11%.</b> Pabrik C, Maret-April: (50 − 45) ÷ 45 × 100% = 5/45 × 100% ≈ 11,11%.</p><p class=\"ev no\"><b>D. sekitar 7,69%.</b> Pabrik B, April-Mei: (70 − 65) ÷ 65 × 100% = 5/65 × 100% ≈ 7,69%.</p><p class=\"ev no\"><b>E. Tidak naik.</b> Pabrik A memproduksi 70 ton pada April dan 60 ton pada Mei, jadi pada April-Mei tidak ada kenaikan.</p>\n<p>Persentase kenaikan tertinggi terjadi pada pabrik B selama Februari-Maret.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah B.</b></p></section>"
  },
  {
    "n": 23,
    "text": "Berikut ini merupakan pertumbuhan berat badan bayi (dalam kg) selama enam bulan pertama.\n\nApabila berat badan bayi pada bulan ke-2 naik 15% dari bulan ke-1 dan pada bulan ke-4 naik 8% dari bulan ke-3, maka jumlah berat badan bayi bulan ke-2 dan ke-4 adalah ... kg",
    "image": "img/pu-q23.png",
    "options": [
      "9",
      "9,4",
      "9,6",
      "10",
      "10,6"
    ],
    "answer": "D",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: D (10 kg)</b></p>\n<p>Kita perlu berat badan bayi pada bulan ke-2 dan bulan ke-4. Dari grafik, bulan ke-1 = 4 kg dan bulan ke-3 = 5 kg.</p>\n<p><b>Bulan ke-2</b><br>Kenaikan: 15% × 4 kg = 0,6 kg<br>Berat badan: 4 kg + 0,6 kg = <b>4,6 kg</b></p>\n<p><b>Bulan ke-4</b><br>Kenaikan: 8% × 5 kg = 0,4 kg<br>Berat badan: 5 kg + 0,4 kg = <b>5,4 kg</b></p>\n<p>Jumlah: 4,6 kg + 5,4 kg = <b>10 kg</b>.</p>\n<section class=\"box jebakan\"><h4>⚠️ Awas jebakan</h4><p>9 = 4 + 5 (kenaikan lupa ditambahkan). 9,4 = 4 + 5,4 (bulan ke-2 belum dinaikkan). 9,6 = 4,6 + 5 (bulan ke-4 belum dinaikkan). 10,6 = 4,6 + 6 (salah memakai bulan ke-5).</p></section>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah D (10).</b></p></section>"
  },
  {
    "n": 24,
    "text": "Kode kupon belanja akan dibuat dari dua huruf berbeda dan tiga digit angka berbeda. Kupon tersebut dibuat berurutan dengan pola tertentu seperti berikut.\n\nA123Z, A321Z, B234Y, B432Y, C345X.\n\nDua kode kupon berikutnya adalah ...",
    "options": [
      "C543Y dan D456V",
      "D456Y dan D654V",
      "D543X dan D456W",
      "C456X dan D654W",
      "C543X dan D456W"
    ],
    "answer": "E",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: E</b></p>\n<p>Kode kupon terdiri dari dua huruf (di digit pertama dan terakhir) dan tiga angka. Tinjau pola huruf dan pola angka.</p>\n<p><b>Pola huruf pertama</b> maju dan tiap huruf muncul dua kali: A, A, B, B, C. Dua huruf berikutnya adalah <b>C</b> dan <b>D</b>.</p>\n<p><b>Pola huruf terakhir</b> mundur dan tiap huruf muncul dua kali: Z, Z, Y, Y, X. Dua huruf berikutnya adalah <b>X</b> dan <b>W</b>.</p>\n<p><b>Pola angka:</b> 123, 321, 234, 432, 345. Suku ke-1, 3, 5 berisi tiga angka berurutan, dan suku sesudahnya adalah kebalikan urutannya. Suku ke-7 dimulai dari dua angka terakhir suku ke-5 (45, lalu 6) sehingga 456, dan suku ke-6 adalah 345 dibalik, yaitu <b>543</b>. Dua pola angka berikutnya: <b>543</b> dan <b>456</b>.</p>\n<div class=\"table-wrap\"><table class=\"dt\"><tbody><tr><td>A123Z</td><td>A321Z</td><td>B234Y</td><td>B432Y</td><td>C345X</td><td class=\"ok\">C543X</td><td class=\"ok\">D456W</td><td>D654W</td></tr></tbody></table></div>\n<p>Sel hijau adalah dua kode kupon berikutnya: <b>C543X</b> dan <b>D456W</b>.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah E.</b></p></section>"
  },
  {
    "n": 25,
    "text": "Besaran Anggaran Pendapatan dan Belanja Daerah (APBD) sebuah provinsi selama 5 tahun berturut-turut (dalam triliun rupiah) adalah sebagai berikut.\n\n32,60; 32,83; 33,08; 33,35; 33,64.\n\nApabila pola dari besaran APBD tersebut bersifat tetap, maka kita dapat menentukan besaran APBD pada tahun-tahun berikutnya. Pada tahun ke-6 akan dialokasikan sebesar 8% dari total APBD untuk studi pembangunan kota, besaran anggaran yang dialokasikan adalah ... triliun rupiah.",
    "options": [
      "2,716",
      "2,730",
      "2,746",
      "2,814",
      "2,832"
    ],
    "answer": "A",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: A</b></p>\n<p>Pola APBD tetap. Cari selisihnya:</p>\n<div class=\"table-wrap\"><table class=\"dt\"><thead><tr><th>Tahun</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th></tr></thead><tbody><tr><td>APBD</td><td>32,60</td><td>32,83</td><td>33,08</td><td>33,35</td><td>33,64</td><td class=\"ok\">33,95</td></tr><tr><td>Selisih</td><td></td><td>+0,23</td><td>+0,25</td><td>+0,27</td><td>+0,29</td><td>+0,31</td></tr><tr><td>Selisih antar-selisih</td><td></td><td></td><td>+0,02</td><td>+0,02</td><td>+0,02</td><td>+0,02</td></tr></tbody></table></div>\n<p>APBD tahun ke-6 adalah 33,95 triliun rupiah. Delapan persen dialokasikan untuk studi pembangunan kota:</p>\n<div class=\"calc\">8% × 33,95 = 8/100 × 33,95 = 2,716</div>\n<p>Alokasi anggaran untuk studi pembangunan kota adalah 2,716 triliun rupiah.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah A.</b></p></section>"
  },
  {
    "n": 26,
    "text": "Sebuah pabrik menggunakan dua pompa, yaitu pompa K dan pompa L, untuk mengisi sebuah tangki besar. Berikut ini adalah informasi mengenai pengisian tangki tersebut.\n\n1. Pompa K dapat mengisi tangki sebanyak 300 liter dalam waktu 1 jam.\n2. Pompa L dapat mengisi tangki sampai penuh dalam waktu 20 jam.\n3. Dalam mengisi tangki tersebut, pompa K lebih lambat daripada pompa L.\n4. Apabila kedua pompa digunakan bersama, tangki terisi penuh dalam waktu 12 jam.\n\nInformasi yang dapat digunakan bersama untuk menentukan waktu yang dibutuhkan pompa K untuk mengisi penuh tangki tersebut adalah ...",
    "options": [
      "1 dan 2",
      "1 dan 3",
      "2 dan 3",
      "2 dan 4",
      "3 dan 4"
    ],
    "answer": "D",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: D</b></p>\n<p>Waktu pompa K mengisi penuh tangki dapat ditentukan, misalnya, jika diketahui debit K dan volume tangki. Selain itu, jika ada dua pompa dan waktu salah satunya diketahui, serta diketahui waktu kedua pompa bekerja bersama, maka waktu pompa yang belum diketahui dapat dihitung.</p>\n<h4 class=\"steps-title\">Analisis tiap pernyataan</h4>\n<p><b>Pernyataan 1:</b> Debit pompa K 300 liter per jam. Volume tangki tidak diketahui, jadi belum cukup.</p>\n<p><b>Pernyataan 2:</b> Pompa L mengisi tangki penuh dalam 20 jam (t<sub>L</sub> = 20 jam).</p>\n<p><b>Pernyataan 3:</b> Debit pompa K lebih kecil daripada pompa L. Ini hanya perbandingan, tidak memberi angka.</p>\n<p><b>Pernyataan 4:</b> Bekerja bersama, tangki penuh dalam 12 jam. Ini menghasilkan persamaan:</p>\n<div class=\"calc\">1/t<sub>K</sub> + 1/t<sub>L</sub> = 1/t<sub>bersama</sub> = 1/12</div>\n<p>Pernyataan yang dapat digunakan bersama adalah <b>pernyataan 2 dan 4</b>, karena t<sub>L</sub> dari pernyataan 2 dan persamaan dari pernyataan 4 cukup untuk mencari t<sub>K</sub>.</p>\n<div class=\"calc\">1/t<sub>K</sub> + 1/20 = 1/12\n1/t<sub>K</sub> = 5/60 − 3/60 = 2/60\nt<sub>K</sub> = 30 jam</div>\n<p>Perhitungan ini tidak wajib dilakukan, karena soal hanya menanyakan pernyataan mana yang digunakan. Waktu pompa K mengisi penuh tangki adalah 30 jam.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah D.</b></p></section>"
  },
  {
    "n": 27,
    "text": "Sebuah buku terdiri beberapa puluh halaman. Seseorang menjumlahkan semua halaman buku tersebut kemudian diperoleh 2.742. Namun, ketika dicek kembali terdapat dua halaman berurutan yang belum terhitung. Setelah dihitung kembali diperoleh jumlah halamannya adalah 2.775. Dua halaman berurutan yang dimaksud adalah ...",
    "options": [
      "14 dan 15",
      "15 dan 16",
      "16 dan 17",
      "17 dan 18",
      "18 dan 19"
    ],
    "answer": "C",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: C</b></p>\n<p>Jumlah dua halaman berurutan yang belum terhitung adalah selisih kedua hasil penjumlahan:</p>\n<div class=\"calc\">2.775 − 2.742 = 33</div>\n<p>Dua bilangan berurutan yang jumlahnya 33 adalah 16 dan 17, karena 16 + 17 = 33.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah C.</b></p></section>"
  },
  {
    "n": 28,
    "text": "Suatu bilangan asli dibagi 5 akan bersisa 2. Apabila bilangan tersebut dikali 9 kemudian dibagi 5, maka sisa pembagiannya adalah ...",
    "options": [
      "0",
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": "D",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: D (3)</b></p>\n<p>Rumus: bilangan = pembagi × hasil bagi + sisa.</p>\n<p>Misalkan bilangan itu <i>p</i>. Dibagi 5 bersisa 2, maka:</p>\n<div class=\"calc\">p = 5k + 2</div>\n<p>dengan <i>k</i> adalah hasil bagi (bilangan asli). Kalikan 9:</p>\n<div class=\"calc\">9p = 9(5k + 2) = 45k + 18</div>\n<p>Pisahkan: 45k = 5 × 9k + 0, sedangkan 18 = 5 × 3 + 3. Jadi 45k dibagi 5 bersisa 0, dan 18 dibagi 5 bersisa 3. Dengan demikian 9p dibagi 5 bersisa <b>3</b>.</p>\n<section class=\"box jebakan\"><h4>⚠️ Awas jebakan</h4><p>Sisa 2 adalah sisa bilangan semula, bukan sisa setelah dikali 9. Bilangan yang dikali 9 harus dihitung ulang sisanya.</p></section>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah D (3).</b></p></section>"
  },
  {
    "n": 29,
    "text": "Diketahui beberapa operasi hitung berikut.\n\n1. 1/4 × 0,8 + 1,6\n2. 6/16 × 1,6 + 1,5\n3. 3/12 × 2,4 + 1,3\n4. 7/10 × 1,2 + 1,2\n5. 5/24 × 2,4 + 1,2\n\nDi antara operasi hitung tersebut yang nilainya kurang dari 2 adalah ...",
    "options": [
      "(1), (4), dan (5)",
      "(1), (3), dan (5)",
      "(2), (4), dan (5)",
      "(1), (2), dan (4)",
      "(2), (3), dan (4)"
    ],
    "answer": "B",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: B</b></p>\n<p>Hitung masing-masing operasi, lalu bandingkan dengan 2.</p>\n<div class=\"table-wrap\"><table class=\"dt\"><thead><tr><th>No.</th><th>Perhitungan</th><th>Hasil</th><th>Dibanding 2</th></tr></thead><tbody><tr><td>(1)</td><td>1/4 × 0,8 + 1,6 = 0,2 + 1,6</td><td class=\"ok\">1,8</td><td>&lt; 2</td></tr><tr><td>(2)</td><td>6/16 × 1,6 + 1,5 = 0,6 + 1,5</td><td>2,1</td><td>&gt; 2</td></tr><tr><td>(3)</td><td>3/12 × 2,4 + 1,3 = 0,6 + 1,3</td><td class=\"ok\">1,9</td><td>&lt; 2</td></tr><tr><td>(4)</td><td>7/10 × 1,2 + 1,2 = 0,84 + 1,2</td><td>2,04</td><td>&gt; 2</td></tr><tr><td>(5)</td><td>5/24 × 2,4 + 1,2 = 0,5 + 1,2</td><td class=\"ok\">1,7</td><td>&lt; 2</td></tr></tbody></table></div>\n<p>Operasi yang nilainya kurang dari 2 adalah (1), (3), dan (5).</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah B.</b></p></section>"
  },
  {
    "n": 30,
    "text": "Suatu usaha akan dikerjakan oleh tiga orang, yaitu A, B, dan C dengan mengumpulkan modal usaha berturut-turut sebesar Rp3.000.000,00, Rp4.000.000,00, dan Rp5.000.000,00. Pembagian keuntungan disepakati sesuai dengan perbandingan jumlah modal yang dikeluarkan. Pada penjualan yang pertama diperoleh omset sebesar Rp13.500.000,00. Besar keuntungan yang diterima B adalah ...",
    "options": [
      "Rp750.000,00",
      "Rp625.000,00",
      "Rp575.000,00",
      "Rp525.000,00",
      "Rp500.000,00"
    ],
    "answer": "E",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: E</b></p>\n<p>Total modal ketiga orang:</p>\n<div class=\"calc\">Rp3.000.000,00 + Rp4.000.000,00 + Rp5.000.000,00 = Rp12.000.000,00</div>\n<p>Omset yang didapat Rp13.500.000,00, sehingga keuntungan:</p>\n<div class=\"calc\">Rp13.500.000,00 − Rp12.000.000,00 = Rp1.500.000,00</div>\n<p>Keuntungan dibagi sesuai perbandingan modal, maka bagian B:</p>\n<div class=\"calc\">(modal B ÷ total modal) × keuntungan\n= (4.000.000 ÷ 12.000.000) × Rp1.500.000,00\n= 1/3 × Rp1.500.000,00\n= Rp500.000,00</div>\n<p>Keuntungan yang diterima B adalah Rp500.000,00.</p>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah E.</b></p></section>"
  }
];

// Pembahasan untuk siswa = pembahasan guru (field explain). Kunci peta adalah nomor soal.
export const EXPLAIN_SISWA = Object.fromEntries(QUESTIONS.map((q) => [String(q.n), q.explain]));
