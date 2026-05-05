const {test, expect} = require('@playwright/test')

    test('Screenshots', async ({page}) => {
    await page.goto('https://demo.nopcommerce.com/')
    await page.screenshot({path: 'tests/Screenshots/' + Date.now() + '_Homepage.png'})
});

    test.only('Screenshots full page', async ({page}) => {
    await page.goto('https://demo.nopcommerce.com/')
    await page.screenshot({path: 'tests/Screenshots/' + Date.now() + 'Fullpage.png', fullPage:true})

});

test.only('Screenshots Element', async ({page}) => {
    await page.goto('https://demo.nopcommerce.com/')
    await page.locator("//img[@title='Show details for Apple MacBook Pro']").screenshot({path: 'tests/Screenshots/' + Date.now() + 'macbook.png'})

});

