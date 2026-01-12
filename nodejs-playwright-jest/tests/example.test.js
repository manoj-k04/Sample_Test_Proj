const { chromium } = require('playwright');

describe('Sample Playwright Test', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('should navigate to BrowserStack homepage', async () => {
    await page.goto('https://www.browserstack.com');
    const title = await page.title();
    expect(title).toContain('BrowserStack');
  });

  test('should find the Products link', async () => {
    await page.goto('https://www.browserstack.com');
    const productsLink = await page.$('text=Products');
    expect(productsLink).toBeTruthy();
  });
});
