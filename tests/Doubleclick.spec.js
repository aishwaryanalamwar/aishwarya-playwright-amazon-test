const {test, expect} = require('@playwright/test');

test ('Double Click', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    const doubleClickMe = page.locator('#HTML10 > div.widget-content > button')
    await doubleClickMe.dblclick()

    const f2 = page.locator('//input[@id="field2"]')
    await expect(f2).toHaveValue('Hello World!')
    await page.waitForTimeout(2000)
})