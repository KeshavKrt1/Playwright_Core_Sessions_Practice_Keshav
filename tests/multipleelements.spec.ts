import { Locator, test } from "@playwright/test";


test('get all the link test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');
   
    let allLinks: Locator[]= await page.locator('a[href]').all();
    console.log('Total links:', allLinks.length); //73

    // let TotalLinks = await page.locator('a[href]').count();
    // console.log('Total count of links:', TotalLinks);

    // let linksCount = await page.getByRole('link').count();
    // console.log('Total links with Role:', linksCount);

    for (let ele of allLinks) {
        let text = await ele.textContent();
        let href = await ele.getAttribute('href');
        console.log(text, ':', href);      
}
});

test('fetch all the iamges test', async ({ page }) => {
    await page.goto('https://www.flipkart.com/');

    let allImages = await page.locator('img').all();
    console.log('Total images:', allImages);
    console.log('Length of images:', allImages.length);

    for (let ele of allImages) {
        let altValue = await ele.getAttribute('alt');
        console.log(altValue);
    }
});


test('iterate the links and click with break test', async ({ page }) => {
   
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    let allRightLinks: Locator[] = await page.locator('.list-group-item').all();
    console.log('Right side links total: ', allRightLinks.length); //13 --: 0 to 12
    
    for (let ele of allRightLinks) {
        await ele.highlight();
        let textoflinks = await ele.textContent();
        console.log(textoflinks);
        await page.waitForTimeout(1000);
        // let hrefVal = await ele.getAttribute('href');
        // console.log('href of all links: ', hrefVal);

        if (textoflinks === 'Recurring payments') {
            await ele.click();
            break;

        }
        
    }
    await page.pause();
});

//I tried initially, not working...!

test('Footer row links title fetch test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    let allFooterLinks: Locator[] = await page.locator('.row').all();
    console.log('Total footer links:', allFooterLinks.length);

    for (let ele of allFooterLinks) {
        await ele.highlight();
        let footerLinks = await ele.textContent();
        console.log(footerLinks);

        if (footerLinks) {
            await ele.click();
            console.log('Title:', await page.title());
            await page.goBack();
            
        }

    }
    // let aboutUslink = page.getByRole('link', { name: 'About Us', exact: true });
    // console.log(await page.title());
    // await page.waitForTimeout(2000);
    // await page.goBack();


    // let DeliveryInfo = page.getByRole('link', { name: 'Delivery Information', exact: true });
    // console.log(await page.title());
    // await page.waitForTimeout(2000);
    
    // await page.goBack();
    // let privacyPolicy = page.getByRole('link', { name: 'Privacy Policy', exact: true });
    // console.log(await page.title());
    // await page.waitForTimeout(2000);
    
    // await page.goBack();
    // page.getByRole('link', { name: 'Terms & Conditions', exact: true });
    // console.log(await page.title());
    // await page.waitForTimeout(2000);

});


/*chatGPT provided code: still not working...!
test('Iterate footer links and get page titles', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    // Get all footer rows
    const footerRows = await page.locator('.row').all();

    console.log('Total footer rows:', footerRows.length);

    // Iterate through each footer row
    for (let row of footerRows) {

        // Find all links inside the current footer row
        const links = await row.locator('a').all();

        // Iterate through each link
        for (let link of links) {

            let linkText = await link.innerText();

            console.log(`Clicking footer link: ${linkText}`);

            await link.click();

            // Get title of the navigated page
            let title = await page.title();

            console.log(`Title: ${title}`);

            // Browser back
            await page.goBack();
        }
    }
}); */

// one more use case:

test('iterate all the links text test', async ({ page }) => {
    
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    
    let allPanelLinks: string[] = await page.locator('.list-group-item').allInnerTexts();
    console.log(allPanelLinks.length);

    for (let ele of allPanelLinks) {
        console.log(ele);
    }

});
   

test('get all l2 headers text test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('test1@test122.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('pw123');
    await page.getByRole('button', { name: 'Login' }).click();

    let headerTexts: string[] = await page.getByRole('heading', { level: 2 }).allInnerTexts();
    console.log('Total headers: ', headerTexts.length);
    console.log(headerTexts);
});
   