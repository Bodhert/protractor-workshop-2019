import { $, ElementFinder } from 'protractor';

export class OrderResumePage {
  private orderTitleLabel: ElementFinder;

  constructor() {
    this.orderTitleLabel = $('cheque-indent.strong.dark');
  }

  public async getOrderTitle(): Promise<string> {
    const titleLabel = await this.orderTitleLabel.getText();

    return titleLabel;
  }
}