import { $, ElementFinder, ExpectedConditions, browser } from 'protractor';

export class ProductAddedModalPage {
  private proceedToChekoutButton: ElementFinder;

  constructor() {
    this.proceedToChekoutButton = $('[style*="display: block;"] .button-container > a.btn.' +
      'btn-default.button.button-medium');
  }

  public async proceedToCheckout(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.proceedToChekoutButton), 5000);
    await this.proceedToChekoutButton.click();
  }
}
