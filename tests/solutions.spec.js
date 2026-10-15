import { test, expect } from '@playwright/test';

test.describe('Solutions Page Simulator Dashboard', () => {
  test.beforeEach(async ({ page }) => {
    // Install page clock to control simulation setTimeout timings
    await page.clock.install();
    await page.goto('/solutions.html');
    // Wait for one of the dash views to load
    await page.waitForSelector('.dash-view');
  });

  test('Simulator Tab Switching', async ({ page }) => {
    const thirdeyeView = page.locator('#thirdeye-sim');
    const supplyView = page.locator('#supply-sim');
    const securityView = page.locator('#security-sim');

    // Default active view should be thirdeye
    await expect(thirdeyeView).toHaveClass(/active/);
    await expect(supplyView).not.toHaveClass(/active/);
    await expect(securityView).not.toHaveClass(/active/);

    // Switch to Supply Chain
    const supplyTab = page.locator('.dash-tab-btn').filter({ hasText: 'SupplyChain ML' });
    await supplyTab.click();
    await expect(supplyView).toHaveClass(/active/);
    await expect(thirdeyeView).not.toHaveClass(/active/);

    // Switch to UEBA Security
    const securityTab = page.locator('.dash-tab-btn').filter({ hasText: 'Security Threat UEBA' });
    await securityTab.click();
    await expect(securityView).toHaveClass(/active/);
    await expect(supplyView).not.toHaveClass(/active/);
  });

  test('ThirdEye AI: Slider controls and defect simulation', async ({ page }) => {
    const defectSlider = page.locator('#defect-threshold');
    const fpsSlider = page.locator('#cam-fps');
    const defectLabel = page.locator('#defect-label');
    const fpsLabel = page.locator('#fps-label');

    // Adjust defect threshold slider
    await defectSlider.fill('92');
    await defectSlider.dispatchEvent('input');
    await expect(defectLabel).toHaveText('92%');

    // Adjust FPS slider
    await fpsSlider.fill('45');
    await fpsSlider.dispatchEvent('input');
    await expect(fpsLabel).toHaveText('45 FPS');

    // Verify log statement exists inside console
    const logBox = page.locator('#thirdeye-log');
    await expect(logBox).toContainText('Defect detection sensitivity adjusted to 92%');
    await expect(logBox).toContainText('sampling rate set to 45 frames per second');

    // Trigger Defect Event
    const simulateDefectBtn = page.locator('button').filter({ hasText: 'Simulate Defect Event' });
    await simulateDefectBtn.click();

    const boundingBox = page.locator('#sim-bounding-box');
    const systemStatus = page.locator('#simulator-status');

    // Should immediately display warning
    await expect(boundingBox).toContainText('DEFECT_SEAL: 42%');
    await expect(systemStatus).toHaveClass(/status-warning/);
    await expect(systemStatus).toContainText('Defect Triggered');

    // Fast-forward 5000ms
    await page.clock.fastForward(5000);

    // Bounding box should reset back to OK and green
    await expect(boundingBox).toContainText('DEFECT_SEAL: 98%');
    await expect(systemStatus).toHaveClass(/status-ok/);
    await expect(systemStatus).toContainText('System Operational');
  });

  test('Supply Chain: Stock levels, safety alerts, and rebalancing solver', async ({ page }) => {
    // Switch to Supply Chain tab
    await page.locator('.dash-tab-btn').filter({ hasText: 'SupplyChain ML' }).click();

    const demandSlider = page.locator('#demand-rate');
    const safetySlider = page.locator('#safety-stock');
    const demandLabel = page.locator('#demand-label');
    const safetyLabel = page.locator('#safety-label');

    // Adjust customer demand up to 90% (triggers stock safety buffer depletion warning)
    await demandSlider.fill('90');
    await demandSlider.dispatchEvent('input');
    await expect(demandLabel).toHaveText('90%');

    // Adjust safety stock target
    await safetySlider.fill('40');
    await safetySlider.dispatchEvent('input');
    await expect(safetyLabel).toHaveText('40%');

    // Verify system status becomes warning due to stock level falling below safety limit
    const systemStatus = page.locator('#simulator-status');
    const logBox = page.locator('#supply-log');
    await expect(systemStatus).toHaveClass(/status-warning/);
    await expect(systemStatus).toContainText('Supply Alert');
    await expect(logBox).toContainText('WARNING: Current stock level drops below safety buffer threshold');

    // Run solver replenishment model
    const rebalanceBtn = page.locator('button').filter({ hasText: 'Run Rebalancing Model' });
    await rebalanceBtn.click();

    // Verify loading solver state runs
    await expect(logBox).toContainText('RUNNING: Optimization solver calculating optimal replenishment');

    // Fast forward 1500ms
    await page.clock.fastForward(1500);

    // Stock levels should be replenished, status restored to OK
    await expect(systemStatus).toHaveClass(/status-ok/);
    await expect(systemStatus).toContainText('System Operational');
    await expect(logBox).toContainText('SUCCESS: Optimization completed');
  });

  test('UEBA Security: Exfiltration threats & administrator override', async ({ page }) => {
    // Switch to UEBA Security tab
    await page.locator('.dash-tab-btn').filter({ hasText: 'Security Threat UEBA' }).click();

    const varianceSlider = page.locator('#user-variance');
    const varianceLabel = page.locator('#variance-label');

    // Adjust behavioral baseline variance slider
    await varianceSlider.fill('25');
    await varianceSlider.dispatchEvent('input');
    await expect(varianceLabel).toHaveText('25%');

    // Click exfiltration event button
    const simulateThreatBtn = page.locator('button').filter({ hasText: 'Simulate Exfiltration Attempt' });
    await simulateThreatBtn.click();

    const shield = page.locator('#security-shield');
    const statusText = page.locator('#security-status-text');
    const systemStatus = page.locator('#simulator-status');

    // Instantly lock perimeter with warning
    await expect(statusText).toContainText('PERIMETER LOCKED: Exfiltration threat detected');
    await expect(systemStatus).toHaveClass(/status-warning/);
    await expect(systemStatus).toContainText('Threat Lockout');

    // Click system override reset button
    const overrideBtn = page.locator('button').filter({ hasText: 'Reset System Perimeter' });
    await overrideBtn.click();

    const logBox = page.locator('#security-log');
    await expect(logBox).toContainText('SYSTEM: Administrator override triggered');

    // Fast forward 1000ms
    await page.clock.fastForward(1000);

    // Verify security cleared and status set back to OK
    await expect(statusText).toContainText('Perimeter Clean');
    await expect(systemStatus).toHaveClass(/status-ok/);
    await expect(systemStatus).toContainText('System Operational');
    await expect(logBox).toContainText('SYSTEM: Security perimeter reset');
  });
});
