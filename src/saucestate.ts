import { Browser, chromium, expect, Page } from "@playwright/test";


(async () => {
    let browser: Browser = await chromium.launch();
    let page: Page = await browser.newPage();
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
    //await page.locator("//button[@id='add-to-cart-sauce-labs-backpack']").click();

    expect(await page.title()).toBe('Swag Labs');

    await page.context().storageState({ path: './saucecart.json' });


})();