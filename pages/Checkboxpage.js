const { expect } = require('@playwright/test');

class Checkboxpage {

    constructor(page) {
        this.page = page;
        this.checkbox1 = page.locator('input[type="checkbox"]').first();
        this.checkbox2 = page.locator('input[type="checkbox"]').nth(1);
       }
        async goto() {
            await this.page.goto('https://the-internet.herokuapp.com/checkboxes');
        }

        async checkFirst() {
            await this.checkbox1.check();
        }

        async uncheckFirst() {
            await this.checkbox1.uncheck();
        }

        async assertFirstIsChecked() {
              await expect(this.checkbox1).toBeChecked();
          }

    async assertFirstIsUnchecked() {
          await expect(this.checkbox1).not.toBeChecked();
}
    }
    

module.exports = { Checkboxpage };