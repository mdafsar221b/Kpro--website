import { test, expect } from '@playwright/test';

test.describe('Contact Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact.html');
    await page.waitForSelector('#con-name');
  });

  test('FAQ Accordion Expand/Collapse', async ({ page }) => {
    const faqItem = page.locator('.faq-item').first();
    const trigger = faqItem.locator('.faq-trigger');
    const content = faqItem.locator('.faq-content');

    // Initially closed
    await expect(trigger).toHaveAttribute('aria-expanded', 'false');
    await expect(trigger).not.toHaveClass(/active/);
    await expect(content).not.toHaveClass(/open/);

    // Click trigger to expand
    await trigger.click();
    await expect(trigger).toHaveAttribute('aria-expanded', 'true');
    await expect(trigger).toHaveClass(/active/);
    await expect(content).toHaveClass(/open/);

    // Verify maxHeight has been set programmatically to a value > 0px
    const maxHeight = await content.evaluate(el => el.style.maxHeight);
    expect(maxHeight).not.toBe('0px');
    expect(maxHeight).toContain('px');

    // Click trigger again to collapse
    await trigger.click();
    await expect(trigger).toHaveAttribute('aria-expanded', 'false');
    await expect(trigger).not.toHaveClass(/active/);
    await expect(content).not.toHaveClass(/open/);
    
    const maxHeightAfter = await content.evaluate(el => el.style.maxHeight);
    expect(maxHeightAfter).toBe('0px');
  });

  test('FAQ filter search', async ({ page }) => {
    const searchInput = page.locator('#faq-search');
    const items = page.locator('.faq-item');

    const totalCount = await items.count();
    expect(totalCount).toBeGreaterThan(0);

    // Search query matching only some FAQs
    await searchInput.fill('fixed cost');
    await searchInput.dispatchEvent('keyup');

    // Check FAQ visibilities
    for (let i = 0; i < totalCount; i++) {
      const item = items.nth(i);
      const isVisible = await item.isVisible();
      const text = await item.textContent();
      if (isVisible && text) {
        expect(text.toLowerCase()).toContain('fixed cost');
      }
    }
  });

  test('Custom select dropdown mouse interactions', async ({ page }) => {
    const trigger = page.locator('#subject-select-trigger');
    const dropdown = page.locator('#subject-select-dropdown');
    const hiddenInput = page.locator('#con-subject');
    const labelText = page.locator('#subject-select-label-text');

    // Initially closed
    await expect(dropdown).not.toHaveClass(/open/);

    // Click trigger to open
    await trigger.click();
    await expect(dropdown).toHaveClass(/open/);

    // Click a service option
    const options = dropdown.locator('.custom-select-option:not(.disabled)');
    const firstOption = options.first();
    const optValue = await firstOption.getAttribute('data-value');
    const optText = (await firstOption.textContent())?.trim();

    await firstOption.click();

    // Verify dropdown closes, value and labels are updated
    await expect(dropdown).not.toHaveClass(/open/);
    await expect(hiddenInput).toHaveValue(optValue || '');
    await expect(labelText).toHaveText(optText || '');

    // Click outside closes dropdown
    await trigger.click();
    await expect(dropdown).toHaveClass(/open/);
    await page.mouse.click(100, 100);
    await expect(dropdown).not.toHaveClass(/open/);
  });

  test('Custom select dropdown keyboard navigation', async ({ page }) => {
    const trigger = page.locator('#subject-select-trigger');
    const dropdown = page.locator('#subject-select-dropdown');
    const hiddenInput = page.locator('#con-subject');

    // Focus trigger
    await trigger.focus();

    // Press Enter to open dropdown
    await trigger.press('Enter');
    await expect(dropdown).toHaveClass(/open/);

    // Programmatically dispatch the key events to simulate ArrowDown and Enter
    await page.evaluate(() => {
      const dropdownEl = document.getElementById('subject-select-dropdown');
      const options = dropdownEl.querySelectorAll('.custom-select-option:not(.disabled)');
      const firstOption = options[0];
      
      // Focus the first option
      firstOption.focus();
      
      // Trigger ArrowDown to change activeOptionIndex to 0
      const downEvent = new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true });
      firstOption.dispatchEvent(downEvent);
      
      // Trigger Enter to select the option
      const enterEvent = new KeyboardEvent('keydown', { key: 'Enter', bubbles: true });
      firstOption.dispatchEvent(enterEvent);
    });
    
    // Verify dropdown closed and selected
    await expect(dropdown).not.toHaveClass(/open/);
    const selectedVal = await hiddenInput.inputValue();
    expect(selectedVal).toBe('genai');

    // Open again and test ESC key programmatically
    await trigger.click();
    await expect(dropdown).toHaveClass(/open/);
    
    await page.evaluate(() => {
      const dropdownEl = document.getElementById('subject-select-dropdown');
      const escEvent = new KeyboardEvent('keydown', { key: 'Escape', bubbles: true });
      dropdownEl.dispatchEvent(escEvent);
    });
    
    await expect(dropdown).not.toHaveClass(/open/);
  });

  test('Form fields input validation', async ({ page }) => {
    const form = page.locator('#contact-inquiry-form');
    const nameInput = page.locator('#con-name');
    const orgInput = page.locator('#con-org');
    const emailInput = page.locator('#con-email');
    const msgInput = page.locator('#con-msg');

    // Submit empty form to trigger validations using dispatchEvent
    await form.dispatchEvent('submit');

    await expect(nameInput).toHaveClass(/invalid/);
    await expect(orgInput).toHaveClass(/invalid/);
    await expect(emailInput).toHaveClass(/invalid/);
    await expect(msgInput).toHaveClass(/invalid/);

    await expect(page.locator('#con-name-error')).toBeVisible();
    await expect(page.locator('#con-email-error')).toBeVisible();

    // Check invalid email format
    await emailInput.fill('invalid-email');
    await emailInput.dispatchEvent('blur');
    await expect(page.locator('#con-email-error')).toBeVisible();

    // Check message length under 10 chars
    await msgInput.fill('short');
    await msgInput.dispatchEvent('blur');
    await expect(page.locator('#con-msg-error')).toBeVisible();
    await expect(page.locator('#con-msg-error')).toHaveText(/minimum 10 characters/);
  });

  test('Successful inquiry submission using Formspree mock', async ({ page }) => {
    // Install page clock to fast-forward timeouts
    await page.clock.install();
    await page.goto('/contact.html');
    await page.waitForSelector('#con-name');

    // Select subject dropdown value first
    await page.locator('#subject-select-trigger').click();
    await page.locator('#subject-select-dropdown .custom-select-option:not(.disabled)').first().click();

    // Fill form details
    await page.locator('#con-name').fill('Bob Smith');
    await page.locator('#con-org').fill('Kpro Enterprises');
    await page.locator('#con-email').fill('bob@kpro.co.in');
    await page.locator('#con-msg').fill('Requesting details about custom GenAI pipeline developments.');

    // Route / mock email API endpoint POST request
    await page.route('**/api/send-email', async route => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ status: 200, text: 'OK' }),
      });
    });

    // Submit inquiry form using dispatchEvent
    await page.locator('#contact-inquiry-form').dispatchEvent('submit');

    // Check animated loading screen
    const loader = page.locator('#contact-submit-loader');
    const loaderText = page.locator('#contact-loader-text');
    await expect(loader).toBeVisible();

    // Step through the telemetry loader stages
    await expect(loaderText).toHaveText('Initializing telemetry handshake...');

    await page.clock.fastForward(400);
    await expect(loaderText).toHaveText('Establishing secure connection...');

    await page.clock.fastForward(400); // 800ms
    await expect(loaderText).toHaveText('Signing inquiry with Kpro keys...');

    await page.clock.fastForward(250); // 1050ms
    await expect(loaderText).toHaveText('Dispatching to operations team...');

    await page.clock.fastForward(150); // 1200ms (fetch executes and mocks)

    // Wait for the intentional delay post-response (1200ms)
    await page.clock.fastForward(1200);

    // Verify loading overlay hides and success overlays opens with Ticket ID
    await expect(loader).not.toBeVisible();
    const successOverlay = page.locator('#contact-success-overlay');
    await expect(successOverlay).toBeVisible();
    await expect(page.locator('#success-ticket-details')).toContainText('Ticket ID: KPRO-');

    // Click Reset to clear overlay and revert back to form screen
    await page.locator('#contact-reset-btn').click();
    await expect(successOverlay).not.toBeVisible();
    await expect(page.locator('#contact-form-wrapper')).toBeVisible();
  });
});
