# Quick Test Guide for setupBrowserStackAutomateTests

## 🚀 Quick Start

1. **Navigate to a sample project:**
   ```bash
   cd /Users/manoj/Projects/BrowserStack/sample-test-projects/nodejs-playwright-jest
   ```

2. **Test the MCP tool with these exact parameters:**

---

## 📋 Test Case 1: Node.js + Playwright + Jest (Desktop)

**Project:** `nodejs-playwright-jest`

**MCP Tool Parameters:**
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

**Expected Output:**
- Step 1: Install browserstack-node-sdk
- Step 2: Export BROWSERSTACK_USERNAME and BROWSERSTACK_ACCESS_KEY
- Step 3: Create browserstack.yml with Windows 11 + Chrome
- Step 4: Run command: `npm run test:browserstack`

---

## 📋 Test Case 2: Python + Selenium + Pytest (Multi-Browser)

**Project:** `python-selenium-pytest`

**MCP Tool Parameters:**
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

**Expected Output:**
- Step 1: Install BrowserStack SDK via pip
- Step 2: Run browserstack-sdk setup
- Step 3: Create browserstack.yml with 2 platforms (Windows + macOS)
- Step 4: Run command: `browserstack-sdk pytest`

---

## 📋 Test Case 3: Node.js + Selenium + Mocha (Mobile Device)

**Project:** `nodejs-selenium-mocha`

**MCP Tool Parameters:**
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

**Expected Output:**
- Step 1: Install browserstack-node-sdk
- Step 2: Export credentials
- Step 3: Create browserstack.yml with Android device
- Step 4: Run command for Mocha tests

---

## 📋 Test Case 4: Cypress (Special Case - No browserstack.yml)

**Project:** `nodejs-cypress`

**MCP Tool Parameters:**
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

**Expected Output:**
- Cypress-specific instructions (NO browserstack.yml)
- Different setup flow from other frameworks
- Uses browserstack-cypress-cli

---

## 🧪 How to Invoke the MCP Tool

### Via GitHub Copilot Chat:

```
@workspace Use the setupBrowserStackAutomateTests tool with these parameters:
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

## ✅ What to Verify

After the tool runs, check that:

1. **All required parameters are accepted**
2. **Device validation passes** (or shows proper error for invalid devices)
3. **Instructions are framework-specific**
4. **browserstack.yml is generated** (except for Cypress/WebdriverIO)
5. **Credentials setup is included**
6. **Run commands match the framework**

---

## 🐛 Edge Cases to Test

### Test Case 5: No Devices Specified
```json
{
  "projectName": "Test No Devices",
  "detectedLanguage": "nodejs",
  "detectedBrowserAutomationFramework": "playwright",
  "detectedTestingFramework": "jest",
  "devices": []
}
```
**Expected:** Should still provide setup instructions, possibly with default device config

---

### Test Case 6: Invalid Device Combination
```json
{
  "projectName": "Test Invalid Device",
  "detectedLanguage": "nodejs",
  "detectedBrowserAutomationFramework": "selenium",
  "detectedTestingFramework": "mocha",
  "devices": [
    {
      "platform": "windows",
      "osVersion": "999",
      "browser": "invalid-browser",
      "browserVersion": "latest"
    }
  ]
}
```
**Expected:** Should show validation error with helpful message

---

### Test Case 7: iOS Mobile Device
```json
{
  "projectName": "iOS Test",
  "detectedLanguage": "nodejs",
  "detectedBrowserAutomationFramework": "selenium",
  "detectedTestingFramework": "jest",
  "devices": [
    {
      "platform": "ios",
      "deviceName": "iPhone 15",
      "osVersion": "17",
      "browser": "safari"
    }
  ]
}
```
**Expected:** Should configure iOS device properly in browserstack.yml

---

## 📊 Test Results Template

| Test Case | Project | Status | Notes |
|-----------|---------|--------|-------|
| Desktop (Playwright) | nodejs-playwright-jest | ⏳ | |
| Multi-Browser (Python) | python-selenium-pytest | ⏳ | |
| Mobile (Android) | nodejs-selenium-mocha | ⏳ | |
| Cypress | nodejs-cypress | ⏳ | |
| No Devices | - | ⏳ | |
| Invalid Device | - | ⏳ | |
| iOS Device | - | ⏳ | |

---

## 🔍 Debugging Tips

If the tool fails:
1. Check the console for error messages
2. Verify the project structure exists
3. Ensure the combination is in `SUPPORTED_CONFIGURATIONS`
4. Check device validator for validation errors
5. Review the generated browserstack.yml syntax
