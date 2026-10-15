import { test, expect } from '@playwright/test';

test.describe('Navigation Header Component', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the home page before each test
    await page.goto('/index.html');
    // Wait for DOM content to load and header injection to run
    await page.waitForSelector('#site-header-el');
  });

  test('TC-001 & TC-002: Desktop Horizontal Alignment & Overlap Check', async ({ page }) => {
    // Set desktop resolution
    await page.setViewportSize({ width: 1200, height: 800 });

    const logo = page.locator('#site-header-el .logo');
    const navMenu = page.locator('#primary-navigation');
    const navActions = page.locator('#site-header-el .nav-actions');

    // Ensure all header components are visible
    await expect(logo).toBeVisible();
    await expect(navMenu).toBeVisible();
    await expect(navActions).toBeVisible();

    // Check vertical alignment: elements should be roughly centered vertically
    const logoBox = await logo.boundingBox();
    const menuBox = await navMenu.boundingBox();
    const actionsBox = await navActions.boundingBox();

    expect(logoBox).not.toBeNull();
    expect(menuBox).not.toBeNull();
    expect(actionsBox).not.toBeNull();

    // The header is flex row, check that they are ordered left-to-right
    if (logoBox && menuBox && actionsBox) {
      expect(logoBox.x + logoBox.width).toBeLessThan(menuBox.x);
      expect(menuBox.x + menuBox.width).toBeLessThan(actionsBox.x);

      // Bounding Box Intersection Test (Console audit equivalence)
      const overlapLogo = menuBox.x < (logoBox.x + logoBox.width);
      const overlapActions = (menuBox.x + menuBox.width) > actionsBox.x;

      expect(overlapLogo).toBe(false);
      expect(overlapActions).toBe(false);
    }
  });

  test('TC-003: Tablet & Mobile Hamburger Collapse (Viewport width <= 1100px)', async ({ page }) => {
    // Set mobile resolution
    await page.setViewportSize({ width: 768, height: 800 });

    const navMenu = page.locator('#primary-navigation');
    const mobileToggle = page.locator('#mobile-toggle-btn');

    // Mobile menu toggle button should be visible
    await expect(mobileToggle).toBeVisible();

    // On mobile, standard navigation menu links should be offscreen/hidden (i.e. position: fixed is active)
    const isFixed = await page.evaluate(() => {
      const menu = document.querySelector('#primary-navigation');
      return window.getComputedStyle(menu).position === 'fixed';
    });
    expect(isFixed).toBe(true);

    // Initial state: menu should not have class 'open' and aria-expanded should be false
    await expect(navMenu).not.toHaveClass(/open/);
    await expect(mobileToggle).toHaveAttribute('aria-expanded', 'false');

    // Click hamburger to open
    await mobileToggle.click();
    await expect(navMenu).toHaveClass(/open/);
    await expect(mobileToggle).toHaveAttribute('aria-expanded', 'true');

    // Click outside to close (e.g. click body at x=100, y=100)
    await page.mouse.click(100, 100);
    await expect(navMenu).not.toHaveClass(/open/);
    await expect(mobileToggle).toHaveAttribute('aria-expanded', 'false');

    // Open again to test ESC key closing it
    await mobileToggle.click();
    await expect(navMenu).toHaveClass(/open/);
    await page.keyboard.press('Escape');
    await expect(navMenu).not.toHaveClass(/open/);
  });

  test('TC-004: Portal Dropdown Positioning', async ({ page }) => {
    await page.setViewportSize({ width: 1200, height: 800 });

    const portalBtn = page.locator('.nav-actions .dropdown .btn');
    const dropdownMenu = page.locator('.nav-actions .dropdown-menu');
    const communityLink = page.locator('.nav-actions .support-link');

    // Pre-hover state: menu is not visible
    await expect(dropdownMenu).not.toBeVisible();

    // Fetch bounding box of community link before hover
    const commBoxBefore = await communityLink.boundingBox();
    expect(commBoxBefore).not.toBeNull();

    // Hover over Portal button
    await portalBtn.hover();
    await expect(dropdownMenu).toBeVisible();

    // Fetch bounding box of community link during hover
    const commBoxAfter = await communityLink.boundingBox();
    expect(commBoxAfter).not.toBeNull();

    if (commBoxBefore && commBoxAfter) {
      // Position of sibling elements should be roughly the same (allow subpixel rendering margin < 1px)
      expect(Math.abs(commBoxBefore.x - commBoxAfter.x)).toBeLessThan(1);
      expect(Math.abs(commBoxBefore.y - commBoxAfter.y)).toBeLessThan(1);
    }
  });
});
