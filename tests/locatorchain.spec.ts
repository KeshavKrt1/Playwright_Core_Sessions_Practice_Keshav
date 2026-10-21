import { test, Page } from '@playwright/test';

test('chain locator test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    // locator('form').getByRole('textbox', { name: 'First Name' });
    //locator('#column-right').getByRole('link', {name: 'Forgotten Password'});
    // locator('form').getByRole('link', { name: 'Forgotten Password' });


    await page.locator('form')
        .getByRole('textbox', { name: 'First Name' })
        .fill('Keshav');

    await page.waitForTimeout(2000);

    await page.locator('#column-right')
        .getByRole('link', { name: 'Forgotten Password' })
        .click();

    await page.pause();
});

//td[text()='GUI']/preceding-sibling::td/input[@type='checkbox']  -- xpath with xpath axes
////td[text()='GUI']/following-sibling::td/input[@value='Delete']


test('webtable handling test', async ({ page }) => {
    await page.goto('https://qavbox.github.io/demo/webtable/');

    await page.locator('#table01')
        .locator('tr').filter({ hasText: 'GUI' })
        .getByRole('checkbox')
        .click();

    await page.locator('#table01').locator('tr').filter({ hasText: 'GUI' }).
        getByRole('button', { name: 'Delete' }).click();

    let cityText = await page.locator('#table02').locator('tr').filter({ hasText: 'Ashton Cox' })
        .locator('td').nth(2).innerText();
    console.log(cityText);

    let colCount = await page.locator('#table02 tr th').count();
    console.log('Total column:', colCount);

    let rowCount = await page.locator('#table02 tr').count() - 1;
    console.log('Total rows:', rowCount);

    await page.pause();
});

test('cricinfo scorecard test', async ({ page }) => {
    await page.goto('https://www.cricinfo.com/series/duleep-trophy-2026-27-1546436/south-zone-vs-north-zone-2nd-semi-final-1546440/full-scorecard');
    let colVal = await page.locator('table.ci-scorecard-table').locator('tr').filter({ hasText: 'Sanat Sangwan' }).first().locator('td').nth(1).innerText();
    console.log(colVal);

    await page.pause();
});

//Interview question:
test('fetch data from webtable test', async ({ page }) => {
    await page.goto('https://www.w3schools.com/html/html_tables.asp');

    let fullData = await page.locator('table').first().locator('tr').allInnerTexts();
    console.log('full data length:', fullData.length);

    for (let e of fullData) {
        console.log(e);

        console.log('------------------');
    }
    await page.pause();
});


test('select all the checkboxes in the webtable test', async ({ page }) => {
    await page.goto('https://naveenautomationlabs.com/opencart/ui/webtable.html');
    let checkboxes = await page.locator('table#resultTable tbody tr td').getByRole('checkbox').all();

    
    for (let ele of checkboxes) {
        await ele.click();
        await page.waitForTimeout(500);
    }

    // for (let i = 1; i < checkboxes.length; i++){
    //     await checkboxes[i].click();
    //     await page.waitForTimeout(500);
    // }
    await page.pause();
});



test('cric info elelment test', async ({ page }) => {
    await page.goto('https://www.cricinfo.com/series/women-s-asia-cup-2026-1548888/hong-kong-women-vs-india-women-7th-match-group-a-1548897/full-scorecard');
   
    let playerName = 'Pratika Rawal';
   
    let bowlerName = await page.locator('table.ci-scorecard-table').first()
        .locator('tr').filter({ hasText: `${playerName}`}).first()
        .locator('td').nth(1)
        .locator('span span').innerText();
    
    console.log(bowlerName);

    console.log('====================');

    let playerScoreData = await page.locator('table.ci-scorecard-table').first()
        .locator('tr').filter({ hasText: `${playerName}` }).first()
        .locator('td').all();
    
    for (let ele of playerScoreData) {
        let info = await ele.textContent();
       console.log(info);
      //  process.stdout.write(info);
    }

    await page.pause();
});

