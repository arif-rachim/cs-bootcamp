# CS Bootcamp Webapp

Webapp pendamping kurikulum bootcamp (lihat `../curriculum`). Menampilkan materi tiap modul, menjalankan latihan **Python langsung di browser** (Pyodide) dengan **auto-grade**, dan menyimpan **akun + progres + nilai** per siswa.

## Stack
- **Next.js 16** (App Router) + **React 19** + **Tailwind v4**
- **Prisma 6 + SQLite** — akun, progres, submission
- **Auth** email+password (bcrypt + JWT cookie)
- **Pyodide** (CDN) — eksekusi Python di browser untuk minggu Python
- **Link-out** ke Replit/Codespaces untuk minggu C / SQL / web / data science / AI

## Arsitektur (hybrid)
Materi dibaca langsung dari `../curriculum/*.md` (satu sumber kebenaran). Tiap modul diklasifikasikan otomatis di `lib/content.ts`:
- **pyodide** (Minggu 1–4, 6–9): editor + Run + Uji Jawaban (auto-grade via test case di browser).
- **linkout** (Minggu 5, 10–15): kartu menuju Replit/Codespaces karena butuh C, server, atau paket berat.
- **conceptual** (Minggu 0): hanya materi.

Soal auto-grade didefinisikan di `lib/exercises.ts`.

> Catatan: auto-grade berjalan di browser sehingga bisa "diakali" siswa. Cukup untuk MVP belajar; verifikasi server-side bisa ditambahkan nanti.

## Setup

```bash
npm install
cp .env.example .env   # lalu isi nilainya (lihat di bawah)
npx prisma generate
npx prisma db push     # membuat prisma/dev.db
npm run dev            # http://localhost:3000
```

### Environment variables (`.env`)
```
DATABASE_URL="file:./dev.db"
AUTH_SECRET="ganti-dengan-string-acak-panjang"
```
`AUTH_SECRET` dipakai untuk menandatangani sesi JWT — wajib diganti di produksi.

## Build & jalankan produksi
```bash
npm run build
npm run start
```

## Struktur penting
```
app/
  page.tsx                 daftar modul + progres
  lessons/[slug]/page.tsx  materi + latihan/runner/link-out
  dashboard/page.tsx       progres & nilai (perlu login)
  login, signup            auth
  api/                     auth, progress, submissions
components/
  PythonRunner.tsx         editor + Pyodide + auto-grade
  MarkdownView.tsx         render markdown kurikulum
  LinkOutCard.tsx          tombol Replit/Codespaces
lib/
  content.ts               baca ../curriculum, klasifikasi modul
  exercises.ts             definisi soal + test case
  auth.ts, prisma.ts
```

## Menambah soal auto-grade
Tambahkan entri di `lib/exercises.ts` dengan key = slug modul (mis. `week-02-control-flow`), berisi `starter` (kode awal) dan `tests` (daftar `assert` Python). Otomatis muncul di halaman modul tersebut.

## Yang belum (langkah lanjut)
- Verifikasi grading di server (anti-curang).
- Migrasi SQLite → Postgres untuk multi-siswa skala besar + deploy.
- OAuth (Google/GitHub) opsional.
- Pyodide + micropip untuk minggu data science (12) bila ingin tetap in-browser.
