# Quiz Matematika Dasar (25 soal)

Website quiz untuk siswa dan guru dengan menu pilihan quiz (Matematika Dasar, Bahasa Inggris, Matematika TKA, TKA Matematika 2, Bahasa Indonesia Lanjutan, Bahasa Indonesia Wajib, SNBT Kuantitatif, Penalaran Umum, TKA Matematika 3, TKA Matematika 4, Pemahaman Bacaan dan Menulis, Pemahaman Bacaan dan Menulis 2). Berjalan sebagai satu Cloudflare Worker: halaman web dari Static Assets (folder `public/`), API di `/api/*`, data di D1.

## Fitur

**Siswa**
- Login dengan nama bebas. Login lagi dengan nama yang sama melanjutkan ke soal berikutnya.
- Mode next terus: begitu pilihan diklik, langsung terlihat benar atau salah, lalu klik Lanjut.
- Pembahasan tidak ditampilkan ke siswa, kecuali di quiz **Bahasa Indonesia Lanjutan**, **SNBT Kuantitatif**, **TKA Matematika 2**, **TKA Matematika 3**, **TKA Matematika 4**, **Penalaran Umum**, **Pemahaman Bacaan dan Menulis**, **Pemahaman Bacaan dan Menulis 2**, **Pengetahuan dan Pemahaman Umum**, **Pengetahuan dan Pemahaman Umum 2**, **TKA Matematika 7**, **TKA Matematika 8**, dan **Literasi Bahasa Inggris**: di quiz itu pembahasan muncul tepat setelah siswa menjawab setiap soal (lihat bagian quiz `ind`, `snbt`, `tka2`, `tka3`, `tka4`, `pu`, `pbm`, `pbm2`, `ppu`, `ppu2`, `tka7`, `tka8`, dan `litinggris` di bawah).
- Setelah selesai, di quiz yang punya pembahasan siswa, nomor soal di halaman hasil bisa diketuk untuk meninjau lagi soal, jawabannya, dan pembahasannya.

**Guru** (login dengan nama `Ferdi`)
- Melihat soal, kunci, dan pembahasan setiap nomor.
- **Mulai Baru**: membuka sesi baru, laman siswa aktif, semua siswa mulai dari soal 1.
- **Pause / Lanjutkan**: laman siswa berhenti sementara, jawaban yang sudah ada tetap aman.
- **Matikan**: siswa belum bisa mengerjakan. Tombol Lanjutkan membuka kembali sesi yang sama tanpa menghapus jawaban.
- Tab Peserta: daftar siswa, jumlah terjawab, dan jumlah benar.

## Deploy (GitHub + Cloudflare Workers)

1. **GitHub**: buat repository baru, lalu upload seluruh isi folder ini (bukan file zip-nya). File `wrangler.jsonc` harus ada di paling atas repository, sejajar dengan `package.json`.
2. **Cloudflare**: Workers & Pages, Create application, Import a repository, pilih repository tadi.
   - Build command: kosongkan
   - Deploy command: `npx wrangler deploy` (bawaan)
   - Nama project harus sama dengan `name` di `wrangler.jsonc` (`quiz-matematika-dasar`). Jika berbeda, ubah salah satunya agar sama.
3. **Database**: tidak perlu dibuat manual. Binding `DB` ada di `wrangler.jsonc`, dan database `quiz-db` dibuat otomatis saat deploy pertama. Tabel dibuat otomatis saat pertama dipakai.
   - Jika kamu sudah punya database D1 sendiri, tambahkan `"database_id": "<id-nya>"` di bagian `d1_databases` pada `wrangler.jsonc`.
4. Buka `https://quiz-matematika-dasar.<akun-kamu>.workers.dev`.

Bagikan alamat itu ke siswa. Guru masuk dengan nama `Ferdi`, memilih quiz di menu, lalu klik **Mulai**.

### PIN guru (opsional)
Secara bawaan siapa pun yang mengetik nama `Ferdi` menjadi guru. Untuk mengunci:
Settings, Variables and secrets, tambahkan `TEACHER_PIN` (tipe Secret), lalu deploy ulang. Guru akan diminta PIN saat login.

## Quiz dan sesi

- Setelah login, siswa dan guru memilih quiz di menu. Setiap quiz punya sesi sendiri: guru bisa memulai, menjeda, atau mematikan satu quiz tanpa mengganggu yang lain.
- Daftar quiz ada di `functions/_lib/quizzes.js`. Untuk menambah quiz baru: buat file bank soal (lihat `questions.js` atau `questions-inggris.js` sebagai contoh), impor di `quizzes.js`, lalu tambahkan satu entri dengan id singkat yang belum dipakai. Jangan mengubah id quiz yang sudah dipakai siswa.
- Soal bisa punya 2 sampai 5 pilihan (A sampai E). Soal dengan lebih dari satu jawaban benar ditulis dengan `answer: "ACE"` dan otomatis tampil sebagai pilihan ganda kompleks. Nilainya benar hanya jika himpunan jawaban sama persis dengan kunci.
- Teks bacaan bersama (Bahasa Inggris dan Bahasa Indonesia Lanjutan) disimpan sekali di `PASSAGES` dan dirujuk lewat `passage` pada tiap soal. Gambar boleh dipasang di dalam teks bacaan lewat `<img src="img/...">`.
- Gambar di `explainImage` hanya tampil di mode guru. Gambar di `image` tampil juga untuk siswa.
- Data sesi, siswa, dan jawaban disimpan di tabel `quiz_session`, `quiz_students`, dan `quiz_answers` (dibuat otomatis). Tabel lama `session`, `students`, `answers` dari versi satu-quiz tidak dipakai lagi.

### Kunci Matematika TKA yang sudah dikoreksi
Kunci platform untuk soal **3, 8, 10, 11, 12, 13, dan 30** tidak sesuai dengan data soalnya (kemungkinan salah ketik). Di `questions-tka-mat.js`, opsi berkunci pada ketujuh soal itu sudah diganti dengan jawaban hasil hitung, dan angka desimal dibulatkan bila opsi lain berupa bilangan bulat (soal 3: 48 meter). Huruf kuncinya tidak berubah. Catatan kunci lama dan penggantinya tampil di mode guru pada tiap soal.

- **Soal 11:** tanda operasi antara 125^(2/3) dan 32^(2/5) hilang di platform, jadi dipakai tanda **+** (jawaban 30,125). Cocokkan dengan soal aslinya. Bila tandanya lain, ubah opsi berkunci dan teks soal (tanda − memberi 22,125; × memberi 101,125; ÷ memberi 7,375).
- **Soal 2:** opsi pengecoh yang semula berupa tanggal/tahun sudah diseragamkan ke format jam (20.01.12, 20.04.48, 20.06.00). Redaksi "ketiga kalinya" tetap ambigu, lihat catatan guru.
- **Soal 6, 9, dan 29:** kunci sudah benar, tetapi redaksi atau opsinya perlu diluruskan saat mengajar.

### Quiz Bahasa Indonesia Lanjutan (id `ind`)
File: `functions/_lib/questions-indonesia.js`. Dibuat dari dokumen "Soal Bahasa Indonesia Lanjutan, Soal dan Pembahasan Edisi Pengajar No1-30": 6 teks bacaan (masing-masing untuk 5 soal), 30 soal, pilihan A sampai E.

- Sembilan soal berjawaban ganda (No. 3, 6, 10, 13, 17, 20, 24, 27, 30) dan tampil sebagai pilihan ganda kompleks.
- **Kunci disusun dari analisis isi teks**, karena dokumen sumber tidak menyertakan kunci resmi. Cocokkan dengan kunci resmi sebelum dipakai untuk penilaian. Catatan ini juga tampil di pembahasan soal 1 (mode guru).
- **Soal 13, 17, dan 20:** di dokumen teks soalnya memakai "paling tepat", tetapi opsi A, C, dan E sama-sama sesuai teks. Pada kuis ini ditambahkan kalimat "Pilih semua jawaban yang tepat." Bila sumber aslinya hanya menerima satu jawaban, ubah `answer` dan hapus kalimat itu.
- Pembahasan (mode guru) memuat: kunci, maksud soal, kata kunci, langkah menjawab, bukti di teks, bedah tiap pilihan, tips, dan catatan guru. Panduan tiap teks (jenis teks, peta teks, kamus mini) ada di soal pertama setiap teks (No. 1, 6, 11, 16, 21, 26) dalam bagian yang bisa dibuka.
- Gambar: `public/img/bi-diagram-gudang.png` (di teks 6-10, tampil juga untuk siswa) dan `public/img/bi-penurunan-indikator.png` (hanya mode guru, soal 6).
- **Pembahasan untuk siswa** ada di `functions/_lib/pembahasan-indonesia.js`, dibuat dari dokumen "Soal Bahasa Indonesia Lanjutan, Soal dan Pembahasan Edisi Siswa No1-30". Isinya: kata kunci, langkah menjawab, bukti di teks, bedah tiap pilihan jawaban (dengan jenis jebakan), dan jurus. Inti teks tiap bagian dipasang di soal terakhir bagian itu (5, 10, 15, 20, 25, 30) supaya tidak membocorkan soal berikutnya.
  - Server hanya mengirim pembahasan soal N setelah siswa itu menjawab soal N, jadi pembahasan soal yang belum dijawab tidak ikut terkirim. Pembahasan guru (login `Ferdi`) tetap dari `questions-indonesia.js` dan tidak berubah; akun `Ferdi` tidak memakai jalur siswa.
  - Kunci di dokumen siswa sudah dicocokkan dengan `answer` di `questions-indonesia.js`: 30 dari 30 sama, dan opsi A sampai E identik dengan di dokumen.
  - Catatan di pembahasan soal 13, 17, dan 20 disesuaikan dengan redaksi soal di website (yang sudah memuat "Pilih semua jawaban yang tepat.").
  - Bagian "Bekal singkat", kamus kata perintah, dan kotak "Coretanku" di dokumen Word tidak ikut dipasang di website.
  - Untuk quiz lain: kirim bank pembahasan sebagai parameter terakhir `make(...)` di `quizzes.js` (peta nomor soal ke HTML). Quiz tanpa parameter itu tetap tanpa pembahasan siswa.

### Quiz Bahasa Indonesia Wajib (id `indw`)
File: `functions/_lib/questions-indonesia-wajib.js`. Dibuat dari dokumen "Soal Bahasa Indonesia No1-30" (soal, kunci, dan pembahasan): 17 teks bacaan, 30 soal, pilihan A sampai E.

- **Tanpa pembahasan untuk siswa.** Di `quizzes.js` quiz ini tidak diberi parameter `studentExplain`, jadi siswa hanya melihat benar atau salah setelah menjawab. Pembahasan dari dokumen tetap ada di field `explain` dan hanya tampil di mode guru (login `Ferdi`). Untuk menampilkan pembahasan ke siswa nanti, buat bank pembahasan seperti `pembahasan-indonesia.js` lalu kirim sebagai parameter terakhir `make(...)`.
- **Empat soal berjawaban ganda (No. 7, 14, 21, 26).** Di dokumen keempatnya berupa tabel Ya/Tidak. Di website diubah menjadi pilihan ganda kompleks: siswa memilih semua pernyataan yang sesuai bacaan (soal 7: semua pernyataan yang salah), dan yang tidak dipilih dianggap "Tidak". Benar hanya jika kelima pernyataan tepat.
- **Soal 22:** kunci mengikuti dokumen (A). Dokumen mencatat kunci sumber awal tertulis E, tetapi pilihan E ada di bacaan sehingga tidak cocok dengan kata "kecuali". Catatan ini tampil di mode guru.
- **Soal 13:** opsi C di dokumen tertulis "Mehilangkan", diperbaiki menjadi "Menghilangkan".
- **Soal 30:** soal menyebut "paragraf pertama", padahal kata *meteorologi* ada di paragraf kedua. Dibiarkan sesuai dokumen; jawaban tetap D.
- Soal 14 memakai teks yang sama dengan soal 12 dan 13, dan soal 27 memakai teks yang sama dengan soal 28, jadi tiap pasangan berbagi satu teks bacaan. Judul teks tanpa judul di dokumen (soal 1, 8, 9, 19, 20) ditulis sendiri sebagai label singkat.
- Tidak ada gambar di quiz ini.

### Quiz SNBT Kuantitatif (id `snbt`)
File: `functions/_lib/questions-snbt.js` (soal dan pembahasan pengajar) dan `functions/_lib/pembahasan-snbt.js` (pembahasan siswa). Dibuat dari dua dokumen Word yang soalnya sama: "Pembahasan SNBT Kuantitatif No1-20" (untuk pengajar) dan "Soal SNBT Kuantitatif Naufal No1-20 Ilustrasi" (soal dan pembahasan untuk siswa). 20 soal Pengetahuan Kuantitatif (Tryout SNBT Naufal Academy #5), pilihan A sampai E.

- **Dua pembahasan berbeda.** Pembahasan pengajar (langkah lengkap, "Ingat dulu", "Catatan untuk pengajar") ada di field `explain` tiap soal dan hanya tampil di mode guru (login `Ferdi`). Pembahasan siswa (ide utama, ilustrasi, langkah, "Hati-hati") ada di `pembahasan-snbt.js` dan tampil ke siswa setelah soal itu dijawab.
- **Gambar.** Gambar soal 1 sampai 5: `public/img/snbt-q01.png` sampai `snbt-q05.png`. Ilustrasi pembahasan siswa (satu per soal): `snbt-s01.png` sampai `snbt-s20.png`.
- **Rumus dan tabel.** Soal boleh punya field opsional `html` (teks soal berisi rumus, matriks, atau tabel) dan `optionsHtml` (pilihan berisi pecahan atau akar). Rumus dirender KaTeX saat bank soal dibuat, jadi browser tidak memproses rumus dan tidak perlu internet. Gaya dan font rumus ada di `public/katex/` (CSS + 20 font woff2). `app.js` memakai `html` dan `optionsHtml` bila ada; quiz lain tetap memakai teks biasa. Field `text` dan `options` tetap berisi versi teks biasa sebagai cadangan.
- **Soal 1 diubah dari isian menjadi pilihan ganda.** Di dokumen soal 1 berupa isian angka (jawaban 11), padahal website hanya mendukung pilihan ganda. Pilihan dibuat: −11, 11, 12, 13, 20 (kunci B). Pengecoh diambil dari kesalahan yang disebut di pembahasan: urutan pengurangan terbalik, hasil kali keempat angka, kedua hasil kali dijumlahkan, dan luas persegi panjang pembungkus. Frasa "(tuliskan angkanya saja)" dihapus. Catatan ini juga tampil di mode guru.
- **Teks soal** mengikuti dokumen siswa. Dibanding dokumen pengajar, bedanya hanya kata seperti "di atas" dan "berikut" serta tanda baca; angka, gambar, pilihan, dan kunci identik. Kunci kedua dokumen sama, dan ke-20 jawaban sudah dihitung ulang secara mandiri.

### Quiz TKA Matematika 2 (id `tka2`)
File: `functions/_lib/questions-tka-mat2.js` (soal dan pembahasan pengajar) dan `functions/_lib/pembahasan-tka-mat2.js` (pembahasan siswa). Dibuat dari dua PDF yang soalnya sama: "Pembahasan Visual - Soal Latihan TKA Matematika Kelas IX SMP/MTs" (untuk pengajar) dan "Versi Siswa" (untuk siswa). 30 soal pilihan ganda A sampai D: bilangan, perbandingan dan persamaan, aljabar dan fungsi, pola bilangan, geometri, bangun ruang, transformasi, statistika, dan peluang.

- **Dua pembahasan berbeda.** Pembahasan pengajar (langkah penyelesaian lengkap, trik, awas jebakan, dan pertanyaan pancingan untuk siswa) ada di field `explain` tiap soal dan hanya tampil di mode guru (login `Ferdi`). Pembahasan siswa (langkah singkat, satu kotak trik atau awas, dan ilustrasi) ada di `pembahasan-tka-mat2.js` dan tampil ke siswa tepat setelah soal itu dijawab, sama seperti quiz `ind` dan `snbt`. Server hanya mengirim pembahasan soal N setelah siswa itu menjawab soal N.
- **Gambar.** Ilustrasi pengajar: `public/img/tka2-t01.png` sampai `tka2-t30.png` (dipasang lewat `explainImage`, hanya mode guru). Ilustrasi siswa: `public/img/tka2-s01.png` sampai `tka2-s30.png` (ada di dalam pembahasan siswa). Gambar dipotong dari kotak ilustrasi di kedua PDF. Gambar memuat jawaban, jadi tidak dipakai sebagai gambar soal.
- **Kunci.** Kunci mengikuti tabel rekap di PDF dan sudah dihitung ulang satu per satu: 30 dari 30 cocok. Tanda plus, minus, dan perkalian pada soal 11, 12, 15, 16, 21 sampai 24 diperiksa dari tampilan halaman PDF, karena teks yang bisa disalin dari PDF kehilangan sebagian simbol itu.
- **Soal 24 (pertanyaan pancingan):** di PDF tertulis bayangan "di seberang J" untuk faktor skala 2. Kalimat itu diperjelas menjadi "di luar J pada garis yang sama dari P, 2x lebih jauh dari P" (J' = (14, -22)).
- Quiz **Matematika TKA** (id `tka`) yang lama tidak diubah. Kedua quiz punya sesi, siswa, dan jawaban sendiri.

### Quiz TKA Matematika 3 (id `tka3`)
File: `functions/_lib/questions-tka-mat3.js`. Dibuat dari dokumen "Soal_dan_Pembahasan_Matematika_No1-30.docx" (soal, pilihan, kunci, pembahasan, dan rekap kunci). 30 soal pilihan ganda A sampai D: bilangan berpangkat, bentuk akar, persamaan linear, fungsi, barisan, geometri, transformasi, statistika, dan soal cerita.

- **Pembahasan guru dan siswa sama.** Isi pembahasan ada di field `explain` tiap soal. Mode guru (login `Ferdi`) menampilkannya langsung, dan siswa menerima isi yang sama tepat setelah menjawab soal itu lewat `EXPLAIN_SISWA`, yang dibuat otomatis dari field `explain` di file yang sama. Cukup mengedit satu tempat untuk mengubah keduanya.
- **Rumus.** Di dokumen rumus berupa gambar, jadi diketik ulang dan dirender KaTeX saat bank soal dibuat (soal 1 sampai 5 dan pembahasannya, memakai `html` dan `optionsHtml`). Field `text` dan `options` tetap berisi versi teks biasa.
- **Gambar.** Semua gambar berasal dari dokumen dan dipasang di dalam field `html` (`<img class="qimg">`) agar urutannya sama dengan dokumen. Gambar soal: `public/img/tka3-q06.png`, `q08`, `q17`, `q18`, `q20`, `q22`, `q24`, `q25`, `q27`, `q29`, `q30`. Gambar pembahasan (ikut tampil ke siswa): `tka3-p06.png`, `p07`, `p19`, `p20`, `p21`, `p22`. Ikon piktogram soal 13: `tka3-ikon.png` dan `tka3-ikon-setengah.png`.
- **Pilihan ganda kompleks (pilih semua yang benar).** Soal 10 (kunci C, D), 17 (kunci A, B), 28 (kunci A, B), dan 30 (kunci A, B, D). Soal 10 dan 17 di dokumen berbentuk pernyataan (soal 17 berupa tabel Benar/Salah), pernyataannya dijadikan pilihan A sampai D (soal 10) atau A sampai C (soal 17). Benar hanya jika pilihan sama persis dengan kunci.
- **Koreksi kecil.** Pembahasan soal 20 di dokumen menulis 15² = 255, dibetulkan menjadi 225 (hasil tetap 289 dan AB = 17). Catatan editor di dokumen (soal 20, 25, 28, 30) tidak dimasukkan ke pembahasan karena sudah teratasi. Label "(PG)" dan "(PGK)" pada soal 27 sampai 29 tidak dipakai.
- **Kunci.** Mengikuti tabel rekap di dokumen dan dihitung ulang satu per satu: 30 dari 30 cocok.

### Quiz TKA Matematika 4 (id `tka4`)
File: `functions/_lib/questions-tka-mat4.js`. Dibuat dari PDF "Latihan Soal TKA Matematika Kelas IX SMP/MTs" (`TKA_16_Halaman_1-4.pdf`, halaman 1 sampai 4). 20 soal pilihan ganda A sampai D, semuanya berjawaban tunggal: pola bilangan, fungsi linear, statistika, peluang, diagram Venn, geometri, transformasi, skala, dan aljabar.

- **Pembahasan guru dan siswa sama.** Isi pembahasan ada di field `explain` tiap soal. Mode guru (login `Ferdi`) menampilkannya langsung, dan siswa menerima isi yang sama tepat setelah menjawab soal itu lewat `EXPLAIN_SISWA`, yang dibuat otomatis dari field `explain` di file yang sama (pola yang sama dengan `tka3` dan `pu`). Cukup mengedit satu tempat untuk mengubah keduanya.
- **Kunci dan pembahasan dibuat baru.** PDF hanya berisi soal, tanpa kunci dan tanpa pembahasan. Kunci: C B C C C B B C B B C B C C B B C D C C (soal 1 sampai 20). Semuanya sudah dihitung ulang satu per satu, dan diperiksa lagi dengan skrip: 20 dari 20 cocok.
- **Tabel.** Tabel pada soal 1, 2, 3, 8, 9, 10, 15, dan 19 ditulis ulang sebagai tabel HTML (field `html`, kelas `qtable`). Field `text` tetap berisi versi teks biasa.
- **Pecahan.** Pecahan pada soal 4 dan pilihan soal 11 digambar bertumpuk lewat field `html` dan `optionsHtml` (tanpa KaTeX).
- **Gambar.** Digambar ulang dari PDF: `public/img/tka4-q05.png` (bangun L pada bidang koordinat, soal 5) dan `public/img/tka4-q14.png` (segitiga siku-siku, soal 14). Gambar pembahasan soal 5: `public/img/tka4-p05.png` (bangun L dipecah menjadi dua persegi panjang), ikut tampil ke siswa.
- **Soal 2.** Di PDF tertulis "Grafik berikut", padahal datanya berupa tabel, jadi di website ditulis "Tabel berikut".

### Quiz Penalaran Umum (id `pu`)
File: `functions/_lib/questions-penalaran-umum.js`. Dibuat dari dokumen "Soal_TPS_Penalaran_Umum_Gabungan_No1-30.docx" (soal, kunci, dan pembahasan). 30 soal TPS Penalaran Umum, pilihan A sampai E: penarikan simpulan (modus ponens, modus tollens, silogisme, pernyataan berkuantor), logika analitik, penalaran kuantitatif, dan pola bilangan.

- **Pembahasan guru dan siswa sama.** Isi pembahasan ada di field `explain` tiap soal. Mode guru (login `Ferdi`) menampilkannya langsung, dan siswa menerima isi yang sama tepat setelah menjawab soal itu lewat `EXPLAIN_SISWA`, yang dibuat otomatis dari field `explain` di file yang sama. Jadi cukup mengedit satu tempat untuk mengubah keduanya. Server hanya mengirim pembahasan soal N setelah siswa itu menjawab soal N.
- **Gambar.** Soal 22 (grafik batang produksi gula): `public/img/pu-q22.png`. Soal 23 (grafik berat badan bayi): `public/img/pu-q23.png`. Soal 21 memakai tabel lewat field `html`.
- **Soal 3 diubah dari tabel Benar/Salah menjadi pilihan ganda kompleks.** Siswa memilih semua pernyataan yang benar (kunci B, C, D). Benar hanya jika pilihan sama persis dengan kunci. Soal 18 juga berjawaban ganda (kunci A, B, D = H, M, I).
- **Soal 23 dan 28 diubah dari isian angka menjadi pilihan ganda.** Di dokumen jawabannya 10 dan 3, padahal website hanya mendukung pilihan ganda. Pilihan soal 23: 9; 9,4; 9,6; 10; 10,6 (kunci D). Pilihan soal 28: 0 sampai 4 (kunci D). Pengecoh soal 23 berasal dari kesalahan hitung yang umum dan dijelaskan di pembahasan. Frasa "Jawaban hanya dalam bentuk angka" dihapus.
- **Soal 18:** teks menyebut "delapan mahasiswa" tetapi hanya tujuh nama tertulis (F, G, H, I, K, L, M). Dibiarkan sesuai dokumen, jawaban tidak terpengaruh. Rantai nilai "H > I > M" di pembahasan dokumen diperbaiki karena I dan M tidak dibandingkan di soal; hasil akhir tetap H, I, dan M.
- **Soal 7:** awal penjelasan opsi C terpotong di dokumen; kalimatnya dilengkapi dari kalimat lanjutannya.
- **Soal 9 dan 29:** label dan kalimat penutup pembahasan yang keliru di dokumen dibetulkan (soal 9: penjelasan produktivitas milik opsi C; soal 29: penutup B sesuai kunci).
- **Soal 30:** salah ketik "Rp13.500.00,00" pada soal di aplikasi dibaca sebagai Rp13.500.000,00.
- **Kunci.** Dihitung ulang satu per satu: 30 dari 30 sama dengan dokumen.

### Quiz Pemahaman Bacaan dan Menulis (id `pbm`)
File: `functions/_lib/questions-pbm.js`. Dibuat dari dokumen "Soal_dan_Pembahasan_TPS_Pemahaman_Bacaan_Menulis_No1-20.docx" (soal, kunci, dan pembahasan). 20 soal TPS Pemahaman Bacaan dan Menulis, pilihan A sampai E, semuanya berjawaban tunggal, berbasis 4 teks bacaan (masing-masing untuk 5 soal): topi baseball (1-5), sahabat dan depresi (6-10), klakson "telolet" (11-15), binatang dan hewan (16-20).

- **Pembahasan guru dan siswa sama.** Isi pembahasan ada di field `explain` tiap soal. Mode guru (login `Ferdi`) menampilkannya langsung, dan siswa menerima isi yang sama tepat setelah menjawab soal itu lewat `EXPLAIN_SISWA`, yang dibuat otomatis dari field `explain` di file yang sama (pola yang sama dengan `pu` dan `pbm2`). Cukup mengedit satu tempat untuk mengubah keduanya.
- **Teks bacaan.** Ada di `PASSAGES` (kunci `topi`, `sahabat`, `telolet`, `hewan`). Tiap paragraf diberi label P1 dan P2 karena beberapa soal menyebut "paragraf kedua". Kata bercetak tebal pada teks klakson "telolet" dipertahankan karena dipakai soal 12. Sumber kutipan teks 2 (Halodoc) ikut ditampilkan.
- **Soal 12 dan 18 diubah dari isian angka menjadi pilihan ganda.** Di dokumen jawabannya 1 dan 2, padahal website hanya mendukung pilihan ganda. Soal 12: pilihan (1), (2), (4), (5), (6) yaitu lima kalimat yang memuat kata bercetak tebal (kunci A, kalimat 1). Soal 18: pilihan (1), (2), (4), (6), (10) (kunci B, kalimat 2). Label jawaban dan kalimat penutup pembahasan kedua soal disesuaikan menjadi huruf; isi pembahasan tidak diubah.
- **Soal 5, pilihan D.** Di dokumen kalimatnya terpotong ("... aksesori para ..." dengan catatan "lanjutan opsi D tidak tampak pada foto"). Dilengkapi menjadi "... aksesori para pemain dan fan baseball." Pilihan D salah menurut pembahasan, jadi kunci tidak terpengaruh. Cocokkan dengan soal aslinya bila ada.
- **Huruf miring dan tebal.** Dipertahankan lewat field `html` dan `optionsHtml`. Field `text` dan `options` tetap berisi versi teks biasa.
- **Kunci.** E D E D C D A E E B C A E C D D E B A A (soal 1 sampai 20), sama dengan tabel "Kunci Jawaban" di akhir dokumen dan "Jawaban yang benar" di tiap pembahasan.

### Quiz Pemahaman Bacaan dan Menulis 2 (id `pbm2`)
File: `functions/_lib/questions-pbm2.js`. Dibuat dari dokumen "Soal_Pemahaman_Bacaan_Menulis_No1-20.docx" (soal, kunci, dan pembahasan; Tryout SNBT Naufal Academy #5). 20 soal TPS Pemahaman Bacaan dan Menulis, pilihan A sampai E, semuanya berjawaban tunggal: keparalelan kalimat, urutan dan pemisahan paragraf, kata majemuk berimbuhan, ejaan dan tanda baca (EYD Edisi V), serta kalimat baku.

- **Pembahasan guru dan siswa sama.** Isi pembahasan ada di field `explain` tiap soal. Mode guru (login `Ferdi`) menampilkannya langsung, dan siswa menerima isi yang sama tepat setelah menjawab soal itu lewat `EXPLAIN_SISWA`, yang dibuat otomatis dari field `explain` di file yang sama (pola yang sama dengan `pu`, `tka3`, dan `tka4`). Cukup mengedit satu tempat untuk mengubah keduanya.
- **Tanpa teks bacaan.** Semua soal berdiri sendiri, jadi quiz ini tidak memakai `PASSAGES`.
- **Huruf miring dan tebal.** Dipertahankan dari dokumen lewat field `html` dan `optionsHtml` karena penting untuk soal ejaan dan keparalelan. Field `text` dan `options` tetap berisi versi teks biasa.
- **Soal 16.** Di dokumen hanya "pasca bencana" yang dicetak miring, padahal soal menanyakan perbaikan "kata dan tanda baca yang dicetak miring". Di website "Rp250.000.000,00 / tahun" ikut dimiringkan supaya soalnya jelas.
- **Warna penilaian pilihan di pembahasan.** Hijau untuk pilihan yang sama dengan kunci, merah muda untuk yang lain. Pada soal 17 yang ditanyakan adalah kalimat yang salah, jadi kalimat (2) berlabel "SALAH" berwarna hijau karena itu kuncinya.
- **Kunci.** A B C C C D B A A A A A B C B A B C D C (soal 1 sampai 20), sama dengan "Kunci Jawaban" di tiap pembahasan dokumen.

### Quiz Pengetahuan dan Pemahaman Umum (id `ppu`)
File: `functions/_lib/questions-ppu.js`. Dibuat dari dokumen "Soal_dan_Pembahasan_TPS_PPU.docx" (soal, kunci, dan pembahasan). 20 soal TPS Pengetahuan dan Pemahaman Umum, pilihan A sampai E, semuanya berjawaban tunggal, berbasis 4 teks bacaan: brain rot (1-5), bahasa gaul Generasi Alpha (6-10), suneung Korea Selatan (11-15), penangkapan penyandang disabilitas (16-19). Soal 20 berdiri sendiri (data bahasa fiktif Glekglekglek).

- **Pembahasan guru dan siswa sama.** Isi pembahasan ada di field `explain` tiap soal. Mode guru (login `Ferdi`) menampilkannya langsung, dan siswa menerima isi yang sama tepat setelah menjawab soal itu lewat `EXPLAIN_SISWA`, yang dibuat otomatis dari field `explain` di file yang sama (pola yang sama dengan `pbm` dan `pbm2`). Cukup mengedit satu tempat untuk mengubah keduanya.
- **Teks bacaan.** Ada di `PASSAGES` (kunci `brain`, `alpha`, `suneung`, `disabilitas`). Teks 1 sampai 3 diberi label P1 dan P2 di depan tiap paragraf; teks 4 hanya satu paragraf.
- **Soal 6 diubah dari isian angka menjadi pilihan ganda.** Di dokumen jawabannya 4, padahal website hanya mendukung pilihan ganda. Pilihannya (1) sampai (5), yaitu kelima kalimat paragraf 1 (kunci D, kalimat 4). Label jawaban dan kalimat penutup pembahasan disesuaikan menjadi huruf; isi pembahasan tidak diubah.
- **Soal 4, pembahasan dilengkapi.** Pembahasan di dokumen berhenti sebelum analisis tiap opsi (ada catatan "lanjutan pembahasan soal ini tidak terlihat pada foto"). Analisis opsi A sampai E ditulis ulang di sini mengikuti pola dasar S-P-O-konj-P-O yang sudah ada di pembahasan. Kunci D sesuai dokumen. Cocokkan dengan pembahasan aslinya bila ada.
- **Soal 1, pembahasan butir 5.** Contoh "lari-lari (berlari terus-menerus), ..." terpotong di dokumen. Tanda "..." dibuang, contoh lain tidak ditambahkan.
- **Catatan transkripsi.** Kalimat berawalan "Catatan:" di dokumen (keterangan hasil transkripsi foto) tidak ditampilkan.
- **Huruf miring dan tebal.** Dipertahankan lewat field `html` dan `optionsHtml`. Field `text` dan `options` tetap berisi versi teks biasa.
- **Warna penilaian pilihan di pembahasan.** Hijau untuk pilihan yang sama dengan kunci, merah muda untuk yang lain.
- **Kunci.** E B A D B D E B B A B D D B A D E C B D (soal 1 sampai 20), sama dengan "Jawaban" di tiap soal dokumen.

### Quiz Pengetahuan dan Pemahaman Umum 2 (id `ppu2`)
File: `functions/_lib/questions-ppu2.js`. Dibuat dari dokumen "Soal_dan_Pembahasan_Tryout_SNBT_5_Naufal_Academy.docx" (soal, kunci, dan pembahasan; Tryout SNBT Gratis #5 Naufal Academy). 20 soal subtes Pengetahuan dan Pemahaman Umum, pilihan A sampai E, semuanya berjawaban tunggal. Tiap soal punya teks atau data sendiri.

- **Pembahasan guru dan siswa sama.** Isi pembahasan ada di field `explain` tiap soal. Mode guru (login `Ferdi`) menampilkannya langsung, dan siswa menerima isi yang sama tepat setelah menjawab soal itu lewat `EXPLAIN_SISWA`, yang dibuat otomatis dari field `explain` di file yang sama (pola yang sama dengan `ppu` dan `pbm2`). Cukup mengedit satu tempat untuk mengubah keduanya.
- **Tanpa teks bacaan bersama.** Quiz ini tidak memakai `PASSAGES`. Teks atau data tiap soal dimasukkan ke field `html` soal itu (pola yang sama dengan `pu`).
- **Sumber kunci.** Menurut catatan di dokumen, kunci dan pembahasan nomor 1 sampai 5 diambil dari tangkapan layar Naufal Academy, sedangkan nomor 6 sampai 20 tidak tampil di tangkapan layar sehingga disusun mandiri. Kunci nomor 6 sampai 20 belum dicocokkan dengan kunci resmi. Yang paling layak dicek ulang: nomor 10 (menempuh jalur hukum vs mengambil langkah hukum, keduanya lazim) dan nomor 20 (kolokasi; pilihan B, C, dan E juga dipakai penutur sehari-hari).
- **Soal 1.** Pembahasan di sumber terpotong di bagian akhir; kalimat simpulan dilengkapi (menurut catatan dokumen).
- **Soal 6.** Di dokumen kelima kalimat teks ditulis satu per baris, padahal soal dan pembahasan menyebut "paragraf pertama" dan "paragraf kedua". Di website kalimat (1)-(3) menjadi paragraf P1 dan kalimat (4)-(5) paragraf P2, sesuai pembahasan.
- **Format teks soal.** Teks bernomor kalimat (soal 3 sampai 6 dan 12 sampai 16) digabung menjadi satu paragraf; data bahasa artifisial (soal 1 dan 11) tetap satu baris per data. Huruf miring dan tebal dipertahankan lewat field `html` dan `optionsHtml` (kata bercetak tebal dipakai soal 14, 16, dan 18). Field `text` dan `options` tetap berisi versi teks biasa.
- **Pembahasan.** Penilaian tiap pilihan berwarna hijau untuk pilihan yang sama dengan kunci dan merah muda untuk yang lain; daftar "Mengapa pilihan lain keliru" diberi label "Pilihan X" tanpa mengubah isinya. Kotak "Jadi, jawaban yang tepat adalah X." ditambahkan di akhir tiap pembahasan.
- **Kunci.** A C B C A A C C B B A A B A A C A B C A (soal 1 sampai 20), sama dengan tabel "Rekap Kunci Jawaban" di dokumen.

### Quiz TKA Matematika 7 (id `tka7`)
File: `functions/_lib/questions-tka-mat7.js`. Dibuat dari dokumen "Soal_TKA_SMP_Matematika_TryOut5_Soal1-30.docx" (soal, kunci, pembahasan ringkas, dan rekap kunci; Try Out 5 TKA SMP Matematika). 30 soal Matematika Kelas IX: barisan dan deret aritmetika, fungsi linear, persamaan garis lurus, SPLDV, aritmetika sosial, luas dan keliling bangun datar, volume bangun ruang, Pythagoras, transformasi, statistika, peluang, lingkaran, skala peta, dan persentase.

- **Pembahasan guru dan siswa sama.** Isi pembahasan ada di field `explain` tiap soal. Mode guru (login `Ferdi`) menampilkannya langsung, dan siswa menerima isi yang sama tepat setelah menjawab soal itu lewat `EXPLAIN_SISWA`, yang dibuat otomatis dari field `explain` di file yang sama (pola yang sama dengan `tka3`, `tka4`, dan `ppu`). Cukup mengedit satu tempat untuk mengubah keduanya.
- **21 soal pilihan ganda, 9 soal pernyataan Benar/Salah.** Soal 1, 3, 7, 16, 17, 18, 20, 23, dan 27 di dokumen berupa tabel pernyataan Benar / Salah. Di website semuanya dijadikan pilihan ganda kompleks (seperti soal 10 dan 17 pada `tka3`): tiap pernyataan menjadi satu pilihan (pernyataan 1 = A, 2 = B, dan seterusnya), siswa memilih semua pernyataan yang benar, dan jawaban benar hanya jika pilihannya sama persis dengan kunci. Kalimat "tentukan apakah setiap pernyataan berikut Benar atau Salah" diganti "pilih semua pernyataan berikut yang benar". Kunci: soal 1 = A, C; soal 3 = A, C; soal 7 = A, C, D; soal 16 = A, C; soal 17 = A, C; soal 20 = A, C, D; soal 23 = A, B, C; soal 27 = A, B. Soal 18 hanya punya satu pernyataan benar (B), jadi menjadi pilihan tunggal dan kalimatnya "pilih pernyataan berikut yang benar".
- **Pembahasan soal pernyataan.** "(1) BENAR — ..." ditulis "A. Pernyataan benar. ..." (hijau) atau "A. Pernyataan salah. ..." (merah muda); rujukan nomor pernyataan di kotak "Awas!" disesuaikan menjadi huruf pilihan.
- **Topik dan penanda jawaban.** Judul topik tiap soal (mis. "Fungsi Linear") dan label jenis soal tidak ditampilkan di soal supaya tidak membocorkan cara menyelesaikan; topik muncul di pembahasan ("Topik: ..."). Penanda jawaban benar di dokumen (huruf tebal, kolom BENAR / SALAH) tidak ikut dipakai di soal. Kotak "Awas!" tampil sebagai kotak jebakan.
- **Tabel dan pecahan.** Tabel data ditulis ulang sebagai tabel HTML (field `html`, kelas `qtable`). Pecahan pada pilihan soal 21 digambar bertumpuk (field `optionsHtml`, tanpa KaTeX); pecahan lain tetap ditulis dengan garis miring seperti di dokumen. Field `text` dan `options` berisi versi teks biasa.
- **Gambar.** Semua dari dokumen, di bagian soal: `public/img/tka7-q04.png`, `q07`, `q08`, `q10`, `q11`, `q15`, `q24`, `q25`, `q26`. Soal 30 memakai ulang `tka7-q07.png` (denah taman atap yang sama dengan soal 7). Gambar soal 26 sudah memuat keterangan "7 kisi" pada jalur robot, seperti di dokumen.
- **Catatan kecil dari dokumen.** Soal 28 memuat dua catatan yang isinya sama (12% dari total anggaran), keduanya dipertahankan. Soal 30 menyebut "Keluarga tersebut" tanpa rujukan di soal itu (rujukannya di soal 7), tetapi gambar sudah memuat semua ukuran, jadi teks dibiarkan.
- **Kunci.** A,C | D | A,C | A | C | A | A,C,D | B | C | D | A | D | A | C | A | A,C | A,C | B | D | A,C,D | D | A | A,B,C | A | D | B | A,B | B | B | B (soal 1 sampai 30). Sama dengan "Rekap Kunci Jawaban" di dokumen, cocok dengan penanda jawaban di tiap soal, dan sudah dihitung ulang satu per satu: 30 dari 30 cocok.

### Quiz TKA Matematika 8 (id `tka8`)
File: `functions/_lib/questions-tka-mat8.js`. Dibuat dari "TKA_17.pdf" (Simulasi TKA Matematika SMP/MTs, Elemen Bilangan, submateri Bilangan Real). Isinya 17 soal, pilihan A sampai D: operasi hitung dalam transaksi, estimasi, faktorisasi prima, rasio dan proporsi, perbandingan senilai dan berbalik nilai, skala, bilangan berpangkat dan akar, serta bilangan rasional dan irasional.

- **Pembahasan guru dan siswa sama.** Isi pembahasan ada di field `explain` tiap soal. Mode guru (login `Ferdi`) menampilkannya langsung, dan siswa menerima isi yang sama tepat setelah menjawab soal itu lewat `EXPLAIN_SISWA`, yang dibuat otomatis dari field `explain` di file yang sama (pola yang sama dengan `tka7` dan `ppu`). Cukup mengedit satu tempat untuk mengubah keduanya.
- **Soal 7, 8, dan 9 di PDF tidak ada.** PDF berjudul "20 soal", tetapi halaman soalnya hanya memuat nomor 1-6 dan 10-20. Halaman pembahasan hanya menyebut jawaban ketiganya (no. 7 = C (128), no. 8 = 9,6 m, no. 9 = 7,25 x 10^-5), jadi soalnya tidak dibuat dan tidak ditebak. Nomor di website dibuat berurutan 1 sampai 17 (website 1-6 = PDF 1-6, website 7-17 = PDF 10-20), karena aplikasi menampilkan "Soal n dari total". Bila halaman yang hilang ditemukan, soal 7-9 bisa ditambahkan dan nomornya disusun ulang.
- **Kunci di PDF yang tidak cocok dengan soal tercetak** (kunci di sini dihitung ulang dari teks soal):
  - Website no. 3 (PDF 3): pilihan 6, 12, 18, 36, sedangkan pembahasan PDF menyebut "6, 12, dan 36; 72 bukan" dengan kunci A, B, C. Semua pilihan membagi FPB = 36, jadi kuncinya **A, B, C, D**.
  - Website no. 4 (PDF 4): soal menyebut perbandingan 2 : 5, sedangkan pembahasan PDF memakai 3 : 5 dan menjawab 4,0 liter (C). Untuk soal yang tercetak, jawabannya 3,5 liter, kunci **B**. Bila soal aslinya 3 : 5, ubah teks soal menjadi 3 : 5 dan kunci menjadi C.
  - Website no. 6 (PDF 6): pembahasan PDF membahas soal lain (5/8 dan 2/3). Pembahasan ditulis baru: 7/16 terbesar, kunci C (Siska).
  - Website no. 15 (PDF 18): pembahasan PDF memuat koreksi sendiri; hasil 11, 24, 21 membuat A, B, C benar dan D salah. Pembahasan dirapikan tanpa kalimat koreksi.
  - Website no. 12, 13, 14, 16, dan 17 (PDF 15, 16, 17, 19, dan 20): PDF hanya memuat perhitungan tanpa kunci per huruf, kunci diturunkan dari perhitungan itu.
- **Pilihan ganda kompleks.** Petunjuk PDF menyebut soal 1-14 dan 18 satu jawaban, tetapi kalimat soal 2, 3, dan 18 sendiri berbunyi "Pilih semua ...", dan kalimat soal yang dipakai. Soal pilih semua (benar hanya jika sama persis dengan kunci): website no. 2, 3, 12, 13, 14, 15, 16, 17.
- **Soal tabel kategori diubah.** PDF 19 (rasional/irasional) dan PDF 20 (senilai / berbalik nilai / tidak dapat dikategorikan) berupa tabel kategori per baris, padahal website hanya mendukung pilihan ganda. Keduanya dijadikan "pilih semua bilangan yang rasional" (no. 16, kunci A, C) dan "pilih semua situasi yang berbalik nilai" (no. 17, kunci B, D). Kategori semua baris tetap dijelaskan di pembahasan.
- **Judul soal, rumus, dan gambar.** Judul tiap soal di PDF tidak ditampilkan di soal; topiknya muncul di pembahasan ("Topik: ..."). Rumus ditulis dengan HTML biasa (pecahan bertumpuk, akar dengan garis atas, superskrip), tanpa KaTeX. Gambar keran dan ember (PDF 12, website no. 9) dipotong dari halaman PDF: `public/img/tka8-q09.png`.
- **Kunci.** C | A,B,C | A,B,C,D | B | C | C | C | B | C | C | D | A,B,D | B,C | A,B,C | A,B,C | A,C | B,D (website no. 1 sampai 17). Semua dihitung ulang satu per satu: 17 dari 17 cocok.

### Quiz Literasi Bahasa Inggris (id `litinggris`)
File: `functions/_lib/questions-lit-inggris.js`. Dibuat dari dokumen "Soal_Literasi_Inggris_No1-16.docx" (soal, kunci, dan pembahasan cepat). 16 soal pilihan A sampai E, semuanya berjawaban tunggal, berbasis tiga bacaan: people-pleasing dan self-validation (soal 1-3), efek sambaran petir Teks 1 dan Teks 2 (soal 4-11), dan diskusi forum tentang rajin vs malas (soal 12-16).

- **Pembahasan guru dan siswa sama.** Isi pembahasan ada di field `explain` tiap soal. Mode guru (login `Ferdi`) menampilkannya langsung, dan siswa menerima isi yang sama tepat setelah menjawab soal itu lewat `EXPLAIN_SISWA`, yang dibuat otomatis dari field `explain` di file yang sama (pola yang sama dengan `ppu` dan `pbm`). Cukup mengedit satu tempat untuk mengubah keduanya.
- **Teks bacaan aslinya belum ada.** Dokumen sumber tidak memuat teks bacaan lengkap (tertulis "teks bacaan tidak ikut terfoto"), hanya tiga ringkasan berbahasa Indonesia yang disusun dari pembahasan. Ringkasan itu dipakai apa adanya di `PASSAGES` dan diberi catatan "ringkasan" di judul dan kalimat pembuka. Soal yang bergantung pada isi teks asli, misalnya soal 6 (nomor paragraf) dan soal 12-16 (komentar tiap peserta forum), lebih adil dijawab bila teks aslinya tersedia. Bila teks asli sudah ada, cukup ganti isi `PASSAGES` tanpa menyentuh soal, kunci, atau pembahasan.
- **Susunan pembahasan.** Mengikuti dokumen: jawaban dan penjelasan singkat, "Kunci cepat" (kotak kuning), "Kenapa pilihan lain salah?" (tiap pilihan sebagai kotak merah muda, pilihan yang tepat hijau), "Analogi" (kotak ungu), dan "Trik cepat" (kotak merah jambu). Jenis soal tiap nomor (mis. "Nada Penulis (Tone)") muncul di pembahasan, tidak di soal.
- **Yang dibuang dari dokumen.** Tanda centang dan huruf tebal penanda jawaban pada pilihan, keterangan "(no. n di aplikasi)" pada judul soal, dan emoji pada judul bagian pembahasan.
- **Soal 15.** Kata yang ditanyakan (*prone*) ditebalkan di tampilan soal.
- **Kunci.** A D E A B E B C E D C A E C A C (soal 1 sampai 16). Cocok dengan penanda jawaban di tiap soal dan baris "JAWABAN" di pembahasan. Isi pembahasan konsisten dengan ringkasan teks, tetapi kunci tidak bisa dicek terhadap teks aslinya karena teks itu tidak ada di dokumen.

## Tampilan (tema galaksi)

Warna dan suasana mengikuti foto referensi: latar navy-indigo, kabut magenta dan cyan, kilau emas, bintang, dan planet.

- Warna utama: navy `#0c0e3d`, ungu `#6a3de8`, magenta `#b81fa0`, merah muda `#ff6fd0`, cyan `#4fd1ff`, emas `#ffd36b`. Jawaban benar memakai hijau-tosca `#43f0c6`, jawaban salah memakai merah muda `#ff86b3`, dan keduanya juga diberi tanda ✓ dan ✕.
- Font: **Orbitron** untuk judul dan angka skor, **Nunito** untuk soal, pilihan jawaban, dan teks lain. Kedua file font ada di `public/fonts/` (lisensi SIL OFL, ikut disertakan), jadi tidak perlu internet ke Google Fonts.
- Latar dan planet berupa gambar SVG di `public/img/` (`nebula.svg`, `stars-a.svg`, `stars-b.svg`, `planet-*.svg`), diatur di bagian "langit" pada `public/style.css`.
- Semua warna ada di bagian `:root` paling atas `public/style.css`. Ubah di sana untuk mengganti tema.
- Animasi (bintang berkedip, titik jeda) otomatis mati bagi pengguna yang mengaktifkan "kurangi gerakan" di perangkatnya.

## Menjalankan di komputer sendiri

Butuh Node.js 18 atau lebih baru.

```
npm run dev
```

Buka http://localhost:8788. Data lokal disimpan di folder `.wrangler/` (tidak ikut ke Git).

## Mengubah soal atau kunci jawaban

Semua soal, kunci, dan pembahasan ada di `functions/_lib/questions.js`. Ubah `answer` (A sampai E) atau teksnya, commit, dan Cloudflare akan deploy ulang otomatis. Gambar ada di `public/img/`.

## Struktur

```
wrangler.jsonc               konfigurasi Worker (Static Assets + binding D1)
src/worker.js                pintu masuk: /api/* ke API, sisanya ke public/
public/                      halaman web (index.html, style.css, app.js, img/, fonts/, katex/)
functions/api/[[route]].js   API (login, soal, jawaban, kontrol guru)
functions/_lib/quizzes.js    daftar quiz yang muncul di menu
functions/_lib/questions.js  bank soal Matematika Dasar (kunci dan pembahasan hanya di server)
functions/_lib/questions-inggris.js   bank soal Bahasa Inggris (teks bacaan dan soal jawaban ganda)
functions/_lib/questions-tka-mat.js   bank soal Matematika TKA (30 soal, pilihan A sampai D)
functions/_lib/questions-tka-mat2.js  bank soal TKA Matematika 2 (30 soal, pilihan A sampai D) + pembahasan pengajar di field explain
functions/_lib/pembahasan-tka-mat2.js pembahasan TKA Matematika 2 untuk siswa (bergambar, dikirim setelah soal dijawab)
functions/_lib/questions-indonesia.js  bank soal Bahasa Indonesia Lanjutan (6 teks bacaan, 30 soal, pilihan A sampai E)
functions/_lib/pembahasan-indonesia.js pembahasan Bahasa Indonesia Lanjutan untuk siswa (dikirim setelah soal dijawab)
functions/_lib/questions-indonesia-wajib.js  bank soal Bahasa Indonesia Wajib (17 teks bacaan, 30 soal, tanpa pembahasan siswa)
functions/_lib/questions-snbt.js      bank soal SNBT Kuantitatif (20 soal, rumus KaTeX) + pembahasan pengajar di field explain
functions/_lib/pembahasan-snbt.js     pembahasan SNBT Kuantitatif untuk siswa (bergambar, dikirim setelah soal dijawab)
functions/_lib/questions-tka-mat3.js        bank soal TKA Matematika 3 (30 soal, rumus KaTeX) + pembahasan di field explain, dipakai bersama guru dan siswa
functions/_lib/questions-tka-mat4.js        bank soal TKA Matematika 4 (20 soal, pilihan A sampai D) + pembahasan di field explain, dipakai bersama guru dan siswa
functions/_lib/questions-penalaran-umum.js  bank soal Penalaran Umum (30 soal, pilihan A sampai E) + pembahasan di field explain, dipakai bersama guru dan siswa
functions/_lib/questions-pbm.js             bank soal Pemahaman Bacaan dan Menulis (20 soal, 4 teks bacaan, pilihan A sampai E) + pembahasan di field explain, dipakai bersama guru dan siswa
functions/_lib/questions-pbm2.js            bank soal Pemahaman Bacaan dan Menulis 2 (20 soal, pilihan A sampai E) + pembahasan di field explain, dipakai bersama guru dan siswa
functions/_lib/questions-ppu.js             bank soal Pengetahuan dan Pemahaman Umum (20 soal, 4 teks bacaan, pilihan A sampai E) + pembahasan di field explain, dipakai bersama guru dan siswa
functions/_lib/questions-ppu2.js            bank soal Pengetahuan dan Pemahaman Umum 2 (20 soal, tiap soal dengan teks sendiri, pilihan A sampai E) + pembahasan di field explain, dipakai bersama guru dan siswa
functions/_lib/questions-tka-mat7.js        bank soal TKA Matematika 7 (30 soal, pilihan A sampai D, 9 soal pilih semua yang benar) + pembahasan di field explain, dipakai bersama guru dan siswa
functions/_lib/questions-tka-mat8.js        bank soal TKA Matematika 8 (17 soal, pilihan A sampai D, 8 soal pilih semua yang benar) + pembahasan di field explain, dipakai bersama guru dan siswa
functions/_lib/questions-lit-inggris.js     bank soal Literasi Bahasa Inggris (16 soal, 3 teks bacaan berupa ringkasan, pilihan A sampai E) + pembahasan di field explain, dipakai bersama guru dan siswa
schema.sql                   skema tabel (opsional, dibuat otomatis)
```

Kunci dan pembahasan hanya ada di server. Kunci jawaban sebuah soal baru dikirim setelah siswa menjawab soal itu; pembahasan siswa (quiz `ind`, `snbt`, `tka2`, `tka3`, `tka4`, `pu`, `pbm`, `pbm2`, `ppu`, `ppu2`, `tka7`, `tka8`, dan `litinggris`) ikut dikirim pada saat yang sama. Pembahasan guru tidak pernah dikirim ke siswa.
