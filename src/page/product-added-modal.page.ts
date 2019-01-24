import { ElementFinder, ExpectedConditions, browser, element, by } from 'protractor';

export class ProductAddedModalPage {
  private proceedToChekoutButton: ElementFinder;

  constructor() {
    const proceedToChekoutReg = new RegExp('Proceed to checkout*');
    this.proceedToChekoutButton = element(by.cssContainingText('span', proceedToChekoutReg));
  }

  public async proceedToCheckout(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.proceedToChekoutButton), 5000);
    await this.proceedToChekoutButton.click();
  }
}
