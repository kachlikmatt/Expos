import { ExposPage } from './app.po';

describe('expos App', () => {
  let page: ExposPage;

  beforeEach(() => {
    page = new ExposPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
