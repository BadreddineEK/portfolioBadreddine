/* ===========================================
   PORTFOLIO — script.js
   =========================================== */

/* --- Highlight nav actif au scroll --- */
(function () {
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav-links a');
  function onScroll() {
    var scrollY = window.scrollY + 100;
    var current = '';
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

/* --- Switch FR / EN --- */
(function () {
  var btn = document.getElementById('langBtn');
  var html = document.documentElement;
  var lang = 'fr';

  function applyLang(l) {
    lang = l;
    html.setAttribute('data-lang', l);
    btn.textContent = l === 'fr' ? 'EN' : 'FR';

    /* Tous les elements avec data-fr / data-en */
    document.querySelectorAll('[data-fr][data-en]').forEach(function (el) {
      var val = l === 'fr' ? el.getAttribute('data-fr') : el.getAttribute('data-en');
      /* Si l'element contient du HTML (strong, etc.) on utilise innerHTML */
      if (val && val.indexOf('<') !== -1) {
        el.innerHTML = val;
      } else if (val) {
        el.textContent = val;
      }
    });

    /* Cas special : hero-desc contient des <strong> => utiliser data-fr/en directement sur le <p> */
    var heroDesc = document.querySelector('.hero-desc');
    if (heroDesc) {
      var val = l === 'fr' ? heroDesc.getAttribute('data-fr') : heroDesc.getAttribute('data-en');
      if (val) heroDesc.innerHTML = val;
    }

    /* Timeline : les <p> dans tl-content ont aussi data-fr/en */
    document.querySelectorAll('.tl-content p[data-fr], .tl-content h4[data-fr]').forEach(function(el) {
      var val = l === 'fr' ? el.getAttribute('data-fr') : el.getAttribute('data-en');
      if (val && val.indexOf('<') !== -1) el.innerHTML = val;
      else if (val) el.textContent = val;
    });
  }

  btn.addEventListener('click', function () {
    applyLang(lang === 'fr' ? 'en' : 'fr');
  });
})();
