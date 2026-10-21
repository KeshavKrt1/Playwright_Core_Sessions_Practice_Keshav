import { test, expect } from '@playwright/test';

test('open 5 pages and select 3rd page', async ({browser})=>{

  let context = await browser.newContext();

  for(let i=1; i<=5; i++){
    let page = await context.newPage();
    await page.goto('https://www.google.com');
  }

  let pages = context.pages();

  console.log(`Total pages: ${pages.length}`);
  let thirdPage = pages[2];
  await thirdPage.bringToFront();

  console.log(await thirdPage.title());


})

test('dialog handler test', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    let dialogPromise = await page.waitForEvent('dialog');
    await page.getByRole('button', { name: 'click forJS Confirm' }).click();
    let dialog = dialogPromise;
    await dialog.accept();

    await expect(page.locator('#result')).toHaveText('You clicked: Ok');
 
    //Full-Page screenshot:
    await page.screenshot({ path: 'D:/test/screesnhot.png', fullPage: true });
});