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

    describe('And login to the application', () => {
      beforeAll(async () => {
        const signInStepPage: SignInStepPage = new SignInStepPage();

        await signInStepPage.login('aperdomobo@gmail.com', 'WorkshopProtractor');
      });

      describe('and select the default address of delivery', () => {
        beforeAll(async () => {
          const addressStepPage: AddressStepPage = new AddressStepPage();

          await addressStepPage.proceedToCheckout();
        });

        describe('and proceed the default shiping options', () => {
          beforeAll(async () => {
            const shippingStepPage: ShippingStepPage = new ShippingStepPage();

            await shippingStepPage.acceptTermsAndProceedCheckout();
          });
          describe('and select to pay by bank wire option', () => {
            beforeAll(async () => {
              const paymentStepPage: PaymentStepPage = new PaymentStepPage();

              await paymentStepPage.payByBankWire();
            });

            describe('and pay to the bank', () => {
              beforeAll(async () => {
                const bankPaymentPage: BankPaymentPage = new BankPaymentPage();

                await bankPaymentPage.confirmOrder();
              });

              it('then the shirt should be bougth', () => {
                beforeAll(async () => {
                  const orderResumePage: OrderResumePage = new OrderResumePage();

                  await expect(orderResumePage.getOrderTitle())
                    .toBe('Your order on My Store is complete.');
                });
              });
            });
          });
        });
      });
    });
  });
});
