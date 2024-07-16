import { test, expect } from '@playwright/test';
test('TC002 - Verify Drag and Drop', async ({ page }) => {
    test.setTimeout(60000);
    await page.goto('https://the-internet.herokuapp.com/');
    await page.waitForLoadState();
    await page.getByRole('link').filter({hasText:"Drag and Drop"}).click();
    let comlumnA = page.locator("#column-a");
    let comlumnB = page.locator("#column-b");
    await comlumnA.waitFor({state: 'visible'});
    await comlumnB.waitFor({state: 'visible'});
    await comlumnA.dragTo(comlumnB);
    await expect(page.locator("#column-a > header")).toHaveText("B");
});