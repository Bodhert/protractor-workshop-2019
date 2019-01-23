import { $$, ElementFinder, ElementArrayFinder, by } from 'protractor';

export class ProductListPage {
  private products: ElementArrayFinder;

  constructor() {
    this.products = $$('.product-container');
  }

  private findProductByName(productName: string): ElementFinder {
    return this.products
      .filter((itemDescription: ElementFinder) =>
        itemDescription
          .$('.product-name')
          .getText()
          .then((text: string) => text.includes(productName)))
      .first();
  }

  public async addToCart(productName: string): Promise<void> {
    const card = this.findProductByName(productName);

    await card.element(by.cssContainingText('span', 'Add to cart')).click();
  }
}
