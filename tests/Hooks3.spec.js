import {test, expect} from '@playwright/test';
import { beforeEach } from 'node:test';
let page;
test.beforeAll(async ({browser}) => {
    page = await browser.newPage();

     await page.goto('https://www.demoblaze.com/')
    //login
    await page.locator('#login2').click(); 
    await page.locator('#loginusername').fill('pavanol')
    await page.locator('#loginpassword').fill('test@123')
    await page.locator('button:has-text("Log in")').click()


}); 

test .afterAll(async () => {
    //Logout
    await page.locator('#logout2').click();
});

test('Homepage', async () => {

   
    //homepage
    const products = await page.$$('.hrefch');
    expect(products).toHaveLength(9)

    
})

test ('Add to cart', async () => {
    

    //add to cart
    await page.locator('//a[normalize-space()="Samsung galaxy s6"]').click();
    await page.locator('text=Add to cart').click();

     page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept();
    })
})