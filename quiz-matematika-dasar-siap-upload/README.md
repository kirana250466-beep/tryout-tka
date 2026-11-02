# Latihan Soal: Matematika Dasar dan Bahasa Inggris

Website quiz untuk siswa dan guru. Berjalan sebagai satu Cloudflare Worker: halaman web dari Static Assets (folder `public/`), API di `/api/*`, data di D1.

Halaman pertama adalah **menu pilihan kuis**. Setiap kuis punya sesi, soal, dan daftar peserta sendiri.

| Kuis | Id (alamat langsung) | File soal |
|---|---|---|
| Matematika Dasar (25 soal) | `/#matematika` | `functions/_lib/questions-matematika.js` |
| Bahasa Inggris, Tryout 9 TKA (25 soal bacaan) | `/#inggris` | `functions/_lib/questions-inggris.js` |

## Fitur

**Menu**
- Dua kartu kuis dengan status masing-masing (Belum dimulai, Sesi aktif, Dijeda, Ditutup) dan jumlah soal. Status ikut berubah sendiri.
- Kuis yang belum punya soal tampil abu-abu bertuliskan "Soal belum diisi" dan belum bisa dibuka.
- Nama yang sudah diketik diingat selama tab terbuka. Pindah kuis lewat tombol **Menu** tidak perlu mengetik nama lagi. Pengerjaan tiap kuis tersimpan terpisah.
- Alamat langsung ke kuis tertentu, contoh `https://alamat-kamu.workers.dev/#inggris`, bisa dibagikan ke siswa.

**Siswa**
- Login dengan nama bebas. Login lagi dengan nama yang sama melanjutkan ke soal berikutnya.
- Mode next terus: begitu pilihan diklik, langsung terlihat benar atau salah, lalu klik Lanjut.
- Soal bacaan (reading) menampilkan teksnya di atas soal, bisa dilipat.
- Soal dengan lebih dari satu jawaban benar ("Select all that apply") menampilkan petunjuk. Siswa memilih beberapa pilihan, lalu klik **Kirim jawaban**. Nilainya benar jika semua pilihan tepat dan tidak ada yang kelebihan atau kurang.
- Pembahasan tidak ditampilkan ke siswa.
- Setelah selesai, tombol **Pilih kuis lain** membawa kembali ke menu.

**Guru** (login dengan nama `Ferdi`, lalu pilih kuis di menu)
- Melihat soal, kunci, dan pembahasan setiap nomor kuis yang dipilih.
- **Mulai Baru**: membuka sesi baru, laman siswa aktif, semua siswa mulai dari soal 1.
- **Pause / Lanjutkan**: laman siswa berhenti sementara, jawaban yang sudah ada tetap aman.
- **Matikan**: siswa belum bisa mengerjakan. Tombol Lanjutkan membuka kembali sesi yang sama tanpa menghapus jawaban.
- Tab Peserta: daftar siswa, jumlah terjawab, dan jumlah benar.
- Kontrol sesi berlaku per kuis. Menjalankan Matematika tidak mengubah sesi Bahasa Inggris, dan sebaliknya.

## Deploy (GitHub + Cloudflare Workers)

1. **GitHub**: buat repository baru, lalu upload seluruh isi folder ini (bukan file zip-nya). File `wrangler.jsonc` harus ada di paling atas repository, sejajar dengan `package.json`.
2. **Cloudflare**: Workers & Pages, Create application, Import a repository, pilih repository tadi.
   - Build command: kosongkan
   - Deploy command: `npx wrangler deploy` (bawaan)
   - Nama project harus sama dengan `name` di `wrangler.jsonc` (`quiz-matematika-dasar`). Jika berbeda, ubah salah satunya agar sama. Nama ini sengaja tidak diganti walau situsnya sekarang punya dua kuis, supaya alamat situs dan database lama tetap dipakai.
3. **Database**: tidak perlu dibuat manual. Binding `DB` ada di `wrangler.jsonc`, dan database `quiz-db` dibuat otomatis saat deploy pertama. Tabel dibuat otomatis saat pertama dipakai.
   - Jika kamu sudah punya database D1 sendiri, tambahkan `"database_id": "<id-nya>"` di bagian `d1_databases` pada `wrangler.jsonc`.
4. Buka `https://quiz-matematika-dasar.<akun-kamu>.workers.dev`.

Bagikan alamat itu ke siswa. Guru masuk dengan nama `Ferdi`, pilih kuis, lalu klik **Mulai**.

### Memperbarui dari versi lama (hanya satu kuis Matematika)
1. Ganti semua file di repository dengan isi folder ini, lalu **hapus file lama `functions/_lib/questions.js`**. Isinya sekarang ada di `questions-matematika.js`.
2. Deploy. Saat pertama kali dipakai, sesi dan jawaban Matematika yang lama otomatis disalin ke tabel baru (`quiz_session`, `quiz_students`, `quiz_answers`). Sesi yang sedang aktif tetap aktif.
3. Tabel lama (`session`, `students`, `answers`) tidak diubah dan tidak dihapus. Kalau sudah yakin semuanya aman, boleh dihapus kapan saja lewat Console D1.

### PIN guru (opsional)
Secara bawaan siapa pun yang mengetik nama `Ferdi` menjadi guru. Untuk mengunci:
Settings, Variables and secrets, tambahkan `TEACHER_PIN` (tipe Secret), lalu deploy ulang. Guru akan diminta PIN saat login.

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

## Mengubah atau menambah soal

Semua soal, kunci, dan pembahasan ada di file soal tiap kuis (lihat tabel di atas). Ubah `answer` (A sampai E) atau teksnya, commit, dan Cloudflare akan deploy ulang otomatis. Gambar ada di `public/img/`. Nomor soal mengikuti urutan di daftar.

**Bahasa Inggris (soal bacaan).** Tulis teks bacaan sekali di `PASSAGES`, lalu panggil dengan `passage: "namaTeks"` di setiap soal yang memakainya. Pisahkan paragraf dengan satu baris kosong. Contoh format ada di komentar dalam `questions-inggris.js`. Pilihan jawaban boleh 2 sampai 5. Untuk soal berjawaban ganda, tulis kuncinya berurutan tanpa spasi, contoh `answer: "ACE"`; soal itu otomatis tampil sebagai pilihan ganda kompleks. Gambar di soal ditulis lewat `image: "img/nama-file.png"` (contoh: grafik soal 6 sampai 10 di `public/img/inggris-chart-workshop.png`). Begitu `QUESTIONS` terisi dan di-deploy, kartu Bahasa Inggris di menu otomatis aktif.

**Menambah kuis baru.** Buat file soal baru di `functions/_lib/` (salin `questions-inggris.js` sebagai contoh), impor di `functions/_lib/quizzes.js`, lalu tambahkan satu objek ke `DEFINITIONS` (id, judul, keterangan, ikon, bahasa). Kartunya muncul sendiri di menu.

## Struktur

```
wrangler.jsonc               konfigurasi Worker (Static Assets + binding D1)
src/worker.js                pintu masuk: /api/* ke API, sisanya ke public/
public/                      halaman web (index.html, style.css, app.js, img/, fonts/)
functions/api/[[route]].js   API (menu, login, soal, jawaban, kontrol guru)
functions/_lib/quizzes.js    daftar kuis yang tampil di menu
functions/_lib/questions-matematika.js   bank soal Matematika Dasar, kunci, pembahasan
functions/_lib/questions-inggris.js      bank soal Bahasa Inggris, teks bacaan, kunci, pembahasan
schema.sql                   skema tabel (opsional, dibuat otomatis)
```

Kunci dan pembahasan hanya ada di server dan tidak pernah dikirim ke browser siswa.
