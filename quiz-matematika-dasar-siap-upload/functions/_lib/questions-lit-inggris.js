// Bank soal Literasi Bahasa Inggris (quiz id "litinggris"): 16 soal pilihan A sampai E, semuanya berjawaban tunggal,
// berbasis tiga bacaan: people-pleasing dan self-validation (1-3), efek sambaran petir Teks 1 dan Teks 2 (4-11), dan diskusi forum
// tentang rajin vs malas (12-16). Jenis soal: hubungan antar konsep, nada dan tujuan penulis, target pembaca, hubungan dua teks,
// letak informasi, inferensi, kalimat bernada positif, parafrase, fakta vs opini, kesimpulan, kepercayaan komentar, profesi,
// isi komentar, arti kata, dan komentar tidak relevan.
// Dibuat dari dokumen "Soal_Literasi_Inggris_No1-16.docx" (soal, kunci, dan pembahasan cepat).
//
// Pembahasan guru dan siswa SAMA:
//  - Isi pembahasan ada di field explain tiap soal (HTML). Mode guru (login "Ferdi") menampilkannya langsung.
//  - Siswa menerima isi yang sama lewat EXPLAIN_SISWA di bawah file ini (dibuat otomatis dari field explain),
//    tepat setelah soal itu dijawab (lihat studentExplainOf di quizzes.js). Mengubah explain berarti mengubah keduanya.
//
// PENTING, teks bacaan belum lengkap: dokumen sumber tidak memuat teks bacaan aslinya (tertulis "teks bacaan tidak ikut terfoto"),
// hanya tiga ringkasan berbahasa Indonesia yang disusun dari pembahasan. Ringkasan itu dipakai apa adanya sebagai teks bacaan di
// PASSAGES (diberi catatan "ringkasan" di judul dan kalimat pembuka). Soal yang bergantung pada isi teks asli, misalnya soal 6 (nomor paragraf)
// dan soal 12-16 (komentar tiap peserta forum), lebih adil dijawab bila teks aslinya tersedia. Bila teks asli sudah ada, cukup ganti
// isi PASSAGES (field html tiga teks) tanpa menyentuh soal, kunci, atau pembahasan.
//
// Catatan penyesuaian dari dokumen:
//  - Penanda jawaban benar di dokumen (tanda centang dan huruf tebal pada pilihan) dibuang dari pilihan jawaban. Keterangan "(no. n di aplikasi)"
//    pada judul soal dan emoji pada judul bagian pembahasan tidak ditampilkan.
//  - Kalimat catatan transkripsi pada ringkasan teks 1-3 ("Teks bacaan tidak ikut terfoto. Berdasarkan pembahasan, isinya:") diganti kalimat
//    pembuka seragam di ketiga ringkasan, dan huruf pertama isinya dikapitalkan.
//  - Susunan pembahasan di dokumen dipertahankan: jawaban dan penjelasan singkat, "Kunci cepat" (kotak kuning), "Kenapa pilihan lain salah?"
//    (tiap pilihan sebagai kotak merah muda; pilihan yang tepat hijau), "Analogi" (kotak ungu), dan "Trik cepat" (kotak merah jambu).
//    Kotak "Jadi, jawaban yang tepat adalah ..." ditambahkan di akhir seperti quiz lain. Jenis soal tiap nomor (mis. "Nada Penulis (Tone)")
//    muncul di pembahasan, tidak di soal.
//  - Soal 15: kata yang ditanyakan (prone) ditebalkan di tampilan soal (field html). Field text berisi versi teks biasa.
//  - Kunci cocok dengan penanda jawaban di tiap soal dan dengan baris "JAWABAN" di pembahasan. Isi pembahasan konsisten dengan ringkasan teks,
//    tetapi kunci tidak bisa dicek terhadap teks aslinya karena teks itu tidak ada di dokumen.
//
// Kunci (soal 1 sampai 16): A D E A B E B C E D C A E C A C
//
// File ini hanya dibaca server, jadi kunci dan pembahasan tidak dikirim ke siswa sebelum mereka menjawab.

export const PASSAGES = {
  "peoplepleasing": {
    "title": "People-Pleasing dan Self-Validation (ringkasan)",
    "range": "1–3",
    "html": "<p><i>Ringkasan isi teks (teks aslinya belum tersedia). Soal yang menanyakan letak paragraf atau kalimat tertentu tidak bisa dipastikan hanya dari ringkasan ini.</i></p>\n<p>Dampak negatif <b>people-pleasing</b> (selalu menyenangkan orang lain demi diterima) — mengikis jati diri, melelahkan, membuat merasa tidak dihargai — serta cara mengatasinya dengan membangun <b>self-validation</b> dan berani berkata “tidak”.</p>"
  },
  "petir": {
    "title": "Efek Sambaran Petir: Teks 1 dan Teks 2 (ringkasan)",
    "range": "4–11",
    "html": "<p><i>Ringkasan isi teks (teks aslinya belum tersedia). Soal yang menanyakan letak paragraf atau kalimat tertentu tidak bisa dipastikan hanya dari ringkasan ini.</i></p>\n<p><b>Teks 1</b> (Thompson, 2023): Dibuka dengan ahli patologi forensik Ryan Blumenthal yang memeriksa korban petir, lalu menjelaskan apa yang terjadi bila seseorang tersambar. Kebanyakan korban meninggal seketika karena henti jantung. Sekitar 90% selamat, tetapi sering mengalami kerusakan saraf, PTSD, dan gangguan neurologis (sulit konsentrasi, hilang ingatan).</p>\n<p><b>Teks 2</b>: Kisah Roy Sullivan, penjaga taman nasional AS pemegang rekor tersambar petir terbanyak (7 kali, 1942–1983). Ia selamat setiap kali, namun cedera menumpuk (luka bakar, gangguan pendengaran, penglihatan, dan saraf).</p>"
  },
  "forum": {
    "title": "Diskusi Forum: Rajin vs Malas (ringkasan)",
    "range": "12–16",
    "html": "<p><i>Ringkasan isi teks (teks aslinya belum tersedia). Soal yang menanyakan letak paragraf atau kalimat tertentu tidak bisa dipastikan hanya dari ringkasan ini.</i></p>\n<p><b>ridasrg</b> bertanya: mengapa sebagian orang konsisten rajin, sedangkan yang lain cenderung malas, dan faktor apa yang berperan?</p>\n<p><b>thesmurf</b>: perbedaannya sering karena jenis motivasi — orang rajin didorong motivasi intrinsik, orang malas lebih bergantung motivasi ekstrinsik (tanpa menyebut penelitian). <b>wely.wely</b>: merujuk Roy Baumeister — pengendalian diri terkait fungsi eksekutif (merencanakan, fokus, mengelola impuls); tekad bisa habis (<i>ego depletion</i>) sehingga tampak seperti malas.</p>\n<p><b>underthetable</b>: bercerita pengalaman pribadi sering dicap malas dan merasa malu. <b>jona’s_brother</b>: merujuk Richard Davidson — dopamin berperan menjaga usaha, bisa terganggu pada kondisi neurologis seperti ADHD. <b>nadia</b>: merujuk teori Bowlby dan pengalaman kliniknya — pengalaman awal memengaruhi motivasi; prokrastinasi sering disalahartikan sebagai malas.</p>"
  }
};

export const QUESTIONS = [
  {
    "n": 1,
    "passage": "peoplepleasing",
    "text": "What is the relationship between self-validation and people-pleasing as described in the text?",
    "options": [
      "Self-validation reduces the need for external approval, which helps break the cycle of people-pleasing behavior.",
      "Self-validation encourages people to please others more because they rely on others' opinions to affirm their worth.",
      "Self-validation leads to greater emotional exhaustion because it requires constant effort to meet personal standards.",
      "People-pleasing and self-validation are both forms of seeking approval from others.",
      "People-pleasing promotes self-validation by making us feel valued by others."
    ],
    "answer": "A",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: A</b> · Jenis soal: Hubungan Antar Konsep</p>\n<p>Self-validation dan people-pleasing itu <b>BERLAWANAN</b> — makin kuat yang satu, makin lemah yang lain.</p>\n<section class=\"box cepat\"><h4>Kunci cepat</h4><ul><li><b>People-pleasing</b> = selalu mencari persetujuan orang lain sampai mengorbankan kebutuhan diri sendiri (paragraf 1) dan menghambat pertumbuhan pribadi (paragraf 4).</li><li><b>Self-validation</b> = mengakui &amp; menghargai diri sendiri, sehingga <b>tidak lagi bergantung</b> pada persetujuan orang lain → siklus people-pleasing terputus (paragraf 7).</li></ul></section>\n<p><b>Kenapa pilihan lain salah?</b></p>\n<p class=\"ev no\"><b>Pilihan B.</b> Terbalik. Self-validation justru <b>mengurangi</b> ketergantungan pada opini orang lain.</p>\n<p class=\"ev no\"><b>Pilihan C.</b> Teks bilang self-validation <b>mengurangi</b> kelelahan emosional, bukan menambahnya.</p>\n<p class=\"ev no\"><b>Pilihan D.</b> Beda hal. People-pleasing = cari persetujuan orang lain; self-validation = menghargai diri sendiri.</p>\n<p class=\"ev no\"><b>Pilihan E.</b> Terbalik. People-pleasing justru <b>menghalangi</b> self-validation dan merusak harga diri.</p>\n<section class=\"box awam\"><h4>Analogi</h4><p>People-pleasing seperti ponsel yang baterainya selalu diisi orang lain (gampang kosong). Self-validation = punya charger sendiri.</p></section>\n<section class=\"box tips\"><h4>Trik cepat</h4><p>Soal “hubungan dua konsep”? Cek dulu keduanya <b>searah</b> atau <b>berlawanan</b>, lalu tolak opsi yang membalik arahnya.</p></section>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah A.</b></p></section>"
  },
  {
    "n": 2,
    "passage": "peoplepleasing",
    "text": "The writer's tone in writing the text is best described as ....",
    "options": [
      "Critical",
      "Sarcastic",
      "Indifferent",
      "Concerned",
      "Judgemental"
    ],
    "answer": "D",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: D</b> · Jenis soal: Nada Penulis (Tone)</p>\n<p>Penulis <b>peduli &amp; khawatir</b> — ingin pembaca sadar bahayanya dan mau berubah.</p>\n<section class=\"box cepat\"><h4>Kunci cepat</h4><ul><li>Nada (tone) dibaca dari <b>pilihan kata</b> penulis, bukan dari topiknya.</li><li>Frasa yang muncul: <i>can subtly erode our sense of self</i>, <i>feel overwhelming</i>, <i>inner conflict and fatigue</i>, <i>invisible or unappreciated</i>, <i>it’s essential</i>, <i>an important step</i>.</li><li>Semua mengarah ke satu rasa: <b>concerned</b>. Penulis tidak sekadar memberi informasi, tapi juga mengajak pembaca membuat perubahan yang lebih sehat.</li></ul></section>\n<p><b>Kenapa pilihan lain salah?</b></p>\n<p class=\"ev no\"><b>Pilihan A.</b> <b>Critical</b> — teks lebih bersifat mendidik dan menawarkan solusi, bukan sekadar mengkritik.</p>\n<p class=\"ev no\"><b>Pilihan B.</b> <b>Sarcastic</b> — tidak ada sindiran; teks disampaikan serius dan mendalam.</p>\n<p class=\"ev no\"><b>Pilihan C.</b> <b>Indifferent</b> — justru peduli: dampak buruk dijelaskan rinci, lalu diberi cara mengatasinya.</p>\n<p class=\"ev no\"><b>Pilihan E.</b> <b>Judgemental</b> — tujuannya membantu pembaca paham dan mengubah perilaku, bukan menghakimi.</p>\n<section class=\"box awam\"><h4>Analogi</h4><p>Seperti sahabat yang bilang “aku khawatir sama kamu, ini caranya biar lebih baik” — bukan hakim, bukan penyindir.</p></section>\n<section class=\"box tips\"><h4>Trik cepat</h4><p>Cari kata-kata emosional + cek apakah penulis <b>memberi solusi</b>. Ada solusi dan bahasanya lembut → biasanya <i>concerned</i>, bukan sinis.</p></section>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah D.</b></p></section>"
  },
  {
    "n": 3,
    "passage": "peoplepleasing",
    "text": "Which group of readers would most likely benefit from reading the text?",
    "options": [
      "Readers interested in relationship dynamics",
      "Those looking to set better boundaries",
      "Individuals seeking emotional healing",
      "People focused on personal growth",
      "People having trouble saying \"no\""
    ],
    "answer": "E",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: E</b> · Jenis soal: Target Pembaca</p>\n<p>Inti teks = dampak <b>sulit berkata “tidak”</b> pada orang ber-people-pleasing.</p>\n<section class=\"box cepat\"><h4>Kunci cepat</h4><ul><li>Tentukan dulu <b>inti teks</b>: dampak negatif people-pleasing + cara mengatasinya.</li><li>Salah satu solusi yang ditekankan: <b>belajar berkata “tidak”</b> tanpa rasa bersalah, sebagai bentuk menghargai diri sendiri dan orang lain.</li><li>Maka yang paling terbantu: <b>orang yang kesulitan berkata “tidak”</b>.</li></ul></section>\n<p><b>Kenapa pilihan lain salah?</b></p>\n<p class=\"ev no\"><b>Pilihan A sampai D.</b> <b>Terlalu luas.</b> Kelompok A (hubungan), B (batasan diri), C (pemulihan emosi), dan D (pengembangan diri) memang bisa ikut terbantu, tetapi hanya menyentuh sekilas isi teks.</p>\n<p class=\"ev ok\"><b>Pilihan E (tepat).</b> <b>Paling spesifik</b> dan mencerminkan inti permasalahan yang dibahas teks, termasuk konsekuensinya: lelah emosional, stres, dan hilangnya jati diri.</p>\n<section class=\"box awam\"><h4>Analogi</h4><p>Seperti brosur obat batuk: sasarannya orang yang batuk, bukan “semua orang yang ingin sehat”.</p></section>\n<section class=\"box tips\"><h4>Trik cepat</h4><p>Soal “siapa yang paling diuntungkan?” → pilih opsi yang <b>paling spesifik</b> dan nyambung dengan inti teks. Opsi yang terlalu umum biasanya jebakan.</p></section>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah E.</b></p></section>"
  },
  {
    "n": 4,
    "passage": "petir",
    "text": "What is the writer's intention in writing Text 1?",
    "options": [
      "To explain the effects of lightning strikes on the human body",
      "To highlight the advancements in forensic pathology and the work of lightning experts",
      "To inform readers about the rarity of lightning strikes and their fatal consequences",
      "To showcase the potential long-term consequences of lightning strikes on survivors",
      "To elaborate how forensic pathologists diagnose deaths caused by lightning strikes"
    ],
    "answer": "A",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: A</b> · Jenis soal: Tujuan Penulis (Teks 1)</p>\n<p>Teks 1 membahas <b>dampak sambaran petir pada tubuh manusia</b> — baik yang meninggal maupun yang selamat.</p>\n<section class=\"box cepat\"><h4>Kunci cepat</h4><ul><li>Intisari ada di <b>dua kalimat tanya di akhir paragraf 1</b>: apa yang terjadi saat seseorang tersambar petir, dan apa yang terjadi jika ia selamat?</li><li><b>Paragraf 2</b> → korban yang <b>meninggal</b> (umumnya henti jantung; ada juga gendang telinga pecah, luka bakar). <b>Paragraf 3</b> → korban yang <b>selamat</b> (±90%; kerusakan saraf, PTSD, gejala neurologis).</li><li>Bahasanya <b>objektif</b> (menyampaikan fakta apa adanya), jadi tujuannya <b>menjelaskan</b>, bukan membujuk atau memuji.</li></ul></section>\n<p><b>Kenapa pilihan lain salah?</b></p>\n<p class=\"ev no\"><b>Pilihan B.</b> Fokusnya dampak petir, bukan kemajuan patologi forensik atau kerja pakar petir. Blumenthal hanya pembuka cerita.</p>\n<p class=\"ev no\"><b>Pilihan C.</b> Teks tidak menyebut petir jarang menyambar. Yang benar: sambaran jarang mematikan karena ±90% korban selamat.</p>\n<p class=\"ev no\"><b>Pilihan D.</b> Terlalu sempit — hanya mencakup paragraf 3 (korban selamat). Paragraf 2 menggambarkan efek jangka pendek: meninggal.</p>\n<p class=\"ev no\"><b>Pilihan E.</b> Teks hanya menyebut Blumenthal sebagai ahli patologi forensik yang memeriksa korban; cara diagnosisnya tidak dijelaskan rinci.</p>\n<section class=\"box awam\"><h4>Analogi</h4><p>Judul besar teks ini “Efek Petir pada Tubuh”, bukan “Profil Dokter Forensik”.</p></section>\n<section class=\"box tips\"><h4>Trik cepat</h4><p>Tujuan penulis = lihat <b>gambaran besar seluruh teks</b>. Opsi yang hanya cocok dengan sebagian paragraf biasanya jebakan.</p></section>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah A.</b></p></section>"
  },
  {
    "n": 5,
    "passage": "petir",
    "text": "What is the relationship between Text 1 and Text 2?",
    "options": [
      "Text 2 contradicts Text 1 by suggesting that survivors of lightning strikes rarely experience long-term psychological effects.",
      "Text 2 provides a real-life example that illustrates the consequences of lightning strikes even when the victim survives, as described in Text 2.",
      "Text 1 and 2 indicate that lightning strikes only cause physical injuries, with no long-term effects on a person's mental or emotional state.",
      "Text 2 emphasizes the physical injuries from lightning strikes, while Text 1 focuses more on neurological damage suffered by the survivors.",
      "Text 2 provides evidence that lightning strikes are not as dangerous as suggested in Text 1, as Sullivan survived multiple strikes without significant effects."
    ],
    "answer": "B",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: B</b> · Jenis soal: Hubungan Teks 1 dan Teks 2</p>\n<p>Teks 2 adalah <b>contoh nyata</b> dari dampak jangka panjang yang dijelaskan di Teks 1.</p>\n<section class=\"box cepat\"><h4>Kunci cepat</h4><ul><li><b>Teks 1</b> = penjelasan umum: sambaran petir bisa mematikan; yang selamat pun biasanya mengalami kerusakan saraf, PTSD, dan gejala neurologis.</li><li><b>Teks 2</b> = kisah <b>Roy Sullivan</b>, selamat dari 7 sambaran tetapi cedera menumpuk: luka bakar, gangguan pendengaran dan penglihatan, kerusakan saraf yang makin parah.</li><li>Jadi Teks 2 <b>menggambarkan secara nyata</b> konsekuensi jangka panjang pada korban selamat yang diuraikan Teks 1 → hubungan <b>teori ↔︎ contoh</b>.</li></ul></section>\n<p><b>Kenapa pilihan lain salah?</b></p>\n<p class=\"ev no\"><b>Pilihan A.</b> Tidak bertentangan. Teks 2 justru menunjukkan kondisi fisik dan saraf yang memburuk; tidak ada bukti bahwa korban selamat jarang punya efek jangka panjang.</p>\n<p class=\"ev no\"><b>Pilihan C.</b> Salah. Akhir Teks 2 menyebut Sullivan juga mengalami depresi dan beban psikologis akibat sambaran petir.</p>\n<p class=\"ev no\"><b>Pilihan D.</b> Salah. Kedua teks sama-sama menunjukkan efek jangka panjang, termasuk pada kondisi mental/emosional.</p>\n<p class=\"ev no\"><b>Pilihan E.</b> Salah. Kisah Sullivan justru menunjukkan <b>seriusnya</b> dampak fisik, neurologis, dan psikologis, meski ia selamat dari tujuh sambaran.</p>\n<section class=\"box awam\"><h4>Analogi</h4><p>Teks 1 = teori di buku pelajaran; Teks 2 = studi kasus di lapangan yang membuktikannya.</p></section>\n<section class=\"box tips\"><h4>Trik cepat</h4><p>Soal “hubungan dua teks”? Tentukan peran masing-masing (umum vs kasus), lalu tolak opsi yang membuat keduanya saling bantah padahal tidak.</p></section>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah B.</b></p></section>"
  },
  {
    "n": 6,
    "passage": "petir",
    "text": "Where in the text is it mentioned that lightning strikes can result in neurological damage?",
    "options": [
      "Text 1 paragraph 1 and Text 2 paragraph 2",
      "Text 1 paragraph 3 and Text 2 paragraph 5",
      "Text 1 paragraph 2 and Text 2 paragraph 3",
      "Text 1 paragraph 2 and Text 2 paragraph 5",
      "Text 1 paragraph 3 and Text 2 paragraph 4"
    ],
    "answer": "E",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: E</b> · Jenis soal: Letak Informasi (Paragraf)</p>\n<p>Kerusakan saraf disebut di <b>Teks 1 paragraf 3</b> dan <b>Teks 2 paragraf 4</b>.</p>\n<section class=\"box cepat\"><h4>Kunci cepat</h4><ul><li><b>Teks 1, paragraf 3</b>: korban selamat sering mengalami kerusakan saraf dan gejala neurologis mirip cedera gegar otak (sulit konsentrasi, ingatan buruk, penilaian menurun).</li><li><b>Teks 2, paragraf 4</b>: Roy Sullivan selamat dari tujuh sambaran, tetapi kerusakan neurologisnya makin parah seiring waktu.</li><li><b>Peta paragraf</b> — Teks 1: P1 pembuka, P2 korban meninggal, P3 korban selamat. Teks 2: P1 rekor 7 kali, P2 selamat tiap kali, P3 sambaran 1942–1972, P4 sambaran 1973–1983 + cedera menumpuk, P5 akhir kisah yang tragis.</li></ul></section>\n<p><b>Kenapa pilihan lain salah?</b></p>\n<p class=\"ev no\"><b>Pilihan A.</b> Teks 1 P1 hanya pembuka (kasus Blumenthal dan pertanyaan); Teks 2 P2 tentang Sullivan yang selamat tiap sambaran. Tidak ada kerusakan saraf.</p>\n<p class=\"ev no\"><b>Pilihan B.</b> Teks 1 P3 benar, tetapi Teks 2 P5 membahas akhir kisah yang ironis/tragis, bukan kerusakan saraf.</p>\n<p class=\"ev no\"><b>Pilihan C.</b> Teks 1 P2 membahas korban meninggal (henti jantung, gendang telinga pecah, luka bakar); Teks 2 P3 menceritakan sambaran 1942–1972 dengan luka bakar.</p>\n<p class=\"ev no\"><b>Pilihan D.</b> Teks 1 P2 dan Teks 2 P5 sama-sama tidak menyebut kerusakan saraf.</p>\n<section class=\"box awam\"><h4>Analogi</h4><p>Kerjakan seperti “Ctrl+F”: cari kata kunci <i>nerve damage</i> / <i>neurological</i>, lalu cocokkan nomor paragrafnya.</p></section>\n<section class=\"box tips\"><h4>Trik cepat</h4><p>Soal “di paragraf mana?” → beri nomor tiap paragraf dulu, baru pindai kata kunci. Opsi yang satu paragrafnya benar tapi satunya salah = jebakan.</p></section>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah E.</b></p></section>"
  },
  {
    "n": 7,
    "passage": "petir",
    "text": "The writer in Text 1 implies that despite the high survival rates of a lightning strike, ....",
    "options": [
      "the effects of lightning strikes on the body is deadly",
      "survivors may be physically or psychologically impaired",
      "only a few survivors of lightning strikes suffer from no injuries at all",
      "survivors may eventually die from cardiac arrest or other severe injuries",
      "individuals will suffer from tissue disruption, which can lead to brain injuries"
    ],
    "answer": "B",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: B</b> · Jenis soal: Implikasi Penulis (Inferensi)</p>\n<p>Meski ±90% korban selamat, mereka <b>bisa terganggu secara fisik maupun psikologis</b>.</p>\n<section class=\"box cepat\"><h4>Kunci cepat</h4><ul><li>Letak informasi: <b>paragraf 3</b> Teks 1 — sekitar 90% korban sambaran petir bertahan hidup.</li><li><b>Namun</b> (kata pertentangan: <i>however</i> / <i>unfortunately</i>) mereka sering mengalami kerusakan saraf, gangguan psikologis seperti <b>PTSD</b>, dan gejala neurologis (sulit konsentrasi, ingatan buruk, penilaian menurun).</li><li>Implikasinya: selamat ≠ pulih sepenuhnya — ada gangguan fisik dan psikologis yang signifikan.</li></ul></section>\n<p><b>Kenapa pilihan lain salah?</b></p>\n<p class=\"ev no\"><b>Pilihan A.</b> Bertentangan dengan teks: ±90% korban justru bertahan hidup.</p>\n<p class=\"ev no\"><b>Pilihan C.</b> Teks tidak bilang hanya sedikit yang selamat tanpa cedera; justru sebagian besar korban selamat tetap mengalami gangguan serius.</p>\n<p class=\"ev no\"><b>Pilihan D.</b> Teks tidak menyebut korban selamat akan meninggal kemudian karena serangan jantung.</p>\n<p class=\"ev no\"><b>Pilihan E.</b> Teks memang menyebut gangguan jaringan dan kerusakan saraf, tetapi bukan berarti <b>semua</b> korban mengalami kerusakan otak.</p>\n<section class=\"box awam\"><h4>Analogi</h4><p>Seperti lolos dari kecelakaan mobil: nyawa selamat, tapi bisa tetap membawa cedera bertahun-tahun.</p></section>\n<section class=\"box tips\"><h4>Trik cepat</h4><p>Soal “implies / despite …” → cari kata kontras (<i>however, unfortunately</i>) dan waspadai opsi dengan kata mutlak (<i>only, will, always</i>).</p></section>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah B.</b></p></section>"
  },
  {
    "n": 8,
    "passage": "petir",
    "text": "Which sentence shows the writer’s positive tone?",
    "options": [
      "Roy Sullivan holds the world record for being struck by lightning the most times: seven.",
      "Sullivan was first struck by lightning in 1942, when he was just a young man working as a park ranger.",
      "His story is one of incredible luck, as he survived multiple lightning strikes: while in a vehicle, walking in the forest, and even in his own home.",
      "He sustained burns, hearing and vision problems, and neurological damage, but continued to work in the park and live a relatively normal life.",
      "Despite the unbelievable odds of being struck by lightning multiple times, Sullivan’s survival story was marked by an ironic twist."
    ],
    "answer": "C",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: C</b> · Jenis soal: Kalimat Bernada Positif (Tone)</p>\n<p>Kalimat bernada positif memuat <b>“incredible luck”</b> — selamatnya Sullivan dipandang sebagai keberuntungan luar biasa.</p>\n<section class=\"box cepat\"><h4>Kunci cepat</h4><ul><li>Nada positif = menyampaikan sikap <b>optimis, penuh harapan, atau penilaian baik</b> terhadap sesuatu.</li><li>Pada C, frasa <i>incredible luck</i> (keberuntungan luar biasa) menunjukkan <b>kesan positif</b> penulis tentang bagaimana Sullivan selamat dari sambaran petir berkali-kali.</li><li>Opsi lain hanya menyampaikan <b>fakta</b>, atau menunjukkan sisi <b>ironis/tragis</b>.</li></ul></section>\n<p><b>Kenapa pilihan lain salah?</b></p>\n<p class=\"ev no\"><b>Pilihan A.</b> Hanya informasi faktual: rekor tersambar petir terbanyak (tujuh kali).</p>\n<p class=\"ev no\"><b>Pilihan B.</b> Hanya fakta waktu dan tempat kejadian pertama kali Sullivan tersambar.</p>\n<p class=\"ev no\"><b>Pilihan D.</b> Hanya informasi faktual tentang cedera Sullivan dan kelanjutan hidupnya — tanpa kata yang menilai.</p>\n<p class=\"ev no\"><b>Pilihan E.</b> Menunjukkan sisi <b>ironis/tragis</b> kisahnya: selamat dari petir berkali-kali, tetapi akhir hidupnya tragis.</p>\n<section class=\"box awam\"><h4>Analogi</h4><p>Fakta itu seperti angka di papan skor; nada positif itu sorak penonton (“luar biasa!”).</p></section>\n<section class=\"box tips\"><h4>Trik cepat</h4><p>Cari <b>kata bernilai</b> (frasa penilaian seperti <i>incredible, remarkable, wonderful</i>). Kalimat tanpa kata penilaian = fakta netral.</p></section>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah C.</b></p></section>"
  },
  {
    "n": 9,
    "passage": "petir",
    "text": "“Remarkably, despite being struck repeatedly over the years, Sullivan survived every single strike.” (Text 2, paragraph 2) — The statement is best restated as ...",
    "options": [
      "Despite being struck by lightning many times, Sullivan only survived one of the strikes.",
      "Sullivan amazingly survived every lightning strike though he was struck more than once in a year.",
      "Over the years, Sullivan was struck repeatedly by lightning, and he survived nearly all of them.",
      "Even though Sullivan was struck by lightning repeatedly over the years, he survived most of the strikes.",
      "Though struck by lightning many times throughout the years, Sullivan miraculously survived each strike."
    ],
    "answer": "E",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: E</b> · Jenis soal: Parafrase Pernyataan (Restatement)</p>\n<p>Parafrase terbaik: <b>“miraculously survived each strike”</b> — pesannya sama, tidak ditambah atau dikurangi.</p>\n<section class=\"box cepat\"><h4>Kunci cepat</h4><ul><li>Kalimat asli: meski disambar petir <b>berulang kali selama bertahun-tahun</b>, Sullivan <b>selamat dari setiap sambaran</b>.</li><li>Cocokkan padanan kata: <i>repeatedly</i> = <i>many times</i>; <i>over the years</i> = <i>throughout the years</i>; <i>every single strike</i> = <i>each strike</i>; <i>remarkably</i> ≈ <i>miraculously</i>.</li><li>Parafrase yang tepat harus <b>bermakna sama</b>: jumlah (semua) dan waktu (bertahun-tahun) tidak boleh berubah.</li></ul></section>\n<p><b>Kenapa pilihan lain salah?</b></p>\n<p class=\"ev no\"><b>Pilihan A.</b> Makna berubah: “survived <b>one</b> of the strikes” bertentangan dengan “survived every single strike”.</p>\n<p class=\"ev no\"><b>Pilihan B.</b> Detail salah: “more than once <b>in a year</b>” tidak ada di teks; sambaran terjadi selama bertahun-tahun.</p>\n<p class=\"ev no\"><b>Pilihan C.</b> Jumlah salah: “<b>nearly all</b>” (hampir semua), padahal teks menyebut <b>semua</b> sambaran ia selamati.</p>\n<p class=\"ev no\"><b>Pilihan D.</b> Jumlah salah: “<b>most</b>” (sebagian besar), padahal teks menyebut <b>setiap</b> sambaran.</p>\n<section class=\"box awam\"><h4>Analogi</h4><p>Seperti menerjemahkan satu kalimat ke kalimat lain: kata boleh beda, tapi “isi ceritanya” harus persis sama.</p></section>\n<section class=\"box tips\"><h4>Trik cepat</h4><p>Soal parafrase → cek <b>kata kuantitas</b> (<i>every, all, most, nearly all, one</i>) dan <b>keterangan waktu</b>. Beda sedikit saja = salah.</p></section>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah E.</b></p></section>"
  },
  {
    "n": 10,
    "passage": "petir",
    "text": "Which statement from the texts is an opinion?",
    "options": [
      "The bolt’s massive electrical voltage can disrupt the heart’s normal rhythm, causing it to stop.",
      "The consequences for survivors can be severe and debilitating.",
      "The third strike, in 1970, struck him in the head, causing severe burns to his scalp, and a fourth strike in 1972 left him with burns all over his body.",
      "Despite the unbelievable odds of being struck by lightning multiple times, Sullivan’s survival story was marked by a strange, ironic twist.",
      "While he survived the strikes, he later died by suicide in 1983, reportedly after struggling with depression and the psychological toll of the lightning strikes."
    ],
    "answer": "D",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: D</b> · Jenis soal: Fakta vs Opini</p>\n<p>Opini = pendapat pribadi penulis: <b>“strange, ironic twist”</b> — tidak bisa dibuktikan secara objektif.</p>\n<section class=\"box cepat\"><h4>Kunci cepat</h4><ul><li><b>Fakta</b> bisa dibuktikan (data, kejadian nyata, penjelasan ilmiah). <b>Opini</b> mencerminkan <b>pandangan atau penilaian pribadi</b> dan tidak bisa dibuktikan secara objektif.</li><li>Pada D, kata <i>strange</i> (aneh) dan <i>ironic</i> (ironis) adalah <b>interpretasi pribadi</b> penulis tentang kisah Sullivan — orang lain bisa menilainya berbeda.</li><li>Opsi lain memuat hal yang bisa dibuktikan: penjelasan medis, kejadian nyata, dan kondisi korban selamat.</li></ul></section>\n<p><b>Kenapa pilihan lain salah?</b></p>\n<p class=\"ev no\"><b>Pilihan A.</b> <b>Fakta</b> — penjelasan ilmiah yang bisa dibuktikan lewat pengetahuan medis.</p>\n<p class=\"ev no\"><b>Pilihan B.</b> <b>Fakta</b> — terdengar seperti opini, tetapi didasarkan pada bukti dari banyak studi dan laporan medis.</p>\n<p class=\"ev no\"><b>Pilihan C.</b> <b>Fakta</b> — menceritakan kejadian nyata pada Sullivan yang dapat dibuktikan.</p>\n<p class=\"ev no\"><b>Pilihan E.</b> <b>Fakta</b> — peristiwa nyata yang dapat dibuktikan secara objektif.</p>\n<section class=\"box awam\"><h4>Analogi</h4><p>Fakta = angka di rapor; opini = komentar wali kelas “anaknya unik banget”.</p></section>\n<section class=\"box tips\"><h4>Trik cepat</h4><p>Cari <b>kata bernilai</b> (<i>strange, ironic, unbelievable, amazing</i>). Hati-hati: kalimat yang terdengar menilai tapi didukung bukti (opsi B) tetap <b>fakta</b>.</p></section>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah D.</b></p></section>"
  },
  {
    "n": 11,
    "passage": "petir",
    "text": "What can be concluded from Sullivan’s story?",
    "options": [
      "Sullivan’s physical injuries were far more severe than his psychological struggles.",
      "Sullivan’s repeated lightning strikes were caused by his risky behavior while working as a ranger.",
      "Sullivan’s cumulative physical injuries over the years led to lasting psychological suffering.",
      "Despite suffering severe injuries, Sullivan managed to maintain a normal life without any lasting impacts.",
      "Resilience allowed Sullivan to recover from every lightning strike without any long-term effects."
    ],
    "answer": "C",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: C</b> · Jenis soal: Kesimpulan (Conclusion)</p>\n<p><b>Cedera fisik yang menumpuk</b> bertahun-tahun berujung pada <b>penderitaan psikologis</b> yang berkepanjangan.</p>\n<section class=\"box cepat\"><h4>Kunci cepat</h4><ul><li>Teks 2: Sullivan selamat dari 7 sambaran, tetapi tiap kali mengalami luka bakar, gangguan pendengaran dan penglihatan, serta kerusakan neurologis (paragraf 4 dan 5).</li><li>Seiring waktu, cedera dan kerusakan itu <b>menumpuk (kumulatif)</b> dan berujung pada <b>depresi</b> serta akhir kisah yang tragis.</li><li>Kesimpulan: bukan hanya fisik, ia juga <b>menderita secara psikologis</b> akibat cedera yang menumpuk.</li></ul></section>\n<p><b>Kenapa pilihan lain salah?</b></p>\n<p class=\"ev no\"><b>Pilihan A.</b> Teks 2 menunjukkan psikologisnya sangat terganggu, jadi dampaknya tidak bisa dianggap lebih ringan daripada cedera fisik.</p>\n<p class=\"ev no\"><b>Pilihan B.</b> Teks tidak menyebut perilaku berisiko; ia tersambar saat beraktivitas biasa, bahkan ketika berada di rumah.</p>\n<p class=\"ev no\"><b>Pilihan D.</b> Walau terus bekerja, depresi yang berkelanjutan menunjukkan ia tidak bebas dari dampak jangka panjang.</p>\n<p class=\"ev no\"><b>Pilihan E.</b> Tidak akurat: ia bertahan hidup secara fisik, tetapi tetap menghadapi masalah psikologis yang serius.</p>\n<section class=\"box awam\"><h4>Analogi</h4><p>Seperti retakan kecil yang menumpuk di dinding: tiap retakan “bertahan”, tapi lama-lama seluruh bangunan goyah.</p></section>\n<section class=\"box tips\"><h4>Trik cepat</h4><p>Soal “kesimpulan” → rangkai beberapa informasi teks (sebab → akibat), lalu waspadai opsi bermakna mutlak (<i>without any, every, far more</i>).</p></section>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah C.</b></p></section>"
  },
  {
    "n": 12,
    "passage": "forum",
    "text": "Who gives the least reliable comment?",
    "options": [
      "thesmurf",
      "wely.wely",
      "underthetable",
      "jona’s_brother",
      "nadia"
    ],
    "answer": "A",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: A</b> · Jenis soal: Komentar Paling Tidak Terpercaya</p>\n<p>Komentar <b>thesmurf</b> paling kurang bisa dipercaya — klaimnya <b>tanpa rujukan penelitian atau bukti</b>.</p>\n<section class=\"box cepat\"><h4>Kunci cepat</h4><ul><li>Komentar yang <b>terpercaya</b> punya dasar: penelitian, teori, atau pengalaman profesional. Yang <b>paling tidak terpercaya</b> = dasarnya paling lemah, lebih mirip opini pribadi.</li><li><b>thesmurf</b> menjelaskan motivasi intrinsik vs ekstrinsik, tetapi <b>tanpa menyebut penelitian</b> atau bukti ilmiah yang mendukung.</li><li>Peserta lain punya dasar: <b>wely.wely</b> (penelitian Roy Baumeister), <b>jona’s_brother</b> (penelitian Richard Davidson dkk), <b>nadia</b> (teori Bowlby + pengalaman klinis).</li></ul></section>\n<p><b>Kenapa pilihan lain salah?</b></p>\n<p class=\"ev no\"><b>Pilihan B.</b> <b>wely.wely</b> merujuk penelitian Roy Baumeister → <b>terpercaya</b>.</p>\n<p class=\"ev no\"><b>Pilihan C.</b> <b>underthetable</b> tidak relevan (curhat pengalaman), tetapi <b>“tidak relevan” ≠ “paling tidak terpercaya”</b>. Komentar kurang terpercaya tetap nyambung topik, hanya dasarnya lemah.</p>\n<p class=\"ev no\"><b>Pilihan D.</b> <b>jona’s_brother</b> merujuk penelitian Richard Davidson tentang dopamin → <b>terpercaya</b>.</p>\n<p class=\"ev no\"><b>Pilihan E.</b> <b>nadia</b> merujuk teori Bowlby dan pengalaman klinis langsung → <b>terpercaya</b>.</p>\n<section class=\"box awam\"><h4>Analogi</h4><p>Seperti info di grup chat: “katanya begini…” (tanpa sumber) vs “menurut jurnal X…” (ada sumber). Mana yang kamu percaya?</p></section>\n<section class=\"box tips\"><h4>Trik cepat</h4><p>Soal <i>least reliable</i> → cari komentar <b>tanpa sumber/bukti</b>. Beda dengan <i>irrelevant</i> (tidak nyambung topik).</p></section>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah A.</b></p></section>"
  },
  {
    "n": 13,
    "passage": "forum",
    "text": "Who is most probably a psychologist among the participants?",
    "options": [
      "thesmurf",
      "wely.wely",
      "underthetable",
      "jona’s_brother",
      "nadia"
    ],
    "answer": "E",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: E</b> · Jenis soal: Menebak Profesi (Psikolog)</p>\n<p>Frasa <b>“In my clinical work”</b> dan <b>“therapeutic intervention”</b> menandakan <b>nadia</b> berlatar belakang psikologi klinis.</p>\n<section class=\"box cepat\"><h4>Kunci cepat</h4><ul><li>Cari <b>petunjuk profesi</b> di komentar tiap peserta.</li><li><b>nadia</b> menulis <i>In my clinical work</i> dan <i>therapeutic intervention</i> → ia bekerja di bidang klinis/terapi dan mengaitkan prokrastinasi dengan masalah psikologis yang lebih dalam.</li><li>Peserta lain hanya beropini, merujuk <b>penelitian</b>, atau berbagi <b>pengalaman pribadi</b> — tidak ada tanda berpraktik sebagai psikolog.</li></ul></section>\n<p><b>Kenapa pilihan lain salah?</b></p>\n<p class=\"ev no\"><b>Pilihan A.</b> <b>thesmurf</b> hanya beropini soal motivasi; tidak ada tanda pengalaman profesional.</p>\n<p class=\"ev no\"><b>Pilihan B.</b> <b>wely.wely</b> hanya merujuk penelitian; tidak ada pengalaman langsung berpraktik.</p>\n<p class=\"ev no\"><b>Pilihan C.</b> <b>underthetable</b> bercerita sebagai orang yang pernah dicap malas — pengalaman pribadi, bukan profesi.</p>\n<p class=\"ev no\"><b>Pilihan D.</b> <b>jona’s_brother</b> hanya merujuk penelitian; tidak ada tanda berpraktik sebagai psikolog.</p>\n<section class=\"box awam\"><h4>Analogi</h4><p>“Dalam praktik klinis saya…” → psikolog/terapis, seperti “di ruang operasi saya…” → dokter bedah.</p></section>\n<section class=\"box tips\"><h4>Trik cepat</h4><p>Soal “siapa yang berprofesi …?” → cari <b>kata kunci pengalaman kerja langsung</b> (<i>my clinical work, in my practice</i>), bukan sekadar yang menyebut penelitian.</p></section>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah E.</b></p></section>"
  },
  {
    "n": 14,
    "passage": "forum",
    "text": "What does wely.wely say about being diligent or lazy?",
    "options": [
      "Self-control, the skill determining diligence or laziness, can be improved.",
      "Being overworked leads to decreased diligence, which can be mistaken for laziness.",
      "People with stronger executive function are less likely to struggle with staying on task.",
      "Laziness is caused by mental disorders, where limited willpower leads to procrastination.",
      "Compared to self-control, willpower plays a greater role in determining one’s diligence."
    ],
    "answer": "C",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: C</b> · Jenis soal: Isi Komentar (wely.wely)</p>\n<p>Fungsi eksekutif yang lebih kuat → <b>lebih mampu fokus</b> dan <b>kecil kemungkinan menunda</b>.</p>\n<section class=\"box cepat\"><h4>Kunci cepat</h4><ul><li><b>wely.wely</b>: pengendalian diri (<i>self-control</i>) yang menentukan kerajinan sangat terkait <b>fungsi eksekutif</b> — kemampuan merencanakan, fokus, dan mengelola impuls.</li><li>Orang yang kesulitan di fungsi ini cenderung <b>menunda-nunda</b> dan sulit tetap fokus pada tugas.</li><li>Sebaliknya, yang fungsi eksekutifnya kuat <b>lebih bisa fokus</b> dan <b>kecil kemungkinannya menunda</b> → opsi C.</li></ul></section>\n<p><b>Kenapa pilihan lain salah?</b></p>\n<p class=\"ev no\"><b>Pilihan A.</b> wely.wely tidak membahas bahwa pengendalian diri bisa ditingkatkan.</p>\n<p class=\"ev no\"><b>Pilihan B.</b> wely.wely tidak membahas kaitan antara bekerja berlebihan dan berkurangnya kerajinan.</p>\n<p class=\"ev no\"><b>Pilihan D.</b> Baumeister yang ia rujuk tidak menyebut berkurangnya tekad (<i>ego depletion</i>) sebagai gangguan mental.</p>\n<p class=\"ev no\"><b>Pilihan E.</b> wely.wely tidak membandingkan kontrol diri dan tekad; ia menyebut tekad sebagai aspek utama dalam kontrol diri.</p>\n<section class=\"box awam\"><h4>Analogi</h4><p>Fungsi eksekutif = “manajer” di otak: manajer yang kuat membuat tugas terarah dan jarang ditunda.</p></section>\n<section class=\"box tips\"><h4>Trik cepat</h4><p>Soal “apa kata si X?” → baca <b>hanya komentar X</b>, jangan campur dengan peserta lain, lalu cocokkan tiap opsi dengan kalimatnya.</p></section>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah C.</b></p></section>"
  },
  {
    "n": 15,
    "passage": "forum",
    "text": "The word prone in ridasrg’s comment means ....",
    "options": [
      "likely",
      "resistant",
      "unaware",
      "addicted",
      "accustomed"
    ],
    "html": "<div class=\"qp\">The word <b>prone</b> in ridasrg’s comment means ....</div>",
    "answer": "A",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: A</b> · Jenis soal: Arti Kata (Vocabulary in Context)</p>\n<p><i>prone to laziness</i> = <b>cenderung / berkemungkinan besar</b> malas → <b>likely</b>.</p>\n<section class=\"box cepat\"><h4>Kunci cepat</h4><ul><li>Kalimat ridasrg membandingkan orang yang <i>consistently diligent</i> dengan orang yang <i>prone to laziness</i>.</li><li>Lawan dari “konsisten rajin” adalah “<b>cenderung malas</b>”, jadi <i>prone</i> = <b>cenderung</b> / <b>berkemungkinan besar</b>.</li><li>Padanan: <i>prone to</i> ≈ <i>likely to</i> ≈ <i>tend to</i>.</li></ul></section>\n<p><b>Kenapa pilihan lain salah?</b></p>\n<p class=\"ev no\"><b>Pilihan B.</b> <b>Resistant</b> = kebal/tidak terpengaruh. <i>Resistant to laziness</i> = tidak mudah malas (kebalikannya).</p>\n<p class=\"ev no\"><b>Pilihan C.</b> <b>Unaware</b> = tidak sadar; tidak ada hubungannya dengan <i>prone</i>.</p>\n<p class=\"ev no\"><b>Pilihan D.</b> <b>Addicted</b> = kecanduan/ketergantungan kuat. <i>Prone</i> hanya kecenderungan, bukan ketergantungan.</p>\n<p class=\"ev no\"><b>Pilihan E.</b> <b>Accustomed</b> = terbiasa (kebiasaan yang sudah terbentuk); <i>prone</i> lebih ke kemungkinan/kecenderungan.</p>\n<section class=\"box awam\"><h4>Analogi</h4><p>Seperti kata “rawan”: daerah <b>rawan</b> banjir = <b>berpeluang besar</b> banjir.</p></section>\n<section class=\"box tips\"><h4>Trik cepat</h4><p>Soal arti kata → lihat <b>kalimat pembanding/kontras</b> di sekitarnya, lalu masukkan tiap opsi ke kalimat untuk menguji.</p></section>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah A.</b></p></section>"
  },
  {
    "n": 16,
    "passage": "forum",
    "text": "Who gives an irrelevant comment?",
    "options": [
      "thesmurf",
      "wely.wely",
      "underthetable",
      "jona’s_brother",
      "nadia"
    ],
    "answer": "C",
    "explain": "<p class=\"keystatus ok\"><b>Jawaban: C</b> · Jenis soal: Komentar Tidak Relevan</p>\n<p>Komentar <b>underthetable</b> tidak relevan — ia hanya <b>curhat dicap malas</b> dan tidak menjawab pertanyaan ridasrg.</p>\n<section class=\"box cepat\"><h4>Kunci cepat</h4><ul><li>Topik diskusi: <b>faktor yang membuat sebagian orang konsisten rajin dan yang lain cenderung malas</b>.</li><li>Yang <b>relevan</b>: thesmurf (jenis motivasi), wely.wely (pengendalian diri dan fungsi eksekutif), jona’s_brother (faktor neurologis/dopamin), nadia (pengalaman awal dan pola perilaku).</li><li><b>underthetable</b> lebih fokus menceritakan pengalamannya dilabeli malas — ceritanya sama sekali tidak menjawab pertanyaan.</li></ul></section>\n<p><b>Kenapa pilihan lain salah?</b></p>\n<p class=\"ev no\"><b>Pilihan A.</b> <b>thesmurf</b> relevan — membahas perbedaan rajin dan malas berdasarkan jenis motivasi.</p>\n<p class=\"ev no\"><b>Pilihan B.</b> <b>wely.wely</b> relevan — membahas pengendalian diri dan fungsi eksekutif.</p>\n<p class=\"ev no\"><b>Pilihan D.</b> <b>jona’s_brother</b> relevan — membahas faktor neurologis, khususnya peran dopamin.</p>\n<p class=\"ev no\"><b>Pilihan E.</b> <b>nadia</b> relevan — menghubungkan pengalaman hidup awal dengan pola perilaku yang memengaruhi ketekunan dan kemalasan.</p>\n<section class=\"box awam\"><h4>Analogi</h4><p>Ditanya “kenapa banjir terjadi?”, lalu ada yang menjawab “aku pernah kebanjiran dan sedih” — menyentuh, tapi tidak menjawab penyebabnya.</p></section>\n<section class=\"box tips\"><h4>Trik cepat</h4><p>Soal <i>irrelevant</i> → tentukan dulu <b>inti pertanyaan</b>, lalu cari komentar yang <b>tidak menjawabnya</b>, seberapa pun menarik atau menyentuhnya.</p></section>\n<section class=\"box jawab\"><p><b>Jadi, jawaban yang tepat adalah C.</b></p></section>"
  }
];

// Pembahasan untuk siswa = pembahasan guru (field explain). Kunci peta adalah nomor soal.
export const EXPLAIN_SISWA = Object.fromEntries(QUESTIONS.map((q) => [String(q.n), q.explain]));
