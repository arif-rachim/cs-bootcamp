# Minggu 13 — Pengantar Machine Learning

> **Mulai masuk AI.** Setelah fondasi CS & data kuat, kita kenalkan konsep inti machine learning secara praktis dengan **scikit-learn**.

## Tujuan Pembelajaran
- Memahami **apa itu ML** dan bedanya dengan pemrograman biasa (belajar dari data vs aturan eksplisit).
- Membedakan **supervised vs unsupervised learning**; **klasifikasi vs regresi**.
- Memahami alur ML: data → fitur → latih → evaluasi → prediksi.
- Melatih model pertama dengan **scikit-learn** (mis. regresi linear, decision tree, k-NN).
- Mengevaluasi model: **train/test split, akurasi, overfitting/underfitting**.

## Konsep Kunci
- Paradigma ML & contoh penerapan nyata.
- Fitur (features) & label (target).
- Train/test split & kenapa tak boleh menguji di data latih.
- Metrik: akurasi, precision/recall (klasifikasi); MAE/MSE (regresi).
- Overfitting & generalisasi.
- Etika data: bias, privasi, keterbatasan model.

## Lab Praktik
1. Klasifikasi bunga Iris dengan k-NN, ukur akurasi.
2. Regresi: prediksi harga rumah sederhana dari beberapa fitur.
3. Eksperimen: ubah ukuran train/test, amati efeknya pada akurasi.

## Problem Set
- **PSet 13a:** Bangun pipeline klasifikasi lengkap pada dataset pilihan (load → split → train → evaluate).
- **PSet 13b:** Tulis refleksi: di mana modelmu salah, kenapa, dan bagaimana memperbaikinya.

## Mini-Project
**"Prediktor Sederhana"** — pilih masalah klasifikasi/regresi yang relevan (mis. prediksi kelulusan dari jam belajar), latih model, dan laporkan performanya secara jujur.

## Sumber Belajar
- scikit-learn — Getting Started: https://scikit-learn.org/stable/getting_started.html
- Google ML Crash Course: https://developers.google.com/machine-learning/crash-course

## Checklist Siap Lanjut
- [ ] Paham beda supervised & unsupervised, klasifikasi & regresi.
- [ ] Bisa melatih & mengevaluasi model dengan scikit-learn.
- [ ] Paham overfitting & pentingnya train/test split.
