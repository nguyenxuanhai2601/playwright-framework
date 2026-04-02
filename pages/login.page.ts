import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  username = () => this.page.locator('#login-email');
  password = () => this.page.locator('#login-password');
  loginBtn = () => this.page.locator('#login-submit');

  async goto() {
    await this.page.goto('https://play-qa.com/forms');
  }

  async login(user: string, pass: string) {
    await this.username().fill(user);
    await this.password().fill(pass);
    await this.loginBtn().click();
  }
}