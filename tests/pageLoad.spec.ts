import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Automation Testing Practice Website for UI and API/);
});

