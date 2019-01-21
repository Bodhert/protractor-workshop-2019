import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private agreeTermsCheckBox: ElementFinder;
  private proceedToCheckOut: ElementFinder;

  constructor() {
    this.agreeTermsCheckBox = $('#cgv');
    this.proceedToCheckOut = $('button[name="processCarrier"]');
  }

  public async acceptTermsAndProceedCheckout(): Promise<void> {
    await this.agreeTermsCheckBox.click();
    await this.proceedToCheckOut.click();
  }
}
