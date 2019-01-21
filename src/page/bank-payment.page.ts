import { ElementFinder, element, by } from 'protractor';

export class BankPaymentPage {
  private confirmOrderButton: ElementFinder;

  constructor() {
    this.confirmOrderButton = element(by.css('button.btn.btn-default.button-medium'));
  }

  public async confirmOrder(): Promise<void> {
    await this.confirmOrderButton.click();
  }
}
