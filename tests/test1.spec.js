import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://customer-stage.servicehqtrs.com/login');
  await page.getByRole('textbox', { name: 'Email' }).fill('Auxcap002@yopmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Login@123');
  await page.getByRole('button', { name: 'Login' }).click();
});