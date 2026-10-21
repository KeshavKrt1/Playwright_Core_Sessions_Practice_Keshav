
//import { test, expect} from '@playwright/test'  -- Here , both 'test' and 'expect' are objects, where 'expect' is assertion.

import { Browser, chromium, firefox, Page, test, webkit } from '@playwright/test';

test('title test', async ({ page }) => {

    await page.goto('https://www.google.com');
    let title = await page.title();
    console.log('title is: ', title);
    let appURL = page.url();
    console.log('app url:', appURL);
});

test.skip('multiple browser test', async () => {

    //let browser: Browser = await chromium.launch({ headless: false }); //CFT
    //let browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' }); //chrome
    // let browser: Browser = await chromium.launch({ headless: false, channel: 'msedge' }); // ms edge
    // let browser: Browser = await firefox.launch({ headless: false }); // firefox nightly
    // for Opera and Brave browsers:
    // let browser: Browser = await chromium.launch({ headless: false, executablePath: '/Applications/Opera.app/Contents/MacOS/Opera'}); //opera browser
    // let browser: Browser = await chromium.launch({ headless: false, executablePath: '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser'}); //brave browser
    let browser: Browser = await webkit.launch({ headless: false }); //webkit

    let page: Page = await browser.newPage();
    await page.goto('https://www.google.com');
    let title = await page.title();
    console.log('title is: ', title);
    let appURL = page.url();
    console.log('app url is: ', appURL);

    // await page.pause();

})