import {test, expect} from '@playwright/test';

test('Homepage', async ({page}) => {

    await page.goto('https://www.demoblaze.com/')
    //login
    await page.locator('#login2').click(); 
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123')
    await page.locator('button:has-text("Log in")').click()

    //homepage
    const products = await page.$$('.hrefch');
    expect(products).toHaveLength(9)

    //Logout
    await page.locator('#logout2').click();
})

test ('Add to cart', async ({page}) => {
    await page.goto('https://www.demoblaze.com/')
    //login
    await page.locator('#login2').click(); 
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123')
    await page.locator('button:has-text("Log in")').click()

    //add to cart
    await page.locator('//a[normalize-space()="Samsung galaxy s6"]').click();
    await page.locator('text=Add to cart').click();

     page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept();
    })
})