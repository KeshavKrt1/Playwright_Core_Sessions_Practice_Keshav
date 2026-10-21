import test from "@playwright/test";

test.use({ storageState: './opencartstate.json' }); // taking it from 'opencartstate.json' file

test('storage state test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=checkout/cart');
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/account');

    await page.pause();
})