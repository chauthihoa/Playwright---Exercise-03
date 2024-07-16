import { test, expect } from '@playwright/test';
test('TC007 - Verify Input', async ({ page }) => {
    test.setTimeout(60000);
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForLoadState();
    await expect(page).toHaveTitle('Automation Testing Practice');
    let nameElement = page.locator("#name");
    let addressElement = page.locator("#textarea");
    await nameElement.fill('Hoa Chau');
    await addressElement.fill('Quan 7, HCM');
    await nameElement.clear();
    await expect(nameElement).toBeEmpty();
    await addressElement.clear();
    await expect(addressElement).toBeEmpty();
});