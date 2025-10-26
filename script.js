// Mobile nav toggle
const toggle = document.querySelector('.nav__toggle');
const menu = document.getElementById('navMenu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Smooth scroll for in‑page links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    const target = id && document.querySelector(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      menu && menu.classList.remove('open');
      toggle && toggle.setAttribute('aria-expanded', 'false');
    }
  });
});

// Countdown to 24 Oct 2025, 11:00 AM IST
const START_DATE = new Date(Date.UTC(2025, 9, 24, 5, 30, 0)); // 11:00 IST = 05:30 UTC
const els = { d: document.getElementById('d'), h: document.getElementById('h'), m: document.getElementById('m'), s: document.getElementById('s') };
function updateCountdown() {
  const diff = Math.max(0, START_DATE.getTime() - Date.now());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);
  if (els.d) els.d.textContent = String(days);
  if (els.h) els.h.textContent = String(hours).padStart(2, '0');
  if (els.m) els.m.textContent = String(mins).padStart(2, '0');
  if (els.s) els.s.textContent = String(secs).padStart(2, '0');
  if (diff === 0 && document.getElementById('countdown')) {
    document.getElementById('countdown').textContent = '';
  }
}
setInterval(updateCountdown, 1000);
updateCountdown();

// FAQ accordion
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.faq-card');
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    card.classList.toggle('open', !expanded);
  });
});

// Brochure download placeholder
const brochure = document.getElementById('downloadBrochure');
if (brochure) {
  brochure.addEventListener('click', (e) => {
    if (!brochure.getAttribute('href') || brochure.getAttribute('href') === '#') {
      e.preventDefault();
      const blob = new Blob([`AI‑VERSE Brochure\n\nSchedule, rules, tracks, and judging criteria.`], { type: 'text/plain' });
      brochure.href = URL.createObjectURL(blob);
      brochure.download = 'AI-VERSE-brochure.txt';
      brochure.click();
    }
  });
}

// Footer year
const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());

// Dynamic About Us photo rotation
const aboutUsImages = [
  'image/aboutus1.jpg',
  'image/aboutus2.jpg',
  'image/aboutus3.jpg',
  'image/aboutus4.jpg'
];
let aboutUsIndex = 0;
const aboutUsPhoto = document.getElementById('aboutUsPhoto');
if (aboutUsPhoto) {
  setInterval(() => {
    aboutUsPhoto.style.opacity = 0;
    setTimeout(() => {
      aboutUsIndex = (aboutUsIndex + 1) % aboutUsImages.length;
      aboutUsPhoto.src = aboutUsImages[aboutUsIndex];
      aboutUsPhoto.style.opacity = 1;
    }, 600);
  }, 3000);
}

// Registration handler removed


