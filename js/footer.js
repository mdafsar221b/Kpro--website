/**
 * footer.js — Shared site footer component.
 * Injects the footer into #site-footer and handles the newsletter form.
 */

const LOGO_SVG_SMALL = `
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
       style="width: 32px; height: 32px;" aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id="logo-grad-footer-shared" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%"   stop-color="var(--accent-cyan)" />
        <stop offset="100%" stop-color="var(--accent-mint)" />
      </linearGradient>
    </defs>
    <path d="M 80 34 L 80 22 L 42 22 L 65 50 L 42 78 L 80 78 L 80 66"
          stroke="url(#logo-grad-footer-shared)" stroke-width="9"
          stroke-linecap="round" stroke-linejoin="round" />
    <circle cx="15" cy="18" r="5.5" fill="var(--accent-cyan)" />
    <circle cx="15" cy="82" r="5.5" fill="var(--accent-cyan)" />
    <circle cx="30" cy="34" r="5.5" fill="var(--accent-mint)" />
    <circle cx="30" cy="66" r="5.5" fill="var(--accent-mint)" />
    <circle cx="15" cy="50" r="5.5" fill="var(--logo-orange)" />
    <circle cx="48" cy="50" r="5.5" fill="var(--logo-orange)" />
  </svg>
`;

const CURRENT_YEAR = new Date().getFullYear();

function buildFooter() {
  return `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">

        <!-- Brand -->
        <div class="footer-brand">
          <a href="index.html" class="logo" aria-label="Kpro Solutions — Home">
            ${LOGO_SVG_SMALL}
            <span>kpro</span>
          </a>
          <p class="footer-desc">
            Renovating enterprise infrastructures since 2014. Engineers of intelligent
            IoT, high-performance data lakes, and secure decentralized blockchain networks.
          </p>
          <div class="footer-socials">
            <a href="https://www.linkedin.com/company/kprosolutions/" class="social-icon"
               aria-label="Kpro on LinkedIn" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-linkedin-in" aria-hidden="true"></i>
            </a>
            <a href="https://twitter.com/kprosolutions" class="social-icon"
               aria-label="Kpro on Twitter / X" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="https://www.facebook.com/kpro.solutions.pvt" class="social-icon"
               aria-label="Kpro on Facebook" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-facebook-f" aria-hidden="true"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCcks4KEpT694r1Qj2gwTqyQ" class="social-icon"
               aria-label="Kpro on YouTube" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-youtube" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        <!-- Pages -->
        <div>
          <h3 class="footer-col-title">Pages</h3>
          <ul class="footer-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="solutions.html">Solutions</a></li>
            <li><a href="capabilities.html">Capabilities</a></li>
            <li><a href="products.html">Products</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="careers.html">Careers</a></li>
          </ul>
        </div>

        <!-- Resources -->
        <div>
          <h3 class="footer-col-title">Resources</h3>
          <ul class="footer-links">
            <li><a href="https://www.blog.kpro.co.in" target="_blank" rel="noopener noreferrer">Blogs</a></li>
            <li><a href="https://www.community.kpro.co.in" target="_blank" rel="noopener noreferrer">Community Forum</a></li>
            <li><a href="contact.html">Contact Support</a></li>
            <li><a href="about.html#fixed-cost">Fixed Cost Model</a></li>
            <li><a href="careers.html#openings">Job Openings</a></li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div class="footer-newsletter">
          <h3 class="footer-col-title">Newsletter</h3>
          <p class="footer-desc" style="font-size: 0.85rem;">
            Subscribe to get tech insights and case studies delivered quarterly.
          </p>
          <form class="newsletter-form" id="footer-newsletter-form" novalidate>
            <input type="email" class="newsletter-input" id="footer-email-input"
                   placeholder="Your corporate email" required
                   aria-label="Email address for newsletter">
            <button type="submit" class="newsletter-btn" aria-label="Subscribe to newsletter">
              <i class="fa fa-paper-plane" aria-hidden="true"></i>
            </button>
          </form>
          <p class="newsletter-msg" id="footer-newsletter-msg" style="display:none; font-size:0.85rem; color: var(--accent-mint); margin-top: 6px;"></p>
        </div>

      </div>

      <div class="footer-bottom">
        <p>&copy; ${CURRENT_YEAR} Kpro Solutions Pvt. Ltd. All rights reserved.</p>
        <div class="footer-bottom-links">
          <a href="privacy.html">Privacy Policy</a>
          <a href="terms.html">Terms of Service</a>
          <a href="https://www.hrm.kpro.co.in" target="_blank" rel="noopener noreferrer">HRM Login</a>
        </div>
      </div>
    </div>
  </footer>
  `;
}

function initNewsletter() {
  const form    = document.getElementById('footer-newsletter-form');
  const msgEl   = document.getElementById('footer-newsletter-msg');
  const emailEl = document.getElementById('footer-email-input');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = emailEl.value.trim();
    if (!email) return;

    const btn     = form.querySelector('.newsletter-btn');
    const origHTML = btn.innerHTML;
    btn.innerHTML  = '<i class="fa fa-spinner fa-spin" aria-hidden="true"></i>';
    btn.disabled   = true;

    try {
      const RECIPIENT_EMAILS = [
        'smita_kashyap@kpro.co.in',
        'priti_kumari@kpro.co.in',
        'alok_ranjan@kpro.co.in',
        'Bharath_shetty@kpro.co.in',
        'markanday_shukla@kpro.co.in'
      ].join(',');

      let response;
      try {
        response = await fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            formType: 'newsletter',
            data: {
              reply_to: email,
            },
            recipients: RECIPIENT_EMAILS
          }),
        });
      } catch (err) {
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
          console.warn('⚠️ Kpro API: Local backend function not available. Mocking successful submission for local testing.');
          response = { ok: true };
        } else {
          throw err;
        }
      }

      if (response && !response.ok && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
        console.warn('⚠️ Kpro API: Local backend returned non-200. Mocking success for localhost Vite.');
        response = { ok: true };
      }

      if (response.ok) {
        msgEl.textContent = '✓ Subscribed! You\'ll hear from us quarterly.';
        msgEl.style.color = 'var(--accent-mint)';
        emailEl.value = '';
      } else {
        throw new Error('Server error');
      }
    } catch {
      msgEl.textContent = 'Something went wrong. Please try again.';
      msgEl.style.color = '#ff4a5a';
    } finally {
      msgEl.style.display = 'block';
      btn.innerHTML = origHTML;
      btn.disabled  = false;

      setTimeout(() => { msgEl.style.display = 'none'; }, 6000);
    }
  });
}

function initScrollReveal() {
  const revealEls = document.querySelectorAll('[data-reveal]');
  if (!('IntersectionObserver' in window)) {
    revealEls.forEach(el => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => observer.observe(el));
}

export function injectFooter() {
  const mount = document.getElementById('site-footer');
  if (!mount) {
    console.warn('[footer.js] Missing <div id="site-footer"> mount point.');
    return;
  }
  mount.innerHTML = buildFooter();
  initNewsletter();
  initScrollReveal();
}
