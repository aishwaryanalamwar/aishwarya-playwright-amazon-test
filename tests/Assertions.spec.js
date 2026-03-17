
const{test,expect} =require('@playwright/test')
test('Assertions',async({page})=>{
    await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F');
   await expect(page).toHaveURL('https://demo.nopcommerce.com/register?returnUrl=%2F');
   await expect(page).toHaveTitle('nopCommerce demo store. Register');
   const logo =await (page).locator('.header-logo')
   await expect(logo).toBeVisible();
   const enabled=await page.locator('#small-searchterms')
   await expect(enabled).toBeEnabled();
   //const disabled=await page.locator('#small-searchterms)')
   //await expect(disabled).toBeDisabled();
   const male =await page.locator('#gender-male')
   await male. click(); 
      await expect(male).toBeChecked();
      //await expect(page.locator('.page-title h1')).toHaveText('Register');
          await expect(page.locator('.page-title h1')).toContainText('Regis');

          const email = await page.locator('#Email');
            await email.fill('aish@gmail.com')
            await expect(email).toHaveValue('aish@gmail.com')

            await expect(page.locator('.currency-selector')).toHaveCount(1);
});