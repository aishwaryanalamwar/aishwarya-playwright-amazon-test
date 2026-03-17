const { test, expect } = require('@playwright/test');

test('Login Test', async ({ page }) => {
  await page.goto('https://customer-stage.servicehqtrs.com/login');

  const pageTitle = await page.title();
  console.log('Page Title is:', pageTitle);

  await expect(page).toHaveURL('https://customer-stage.servicehqtrs.com/login');
  await expect(page).toHaveTitle('Customer Portal');
});
