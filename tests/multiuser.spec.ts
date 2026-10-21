import { test, BrowserContext, Page, Browser } from '@playwright/test';



test('multi user test', async ({ browser }) => {
    let ctx1: BrowserContext = await browser.newContext(); //window1
    let ctx2: BrowserContext = await browser.newContext(); //window2
    let page1: Page = await ctx1.newPage();
    let page2: Page = await ctx2.newPage();

    await page1.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await page1.locator('#input-email').fill('test1@test122.com');
    await page1.locator('//input[@type="password"]').fill('pw123');
    await page1.locator('//input[@value="Login"]').click();

    await page2.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await page2.locator('#input-email').fill('test2@test2222.com');
    await page2.locator('//input[@type="password"]').fill('pw222');
    await page2.locator('//input[@value="Login"]').click();

    // await page1.locator('//a[text()="Logout"][2]').click();


    // await page1.pause();
    // await page2.pause();

    // await page1.close();
    // await page2.close();

    await browser.close();


})


// test('three users test', async ({ browser }) => {
//     let browser1: BrowserContext = await browser.newContext();
//     let page: Page = await browser1.newPage();
//     page.goto('https://www.google.com/');
//     //page.getByRole('link', { name: 'Get Started' }).click();
// })