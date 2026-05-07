import { test, expect } from '@playwright/test';

test('Test Table Data', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = page.locator('#productTable');

    const rowcount = table.locator('tbody tr');
    console.log('Number of rows: ' + await rowcount.count());
    await expect(rowcount).toHaveCount(5);

    const columncount = table.locator('thead tr th');
    console.log('Number of columns: ' + await columncount.count());
    await expect(columncount).toHaveCount(4);

    await selectproduct(page, table, 'Smartwatch');
    await selectproduct(page, table, 'Tablet');
    await selectproduct(page, table, 'Laptop');

    await page.waitForTimeout(2000);
});

async function selectproduct(page, table, name) {
    const matchedrow = table.locator('tbody tr').filter({ 
        has: page.locator('td').filter({ hasText: name }) 
    });
    await matchedrow.locator('input[type="checkbox"]').check();
}

// ✅ for loop is now INSIDE the test block
test('Print All Product Data', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = page.locator('#productTable');
    const rowcount = await table.locator('tbody tr').count();
    const columncount = await table.locator('thead tr th').count();

    for (let i = 0; i < rowcount; i++) {
        const row = table.locator('tbody tr').nth(i);
        const tds = row.locator('td');
        const tdcount = await tds.count();

        for (let j = 0; j < tdcount; j++) {
            const cellData = await tds.nth(j).textContent();
            console.log(cellData);
        }
    }
});