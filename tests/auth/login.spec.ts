import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';

// 👇 import JSON
import users from '../../test-data/users.json';

test.describe('Login Feature', () => {

  test('Login success', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(users.validUser.username,
                                users.validUser.password);

    await expect(page).toHaveURL(/forms/);
  });

   test('Login failed', async ({ page }) => {
      const loginPage = new LoginPage(page);

      await loginPage.goto();
      await loginPage.login(
        users.invalidUser.username,
        users.invalidUser.password
      );

      await expect(page.locator('.error')).toBeVisible();
    });

});