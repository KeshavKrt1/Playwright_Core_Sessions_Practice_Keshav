
// formsite.com/templates/registration-form-templates/vehicle-registration-form/

import { test, Frame } from "@playwright/test";

test('iframe element test', async ({ page }) => {

    await page.goto('https://www.formsite.com/templates/registration-form-templates/vehicle-registration-form/');

    await page.getByTitle('Vehicle-Registration-Forms-and-Examples').click();

    let iframeLocator = page.frameLocator('#frame-one748593425');

    await iframeLocator.getByRole('textbox', { name: 'Proposal title' }).fill('Automation testing');

    await iframeLocator.getByRole('textbox', { name: 'Location' }).fill('Bengaluru');

    let header = await page.getByRole('heading', { name: 'Vehicle Registration Form', level: 3 }).innerText();
    console.log(header);


    await page.pause();
});


test('frame test', async ({ page }) => {
    await page.goto('https://www.londonfreelance.org/courses/frames/index.html');

    let header = await page.frameLocator('[name="main"]').getByRole('heading', { level: 2 }).innerText();
    console.log(header);

    let footer = await page.frameLocator('[name="bot"]').getByRole('heading', { level: 2 }).innerText();
    console.log(footer);

    await page.pause();
});


test('total frames count test', async ({ page }) => {
    await page.goto('https://www.londonfreelance.org/courses/frames/index.html');

    let allFrames: Frame[] = page.frames();
    let frameCount = allFrames.length;
    console.log('Total no. of frames:', frameCount); //9

    for (let ele of allFrames) {
        let frameName = ele.name();
        let frameURL = ele.url();
        console.log(frameName, ':', frameURL);

    }



    // let framecount = await page.locator('//frame').count();
    // console.log(framecount);

    await page.pause();
});

test('nested iframe test', async ({ page }) => {

    await page.goto('https://www.dezlearn.com/nested-iframes-example/');

    let parentFrame = page.frameLocator('#parent_iframe');
    let childFrame = parentFrame.frameLocator('#iframe1');

    await childFrame.getByRole('button', { name: 'Click Here' }).click();
    let childmsg = await childFrame.locator('#processing').innerText();
    console.log(childmsg);

    console.log('------------------------');

    await parentFrame.getByRole('button', { name: 'Click Here' }).click();
    let parentmsg = await parentFrame.locator('#processing').innerText();
    console.log(parentmsg);

    console.log('----------------------------');

    let mainheader = await page.getByRole('heading', { name: 'Nested iFrames Example', level: 2 }).innerText();
    console.log(mainheader);

    // await page
    //     .frameLocator('##parent_iframe')
    //     .frameLocator('#iframe1')
    //     .getByRole('button', { name: 'Click Here' })
    //     .click();

    await page.pause();
});