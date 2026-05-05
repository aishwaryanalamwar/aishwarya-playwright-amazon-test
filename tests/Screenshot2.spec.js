const {test, expect} = require('@playwright/test');

test('Screenshot2', async ({page}) => {

    await page.goto('https://www.demoblaze.com/')
    //login
    await page.locator('#login2').click(); 
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123')
    await page.locator('button:has-text("Log in")').click()
})