import { test, expect } from '../../fixtures/base.fixture';
import { LoginPage } from '../../pages/login.page';

// 👇 import JSON
import users from '../../test-data/users.json';

test.describe('Login Feature', () => {

  test('Login success DI', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login(users.validUser.username,
                                users.validUser.password);

    await expect(loginPage.page).toHaveURL(/forms/);
  });

});