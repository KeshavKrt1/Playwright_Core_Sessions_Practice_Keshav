import { test, Page } from '@playwright/test';


test('kill random popups test', async ({ page }) => {

    await page.addLocatorHandler(
        page.locator('#CybotCookiebotBannerCloseButtonE2E'),
        async (handleBtn) => {
            await handleBtn.click();
            console.log('cookie banner is killed...');
        }
    );


    await page.goto('https://orangehrm.com/contact-sales');
    await page.getByRole('textbox', { name: 'Full Name' }).fill('Peter');


    await page.pause();
});


test('handle cricinfo.com random popup test', async ({ page }) => {

    await page.addLocatorHandler(
        page.getByRole('button', { name: 'Accept All' }),
        async (cricinfopopupHandlerBtn) => {
            await cricinfopopupHandlerBtn.click();
            console.log('cookie banner popupp is killed...');
        }
    );

    await page.goto('https://www.cricinfo.com/');
    await page.getByRole('link', { name: 'Live Scores' }).click();

    await page.pause();
});

test('spice jet location popup test', async ({ page }) => {
    
    //In playwright.config.ts file, under 'use:' object, write -- permissions: [], then location popups/any alerts will be disabled.
    await page.goto('https://www.spicejet.com/');

    await page.pause();
});