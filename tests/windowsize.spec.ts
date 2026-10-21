import { test } from '@playwright/test';

test.use({
    viewport: { width: 1800, height: 1680 }
});

test('viewport window size test', async ({ page }) => {
    
  //  page.setViewportSize({ width: 2000, height: 2200 });
    
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    await page.pause();
});