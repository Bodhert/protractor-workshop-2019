import { element, by, ElementFinder } from 'protractor';

interface PersonalInformation {
  firstName: string;
  lastName: string;
  sex: string;
  experience: number;
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

  constructor() {
    this.firstNameField = element(by.name('firstname'));
    this.lastNameField = element(by.name('lastname'));
    this.pageTitleLabel = element(by.className('wpb_wrapper')).element(by.tagName('h1'));
    this.sendButton = element(by.id('submit'));
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

    for (const profession of form.professions) {
      await this.selectProfession(profession).click();
    }
  }

  private sexOption(gender: string): ElementFinder {
    return element(by.css(`[name="sex"][value="${gender}"]`));
  }

  private selectYearsOfExperience(experienceYears: number): ElementFinder {
    return element(by.css(`[name="exp"][value="${experienceYears}"]`));
  }

  private selectProfession(profession: String): ElementFinder {
    return element(by.css(`[name="profession"][value=${profession}]`));
  }
}
