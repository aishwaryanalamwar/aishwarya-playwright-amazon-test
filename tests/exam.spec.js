const { test, expect } = require('@playwright/test');

test.describe.configure({ mode: 'parallel' });

// Test Case 1 - iPhone
test('iPhone', async ({ page }) => {
  await page.goto('https://www.amazon.in');

  await page.fill('#twotabsearchtextbox', 'iPhone');
  await page.press('#twotabsearchtextbox', 'Enter');

  // Wait for results, skip sponsored — target organic result headings
  await page.locator("button[name='submit.addToCart']").first().click();

  await page.waitForLoadState('domcontentloaded');

  const price = await page.locator('.a-price-whole').first().textContent();
  console.log('iPhone price:', price);

});

// Test Case 2 - Galaxy
test('Galaxy', async ({ page }) => {
  await page.goto('https://www.amazon.in');

  await page.fill('#twotabsearchtextbox', 'Samsung Galaxy');
  await page.press('#twotabsearchtextbox', 'Enter');

 await page.getByRole('button', { name: 'Add to Cart' }).first().click();

  await page.waitForLoadState('domcontentloaded');

  const price = await page.locator('.a-price-whole').first().textContent();
  console.log('Galaxy price:', price);

});