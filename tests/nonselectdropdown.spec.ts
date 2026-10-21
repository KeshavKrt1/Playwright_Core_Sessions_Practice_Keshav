import { Page, test } from "@playwright/test";

test('non select based dropdown test', async ({ page }) => {
   
    await page.goto('https://www.jqueryscript.net/demo/Drop-Down-Combo-Tree/');

    await page.locator('#justAnInputBox').click();

    //await page.locator('span.comboTreeItemTitle').filter({ hasText: 'choice 2 2' }).first().click();

//tc01: multi selection
// await selectChoice(page, ['choice 5', 'choice 4', 'choice 6 2 2', 'choice 6 2']);

//tc02: single selection
 //   await selectChoice(page, ['choice 2']);

//tc03: all selection
    let allCheckboxes = await page.locator('.comboTreeDropDownContainer').first().locator('input[type="checkbox"]').all();

    for (let allch of allCheckboxes) {
        await allch.click();  
    }   
    

    await page.pause();
});

async function selectChoice(page: Page, choices: string[]): Promise<void>{

    for (let ch of choices) {
        await page.locator('span.comboTreeItemTitle').filter({ hasText: `${ch}` }).first().click();
    }

};

// async function selectAllChoices(page: Page): Promise<void> {
//     for (let allCh of allChoices) {
//         let allCheckboxes = await page.locator('.comboTreeDropDownContainer').first().locator('input[type="checkbox"]').all();     
//     }
// }