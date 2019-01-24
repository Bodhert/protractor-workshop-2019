import { browser } from 'protractor';
import {
  MenuContentPage,
  ProductListPage,
  ProductAddedModalPage,
  SummaryStepPage,
  SignInStepPage,
  AddressStepPage,
  ShippingStepPage,
  PaymentStepPage,
  BankPaymentPage,
  OrderResumePage
} from '../src/page';

describe('Given the shopping page', () => {
  beforeAll(async () => {
    await browser.get('http://automationpractice.com/');
  });

  describe('When we want to buy a t-shirt', async () => {
    const menuContentPage: MenuContentPage = new MenuContentPage();
    const productListPage: ProductListPage = new ProductListPage();
    const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
    const summaryStepPage: SummaryStepPage = new SummaryStepPage();

    beforeAll(async () => {
      await menuContentPage.goToTShirtMenu();
      await productListPage.addToCart('Faded Short Sleeve T-shirts');
      await productAddedModalPage.proceedToCheckout();
      await summaryStepPage.proceedToCheckout();
    });

    describe('And login to the application', () => {
      const signInStepPage: SignInStepPage = new SignInStepPage();

      beforeAll(async () => {
        await signInStepPage.login('aperdomobo@gmail.com', 'WorkshopProtractor');
      });

      describe('and select the default address of delivery', () => {
        const addressStepPage: AddressStepPage = new AddressStepPage();
        beforeAll(async () => {
          await addressStepPage.proceedToCheckout();
        });

        describe('and proceed the default shiping options', () => {
          const shippingStepPage: ShippingStepPage = new ShippingStepPage();

          beforeAll(async () => {
            await shippingStepPage.acceptTermsAndProceedCheckout();
          });

          describe('and select to pay by bank wire option', () => {
            const paymentStepPage: PaymentStepPage = new PaymentStepPage();
            beforeAll(async () => {
              await paymentStepPage.payByBankWire();
            });

            describe('and pay to the bank', () => {
              const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
              const orderResumePage: OrderResumePage = new OrderResumePage();
              beforeAll(async () => {
                await bankPaymentPage.confirmOrder();
              });

              it('then the shirt should be bougth', async () => {
                expect(await expect(orderResumePage.getOrderTitle())
                  .toBe('Your order on My Store is complete.'));
              });
            });
          });
        });
      });
    });
  });
});
