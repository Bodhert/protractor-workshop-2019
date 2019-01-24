import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private emailField: ElementFinder;
  private passwordField: ElementFinder;
  private submitLoginButton: ElementFinder;

  constructor() {
    this.emailField = $('#email');
    this.passwordField = $('#passwd');
    this.submitLoginButton = $('#SubmitLogin');
  }

  public async login(email: string, password: string): Promise<void> {
    await this.emailField.sendKeys(email);
    await this.passwordField.sendKeys(password);
    await this.submitLoginButton.click();
  }
}
