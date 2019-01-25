import { IFramePage, PersonalInformationPage } from '../src/page';
import { browser } from 'protractor';

describe('Given a page with Iframe', () => {

  const iframe = new IFramePage();

  beforeAll(async () => {
    await browser.get('http://toolsqa.com/iframe-practice-page/');
  });

  it('Then the Iframe page should have a title', async () => {
    expect(await iframe.getSampleTitle()).toBe('Sample Iframe page');
  });

  describe('When switch to the Iframe', () => {

    const personalInformationPage = new PersonalInformationPage();

    beforeAll(async () => {
      await iframe.switchToIframe();
    });

    it('Then should be the IFrame title', async () => {
      expect(await personalInformationPage.getPageTitle()).toBe('Practice Automation Form');
    });

    describe('When switch to main page', () => {
      let iframePageTitle : String;

      beforeAll(async () => {
        await iframe.switchToMainPage();
        iframePageTitle = await iframe.getSampleTitle();
      });

      it('Then should grab main page title again', async () => {
        expect(iframePageTitle).toBe('Sample Iframe page');
      });
    });

  });

});
