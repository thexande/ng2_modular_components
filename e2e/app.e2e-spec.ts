import { LikeComponentPage } from './app.po';

describe('like-component App', function() {
  let page: LikeComponentPage;

  beforeEach(() => {
    page = new LikeComponentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
