const { test, expect } = require('@playwright/test');

test('Builtinlocators', async ({ page }) => {
  await page.goto('https://customer-stage.servicehqtrs.com/login');

  await expect(page.getByAltText('Auxcap logo')).toBeVisible();

  await expect(page.getByText("Don't have an account?")).toBeVisible();

  await expect(page.getByTestId('VisibilityOffOutlinedIcon')).click();

  //page.getByRole('button', { type: 'button' }).click();
})