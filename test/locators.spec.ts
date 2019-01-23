import { browser } from 'protractor';
import { PersonalInformationPage } from '../src/page';
import { DownloadService } from '../src/service';

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

    it('the picture should be uploaded', async () => {
      expect(await personalInformationPage.getPictureName()).toBe('Risitas.jpg');
    });

    it('then the file should be downloaded', async () => {
      const service = new DownloadService();
      const file = await service.readFileFromTemp('test-document.xlsx');
      expect(file.byteLength).toBeGreaterThanOrEqual(8000);
    });
  });
});
