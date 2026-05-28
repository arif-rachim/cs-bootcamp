# Minggu 04 — Algoritma & Big O

> **Padanan CS50:** Week 3 (Algorithms). Topik inti CS: bagaimana memilih cara yang benar *dan* efisien.

## Tujuan Pembelajaran
- Mengimplementasikan **linear search** dan **binary search**.
- Memahami & mengimplementasikan algoritma sorting (**bubble, selection, insertion, merge**).
- Menganalisis efisiensi dengan **notasi Big O** (O(1), O(log n), O(n), O(n log n), O(n²)).
- Memahami **rekursi** dan kapan memakainya.
- Membandingkan trade-off waktu vs. memori.

## Konsep Kunci
- Searching: linear vs. binary (kenapa binary butuh data terurut).
- Sorting & perbandingannya.
- Big O: best/average/worst case.
- Rekursi: base case & recursive case; bahaya infinite recursion.
- Intuisi "mengapa algoritma penting" lewat ukuran data besar.

## Lab Praktik
1. Implementasi `linear_search` & `binary_search`, ukur jumlah langkah.
2. Implementasi `bubble_sort` & `selection_sort`.
3. Versi rekursif dari faktorial & fibonacci, bandingkan dengan iteratif.

## Problem Set
- **PSet 4a:** Implementasi `merge_sort` dan jelaskan kenapa O(n log n).
- **PSet 4b:** Beri label Big O untuk 8 potongan kode, sertai alasan singkat.

## Mini-Project
**"Visualisasi Pencarian"** — program yang menampilkan langkah-langkah binary search pada list angka, plus hitung perbandingan vs linear search.

## Sumber Belajar
- CS50 Lecture 3 (Algorithms): https://cs50.harvard.edu/x/weeks/3/
- "Big-O Cheat Sheet": https://www.bigocheatsheet.com/

## Checklist Siap Lanjut
- [ ] Bisa menjelaskan kapan binary search lebih cepat dari linear.
- [ ] Bisa memberi notasi Big O untuk kode sederhana.
- [ ] Paham konsep base case dalam rekursi.
