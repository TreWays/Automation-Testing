import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/');
  // Testing
  const forgotpasswordlink = page.getByRole('link', {name: 'Forgot Password'});
  await forgotpasswordlink.click()
  await expect(page).toHaveTitle(/Test Automation Practice: Working with Forgot Password form/);

  const emailinput = page.locator('#email');
  await expect (emailinput).toBeEditable();
  await emailinput.fill('davis.tre13@yahoo.com');
  await expect (emailinput).toHaveValue('davis.tre13@yahoo.com');

  const retrievepassword = page.getByRole('button', {name: 'Retrieve Password'});
  await retrievepassword.click();
});

