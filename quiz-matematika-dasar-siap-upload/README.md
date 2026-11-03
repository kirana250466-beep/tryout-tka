# Quiz Matematika Dasar (25 soal)

Website quiz untuk siswa dan guru dengan menu pilihan quiz (Matematika Dasar, Bahasa Inggris, Matematika TKA). Berjalan sebagai satu Cloudflare Worker: halaman web dari Static Assets (folder `public/`), API di `/api/*`, data di D1.

## Fitur

**Siswa**
- Login dengan nama bebas. Login lagi dengan nama yang sama melanjutkan ke soal berikutnya.
- Mode next terus: begitu pilihan diklik, langsung terlihat benar atau salah, lalu klik Lanjut.
- Pembahasan tidak ditampilkan ke siswa.

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
- Teks bacaan bersama (Bahasa Inggris) disimpan sekali di `PASSAGES` dan dirujuk lewat `passage` pada tiap soal.
- Gambar di `explainImage` hanya tampil di mode guru. Gambar di `image` tampil juga untuk siswa.
- Data sesi, siswa, dan jawaban disimpan di tabel `quiz_session`, `quiz_students`, dan `quiz_answers` (dibuat otomatis). Tabel lama `session`, `students`, `answers` dari versi satu-quiz tidak dipakai lagi.

### Kunci Matematika TKA yang sudah dikoreksi
Kunci platform untuk soal **3, 8, 10, 11, 12, 13, dan 30** tidak sesuai dengan data soalnya (kemungkinan salah ketik). Di `questions-tka-mat.js`, opsi berkunci pada ketujuh soal itu sudah diganti dengan jawaban hasil hitung, dan angka desimal dibulatkan bila opsi lain berupa bilangan bulat (soal 3: 48 meter). Huruf kuncinya tidak berubah. Catatan kunci lama dan penggantinya tampil di mode guru pada tiap soal.

- **Soal 11:** tanda operasi antara 125^(2/3) dan 32^(2/5) hilang di platform, jadi dipakai tanda **+** (jawaban 30,125). Cocokkan dengan soal aslinya. Bila tandanya lain, ubah opsi berkunci dan teks soal (tanda − memberi 22,125; × memberi 101,125; ÷ memberi 7,375).
- **Soal 2, 6, 9, dan 29:** kunci sudah benar, tetapi redaksi atau opsinya perlu diluruskan saat mengajar.

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
public/                      halaman web (index.html, style.css, app.js, img/, fonts/)
functions/api/[[route]].js   API (login, soal, jawaban, kontrol guru)
functions/_lib/quizzes.js    daftar quiz yang muncul di menu
functions/_lib/questions.js  bank soal Matematika Dasar (kunci dan pembahasan hanya di server)
functions/_lib/questions-inggris.js   bank soal Bahasa Inggris (teks bacaan dan soal jawaban ganda)
functions/_lib/questions-tka-mat.js   bank soal Matematika TKA (30 soal, pilihan A sampai D)
schema.sql                   skema tabel (opsional, dibuat otomatis)
```

Kunci dan pembahasan hanya ada di server dan tidak pernah dikirim ke browser siswa.
