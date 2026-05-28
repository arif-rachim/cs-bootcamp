# Minggu 08 — File, Error & Format Data

> **Padanan CS50:** Week 6 (Python — File I/O). Program nyata harus membaca/menyimpan data dan menangani kesalahan dengan anggun.

## Tujuan Pembelajaran
- Membaca & menulis file teks (`open`, `with`, mode `r/w/a`).
- Mengolah format data umum: **CSV** dan **JSON**.
- Menangani error dengan **`try` / `except` / `finally`**.
- Memunculkan exception sendiri (`raise`) dan memvalidasi data.
- Mengenal struktur proyek & `requirements.txt`/virtual environment.

## Konsep Kunci
- Context manager (`with`) & kenapa penting menutup file.
- Modul `csv` & `json`.
- Hierarki exception; menangkap error spesifik vs umum.
- Defensive programming di batas sistem (input file/pengguna).
- Virtual environment (`venv`) & manajemen dependensi.

## Lab Praktik
1. Baca file CSV nilai mahasiswa, hitung rata-rata per mahasiswa, tulis hasil ke file baru.
2. Simpan & muat "save game" / pengaturan aplikasi memakai JSON.
3. Tambahkan `try/except` pada program yang membaca file (tangani file tidak ada).

## Problem Set
- **PSet 8a:** "Phonebook persisten" — buku kontak yang menyimpan data ke file JSON antar sesi.
- **PSet 8b:** Pembaca CSV yang tangguh: lewati baris rusak tanpa crash, laporkan jumlah baris gagal.

## Mini-Project
**"To-Do List CLI"** — aplikasi command-line untuk mengelola tugas (tambah/selesai/hapus) dengan penyimpanan persisten ke file JSON.

## Sumber Belajar
- CS50P Lecture 5–6 (Exceptions, File I/O): https://cs50.harvard.edu/python/
- Python Docs — Errors & Exceptions: https://docs.python.org/3/tutorial/errors.html

## Checklist Siap Lanjut
- [ ] Bisa membaca/menulis file teks, CSV, dan JSON.
- [ ] Bisa menangani error dengan `try/except` yang spesifik.
- [ ] Bisa membuat & memakai virtual environment.
