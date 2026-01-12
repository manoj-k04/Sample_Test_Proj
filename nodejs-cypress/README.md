# Sample Project: Node.js + Cypress

This is a sample project to test the `setupBrowserStackAutomateTests` MCP tool.

## Project Configuration

- **Language**: `nodejs`
- **Browser Automation Framework**: `cypress`
- **Testing Framework**: `cypress`

## How to Test the MCP Tool

Use the following parameters when testing the tool:

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

## Expected Tool Behavior

The tool should:
1. Provide Cypress-specific setup instructions (NO browserstack.yml)
2. Install browserstack-cypress-cli
3. Provide configuration for BrowserStack integration
4. Cypress uses different setup than other frameworks

## Installation

```bash
npm install
```

## Run Tests Locally (without BrowserStack)

```bash
npm test
```

## Open Cypress Test Runner

```bash
npm run test:open
```
