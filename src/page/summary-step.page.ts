import { ElementFinder, element, by } from 'protractor';

export class SummaryStepPage {
  private proceedToCheckoutButton: ElementFinder;

  constructor() {
    this.proceedToCheckoutButton =
      element(by.css('a.standard-checkout[title="Proceed to checkout"]'));
  }

  public async proceedToCheckout(): Promise<void> {
    await this.proceedToCheckoutButton.click();
  }
}
