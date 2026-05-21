import { test, expect } from '@playwright/test';

test.describe('Booking.com Cars', () => {

  test('Core rental search flow', async ({ page }) => {

    await page.goto('https://www.booking.com/cars/index.html');

    // Accept cookies
    const cookiesButton = page.locator('#onetrust-accept-btn-handler');

    if (await cookiesButton.isVisible()) {
      await cookiesButton.click();
    }

    // Fill pickup location
    const locationInput = page.locator('input[placeholder*="Pick-up location"]');

    await locationInput.fill('New York');

    // Select autocomplete option
    await page.locator('text=New York').first().click();

    // Open date picker
    await page.locator('[data-testid="searchbox-datepicker-field-pick-up"]').click();

    // Select pickup date
    await page.locator('[data-date="2026-06-10"]').click();

    // Select drop-off date
    await page.locator('[data-date="2026-06-15"]').click();

    // Submit search
    await page.locator('button[type="submit"]').click();

    // Verify results page opened
    await page.waitForURL(/searchresults/);

    // Verify cars loaded
    await expect(page.locator('body')).toContainText(/cars|vehicles|results/i);
  });

  test('Negative test - empty search', async ({ page }) => {

    await page.goto('https://www.booking.com/cars/index.html');

    await page.locator('button[type="submit"]').click();

    await expect(page.locator('body')).toContainText(/pick-up|location|required/i);
  });

});
