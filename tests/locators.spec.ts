import {test, expect } from "@playwright/test";


test('locators test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('test1@test122.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('pw123');

   let headerValue =  await page.getByRole('heading', { name: 'Returning Customer', level: 2 }).textContent();

    await page.getByRole('button', { name: 'Login' }).click();
    console.log('header value:', headerValue);

    //radio:
    

    await page.waitForTimeout(5000);
})