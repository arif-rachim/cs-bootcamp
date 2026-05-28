# Minggu 06 — Struktur Data

> **Padanan CS50:** Week 5 (Data Structures). Lanjutan langsung dari Minggu 05: setelah paham pointer & memori di C, kita lihat bagaimana **Python menyembunyikan semua itu** lewat struktur data bawaan, dan kapan memilih masing-masing.

## Tujuan Pembelajaran
- Menguasai struktur data inti Python: **list, tuple, dict, set**.
- Memahami **mutability** dan perbedaan **value vs reference** (kenapa list "ikut berubah").
- Memilih struktur data yang tepat untuk masalah tertentu.
- Memahami konsep dasar **stack & queue**, dan **hash table** (di balik `dict`).
- Mengenal kompleksitas operasi tiap struktur (akses, cari, sisip).

## Konsep Kunci
- List vs tuple (mutable vs immutable), slicing, comprehension.
- Dict: pasangan key-value, kapan dipakai, kenapa cepat (hashing).
- Set: keunikan & operasi himpunan.
- Model referensi Python: `is` vs `==`, aliasing, copy vs deepcopy.
- Stack (LIFO) & Queue (FIFO) — konsep & implementasi sederhana.

## Lab Praktik
1. Olah daftar nilai: rata-rata, maksimum, urutkan, filter dengan comprehension.
2. Hitung frekuensi kata dalam teks memakai `dict`.
3. Demo aliasing: tunjukkan kenapa `b = a` pada list bisa "mengubah" `a`.

## Problem Set
- **PSet 6a:** Buku alamat sederhana berbasis `dict` (tambah, cari, hapus kontak).
- **PSet 6b:** Implementasi `Stack` dan `Queue` memakai list, lalu bandingkan dengan linked list versi C dari Minggu 05.

## Mini-Project
**"Inventaris Toko"** — kelola stok barang dengan dict (nama → jumlah & harga), dukung tambah/kurang stok dan laporan total nilai inventaris.

## Sumber Belajar
- CS50 Lecture 5 (Data Structures): https://cs50.harvard.edu/x/weeks/5/
- Python Docs — Data Structures: https://docs.python.org/3/tutorial/datastructures.html

## Checklist Siap Lanjut
- [ ] Bisa memilih list/tuple/dict/set sesuai kebutuhan.
- [ ] Paham perbedaan `==` dan `is`, serta mutability.
- [ ] Paham konsep stack, queue, dan hash table.
