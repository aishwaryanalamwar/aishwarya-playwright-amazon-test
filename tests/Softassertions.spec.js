const {test,expect} = require ('@playwright/test')

test('soft assertions',async({page})=>{

    //Hard Assertations
    //await page.goto('https://www.demoblaze.com/')
    //await expect(page).toHaveURL('https://www.demoblaze.com/')
    //await expect(page).toHaveTitle('STORE')
    //const logo = await page.locator('.navbar-brand')
    //await expect(logo).toBeVisible();

//Soft Assertations
await page.goto('https://www.demoblaze.com/')
    await expect.soft(page).toHaveURL('https://www.demoblaze.com/')
    await expect.soft(page).toHaveTitle('STORE123')
    const logo = await page.locator('.navbar-brand')
    await expect.soft(logo).toBeVisible();


    
})
