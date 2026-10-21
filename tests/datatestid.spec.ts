import { selectors, test } from "@playwright/test";


test('data test id', async ({ page }) => {

    await page.goto('https://app.hubspot.com/signup-hubspot/crm?hubs_signup-url=www.hubspot.com%2F&hubs_signup-cta=homepage-hero2&_gl=1*1928wag*_gcl_au*MTcwNzk3NTUyMy4xNzg3NzcwNTU1*FPAU*MTcwNzk3NTUyMy4xNzg3NzcwNTU1*_ga*MTQ2MjU5MzIzNC4xNzg3NzcwNTU1*_ga_LXTM6CQ0XK*czE3ODc3NzA1NTQkbzEkZzEkdDE3ODc3NzA2MDEkajEzJGwwJGgw&step=landing_page');

    // data-test-id: "EMAIL"

    selectors.setTestIdAttribute('id');
    await page.getByTestId('FormControl1').fill('keshav_here');
    await page.getByTestId('login').click();


    await page.waitForTimeout(5000);
})