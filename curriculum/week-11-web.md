# Minggu 11 — Web & API

> **Padanan CS50:** Week 8–9 (HTML/CSS/JS & Flask). Membawa program ke internet — fondasi penting untuk men-deploy aplikasi AI nanti.

## Tujuan Pembelajaran
- Memahami cara kerja web: **client-server, HTTP, request/response**.
- Membuat halaman dengan **HTML & CSS** dasar.
- Menambah interaktivitas ringan dengan **JavaScript**.
- Membangun aplikasi web & **REST API** dengan **Flask**.
- Memahami **JSON sebagai format pertukaran data** antar layanan.

## Konsep Kunci
- Anatomi web: browser, server, DNS, HTTP method (GET/POST).
- HTML (struktur) + CSS (tampilan) + JS (perilaku).
- Flask: route, template (Jinja), form, request handling.
- REST API: endpoint, status code, payload JSON.
- Memanggil API dari Python (`requests`).

## Lab Praktik
1. Buat halaman profil statis dengan HTML & CSS.
2. Aplikasi Flask "Hello": route dinamis `/halo/<nama>`.
3. Konsumsi API publik (mis. cuaca) dengan `requests`, tampilkan hasilnya.

## Problem Set
- **PSet 11a:** Form Flask: terima input pengguna, validasi, simpan ke database SQLite (gabungan Minggu 10).
- **PSet 11b:** Buat REST API kecil (`/api/buku`) yang mengembalikan data JSON dari database.

## Mini-Project
**"Aplikasi Web To-Do"** — versi web dari to-do list (Minggu 09) memakai Flask + SQLite, dengan tambah/selesai/hapus tugas via browser.

## Sumber Belajar
- CS50 Lecture 8–9 (HTML/CSS/JS, Flask): https://cs50.harvard.edu/x/weeks/9/
- Flask Quickstart: https://flask.palletsprojects.com/

## Checklist Siap Lanjut
- [ ] Paham alur request/response client-server.
- [ ] Bisa membuat aplikasi Flask dengan beberapa route.
- [ ] Bisa memanggil & membuat REST API berbasis JSON.
