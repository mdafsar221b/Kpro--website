/**
 * header.js — Shared site header component.
 * Injects the nav into #site-header, handles scroll + mobile menu.
 */

const NAV_ITEMS = [
  { href: 'index.html',              label: 'Home' },
  { href: 'solutions.html',          label: 'Solutions' },
  { href: 'capabilities.html',       label: 'Capabilities' },
  { href: 'products.html',           label: 'Products' },
  { href: 'training.html',           label: 'Training' },
  { href: 'about.html',              label: 'About Us' },
  { href: 'careers.html',            label: 'Careers' },
  { href: 'contact.html',            label: 'Contact' },
];

const LOGO_SVG = `
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id="logo-grad-shared" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%"   stop-color="var(--accent-cyan)" />
        <stop offset="100%" stop-color="var(--accent-mint)" />
      </linearGradient>
    </defs>
    <path d="M 80 34 L 80 22 L 42 22 L 65 50 L 42 78 L 80 78 L 80 66"
          stroke="url(#logo-grad-shared)" stroke-width="9"
          stroke-linecap="round" stroke-linejoin="round" />
    <circle cx="15" cy="18" r="5.5" fill="var(--accent-cyan)" />
    <circle cx="15" cy="82" r="5.5" fill="var(--accent-cyan)" />
    <circle cx="30" cy="34" r="5.5" fill="var(--accent-mint)" />
    <circle cx="30" cy="66" r="5.5" fill="var(--accent-mint)" />
    <circle cx="15" cy="50" r="5.5" fill="var(--logo-orange)" />
    <circle cx="48" cy="50" r="5.5" fill="var(--logo-orange)" />
  </svg>
`;

function getActivePage() {
  const path = window.location.pathname;
  const file = path.substring(path.lastIndexOf('/') + 1);
  return file || 'index.html';
}

function buildNavLinks() {
  const activePage = getActivePage();
  return NAV_ITEMS.map(({ href, label }) => {
    const isActive = activePage === href || (activePage === '' && href === 'index.html');
    return `<a href="${href}" class="nav-link${isActive ? ' active' : ''}">${label}</a>`;
  }).join('\n        ');
}

function buildHeader() {
  return `
  <header class="header" id="site-header-el">
    <div class="container nav-container">
      <a href="index.html" class="logo" aria-label="Kpro Solutions — Home">
        ${LOGO_SVG}
        <span>kpro</span>
      </a>

      <nav class="nav-menu" id="primary-navigation" aria-label="Primary navigation">
        ${buildNavLinks()}
      </nav>

      <div class="nav-actions" aria-label="Portal access links">
        <a href="https://www.community.kpro.co.in" class="support-link" target="_blank" rel="noopener noreferrer">Community</a>
        <div class="dropdown">
          <a href="#" class="btn btn-secondary" style="padding: 8px 16px; font-size: 0.85rem;" aria-haspopup="true" aria-expanded="false">
            <i class="fa fa-user-lock" aria-hidden="true"></i> Portal
          </a>
          <div class="dropdown-menu" role="menu">
            <a href="https://www.kpro.co.in:2096" class="dropdown-item" target="_blank" rel="noopener noreferrer" role="menuitem">
              <i class="fa fa-envelope-open" aria-hidden="true"></i> Email Login
            </a>
            <a href="https://www.hrhaat.com/login-page" class="dropdown-item" target="_blank" rel="noopener noreferrer" role="menuitem">
              <i class="fa fa-id-card" aria-hidden="true"></i> HRM Portal
            </a>
            <a href="#" class="dropdown-item" role="menuitem">
              <i class="fa fa-headset" aria-hidden="true"></i> Support Login
            </a>
          </div>
        </div>
      </div>

      <button class="mobile-toggle" id="mobile-toggle-btn" aria-label="Open navigation menu" aria-expanded="false" aria-controls="primary-navigation">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>
    </div>
  </header>
  `;
}

function initScrollBehavior() {
  const header = document.getElementById('site-header-el');
  if (!header) return;

  const handleScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  };

  handleScroll(); // run on load
  window.addEventListener('scroll', handleScroll, { passive: true });
}

function initMobileMenu() {
  const toggle = document.getElementById('mobile-toggle-btn');
  const nav    = document.getElementById('primary-navigation');
  if (!toggle || !nav) return;

  const spans = toggle.querySelectorAll('span');

  const openMenu = () => {
    nav.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close navigation menu');
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity   = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
  };

  const closeMenu = () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation menu');
    spans[0].style.transform = 'none';
    spans[1].style.opacity   = '1';
    spans[2].style.transform = 'none';
  };

  toggle.addEventListener('click', () => {
    nav.classList.contains('open') ? closeMenu() : openMenu();
  });

  // Close when a link is clicked
  nav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
      closeMenu();
    }
  });

  // ESC key closes menu
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      closeMenu();
      toggle.focus();
    }
  });
}

export function injectHeader() {
  const mount = document.getElementById('site-header');
  if (!mount) {
    console.warn('[header.js] Missing <div id="site-header"> mount point.');
    return;
  }
  mount.innerHTML = buildHeader();
  initScrollBehavior();
  initMobileMenu();
}
