import { test, expect } from '@playwright/test';
test('TC006 - Verify Dynamically Loaded Page Elements', async ({ page }) => {
    test.setTimeout(60000);
    await page.goto('https://the-internet.herokuapp.com/');
    await page.waitForLoadState();
    await page.getByRole('link').filter({hasText:"Dynamic Loading"}).click();
    await page.getByRole('link').filter({hasText:"Example 1: Element on page that is hidden"}).click();
    await page.getByRole('button').filter({hasText:"Start"}).click();
    let loadingElement =  page.locator('#loading');
    await loadingElement.waitFor({state: 'visible'});
    await loadingElement.waitFor({state: 'hidden'});
    await expect(page.locator('#finish > h4')).toHaveText("Hello World!");
});