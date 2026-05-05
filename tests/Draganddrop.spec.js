const { test, expect } = require('@playwright/test');

test('Drag and Drop', async ({ page }) => {

  await page.goto('https://demoqa.com/droppable');

  const source = page.locator('#draggable');
  const target = page.locator('#droppable').first();

  await source.dragTo(target);

  //await expect(target).toHaveText('Dropped!');
  await page.waitForTimeout(5000);
});