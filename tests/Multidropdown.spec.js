const {test,expect} = require ('@playwright/test')

test('Multidropdown', async ({ page }) => {


    await page.goto('https://testautomationpractice.blogspot.com/');
    //select multiple options
    await page.locator('#colors').selectOption(['Red', 'Blue', 'Green']);

    //Assertions 1
    //const options = await page.locator('#colors option')
    //await expect(options).toHaveCount(7);
    //await page.waitForTimeout(5000);

    //Assertions 2
    //const options = await page.$$('#colors option');
    //console.log('Total number of dropdown options: ' + options.length);
    //expect(options.length).toBe(7);

    //Assertions 3  check presence of specific option in dropdown
    const content = await page.locator('#colors').textContent();
    //await expect (content.includes('Green')).toBeTruthy();
    await expect (content.includes('Grey')).toBeFalsy();
    
    })