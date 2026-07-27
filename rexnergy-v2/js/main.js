/* ═══════════════════════════════════════
   REXNERGY — Shared JavaScript
   GA4 + Google Ads + WhatsApp Tracking + UI
═══════════════════════════════════════ */

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }

function getPageName() {
  var path = window.location.pathname;
  var parts = path.split('/').filter(Boolean);
  return parts.length ? parts[0] : 'homepage';
}

function trackWhatsApp(label) {
  var page = getPageName();
  var eventName = 'whatsapp_click_' + page;
  gtag('event', eventName, { event_category:'Contact', event_label: label || page, value:1 });
  gtag('event', 'whatsapp_click', { event_category:'Contact', event_label: page, value:1 });
}

document.addEventListener('DOMContentLoaded', function () {
  gtag('js', new Date());
  gtag('config', 'G-FF2KQ5VFH6', {
    page_title: document.title,
    page_location: window.location.href,
    page_path: window.location.pathname
  });
  gtag('config', 'AW-18216636049');

  // Mobile nav toggle
  var hamburger = document.getElementById('hamburger');
  var mobileNav = document.getElementById('mobileNav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () { mobileNav.classList.toggle('open'); });
    mobileNav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { mobileNav.classList.remove('open'); });
    });
  }

  // FAQ accordion
  document.querySelectorAll('.faq-q').forEach(function (q) {
    q.addEventListener('click', function () {
      var item = this.closest('.faq-item');
      var isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(function (i) { i.classList.remove('open'); });
      if (!isOpen) item.classList.add('open');
    });
  });

  // Auto-track all WhatsApp links
  document.querySelectorAll('a[href*="wa.me"]').forEach(function (a) {
    a.addEventListener('click', function () { trackWhatsApp(); });
  });

  // Active nav highlight
  var path = window.location.pathname;
  document.querySelectorAll('.nav-links a, .drop-menu a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href && href !== '/' && href !== '#' && path.indexOf(href) > -1) {
      a.classList.add('active');
    }
  });
});
