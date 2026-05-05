const {test,expect} = require('@playwright/test');

test('Checkboxes', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const checkboxeslocators = [
        page.locator("//input[@id='sunday' and @type='checkbox']"),
        page.locator("//input[@id='monday' and @type='checkbox']"),
        page.locator("//input[@id='tuesday' and @type='checkbox']")
    ]

    for (const checkbox of checkboxeslocators) 
        {
    await checkbox.check()
        }

        await page.waitForTimeout(5000);

        for (const checkbox of checkboxeslocators) 
        {
    await checkbox.uncheck()
        }
})