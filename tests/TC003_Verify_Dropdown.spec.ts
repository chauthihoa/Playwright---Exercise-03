import { test, expect } from '@playwright/test';
test('TC003 - Verify Dropdown', async ({ page }) => {
    test.setTimeout(60000);
    await page.goto('https://the-internet.herokuapp.com/');
    await page.waitForLoadState();
    await page.getByRole('link').filter({hasText:"Dropdown"}).click();
    
    let dropdownElement = page.locator("#dropdown")
    await dropdownElement.selectOption({label: 'Option 2'});
    await expect(page.locator("#dropdown [selected='selected']")).toHaveText("Option 2");
    await dropdownElement.selectOption({index: 1});
    await expect(page.locator("#dropdown [selected='selected']")).toHaveText("Option 1");
    await dropdownElement.selectOption('2');
    await expect(page.locator("#dropdown [selected='selected']")).toHaveText("Option 2");
});