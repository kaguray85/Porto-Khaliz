# KHALIZ - Portfolio Website

Website portfolio personal Muhammad Khaliz Hakam dengan desain Neubrutalism yang modern, responsif, dan mudah diperbarui.

## Live Website

- Website: https://porto-khaliz.vercel.app
- Repository: https://github.com/kaguray85/Porto-Khaliz
- GitHub account: https://github.com/kaguray85
- Platform deploy: Vercel

## Fitur Utama

- Tampilan responsive untuk desktop, tablet, dan mobile.
- Light mode dan dark mode.
- Toggle bahasa Indonesia dan English.
- Section profil, skill, proyek, sertifikat, pengalaman, pendidikan, dan kontak.
- Tombol `Download CV` yang mengarah ke file PDF di `assets/cv-khaliz.pdf`.
- Animasi scroll dan hamburger menu untuk layar kecil.

## Struktur File

```text
Porto-Khaliz/
|-- index.html              # Struktur utama website
|-- style.css               # Styling, layout, warna, responsive design
|-- script.js               # Theme, bahasa, menu, form, dan animasi
|-- README.md               # Panduan proyek
|-- PRD.md                  # Product Requirements Document
|-- assets/
|   |-- favicon-khaliz.png
|   |-- profile-khaliz.jpg
|   |-- sertifikat-barista.png
|   |-- cv-khaliz.pdf
```

## Cara Menjalankan di Laptop

Website ini murni HTML, CSS, dan JavaScript. Tidak perlu install dependency.

Cara paling mudah:

1. Buka folder `Porto-Khaliz`.
2. Klik dua kali file `index.html`.
3. Website akan terbuka di browser.

Alternatif memakai server lokal:

```bash
npx serve .
```

## Cara Mengubah Konten

Edit teks utama di `index.html`.

Bagian yang sering diubah:

- Nama dan headline: cari `KHALIZ` atau `Muhammad Khaliz Hakam`.
- Foto profil: ganti file `assets/profile-khaliz.jpg`.
- CV: ganti file `assets/cv-khaliz.pdf`.
- Sertifikat: ganti atau tambah gambar di folder `assets/`.
- Link sosial media: edit bagian `contact` di `index.html`.

Untuk teks yang berubah saat toggle bahasa, edit object `translations` di `script.js`.

Contoh:

```js
"hero.sticker": "Download CV"
```

## Cara Mengubah Tampilan

Edit `style.css`.

Warna utama ada di bagian `:root`:

```css
--accent: #ff6b4a;
--accent-2: #ffd166;
--accent-3: #4ade80;
--bg: #f7f1e8;
```

Bagian penting:

- Hero dan foto profil: cari `.hero`, `.photo-card`, `.photo-sticker`.
- Tombol: cari `.btn`.
- Responsive mobile: cari `@media`.
- Footer: cari `.footer`.

## Cara Update ke GitHub

Pastikan berada di folder proyek:

```bash
cd Porto-Khaliz
```

Cek perubahan:

```bash
git status
```

Tambahkan file yang ingin disimpan:

```bash
git add index.html style.css script.js README.md PRD.md assets/cv-khaliz.pdf
```

Buat commit:

```bash
git commit -m "Update portfolio content"
```

Push ke GitHub:

```bash
git push origin main
```

Repository tujuan:

```text
https://github.com/kaguray85/Porto-Khaliz
```

## Cara Deploy atau Update Vercel

Jika project Vercel sudah terhubung ke GitHub, biasanya deploy production akan berjalan otomatis setelah `git push origin main`.

URL production:

```text
https://porto-khaliz.vercel.app
```

Jika ingin deploy manual lewat terminal:

```bash
npx vercel --prod --yes
```

Saat deploy berhasil, Vercel akan memberi URL preview dan production. Gunakan URL production utama:

```text
https://porto-khaliz.vercel.app
```

## Checklist Update Portfolio

Gunakan checklist ini setiap ingin memperbarui codingan atau tampilan:

1. Edit file yang dibutuhkan.
2. Buka `index.html` dan cek tampilannya di browser.
3. Pastikan tombol `Download CV` masih bisa membuka atau mengunduh PDF.
4. Jalankan `git status`.
5. Commit perubahan dengan pesan yang jelas.
6. Push ke `main`.
7. Cek hasil di Vercel: https://porto-khaliz.vercel.app

## Catatan

- File `.vercel/` tidak perlu di-commit karena berisi metadata lokal Vercel.
- File log seperti `server.err.log` dan `server.out.log` tidak perlu dipush.
- Contact form saat ini hanya validasi dan menampilkan notifikasi, belum mengirim email sungguhan.

Made for Muhammad Khaliz Hakam.
