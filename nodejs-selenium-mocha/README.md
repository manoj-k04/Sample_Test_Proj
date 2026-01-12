# Sample Project: Node.js + Selenium + Mocha

This is a sample project to test the `setupBrowserStackAutomateTests` MCP tool.

## Project Configuration

- **Language**: `nodejs`
- **Browser Automation Framework**: `selenium`
- **Testing Framework**: `mocha`

## How to Test the MCP Tool

Use the following parameters when testing the tool:

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

## Expected Tool Behavior

The tool should:
1. Provide instructions to install `browserstack-node-sdk`
2. Export BrowserStack credentials
3. Generate a `browserstack.yml` configuration with mobile device
4. Provide run commands

## Installation

```bash
npm install
```

## Run Tests Locally (without BrowserStack)

```bash
npm test
```
