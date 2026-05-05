const {test,expect} = require('@playwright/test');
const {Checkboxpage} = require('../pages/Checkboxpage');

test('Checkbox Test', async ({page}) => {

    const checkboxpage = new Checkboxpage(page);

    await checkboxpage.goto();
    await checkboxpage.checkFirst();
        await checkboxpage.assertFirstIsChecked();      // ✅ clean!

    
    await checkboxpage.uncheckFirst();
    await checkboxpage.assertFirstIsUnchecked();    // ✅ clean!
});