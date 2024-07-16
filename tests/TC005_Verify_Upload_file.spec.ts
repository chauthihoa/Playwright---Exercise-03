import { test, expect } from '@playwright/test';
test('TC005 - Verify Upload file', async ({ page }) => {
    test.setTimeout(60000);
    await page.goto('https://the-internet.herokuapp.com/');
    await page.waitForLoadState();
    await page.getByRole('link').filter({hasText:"File Upload"}).click();

    await page.locator('#file-upload').setInputFiles('./tests/fixtures/myfile.pdf');
    await page.locator('#file-submit').click();
    await expect(page.locator('#uploaded-files')).toHaveText('myfile.pdf');
});