const { test, expect } = require('@playwright/test');

test('test1', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');

   await expect(page).toHaveTitle('The Internet');
   await expect (page.getByRole('button', { name: 'Login' })).toBeVisible();
   
    await expect(page.getByRole('button', { name: 'Login' })).toBeEnabled();
    await page.getByLabel('Username').fill('tomsmith');
    await page.getByLabel('Password').fill('SuperSecretPassword!');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('You logged into a secure area!')).toBeVisible();
    await expect(page).toHaveURL(/secure/);
    await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();
    await page.getByRole('link', { name: 'Logout' }).click();
    await expect(page.getByText('You logged out of the secure area!')).toBeVisible();
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/login');
});
