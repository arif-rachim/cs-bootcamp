# Bootcamp Computer Science untuk Tazkia

Bootcamp persiapan dan akselerasi untuk **Tazkia**, mahasiswi baru **Fakultas Ilmu Komputer Universitas Indonesia**. Tujuannya: mempercepat pemahaman fondasi computer science sebelum & selama semester awal, lalu menutup dengan pengantar AI/Machine Learning.

> Kurikulum ini mengadaptasi **CS50 Harvard**, tapi dengan dua penyesuaian:
> 1. **Python-first** sebagai bahasa utama supaya mulus menuju dunia AI — dengan satu *detour* ke **C** di Minggu 05 untuk memahami memori & low-level (mental model khas CS50 yang penting untuk kuliah formal di Fasilkom).
> 2. **Berujung ke AI** — fondasi CS dibangun kuat dulu, baru AI/ML dikenalkan sebagai capstone.

---

## Tujuan Bootcamp

Setelah menyelesaikan bootcamp ini, Tazkia diharapkan mampu:

- Berpikir secara **komputasional** (memecah masalah, abstraksi, algoritma).
- Menulis program Python yang bersih, modular, dan teruji.
- Memahami **algoritma & struktur data** inti beserta analisis efisiensinya (Big O).
- Membangun aplikasi nyata: olah data, database (SQL), dan web sederhana.
- Memahami fondasi **AI/Machine Learning** dan membangun proyek AI kecil sendiri.
- Terbiasa belajar mandiri: membaca dokumentasi, debugging, dan menggunakan AI assistant secara sehat.

---

## Filosofi Belajar

- **Pelan tapi dalam.** Ritme ~14–16 minggu, ~8–12 jam/minggu. Lebih baik paham daripada cepat.
- **Belajar dengan membuat.** Setiap minggu ada lab + mini-project. Teori untuk dipakai, bukan dihafal.
- **Gagal itu bagian dari proses.** Debugging adalah skill inti, bukan tanda gagal.
- **AI sebagai tutor, bukan tukang contek.** Boleh tanya AI untuk menjelaskan konsep & membantu debug, tapi setiap latihan inti harus bisa ditulis ulang tanpa bantuan.

---

## Peta Kurikulum (Sekilas)

| Minggu | Modul | Padanan CS50 | Fokus |
|:------:|-------|--------------|-------|
| **00** | [Berpikir Komputasi](curriculum/week-00-computational-thinking.md) | Week 0 (Scratch) | Biner, algoritma, pseudocode, representasi data |
| **01** | [Python Dasar](curriculum/week-01-python-basics.md) | Week 1 (C) | Variabel, tipe data, input/output, ekspresi |
| **02** | [Kontrol Alur](curriculum/week-02-control-flow.md) | Week 1–2 | Kondisional, perulangan, logika boolean |
| **03** | [Fungsi & Abstraksi](curriculum/week-03-functions.md) | Week 1 | Fungsi, scope, dekomposisi masalah |
| **04** | [Algoritma & Big O](curriculum/week-04-algorithms.md) | Week 3 | Searching, sorting, kompleksitas, rekursi |
| **05** | [Memory & Low-Level (C)](curriculum/week-05-memory-low-level.md) | Week 4 | Pointer, array, stack/heap, linked list di C |
| **06** | [Struktur Data](curriculum/week-06-data-structures.md) | Week 5 | List, tuple, dict, set, hash table |
| **07** | [String & Teks](curriculum/week-07-strings.md) | Week 2 | Manipulasi string, regex, encoding |
| **08** | [OOP](curriculum/week-08-oop.md) | Week 6 (Python) | Class, object, inheritance, encapsulation |
| **09** | [File, Error & Format Data](curriculum/week-09-files-and-errors.md) | Week 6 | File I/O, exception, CSV/JSON |
| **10** | [SQL & Database](curriculum/week-10-sql.md) | Week 7 | Relasi, query, CRUD, normalisasi |
| **11** | [Web & API](curriculum/week-11-web.md) | Week 8–9 | HTML/CSS/JS, Flask, REST API |
| **12** | [Toolkit Data Science](curriculum/week-12-data-science.md) | — (jembatan ke AI) | NumPy, Pandas, visualisasi |
| **13** | [Pengantar Machine Learning](curriculum/week-13-machine-learning.md) | — | Supervised learning, scikit-learn |
| **14** | [AI Modern & LLM](curriculum/week-14-modern-ai.md) | — | Neural net (intuisi), pakai API LLM |
| **15** | [Capstone Project](curriculum/week-15-capstone.md) | Final Project | Proyek akhir end-to-end |

---

## Struktur Tiap Minggu

Setiap modul mengikuti pola yang sama:

1. **Pemetaan CS50** — dari mana topik ini berasal dan apa yang diubah.
2. **Tujuan Pembelajaran** — apa yang harus dikuasai di akhir minggu.
3. **Konsep Kunci** — daftar materi inti.
4. **Lab Praktik** — latihan terpandu di kelas/sesi.
5. **Problem Set** — soal mandiri ala CS50 (psets).
6. **Mini-Project** — satu proyek kecil untuk menyatukan konsep.
7. **Sumber Belajar** — video, bacaan, dokumentasi.
8. **Checklist Siap Lanjut** — penanda kesiapan ke minggu berikutnya.

---

## Persiapan & Alat

| Kebutuhan | Pilihan yang Disarankan |
|-----------|-------------------------|
| Bahasa | **Python 3.12+** |
| Editor | **VS Code** (gratis, ekstensi Python) |
| Coding online (tanpa instalasi) | **CS50 Codespace / Replit / Google Colab** |
| Notebook untuk data & AI | **Jupyter / Google Colab** |
| Version control | **Git + GitHub** (dikenalkan bertahap mulai Minggu 03) |
| AI assistant (tutor) | **Claude / GitHub Copilot** — untuk menjelaskan & debug |

> **Tips pemula:** Mulai dari coding online (Colab/Codespace) supaya tidak terhambat instalasi. Pindah ke setup lokal (VS Code) sekitar Minggu 03–04 setelah nyaman.

---

## Penilaian (Opsional, untuk mengukur progres)

- **Problem Set (50%)** — soal mingguan, fokus pada kebenaran & gaya kode.
- **Mini-Project (20%)** — proyek kecil tiap modul.
- **Partisipasi & Refleksi (10%)** — catatan belajar / jurnal mingguan.
- **Capstone (20%)** — proyek akhir.

Sertai setiap submission dengan **refleksi singkat**: apa yang sulit, bagaimana menyelesaikannya, apa yang masih membingungkan.

---

## Cara Memakai Repo Ini

1. Mulai dari [Minggu 00](curriculum/week-00-computational-thinking.md).
2. Kerjakan modul secara berurutan — tiap modul mengandalkan yang sebelumnya.
3. Jangan loncat ke kode sebelum paham konsep; jangan berhenti di konsep tanpa menulis kode.
4. Simpan semua latihan & proyek di repo ini (buat folder per minggu).

---

## Sumber Utama

- **CS50x Harvard** — https://cs50.harvard.edu/x/
- **CS50's Introduction to Programming with Python** — https://cs50.harvard.edu/python/
- **Python Docs** — https://docs.python.org/3/
- **Automate the Boring Stuff with Python** — https://automatetheboringstuff.com/

---

*Selamat datang di computer science, Tazkia! Pelan-pelan, konsisten, dan nikmati prosesnya.*
