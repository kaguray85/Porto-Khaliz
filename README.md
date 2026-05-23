# 🎨 KHALIZ — Portfolio Website

Website portfolio personal dengan desain **Neubrutalism** yang modern, bold, dan profesional.

---

## 📁 Struktur File

```
portfolio/
├── index.html     → Struktur utama website
├── style.css      → Semua styling (Neubrutalism + dark/light mode)
├── script.js      → Logic: theme toggle, bahasa, hamburger, form, animasi
├── assets/
│   └── profile.jpg  ← Letakkan foto kamu di sini!
└── README.md
```

---

## 🚀 Cara Menjalankan

1. Download/extract semua file ke satu folder
2. Letakkan foto profil kamu di `assets/profile.jpg`
3. Buka `index.html` di browser — selesai!

> ✅ Tidak butuh server atau install apapun. Murni HTML, CSS, JS.

---

## 🌗 Fitur

| Fitur              | Keterangan                                      |
|--------------------|-------------------------------------------------|
| 🌞 Light / Dark Mode | Toggle tema dengan ikon matahari/bulan, disimpan di localStorage |
| 🇮🇩 / 🇬🇧 Bahasa   | Toggle Bahasa Indonesia / English, disimpan di localStorage |
| 📱 Responsive       | Mobile, tablet, laptop — semua tampil baik     |
| 🍔 Hamburger Menu   | Otomatis muncul di layar kecil (mobile)        |
| ✨ Scroll Animation | Elemen muncul perlahan saat di-scroll           |
| 📧 Contact Form     | Form kirim pesan dengan validasi & notifikasi   |

---

## ✏️ Cara Edit Konten

Buka `index.html` dan ubah bagian berikut:

- **Nama** → Cari `KHALIZ` atau `Muhammad Khaliz Hakam`
- **Email** → Cari `khalizhakam85@gmail.com`
- **No HP** → Tambahkan di section contact jika perlu
- **Proyek** → Cari `proj1.title`, `proj2.title`, `proj3.title` di `script.js`
- **Social Media** → Cari link GitHub, Instagram, LinkedIn di `index.html`

Untuk **edit teks dua bahasa**, buka `script.js` dan edit object `translations`.

---

## 🎨 Ubah Warna

Buka `style.css` dan ubah CSS variables di bagian `:root`:

```css
--accent:    #FF5733;   /* Warna utama (merah-oranye) */
--accent-2:  #FFD60A;   /* Kuning cerah */
--accent-3:  #3BFF85;   /* Hijau neon */
--bg:        #F5F0E8;   /* Background terang */
```

---

## 📸 Foto Profile

1. Siapkan foto kamu (disarankan ukuran **kotak/square**, min. 400×400px)
2. Simpan sebagai `profile.jpg`
3. Letakkan di folder `assets/`
4. Refresh browser — foto langsung muncul!

Jika foto belum ada, website akan menampilkan inisial **KH** sebagai placeholder.

---

## 📝 Catatan

- Website ini **tidak butuh backend** — form contact hanya menampilkan notifikasi
- Untuk mengirim email sungguhan, bisa gunakan [EmailJS](https://emailjs.com) atau [Formspree](https://formspree.io)
- Hosting gratis: [Netlify Drop](https://app.netlify.com/drop), [Vercel](https://vercel.com), atau [GitHub Pages](https://pages.github.com)

---

Made with ❤️ for Muhammad Khaliz Hakam
