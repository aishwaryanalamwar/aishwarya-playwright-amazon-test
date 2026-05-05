const {test, expect} = require('@playwright/test');

test('Upload file', async ({page}) => {

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');

    await page.locator('#filesToUpload').setInputFiles(['tests/uploadfiles/04th April 2026.pdf', 'tests/uploadfiles/06th April 2026.pdf']);
   await page.waitForTimeout(5000);

   expect(await page.locator('#fileList').textContent()).toContain('04th April 2026.pdf');
   expect(await page.locator('#fileList').textContent()).toContain('06th April 2026.pdf');

   //remove files
   await page.locator('#filesToUpload').setInputFiles([]);
   await page.waitForTimeout(5000);

   expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('No Files Selected');
  await page.waitForTimeout(5000);
});