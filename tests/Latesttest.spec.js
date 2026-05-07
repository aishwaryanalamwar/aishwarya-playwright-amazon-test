const { test, expect } = require('@playwright/test');
const {Loginpage} = require('../pages/Loginpage');
const {Checkboxpage} = require('../pages/Checkboxpage');
const users = require('../test-data/users.json');
const helpers = require('../utils/helpers');

test('Valid Login Test', async ({page}) => {
    const loginpage = new Loginpage(page);
    await loginpage.goto();
    await loginpage.login(users.validUser.username, users.validUser.password);
    const isSuccess = await loginpage.verifyLoginSuccess();
    expect(isSuccess).toBeTruthy();
});

test('Empty Login Test', async ({page}) => {
    const loginpage = new Loginpage(page);
    await loginpage.goto();
    await loginpage.login(users.emptyUser.username, users.emptyUser.password);
    const isFailure = await loginpage.verifyLoginFailure();
    expect(isFailure).toBeTruthy();
});

test('Invalid Login Test', async ({page}) => {
    const loginpage = new Loginpage(page);
    await loginpage.goto();
    

    await loginpage.login(helpers.generateRandomUsername(), helpers.generateRandomPassword());
    const isFailure = await loginpage.verifyLoginFailure();
    expect(isFailure).toBeTruthy();
});

test('Checkbox Test', async ({page}) => {
    const checkboxpage = new Checkboxpage(page);
    await checkboxpage.goto();
    await checkboxpage.checkFirst();
    await checkboxpage.assertFirstIsChecked();      // ✅ clean!
});

test('Uncheck Checkbox Test', async ({page}) => {
    const checkboxpage = new Checkboxpage(page);
    await checkboxpage.goto();
    await checkboxpage.uncheckFirst();
    await checkboxpage.assertFirstIsUnchecked();    // ✅ clean!
});