const {test,expect} = require('@playwright/test');

test('Reporter1', async ({page}) => {

    await page.goto('https://www.demoblaze.com/')
})

test('Reporter2', async ({page}) => {

    await page.goto('https://demo.opencart.com/')
})

test('Reporter3', async ({page}) => {
    await page.goto('https://www.saucedemo.com/')
    await expect(page).toHaveTitle('Swag');
})