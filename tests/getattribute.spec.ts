
import { test } from "@playwright/test";


test('get the text of textbox value test', async ({page}) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    let placeholderValue = await page.getByRole('textbox', { name: 'First Name' }).getAttribute('placeholder');
    console.log('placeholder value is: ', placeholderValue);

    let hrefVal = await page.getByRole('link', { name: 'Forgotten Password' }).getAttribute('href');
    console.log('href value:', hrefVal);
})