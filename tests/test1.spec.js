import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto(' https://the-internet.herokuapp.com/javascript_alerts');
  
  page.on('dialog',async dialog =>{

    await page.getByRole('button', { name: 'Click for JS Prompt' }).click();
    dialog.message();
    console.log(dialog.message());
    
  })
});
