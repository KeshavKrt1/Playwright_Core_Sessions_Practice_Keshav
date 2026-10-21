
import {test, Page } from '@playwright/test'

test('shadow dom element test', async ({page}) => {
    
    await page.goto('https://naveenautomationlabs.com/opencart/ui/shadow-dom.html');

    await page.getByRole('button', { name: 'Click Me' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('Keshav');
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.getByRole('textbox', { name: "Type inside nested shadow..." }).fill('Naveen Automation Labs');
    await page.getByRole('button', { name: 'Deep Click' }).click();
    let para = await page.locator('.slotted-body').innerText();
    console.log((para));

    //closed shadow dom element: we cannot automate it...not possible.
    await page.locator('#closed-input').fill('hey its closed...');



    await page.pause();
})