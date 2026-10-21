import { test } from "@playwright/test";


test('Right click test', async ({ page }) => {
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');
    
    //right click or context click on context menu

    await page.getByText('right click me', { exact: true }).click({ button: 'right' });

    await page.waitForTimeout(3000);

    await page.getByText('Copy', { exact: true }).click();
    

    await page.pause();
});