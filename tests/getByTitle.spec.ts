import { test } from "@playwright/test";


test('getByTitle locator test', async ({page}) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    //it will work only if <title> attribute is present for the element.
    await page.getByTitle('naveenopencart').click();

    await page.waitForTimeout(5000);
})