import { FolkPage } from './app.po';

describe('folk App', () => {
  let page: FolkPage;

  beforeEach(() => {
    page = new FolkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
