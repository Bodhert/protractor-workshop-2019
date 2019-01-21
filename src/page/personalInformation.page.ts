import { element, by, ElementFinder } from 'protractor';

export class PersonalInformationPage {
  private pageTitleLabel: ElementFinder;

  constructor() {
    this.pageTitleLabel = element(by.className('wpb_wrapper')).element(by.tagName('h1'));
  }

  public async getPageTitle(): Promise<string> {
    return await this.pageTitleLabel.getText();
  }

}
