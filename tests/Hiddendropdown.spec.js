const {test, expect} = require('@playwright/test');

test('Hidden Dropdown', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('input[name="username"]').fill('Admin');
    await page.locator('input[name="password"]').fill('admin123');
    await page.locator('button[type="submit"]').click();

    await page.waitForTimeout(5000); // Wait for the page to load after login

   await page.getByRole('link', { name: 'PIM' }).click();
    await page.waitForTimeout(3000); // Wait for the PIM page to load

})