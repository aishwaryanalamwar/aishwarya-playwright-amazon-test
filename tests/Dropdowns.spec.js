const {test,expect} = require('@playwright/test');

test('Dropdowns', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
   //await page.locator ('#country').selectOption({label:'India'});   //by label/visible text
   //await page.locator ('#country').selectOption('India');  //by visible text
   //await page.locator('#country').selectOption({value: 'uk'});  //by value attribute
    //await page.locator('#country').selectOption({index: 3});  //by index
    //await page.selectOption('#country', 'India');




   // Assertions
   // approch 1
  // const options = page.locator('#country option');
    //await expect(options).toHaveCount(10);


    // approch 2
    //const options = await page.$$('#country option');
    //console.log('Total number of dropdown options: ' + options.length);
    //expect(options.length).toBe(10);


    // approch 3  chech presence of specific option in dropdown
    //const content = await page.locator('#country').textContent();
    //await expect (content.includes('India')).toBeTruthy();

   //approch 4
    //const options = await page.$$('#country option');
    //let status = false;
    //for (const option of options) {
        
      // let value= await option.textContent();
      // if (value.includes('India')) 
       // {
       // status= true;
       // break;
       // }
        
   // }
   // expect(status).toBeTruthy();
    
    // approch 5
    const options = await page.$$('#country option');
    for (const option of options) {
        
       let value= await option.textContent();
       if (value.includes('India')) 
        {
       await page.selectOption('#country', 'India');
         break;
        }}
   await page.waitForTimeout(5000);
})
