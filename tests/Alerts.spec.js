const {test, expect} = require('@playwright/test');

test.skip('Alerts', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Handle Alert
    page.on('dialog', async dialog => {
        expect(dialog.type()).toBe('alert');
        expect(dialog.message()).toBe('I am an alert box!');
        await dialog.accept();
    }
    );

    await page.locator('button[onclick="myFunctionAlert()"]').click();
    await page.waitForTimeout(2000); // Wait for the alert to be handled

})


test.skip('Test Confirm Dialog', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Handle Alert
    page.on('dialog', async dialog => {
        expect(dialog.type()).toBe('confirm');
        expect(dialog.message()).toBe('Press a button!');
        await dialog.accept();
    })
    await page.locator('button[onclick="myFunctionConfirm()"]').click();
    await expect(page.locator('#demo')).toHaveText('You pressed OK!');
    await page.waitForTimeout(2000); // Wait for the confirm to be handled

              
})


test('Test Prompt Dialog', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    // Handle Prompt
    page.on('dialog', async dialog => {
        expect(dialog.type()).toBe('prompt');
        expect(dialog.message()).toBe('Please enter your name:');
        await dialog.accept('Playwright User');
    })
    await page.locator('button[onclick="myFunctionPrompt()"]').click();
    await expect(page.locator('//p[@id="demo"]')).toHaveText('Hello Playwright User! How are you today?');
    await page.waitForTimeout(2000); // Wait for the prompt to be handled

})