import { test, expect } from '@playwright/test';

test('Test Table Data', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = page.locator('#productTable');

    // Verify the number of rows in the table
    const rowcount = table.locator('tbody tr');
    console.log('Number of rows in the table: ' + await rowcount.count());
    await expect(rowcount).toHaveCount(5);

    // Verify the number of columns in the table
    const columncount = table.locator('thead tr th');
    console.log('Number of columns in the table: ' + await columncount.count());
    await expect(columncount).toHaveCount(4);

    // Select multiple rows
    await selectproduct(page, table, 'Smartwatch');
    await selectproduct(page, table, 'Tablet');
    await selectproduct(page, table, 'Laptop');

    await page.waitForTimeout(2000); // Wait for the checkboxes to be checked
});

async function selectproduct(page, table, name) {
    const matchedrow = table.locator('tbody tr').filter({ has: page.locator('td').filter({ hasText: name }) });
    await matchedrow.locator('input[type="checkbox"]').check();
}

 
//print all product data using for loop

test('Print All Product Data', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = page.locator('#productTable');
    const rowcount = await table.locator('tbody tr').count();
    const columncount = await table.locator('thead tr th').count();

});

for (let i = 0; i < await rowcount.count; i++) {
    const row = table.locator('tbody tr').nth(i);
    const tds = row.locator('td');
    
    for (let j = 0; j < await tds.count(); j++) {
        const cellData = await tds.nth(j).textContent();
        console.log(cellData);
}
}