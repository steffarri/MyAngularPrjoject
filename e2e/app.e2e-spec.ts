import { AngularProject5Page } from './app.po';

describe('angular-project5 App', function() {
  let page: AngularProject5Page;

  beforeEach(() => {
    page = new AngularProject5Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
