import { test } from "@playwright/test";


test('get by text method test', async ({page}) => {
   page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

  //  await page.goto('https://www.shapemyinterview.com/study/playwright-locator-playground.html?v=2026-07-26');


    let header = await page.getByText('Register Account', { exact: true }).textContent();
    console.log(header);

    let headervalue = await page.getByRole('heading', { name: 'Register Account', exact: true }).textContent();
    console.log(headervalue);

    //await page.getByRole('textbox', { name: 'Schedule Interview', exact: true }).fill('26/02/1986');

    await page.waitForTimeout(5000);
})