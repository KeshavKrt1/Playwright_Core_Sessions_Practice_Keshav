import test from "@playwright/test";

test.use({ storageState: './saucecart.json' });

test('sauce storage state test', async ({ page }) => {
    page.goto('https://www.saucedemo.com/cart.html');
});

