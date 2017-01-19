import { CalculatorElliotPage } from './app.po';

describe('calculator-elliot App', function() {
  let page: CalculatorElliotPage;

  beforeEach(() => {
    page = new CalculatorElliotPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
