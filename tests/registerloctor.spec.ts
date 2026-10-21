import { test, Page } from "@playwright/test";


test('register locator test', async ({ page }) => {
    page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    // await page.getByRole('textbox', { name: '* Password', exact: true }).fill('test@123');

    // await page.getByRole('link', { name: 'Forgotten Password' }).last().click();
    await page.getByRole('link', { name: 'Forgotten Password' }).nth(0).click();


    await page.waitForTimeout(5000);

});