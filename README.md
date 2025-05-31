# 📰 Article App

Article App adalah aplikasi web berbasis Next.js yang memungkinkan pengguna untuk membaca, menulis, dan mengelola artikel secara efisien.

## ✨ Fitur Utama

- 🔍 **Daftar Artikel**: Menampilkan semua artikel yang tersedia.
- 📝 **Buat Artikel**: Formulir untuk menambahkan artikel baru.
- ✏️ **Edit Artikel**: Kemampuan untuk mengedit artikel yang sudah ada.
- 🗑️ **Hapus Artikel**: Menghapus artikel yang tidak diperlukan.
- 🔄 **Navigasi Dinamis**: Navigasi yang responsif dan intuitif.

## 🚀 Teknologi yang Digunakan

- [Next.js 14](https://nextjs.org/): Framework React untuk pengembangan aplikasi web.
- [React](https://reactjs.org/): Library JavaScript untuk membangun antarmuka pengguna.
- [Tailwind CSS](https://tailwindcss.com/): Framework CSS untuk styling yang efisien.
- [PostCSS](https://postcss.org/): Alat untuk transformasi CSS dengan plugin JavaScript.

## 📦 Struktur Proyek

```
article-app/
├── public/             # Aset publik seperti gambar dan ikon
├── src/                # Kode sumber aplikasi
│   ├── app/            # Komponen dan halaman utama
│   ├── components/     # Komponen UI yang dapat digunakan kembali
│   └── styles/         # File CSS dan konfigurasi Tailwind
├── .gitignore          # File dan folder yang diabaikan oleh Git
├── README.md           # Dokumentasi proyek
├── jsconfig.json       # Konfigurasi JavaScript
├── next.config.mjs     # Konfigurasi Next.js
├── package.json        # Informasi proyek dan dependensi
├── postcss.config.mjs  # Konfigurasi PostCSS
└── tailwind.config.js  # Konfigurasi Tailwind CSS
```

## 🛠️ Instalasi dan Penggunaan

1. **Kloning repositori:**

   ```bash
   git clone https://github.com/mrpradana2/article-app.git
   cd article-app
   ```

2. **Instalasi dependensi:**

   Menggunakan npm:

   ```bash
   npm install
   ```

   Atau menggunakan yarn:

   ```bash
   yarn install
   ```

3. **Menjalankan server pengembangan:**

   Menggunakan npm:

   ```bash
   npm run dev
   ```

   Atau menggunakan yarn:

   ```bash
   yarn dev
   ```

4. **Akses aplikasi:**

   Buka [http://localhost:3000](http://localhost:3000) di browser Anda untuk melihat aplikasi.

## 📄 Konfigurasi Tambahan

- **Tailwind CSS**: Konfigurasi dapat ditemukan di `tailwind.config.js`.
- **PostCSS**: Konfigurasi tambahan berada di `postcss.config.mjs`.
- **Font**: Menggunakan Archivo untuk tampilan yang modern dan bersih.

## 🤝 Kontribusi

Kontribusi sangat terbuka! Jika Anda ingin berkontribusi:

1. Fork repositori ini.
2. Buat branch fitur baru: `git checkout -b fitur-baru`.
3. Commit perubahan Anda: `git commit -m 'Menambahkan fitur baru'`.
4. Push ke branch: `git push origin fitur-baru`.
5. Buat Pull Request.

## 📄 Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).

---

Dibuat oleh [Muhammad Rizki Pradana](https://github.com/mrpradana2)
