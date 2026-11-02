# Quiz Matematika Dasar (25 soal)

Website quiz untuk siswa dan guru. Berjalan sebagai satu Cloudflare Worker: halaman web dari Static Assets (folder `public/`), API di `/api/*`, data di D1.

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

Bagikan alamat itu ke siswa. Guru masuk dengan nama `Ferdi`, lalu klik **Mulai**.

### PIN guru (opsional)
Secara bawaan siapa pun yang mengetik nama `Ferdi` menjadi guru. Untuk mengunci:
Settings, Variables and secrets, tambahkan `TEACHER_PIN` (tipe Secret), lalu deploy ulang. Guru akan diminta PIN saat login.

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
public/                      halaman web (index.html, style.css, app.js, img/)
functions/api/[[route]].js   API (login, soal, jawaban, kontrol guru)
functions/_lib/questions.js  bank soal, kunci, pembahasan (hanya di server)
schema.sql                   skema tabel (opsional, dibuat otomatis)
```

Kunci dan pembahasan hanya ada di server dan tidak pernah dikirim ke browser siswa.
