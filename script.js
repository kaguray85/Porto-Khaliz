/* ============================================================
   KHALIZ PORTFOLIO — script.js
   Fitur: Theme Toggle, Language Toggle, Hamburger Menu,
          Contact Form, Scroll Fade-in, Active Nav Link
   ============================================================ */

/* ── TRANSLATION DATA ─────────────────────────────────────── */
const translations = {
  id: {
    /* Navbar */
    "nav.about":      "Tentang",
    "nav.skills":     "Keahlian",
    "nav.projects":   "Proyek",
    "nav.certificates": "Sertifikat",
    "nav.experience": "Pengalaman",
    "nav.contact":    "Kontak",

    /* Hero */
    "hero.badge":     "👋 Halo, Saya",
    "hero.role":      "Web Developer",
    "hero.desc":      "Seorang beginner programmer yang suka membangun website yang bersih, modern, dan bermanfaat. Sedang belajar dan terus berkembang.",
    "hero.btn.projects": "Lihat Proyek",
    "hero.btn.contact":  "Hubungi Saya",
    "hero.sticker":   "Download CV",
    "hero.scroll":    "Scroll ke bawah",

    /* About */
    "about.tag":      "01",
    "about.title":    "Tentang Saya",
    "about.text":     "Halo! Saya <strong>Muhammad Khaliz Hakam</strong>, mahasiswa Teknik Informatika di Universitas Indraprasta PGRI, Jakarta. Saya memulai perjalanan di dunia programming dengan semangat besar untuk membangun website yang tidak hanya terlihat bagus, tetapi juga bermanfaat.",
    "about.text2":    "Latar belakang saya di bidang Akuntansi dari SMK Karya Teladan memberi saya kemampuan analitis yang kuat. Sekarang saya menggabungkannya dengan kecintaan saya pada teknologi untuk berkembang di dunia web development.",
    "about.studying": "Teknik Informatika",
    "about.stat.org":      "Organisasi",
    "about.stat.skills":   "Keahlian",
    "about.stat.learning": "Semangat Belajar",

    /* Skills */
    "skills.title":   "Keahlian",
    "skills.desc":    "Teknologi dan tools yang sedang saya pelajari dan gunakan.",
    "skill.basic":       "Basic",
    "skill.learning":    "Learning",
    "skill.intermediate":"Intermediate",
    "skill.good":        "Good",

    /* Projects */
    "projects.title": "Proyek",
    "projects.desc":  "Beberapa proyek yang pernah saya kerjakan dan sedang dikembangkan.",
    "proj1.title":    "Portfolio Website",
    "proj1.desc":     "Website portfolio personal dengan desain Neubrutalism yang modern dan responsif. Dilengkapi fitur dark mode dan toggle bahasa.",
    "proj2.title":    "Sistem Manajemen Data",
    "proj2.desc":     "Aplikasi web sederhana untuk manajemen data menggunakan PHP dan MySQL. Dibuat sebagai project belajar back-end development.",
    "proj3.title":    "Learning Management System",
    "proj3.desc":     "Sistem ini membantu guru mengelola materi, tugas, nilai, presensi, dan jadwal pelajaran, sementara siswa dapat mengakses pembelajaran dengan lebih mudah, terstruktur, dan fleksibel.",
    "proj.view":      "Lihat Proyek →",

    /* Certificates */
    "cert.title":        "Sertifikat",
    "cert.desc":         "Sertifikat dan pelatihan yang pernah saya ikuti.",
    "cert.badge":        "Sertifikat",
    "cert.barista.title": "Sertifikat Barista",
    "cert.barista.desc": "Pelatihan barista yang mengasah kemampuan dasar penyajian kopi, pelayanan, dan standar kerja profesional.",

    /* Experience */
    "exp.title":          "Pengalaman & Pendidikan",
    "exp.group.experience": "Pengalaman",
    "exp.group.education":  "Pendidikan",
    "exp.badge.work":     "Kerja",
    "exp.badge.org":      "Organisasi",
    "exp.badge.edu":      "Pendidikan",
    "exp.role.anggota":   "Anggota Tim",
    "exp.role.accountancy": "Jurusan Akuntansi",
    "exp.role.ti":        "Teknik Informatika",
    "exp.now":            "Sekarang",
    "exp.desc1":          "Mengembangkan kemampuan dalam Akuntansi menggunakan Microsoft Excel. Terlibat langsung dalam lingkungan kerja profesional dan belajar bekerja dalam tim.",
    "exp.desc2":          "Mengkoordinasi acara seperti \"Sunday Market\" di lingkungan RW. Bertanggung jawab dalam penggalangan dana dan perencanaan kegiatan.",
    "exp.desc3":          "Aktif dalam kegiatan mingguan dan tahunan. Mengelola penggalangan dana dan bertanggung jawab menjaga zakat pada Idul Fitri.",
    "exp.desc4":          "Menempuh pendidikan vokasi dengan fokus pada Akuntansi. Membangun dasar yang kuat dalam logika keuangan dan analisis data.",
    "exp.desc5":          "Sedang menempuh S1 Teknik Informatika. Belajar programming, algoritma, database, dan web development untuk menjadi software developer profesional.",

    /* Contact */
    "contact.title":      "Hubungi Saya",
    "contact.desc":       "Tertarik bekerja sama atau sekadar menyapa? Kirim pesan yuk!",
    "form.name":          "Nama",
    "form.namePh":        "Nama kamu",
    "form.emailPh":       "email@kamu.com",
    "form.message":       "Pesan",
    "form.messagePh":     "Tulis pesanmu di sini...",
    "form.send":          "Kirim Pesan",

    /* Footer */
    "footer.tagline":     "Dibuat dengan ❤️ oleh Muhammad Khaliz Hakam",
    "footer.copy":        "© 2026 KHALIZ. All rights reserved.",

    /* Toast */
    "toast.success":      "✅ Pesan terkirim! Saya akan segera membalas.",
    "toast.error":        "❌ Mohon isi semua kolom terlebih dahulu.",
  },

  en: {
    /* Navbar */
    "nav.about":      "About",
    "nav.skills":     "Skills",
    "nav.projects":   "Projects",
    "nav.certificates": "Certificates",
    "nav.experience": "Experience",
    "nav.contact":    "Contact",

    /* Hero */
    "hero.badge":     "👋 Hi, I'm",
    "hero.role":      "Web Developer",
    "hero.desc":      "A beginner programmer who loves building clean, modern, and useful websites. Always learning and growing every day.",
    "hero.btn.projects": "View Projects",
    "hero.btn.contact":  "Contact Me",
    "hero.sticker":   "Download CV",
    "hero.scroll":    "Scroll down",

    /* About */
    "about.tag":      "01",
    "about.title":    "About Me",
    "about.text":     "Hi! I'm <strong>Muhammad Khaliz Hakam</strong>, an Informatics Engineering student at Universitas Indraprasta PGRI, Jakarta. I started my programming journey with a strong drive to build websites that are not just visually great, but also genuinely useful.",
    "about.text2":    "My background in Accounting from SMK Karya Teladan gave me strong analytical thinking. Now I'm combining it with my passion for technology to grow in the world of web development.",
    "about.studying": "Informatics Engineering",
    "about.stat.org":      "Organizations",
    "about.stat.skills":   "Skills",
    "about.stat.learning": "Learning Spirit",

    /* Skills */
    "skills.title":   "Skills",
    "skills.desc":    "Technologies and tools I am currently learning and using.",
    "skill.basic":       "Basic",
    "skill.learning":    "Learning",
    "skill.intermediate":"Intermediate",
    "skill.good":        "Good",

    /* Projects */
    "projects.title": "Projects",
    "projects.desc":  "Some projects I have worked on and am currently developing.",
    "proj1.title":    "Portfolio Website",
    "proj1.desc":     "A personal portfolio website with a modern and responsive Neubrutalism design. Includes dark mode and language toggle features.",
    "proj2.title":    "Data Management System",
    "proj2.desc":     "A simple web app for data management using PHP and MySQL. Built as a back-end development learning project.",
    "proj3.title":    "Learning Management System",
    "proj3.desc":     "This system helps teachers manage materials, assignments, grades, attendance, and class schedules, while students can access learning more easily, structurally, and flexibly.",
    "proj.view":      "View Project →",

    /* Certificates */
    "cert.title":        "Certificates",
    "cert.desc":         "Certificates and training programs I have completed.",
    "cert.badge":        "Certificate",
    "cert.barista.title": "Barista Certificate",
    "cert.barista.desc": "Barista training that strengthened my basic coffee preparation, service, and professional workplace standards.",

    /* Experience */
    "exp.title":          "Experience & Education",
    "exp.group.experience": "Experience",
    "exp.group.education":  "Education",
    "exp.badge.work":     "Work",
    "exp.badge.org":      "Org",
    "exp.badge.edu":      "Education",
    "exp.role.anggota":   "Team Member",
    "exp.role.accountancy": "Accounting Major",
    "exp.role.ti":        "Informatics Engineering",
    "exp.now":            "Present",
    "exp.desc1":          "Developed skills in Accounting using Microsoft Excel. Gained direct experience in a professional work environment and learned teamwork.",
    "exp.desc2":          "Coordinated events like \"Sunday Market\" in the local community. Responsible for fundraising and activity planning.",
    "exp.desc3":          "Active in weekly and annual activities. Managed fundraising and was responsible for overseeing zakat collection on Eid.",
    "exp.desc4":          "Completed vocational education focused on Accounting. Built a strong foundation in financial logic and data analysis.",
    "exp.desc5":          "Currently pursuing a Bachelor's in Informatics Engineering. Studying programming, algorithms, databases, and web development.",

    /* Contact */
    "contact.title":      "Contact Me",
    "contact.desc":       "Interested in working together or just want to say hi? Send a message!",
    "form.name":          "Name",
    "form.namePh":        "Your name",
    "form.emailPh":       "your@email.com",
    "form.message":       "Message",
    "form.messagePh":     "Write your message here...",
    "form.send":          "Send Message",

    /* Footer */
    "footer.tagline":     "Built with ❤️ by Muhammad Khaliz Hakam",
    "footer.copy":        "© 2026 KHALIZ. All rights reserved.",

    /* Toast */
    "toast.success":      "✅ Message sent! I'll get back to you soon.",
    "toast.error":        "❌ Please fill in all fields first.",
  }
};

/* ── STATE ────────────────────────────────────────────────── */
let currentTheme = localStorage.getItem("portfolio-theme") || "light";
let currentLang  = localStorage.getItem("portfolio-lang")  || "id";

/* ── APPLY THEME ─────────────────────────────────────────── */
function applyTheme(theme) {
  document.body.classList.remove("light", "dark");
  document.body.classList.add(theme);
  currentTheme = theme;
  localStorage.setItem("portfolio-theme", theme);
}

/* ── APPLY LANGUAGE ─────────────────────────────────────── */
function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("portfolio-lang", lang);

  const t = translations[lang];

  // Update all elements with data-i18n attribute
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) {
      el.innerHTML = t[key]; // use innerHTML to support <strong> tags
    }
  });

  // Update all placeholder attributes
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (t[key] !== undefined) {
      el.placeholder = t[key];
    }
  });

  // Update html lang attribute
  document.documentElement.lang = lang;

  // Update language toggle label
  document.getElementById("langLabel").textContent = lang === "id" ? "EN" : "ID";
}

/* ── THEME TOGGLE ─────────────────────────────────────────── */
document.getElementById("themeToggle").addEventListener("click", () => {
  const newTheme = currentTheme === "light" ? "dark" : "light";
  applyTheme(newTheme);
});

/* ── LANGUAGE TOGGLE ──────────────────────────────────────── */
document.getElementById("langToggle").addEventListener("click", () => {
  const newLang = currentLang === "id" ? "en" : "id";
  applyLanguage(newLang);
});

/* ── HAMBURGER MENU ───────────────────────────────────────── */
const hamburger = document.getElementById("hamburger");
const navLinks  = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navLinks.classList.toggle("open");
});

// Close mobile menu when a link is clicked
navLinks.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    navLinks.classList.remove("open");
  });
});

/* ── ACTIVE NAV LINK on scroll ───────────────────────────── */
const sections = document.querySelectorAll("section[id]");
const navLinkEls = document.querySelectorAll(".nav-link");

function updateActiveLink() {
  const scrollY = window.scrollY + 80; // offset for fixed navbar

  sections.forEach(section => {
    const top    = section.offsetTop;
    const height = section.offsetHeight;
    const id     = section.getAttribute("id");

    if (scrollY >= top && scrollY < top + height) {
      navLinkEls.forEach(link => {
        link.style.background = "";
        link.style.borderColor = "";
        link.style.boxShadow = "";

        if (link.getAttribute("href") === `#${id}`) {
          link.style.background   = "var(--accent-2)";
          link.style.borderColor  = "var(--border)";
          link.style.boxShadow    = "2px 2px 0 var(--shadow)";
        }
      });
    }
  });
}

window.addEventListener("scroll", updateActiveLink, { passive: true });

/* ── CONTACT FORM ─────────────────────────────────────────── */
document.getElementById("formSubmit").addEventListener("click", () => {
  const name    = document.getElementById("formName").value.trim();
  const email   = document.getElementById("formEmail").value.trim();
  const message = document.getElementById("formMessage").value.trim();

  const t = translations[currentLang];

  if (!name || !email || !message) {
    showToast(t["toast.error"]);
    return;
  }

  // Simulate sending (no backend)
  showToast(t["toast.success"]);

  // Clear form
  document.getElementById("formName").value    = "";
  document.getElementById("formEmail").value   = "";
  document.getElementById("formMessage").value = "";
});

/* ── TOAST NOTIFICATION ───────────────────────────────────── */
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
}

/* ── SCROLL FADE-IN ANIMATION ─────────────────────────────── */
function initFadeIn() {
  // Add fade-in class to animatable elements
  const targets = document.querySelectorAll(
    ".neu-card, .hero-text, .hero-photo-wrap, .skill-badge, .project-card, .certificate-card, .timeline-item, .section-header"
  );

  targets.forEach((el, i) => {
    el.classList.add("fade-in");
    // Stagger delay for grid items
    el.style.transitionDelay = `${(i % 6) * 60}ms`;
  });

  // IntersectionObserver for triggering animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, { threshold: 0.12 });

  targets.forEach(el => observer.observe(el));
}

/* ── NAVBAR scroll shadow ─────────────────────────────────── */
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.style.boxShadow = "0 4px 0 var(--border)";
  } else {
    navbar.style.boxShadow = "";
  }
}, { passive: true });

/* ── INIT ─────────────────────────────────────────────────── */
function init() {
  // Apply saved preferences
  applyTheme(currentTheme);
  applyLanguage(currentLang);

  // Start animations
  initFadeIn();
  updateActiveLink();
}

// Run on DOM ready
document.addEventListener("DOMContentLoaded", init);
