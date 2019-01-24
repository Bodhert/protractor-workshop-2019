import { browser } from 'protractor';
import { PersonalInformationPage } from '../src/page';
import { DownloadService } from '../src/service';

describe('Given the page to practice automation', () => {
  beforeAll(async () => {
    await browser.get('http://toolsqa.com/automation-practice-form/');
  });

  describe('When I am training locators', () => {
    const personalInformationPage = new PersonalInformationPage();

    beforeAll(async () => {
      await personalInformationPage.fillForm({
        firstName: 'Alejandro',
        lastName: 'Cordoba',
        sex: 'Male',
        experience: 1,
        date: '2019',
        professions: ['Automation Tester'],
        file: './resources/Risitas.jpg',
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

    it('Then the page should have the title', async () => {
      expect(await personalInformationPage.getPageTitle()).toBe('Practice Automation Form');
    });

    it('Then the picture should be uploaded', async () => {
      expect(await personalInformationPage.getPictureName()).toBe('Risitas.jpg');
    });

    it('Then the file should be downloaded', async () => {
      const service = new DownloadService();
      const file = await service.readFileFromTemp('test-document.xlsx');
      expect(file.byteLength).toBeGreaterThanOrEqual(8000);
    });
  });
});
