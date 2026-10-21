import { test, Page } from "@playwright/test";

test('get by methods test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    //getByLabel: it will only work for input fields.

    await page.getByLabel('E-Mail Address').fill('Keshav@gmail.com');
    await page.getByLabel('password').fill('pw123');

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    // getByPlaceholder : only text fields
    await page.getByPlaceholder('First Name').fill('keshav@123');
    await page.getByPlaceholder('Telephone').fill('72367632763');


    //getByAltText() : only for images
  //  await page.getByAltText('naveenopencart').highlight();
    await page.getByRole('img', { name: 'naveenopencart' }).highlight();


    await page.waitForTimeout(5000);
})