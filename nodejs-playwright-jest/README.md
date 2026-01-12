# Sample Project: Node.js + Playwright + Jest

This is a sample project to test the `setupBrowserStackAutomateTests` MCP tool.

## Project Configuration

- **Language**: `nodejs`
- **Browser Automation Framework**: `playwright`
- **Testing Framework**: `jest`

## How to Test the MCP Tool

Use the following parameters when testing the tool:

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

## Expected Tool Behavior

The tool should:
1. Provide instructions to install `browserstack-node-sdk`
2. Export BrowserStack credentials
3. Generate a `browserstack.yml` configuration
4. Provide run commands using `npm run test:browserstack`

## Installation

```bash
npm install
```

## Run Tests Locally (without BrowserStack)

```bash
npm test
```
