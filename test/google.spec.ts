import { browser } from 'protractor';

describe('Given a SDET learning protractor', () => {
  describe('When I open Google Page', () => {
    beforeEach(async () => {
      await browser.get('http://www.google.com');
    });

    it('Then the page should have a title', async () => {
      await expect(browser.getTitle()).toEqual('Google');
    });
  });
});
