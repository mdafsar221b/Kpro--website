import { test, expect } from '@playwright/test';

test.describe('Careers Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/careers.html');
    await page.waitForSelector('#job-search');
  });

  test('Job search filtering', async ({ page }) => {
    const searchInput = page.locator('#job-search');
    const cards = page.locator('.job-card');

    // Count initial cards
    const initialCount = await cards.count();
    expect(initialCount).toBeGreaterThan(0);

    // Type query matching a specific job
    await searchInput.fill('GenAI');
    await searchInput.dispatchEvent('keyup');

    // Wait a brief moment for transition style updates
    await page.waitForTimeout(100);

    // Verify only cards matching "GenAI" or with GenAI skills are visible
    for (let i = 0; i < initialCount; i++) {
      const card = cards.nth(i);
      const isVisible = await card.isVisible();
      const text = await card.textContent();
      if (isVisible && text) {
        expect(text.toLowerCase()).toContain('genai');
      }
    }
  });

  test('Department select filtering', async ({ page }) => {
    const deptSelect = page.locator('#department-filter');
    const cards = page.locator('.job-card');

    // Filter by Engineering
    await deptSelect.selectOption('engineering');
    await deptSelect.dispatchEvent('change');
    await page.waitForTimeout(100);

    const count = await cards.count();
    for (let i = 0; i < count; i++) {
      const card = cards.nth(i);
      const isVisible = await card.isVisible();
      if (isVisible) {
        const dept = await card.getAttribute('data-department');
        expect(dept).toBe('engineering');
      }
    }
  });

  test('Apply modal toggle and validations', async ({ page }) => {
    const applyBtn = page.locator('.btn-apply').first();
    const modal = page.locator('#apply-modal');
    const nameInput = page.locator('#app-name');
    const emailInput = page.locator('#app-email');
    const portfolioInput = page.locator('#app-portfolio');
    const noteInput = page.locator('#app-note');
    const form = page.locator('#apply-form');

    // Click apply button
    const jobTitle = await applyBtn.getAttribute('data-job');
    await applyBtn.click();

    // Verify modal is open
    await expect(modal).toHaveClass(/open/);
    await expect(page.locator('#target-job-title')).toHaveText(jobTitle || '');

    // Verify background scroll lock
    const overflow = await page.evaluate(() => document.body.style.overflow);
    expect(overflow).toBe('hidden');

    // Verify name input is focused
    await expect(nameInput).toBeFocused();

    // Submit empty form to trigger validations using dispatchEvent
    await form.dispatchEvent('submit');

    // Errors should display and fields should have invalid class
    await expect(nameInput).toHaveClass(/invalid/);
    await expect(emailInput).toHaveClass(/invalid/);
    await expect(noteInput).toHaveClass(/invalid/);

    await expect(page.locator('#app-name-error')).toBeVisible();
    await expect(page.locator('#app-email-error')).toBeVisible();
    await expect(page.locator('#app-note-error')).toBeVisible();

    // Validate email formatting
    await emailInput.fill('invalidemail');
    await emailInput.dispatchEvent('blur');
    await expect(page.locator('#app-email-error')).toBeVisible();

    await emailInput.fill('test@kpro.co.in');
    await emailInput.dispatchEvent('blur');
    await expect(page.locator('#app-email-error')).not.toBeVisible();

    // Validate portfolio URL
    await portfolioInput.fill('invalidurl');
    await portfolioInput.dispatchEvent('blur');
    await expect(page.locator('#app-portfolio-error')).toBeVisible();

    await portfolioInput.fill('https://github.com/developer');
    await portfolioInput.dispatchEvent('blur');
    await expect(page.locator('#app-portfolio-error')).not.toBeVisible();

    // Validate brief cover note (requires at least 10 chars)
    await noteInput.fill('too short');
    await noteInput.dispatchEvent('blur');
    await expect(page.locator('#app-note-error')).toBeVisible();
    await expect(page.locator('#app-note-error')).toHaveText(/too brief/);

    await noteInput.fill('This is a sufficiently long cover note for validation.');
    await noteInput.dispatchEvent('blur');
    await expect(page.locator('#app-note-error')).not.toBeVisible();

    // Test close button
    const closeBtn = page.locator('#apply-modal-close-btn');
    await closeBtn.click();
    await expect(modal).not.toHaveClass(/open/);

    const overflowAfter = await page.evaluate(() => document.body.style.overflow);
    expect(overflowAfter).toBe('');
  });

  test('Application submission animation and success flow', async ({ page }) => {
    // Install page clock prior to submission to control setTimeout delays
    await page.clock.install();
    await page.goto('/careers.html');
    await page.waitForSelector('#job-search');

    const applyBtn = page.locator('.btn-apply').first();
    await applyBtn.click();

    // Fill valid data
    await page.locator('#app-name').fill('John Doe');
    await page.locator('#app-email').fill('john.doe@example.com');
    await page.locator('#app-portfolio').fill('https://github.com/johndoe');
    await page.locator('#app-note').fill('Interested in the job opportunities at Kpro.');

    // Submit form using dispatchEvent
    await page.locator('#apply-form').dispatchEvent('submit');

    // Loader screen should display
    const loader = page.locator('#apply-submit-loader');
    const loaderText = page.locator('#apply-loader-text');
    await expect(loader).toBeVisible();

    // Verify loading sequence text transitions
    await expect(loaderText).toHaveText('Compiling applicant credentials...');

    await page.clock.fastForward(400);
    await expect(loaderText).toHaveText('Encrypting resume metadata...');

    await page.clock.fastForward(400); // at 800ms
    await expect(loaderText).toHaveText('Publishing application telemetry vectors...');

    await page.clock.fastForward(250); // at 1050ms
    await expect(loaderText).toHaveText('Finalizing dispatch...');

    await page.clock.fastForward(150); // at 1200ms
    
    // Loader should be hidden and success screen visible
    await expect(loader).not.toBeVisible();
    await expect(page.locator('#modal-success-screen')).toBeVisible();

    // Click close on success screen
    await page.locator('#success-close-btn').click();
    await expect(page.locator('#apply-modal')).not.toHaveClass(/open/);
  });
});
