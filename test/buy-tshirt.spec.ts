import { browser } from 'protractor';
import {
  MenuContentPage,
  ProductListPage,
  ProductAddedModalPage
} from '../src/page';
// import { ProductAddedModalPage } from '../src/page/product-added-modal.page';

describe('When I try to buy a t-shirt', () => {
  beforeAll(async () => {
    await browser.get('http://automationpractice.com/');
  });

  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
  });

  it('Then a t-shirt should be bought', async () => {
    const menuContentPage: MenuContentPage = new MenuContentPage();
    const productListPage: ProductListPage = new ProductListPage();
    const productAddedModalPage : ProductAddedModalPage = new ProductAddedModalPage();

    await menuContentPage.goToTShirtMenu();
    await productListPage.addToCart('Faded Short Sleeve T-shirts');
    await productAddedModalPage.proceedToCheckout();
  });
});
