import { $$, ElementFinder, ElementArrayFinder, browser } from 'protractor';

export class ProductListPage {
  private products: ElementArrayFinder;

  constructor() {
    this.products = $$('.product-container');
  }

  private findByProductByName(productName: string): ElementFinder {
    return this.products
      .filter((itemDescription: ElementFinder) =>
        itemDescription
          .$('.product-name')
          .getText()
          .then((text: string) => text.includes(productName)))
      .first();
  }

  public async addToCart(productName: string): Promise<void> {
    const card = this.findByProductByName(productName);

    await browser.actions().mouseMove(card.$('img')).perform();
    await card.$('.ajax_add_to_cart_button.btn.btn-default').click();
  }
}
