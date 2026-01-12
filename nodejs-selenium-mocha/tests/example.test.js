const { Builder, By, until } = require('selenium-webdriver');
const { expect } = require('chai');

describe('BrowserStack Sample Tests', function() {
  let driver;

  before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
  });

  after(async function() {
    await driver.quit();
  });

  it('should load BrowserStack homepage', async function() {
    await driver.get('https://www.browserstack.com');
    const title = await driver.getTitle();
    expect(title).to.include('BrowserStack');
  });

  it('should find the Sign In button', async function() {
    await driver.get('https://www.browserstack.com');
    const signInButton = await driver.wait(
      until.elementLocated(By.linkText('Sign In')),
      10000
    );
    expect(signInButton).to.exist;
  });

  it('should navigate to pricing page', async function() {
    await driver.get('https://www.browserstack.com/pricing');
    const title = await driver.getTitle();
    expect(title).to.include('Pricing');
  });
});
