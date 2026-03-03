/* =============================================
   PORTFOLIO — script.js
   ============================================= */

/**
 * Highlight nav link actif au scroll
 */
(function () {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  function onScroll() {
    const scrollY = window.scrollY + 80;
    let current = '';

    sections.forEach((section) => {
      if (scrollY >= section.offsetTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/**
 * Apparition progressive des cartes au scroll (IntersectionObserver)
 */
(function () {
  const cards = document.querySelectorAll('.card, .skill-chip, .stat-box');

  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  cards.forEach((el) => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
})();
