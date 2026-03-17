const {test, expect} = require('@playwright/test');

test('Autosuggest Dropdown', async ({ page }) => {

    await page.goto('https://www.redbus.in/');

    await page.locator('#src').fill('Delhi');
    await page.waitForSelector ('//div[@role="listbox"]//div[@role="option"]'); // Wait for the dropdown to appear

const options = await page.locator('//div[@role="listbox"]//div[@role="option"]');

for (let option of options)
{
    let text = await option.textContent();
    console.log(text);
}
})