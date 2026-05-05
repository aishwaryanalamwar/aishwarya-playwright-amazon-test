const { test, expect } = require('@playwright/test');

test('Login Test', async ({ page }) => {
  await page.goto('https://customer-stage.servicehqtrs.com/login');

  await page.locator('input[type=email]').fill('auxcap002@yopmail.com');
  await page.locator('input[type=password]').fill('Login@123');
  
  // Debug: Check if button is clickable
  const loginButton = page.getByRole('button', { name: /login/i });
  console.log('Button is enabled:', await loginButton.isEnabled());
  console.log('Button is visible:', await loginButton.isVisible());
  
  // Click using getByRole (more reliable) instead of XPath
  await loginButton.click();
  
  // Alternative: Try pressing Enter key
  // await page.locator('input[type=password]').press('Enter');
  
  // Wait for response
  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'login-result.png' });
  
  // Check if dialog appeared or if we're still on login page
  const currentUrl = page.url();
  console.log('Current URL after login:', currentUrl);
  console.log('Still on login page:', currentUrl.includes('/login'));
  
  const dialogExists = await page.locator('[role="dialog"]').count();
  if (dialogExists > 0) {
    const passcodeHeading = page.locator("h5:has-text('Enter Pass Code')");
    await expect(passcodeHeading).toBeVisible();
  } else {
    throw new Error('Login button click did not work - still on login page. Check login-result.png');
  }
});