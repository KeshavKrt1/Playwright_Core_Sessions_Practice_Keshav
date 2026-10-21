import { test } from "@playwright/test";


test('svg element test', async ({ page }) => {

    await page.goto('https://www.flipkart.com/');
    await page.getByPlaceholder('Search for Products, Brands and More').first().fill('macbook pro');

    //click on search icon using css:
    await page.getByRole('button', { name: 'Search for Products, Brands and More' }).first().locator('svg[fill="none"]').click();

    //click on search icon using special xpath:
    await page.getByRole('button', { name: 'Search for Products, Brands and More' }).first().locator('//*[local-name()="svg"]').click();

    await page.pause();
});

test('svg graph elements', async ({ page }) => {

   // await page.setViewportSize({ width: 1000, height: 1000 });

    await page.goto('https://petdiseasealerts.org/forecast-map#/');

    await page.waitForTimeout(5000);
    //  let frame = page.frameLocator('//iframe[contains(@id, "map-instance"]');
    let frame = page.frameLocator('iframe[id*="map-instance"]');

    let allRegions = await frame.locator('g.region').all();
    console.log('total number of regions in USA:', allRegions.length);
    
    for (let ele of allRegions) {
        await ele.hover({force: true});
        let stateId = await ele.getAttribute('id');
        console.log(stateId);
        await page.waitForTimeout(500);
    }





    await page.pause();
});