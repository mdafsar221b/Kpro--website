/**
 * slider.js — Hero section auto-rotating slider.
 * - Pauses on hover / focus (WCAG 2.2.2)
 * - Slider dots are <button> elements (keyboard accessible)
 * - Respects prefers-reduced-motion
 */

const SLIDE_INTERVAL_MS = 2000;

const SLIDE_LABELS = [
  'AI Development — Enterprise solutions',
  'Telephony CRM — Contact center solutions',
  'Enterprise IoT — Edge telemetry',
  'Blockchain — Decentralized ledger structures',
  'Product: NyotaInvite — Smart RSVP Portals',
  'Product: Resumea — AI-Powered ATS Resume Builder',
  'Product: HRHaaT — Unified Enterprise HRIMS',
  'Product: BuildMyCV — Professional CV Architect',
  'Product: ForensicAudit — Cognitive Ledger Auditor',
  'K-Pro Framework — Unified delivery model',
];

export function initSlider() {
  const slides    = Array.from(document.querySelectorAll('.hero-slide'));
  const dotsMount = document.querySelector('.slider-dots');

  if (!slides.length || !dotsMount) return;

  let currentSlide = 0;
  let intervalId   = null;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ── Build accessible dot buttons ────────────────────────────────────
  dotsMount.innerHTML = slides.map((_, i) => `
    <button
      class="slider-dot${i === 0 ? ' active' : ''}"
      aria-label="${SLIDE_LABELS[i] || `Slide ${i + 1}`}"
      aria-current="${i === 0 ? 'true' : 'false'}"
      data-slide="${i}"
    ></button>
  `).join('');

  const dots = Array.from(dotsMount.querySelectorAll('.slider-dot'));

  // ── Forensic Log simulation ──────────────────────────────────────────
  let forensicInterval = null;
  const forensicLogs = [
    "[INFO] Initializing Forensic Auditor engine...",
    "[CONNECT] Establishing connection to EVM node...",
    "[SCAN] Auditing blocks range: #1984200 - #1984500",
    "[CHECK] Comparing transaction signatures...",
    "[PASS] Verification matched: 100% integrity",
    "[WARN] Block #1984310: Anomaly flag triggered",
    "[RECONCILE] Performing double-entry audit...",
    "[SUCCESS] Anomaly resolved: gas-limit variance",
    "[CLEAN] Ledger state verified. Audit completed."
  ];

  function runForensicSimulation(slideElement) {
    if (forensicInterval) { clearInterval(forensicInterval); forensicInterval = null; }
    
    const terminal = slideElement.querySelector('#forensic-terminal-logs');
    if (!terminal) return;

    terminal.innerHTML = '';
    let logIdx = 0;
    
    const printLine = () => {
      if (logIdx >= forensicLogs.length) {
        logIdx = 0;
        terminal.innerHTML = '';
      }
      const isWarn = forensicLogs[logIdx].includes('[WARN]');
      const isSuccess = forensicLogs[logIdx].includes('[SUCCESS]') || forensicLogs[logIdx].includes('[PASS]');
      const highlightClass = isWarn ? 'highlight style="color: var(--accent-orange);"' : (isSuccess ? 'highlight' : '');
      
      const newRow = document.createElement('div');
      newRow.className = `ledger-log-row ${highlightClass}`;
      newRow.innerText = forensicLogs[logIdx];
      terminal.appendChild(newRow);
      
      terminal.scrollTop = terminal.scrollHeight;
      logIdx++;
    };

    printLine();
    forensicInterval = setInterval(printLine, 1200);
  }

  // ── Core show logic ──────────────────────────────────────────────────
  function showSlide(n) {
    const next = (n + slides.length) % slides.length;

    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    dots[currentSlide].setAttribute('aria-current', 'false');

    currentSlide = next;

    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
    dots[currentSlide].setAttribute('aria-current', 'true');
    
    runForensicSimulation(slides[currentSlide]);
  }

  function nextSlide() { showSlide(currentSlide + 1); }

  // ── Auto-advance (skip if user prefers reduced motion) ───────────────
  function startAutoplay() {
    if (prefersReducedMotion) return;
    intervalId = setInterval(nextSlide, SLIDE_INTERVAL_MS);
  }

  function stopAutoplay() {
    if (intervalId) { clearInterval(intervalId); intervalId = null; }
  }

  // ── Dot click ────────────────────────────────────────────────────────
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      stopAutoplay();
      showSlide(i);
      startAutoplay();
    });
  });

  // ── Pause on hover / focus (WCAG 2.2.2) ─────────────────────────────
  const heroSection = document.querySelector('.hero-section');
  if (heroSection) {
    heroSection.addEventListener('mouseenter', stopAutoplay);
    heroSection.addEventListener('mouseleave', startAutoplay);
    heroSection.addEventListener('focusin',    stopAutoplay);
    heroSection.addEventListener('focusout',   startAutoplay);
  }

  // ── Keyboard: left/right arrow when dots are focused ─────────────────
  dotsMount.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') { stopAutoplay(); showSlide(currentSlide + 1); startAutoplay(); }
    if (e.key === 'ArrowLeft')  { stopAutoplay(); showSlide(currentSlide - 1); startAutoplay(); }
  });

  // ── Expose goTo globally (for any legacy onclick attributes) ─────────
  window.setSlide = (n) => { stopAutoplay(); showSlide(n); startAutoplay(); };

  runForensicSimulation(slides[currentSlide]);
  startAutoplay();
}
