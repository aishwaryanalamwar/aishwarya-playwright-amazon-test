const {test, expect} = require('@playwright/test');
const { Loginpage } = require('../pages/LoginPage');
const users = require('../test-data/users.json');
const helpers = require('../utils/helpers');


test('Valid Login Test', async ({page}) => {
    const loginpage = new Loginpage(page);

    await loginpage.goto();
    await loginpage.login(users.validUser.username, users.validUser.password);
    const isSuccess = await loginpage.verifyLoginSuccess();
    expect(isSuccess).toBeTruthy();
});

test('Invalid Login Test', async ({page}) => {
    const loginpage = new Loginpage(page);
    await loginpage.goto();
    await loginpage.login(users.invalidUser.username, users.invalidUser.password);
    const isFailure = await loginpage.verifyLoginFailure();
    expect(isFailure).toBeTruthy();
});

test('Empty Login Test', async ({page}) => {
    const loginpage = new Loginpage(page);
    await loginpage.goto();
    await loginpage.login(users.emptyUser.username, users.emptyUser.password);
    const isFailure = await loginpage.verifyLoginFailure();
    expect(isFailure).toBeTruthy();
});



