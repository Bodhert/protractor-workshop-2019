import { browser } from 'protractor';
import {
  MenuContentPage,
  ProductListPage
} from '../src/page';

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

    await menuContentPage.goToTShirtMenu();
    await productListPage.addToCart('Faded Short Sleeve T-shirts');
    console.log('dfsadf');
  });
});
