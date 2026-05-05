const { test, expect } = require('@playwright/test');

test('Screenshot debugging', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/login');


    await page.getByLabel('Username').fill('tomsmith');
    await page.getByLabel('Password').fill('SuperSecretPassword!');
    await page.locator('#wrongButton').click({ timeout: 5000 });


    await expect(page.getByText('You logged into a secure area!')).toBeVisible();

});