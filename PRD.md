# PRD - KHALIZ Portfolio Website

## 1. Ringkasan Produk

KHALIZ Portfolio Website adalah website portfolio personal untuk Muhammad Khaliz Hakam. Website ini digunakan untuk memperkenalkan profil, skill, proyek, pengalaman, pendidikan, sertifikat, kontak, dan CV yang bisa diunduh oleh pengunjung.

Produk dibuat sebagai website statis berbasis HTML, CSS, dan JavaScript agar mudah diubah, ringan, cepat, dan mudah di-deploy ke Vercel.

## 2. Tujuan

- Menampilkan identitas profesional Muhammad Khaliz Hakam secara jelas.
- Memudahkan recruiter, teman, dosen, atau calon kolaborator melihat skill dan pengalaman.
- Menyediakan tombol download CV yang mudah ditemukan.
- Menjadi portfolio yang mudah diperbarui lewat GitHub dan Vercel.
- Menjaga tampilan tetap modern, responsif, dan konsisten.

## 3. Link Penting

- GitHub account: https://github.com/kaguray85
- Repository: https://github.com/kaguray85/Porto-Khaliz
- Production website: https://porto-khaliz.vercel.app
- Deploy platform: Vercel

## 4. Target Pengguna

- Recruiter atau HR yang ingin melihat profil dan CV.
- Dosen atau pihak kampus yang ingin melihat karya mahasiswa.
- Teman, komunitas, atau calon kolaborator.
- Pemilik website sendiri saat ingin memperbarui data portfolio.

## 5. Scope Versi Saat Ini

Website saat ini mencakup:

- Navbar dengan navigasi section.
- Hero section dengan nama, role, deskripsi, foto, dan tombol `Download CV`.
- Section tentang saya.
- Section keahlian.
- Section proyek.
- Section sertifikat.
- Section pengalaman dan pendidikan.
- Section kontak dan social links.
- Footer dengan tahun terbaru.
- Toggle light/dark mode.
- Toggle bahasa Indonesia/English.
- Layout responsive.

## 6. Kebutuhan Fungsional

### 6.1 Navigasi

Pengunjung dapat berpindah ke section utama melalui navbar:

- Tentang
- Keahlian
- Proyek
- Sertifikat
- Pengalaman
- Kontak

Pada mobile, navigasi harus tampil sebagai hamburger menu.

### 6.2 Download CV

Pengunjung dapat menekan tombol `Download CV` pada kartu foto.

Kriteria:

- Tombol terlihat jelas di area hero.
- File CV disimpan di `assets/cv-khaliz.pdf`.
- Link menggunakan atribut `download`.
- Teks tombol tetap `Download CV` saat bahasa diganti.

### 6.3 Toggle Tema

Pengunjung dapat mengganti tema light/dark.

Kriteria:

- Preferensi disimpan di `localStorage`.
- Tampilan tetap terbaca di kedua tema.
- Icon tema harus berubah sesuai state.

### 6.4 Toggle Bahasa

Pengunjung dapat mengganti bahasa Indonesia dan English.

Kriteria:

- Teks yang memiliki `data-i18n` mengambil isi dari object `translations` di `script.js`.
- Preferensi bahasa disimpan di `localStorage`.
- Konten penting harus tersedia dalam dua bahasa.

### 6.5 Kontak

Website menampilkan email, WhatsApp, GitHub, Instagram, dan LinkedIn.

Kriteria:

- Link email memakai `mailto:`.
- Link WhatsApp memakai format `https://wa.me/`.
- Link external memakai `target="_blank"` dan sebaiknya `rel="noopener noreferrer"`.

## 7. Kebutuhan Non-Fungsional

- Website harus cepat dimuat karena tidak memakai framework berat.
- Website harus responsive untuk mobile, tablet, dan desktop.
- HTML, CSS, dan JavaScript harus mudah dibaca untuk pemeliharaan.
- Asset penting harus berada di folder `assets/`.
- Tidak boleh bergantung pada backend untuk tampilan utama.
- Deploy production dilakukan melalui Vercel.

## 8. Konten yang Harus Mudah Diupdate

- Foto profil: `assets/profile-khaliz.jpg`
- CV: `assets/cv-khaliz.pdf`
- Sertifikat: `assets/sertifikat-barista.png` atau asset baru
- Teks profil dan pengalaman: `index.html` dan `script.js`
- Warna dan layout: `style.css`
- Link GitHub: `https://github.com/kaguray85`
- Link production: `https://porto-khaliz.vercel.app`

## 9. Alur Update Coding dan Tampilan

1. Edit file lokal di folder `Porto-Khaliz`.
2. Buka `index.html` untuk cek perubahan.
3. Jalankan `git status`.
4. Stage file yang berubah dengan `git add`.
5. Commit perubahan.
6. Push ke GitHub branch `main`.
7. Cek deploy otomatis di Vercel.
8. Buka https://porto-khaliz.vercel.app untuk verifikasi.

## 10. Perintah Utama

```bash
git status
git add .
git commit -m "Update portfolio"
git push origin main
```

Deploy manual jika dibutuhkan:

```bash
npx vercel --prod --yes
```

## 11. Risiko dan Catatan

- Jika teks di `index.html` berubah kembali setelah load, cek `script.js` karena sistem bahasa dapat menimpa isi elemen `data-i18n`.
- Jika tampilan production belum berubah, tunggu proses deploy Vercel selesai atau lakukan hard refresh.
- Jangan commit folder `.vercel/`.
- Jangan commit file log lokal seperti `server.err.log` dan `server.out.log`.

## 12. Ide Pengembangan Berikutnya

- Tambah proyek nyata dengan link GitHub dan live demo.
- Tambah integrasi contact form sungguhan menggunakan EmailJS, Formspree, atau backend ringan.
- Tambah metadata SEO dan Open Graph image.
- Tambah halaman khusus project detail.
- Tambah analytics ringan untuk melihat jumlah pengunjung.
