import { test, expect } from '@playwright/test';
import { text } from 'stream/consumers';

test('has title', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/');

  const webInputsLink = page.getByRole('link', {name: 'Web inputs'});
  await expect(page).toHaveTitle(/Web Inputs/);
  await webInputsLink.click();

  const numberInput = page.getByLabel('Input Number');
  await expect(numberInput).toBeEditable();
  await numberInput.fill('4');
  await expect(numberInput).toHaveValue('4');

  const textInput = page.getByLabel('Input Text');
  await expect(textInput).toBeEditable();
  await textInput.fill('test');
  await expect(textInput).toHaveValue('test');

  const passwordInput = page.getByLabel('Input Password');
  await expect(passwordInput).toBeEditable();
  await passwordInput.fill('test');
  await expect(passwordInput).toHaveValue('test');

  const dateInput = page.getByLabel('Input Date');
  await expect(dateInput).toBeEditable();
  await dateInput.fill('2024-02-29');
  await expect(dateInput).toHaveValue('2024-02-29');

  const displayInputs = page.getByRole('button', {name: 'Display Inputs'});
  await displayInputs.click();
  await 
});

