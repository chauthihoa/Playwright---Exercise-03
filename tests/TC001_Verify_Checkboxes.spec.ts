import { test, expect } from '@playwright/test';

test('TC001 - Verify Checkboxes', async ({ page }) => {
    test.setTimeout(60000);
    await page.goto('https://the-internet.herokuapp.com/');
    await expect(page).toHaveTitle('The Internet');
    await page.waitForLoadState();
    await page.getByRole('link').filter({hasText:"Checkboxes"}).click();
    await expect(page.getByRole('heading')).toHaveText('Checkboxes');
    let checkbox_01 = page.getByRole('checkbox').first();
    let checkbox_02 = page.getByRole('checkbox').last();
    await checkbox_01.check();
    expect(await checkbox_01.isChecked()).toBeTruthy()
    await checkbox_02.uncheck();
    expect(await checkbox_02.isChecked()).toBeFalsy();
});