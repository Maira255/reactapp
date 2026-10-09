# Mini Project React — TaskBoard

Materi yang dipakai: React JS, JSX, Component, Props, State (`useState`), Event Handling (`onClick` / `onChange`), Conditional Rendering, dan Rendering List (`map()` / `filter()`).

## Menjalankan aplikasi

1. Instal Node.js (ikuti persyaratan versi Vite terbaru bila memilih memperbarui dependensi).
2. Buka terminal di folder `proyek-mini-react`.
3. Jalankan:

```bash
npm install
npm run dev
```

4. Buka alamat localhost yang muncul di terminal (umumnya `http://localhost:5173`).

## Mencoba kode per materi

Setiap file di `contoh-materi/` adalah contoh mandiri yang bisa ditempel ke `src/App.jsx`.
**Cadangkan `src/App.jsx` asli** dahulu sebelum menggantinya. Jika sudah selesai mencoba, pulihkan App.jsx mini project.

Catatan: contoh per materi tidak menggunakan CSS khusus; hasil browser memakai gaya bawaan. Ilustrasi di PPT mempermudah visualisasi dan bukan screenshot browser yang sesungguhnya.

## Struktur

- `src/App.jsx`: state utama, filter, tambah/hapus/ubah tugas
- `src/components/TaskForm.jsx`: input tugas dan `onChange` + `onSubmit`
- `src/components/TaskItem.jsx`: komponen baris tugas dan props callback
- `src/App.css`: tata letak dan warna
- `contoh-materi/`: 8 contoh terpisah sesuai slide

## Fitur demo

- Menambahkan tugas (input kosong ditolak)
- Menandai tugas selesai/belum selesai
- Menghapus tugas
- Memfilter Semua / Aktif / Selesai
- Menampilkan pesan jika daftar pada filter kosong

Sumber: https://react.dev/learn dan https://vite.dev/guide/
