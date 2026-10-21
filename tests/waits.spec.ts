

//1. Auto-waiting process:
//Actions: click, fill, check, hover, etc... ---> automatically wait for the element.
//check:
//1. Element is attached to the DOM or not..
//2. Element is visible on the page or not..
//3. Element is stable (not animating) or not
//4. Element is enabled or not..
//5. All the events are also completed/stable

import { expect, test } from '@playwright/test';


test('wait test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    await page.getByRole('button', { name: 'Continue' }).click();

    //explicit waits: dynamic waits - meaning - if the elemenet is found within 2 sec out of 5 sec, then rest of the 3 seconds will be ignored

    //1. expect: default time: 5000ms or 5 secs
   // expect(page.getByText('First Name must be between 1 and 32 characters!', { exact: true })).toBeVisible();

    //2. wait for URL: 
   // await page.waitForURL(/route=account\/register/, { timeout: 5000 }); //5 secs

    //3. wait for event: dialog, filechooser, download, page

    //4. static wait: pause for 5 secs always.
    // await page.waitForTimeout(5000); // not a good practice --> only for debugging purpose we can use it

    //5. wait for the element: explicitly waiting for the element:
    //5.1: waitForSelector() ---> legacy wait --Discouraged by Pw
    //this won't work for the accessibility based locators like getBy methods. 
    //this will work only with css/xpath/text
    //await (await page.waitForSelector('#input-firstname', {state: 'visible', timeout: 5000})).fill('Keshav');
    
    //5.2: waitFor() --v1.6
    //states: 4: attached, detached, hidden, visible
   // await page.locator('#input-firstname').waitFor({ state: 'visible', timeout: 5000 });
    await page.locator('#input-firstname123').fill('Keshav');
   // await page.getByRole('textbox', { name: '* Last Name' }).waitFor({ state: 'visible', timeout: 5000 });







    await page.pause();
});