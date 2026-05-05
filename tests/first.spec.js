const { test, expect } = require('@playwright/test');

test('My first Playwright test', async ({ page }) => {

    // Step 1 - Go to Google
    await page.goto('https://www.google.com');
    console.log("✅ Opened Google");

    // Step 2 - find serach box and type
        await page.fill('textarea[name="q"]', 'Playwright automation');

    console.log("✅ Typed search term");

    //press enter
    await page.keyboard.press('Enter')
    console.log("✅ Pressed Enter");

    //wait for result
    await page.waitForLoadState('networkidle');
        console.log("✅ Results loaded");

    //Step 5 - Verify URL changed
    await expect(page).toHaveURL(/search/);
    console.log("✅ URL verified!");    

});