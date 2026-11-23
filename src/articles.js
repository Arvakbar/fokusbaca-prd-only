export const articles = [
  {
    slug: 'tiket-gunung-buthak-via-kota-batu',
    category: 'Perjalanan',
    date: '2026-11-10',
    title: 'Ilustrasi Harga Tiket Gunung Buthak via Kota Batu',
    summary: 'Contoh cara membaca rincian tiket pendakian, membedakan biaya masuk dan parkir, serta memeriksa ulang tarif melalui pengelola jalur.',
    sampleLabel: 'Data tiket ilustratif',
    sampleNotice: 'Data tiket ilustratif. Tarif resmi dan terkini perlu dikonfirmasi kepada pengelola jalur.',
    facts: [
      { label: 'Tiket masuk contoh', value: 'Rp25.000 per orang (ilustrasi)', section: 'harga-tiket' },
      { label: 'Parkir motor contoh', value: 'Rp10.000 per kendaraan (ilustrasi)', section: 'biaya-tambahan' },
      { label: 'Verifikasi', value: 'Tanyakan tarif terkini kepada pengelola jalur', section: 'verifikasi' },
    ],
    sections: [
      {
        id: 'harga-tiket',
        title: 'Harga tiket dalam skenario contoh',
        paragraphs: [
          'Dalam skenario ilustratif ini, seorang pendaki memilih jalur Gunung Buthak via Kota Batu. Tiket masuk contoh bernilai Rp25.000 per orang. Angka itu dibuat untuk demonstrasi dan tidak mewakili tarif resmi atau harga terkini.',
          'Satuan “per orang” berarti setiap anggota rombongan dihitung terpisah. Dalam contoh ini, dua orang mengalikan tarif tersebut dengan dua sehingga biaya masuk ilustratif menjadi Rp50.000. Biaya lain dihitung sesuai satuannya masing-masing.',
        ],
      },
      {
        id: 'biaya-tambahan',
        title: 'Biaya yang dihitung terpisah',
        paragraphs: [
          'Contoh biaya parkir motor adalah Rp10.000 per kendaraan. Jika dua orang datang dengan satu motor, komponen parkir dihitung satu kali. Total tiket dan parkir dalam simulasi tersebut adalah Rp60.000. Seluruh angka pada contoh ini bersifat ilustratif.',
          'Catat komponen biaya secara terpisah agar mudah diperiksa kembali. Jika melihat daftar tarif dari pengelola, perhatikan apakah ada perbedaan menurut hari, kendaraan, atau ketentuan reservasi.',
        ],
      },
      {
        id: 'verifikasi',
        title: 'Cara memeriksa tarif sebelum berangkat',
        paragraphs: [
          'Hubungi pengelola jalur melalui kanal resminya untuk menanyakan tarif masuk, satuan biaya, dan ketentuan yang berlaku pada tanggal rencana pendakian. Sebutkan jalur yang akan dipakai agar informasinya sesuai dengan perjalanan.',
          'Simpan catatan berisi sumber, tanggal pengecekan, dan rincian biaya yang dikonfirmasi. Jika rencana berubah, periksa kembali ketentuannya sebelum memakai catatan tersebut.',
        ],
      },
    ],
  },
  {
    slug: 'membaca-peta-jalur-pejalan-kaki',
    category: 'Perjalanan',
    date: '2026-11-09',
    title: 'Membaca Peta Jalur Pejalan Kaki',
    summary: 'Kenali penanda arah, perkirakan jarak dari skala peta, dan siapkan rute cadangan sebelum berjalan.',
    facts: [
      { label: 'Mulai dari', value: 'Titik awal dan penanda yang mudah dikenali', section: 'penanda' },
      { label: 'Perkiraan jarak', value: 'Ukur sepanjang jalur dengan skala peta', section: 'jarak' },
    ],
    sections: [
      { id: 'penanda', title: 'Tandai titik awal dan tujuan', paragraphs: ['Cari posisi awal lalu temukan tujuan pada peta. Pilih penanda yang mudah dikenali di sepanjang jalan, misalnya persimpangan besar atau jembatan. Gunakan legenda agar simbol yang mirip tidak tertukar.', 'Ketika tiba di sebuah persimpangan, sejajarkan arah peta dengan posisi di lapangan. Periksa apakah penanda berikutnya berada di sisi jalan yang sesuai dengan perkiraan.'] },
      { id: 'jarak', title: 'Gunakan skala untuk memperkirakan jarak', paragraphs: ['Ikuti garis jalur pada peta dan pecah belokan menjadi beberapa segmen pendek. Jumlahkan hasil pengukuran lalu baca padanannya pada skala. Jalur yang berbelok dapat memerlukan waktu lebih lama dari perkiraan berdasarkan garis lurus.', 'Tentukan satu rute cadangan yang memiliki penanda jelas. Jika salah satu ruas ditutup, kembali ke persimpangan terakhir yang sudah dikenali sebelum memilih arah lain.'] },
    ],
  },
  {
    slug: 'menyusun-catatan-bacaan',
    category: 'Literasi',
    date: '2026-11-08',
    title: 'Menyusun Catatan Setelah Membaca',
    summary: 'Buat catatan singkat yang memisahkan gagasan utama, detail pendukung, dan pertanyaan yang masih terbuka.',
    facts: [
      { label: 'Satu kalimat', value: 'Tulis gagasan utama dengan kata sendiri', section: 'gagasan' },
      { label: 'Untuk dibaca ulang', value: 'Catat sumber dan satu pertanyaan lanjutan', section: 'pertanyaan' },
    ],
    sections: [
      { id: 'gagasan', title: 'Mulai dari gagasan utama', paragraphs: ['Setelah membaca, tutup halaman sejenak dan coba jelaskan pokok bacaan dalam satu kalimat. Buka kembali halaman untuk memeriksa apakah kalimat itu masih mencerminkan isi bacaan.', 'Tambahkan dua atau tiga detail yang menjelaskan gagasan itu. Beri tanda pada bagian yang perlu dibaca lagi ketika rincian seperti angka atau urutan kejadian penting untuk diingat.'] },
      { id: 'pertanyaan', title: 'Sisakan ruang untuk pertanyaan', paragraphs: ['Tulis satu hal yang masih ingin diketahui. Pertanyaan memberi arah saat kembali ke artikel atau memeriksa sumber lain. Tambahkan judul dan tanggal sumber agar catatan dapat ditelusuri kembali.'] },
    ],
  },
  {
    slug: 'ruang-baca-di-rumah',
    category: 'Keseharian',
    date: '2026-11-07',
    title: 'Menata Sudut Baca di Rumah',
    summary: 'Manfaatkan tempat duduk, periksa pantulan cahaya, dan siapkan ruang untuk meletakkan bahan bacaan.',
    facts: [
      { label: 'Pencahayaan', value: 'Periksa pantulan dari posisi duduk', section: 'cahaya' },
      { label: 'Permukaan', value: 'Sediakan tempat untuk bacaan dan catatan', section: 'perlengkapan' },
    ],
    sections: [
      { id: 'cahaya', title: 'Periksa cahaya dari tempat duduk', paragraphs: ['Buka buku atau layar di tempat yang ingin dipakai untuk membaca. Perhatikan apakah cahaya jendela atau lampu memantul pada bagian yang sedang dibaca. Coba ubah arah tempat duduk sedikit dan bandingkan hasilnya.', 'Periksa sudut tersebut pada waktu yang biasa digunakan untuk membaca. Posisi yang nyaman pada pagi hari mungkin perlu penyesuaian ketika cahaya berubah pada sore hari.'] },
      { id: 'perlengkapan', title: 'Letakkan perlengkapan dalam jangkauan', paragraphs: ['Sisakan tempat untuk bacaan dan catatan di permukaan yang mudah dijangkau. Penanda halaman atau buku catatan kecil bisa ditaruh di tempat yang sama agar mudah ditemukan ketika dibutuhkan.'] },
    ],
  },
  {
    slug: 'mengenali-konteks-angka',
    category: 'Literasi',
    date: '2026-11-06',
    title: 'Mengenali Konteks Angka dalam Artikel',
    summary: 'Periksa satuan, rentang waktu, dan dasar perbandingan supaya angka dalam artikel bisa dipahami dengan tepat.',
    facts: [
      { label: 'Tiga detail', value: 'Satuan, periode, dan cakupan angka', section: 'satuan' },
      { label: 'Perbandingan', value: 'Cocokkan dasar pengukuran', section: 'perbandingan' },
    ],
    sections: [
      { id: 'satuan', title: 'Baca satuan bersama angkanya', paragraphs: ['Angka yang berdiri sendiri sulit diartikan. Saat membaca jumlah pengunjung, periksa apakah perhitungan mencakup satu hari, satu bulan, atau satu kegiatan. Lihat juga apakah cakupannya satu lokasi atau beberapa lokasi.', 'Catat satuan bersama angkanya agar konteks tidak hilang saat informasi dipindahkan ke catatan atau digunakan kembali dalam tugas.'] },
      { id: 'perbandingan', title: 'Periksa dasar perbandingan', paragraphs: ['Sebelum membandingkan dua angka, cocokkan cakupan dan rentang waktunya. Periksa apakah sumber menjelaskan perubahan metode pengukuran. Catat perbedaan yang ditemukan ketika menjelaskan hasil perbandingan.'] },
    ],
  },
  {
    slug: 'daftar-bawaan-perjalanan-singkat',
    category: 'Keseharian',
    date: '2026-11-05',
    title: 'Daftar Bawaan untuk Perjalanan Singkat',
    summary: 'Susun bawaan menurut kegiatan yang direncanakan dan simpan barang yang sering dipakai di tempat yang mudah dijangkau.',
    facts: [
      { label: 'Awali dari', value: 'Kegiatan, durasi, dan kondisi perjalanan', section: 'kegiatan' },
      { label: 'Sebelum berangkat', value: 'Periksa isi dan akses ke barang penting', section: 'periksa' },
    ],
    sections: [
      { id: 'kegiatan', title: 'Pilih bawaan berdasarkan kegiatan', paragraphs: ['Mulai dengan menulis kegiatan utama, durasi, dan kondisi lokasi yang akan dikunjungi. Susun daftar dari kebutuhan yang dapat diperkirakan, lalu beri tanda pada barang yang perlu disiapkan lebih awal.', 'Gunakan satu daftar untuk mengurangi pengecekan berulang. Jika jadwal berubah, sesuaikan barang yang terkait dengan kegiatan tersebut.'] },
      { id: 'periksa', title: 'Periksa isi dan letak barang', paragraphs: ['Saat memasukkan barang ke tas, tandai setiap item yang sudah masuk. Letakkan barang yang sering digunakan di tempat yang mudah ditemukan tanpa perlu membongkar isi tas.', 'Sebelum berangkat, baca kembali daftar singkatnya dan periksa barang yang digunakan sebelum keluar rumah. Dengan begitu, barang yang belum dimasukkan mudah terlihat.'] },
    ],
  },
]
