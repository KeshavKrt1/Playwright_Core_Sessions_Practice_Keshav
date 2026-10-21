import {test } from "@playwright/test";


test('radio buttonand checkbox test', async ({ page }) => {
    page.goto('https://www.shapemyinterview.com/study/playwright-locator-playground.html?v=2026-07-26');

    //radio:
    await page.getByRole('radio', { name: 'Ruby' }).click();

    //checkbox:
    await page.getByRole('checkbox', { name: 'Cypress', exact: true }).click();
    await page.getByRole('checkbox', { name: 'I agree to the Terms & Conditions', exact: true }).click();
    



    await page.waitForTimeout(5000);
})