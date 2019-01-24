import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private payByBankWireOption: ElementFinder;

  constructor() {
    this.payByBankWireOption = $('.bankwire');
  }

  public async payByBankWire() {
    await this.payByBankWireOption.click();
  }
}
