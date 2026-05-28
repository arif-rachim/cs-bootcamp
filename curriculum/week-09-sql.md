# Minggu 09 — SQL & Database

> **Padanan CS50:** Week 7 (SQL). Cara menyimpan & mengambil data dalam skala besar secara terstruktur.

## Tujuan Pembelajaran
- Memahami model **relasional**: tabel, baris, kolom, primary/foreign key.
- Menulis query SQL inti: `SELECT`, `INSERT`, `UPDATE`, `DELETE`.
- Memfilter & mengurutkan: `WHERE`, `ORDER BY`, `LIMIT`, `LIKE`.
- Mengagregasi: `COUNT`, `SUM`, `AVG`, `GROUP BY`, `HAVING`.
- Menggabungkan tabel dengan **JOIN** dan memahami **normalisasi** dasar.
- Mengakses database dari Python (`sqlite3`).

## Konsep Kunci
- RDBMS & SQLite.
- CRUD via SQL.
- Relasi antar tabel & foreign key.
- JOIN (inner/left) & kenapa data dipecah ke beberapa tabel.
- Index (sekilas) & kenapa query bisa cepat/lambat.
- Keamanan: bahaya **SQL injection** & query berparameter.

## Lab Praktik
1. Buat database SQLite untuk katalog buku, isi data, jalankan SELECT bervariasi.
2. Query agregasi: jumlah buku per kategori, harga rata-rata.
3. JOIN tabel `buku` & `penulis`, tampilkan judul + nama penulis.

## Problem Set
- **PSet 9a:** Desain skema database sekolah (mahasiswa, mata kuliah, nilai) + 5 query analitik.
- **PSet 9b:** Akses database dari Python dengan query **berparameter** (aman dari injection).

## Mini-Project
**"Database Film"** — impor data film dari CSV ke SQLite, lalu buat antarmuka pencarian sederhana (cari per genre/tahun/rating).

## Sumber Belajar
- CS50 Lecture 7 (SQL): https://cs50.harvard.edu/x/weeks/7/
- SQLite Tutorial: https://www.sqlitetutorial.net/

## Checklist Siap Lanjut
- [ ] Bisa menulis query CRUD & agregasi.
- [ ] Paham JOIN & relasi antar tabel.
- [ ] Tahu cara mencegah SQL injection.
