import { expect, test } from "@playwright/test";
import fs from 'fs';

test('file download test', async ({page}) => {
    
    await page.goto('https://the-internet.herokuapp.com/download');

    let [download] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('link', { name: 'myfile.txt' }).click()
    ]);

   //make sure that there is no failure during downloading process...
    expect(await download.failure()).toBeNull();

    //get the file name:
    console.log('file name:', download.suggestedFilename());

    //save to a aspecific path:
    let filePath = './download/' + download.suggestedFilename();
    await download.saveAs(filePath);

    //verify that the file exists:
    expect(fs.existsSync(filePath)).toBeTruthy();

    //verify the file size > 0
    let fileSize = fs.statSync(filePath).size;
    console.log('file size in bytes:', fileSize);
    expect(fileSize).toBeGreaterThan(0);

    await page.pause();
});