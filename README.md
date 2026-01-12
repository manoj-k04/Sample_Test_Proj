# Sample Test Projects for setupBrowserStackAutomateTests Tool

This directory contains multiple sample projects to test the `setupBrowserStackAutomateTests` MCP tool with different language/framework combinations.

## Available Sample Projects

### 1. Node.js + Playwright + Jest
**Path:** `nodejs-playwright-jest/`

**Test Parameters:**
```json
{
  "projectName": "Playwright Jest Sample",
  "detectedLanguage": "nodejs",
  "detectedBrowserAutomationFramework": "playwright",
  "detectedTestingFramework": "jest",
  "devices": [
    {
      "platform": "windows",
      "osVersion": "11",
      "browser": "chrome",
      "browserVersion": "latest"
    }
  ]
}
```

---

### 2. Python + Selenium + Pytest
**Path:** `python-selenium-pytest/`

**Test Parameters:**
```json
{
  "projectName": "Python Selenium Pytest Sample",
  "detectedLanguage": "python",
  "detectedBrowserAutomationFramework": "selenium",
  "detectedTestingFramework": "pytest",
  "devices": [
    {
      "platform": "windows",
      "osVersion": "11",
      "browser": "chrome",
      "browserVersion": "latest"
    },
    {
      "platform": "macos",
      "osVersion": "Sonoma",
      "browser": "safari",
      "browserVersion": "latest"
    }
  ]
}
```

---

### 3. Node.js + Selenium + Mocha
**Path:** `nodejs-selenium-mocha/`

**Test Parameters:**
```json
{
  "projectName": "Selenium Mocha Sample",
  "detectedLanguage": "nodejs",
  "detectedBrowserAutomationFramework": "selenium",
  "detectedTestingFramework": "mocha",
  "devices": [
    {
      "platform": "android",
      "deviceName": "Samsung Galaxy S24",
      "osVersion": "14",
      "browser": "chrome"
    }
  ]
}
```

---

### 4. Node.js + Cypress
**Path:** `nodejs-cypress/`

**Test Parameters:**
```json
{
  "projectName": "Cypress Sample",
  "detectedLanguage": "nodejs",
  "detectedBrowserAutomationFramework": "cypress",
  "detectedTestingFramework": "cypress",
  "devices": [
    {
      "platform": "windows",
      "osVersion": "10",
      "browser": "chrome",
      "browserVersion": "latest"
    }
  ]
}
```

---

## How to Use These Projects

### Method 1: Via MCP Tool Call

1. Open the project folder in VS Code
2. Use GitHub Copilot to invoke the `setupBrowserStackAutomateTests` tool
3. Provide the test parameters from the README of each project
4. The tool will return step-by-step instructions

### Method 2: Direct Testing

Each project has its own README with:
- Installation instructions
- Local test commands
- Expected tool behavior

### Method 3: Test All Projects

Run the test script:
```bash
cd /Users/manoj/Projects/BrowserStack/sample-test-projects
./test-all-projects.sh
```

## Expected Tool Outputs

The tool should generate:

1. **Installation Steps** - Package manager commands for the specific language
2. **SDK Setup** - BrowserStack SDK installation and configuration
3. **Configuration Files** - browserstack.yml (except for Cypress/WebdriverIO)
4. **Run Commands** - Commands to execute tests on BrowserStack

## What to Verify

✅ Tool accepts all parameters correctly
✅ Validates device configurations
✅ Generates framework-specific instructions
✅ Includes proper authentication setup
✅ Provides run commands matching the framework

## Framework-Specific Notes

### Playwright
- Uses `playwright-chromium`, `playwright-webkit`, `playwright-firefox` as browser names in BrowserStack
- Fetches from PLAYWRIGHT_AUTOMATE endpoint

### Selenium
- Uses standard browser names: `chrome`, `safari`, `edge`, `firefox`
- Fetches from SELENIUM_AUTOMATE endpoint

### Cypress
- **Does NOT use browserstack.yml**
- Has unique configuration via browserstack.json or cypress.config.js
- Uses browserstack-cypress-cli

### WebDriverIO
- **Does NOT use browserstack.yml**
- Configuration in wdio.conf.js
- Uses @wdio/browserstack-service

## Supported Combinations

The tool supports these combinations based on `SUPPORTED_CONFIGURATIONS`:

**Python:**
- playwright + pytest
- selenium + pytest/robot/behave

**Node.js:**
- playwright + jest/codeceptjs/playwright
- selenium + jest/mocha/cucumber/nightwatch/codeceptjs
- cypress + cypress
- selenium + webdriverio

**Java:**
- playwright + junit4/junit5/testng
- selenium + testng/cucumber/junit4/junit5

**C#:**
- playwright + nunit/mstest
- selenium + xunit/nunit/mstest/specflow/reqnroll

## Device Configuration Examples

### Desktop (Windows)
```json
{
  "platform": "windows",
  "osVersion": "11",
  "browser": "chrome",
  "browserVersion": "latest"
}
```

### Desktop (macOS)
```json
{
  "platform": "macos",
  "osVersion": "Sonoma",
  "browser": "safari",
  "browserVersion": "latest"
}
```

### Mobile (Android)
```json
{
  "platform": "android",
  "deviceName": "Samsung Galaxy S24",
  "osVersion": "14",
  "browser": "chrome"
}
```

### Mobile (iOS)
```json
{
  "platform": "ios",
  "deviceName": "iPhone 15",
  "osVersion": "17",
  "browser": "safari"
}
```

## Troubleshooting

If the tool fails:
1. Check the parameters match the supported configurations
2. Verify device/browser combinations are valid
3. Check the framework is in SUPPORTED_CONFIGURATIONS
4. Review error messages for missing dependencies
