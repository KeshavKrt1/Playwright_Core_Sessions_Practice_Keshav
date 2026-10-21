import { test } from '@playwright/test'

test('xpath and css test', async ({ page }) => {
    // await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    // await page.locator("//*[@id='input-firstname']").fill('Kumar');

    // let text1 = await page.locator("//h1[text()='Register Account']").textContent();
    // console.log(text1);

    await page.goto('https://naveenautomationlabs.com/opencart/ui/webtable.html');
    await page.locator("//td[text()='Joe.Root']/preceding-sibling::td/input[@type='checkbox']").click();

    //xpath:
    // //htmltag[@attribute='value']   ---> //input[@placeholder='E-Mail Address']


    //CSS:
    //1.
    //id:
    //html#id  --> input#input-firstname

    //2. class:
    //.class
    //htmltag.class
    // .c1.c2.c3..cn   --->  .alert.alert-danger.alert-dismissible

    //3. if id and class not available, then:
    //htmltag[attribute='value']   ---> input[placeholder='E-Mail Address']
    // multi attribute css selector: input[placeholder='E-Mail Address'][name='email]


    await page.pause();
})