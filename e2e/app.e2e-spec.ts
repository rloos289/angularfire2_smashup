import { SmashupAngularfirePage } from './app.po';

describe('smashup-angularfire App', function() {
  let page: SmashupAngularfirePage;

  beforeEach(() => {
    page = new SmashupAngularfirePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
