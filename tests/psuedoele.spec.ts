import { test } from "@playwright/test";


test('psuedo element test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    //window.getComputedStyle(document.querySelector('label[for="input-firstname"])!, '::before').getPropertyValue('content');

    //run JS code with playwright:

    let content = await page.evaluate(() => {
        return window.getComputedStyle(document.querySelector('label[for="input-firstname"]')!, '::before').getPropertyValue('content');
    });
    console.log(content); //"*"

      let color = await page.evaluate(() => {
        return window.getComputedStyle(document.querySelector('label[for="input-firstname"]')!, '::before').getPropertyValue('color');
    });
    console.log(color); //rgb(255, 0, 0)

    let title = await page.evaluate(() => {
        alert('you are on register page..');
        return document.title;
    });

    console.log(title);
    
    await page.pause();
});