import { test } from "@playwright/test";


test('single file upload test', async ({ page }) => {
    
    //it should have type='file'
    await page.goto('https://naveenautomationlabs.com/opencart/ui/file-upload.html');

    await page.locator('#single-file').setInputFiles('C:/Users/Keshav/Documents/Webb/index.html');

    await page.waitForTimeout(3000);

    await page.locator('#single-file').setInputFiles([]); // remove the file

    await page.pause()
});

test('multiple files upload test', async ({ page }) => {
    
    //it should have type='file' and 'multiple' attribute
    await page.goto('https://naveenautomationlabs.com/opencart/ui/file-upload.html');

    await page.locator('#multi-file').setInputFiles([
        'C:/Users/Keshav/Documents/Webb/index.html',
        'C:/Users/Keshav/Documents/Webb/index.js',
        'C:/Users/Keshav/Documents/Webb/style.css'
    ]);

    await page.waitForTimeout(5000);

   await page.locator('#multi-file').setInputFiles([]); // remove the file

    await page.pause()
});


test('file upload when type file is not present test', async ({ page }) => {
   
    await page.goto('https://naveenautomationlabs.com/opencart/ui/file-upload.html');

    let [fileUpload] = await Promise.all([
        page.waitForEvent('filechooser'),
        page.locator('#custom-upload-btn').click()

    ]);

    await fileUpload.setFiles([
        'C:/Users/Keshav/Documents/Webb/index.html',
        'C:/Users/Keshav/Documents/Webb/index.js',
        'C:/Users/Keshav/Documents/Webb/style.css'
    ]);


    await page.pause();

    await fileUpload.setFiles([
        'C:/Users/Keshav/Documents/Webb/index.html',
        'C:/Users/Keshav/Documents/Webb/index.js'      
    ]);

    await page.pause();

    await fileUpload.setFiles([]);

    await page.pause();

});