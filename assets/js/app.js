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

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- Zahlen hochzählen (Count-up) ---- */
  var counters = Array.prototype.slice.call(document.querySelectorAll('[data-count]'));
  function animateCount(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    if (isNaN(target)) return;
    if (reduce) { el.textContent = String(target); return; }
    var dur = 1400, start = null;
    function step(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      el.textContent = String(Math.round(eased * target));
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = String(target);
    }
    el.textContent = '0';
    requestAnimationFrame(step);
  }
  if (counters.length) {
    if (reduce || !('IntersectionObserver' in window)) {
      counters.forEach(function (el) { el.textContent = el.getAttribute('data-count'); });
    } else {
      var cio = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) { animateCount(entry.target); cio.unobserve(entry.target); }
        });
      }, { threshold: 0.5 });
      counters.forEach(function (el) { cio.observe(el); });
    }
  }

  /* ---- Reveal beim Scrollen ---- */
  var reveals = Array.prototype.slice.call(document.querySelectorAll('.reveal'));

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

  /* ---- Parallax: Band-Bild verschiebt sich sanft beim Scrollen ---- */
  var bands = Array.prototype.slice.call(document.querySelectorAll('.band'));
  var layers = bands.map(function (b) {
    return { band: b, layer: b.querySelector('.band__media picture') };
  }).filter(function (o) { return o.layer; });

  if (layers.length && !reduce) {
    var ticking = false;
    function updateParallax() {
      var vh = window.innerHeight || document.documentElement.clientHeight;
      layers.forEach(function (o) {
        var r = o.band.getBoundingClientRect();
        if (r.bottom < -50 || r.top > vh + 50) return; // außer Sicht -> überspringen
        // p: 0 (Band tritt unten ein) .. 1 (Band verlässt oben)
        var p = (vh - r.top) / (vh + r.height);
        var max = r.height * 0.12;             // innerhalb des 16%-Überstands
        var shift = (p - 0.5) * 2 * max;       // -max .. +max
        o.layer.style.transform = 'translate3d(0,' + shift.toFixed(1) + 'px,0)';
      });
      ticking = false;
    }
    function onScrollParallax() {
      if (!ticking) { ticking = true; requestAnimationFrame(updateParallax); }
    }
    window.addEventListener('scroll', onScrollParallax, { passive: true });
    window.addEventListener('resize', onScrollParallax, { passive: true });
    updateParallax();
  }
})();
