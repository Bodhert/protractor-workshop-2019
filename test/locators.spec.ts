import { browser } from 'protractor';
import { PersonalInformationPage } from '../src/page';

describe('Given the page to practice automation', () => {
  beforeAll(async () => {
    await browser.get('http://toolsqa.com/automation-practice-form/');
  });

  describe('when I am training locators', () => {
    const personalInformationPage = new PersonalInformationPage();

    beforeAll(async () => {
      await personalInformationPage.fillForm({
        firstName: 'Alejandro',
        lastName: 'Perdomo',
        sex: 'Male',
        experience: 7,
        date: '2019',
        professions: ['Automation Tester'],
        file: '/home/acordobab/Risitas.jpg',
        downloadFile: true,
        tools: ['Selenium Webdriver'],
        continent: 'South America',
        commands: [
          'Browser Commands',
          'Navigation Commands',
          'Switch Commands',
          'Wait Commands',
          'WebElement Commands']
      });
    });

    it('the page should have the title', async () => {
      expect(await personalInformationPage.getPageTitle()).toBe('Practice Automation Form');
    });

  });
});
