import { test } from '@playwright/test';


test('webtable with pagination with single selection test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/ui/webtable-pagination.html');

    while (true) {

        let isUserPresent = await page.locator('td:has-text("john_doe")').first().isVisible();

        if (isUserPresent) {
            await page.locator('table#dataTable tr').filter({ hasText: 'john_doe' }).first().getByRole('checkbox').check();
            break;
        }
        else {
            //user is not present on the 1st page, pagination logic:
            // click on the next icon:

            let nextEle = page.getByRole('button', { name: '>' });
            await nextEle.click();
            await page.waitForTimeout(1500);

            let isNextEleDisabled = await nextEle.isDisabled();
            if (isNextEleDisabled) {
                console.log('pagination is over..username is not found..');
                break;
            }

        }

    }
    // await page.pause();
});

test('webtable pagination with multiple selection test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/ui/webtable-pagination.html');

    while (true) {

        let allUserChecks =
            await page.locator('table#dataTable tr').filter({ hasText: 'john_doe' }).getByRole('checkbox').all();

        if (allUserChecks.length > 0) {

            //select all the checkboxes:
            for (let ele of allUserChecks) {
                await ele.check();

            }
        }

        //go to the next page, click on next icon:
        let nextEle = page.getByRole('button', { name: '›' });

        let isNextEleDisabled = await nextEle.isDisabled();
        if (isNextEleDisabled) {
            console.log('pagination is over..');
            break;
        }

        await nextEle.click();
        await page.waitForTimeout(2000);
    }

    await page.pause();
});


test('webtable pagination test after adding new user test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/ui/webtable-pagination.html');

    await page.getByRole('textbox', { name: 'Username' }).fill('Murthy_murthy');
    await page.getByRole('textbox', { name: 'Email' }).fill('murthy@gmail.com');
    await page.getByRole('textbox', { name: 'Company' }).fill('google');
    await page.getByRole('textbox', { name: 'City' }).fill('Bengaluru');
    await page.getByRole('button', { name: '+ Add Row' }).click();

    while (true) {

        let allUserChecks =
            await page.locator('table#dataTable tr').filter({ hasText: 'Murthy_murthy' }).getByRole('checkbox').all();

        if (allUserChecks.length > 0) {

            //select all the checkboxes:
            for (let ele of allUserChecks) {
                await ele.check();

            }
        }

        //go to the next page, click on next icon:
        let nextEle = page.getByRole('button', { name: '›' });

        let isNextEleDisabled = await nextEle.isDisabled();
        if (isNextEleDisabled) {
            console.log('pagination is over..');
            break;
        }

        await nextEle.click();
        await page.waitForTimeout(2000);
    }

    await page.pause();
});