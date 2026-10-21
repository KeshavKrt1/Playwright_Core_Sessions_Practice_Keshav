
//IIFE - Immediately Invoked Function Expression

import { chromium, expect, Page } from "@playwright/test";

(async () => {
    let browser = await chromium.launch({ headless: false, channel: 'chrome' });
    let page: Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await page.locator('#input-email').fill('test1@test122.com');
    await page.locator('#input-password').fill('pw123');
    await page.locator("//input[@value='Login']").click();

    expect(await page.title()).toBe('My Account'); //assertion

    await page.context().storageState({ path: 'opencartstate.json' });

})();

//tsc ---> authstate.js
//node authstate.js


