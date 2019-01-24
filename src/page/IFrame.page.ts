import { ElementFinder, element, by, browser } from 'protractor';

export class IFramePage {
  private frame: ElementFinder;
  private documentTitleLabel: ElementFinder;

  constructor() {
    this.frame = element(by.name('iframe1'));
    this.documentTitleLabel = element(by.cssContainingText('h1', 'Sample Iframe page'));
  }

  public async getSampleTitle(): Promise<string> {
    return await this.documentTitleLabel.getText();
  }

  public async switchToIframe(): Promise<void> {
    await browser.switchTo().frame(this.frame.getWebElement());
  }

  public async switchToMainPage(): Promise<void> {
    await browser.switchTo().defaultContent();
  }
}
