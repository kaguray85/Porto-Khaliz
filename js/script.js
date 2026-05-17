'use strict';

const root = document.documentElement;
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const year = document.getElementById('year');
const contactForm = document.getElementById('contact-form');
const formStatus = document.querySelector('[data-form-status]');
if (year) year.textContent = new Date().getFullYear();

function runPageTransition() {
  document.body.style.opacity = '0.85';
  window.setTimeout(() => { document.body.style.opacity = '1'; }, 180);
}

(function initThemeToggle() {
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  const storedTheme = localStorage.getItem('portfolio-theme');
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

  function applyTheme(theme, animate = true) {
    const selectedTheme = theme === 'light' ? 'light' : 'dark';
    root.setAttribute('data-theme', selectedTheme);
    localStorage.setItem('portfolio-theme', selectedTheme);
    toggle.setAttribute('aria-pressed', String(selectedTheme === 'light'));
    if (animate) runPageTransition();
  }

  toggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') || 'dark';
    applyTheme(current === 'light' ? 'dark' : 'light');
  });

  applyTheme(storedTheme || (prefersLight ? 'light' : 'dark'), false);
})();

(function initLocaleSwitcher() {
  const translations = {
    id: {
      navHome: 'Beranda', navAbout: 'Tentang', navSkills: 'Keahlian', navProjects: 'Proyek', navContact: 'Kontak',
      hireMe: 'Hire Me', availability: 'Tersedia untuk pekerjaan freelance', roleTitle: 'Web Developer', heroGreeting: 'Hai, saya',
      heroIntro: 'Saya membangun aplikasi web modern berperforma tinggi, dari frontend yang rapi sampai backend PHP yang solid. Kode bersih. Hasil nyata.',
      viewProjects: 'Lihat Proyek', contactMe: 'Hubungi Saya', statYearsStudy: 'Tahun Belajar', statProjectsDone: 'Proyek Selesai', statTechnologies: 'Teknologi',
      aboutTitle: 'Tentang Saya',
      aboutBioOne: 'Saya adalah <strong>Muhammad Khaliz Hakam</strong>, seorang web developer muda yang passionate dalam membangun aplikasi web modern. Saya menempuh pendidikan di Universitas Indraprasta PGRI jurusan Teknik Informatika, sebelumnya bersekolah di SMK Karya Teladan jurusan Akuntansi.',
      aboutBioTwo: 'Dengan dasar yang kuat di bidang akuntansi dan pengembangan web, saya membawa perspektif unik untuk memahami logika bisnis sekaligus membangun solusi teknologi yang efisien dan skalabel.',
      aboutBioThree: 'Saya aktif di komunitas Karang Taruna dan IRMI, yang melatih kemampuan kepemimpinan, kerja tim, dan manajemen acara saya di dunia nyata.',
      educationTitle: 'Pendidikan', experienceTitle: 'Pengalaman', skillsTitle: 'Keahlian', projectsTitle: 'Proyek', projectsIntro: 'Pilihan karya yang sedang saya bangun.',
      projectPortfolioTitle: 'Website Portofolio',
      projectPortfolioDesc: 'Website portofolio modern dengan dark/light mode, pengalih bahasa, dan animasi halus.',
      projectContactTitle: 'Manajer Kontak',
      projectContactDesc: 'Konsep sistem penyimpanan pesan dan pengelolaan data kontak untuk website pribadi.',
      projectLandingTitle: 'UI Landing Page',
      projectLandingDesc: 'Eksperimen desain landing page yang bersih, premium, dan responsif untuk brand digital.',
      contactTitle: 'Kontak', ctaIntro: 'Saya terbuka untuk proyek freelance, magang, dan peluang full-time. Mari berdiskusi!',
      nameLabel: 'Nama', emailLabel: 'Email', messageLabel: 'Pesan',
      namePlaceholder: 'Nama kamu', emailPlaceholder: 'email@example.com', messagePlaceholder: 'Tulis pesan kamu...',
      sendMessage: 'Kirim Pesan'
    },
    en: {
      navHome: 'Home', navAbout: 'About', navSkills: 'Skills', navProjects: 'Projects', navContact: 'Contact',
      hireMe: 'Hire Me', availability: 'Available for freelance work', roleTitle: 'Web Developer', heroGreeting: "Hi, I'm",
      heroIntro: 'I build high-performance modern web applications, from sleek frontends to robust PHP backends. Clean code. Tangible results.',
      viewProjects: 'View Projects', contactMe: 'Contact Me', statYearsStudy: 'Years Study', statProjectsDone: 'Projects Done', statTechnologies: 'Technologies',
      aboutTitle: 'About Me',
      aboutBioOne: 'I am <strong>Muhammad Khaliz Hakam</strong>, a young web developer passionate about building modern web applications. I study Informatics Engineering at Universitas Indraprasta PGRI, after graduating from SMK Karya Teladan in Accounting.',
      aboutBioTwo: 'With a strong foundation in accounting and web development, I bring a practical perspective to business logic while building efficient and scalable technology solutions.',
      aboutBioThree: 'I am active in Karang Taruna and IRMI communities, where I continue to grow my leadership, teamwork, and real-world event management skills.',
      educationTitle: 'Education', experienceTitle: 'Experience', skillsTitle: 'Skills', projectsTitle: 'Projects', projectsIntro: "A selection of what I've been building.",
      projectPortfolioTitle: 'Portfolio Website',
      projectPortfolioDesc: 'A modern portfolio website with dark/light mode, a language switcher, and smooth animations.',
      projectContactTitle: 'Contact Manager',
      projectContactDesc: 'A concept for storing messages and managing contact data for a personal website.',
      projectLandingTitle: 'Landing Page UI',
      projectLandingDesc: 'A clean, premium, and responsive landing page design experiment for a digital brand.',
      contactTitle: 'Contact', ctaIntro: "I'm open to freelance projects, internships, and full-time opportunities. Let's talk!",
      nameLabel: 'Name', emailLabel: 'Email', messageLabel: 'Message',
      namePlaceholder: 'Your name', emailPlaceholder: 'email@example.com', messagePlaceholder: 'Write your message...',
      sendMessage: 'Send Message'
    }
  };

  const buttons = document.querySelectorAll('[data-locale]');
  const textTargets = document.querySelectorAll('[data-locale-key]');
  const htmlTargets = document.querySelectorAll('[data-locale-html]');
  const placeholderTargets = document.querySelectorAll('[data-locale-placeholder]');

  function applyLocale(locale, animate = true) {
    const dictionary = translations[locale] || translations.id;
    root.lang = locale === 'id' ? 'id' : 'en';
    textTargets.forEach(target => {
      const key = target.dataset.localeKey;
      if (dictionary[key]) target.textContent = dictionary[key];
    });
    htmlTargets.forEach(target => {
      const key = target.dataset.localeHtml;
      if (dictionary[key]) target.innerHTML = dictionary[key];
    });
    placeholderTargets.forEach(target => {
      const key = target.dataset.localePlaceholder;
      if (dictionary[key]) target.placeholder = dictionary[key];
    });
    buttons.forEach(button => {
      const active = button.dataset.locale === locale;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    localStorage.setItem('portfolio-locale', locale);
    if (animate) runPageTransition();
  }

  buttons.forEach(button => button.addEventListener('click', () => applyLocale(button.dataset.locale)));
  applyLocale(localStorage.getItem('portfolio-locale') || 'id', false);
})();

window.addEventListener('scroll', () => {
  if (!navbar) return;
  navbar.classList.toggle('scrolled', window.scrollY > 30);
}, { passive: true });

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
  navMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }));
}

if (contactForm && formStatus) {
  contactForm.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const locale = root.lang === 'en' ? 'en' : 'id';
    const subject = locale === 'en' ? 'Portfolio inquiry' : 'Pertanyaan dari portfolio';
    const body = [
      `${locale === 'en' ? 'Name' : 'Nama'}: ${formData.get('name')}`,
      `Email: ${formData.get('email')}`,
      '',
      String(formData.get('message') || '')
    ].join('\n');
    const mailto = `mailto:khalizhakam85@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    formStatus.className = 'form-status is-success';
    formStatus.textContent = locale === 'en'
      ? 'Your email app will open to send this message.'
      : 'Aplikasi email akan dibuka untuk mengirim pesan Anda.';
    window.location.href = mailto;
  });
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.16 });

document.querySelectorAll('.reveal-up, .reveal-right').forEach(el => observer.observe(el));

