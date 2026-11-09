# Quiz Matematika Dasar (25 soal)

Website quiz untuk siswa dan guru dengan menu pilihan quiz (Matematika Dasar, Bahasa Inggris, Matematika TKA, Bahasa Indonesia Lanjutan, Bahasa Indonesia Wajib, SNBT Kuantitatif). Berjalan sebagai satu Cloudflare Worker: halaman web dari Static Assets (folder `public/`), API di `/api/*`, data di D1.

## Fitur

**Siswa**
- Login dengan nama bebas. Login lagi dengan nama yang sama melanjutkan ke soal berikutnya.
- Mode next terus: begitu pilihan diklik, langsung terlihat benar atau salah, lalu klik Lanjut.
- Pembahasan tidak ditampilkan ke siswa, kecuali di quiz **Bahasa Indonesia Lanjutan**: di quiz itu pembahasan muncul tepat setelah siswa menjawab setiap soal (lihat bagian quiz `ind` di bawah).
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
functions/_lib/questions-indonesia.js  bank soal Bahasa Indonesia Lanjutan (6 teks bacaan, 30 soal, pilihan A sampai E)
functions/_lib/pembahasan-indonesia.js pembahasan Bahasa Indonesia Lanjutan untuk siswa (dikirim setelah soal dijawab)
functions/_lib/questions-indonesia-wajib.js  bank soal Bahasa Indonesia Wajib (17 teks bacaan, 30 soal, tanpa pembahasan siswa)
functions/_lib/questions-snbt.js      bank soal SNBT Kuantitatif (20 soal, rumus KaTeX) + pembahasan pengajar di field explain
functions/_lib/pembahasan-snbt.js     pembahasan SNBT Kuantitatif untuk siswa (bergambar, dikirim setelah soal dijawab)
schema.sql                   skema tabel (opsional, dibuat otomatis)
```

Kunci dan pembahasan hanya ada di server. Kunci jawaban sebuah soal baru dikirim setelah siswa menjawab soal itu; pembahasan siswa (quiz `ind` dan `snbt`) ikut dikirim pada saat yang sama. Pembahasan guru tidak pernah dikirim ke siswa.
