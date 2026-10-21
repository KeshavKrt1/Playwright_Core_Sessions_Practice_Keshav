

//JS Alert -- JS popup
//JS methods
//1. alert  -- (message/error messg)
//2. confirm --(are you sure??)
//3. prompt -- (messg with textbox)

import { test, Page } from '@playwright/test';

test('JS Alert popup handle test', async ({ page }) => {
    
    //1. Alert - just accept it
    page.on('dialog', async (popup) => {
        if (popup.type() === 'alert') {
            console.log(popup.message());
            await popup.accept(); // click ok
        }
    });

    //2. Confirm - just accept it
    page.on('dialog', async (popup) => {
        if (popup.type() === 'confirm') {
            console.log(popup.message());
            await popup.accept(); // clicks ok
            //   await popup.dismiss(); // clicks cancel
        }
    });

    //3. Prompt - just accept it
    page.on('dialog', async (popup) => {
        if (popup.type() === 'prompt') {
            console.log(popup.message());
            await popup.accept('Naveen Automation Labs....'); // clilks ok and enter the text messg
            //await popup.dismiss(); // clicks cancel
        }
    })





    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    await page.getByRole('button', { name: 'Click for JS Alert' }).click();
    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: 'Click for JS Confirm' }).click();
    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: 'Click for JS Prompt' }).click();
    await page.waitForTimeout(3000);


    await page.pause();
});


test('rediff mail alert popup test', async ({ page }) => {

    page.on('dialog', async (popup) => {
        if (popup.type() === 'alert') {
            console.log(popup.message());
             await page.waitForTimeout(3000);
            await popup.accept();
        }
    })
   
    await page.goto('https://mail.rediff.com/cgi-bin/login.cgi');

    await page.getByRole('button', { name: 'Log In' }).click();

    await page.pause();
});