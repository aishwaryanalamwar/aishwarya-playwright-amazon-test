const {test, expect} = require('@playwright/test');

test('Videos', async ({page}) => {

    await page.goto('https://www.demoblaze.com/')
    //login
    await page.locator('#login2').click(); 
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@1')
    await page.locator('button:has-text("Log in")').click()
    await expect(page.locator('#logout2')).toBeVisible()
})