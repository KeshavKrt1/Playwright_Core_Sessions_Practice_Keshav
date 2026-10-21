import { Locator, Page, test } from '@playwright/test';

test('two window handle test', async ({ browser }) => {

    let context = await browser.newContext();
    let page = await context.newPage();
    await page.goto('https://orangehrm.com/contact-sales');


    let [childWindowPage] = await Promise.all([
        context.waitForEvent('page'),                       // Start listening the page event in the browser
        page.getByRole('link', { name: 'About Us' }).click()      // this will click on the link and generate a new page
    ]);

    await childWindowPage.waitForLoadState(); // child window is loaded properly or not.. checking.

    let allPages = context.pages();
    console.log('Total no of pages:', allPages.length); //2

    await childWindowPage.bringToFront();
    console.log('the child window title:', await childWindowPage.title());
    console.log('tthe child window header:', await childWindowPage.getByRole('heading', { name: 'Our Leadership Team', level: 2 }).textContent());

    await childWindowPage.close();

    console.log('the parent window title:', await page.title());


    await page.pause();
});


test('multi window handle test', async ({ browser }) => {

    let context = await browser.newContext();
    let page = await context.newPage();

    await page.goto('https://orangehrm.com/contact-sales');

    let links: Locator[] = [
        page.getByRole('link', { name: 'About Us' }),
        page.getByRole('link', { name: 'Contact Us' }),
        page.getByRole('link', { name: 'Press Releases' }),
        page.getByRole('link', { name: 'Become a Partner' })
    ];

    console.log('total no. of links:', links.length);

    let childWindowPages: Page[] = []; //0  ---> 4

    for (let link of links) {

        let [childWindow] = await Promise.all([
            context.waitForEvent('page'),
            link.click()
        ]);

        await childWindow.waitForLoadState();
        childWindowPages.push(childWindow);  // store 'childwindow' into 'childwindowPages'

    }

    console.log('total no. of pages:', context.pages().length); //5

    //go to each and every child window and get the title or url, close it..

    for (let i = 0; i < childWindowPages.length; i++){
        let child = childWindowPages[i];
        await child.bringToFront();
        console.log(await child.title());
        await child.waitForTimeout(1000);
        await child.close();
    }

    //back to the parent window, only 1 tab left

    await page.bringToFront();
    console.log('parent window title:', await page.title());
      console.log('total no. of pages:', context.pages().length); //1

    await page.pause();
});