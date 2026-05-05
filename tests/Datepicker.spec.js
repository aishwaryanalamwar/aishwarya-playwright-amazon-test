const {test, expect} = require('@playwright/test');

test('Datepicker', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
   // await page.fill('#datepicker', '12/12/2024');


 //datepicker
 const year = '2026';
    const month = 'April';
    const date = '19';

    await page.click('#datepicker');

   while (true) {
        const displayedMonthYear = await page.locator('.ui-datepicker-title').textContent();
        if (displayedMonthYear.includes(year) && displayedMonthYear.includes(month)) {
            break;
        }
        await page.click('.ui-datepicker-next');
    }

   /*const dates = await page.$$('.ui-datepicker-calendar td a');
    for (const dateElement of dates) {
        const dateText = await dateElement.textContent();
        if (dateText === date) {
            await dateElement.click();
            break;
        }
    }
*/

//date selection without loop
const dateElement = await page.locator(`.ui-datepicker-calendar td a:text("${date}")`);
await dateElement.click();

    await page.waitForTimeout(3000);
});