import { RemoteControlPage } from './app.po';

describe('remote-control App', function() {
  let page: RemoteControlPage;

  beforeEach(() => {
    page = new RemoteControlPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
