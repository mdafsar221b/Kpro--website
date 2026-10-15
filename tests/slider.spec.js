import { test, expect } from '@playwright/test';

test.describe('Hero Slider Component', () => {
  test.describe('With Autoplay Clock', () => {
    test.beforeEach(async ({ page }) => {
      // Install clock to control time deterministically
      await page.clock.install();
      await page.goto('/index.html');
      await page.waitForSelector('.hero-slider-container');
    });

    test('Autoplay slide transition', async ({ page }) => {
      const slides = page.locator('.hero-slide');
      const dots = page.locator('.slider-dot');

      // First slide active initially
      await expect(slides.nth(0)).toHaveClass(/active/);
      await expect(dots.nth(0)).toHaveClass(/active/);

      // Fast-forward 2000ms
      await page.clock.fastForward(2000);
      
      // Second slide should be active now
      await expect(slides.nth(1)).toHaveClass(/active/);
      await expect(dots.nth(1)).toHaveClass(/active/);
      await expect(slides.nth(0)).not.toHaveClass(/active/);
    });

    test('Pause and resume autoplay on hover', async ({ page }) => {
      const slides = page.locator('.hero-slide');
      const heroSection = page.locator('.hero-section');

      await expect(slides.nth(0)).toHaveClass(/active/);

      // Hover mouse over hero section to pause autoplay
      await heroSection.hover();

      // Fast-forward 2000ms
      await page.clock.fastForward(2000);
      // Slide should NOT change (should stay on index 0)
      await expect(slides.nth(0)).toHaveClass(/active/);

      // Move mouse away to resume
      await page.mouse.move(0, 0); // Move out of hover
      
      // Fast-forward 2000ms again
      await page.clock.fastForward(2000);
      // Slide should transition to index 1
      await expect(slides.nth(1)).toHaveClass(/active/);
    });

    test('Manual Dot Navigation', async ({ page }) => {
      const slides = page.locator('.hero-slide');
      const dots = page.locator('.slider-dot');

      await expect(slides.nth(0)).toHaveClass(/active/);

      // Click 3rd dot (index 2)
      await dots.nth(2).click();
      await expect(slides.nth(2)).toHaveClass(/active/);
      await expect(dots.nth(2)).toHaveClass(/active/);
    });

    test('Keyboard dot navigation', async ({ page }) => {
      const slides = page.locator('.hero-slide');
      const dots = page.locator('.slider-dot');

      // Focus the first dot
      await dots.nth(0).focus();
      await expect(slides.nth(0)).toHaveClass(/active/);

      // Press ArrowRight
      await page.keyboard.press('ArrowRight');
      await expect(slides.nth(1)).toHaveClass(/active/);

      // Press ArrowLeft
      await page.keyboard.press('ArrowLeft');
      await expect(slides.nth(0)).toHaveClass(/active/);
    });
  });

  test.describe('With Reduced Motion', () => {
    test('Autoplay is disabled under prefers-reduced-motion', async ({ page }) => {
      // Mock reduced motion media query prior to loading
      await page.emulateMedia({ reducedMotion: 'reduce' });
      await page.clock.install();
      await page.goto('/index.html');
      await page.waitForSelector('.hero-slider-container');

      const slides = page.locator('.hero-slide');
      await expect(slides.nth(0)).toHaveClass(/active/);

      // Fast-forward 10000ms (2 slide intervals)
      await page.clock.fastForward(10000);
      // Should NOT change slide because of prefers-reduced-motion
      await expect(slides.nth(0)).toHaveClass(/active/);
    });
  });
});
