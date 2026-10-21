import { test } from "@playwright/test";


test('fill value with delay test', async ({page}) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    await page.getByRole('textbox', { name: 'First Name' }).pressSequentially('Keshav Kulkarni', { delay: 500 });

    await page.pause();
});