import { test } from "@playwright/test";


test('get the text of textbox value test', async ({page}) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    await page.getByRole('textbox', { name: 'First Name' }).fill('Naveen Automation Labs');
    let firstNameValue = await page.getByRole('textbox', { name: 'First Name' }).inputValue();
    console.log(firstNameValue);
})