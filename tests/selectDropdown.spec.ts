import { test, Page } from '@playwright/test';
test('select based dropdown test', async ({ page }) => {
    
    await page.goto('https://orangehrm.com/contact-sales');
    //Role: combobox

    let selectVal: string[] = await page.getByRole('combobox', { name: 'Country' }).selectOption('India'); //direct dropdown value
    console.log(selectVal);

    await page.waitForTimeout(2000);
    
    selectVal = await page.getByRole('combobox', { name: 'Country' }).selectOption({ label: 'Angola' }); //visible text
    console.log(selectVal);

    selectVal = await page.getByRole('combobox', { name: 'Country' }).selectOption({ value: 'Belgium' }); //value attribute
    console.log(selectVal);
    
    selectVal = await page.getByRole('combobox', { name: 'Country' }).selectOption({ index: 15 }); //using index
    console.log(selectVal);

    let currrentVal = await page.getByRole('combobox', { name: 'Country' }).inputValue();
    console.log(currrentVal);

    await page.pause();

});

test('multi selection select dropdown test', async ({page}) => {
    await page.goto('https://selenium08.blogspot.com/2019/11/dropdown.html');
    //multiple attribute is present for the select tag
    //Role: listbox

   let selectVal: string[] = await page.locator("[name='Month']").selectOption(["January", "May", "November", "December"]);
    console.log(selectVal);

    // await page.locator("[name='Month']").selectOption(["January", "May", "November", "December"]);
    // let addedVal = await page.locator('[name="Month"]').inputValue();
    // console.log(addedVal);
    


    await page.pause();
});