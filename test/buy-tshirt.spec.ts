import { browser } from 'protractor';
import {
  MenuContentPage,
  ProductListPage,
  ProductAddedModalPage,
  SummaryStepPage,
  SignInStepPage
} from '../src/page';

// import { ProductAddedModalPage } from '../src/page/product-added-modal.page';

describe('Given the shopping page', () => {
  beforeAll(async () => {
    await browser.get('http://automationpractice.com/');
  });

  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
  });

  it('When we want to buy a t-shirt', async () => {
    beforeAll(async () => {
      const menuContentPage: MenuContentPage = new MenuContentPage();
      const productListPage: ProductListPage = new ProductListPage();
      const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
      const summaryStepPage: SummaryStepPage = new SummaryStepPage();

      await menuContentPage.goToTShirtMenu();
      await productListPage.addToCart('Faded Short Sleeve T-shirts');
      await productAddedModalPage.proceedToCheckout();
      await summaryStepPage.proceedToCheckout();

    });
  });

  describe('And login to the application', () => {
    beforeAll(async () => {
      const signInStepPage: SignInStepPage = new SignInStepPage();
      await signInStepPage.login('aperdomobo@gmail.com', 'WorkshopProtractor');
    });
  });
});
