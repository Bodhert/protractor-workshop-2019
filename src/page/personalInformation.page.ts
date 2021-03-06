import { element, by, ElementFinder, browser } from 'protractor';
import { resolve } from 'path';
import { existsSync } from 'fs';
import * as remote from 'selenium-webdriver/remote';
import { DownloadService } from '../service';

interface PersonalInformation {
  firstName: string;
  lastName: string;
  sex: string;
  experience: number;
  date: string;
  professions: string[];
  tools: string[];
  continent: string;
  commands: string[];
  file?: string;
  downloadFile?: boolean;
}

export class PersonalInformationPage {
  private firstNameField: ElementFinder;
  private lastNameField: ElementFinder;
  private pageTitleLabel: ElementFinder;
  private sendButton: ElementFinder;
  private dateField: ElementFinder;
  private uploadProfilePicture: ElementFinder;
  private downloadLink: ElementFinder;
  private continentOption: ElementFinder;
  private seleniumCommandsOptions: ElementFinder;

  constructor() {
    this.firstNameField = element(by.name('firstname'));
    this.lastNameField = element(by.name('lastname'));
    this.pageTitleLabel = element(by.className('wpb_wrapper')).element(by.tagName('h1'));
    this.sendButton = element(by.id('submit'));
    this.dateField = element(by.id('datepicker'));
    this.uploadProfilePicture = element(by.id('photo'));
    this.downloadLink = element(by.linkText('Test File to Download'));
    this.continentOption = element(by.id('continents'));
    this.seleniumCommandsOptions = element(by.id('selenium_commands'));
  }

  public async getPageTitle(): Promise<string> {
    return await this.pageTitleLabel.getText();
  }

  public async submit(form: PersonalInformation): Promise<void> {
    await this.fillForm(form);
    await this.sendButton.click();
  }

  public async fillForm(form: PersonalInformation): Promise<void> {
    await this.firstNameField.sendKeys(form.firstName);
    await this.lastNameField.sendKeys(form.lastName);
    await this.sexOption(form.sex).click();
    await this.selectYearsOfExperience(form.experience).click();
    await this.dateField.sendKeys(form.date);
    await this.selectContinent(form.continent).click();

    await this.fileFormTester(form);
    await this.fillMultipleChoiseFields(form);
  }

  private sexOption(gender: string): ElementFinder {
    return element(by.css(`[name="sex"][value="${gender}"]`));
  }

  private selectYearsOfExperience(experienceYears: number): ElementFinder {
    return element(by.css(`[name="exp"][value="${experienceYears}"]`));
  }

  private selectProfession(profession: String): ElementFinder {
    return element(by.css(`[name="profession"][value="${profession}"]`));
  }

  private selectTools(tool: String): ElementFinder {
    return element(by.css(`[name="tool"][value="${tool}"]`));
  }

  private async uploadFile(relativePath: string): Promise<void> {
    const fullPath = resolve(process.cwd(), relativePath);

    if (existsSync(fullPath)) {
      await browser.setFileDetector(new remote.FileDetector());
      await this.uploadProfilePicture.sendKeys(fullPath);
      await browser.setFileDetector(undefined);
    }
  }

  private async downloadFileByLink() {
    const link = await this.downloadLink.getAttribute('href');
    const service = new DownloadService();
    await service.downloadFile(link, 'test-document.xlsx');
  }

  private selectContinent(continentName: string) {
    return this.continentOption.element(by.cssContainingText('option', continentName));
  }

  private selectSeleniumCommands(commandName: string): ElementFinder {
    return this.seleniumCommandsOptions.element(by.cssContainingText('option', commandName));
  }

  public async getPictureName(): Promise<string> {
    const fullPath: string = await this.uploadProfilePicture.getAttribute('value');
    return fullPath.split(/(\\|\/)/g).pop();
  }

  private async fileFormTester(form: PersonalInformation): Promise<void> {
    if (form.file) {
      await this.uploadFile(form.file);
    }

    if (form.downloadFile) {
      await this.downloadFileByLink();
    }
  }

  private async fillMultipleChoiseFields(form: PersonalInformation): Promise<void> {
    for (const profession of form.professions) {
      await this.selectProfession(profession).click();
    }

    for (const tool of form.tools) {
      await this.selectTools(tool).click;
    }

    for (const commandName of form.commands) {
      await this.selectSeleniumCommands(commandName).click();
    }
  }
}
