import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private proceedToCheckoutButton : ElementFinder;

  constructor() {
    this.proceedToCheckoutButton = $('a.button.btn.btn-default.standard-checkout.button-medium');
  }

  public async proceedToCheckout(): Promise <void> {
    await this.proceedToCheckoutButton.click();
  }
}
