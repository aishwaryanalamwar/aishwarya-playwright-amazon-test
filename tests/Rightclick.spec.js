const {test, expect} = require('@playwright/test');

test('Right Click', async ({page}) => {

    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')
    const rightClickMe = page.locator('.context-menu-one')
    await rightClickMe.click({button: 'right'})

    await page.waitForTimeout(2000)
})