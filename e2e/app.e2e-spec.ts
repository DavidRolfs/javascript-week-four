import { JavascriptWeekFourPage } from './app.po';

describe('javascript-week-four App', () => {
  let page: JavascriptWeekFourPage;

  beforeEach(() => {
    page = new JavascriptWeekFourPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
