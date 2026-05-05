const {test, expect} = require('@playwright/test');

test('Mouse Hover', async ({page}) => {
    await page.goto('https://demo.opencart.com')
    //const Desktops = page.locator('a:has-text("Desktops")')
    //await Desktops.hover()
   //const Mac = page.locator('a:has-text("Mac (1)")')
   //await Mac.hover()
    
await page.waitForTimeout(2000)

})


