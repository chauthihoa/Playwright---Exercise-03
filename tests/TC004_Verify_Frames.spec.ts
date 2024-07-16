import { test, expect } from '@playwright/test';
test('TC004 - Verify Frames (alternative)', async ({ page }) => {
    await page.goto('https://www.globalsqa.com/demo-site/frames-and-windows/');
    await page.waitForLoadState();
    await page.locator('#iFrame').click();

    let iFrameArea = page.frameLocator('//iframe[@name="globalSqa"]');
    await iFrameArea.getByPlaceholder('Search...').fill("Playwright");
    await iFrameArea.locator('.button_search').click();
    await expect(iFrameArea.locator('.search_res > p')).toHaveText("Sorry, no posts matched your criteria.");
});