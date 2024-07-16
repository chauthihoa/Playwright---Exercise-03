import { test, expect } from '@playwright/test';
test('TC008 - Verify prompt dialog', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForLoadState();   
    page.on('dialog', async dialog =>{
        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain("Please enter your name:");
        expect(dialog.defaultValue()).toContain("Harry Potter");
        await dialog.accept('Hello Hoa Chau! How are you today?');
    });
    await page.getByRole('button').filter({hasText:"Prompt"}).click();
});