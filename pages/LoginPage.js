const { expect } = require('@playwright/test');

class Loginpage {

    constructor(page) {
        this.page = page;
        this.username = page.getByLabel('Username');
        this.password = page.getByLabel('Password');
        this.loginbutton = page.getByRole('button', { name: 'Login' });
        this.successmessage = page.getByText('You logged into a secure area!');
        this.errormessage = page.getByText('Your username is invalid!');
        this.logoutbutton = page.getByRole('link', { name: 'Logout' });

    }
    
    async goto() {
        await this.page.goto('/login');
    }

    async login(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginbutton.click();
    }

    async clearandlogin(username, password) {
        await this.username.clear();
        await this.password.clear();
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginbutton.click();
    }

    async verifyLoginSuccess() {
        await this.successmessage.waitFor({ state: 'visible' });
       return await (this.successmessage).isVisible();
    }

    async verifyLoginFailure() {
            await this.errormessage.waitFor({ state: 'visible' });

        return await (this.errormessage).isVisible();
}}

module.exports = { Loginpage };