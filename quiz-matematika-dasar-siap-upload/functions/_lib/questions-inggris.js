// Bank soal Bahasa Inggris: Tryout 9 TKA SMA/SMK/MA 2026, soal nomor 1 sampai 25.
// Dibuat dari dokumen "TKA English Soal dan Pembahasan 1-25".
//
// Format sama dengan questions.js (matematika), ditambah:
//   passage : kunci ke PASSAGES (teks bacaan yang dipakai bersama 5 soal)
//   answer  : satu huruf, atau beberapa huruf berurutan untuk soal dengan lebih dari satu
//             jawaban benar (contoh "ACE"). Soal seperti itu otomatis tampil sebagai pilihan ganda kompleks.
// File ini hanya dibaca server, jadi kunci jawaban dan pembahasan tidak dikirim ke siswa sebelum mereka menjawab.

export const PASSAGES = {
  "descriptive": {
    "title": "Descriptive Text",
    "range": "1–5",
    "html": "<p>The Nirmala Riverside Pavilion stands beside a slow river at the edge of a small town. From the main road, visitors see a broad wooden roof, white walls, and four tall columns painted dark blue. A row of flowering shrubs follows the front path, while a low stone wall separates the building from the riverbank. The pavilion was built as a rest house for travelers many years ago, but it has recently become a public cultural space.</p>\n<p>The main hall is open on three sides, allowing river breezes to pass through it. Long benches face the water, and several ceiling fans make the room comfortable on warm afternoons. On the eastern wall, framed photographs show the river and nearby villages in different periods. A small cabinet beneath them contains old maps, boat tickets, and handwritten stories from former river workers. Visitors may read the materials but must leave them inside the pavilion.</p>\n<p>Behind the hall, a narrow room is used for local craft demonstrations. On some weekends, residents teach visitors how to weave palm leaves or make small wooden boats. A covered side path leads to a quiet reading corner with newspapers, village records, and a shelf of donated novels. The path also connects to a gentle ramp from the parking area, making the pavilion easier to enter for people using wheelchairs. Although the building keeps its traditional roof, columns, and historical displays, its rearranged rooms now support learning, relaxation, and community activities.</p>"
  },
  "recount": {
    "title": "Recount Text",
    "range": "6–10",
    "html": "<p>During the school holiday, I joined a community workshop called Small Fixes Day at the public library. The event was organised by our environmental club and several local volunteers. Instead of selling new products, the workshop invited residents to bring objects that needed simple repairs. I worked at the registration desk in the morning and later helped record the results at each station.</p>\n<p>There were four stations: seedling trays, bicycles, bookbinding, and rainwater containers. At first, only a few people arrived, so volunteers could explain each repair carefully. After lunch, more residents came at the same time. The library entrance became crowded, and visitors sometimes waited because the tables were close together. The chart records items brought for inspection, not the number of different visitors. One visitor could bring several items.</p>\n<p>The seedling team replaced cracked trays and cleaned blocked holes. The bicycle team adjusted brakes and changed worn cables. At the bookbinding table, volunteers repaired loose covers and missing pages. The rainwater team found that several containers had holes near their bases. They repaired a few with sealant, but many holes were too large, and the team ran out of suitable patches before the afternoon ended.</p>\n<p>When we reviewed the day, we agreed that the records were useful but incomplete. They showed which stations were busy and which repairs succeeded, yet they did not tell us the exact number of residents. We also decided that a future event would need more repair materials and a clearer arrangement of tables near the entrance.</p>\n<img src=\"img/ing-grafik-stasiun.png\" alt=\"Bar chart of recorded visits and successful repairs at four stations: Seedling 32/24, Bicycle 28/14, Bookbinding 20/15, Rainwater 16/4.\">"
  },
  "narrative": {
    "title": "Narrative Text",
    "range": "11–15",
    "html": "<p>Every Sunday morning, Raka visited the abandoned lighthouse beyond the fishing village. The lighthouse had not guided ships for many years because its lamp was broken, but Raka liked climbing the narrow stairs and looking at the sea. His grandfather, who had once worked there, often told him that the lighthouse had saved boats during many dangerous storms.</p>\n<p>One afternoon, a fierce storm damaged several fishing boats. The villagers realized that the old lighthouse might still be useful, but nobody knew how to repair its lamp. Raka remembered a small locked room beneath the stairs. His grandfather had said that the room contained old tools, although he had never opened it. Raka searched for the key and found it inside a wooden box in his grandfather’s workshop.</p>\n<p>Inside the room, Raka discovered a hand-operated lantern and a notebook. The notebook explained how the lantern worked and included drawings made by his grandfather. Raka showed the materials to the village leader. Together with several villagers, he cleaned the lantern, replaced its cracked glass, and placed it near the highest window. They could not restore the electric lamp, but the hand-operated lantern produced a strong light.</p>\n<p>That night, the villagers took turns operating the lantern while boats returned through the rough water. The next day, they decided to care for the lighthouse together. Raka kept the notebook in a safe cabinet, understanding that an old place could become useful again when people valued its history and worked together.</p>"
  },
  "procedure": {
    "title": "Procedure Text",
    "range": "16–20",
    "html": "<p><b>How to Prepare a Portable Herb Garden</b></p>\n<p>A portable herb garden allows you to grow useful plants in a small space and move them when necessary. Prepare a shallow container with drainage holes, small stones, potting soil, herb seeds, a spoon, water, labels, and a tray to catch excess water. Choose herbs that can grow well in your climate, such as basil, mint, or parsley. Place the container where it can receive several hours of gentle sunlight but is protected from strong wind and heavy rain.</p>\n<p>First, clean the container and check that its drainage holes are open. Put a thin layer of small stones at the bottom. The stones help excess water leave the soil. Add potting soil until the container is nearly full, but leave a small space at the top. Do not press the soil too firmly because plant roots need air and room to grow.</p>\n<p>Make shallow lines in the soil with the spoon. Follow the spacing instructions on the seed packet, since different herbs need different amounts of space. Place the seeds in the lines and cover them with a thin layer of soil. Spray the surface gently until it is moist. Avoid pouring water strongly because the seeds may be washed away or pushed too deeply into the soil.</p>\n<p>Put a label beside each planted row and write the herb name and planting date on it. Check the container every morning. If the surface is dry, spray it again. When the seedlings become strong and have several healthy leaves, place the container in a brighter location for short periods before leaving it there. Turn the container every few days so that the plants receive light evenly. Remove weak seedlings if they are growing too close together.</p>"
  },
  "exposition": {
    "title": "Analytical Exposition",
    "range": "21–25",
    "html": "<p>Senior high schools should provide a weekly student-led book discussion because it can strengthen reading habits and help students express ideas clearly. The activity would last forty minutes after one regular lesson. Students would read a short article, story, or chapter beforehand, then discuss its main point, supporting details, and questions in small groups. A teacher would guide the session but would not dominate every conversation.</p>\n<p>A five-week trial at Harapan Senior High School involved 72 students from three classes. During the first week, teachers recorded how many students contributed at least one relevant comment in a reading lesson. The proportion was 46 percent. In the fifth week, it reached 69 percent. Teachers also reported that more students began referring to details from the texts instead of giving only personal opinions. However, the trial did not measure long-term reading achievement, and the participating classes volunteered to join. Several quieter students said they needed more preparation time before speaking.</p>\n<p>The discussion program may therefore offer useful practice, but schools should introduce it carefully. Teachers should provide guiding questions, allow students to write notes before speaking, and vary group roles so that one confident student does not control the conversation. Schools should begin with one session each week, review participation after one term, and compare the results with other reading activities. This approach can encourage active reading while recognizing that a short trial cannot prove that the program will improve every student’s achievement.</p>"
  }
};

export const QUESTIONS = [
  {
    "n": 1,
    "passage": "descriptive",
    "text": "What is the main focus of the description?",
    "options": [
      "The decline of river travel and the reasons the old rest house was closed",
      "The historical photographs and documents collected by former river workers",
      "The preserved features and adapted spaces of a riverside pavilion serving the community",
      "The construction materials used for the pavilion’s roof, walls, and columns",
      "The weekend craft lessons organized by residents for visitors"
    ],
    "answer": "C",
    "explain": "<p>Soal menanyakan <i>main focus</i> (fokus utama), yaitu hal yang dibahas di seluruh teks, bukan satu detail saja.</p>\n<p>Paragraf 1 menceritakan tampilan luar dan sejarah bangunan, paragraf 2 menceritakan aula dan pajangan sejarahnya, paragraf 3 menceritakan ruang kerajinan, sudut baca, dan jalan landai. Kalimat penutupnya merangkum semuanya: <i>“Although the building keeps its traditional roof, columns, and historical displays, its rearranged rooms now support learning, relaxation, and community activities.”</i> (“Meskipun bangunan mempertahankan atap, tiang, dan pajangan sejarahnya yang tradisional, ruangan-ruangannya yang ditata ulang kini mendukung pembelajaran, relaksasi, dan kegiatan komunitas.”)</p>\n<p>Jadi fokus teks adalah ciri bangunan yang dilestarikan dan ruang yang disesuaikan untuk masyarakat, yaitu pilihan <b>C</b>.</p>\n<p class=\"ev no\"><b>A.</b> Salah. Teks tidak membahas menurunnya perjalanan sungai atau alasan penutupan rumah singgah.</p>\n<p class=\"ev no\"><b>B.</b> Salah. Foto dan dokumen hanya satu detail di paragraf 2.</p>\n<p class=\"ev no\"><b>D.</b> Salah. Bahan atap, dinding, dan tiang hanya detail di paragraf 1.</p>\n<p class=\"ev no\"><b>E.</b> Salah. Pelajaran kerajinan hanya detail di paragraf 3.</p>"
  },
  {
    "n": 2,
    "passage": "descriptive",
    "text": "What can be inferred about the Nirmala Riverside Pavilion from the relationship between its preserved features and its rearranged rooms?",
    "options": [
      "It has been adapted to support present-day community activities while retaining its historical identity.",
      "It mainly serves as a quiet archive because visitors are not allowed to use its historical materials.",
      "It has replaced most of its traditional character with facilities designed for modern entertainment.",
      "It was renovated primarily to provide comfortable accommodation for travelers along the river.",
      "It separates cultural learning from recreational activities so that visitors must use different buildings."
    ],
    "answer": "A",
    "explain": "<p>Ini soal inferensi: jawabannya tidak ditulis langsung, tetapi bisa disimpulkan dari bukti di teks.</p>\n<p>Fitur yang dipertahankan: atap, tiang, foto, peta, dan tiket lama. Ruang yang ditata ulang: ruang demonstrasi kerajinan, sudut baca, dan jalan landai untuk pengguna kursi roda. Gabungan keduanya menunjukkan bahwa bangunan disesuaikan untuk kegiatan masa kini tanpa kehilangan identitas sejarahnya, yaitu pilihan <b>A</b>.</p>\n<p class=\"ev no\"><b>B.</b> Salah. Teks menyebut <i>“Visitors may read the materials”</i> (“Pengunjung boleh membaca materinya”), jadi bangunan bukan sekadar arsip yang tertutup.</p>\n<p class=\"ev no\"><b>C.</b> Salah. Ciri tradisional justru dipertahankan, dan teks tidak menyebut hiburan modern.</p>\n<p class=\"ev no\"><b>D.</b> Salah. Dulu bangunan ini rumah singgah bagi pelancong; sekarang menjadi ruang budaya publik, bukan direnovasi untuk penginapan.</p>\n<p class=\"ev no\"><b>E.</b> Salah. Belajar budaya (kerajinan, membaca) dan bersantai (aula, bangku) ada dalam satu bangunan yang sama.</p>"
  },
  {
    "n": 3,
    "passage": "descriptive",
    "text": "Which three interpretations best evaluate how the description presents the Nirmala Riverside Pavilion as a heritage space for contemporary community use?",
    "options": [
      "The traditional roof, dark-blue columns, historical photographs, and river-related materials make the pavilion’s past visible to visitors.",
      "The rearranged rooms show that the pavilion has replaced its traditional identity with a fully modern design.",
      "The craft room, reading corner, and community materials present the pavilion as a place for learning and local participation.",
      "The requirement to leave historical materials inside suggests that the pavilion is mainly intended to restrict public interaction.",
      "The open hall, gentle ramp, and varied facilities indicate that the pavilion combines public comfort with inclusive access."
    ],
    "answer": "ACE",
    "explain": "<p>Soal meminta tiga penafsiran yang paling tepat. Cocokkan tiap pilihan dengan isi teks.</p>\n<p class=\"ev ok\"><b>A.</b> Benar. Atap, tiang biru tua, foto, peta, tiket, dan cerita pekerja sungai membuat masa lalu bangunan terlihat oleh pengunjung.</p>\n<p class=\"ev ok\"><b>C.</b> Benar. Warga mengajar pengunjung menganyam daun palem atau membuat perahu kecil, dan ada sudut baca. Ini menunjukkan tempat belajar dan partisipasi warga.</p>\n<p class=\"ev ok\"><b>E.</b> Benar. Aula terbuka (angin sungai, kipas angin) dan jalan landai untuk kursi roda menunjukkan kenyamanan dan akses yang inklusif.</p>\n<p class=\"ev no\"><b>B.</b> Salah. <i>“fully modern design”</i> (“desain yang sepenuhnya modern”) berlebihan, karena atap, tiang, dan pajangan sejarah tetap dipertahankan.</p>\n<p class=\"ev no\"><b>D.</b> Salah. Aturan itu hanya melarang membawa materi keluar; pengunjung tetap boleh membacanya, jadi bukan pembatasan interaksi publik.</p>"
  },
  {
    "n": 4,
    "passage": "descriptive",
    "text": "Which feature most clearly shows that the pavilion has been adapted to serve both as a historical space and as a place for present-day community activities?",
    "options": [
      "The front path is lined with flowering shrubs beside a low stone wall.",
      "The main hall has long benches, ceiling fans, and an open design facing the river.",
      "The eastern wall displays framed photographs of the river and nearby villages.",
      "Visitors can read old maps, boat tickets, and handwritten stories inside the cabinet.",
      "The traditional building and historical displays are retained while the rooms support craft demonstrations, reading, and accessible community use."
    ],
    "answer": "E",
    "explain": "<p>Soal meminta fitur yang paling jelas menunjukkan dua fungsi sekaligus: ruang sejarah dan ruang kegiatan masa kini.</p>\n<p>Hanya pilihan <b>E</b> yang memuat keduanya: <i>“The traditional building and historical displays are retained”</i> (“bangunan tradisional dan pajangan sejarah dipertahankan”) sekaligus ruang untuk demonstrasi kerajinan, membaca, dan akses yang mudah bagi warga.</p>\n<p class=\"ev no\"><b>A.</b> Salah. Hanya menggambarkan tampilan luar (semak berbunga dan dinding batu).</p>\n<p class=\"ev no\"><b>B.</b> Salah. Hanya menunjukkan kenyamanan aula, tanpa sisi sejarah.</p>\n<p class=\"ev no\"><b>C.</b> Salah. Hanya sisi sejarah (foto), tanpa sisi kegiatan masa kini.</p>\n<p class=\"ev no\"><b>D.</b> Salah. Hanya sisi sejarah (arsip di lemari), tanpa sisi kegiatan masa kini.</p>"
  },
  {
    "n": 5,
    "passage": "descriptive",
    "text": "What can be inferred about the Nirmala Riverside Pavilion from the way its traditional features and rearranged spaces are combined?",
    "options": [
      "It mainly preserves the pavilion as a historical object by limiting visitors to viewing its old materials.",
      "It has been adapted into an inclusive community space that connects local heritage with learning and public activities.",
      "It replaces the pavilion’s traditional character with modern facilities intended primarily for tourists.",
      "It focuses on displaying river history while providing only limited opportunities for practical community participation.",
      "It separates cultural demonstrations from reading and relaxation so that visitors use only one function at a time."
    ],
    "answer": "B",
    "explain": "<p>Ini soal inferensi tentang cara fitur tradisional dan ruang yang ditata ulang digabungkan.</p>\n<p>Fitur tradisional (atap, tiang, foto, arsip) tetap ada, sementara ruang baru (kerajinan, sudut baca, jalan landai) membuat bangunan bisa dipakai warga. Artinya bangunan menjadi ruang komunitas yang inklusif, yang menghubungkan warisan lokal dengan kegiatan belajar dan kegiatan publik, yaitu pilihan <b>B</b>.</p>\n<p class=\"ev no\"><b>A.</b> Salah. Pengunjung tidak hanya melihat; mereka juga bisa membuat kerajinan dan membaca.</p>\n<p class=\"ev no\"><b>C.</b> Salah. Karakter tradisional tidak diganti, dan teks tidak menyebut turis sebagai sasaran utama.</p>\n<p class=\"ev no\"><b>D.</b> Salah. Kesempatan berpartisipasi cukup banyak, misalnya warga mengajar kerajinan pada akhir pekan tertentu.</p>\n<p class=\"ev no\"><b>E.</b> Salah. Teks tidak menyebut fungsi-fungsi itu dipisah sehingga pengunjung hanya bisa memakai satu fungsi dalam satu waktu.</p>\n<p><i>Soal nomor 6–10</i></p>"
  },
  {
    "n": 6,
    "passage": "recount",
    "text": "Which evaluations are best supported by both the recount and the chart? Select all correct answers.",
    "options": [
      "The seedling station had the highest success rate among the four stations.",
      "The bicycle station received fewer items than the seedling station and completed more successful repairs.",
      "The rainwater station’s low success rate is consistent with the report about large holes and limited patches.",
      "The chart proves that exactly ninety-six different residents attended the workshop.",
      "The organizers had reasonable grounds to plan for more materials and better visitor movement."
    ],
    "answer": "CE",
    "explain": "<p>Pertama, hitung tingkat keberhasilan tiap stasiun dari grafik dengan rumus <i>perbaikan berhasil ÷ item tercatat</i>:</p>\n<p>Seedling 24 ÷ 32 = 75%; Bicycle 14 ÷ 28 = 50%; Bookbinding 15 ÷ 20 = 75%; Rainwater 4 ÷ 16 = 25%.</p>\n<p class=\"ev no\"><b>A.</b> Salah. Seedling memang 75%, tetapi Bookbinding juga 75%. Jadi Seedling bukan yang tertinggi sendirian.</p>\n<p class=\"ev no\"><b>B.</b> Salah. Bagian pertama benar (Bicycle 28 item, lebih sedikit dari Seedling 32), tetapi perbaikan berhasil Bicycle (14) lebih sedikit dari Seedling (24), bukan lebih banyak.</p>\n<p class=\"ev ok\"><b>C.</b> Benar. Rainwater punya tingkat keberhasilan terendah (25%), sesuai teks: <i>“many holes were too large, and the team ran out of suitable patches”</i> (“banyak lubang terlalu besar, dan tim kehabisan tambalan yang cocok”).</p>\n<p class=\"ev no\"><b>D.</b> Salah. Grafik mencatat item, bukan orang (total 32 + 28 + 20 + 16 = 96 item). Teks juga menyatakan <i>“One visitor could bring several items.”</i> (“Satu pengunjung bisa membawa beberapa item.”)</p>\n<p class=\"ev ok\"><b>E.</b> Benar. Bahan perbaikan habis dan pintu masuk perpustakaan padat, sehingga rencana menambah bahan dan menata gerak pengunjung punya dasar yang masuk akal.</p>"
  },
  {
    "n": 7,
    "passage": "recount",
    "text": "What did the volunteers learn from reviewing the workshop records at the end of the day?",
    "options": [
      "The event had attracted exactly as many residents as expected.",
      "Every item brought to the workshop had been repaired successfully.",
      "The rainwater station had been the busiest station throughout the event.",
      "The records showed useful repair patterns but could not identify the exact number of residents.",
      "The crowded entrance had prevented most visitors from reaching the repair stations."
    ],
    "answer": "D",
    "explain": "<p>Jawabannya ada di paragraf terakhir: <i>“the records were useful but incomplete”</i> (“catatan itu berguna tetapi belum lengkap”) dan <i>“they did not tell us the exact number of residents”</i> (“catatan itu tidak memberi tahu kami jumlah pasti warga”). Ini sesuai pilihan <b>D</b>.</p>\n<p class=\"ev no\"><b>A.</b> Salah. Teks tidak membahas jumlah warga yang diharapkan.</p>\n<p class=\"ev no\"><b>B.</b> Salah. Tidak semua item berhasil diperbaiki; di grafik, Rainwater hanya berhasil 4 dari 16.</p>\n<p class=\"ev no\"><b>C.</b> Salah. Stasiun tersibuk adalah Seedling (32 item), bukan Rainwater (16 item).</p>\n<p class=\"ev no\"><b>E.</b> Salah. Teks hanya menyebut pengunjung <i>sometimes waited</i> (“kadang menunggu”), bukan gagal mencapai stasiun perbaikan.</p>"
  },
  {
    "n": 8,
    "passage": "recount",
    "text": "What can be inferred about the organisers’ main concern when reviewing the workshop records?",
    "options": [
      "They wanted to identify the residents who had brought several items.",
      "They wanted to use the records to improve materials and the arrangement of the next event.",
      "They wanted to prove that every damaged item could be repaired successfully.",
      "They wanted to measure the exact number of residents who entered the library.",
      "They wanted to reduce the number of repair stations in future workshops."
    ],
    "answer": "B",
    "explain": "<p>Kekhawatiran utama panitia terlihat dari keputusan mereka di akhir hari: <i>“a future event would need more repair materials and a clearer arrangement of tables near the entrance”</i> (“acara berikutnya akan membutuhkan lebih banyak bahan perbaikan dan penataan meja yang lebih jelas dekat pintu masuk”). Jadi mereka memakai catatan untuk memperbaiki acara berikutnya, yaitu pilihan <b>B</b>.</p>\n<p class=\"ev no\"><b>A.</b> Salah. Mereka tidak berusaha mengenali siapa yang membawa banyak item.</p>\n<p class=\"ev no\"><b>C.</b> Salah. Mereka justru mencatat bahwa banyak perbaikan belum berhasil (misalnya di stasiun Rainwater).</p>\n<p class=\"ev no\"><b>D.</b> Salah. Tidak diketahuinya jumlah pasti warga adalah keterbatasan catatan, bukan tujuan mereka.</p>\n<p class=\"ev no\"><b>E.</b> Salah. Tidak ada rencana mengurangi stasiun; yang direncanakan adalah menambah bahan dan merapikan meja.</p>"
  },
  {
    "n": 9,
    "passage": "recount",
    "text": "Which evaluation best captures the overall value of Small Fixes Day, considering both its achievements and its limitations?",
    "options": [
      "It was completely successful because every item brought to the workshop received a repair.",
      "It was ineffective because the records did not provide the exact number of residents who attended.",
      "It was mainly a social gathering whose repair activities had little practical value.",
      "It was worthwhile because it extended the use of repairable objects, revealed logistical weaknesses, and provided useful direction for future events.",
      "It was unsuccessful because the rainwater station could not repair all containers before the workshop ended."
    ],
    "answer": "D",
    "explain": "<p>Evaluasi yang baik harus seimbang: menyebut keberhasilan dan keterbatasan sekaligus.</p>\n<p>Keberhasilan: dari 96 item yang tercatat, 57 berhasil diperbaiki (24 + 14 + 15 + 4), sehingga banyak barang bisa dipakai lebih lama. Keterbatasan: pintu masuk padat, bahan habis, dan jumlah warga tidak diketahui. Hasilnya memberi arah untuk acara berikutnya. Semua ini ada di pilihan <b>D</b>.</p>\n<p class=\"ev no\"><b>A.</b> Salah. Terlalu ekstrem; tidak semua item berhasil diperbaiki.</p>\n<p class=\"ev no\"><b>B.</b> Salah. Tidak adanya jumlah pasti warga hanya keterbatasan catatan, tidak membuat acara tidak efektif.</p>\n<p class=\"ev no\"><b>C.</b> Salah. Kegiatan perbaikan nyata dan berguna (57 perbaikan berhasil).</p>\n<p class=\"ev no\"><b>E.</b> Salah. Satu stasiun yang tidak berhasil memperbaiki semua wadah tidak membuat seluruh acara gagal.</p>"
  },
  {
    "n": 10,
    "passage": "recount",
    "text": "Which conclusions are best supported by the recount? Select all correct answers.",
    "options": [
      "A future workshop should provide more repair materials and arrange the tables more clearly near the entrance.",
      "The records establish the exact number of residents who attended the workshop.",
      "The rainwater team successfully repaired every container brought to its station.",
      "The quieter morning helped volunteers explain repairs carefully, while the afternoon crowd created waiting problems.",
      "Each visitor brought only one item because the records counted residents rather than items."
    ],
    "answer": "AD",
    "explain": "<p>Soal meminta kesimpulan yang didukung teks recount. Periksa tiap pilihan.</p>\n<p class=\"ev ok\"><b>A.</b> Benar. Sesuai kesimpulan di paragraf terakhir: acara berikutnya butuh lebih banyak bahan perbaikan dan penataan meja yang lebih jelas dekat pintu masuk.</p>\n<p class=\"ev ok\"><b>D.</b> Benar. Pagi hari sedikit pengunjung sehingga relawan bisa menjelaskan dengan teliti (<i>“volunteers could explain each repair carefully”</i>, “relawan bisa menjelaskan setiap perbaikan dengan teliti”); siang hari lebih ramai sehingga pengunjung kadang menunggu.</p>\n<p class=\"ev no\"><b>B.</b> Salah. Catatan tidak memberi jumlah pasti warga (angka 96 adalah jumlah item).</p>\n<p class=\"ev no\"><b>C.</b> Salah. Tim Rainwater hanya berhasil memperbaiki 4 dari 16 wadah.</p>\n<p class=\"ev no\"><b>E.</b> Salah. Teks menyatakan satu pengunjung bisa membawa beberapa item, dan grafik menghitung item, bukan warga.</p>\n<p><i>Soal nomor 11–15</i></p>"
  },
  {
    "n": 11,
    "passage": "narrative",
    "text": "What can be inferred about Raka’s discovery and actions in the story?",
    "options": [
      "He connects his grandfather’s forgotten knowledge with a practical solution for protecting the village.",
      "He secretly repairs the lighthouse because he wants to become its official keeper.",
      "He proves that the electric lamp can work again after the villagers replace its wires.",
      "He decides that the lighthouse should be preserved mainly as a private family memorial.",
      "He finds the old tools by accident and leaves the villagers to solve the problem themselves."
    ],
    "answer": "A",
    "explain": "<p>Raka ingat ruangan terkunci yang pernah disebut kakeknya, mencari kuncinya, lalu menemukan lentera dan buku catatan berisi gambar kakeknya. Dari situ warga bisa membuat penerangan untuk perahu. Jadi Raka menghubungkan pengetahuan kakek yang terlupakan dengan solusi praktis untuk melindungi desa, yaitu pilihan <b>A</b>.</p>\n<p class=\"ev no\"><b>B.</b> Salah. Teks tidak menyebut keinginan menjadi penjaga resmi, dan Raka bekerja bersama warga.</p>\n<p class=\"ev no\"><b>C.</b> Salah. Teks menyatakan <i>“They could not restore the electric lamp”</i> (“Mereka tidak bisa memulihkan lampu listrik”).</p>\n<p class=\"ev no\"><b>D.</b> Salah. Pada akhirnya warga memutuskan merawat mercusuar bersama, bukan menjadikannya memorial pribadi keluarga.</p>\n<p class=\"ev no\"><b>E.</b> Salah. Raka mencari kunci dengan sengaja dan melibatkan warga, bukan menemukan alat secara kebetulan lalu membiarkan warga mengurusnya.</p>"
  },
  {
    "n": 12,
    "passage": "narrative",
    "text": "Which evaluation best explains how the ending develops the narrative’s central message?",
    "options": [
      "It shows that an old place can become valuable again when its history is preserved, adapted, and supported through collective action.",
      "It suggests that the lighthouse becomes useful mainly because Raka discovers a hidden object that completely replaces the need for modern technology.",
      "It presents the villagers’ success as depending on Raka alone, since the other villagers only follow his instructions without contributing.",
      "It implies that preserving the lighthouse matters chiefly because it allows Raka to continue his grandfather’s former occupation.",
      "It emphasizes that valuing local history and working together can transform a neglected place into a useful source of safety for the community."
    ],
    "answer": "E",
    "explain": "<p>Pesan utama cerita ada di kalimat penutup: <i>“an old place could become useful again when people valued its history and worked together”</i> (“sebuah tempat tua dapat menjadi berguna kembali ketika orang-orang menghargai sejarahnya dan bekerja bersama”). Akhir cerita mendukung ini: warga memutuskan merawat mercusuar bersama dan Raka menyimpan buku catatan dengan aman.</p>\n<p>Pilihan <b>E</b> paling dekat dengan kalimat itu: menghargai sejarah lokal dan bekerja sama dapat mengubah tempat yang terbengkalai menjadi sumber keselamatan bagi komunitas.</p>\n<p>Catatan: pilihan A juga sangat dekat dengan pesan cerita. E dipilih karena paling mirip dengan kalimat penutup teks. Mohon dicocokkan dengan kunci jawaban resmi.</p>\n<p class=\"ev no\"><b>B.</b> Salah. Lentera bukan satu-satunya faktor dan tidak “menggantikan sepenuhnya” teknologi modern; teks menekankan sejarah dan kerja sama.</p>\n<p class=\"ev no\"><b>C.</b> Salah. Warga lain berperan nyata: membersihkan lentera, mengganti kaca, dan bergiliran mengoperasikannya.</p>\n<p class=\"ev no\"><b>D.</b> Salah. Tidak ada keterangan bahwa tujuan utamanya adalah melanjutkan pekerjaan kakek Raka.</p>"
  },
  {
    "n": 13,
    "passage": "narrative",
    "text": "Which THREE details best explain how Raka and the villagers made the lighthouse useful again? Select all that apply.",
    "options": [
      "Raka found the key to the locked room in his grandfather’s workshop.",
      "The notebook provided instructions and drawings that helped them understand the lantern.",
      "The villagers restored the lighthouse’s broken electric lamp before the boats returned.",
      "They cleaned the hand-operated lantern, replaced its cracked glass, and placed it near the highest window.",
      "The village leader operated the lantern alone while the other villagers waited outside."
    ],
    "answer": "ABD",
    "explain": "<p>Soal meminta tiga detail yang menjelaskan <i>bagaimana</i> mercusuar menjadi berguna lagi.</p>\n<p class=\"ev ok\"><b>A.</b> Benar. Raka menemukan kunci di bengkel kakeknya, sehingga ruangan terkunci bisa dibuka.</p>\n<p class=\"ev ok\"><b>B.</b> Benar. Buku catatan menjelaskan cara kerja lentera lewat petunjuk dan gambar buatan kakeknya.</p>\n<p class=\"ev ok\"><b>D.</b> Benar. Mereka membersihkan lentera, mengganti kaca yang retak, dan menaruhnya dekat jendela tertinggi, sehingga lentera menghasilkan cahaya yang kuat.</p>\n<p class=\"ev no\"><b>C.</b> Salah. Lampu listrik tidak bisa dipulihkan; yang dipakai adalah lentera manual.</p>\n<p class=\"ev no\"><b>E.</b> Salah. Warga <i>took turns</i> (“bergiliran”) mengoperasikan lentera; bukan kepala desa sendirian.</p>"
  },
  {
    "n": 14,
    "passage": "narrative",
    "text": "What can be inferred about why Raka involved the villagers in restoring the lighthouse rather than trying to operate the lantern alone?",
    "options": [
      "He wanted to make the villagers responsible for repairing equipment that he could not understand.",
      "He believed the villagers would reward him if the lighthouse became useful again.",
      "He understood that the lighthouse could protect the community only through shared knowledge, effort, and continued cooperation.",
      "He hoped the villagers would discover a way to restore the electric lamp without using the notebook.",
      "He wanted to prove that his grandfather had been wrong about the lighthouse’s history."
    ],
    "answer": "C",
    "explain": "<p>Soal menanyakan alasan Raka melibatkan warga, bukan bekerja sendirian. Petunjuknya ada di akhir cerita: warga bergiliran mengoperasikan lentera sepanjang malam, lalu memutuskan merawat mercusuar bersama, dan Raka memahami bahwa tempat tua bisa berguna kembali ketika orang <i>worked together</i> (“bekerja bersama”). Jadi Raka sadar mercusuar hanya bisa melindungi komunitas lewat pengetahuan, tenaga, dan kerja sama yang berkelanjutan, yaitu pilihan <b>C</b>.</p>\n<p class=\"ev no\"><b>A.</b> Salah. Raka memahami lentera lewat buku catatan; ia tidak melempar tanggung jawab.</p>\n<p class=\"ev no\"><b>B.</b> Salah. Tidak ada tanda bahwa Raka mengharapkan imbalan.</p>\n<p class=\"ev no\"><b>D.</b> Salah. Buku catatan justru dipakai, dan lampu listrik tidak dipulihkan.</p>\n<p class=\"ev no\"><b>E.</b> Salah. Tidak ada bagian cerita yang menunjukkan kakek keliru; justru peralatan dan catatannya terbukti berguna.</p>"
  },
  {
    "n": 15,
    "passage": "narrative",
    "text": "Which evaluation best explains how the ending develops the narrative’s central message?",
    "options": [
      "It shows that an old place becomes valuable only when its original equipment is fully restored.",
      "It suggests that Raka succeeds mainly because his grandfather had already repaired the lighthouse before the storm.",
      "It presents the lantern as a temporary solution that prevents the villagers from preserving the lighthouse’s history.",
      "It implies that the villagers care for the lighthouse primarily because they expect it to attract visitors and benefit the village economy.",
      "It shows that respecting the past, combining practical action with cooperation, can give an abandoned place a meaningful new purpose."
    ],
    "answer": "E",
    "explain": "<p>Soal ini sama dengan nomor 12: kita mencari pesan utama dari akhir cerita. Akhir cerita menunjukkan bahwa menghargai masa lalu (buku catatan disimpan, mercusuar dirawat), bertindak praktis (memperbaiki lentera), dan bekerja sama membuat tempat terbengkalai punya tujuan baru. Itu sesuai pilihan <b>E</b>.</p>\n<p class=\"ev no\"><b>A.</b> Salah. Peralatan asli (lampu listrik) tidak dipulihkan, tetapi mercusuar tetap menjadi berguna.</p>\n<p class=\"ev no\"><b>B.</b> Salah. Kakek tidak memperbaiki mercusuar sebelum badai; lampunya masih rusak.</p>\n<p class=\"ev no\"><b>C.</b> Salah. Lentera tidak menghalangi pelestarian; justru lewat lentera dan buku catatan itu sejarah mercusuar dihargai.</p>\n<p class=\"ev no\"><b>D.</b> Salah. Teks tidak menyebut harapan menarik pengunjung atau keuntungan ekonomi.</p>\n<p><i>Soal nomor 16–20</i></p>"
  },
  {
    "n": 16,
    "passage": "procedure",
    "text": "Why should the soil be sprayed gently after the seeds are covered?",
    "options": [
      "To keep the container completely dry while the seeds are growing.",
      "To make the soil hard enough to prevent the roots from spreading.",
      "To prevent the seeds from being washed away or pushed too deeply into the soil.",
      "To protect the seedlings from receiving sunlight during their first week.",
      "To help the small stones remain at the bottom of the container."
    ],
    "answer": "C",
    "explain": "<p>Jawabannya ada langsung di paragraf ketiga: <i>“Avoid pouring water strongly because the seeds may be washed away or pushed too deeply into the soil.”</i> (“Hindari menuang air dengan kuat karena biji bisa hanyut atau terdorong terlalu dalam ke dalam tanah.”) Karena itu tanah disemprot dengan lembut, yaitu pilihan <b>C</b>.</p>\n<p class=\"ev no\"><b>A.</b> Salah. Permukaan tanah harus tetap lembap, bukan kering.</p>\n<p class=\"ev no\"><b>B.</b> Salah. Tanah justru tidak boleh ditekan terlalu keras supaya akar punya udara dan ruang tumbuh.</p>\n<p class=\"ev no\"><b>D.</b> Salah. Bibit tidak dilindungi dari cahaya; tanaman membutuhkan cahaya yang lembut.</p>\n<p class=\"ev no\"><b>E.</b> Salah. Batu kecil sudah diletakkan di dasar sebelum tanah dimasukkan, dan fungsinya membantu air keluar, bukan terkait dengan menyemprot.</p>"
  },
  {
    "n": 17,
    "passage": "procedure",
    "text": "Which conclusions about the procedure are supported by the instructions? Select all that apply.",
    "options": [
      "The container should be exposed to a brighter location gradually after the seedlings have several healthy leaves, rather than moved there permanently at once.",
      "The layer of small stones can replace open drainage holes because the stones alone remove excess water from the container.",
      "The labels help the grower identify each herb and monitor when its row was planted.",
      "Strongly pouring water over the soil is useful because it pushes the seeds deeper and helps them germinate faster.",
      "Removing weak seedlings that grow too close together can reduce crowding among the remaining plants."
    ],
    "answer": "ACE",
    "explain": "<p>Soal meminta kesimpulan yang didukung petunjuk. Periksa satu per satu.</p>\n<p class=\"ev ok\"><b>A.</b> Benar. <i>“place the container in a brighter location for short periods before leaving it there”</i> (“tempatkan wadah di lokasi yang lebih terang untuk waktu singkat sebelum membiarkannya di sana”): pemindahan dilakukan bertahap, bukan langsung permanen.</p>\n<p class=\"ev ok\"><b>C.</b> Benar. Label berisi nama herba dan tanggal tanam, sehingga penanam bisa mengenali tiap baris dan memantau waktu tanamnya.</p>\n<p class=\"ev ok\"><b>E.</b> Benar. <i>“Remove weak seedlings if they are growing too close together.”</i> (“Buang bibit lemah jika tumbuh terlalu berdekatan.”) Ini mengurangi kepadatan.</p>\n<p class=\"ev no\"><b>B.</b> Salah. Batu membantu air keluar, tetapi teks juga meminta memastikan lubang drainase terbuka (<i>“check that its drainage holes are open”</i>), jadi batu tidak menggantikan lubang.</p>\n<p class=\"ev no\"><b>D.</b> Salah. Teks justru melarang menuang air dengan kuat karena biji bisa terdorong terlalu dalam.</p>"
  },
  {
    "n": 18,
    "passage": "procedure",
    "text": "Which evaluation best explains why the procedure recommends moving the container to a brighter location for short periods before leaving it there?",
    "options": [
      "It allows the soil to dry completely before the herbs receive regular light.",
      "It gives the seeds more time to remain covered before they begin to grow.",
      "It prevents the herbs from receiving sunlight until all seedlings are removed.",
      "It helps the seedlings adjust gradually to stronger light, reducing stress as their growing conditions change.",
      "It makes the drainage stones absorb more water before the plants develop healthy leaves."
    ],
    "answer": "D",
    "explain": "<p>Teks menyuruh memindahkan wadah ke tempat lebih terang <i>for short periods before leaving it there</i> (“untuk waktu singkat sebelum membiarkannya di sana”) setelah bibit kuat dan punya beberapa daun sehat. Teks tidak menulis alasannya secara langsung, tetapi kesimpulan yang masuk akal adalah agar bibit beradaptasi bertahap dengan cahaya yang lebih kuat sehingga tidak stres. Itu sesuai pilihan <b>D</b>.</p>\n<p class=\"ev no\"><b>A.</b> Salah. Tidak ada tujuan mengeringkan tanah sepenuhnya; permukaan tanah malah harus dijaga tetap lembap.</p>\n<p class=\"ev no\"><b>B.</b> Salah. Pada tahap ini biji sudah menjadi bibit dengan daun, bukan lagi biji yang tertutup tanah.</p>\n<p class=\"ev no\"><b>C.</b> Salah. Pemindahan ini justru memberi bibit lebih banyak cahaya.</p>\n<p class=\"ev no\"><b>E.</b> Salah. Batu hanya berfungsi membantu air keluar; tidak ada hubungannya dengan penyerapan air atau pemindahan wadah.</p>"
  },
  {
    "n": 19,
    "passage": "procedure",
    "text": "Why are small stones placed at the bottom of the container before the potting soil is added?",
    "options": [
      "To help excess water leave the soil through the drainage holes.",
      "To keep the seeds from receiving too much gentle sunlight.",
      "To make the soil firm enough for the roots to grow without air.",
      "To prevent the herbs from needing water during their early growth.",
      "To provide enough space for the seedlings to grow closer together."
    ],
    "answer": "A",
    "explain": "<p>Jawabannya ada di paragraf kedua: <i>“The stones help excess water leave the soil.”</i> (“Batu-batu membantu air berlebih keluar dari tanah.”) Itu sesuai pilihan <b>A</b>.</p>\n<p class=\"ev no\"><b>B.</b> Salah. Batu tidak berhubungan dengan cahaya.</p>\n<p class=\"ev no\"><b>C.</b> Salah. Tanah tidak boleh terlalu padat karena akar butuh udara; batu tidak dipasang untuk memadatkan tanah.</p>\n<p class=\"ev no\"><b>D.</b> Salah. Bibit tetap perlu disemprot setiap pagi bila permukaan tanah kering.</p>\n<p class=\"ev no\"><b>E.</b> Salah. Jarak tanam ditentukan oleh petunjuk di bungkus biji, bukan oleh batu.</p>"
  },
  {
    "n": 20,
    "passage": "procedure",
    "text": "Which conclusions or actions are supported by the procedure? Select all that apply.",
    "options": [
      "Using the stones and spraying the soil gently serves both to manage excess water and to keep the seeds from being displaced.",
      "The container should be moved to a bright location immediately after planting so the seeds receive as much light as possible.",
      "Writing the herb name and planting date on each label helps the grower identify and monitor the planted rows.",
      "Turning the container every few days is intended to help the plants receive light more evenly.",
      "Removing weak seedlings that are growing too close together can reduce overcrowding among the remaining plants."
    ],
    "answer": "ACDE",
    "explain": "<p>Soal memakai kata <i>Select all that apply</i> (“Pilih semua yang sesuai”). Ada empat pilihan yang didukung teks.</p>\n<p class=\"ev ok\"><b>A.</b> Benar. Batu membantu air berlebih keluar dari tanah, dan menyemprot dengan lembut mencegah biji hanyut atau terdorong terlalu dalam.</p>\n<p class=\"ev ok\"><b>C.</b> Benar. Label diberi nama herba dan tanggal tanam supaya baris tanaman bisa dikenali dan dipantau.</p>\n<p class=\"ev ok\"><b>D.</b> Benar. Teks meminta wadah diputar setiap beberapa hari <i>so that the plants receive light evenly</i> (“agar tanaman menerima cahaya secara merata”).</p>\n<p class=\"ev ok\"><b>E.</b> Benar. Bibit lemah yang tumbuh terlalu dekat dibuang untuk mengurangi kepadatan.</p>\n<p class=\"ev no\"><b>B.</b> Salah. Wadah tidak dipindah ke tempat terang segera setelah tanam. Pemindahan dilakukan setelah bibit kuat dan memiliki beberapa daun sehat, serta secara bertahap.</p>\n<p><i>Soal nomor 21–25</i></p>"
  },
  {
    "n": 21,
    "passage": "exposition",
    "text": "Which judgment best evaluates the writer’s argument as an analytical exposition?",
    "options": [
      "It is weak because the trial does not measure long-term reading achievement, so the proposed program has no educational value.",
      "It is reasonably persuasive because it presents relevant trial evidence, recognizes limitations, and offers safeguards for implementation.",
      "It is conclusive because the increase in student comments proves that every student will become a stronger reader.",
      "It is mainly descriptive because the writer explains a discussion activity without stating a position or recommendation.",
      "It is emotional because the argument depends on quieter students’ feelings rather than on any observed classroom evidence."
    ],
    "answer": "B",
    "explain": "<p><i>Analytical exposition</i> adalah teks yang berargumen: penulis menyampaikan pendapat (tesis), memberi alasan dan bukti, lalu merekomendasikan sesuatu. Teks ini memenuhi semuanya. Tesisnya: sekolah sebaiknya menyediakan diskusi buku mingguan. Buktinya: uji coba lima minggu dengan 72 siswa (partisipasi naik dari 46% menjadi 69%). Keterbatasannya diakui: tidak mengukur prestasi membaca jangka panjang dan kelasnya sukarela. Ada pula saran pelaksanaan yang hati-hati. Karena itu argumennya cukup meyakinkan, yaitu pilihan <b>B</b>.</p>\n<p class=\"ev no\"><b>A.</b> Salah. Keterbatasan uji coba tidak berarti programnya tidak bernilai; penulis hanya meminta kehati-hatian.</p>\n<p class=\"ev no\"><b>C.</b> Salah. <i>“proves that every student will become a stronger reader”</i> (“membuktikan bahwa setiap siswa akan menjadi pembaca yang lebih kuat”) berlebihan; penulis sendiri menyatakan uji coba singkat tidak bisa membuktikan hal itu.</p>\n<p class=\"ev no\"><b>D.</b> Salah. Penulis jelas menyatakan posisi (<i>should provide</i>, “sebaiknya menyediakan”) dan memberi rekomendasi.</p>\n<p class=\"ev no\"><b>E.</b> Salah. Argumen bersandar pada data uji coba kelas (46% menjadi 69%), bukan pada perasaan.</p>"
  },
  {
    "n": 22,
    "passage": "exposition",
    "text": "According to the passage, what is the main recommendation for introducing the student-led book discussion program?",
    "options": [
      "Schools should start with one weekly session, provide preparation and guidance, and review the results before expanding the program.",
      "Schools should require daily discussions because frequent practice is the only way to improve reading achievement.",
      "Schools should allow students to lead every discussion without teacher involvement to encourage complete independence.",
      "Schools should postpone the program until a long-term study proves that it improves examination performance.",
      "Schools should select only confident speakers because quieter students may slow down the discussion."
    ],
    "answer": "A",
    "explain": "<p>Rekomendasi ada di paragraf terakhir: sekolah sebaiknya memulai dengan satu sesi tiap minggu (<i>one session each week</i>), memberi pertanyaan pemandu dan waktu mencatat, lalu meninjau partisipasi setelah satu term dan membandingkannya dengan kegiatan membaca lain. Pilihan <b>A</b> merangkum semua itu.</p>\n<p class=\"ev no\"><b>B.</b> Salah. Teks tidak menyarankan diskusi harian.</p>\n<p class=\"ev no\"><b>C.</b> Salah. Guru tetap memandu sesi; yang ditekankan hanyalah guru tidak mendominasi setiap percakapan.</p>\n<p class=\"ev no\"><b>D.</b> Salah. Teks tidak menunda program sampai ada penelitian jangka panjang; sekolah disarankan mulai dengan hati-hati.</p>\n<p class=\"ev no\"><b>E.</b> Salah. Penulis justru ingin siswa pendiam dibantu dan peran digilir supaya satu siswa yang percaya diri tidak menguasai percakapan.</p>"
  },
  {
    "n": 23,
    "passage": "exposition",
    "text": "Which inference best explains why the writer recommends giving students preparation time and varying group roles in the discussion program?",
    "options": [
      "The writer believes students should speak without using evidence from the assigned texts.",
      "The writer expects the program to replace regular reading lessons and teacher instruction.",
      "The writer assumes that confident students are generally less prepared than quieter students.",
      "The writer wants teachers to measure long-term examination achievement before allowing discussion.",
      "The writer recognizes that participation may be unequal, so structure and preparation can help more students contribute meaningfully."
    ],
    "answer": "E",
    "explain": "<p>Soal menanyakan alasan penulis. Teks menyebut siswa pendiam butuh waktu persiapan sebelum berbicara, dan peran kelompok perlu digilir <i>so that one confident student does not control the conversation</i> (“agar satu siswa yang percaya diri tidak menguasai percakapan”). Artinya penulis sadar partisipasi bisa tidak merata, sehingga struktur dan persiapan membantu lebih banyak siswa berkontribusi, yaitu pilihan <b>E</b>.</p>\n<p class=\"ev no\"><b>A.</b> Salah. Teks justru menyebut siswa mulai merujuk pada detail dari teks.</p>\n<p class=\"ev no\"><b>B.</b> Salah. Program berlangsung setelah satu pelajaran biasa, bukan menggantikannya.</p>\n<p class=\"ev no\"><b>C.</b> Salah. Penulis tidak berasumsi bahwa siswa yang percaya diri kurang siap.</p>\n<p class=\"ev no\"><b>D.</b> Salah. Penulis tidak meminta pengukuran prestasi jangka panjang sebelum diskusi dimulai; ia mengakuinya sebagai keterbatasan uji coba.</p>"
  },
  {
    "n": 24,
    "passage": "exposition",
    "text": "Which evaluations best assess the strength and limitations of the writer’s argument? Select all that apply.",
    "options": [
      "The trial provides some empirical support because participation increased, although the evidence comes from a short period and only three volunteer classes.",
      "The argument is conclusive because the increase in relevant comments proves that the program will improve every student’s long-term reading achievement.",
      "The recommendation is appropriately qualified because it combines promising evidence with a limited trial, a review period, and possible adjustments.",
      "The proposed guiding questions, preparation time, and rotating roles address practical weaknesses that could otherwise limit the discussion’s benefits.",
      "The argument is unreliable because the passage does not report the exact number of comments made by each student during the trial."
    ],
    "answer": "ACD",
    "explain": "<p>Soal meminta penilaian atas kekuatan dan keterbatasan argumen. Periksa tiap pilihan.</p>\n<p class=\"ev ok\"><b>A.</b> Benar. Partisipasi naik (46% menjadi 69%), tetapi buktinya hanya dari periode singkat dan tiga kelas sukarela.</p>\n<p class=\"ev ok\"><b>C.</b> Benar. Rekomendasinya berhati-hati: memadukan bukti yang menjanjikan dengan pengakuan bahwa uji cobanya terbatas, tinjauan setelah satu term, dan kemungkinan penyesuaian.</p>\n<p class=\"ev ok\"><b>D.</b> Benar. Pertanyaan pemandu, waktu persiapan, dan peran bergilir menjawab kelemahan praktis yang bisa mengurangi manfaat diskusi.</p>\n<p class=\"ev no\"><b>B.</b> Salah. “Membuktikan” prestasi jangka panjang untuk semua siswa berlebihan; uji coba tidak mengukurnya.</p>\n<p class=\"ev no\"><b>E.</b> Salah. Ukuran yang dipakai adalah proporsi siswa yang memberi komentar relevan (46% dan 69%), jadi tidak adanya jumlah komentar per siswa tidak membuat argumen otomatis tidak andal.</p>"
  },
  {
    "n": 25,
    "passage": "exposition",
    "text": "Which statement best summarizes the writer’s recommendation about the weekly student-led book discussion?",
    "options": [
      "Schools should require the discussion immediately because the five-week trial proves that it improves every student’s reading achievement.",
      "Schools should introduce the discussion cautiously, support students with guidance and preparation, and review its effects before expanding it.",
      "Schools should reject the discussion because quieter students may need more preparation time before speaking.",
      "Schools should replace regular reading lessons with small-group discussions led entirely by students.",
      "Schools should continue the discussion without evaluation because the increase in relevant comments provides sufficient evidence."
    ],
    "answer": "B",
    "explain": "<p>Ringkasan yang baik mencakup inti rekomendasi: perkenalkan program dengan hati-hati, beri dukungan (pertanyaan pemandu, waktu mencatat, peran bergilir), dan tinjau hasilnya sebelum memperluas. Itu pilihan <b>B</b>.</p>\n<p class=\"ev no\"><b>A.</b> Salah. Teks tidak menyuruh mewajibkan program segera, dan uji coba tidak “membuktikan” perbaikan bagi semua siswa.</p>\n<p class=\"ev no\"><b>C.</b> Salah. Penulis tidak menolak program; siswa pendiam hanya perlu dibantu dengan waktu persiapan.</p>\n<p class=\"ev no\"><b>D.</b> Salah. Diskusi dilakukan setelah satu pelajaran biasa dan guru tetap memandu.</p>\n<p class=\"ev no\"><b>E.</b> Salah. Teks meminta peninjauan setelah satu term; tidak ada saran melanjutkan tanpa evaluasi.</p>"
  }
];
