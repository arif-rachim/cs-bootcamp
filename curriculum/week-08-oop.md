# Minggu 08 — Pemrograman Berorientasi Objek (OOP)

> **Padanan CS50:** Week 6 (Python / OOP). Cara memodelkan dunia nyata dalam kode — penting untuk proyek besar & framework AI nanti.

## Tujuan Pembelajaran
- Mendefinisikan **class** dan membuat **object** (instance).
- Memakai `__init__`, atribut instance, dan method.
- Memahami 4 pilar OOP: **encapsulation, abstraction, inheritance, polymorphism**.
- Memakai **dunder methods** (`__str__`, `__repr__`, `__eq__`).
- Mengorganisasi kode ke dalam modul & package.

## Konsep Kunci
- Class vs object; atribut vs method.
- Inisialisasi (`__init__`) & `self`.
- Inheritance & method overriding.
- Encapsulation (atribut "privat" by convention).
- Dunder methods & properti.
- Kapan OOP cocok, kapan tidak (vs. fungsi sederhana).

## Lab Praktik
1. Class `Mahasiswa` (nama, NPM, daftar nilai) dengan method hitung IPK.
2. Class `Lingkaran`/`Persegi` dengan method `luas()` & `keliling()`.
3. Inheritance: `Hewan` → `Kucing`, `Anjing` dengan method `bersuara()` berbeda.

## Problem Set
- **PSet 8a:** Sistem `RekeningBank` dengan setor, tarik, dan validasi saldo.
- **PSet 8b:** `Deck` kartu remi: class `Kartu` & `Deck` dengan method shuffle & deal.

## Mini-Project
**"Manajemen Perpustakaan"** — class `Buku`, `Anggota`, `Perpustakaan` dengan fitur pinjam/kembali dan laporan buku tersedia.

## Sumber Belajar
- CS50P Lecture 8 (OOP): https://cs50.harvard.edu/python/weeks/8/
- Python Docs — Classes: https://docs.python.org/3/tutorial/classes.html

## Checklist Siap Lanjut
- [ ] Bisa mendesain class dengan atribut & method yang masuk akal.
- [ ] Paham inheritance & polymorphism dengan contoh.
- [ ] Bisa memakai `__init__` dan `__str__`.
