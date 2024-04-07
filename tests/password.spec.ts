import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/');
  // Testing
  const forgotpasswordlink = page.getByRole('link', {name: 'Forgot Password'});
  await forgotpasswordlink.click()
  await expect(page).toHaveTitle(/Test Automation Practice: Working with Forgot Password form/);

  const emailinput = page.locator('#email');
  await expect (emailinput).toBeEditable();
  await emailinput.fill('cYo8faaaTCFS@tempsmtp.com');
  await expect (emailinput).toHaveValue('cYo8faaaTCFS@tempsmtp.com');

  const retrievepassword = page.getByRole('button', {name: 'Retrieve Password'});
  await retrievepassword.click();

  await page.goto('https://www.mailslurp.com/tools/fake-email-generator/?email=cYo8faaaTCFS%40tempsmtp.com');
  const emailinputlink = page.locator('h2').first();
  await expect(emailinputlink).toBeVisible({timeout: 30000});
  await expect (emailinputlink).toContainText('noreply.practice@expandtesting.com');


});

