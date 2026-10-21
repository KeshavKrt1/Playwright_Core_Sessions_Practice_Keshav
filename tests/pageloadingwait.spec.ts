import {test, BrowserContext, Page, Browser } from '@playwright/test';



test('page loading wait until test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login',
        { waitUntil: 'load' })
    
    
    
});

//networkIdle : in the last 500 ms all the api network calls are settled or completed.
//domcontentloaded: the browser is in loaded state but is no guarantee that elements are
// visible on the page
//content: element there in the DOM, and css/js/images are still pending to be visible on the page
//load: DOM is loaded, css/js/apis/images/resources are loaded and visible on the page and page is ready 
 