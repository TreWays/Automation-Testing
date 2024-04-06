import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/');

  const webInputsLink = page.getByRole('link', {name: 'Add/Remove Elements'});
  await webInputsLink.click()

  await expect(page).toHaveTitle('Test Automation Practice: Working with web Elements (Add and Remove)');

  await page.getByRole('button', {name: 'Add Element'}).click();
  await expect(page.getByRole('button', {name: 'Delete'})).toBeVisible();

  await page.getByRole('button', {name: 'Delete'}).click();
});

