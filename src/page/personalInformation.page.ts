import {  element, by, ElementFinder } from 'protractor';

// interface PersonalInformation {
//   firstName: string;
//   lastName: string;
//   sex: string;
//   experience: number;
//   profession: string[];
//   tools: string[];
//   continent: string;
//   commands: string[];
//   file?: string;
//   downloadFile?: boolean;
// }

export class PersonalInformationPage {
  // private firstNameField: ElementFinder;
  // private lastNameField: ElementFinder;
  // private sendButton: ElementFinder;
  private pageTitleLabel: ElementFinder;
  // private uploadPhotoInput: ElementFinder;
  // private testFileDownloadLink: ElementFinder;

  constructor() {
    // this.firstNameField = element(by.name('firstname'));
    // this.lastNameField = element(by.name('lastname'));
    // this.sendButton = element(by.id('submit'));
    this.pageTitleLabel = element(by.className('wpb_wrapper')).element(by.tagName('h1'));
    // this.uploadPhotoInput = element(by.className('input-file'));
    // this.testFileDownloadLink = element(by.linkText('Test File to Download'));
  }

  public async getPageTitle(): Promise<string> {
    return await this.pageTitleLabel.getText();
  }

}
