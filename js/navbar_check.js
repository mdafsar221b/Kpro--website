/**
 * navbar_check.js — Development-only navbar overlap auditor.
 * This module is a NO-OP in production builds (import.meta.env.DEV check).
 * Only load this file on pages where you want to audit the desktop nav layout.
 */

// Guard: skip entirely in production
if (typeof import !== 'undefined' && import.meta?.env?.PROD) {
  // Production — do nothing
} else {
  (function () {
    const logo       = document.getElementById('site-header-el')?.querySelector('.logo');
    const navMenu    = document.querySelector('.nav-menu');
    const navActions = document.querySelector('.nav-actions');

    if (!logo || !navMenu || !navActions) {
      // Elements may not exist if called before header injection
      console.warn('[navbar_check] Elements not ready — ensure this runs after injectHeader().');
      return;
    }

    // Use ResizeObserver (more efficient than resize event)
    const checkLayout = () => {
      const isMenuMobile = window.getComputedStyle(navMenu).position === 'fixed';
      if (isMenuMobile) {
        console.info('[navbar_check] Mobile layout detected. Collision check skipped.');
        return;
      }

      const logoRect    = logo.getBoundingClientRect();
      const menuRect    = navMenu.getBoundingClientRect();
      const actionsRect = navActions.getBoundingClientRect();

      const overlapLogo    = menuRect.left < logoRect.right;
      const overlapActions = menuRect.right > actionsRect.left;

      if (overlapLogo) {
        console.error(`[navbar_check] FAIL — Nav overlaps Logo! (Logo right: ${Math.round(logoRect.right)}px, Menu left: ${Math.round(menuRect.left)}px)`);
      }
      if (overlapActions) {
        console.error(`[navbar_check] FAIL — Nav overlaps Actions! (Menu right: ${Math.round(menuRect.right)}px, Actions left: ${Math.round(actionsRect.left)}px)`);
      }
      if (!overlapLogo && !overlapActions) {
        console.log(`[navbar_check] PASS — No overlaps. Gap to logo: ${Math.round(menuRect.left - logoRect.right)}px | Gap to portal: ${Math.round(actionsRect.left - menuRect.right)}px`);
      }
    };

    // ResizeObserver on the header container
    const headerContainer = document.querySelector('.nav-container');
    if (headerContainer && 'ResizeObserver' in window) {
      const ro = new ResizeObserver(checkLayout);
      ro.observe(headerContainer);
    } else {
      // Fallback
      checkLayout();
      window.addEventListener('resize', checkLayout);
    }
  })();
}
