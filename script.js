/* ===========================================
   PORTFOLIO — script.js
   =========================================== */

/* Highlight lien nav actif au scroll */
(function () {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  function onScroll() {
    const scrollY = window.scrollY + 100;
    let current = '';
    sections.forEach(function (s) {
      if (scrollY >= s.offsetTop) current = s.getAttribute('id');
    });
    navLinks.forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
