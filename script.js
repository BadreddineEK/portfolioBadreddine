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
  if (!btn) return;
  var html = document.documentElement;
  var lang = 'fr';

  function applyLang(l) {
    lang = l;
    html.setAttribute('data-lang', l);
    btn.textContent = l === 'fr' ? 'EN' : 'FR';

    document.querySelectorAll('[data-fr][data-en]').forEach(function (el) {
      var val = l === 'fr' ? el.getAttribute('data-fr') : el.getAttribute('data-en');
      if (val && val.indexOf('<') !== -1) {
        el.innerHTML = val;
      } else if (val) {
        el.textContent = val;
      }
    });
  }

  btn.addEventListener('click', function () {
    applyLang(lang === 'fr' ? 'en' : 'fr');
  });
})();

/* --- Switch theme clair / sombre --- */
(function () {
  var t = document.querySelector('[data-tgl]');
  var r = document.documentElement;
  var mode = r.getAttribute('data-theme') ||
    (window.matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light');
  r.setAttribute('data-theme', mode);

  function icon(m) {
    if (!t) return;
    t.innerHTML = m === 'dark'
      ? '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
      : '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  }
  icon(mode);
  if (t) t.addEventListener('click', function () {
    mode = mode === 'dark' ? 'light' : 'dark';
    r.setAttribute('data-theme', mode);
    icon(mode);
  });
})();
