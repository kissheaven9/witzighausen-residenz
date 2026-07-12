/* Witzighausen Residenz — app.js */
(function () {
  'use strict';

  /* ---- Jahr im Footer ---- */
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  /* ---- Header: Schatten/Rahmen beim Scrollen ---- */
  var header = document.getElementById('header');
  function onScroll() {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- Mobiles Menü ---- */
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('nav');
  function closeNav() {
    if (!nav || !toggle) return;
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Menü öffnen');
  }
  function openNav() {
    if (!nav || !toggle) return;
    nav.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Menü schließen');
  }
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      if (nav.classList.contains('is-open')) closeNav(); else openNav();
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) closeNav();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeNav();
    });
    // Beim Vergrößern des Fensters Menü zurücksetzen
    window.addEventListener('resize', function () {
      if (window.innerWidth > 860) closeNav();
    });
  }

  /* ---- Reveal beim Scrollen ---- */
  var reveals = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduce || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    reveals.forEach(function (el) { io.observe(el); });

    // Sicherheitsnetz: bereits sichtbare Elemente sofort zeigen (kein „unsichtbarer“ Content)
    requestAnimationFrame(function () {
      var vh = window.innerHeight || document.documentElement.clientHeight;
      reveals.forEach(function (el) {
        var r = el.getBoundingClientRect();
        if (r.top < vh * 0.98) el.classList.add('is-in');
      });
    });
  }
})();
