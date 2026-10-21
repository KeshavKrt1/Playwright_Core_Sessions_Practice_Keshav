import { test } from "@playwright/test";
import { format } from "node:path";


test('Keyboard  Tab Sequence with Accessibility Form Submission test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    let searchBox = page.getByRole('textbox', { name: 'Search' });
    await searchBox.fill('Macbook');

    //press Enter from the keyboard:
    await searchBox.press('Enter');

    await page.pause();
});

test('keyboard typing on register page test', async ({ page }) => {
   
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    await page.getByRole('textbox', { name: '* First Name' }).fill('Kumara');

    await page.keyboard.press('Tab');
    await page.keyboard.type('dhaara'); //LN

    await page.keyboard.press('Tab');
    await page.keyboard.type('kumaraa@kumar.com') //email

    await page.keyboard.press('Tab');
    await page.keyboard.type('98883838338');

    await page.keyboard.press('Tab');
    await page.keyboard.type('kkk123');

    await page.keyboard.press('Tab');
    await page.keyboard.type('kkk123');

    await page.keyboard.press('Tab'); //sub -- no
    await page.keyboard.press('ArrowRight'); //sub - yes

    await page.keyboard.press('Tab'); //privacy policy

    await page.keyboard.press('Tab'); //checkbox
    await page.keyboard.press('Space'); // click on checkbox

    await page.keyboard.press('Enter'); //press enter - submit the form        

    await page.pause();
});


test('keyboard copy paste test', async ({ page }) => {
   
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    let firstname = page.getByRole('textbox', { name: '* First Name' });
    await firstname.fill('Arnold');

   await firstname.press('ControlOrMeta+A');
   await firstname.press('ControlOrMeta+C');

    let lastname = page.getByRole('textbox', { name: '* Last Name' });
    lastname.press('ControlOrMeta+V');

    await page.waitForTimeout(3000);

    await firstname.press('ControlOrMeta+A');
    await firstname.press('Backspace');

    //hard refresh the page: Ctrl+Shift+R
  // await page.keyboard.press('ControlOrMeta+Shift+R');   -- not working..

    //open webelemen/page in new tab/window
    await page.getByRole('link', { name: 'Forgotten Password' }).click({ modifiers: ['ControlOrMeta'] });


    await page.pause();

});