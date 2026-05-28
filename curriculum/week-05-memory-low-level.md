# Minggu 05 — Memory & Low-Level (dengan C)

> **Padanan CS50:** Week 4 (Memory) + pengantar Week 5 (linked list). Ini satu-satunya modul yang memakai **C**, sengaja dipilih untuk membangun mental model "apa yang sebenarnya terjadi di mesin" — kontribusi paling khas dari CS50 yang tak tergantikan oleh Python.

## Kenapa Modul Ini Ada
Python menyembunyikan memori dari kita (itu kelebihannya). Tapi sebagai calon sarjana CS di Fasilkom UI, Tazkia akan ketemu C, pointer, dan organisasi komputer di mata kuliah wajib. Mencicipinya sekarang membuat banyak hal "klik": kenapa list di Python bisa berubah lewat alias, kenapa program bisa lambat/boros memori, dan apa yang terjadi di balik `dict` & `list`. Setelah modul ini kita **kembali ke Python** dan tidak lagi memakai C secara intensif.

## Tujuan Pembelajaran
- Memahami **bagaimana data disimpan di memori**: bit, byte, alamat (address).
- Memahami & memakai **pointer** di C (`*`, `&`, dereference).
- Memahami **array sebagai blok memori berurutan** dan hubungannya dengan pointer.
- Membedakan **stack vs heap**, serta **alokasi manual** (`malloc`/`free`).
- Mengenali **memory leak** & dangling pointer, dan kenapa itu bahaya.
- Membangun **linked list** sederhana dari nol memakai pointer & struct.
- Menghubungkan semua ini kembali ke perilaku **referensi di Python**.

## Konsep Kunci
- Model memori: alamat, ukuran tipe data (`sizeof`), representasi byte.
- Pointer: deklarasi, dereference, pointer ke variabel.
- Array & aritmatika pointer; string di C sebagai array `char` diakhiri `\0`.
- Stack (variabel lokal, otomatis) vs heap (alokasi dinamis, manual).
- `malloc`, `free`, dan disiplin "yang dialokasikan harus dibebaskan".
- Struct (`struct`) untuk mengelompokkan data.
- Linked list: node berisi data + pointer ke node berikutnya.
- **Jembatan ke Python:** kenapa `b = a` membuat dua nama menunjuk objek yang sama (aliasing), dan kenapa `int`/`str` terasa "berbeda" dari `list`.

## Lab Praktik (di C)
1. Cetak alamat sebuah variabel dengan `&`, lalu akses nilainya lewat pointer.
2. Tunjukkan `sizeof` untuk `int`, `char`, `double`, dan sebuah array.
3. "Tukar nilai dua variabel" (`swap`) — pertama tanpa pointer (gagal), lalu dengan pointer (berhasil). Diskusikan kenapa.
4. Alokasi array dinamis dengan `malloc`, isi, cetak, lalu `free`.

## Problem Set
- **PSet 5a:** Tulis fungsi C `int* buat_array(int n)` yang mengalokasikan & mengisi array 1..n di heap; pastikan ada `free` di pemanggil (tidak ada leak).
- **PSet 5b:** Implementasi **singly linked list** dengan operasi `tambah_depan`, `cetak`, dan `bebaskan_semua`. Jelaskan dalam komentar apa yang terjadi di memori saat menambah node.
- **PSet 5c (refleksi):** Tulis 1 paragraf yang menghubungkan pointer di C dengan perilaku referensi/aliasing di Python.

## Mini-Project
**"Visualisasi Memori Linked List"** — program C yang membangun linked list dari input pengguna, lalu mencetak setiap node beserta **alamat memorinya** dan alamat node berikutnya, sehingga "rantai" pointer terlihat jelas.

## Catatan Teknis
- Kompilasi dengan `clang`/`gcc`; CS50 menyediakan `make` & library `cs50.h` (opsional).
- Pakai **CS50 Codespace** atau Replit (template C) supaya tidak perlu setup toolchain lokal.
- Jalankan **`valgrind`** (jika tersedia) untuk mendeteksi memory leak — pengalaman yang sangat mendidik.

## Sumber Belajar
- CS50 Lecture 4 (Memory): https://cs50.harvard.edu/x/weeks/4/
- CS50 Lecture 5 (Data Structures — linked list dengan pointer): https://cs50.harvard.edu/x/weeks/5/
- "Pointers" — Beej's Guide to C (referensi ramah): https://beej.us/guide/bgc/

## Checklist Siap Lanjut
- [ ] Bisa menjelaskan apa itu pointer dan kapan memakai `*` vs `&`.
- [ ] Paham beda stack & heap, serta kenapa `malloc` harus diikuti `free`.
- [ ] Bisa membangun & membebaskan linked list sederhana di C.
- [ ] Bisa menjelaskan kaitan pointer C dengan referensi di Python.
