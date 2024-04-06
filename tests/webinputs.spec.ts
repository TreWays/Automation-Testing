import { test, expect } from '@playwright/test';
import { text } from 'stream/consumers';

test('web inputs', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/');

  const webInputsLink = page.getByRole('link', {name: 'Web inputs'});
  await webInputsLink.click();

  await expect(page).toHaveTitle(/Web inputs/);

  const numberInput = page.getByLabel('Input: Number');
  await expect(numberInput).toBeEditable();
  await numberInput.fill('4');
  await expect(numberInput).toHaveValue('4');

  const textInput = page.getByLabel('Input: Text');
  await expect(textInput).toBeEditable();
  await textInput.fill('test');
  await expect(textInput).toHaveValue('test')

  const passwordInput = page.getByLabel('Input: Password');
  await expect(passwordInput).toBeEditable();
  await passwordInput.fill('test');
  await expect(passwordInput).toHaveValue('test');

  const dateInput = page.getByLabel('Input: Date');
  await expect(dateInput).toBeEditable();
  await dateInput.fill('2024-02-29');
  await expect(dateInput).toHaveValue('2024-02-29'); 

  const displayInputs = page.getByRole('button', { name: 'Display Inputs'});
  await displayInputs.click();

  const numberOutput = page.locator('#output-number');
  await expect(numberOutput).toHaveText('4');

  const textOutput = page.locator('#output-text');
  await expect(textOutput).toHaveText('test');

  const passwordOutput = page.locator('#output-password');
  await expect(passwordOutput).toHaveText('test');

  const dateOutput = page.locator('#output-date');
  await expect(dateOutput).toHaveText('2024-02-29');
});
