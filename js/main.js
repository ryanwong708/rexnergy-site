/* ═══════════════════════════════════════
   REXNERGY — Shared JavaScript
   Header + Footer injection + Tracking + UI
═══════════════════════════════════════ */

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }

var WA_NUMBER = '60162234210';

// ── PAGE REGISTRY — add new pages here, nowhere else ──
var REXNERGY_PAGES = {
  'engineering': { label: 'Engineering Maintenance', group: 'services' },
  'cleaning':    { label: 'Cleaning & Hygiene', group: 'services' },
  'hospitality': { label: 'Hospitality Support Services', group: 'services' },
  'security':    { label: 'Security Systems', group: 'services' },
  'solar':       { label: 'Solar Energy', group: 'services' },
  'cabin':       { label: 'Cabin Fabrication', group: 'services' },
  'homestay':    { label: 'Homestay & Hotel Operators', group: 'work' },
  'homeowners':  { label: 'Homeowners', group: 'work' },
  'office':      { label: 'Office Occupiers', group: 'work' },
  'retail':      { label: 'Retail Outlets', group: 'work' },
  'landowners':  { label: 'Land Owners', group: 'work' },
  'about':       { label: 'About Us', group: 'other' },
  'contact':     { label: 'Contact Us', group: 'other' }
};

function getPageName() {
  var parts = window.location.pathname.split('/').filter(Boolean);
  return parts.length ? parts[0] : 'homepage';
}

function waLink(text) {
  return 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(text);
}

var WA_ICON = '<svg viewBox="0 0 32 32" fill="white"><path d="M16 2C8.28 2 2 8.28 2 16c0 2.46.67 4.76 1.84 6.74L2 30l7.48-1.8A13.93 13.93 0 0016 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm6.27 18.87c-.34-.17-2.02-1-2.34-1.11-.31-.11-.54-.17-.77.17-.23.34-.88 1.11-1.08 1.34-.2.23-.4.26-.74.09-.34-.17-1.44-.53-2.74-1.69-1.01-.9-1.7-2.01-1.9-2.35-.2-.34-.02-.52.15-.69.15-.15.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.77-1.86-1.06-2.54-.28-.67-.56-.58-.77-.59-.2-.01-.43-.01-.66-.01-.23 0-.6.09-.91.43-.31.34-1.2 1.17-1.2 2.86 0 1.69 1.23 3.32 1.4 3.55.17.23 2.42 3.7 5.86 5.19.82.35 1.46.56 1.96.72.82.26 1.57.22 2.16.13.66-.1 2.02-.82 2.31-1.62.28-.79.28-1.47.2-1.62-.09-.14-.31-.23-.65-.4z"/></svg>';

function trackWhatsApp(label) {
  var page = getPageName();
  var eventName = 'whatsapp_click_' + page;
  gtag('event', eventName, { event_category: 'Contact', event_label: label || page, value: 1 });
  gtag('event', 'whatsapp_click', { event_category: 'Contact', event_label: page, value: 1 });
}

// ── RENDER HEADER (topstrip + nav + mobile-nav + floating WA) ──
function renderHeader() {
  var key = getPageName();
  var page = REXNERGY_PAGES[key];
  var pageLabel = page ? page.label : 'your services';
  var waSpecific = 'Hi Rexnergy! I\'d like to know more about ' + pageLabel + '.';
  var waGeneric = 'Hi Rexnergy! I\'d like a free quote.';

  var html = ''
    + '<div class="wa-float">'
    + '<div class="wa-label">💬 Quick response guaranteed</div>'
    + '<a href="' + waLink(waSpecific) + '" class="wa-circle" target="_blank" aria-label="WhatsApp">' + WA_ICON + '</a>'
    + '</div>'
    + '<div class="topstrip">'
    + '<div class="ts-left">'
    + '<span>📍 <strong>124a Jalan Gasing, 46100 Petaling Jaya</strong></span>'
    + '<span>✉️ <strong>rexnergy7@gmail.com</strong></span>'
    + '</div>'
    + '<a href="' + waLink(waGeneric) + '" class="ts-wa" target="_blank">'
    + '<svg width="13" height="13" viewBox="0 0 32 32" fill="white"><path d="M16 2C8.28 2 2 8.28 2 16c0 2.46.67 4.76 1.84 6.74L2 30l7.48-1.8A13.93 13.93 0 0016 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm6.27 18.87c-.34-.17-2.02-1-2.34-1.11-.31-.11-.54-.17-.77.17-.23.34-.88 1.11-1.08 1.34-.2.23-.4.26-.74.09-.34-.17-1.44-.53-2.74-1.69-1.01-.9-1.7-2.01-1.9-2.35-.2-.34-.02-.52.15-.69.15-.15.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.77-1.86-1.06-2.54-.28-.67-.56-.58-.77-.59-.2-.01-.43-.01-.66-.01-.23 0-.6.09-.91.43-.31.34-1.2 1.17-1.2 2.86 0 1.69 1.23 3.32 1.4 3.55.17.23 2.42 3.7 5.86 5.19.82.35 1.46.56 1.96.72.82.26 1.57.22 2.16.13.66-.1 2.02-.82 2.31-1.62.28-.79.28-1.47.2-1.62-.09-.14-.31-.23-.65-.4z"/></svg>'
    + ' WhatsApp Us</a>'
    + '</div>'
    + '<nav>'
    + '<div class="nav-inner">'
    + '<a href="/" class="nav-logo">'
    + '<img class="nav-logo-icon" src="/images/logo-icon.png" alt="Rexnergy">'
    + '<div class="nav-wordmark"><span class="wm1">REXNERGY</span><span class="wm2">Property Solutions</span></div>'
    + '</a>'
    + '<ul class="nav-links">'
    + '<li class="nav-drop"><a href="#"' + (page && page.group === 'services' ? ' class="active"' : '') + '>Services</a>'
    + '<div class="drop-menu">'
    + '<a href="/engineering/"><div class="di">🔧</div>Engineering Maintenance</a>'
    + '<a href="/cleaning/"><div class="di">🧹</div>Cleaning &amp; Hygiene</a>'
    + '<a href="/hospitality/"><div class="di">🏨</div>Hospitality Support Services</a>'
    + '<a href="/security/"><div class="di">🛡️</div>Security Systems</a>'
    + '<a href="/solar/"><div class="di">☀️</div>Solar Energy</a>'
    + '<a href="/cabin/"><div class="di">🏠</div>Cabin Fabrication</a>'
    + '</div></li>'
    + '<li class="nav-drop"><a href="#"' + (page && page.group === 'work' ? ' class="active"' : '') + '>We Work With</a>'
    + '<div class="drop-menu">'
    + '<a href="/homestay/"><div class="di">🏨</div>Homestay &amp; Hotel Operators</a>'
    + '<a href="/homeowners/"><div class="di">🏡</div>Homeowners</a>'
    + '<a href="/office/"><div class="di">🏢</div>Office Occupiers</a>'
    + '<a href="/retail/"><div class="di">🛍️</div>Retail Outlets</a>'
    + '<a href="/landowners/"><div class="di">📍</div>Land Owners</a>'
    + '</div></li>'
    + '<li><a href="/about/">About Us</a></li>'
    + '<li><a href="/contact/">Contact</a></li>'
    + '<li><a href="' + waLink(waGeneric) + '" target="_blank" class="nav-cta">Get A Free Quote</a></li>'
    + '</ul>'
    + '<button class="hamburger" id="hamburger" aria-label="Menu"><span></span><span></span><span></span></button>'
    + '</div>'
    + '</nav>'
    + '<div class="mobile-nav" id="mobileNav">'
    + '<div style="font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--accent);padding:10px 0 4px;">Services</div>'
    + '<a href="/engineering/">🔧 Engineering Maintenance</a>'
    + '<a href="/cleaning/">🧹 Cleaning &amp; Hygiene</a>'
    + '<a href="/hospitality/">🏨 Hospitality Support Services</a>'
    + '<a href="/security/">🛡️ Security Systems</a>'
    + '<a href="/solar/">☀️ Solar Energy</a>'
    + '<a href="/cabin/">🏠 Cabin Fabrication</a>'
    + '<div style="font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--accent);padding:14px 0 4px;">We Work With</div>'
    + '<a href="/homestay/">🏨 Homestay &amp; Hotel Operators</a>'
    + '<a href="/homeowners/">🏡 Homeowners</a>'
    + '<a href="/office/">🏢 Office Occupiers</a>'
    + '<a href="/retail/">🛍️ Retail Outlets</a>'
    + '<a href="/landowners/">📍 Land Owners</a>'
    + '<a href="/about/">About Us</a>'
    + '<a href="/contact/">Contact</a>'
    + '<a href="' + waLink(waGeneric) + '" target="_blank">💬 WhatsApp Us Now</a>'
    + '</div>';

  var el = document.getElementById('site-header');
  if (el) el.outerHTML = html;
}

// ── RENDER FOOTER ──
function renderFooter() {
  var html = ''
    + '<footer>'
    + '<div class="footer-inner">'
    + '<div class="footer-brand">'
    + '<div class="footer-logo-wrap"><img class="footer-logo-img" src="/images/logo-full.png" alt="Rexnergy — Your Integrated Property Solutions Partner"></div>'
    + '<p>Your integrated property solutions partner. Complete property solutions under one roof — engineering, cleaning, hospitality, security, solar and cabin fabrication.</p>'
    + '</div>'
    + '<div><h4>Our Services</h4><ul>'
    + '<li><a href="/engineering/">Engineering Maintenance</a></li>'
    + '<li><a href="/cleaning/">Cleaning &amp; Hygiene</a></li>'
    + '<li><a href="/hospitality/">Hospitality Support Services</a></li>'
    + '<li><a href="/security/">Security Systems</a></li>'
    + '<li><a href="/solar/">Solar Energy</a></li>'
    + '<li><a href="/cabin/">Cabin Fabrication</a></li>'
    + '</ul></div>'
    + '<div><h4>We Work With</h4><ul>'
    + '<li><a href="/homestay/">Homestay &amp; Hotel Operators</a></li>'
    + '<li><a href="/homeowners/">Homeowners</a></li>'
    + '<li><a href="/office/">Office Occupiers</a></li>'
    + '<li><a href="/retail/">Retail Outlets</a></li>'
    + '<li><a href="/landowners/">Land Owners</a></li>'
    + '</ul></div>'
    + '<div><h4>Contact</h4><ul>'
    + '<li><span>📍 124a Jalan Gasing, 46100 PJ</span></li>'
    + '<li><a href="mailto:rexnergy7@gmail.com">rexnergy7@gmail.com</a></li>'
    + '<li><a href="/about/">About Us</a></li>'
    + '<li><a href="/contact/">Contact Us</a></li>'
    + '<li style="margin-top:12px;"><a href="' + waLink('Hi Rexnergy!') + '" target="_blank" style="display:inline-flex;align-items:center;gap:6px;background:#25D366;color:white;padding:8px 16px;border-radius:6px;font-size:12px;font-weight:700;">💬 WhatsApp Us</a></li>'
    + '</ul></div>'
    + '</div>'
    + '<div class="footer-bottom">'
    + '<p>© 2026 Rexnergy Venture · All rights reserved</p>'
    + '<p>Kuala Lumpur &amp; Petaling Jaya</p>'
    + '</div>'
    + '</footer>';

  var el = document.getElementById('site-footer');
  if (el) el.outerHTML = html;
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', function () {
  renderHeader();
  renderFooter();

  gtag('js', new Date());
  gtag('config', 'G-FF2KQ5VFH6', {
    page_title: document.title,
    page_location: window.location.href,
    page_path: window.location.pathname
  });
  gtag('config', 'AW-18216636049');

  var hamburger = document.getElementById('hamburger');
  var mobileNav = document.getElementById('mobileNav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () { mobileNav.classList.toggle('open'); });
    mobileNav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { mobileNav.classList.remove('open'); });
    });
  }

  document.querySelectorAll('.faq-q').forEach(function (q) {
    q.addEventListener('click', function () {
      var item = this.closest('.faq-item');
      var isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(function (i) { i.classList.remove('open'); });
      if (!isOpen) item.classList.add('open');
    });
  });

  document.querySelectorAll('a[href*="wa.me"]').forEach(function (a) {
    a.addEventListener('click', function () { trackWhatsApp(); });
  });
});
