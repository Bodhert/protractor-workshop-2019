import { element, ElementFinder, by } from 'protractor';

export class OrderResumePage {
  private orderTitleLabel: ElementFinder;

  constructor() {
    this.orderTitleLabel =
      element(by.cssContainingText('strong', 'Your order on My Store is complete.'));
  }

  public async getOrderTitle(): Promise<string> {
    const titleLabel = await this.orderTitleLabel.getText();

    return titleLabel;
  }
}
