import { expect, test } from "@playwright/test";



test('expect assertion test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    await page.getByRole('button', { name: 'continue' }).click();

    expect(page.getByText('First Name must be between 1 and 32 characters!', { exact: true })).toBeVisible();

    // expect(100).toBe(101);

    expect(page.url()).toContain('account/register');

    let header = page.getByRole('heading', { name: 'Register Account' });
    await expect(header).toBeVisible();

    //Register Account
    await expect.soft(header).toHaveText('Register Account');

    await expect(page.locator('#column-right a.list-group-item')).toHaveCount(13);

    await page.getByRole('textbox', { name: '* First Name' }).fill('Naveen Automation Labs');
    await expect(page.getByRole('textbox', { name: '* First Name' })).toHaveValue('Naveen Automation Labs');


    await page.goto('https://naveenautomationlabs.com/opencart/ui/data-testid-page.html')

    await expect(page.getByTestId('country-select').locator('option')).toHaveCount(6);

    await page.getByTestId('country-select').selectOption('India');  //action step
    await expect(page.getByTestId('country-select')).toHaveValue('in');  // validation step


    console.log(('------END-------'));
    //  await page.pause();

});


test('expect assetion for the different element test', async ({ page }) => {

    await page.goto('https://naveenautomationlabs.com/opencart/ui/elementstate.html');

    await expect(page.getByRole('button', { name: 'Create Account' })).toBeDisabled();

    await expect(page.getByRole('textbox', { name: 'First Name' })).toBeEmpty();
    await expect(page.getByRole('textbox', { name: 'Email' })).toBeEmpty();

    await expect(page.getByRole('textbox', { name: 'First Name' })).toBeEditable();
    await expect(page.getByRole('textbox', { name: 'Email' })).toBeEditable();

    await expect(page.getByRole('textbox', { name: 'USERNAME (read-only, auto-generated)' })).not.toBeEditable();

    await page.getByRole('checkbox', { name: 'I AGREE TO THE TERMS OF SERVICE AND PRIVACY POLICY' }).check();
    await expect(page.getByRole('checkbox', { name: 'I AGREE TO THE TERMS OF SERVICE AND PRIVACY POLICY' })).toBeChecked();

    await expect(page.getByRole('button', { name: 'Create Account' })).toBeEnabled();

    await page.getByRole('checkbox', { name: 'I agree to the terms of service and privacy policy' }).uncheck();
    await expect(page.getByRole('button', { name: 'Create Account' })).toBeDisabled();

    await expect(page.getByRole('textbox', { name: 'First Name' })).toHaveAttribute('type', 'text');
    await expect(page.getByRole('textbox', { name: 'First Name' })).toHaveAttribute('placeholder', 'Enter first name');

    await expect(page.getByRole('textbox', { name: 'Username (read-only, auto-generated)' })).toHaveAttribute('readonly', '');

    await expect(page.getByRole('textbox', { name: 'First Name' })).toHaveId('firstname', { timeout: 3000 });

    console.log('-------END-------');
});

