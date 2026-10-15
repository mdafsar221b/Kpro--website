/**
 * main.js — Core site initialiser.
 * Imports and boots the shared header & footer components.
 * Scroll-reveal is handled inside footer.js after footer injection.
 */
import { injectHeader } from './header.js';
import { injectFooter } from './footer.js';

document.addEventListener('DOMContentLoaded', () => {
  // ── 1. Shared Components ─────────────────────────────────────────────
  injectHeader();
  injectFooter();
});
