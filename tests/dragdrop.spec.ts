import { test } from '@playwright/test';

test('drag and drop test', async ({ page }) => {
    await page.goto('https://jqueryui.com/resources/demos/droppable/default.html');

    let source = page.locator('#draggable');
    let target = page.locator('#droppable');

    await source.dragTo(target);

    await page.pause();
});

test('level 2 menu & sub menu handling test', async ({ page }) => {
    await page.goto('https://www.spicejet.com/');

    await page.getByText('Travel Policies', { exact: true }).hover();

    //wait for the sub menu element

    await page.getByText('Passenger Support', { exact: true }).waitFor({ state: 'visible' });

    await page.getByText('Passenger Support', { exact: true }).click();

    await page.pause();
});

test('level 4 menu & sub menu element handling test', async ({ page }) => {
    await page.goto('https://www.bigbasket.com/');

    // await page.locator('[id="headlessui-menu-button-:Rld956:"]').click();

    await page.getByText('Shop by', { exact: true }).last().click();

    await page.waitForTimeout(5000);

    await page.locator('[id*="headlessui-menu-items"]').getByRole('link', { name: 'Beverages' }).last().hover();

    await page.waitForTimeout(5000);

    await page.getByRole('link', { name: 'Tea', exact: true }).hover();

    await page.waitForTimeout(5000);

    await page.getByRole('link', { name: 'Green Tea' }).click();

    await page.pause();

});


test(`adv auto test`, async ({ page }) => {
    await page.goto(`https://shop.advanceautoparts.com/`);
    let allTabs = await page.locator(`ul.css-jungqb`).all();

    for (let ele of allTabs) {
        let tabsText = await ele.textContent();
        console.log(tabsText);
    }


    await page.pause();

});


// getByText('Shop', {exact: true}).nth(0)

test('best buy shop test', async ({ page }) => {
    await page.goto('https://www.bestbuy.com/?intl=nosplash');

    await page.getByText('Shop', { exact: true }).nth(0).click();
    // await page.locator('[data-testid="menu-level1-container"]').getByRole('button', { name: 'Video Games' }).click();
    // await page.locator('[data-testid="menu-level2-container"]').getByRole('button', { name: 'XBOX' }).click();

    await page.getByRole('button', { name: 'Cell Phones', exact: true }).click();
    await page.getByRole('button', { name: 'iPhone', exact: true }).click();
    await page.getByRole('link', { name: 'iPhone 18 Pro', exact: true }).click();

    await page.pause();
});