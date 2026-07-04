# My Personal Web

Portfolio website built with React, Vite, Tailwind CSS, and Material Tailwind.

## Deskripsi

Situs ini adalah personal portfolio yang menampilkan:

- Hero section dengan animasi dan navigasi
- Informasi profil dan ringkasan diri
- Bagian resume / pengalaman
- Daftar proyek yang di-generate secara otomatis
- Form kontak dengan EmailJS

## Fitur

- React 18 + Vite untuk pengalaman pengembangan yang cepat
- Tailwind CSS untuk styling modern
- Material Tailwind untuk komponen UI
- Routing dengan `react-router-dom`
- Animasi menggunakan `framer-motion`
- Pembuatan data proyek otomatis melalui `src/scripts/generateProjects.js`

## Instalasi

```bash
npm install
```

## Menjalankan di mode development

```bash
npm run dev
```

Skrip `predev` sudah otomatis menjalankan `npm run generate:projects` sebelum `dev` berjalan.

## Build produksi

```bash
npm run build
```

Skrip `prebuild` juga otomatis menjalankan `npm run generate:projects` sebelum build.

## Scripts

- `npm run dev` - jalankan server development Vite
- `npm run build` - build project untuk produksi
- `npm run preview` - preview hasil build lokal
- `npm run lint` - jalankan ESLint untuk memeriksa kode
- `npm run generate:projects` - generate file `src/data/projects.json`

## Struktur Proyek

- `src/main.jsx` - entry point aplikasi
- `src/App.jsx` - routing utama
- `src/section/` - komponen section untuk halaman
- `src/assets/images/` - asset gambar
- `src/data/projects.json` - data proyek yang di-generate
- `src/scripts/generateProjects.js` - skrip pembuat data proyek

## Teknologi

- React
- Vite
- Tailwind CSS
- Material Tailwind
- React Router DOM
- Framer Motion
- EmailJS

## Catatan

Pastikan file environment dan konfigurasi EmailJS sudah diatur dengan benar jika ingin menggunakan form kontak.
