import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/');

  const webInputsLink = page.getByRole('link', {name: 'Notification Message'});
  await webInputsLink.click()

  await expect(page).toHaveTitle('Test Automation Practice: Working with Notification Message');

});

