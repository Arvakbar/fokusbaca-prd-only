# Changelog

## Belum dirilis

### 24 November 2026 · Eksperimen A, PRD Only

- Implementasi dan pengujian MVP berlangsung sekitar 04.11–04.17 WIB. Dua prompt tindak lanjut meminta pembacaan ulang README.md sebelum implementasi dimulai. README.md versi 1.0 menjadi satu-satunya spesifikasi produk.
- Menambahkan enam artikel demonstrasi orisinal, daftar responsif, pencarian langsung berdasarkan judul, ringkasan, atau kategori, serta aksi untuk mengosongkan pencarian.
- Menambahkan detail artikel, panel informasi kunci dengan tautan ke subjudul, navigasi kembali yang mempertahankan pencarian, dan halaman untuk rute artikel yang tidak valid.
- Menambahkan mode fokus dan tiga ukuran teks. Kontrol berada di luar area gulir artikel. Perubahan ukuran memulihkan bagian teks yang sedang terlihat. Preferensi disimpan di browser.
- Menambahkan label data tiket ilustratif di daftar, detail, dan rincian nominal. Menempatkan label pada data artikel agar tetap mengikuti artikel saat urutan daftar berubah.
- Mengatur bahasa dokumen ke Bahasa Indonesia dan judul halaman sesuai rute.

### Hasil pengujian

- `npm run lint` lulus. `npm run build` lulus dan menghasilkan `dist/`.
- Chrome melalui Playwright pada build lokal, dengan viewport 360 × 740, 768 × 1024, dan 1366 × 768. Tidak ditemukan error runtime atau permintaan ke origin eksternal pada alur yang diuji. Peristiwa `load` pada pengulangan terakhir tercatat 41–44 ms secara lokal.
- Pemeriksaan visual tangkapan layar dilakukan untuk daftar desktop dan detail mobile dengan ukuran teks besar. Rasio terendah di antara pasangan warna teks utama yang diperiksa adalah 5,83:1.

| Kriteria | Hasil | Pemeriksaan |
| --- | --- | --- |
| AC-01 (P1) | Lulus | Pada ketiga viewport, area kontrol berada di luar batas area gulir bacaan. |
| AC-02 (P1) | Lulus | Tautan di akhir artikel dapat dicapai setelah menggulir bacaan tanpa menutup overlay. |
| AC-03 (P1) | Lulus | Enter mengaktifkan dan Space menonaktifkan mode fokus. Isi, URL, dan posisi gulir tetap sama. |
| AC-04 (P2) | Lulus | Enam judul dapat dibuka dari daftar dan masing-masing detail memiliki ringkasan. |
| AC-05 (P2) | Lulus | Pencarian judul, kategori, dan ringkasan diperiksa, termasuk kapitalisasi, spasi tepi, dan pencarian kosong. |
| AC-06 (P2) | Lulus | Detail memiliki judul, ringkasan, subjudul, isi, dan panel informasi kunci. |
| AC-07 (P2) | Lulus | Ukuran isi 16, 19, dan 23 px berfungsi pada ketiga viewport tanpa overflow horizontal. Posisi kalimat saat perubahan ukuran juga diuji di mobile. |
| AC-08 (P2) | Lulus | Ketiga tautan fakta tiket memindahkan fokus ke subjudul terkait. Tautan bagian tetap berfungsi setelah memuat ulang halaman. |
| AC-09 (P3) | Lulus | Tautan kembali dan tombol Back browser membuka daftar serta mempertahankan kata kunci. |
| AC-10 (P2) | Lulus | Fokus keyboard terlihat. Pencarian, tautan bagian, kontrol ukuran, dan mode fokus dapat digunakan dengan keyboard. |
| AC-11 (P2) | Lulus | Hasil kosong dan slug yang tidak valid masing-masing menyediakan aksi kembali ke daftar. |
| AC-12 (P1) | Lulus | Label ilustrasi tampil di daftar dan detail. Panel membedakan nominal contoh dan langkah verifikasi tarif resmi. |

### Di luar verifikasi lokal

- Repository GitHub dan deployment publik belum tersedia. Pengukuran loading pada hosting publik dan uji usability dengan peserta belum dilakukan.

### Pemeriksaan awal

- Sebelum PRD tersedia, lint dan build lulus pada template awal React + Vite.
