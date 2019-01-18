import { browser } from 'protractor';
import { PersonalInformationPage } from '../src/page';

describe('Given the page to practice automation', () => {
  beforeAll(async () => {
    await browser.get('http://toolsqa.com/automation-practice-form/');
  });

  describe('when I am training locators', () => {
    const personalInformationPage = new PersonalInformationPage();

    it('the form should be filled', async () => {
      expect(await personalInformationPage.getPageTitle()).toBe('Practice Automation Form');
    });

  });
});
