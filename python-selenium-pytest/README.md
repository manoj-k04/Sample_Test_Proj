# Sample Project: Python + Selenium + Pytest

This is a sample project to test the `setupBrowserStackAutomateTests` MCP tool.

## Project Configuration

- **Language**: `python`
- **Browser Automation Framework**: `selenium`
- **Testing Framework**: `pytest`

## How to Test the MCP Tool

Use the following parameters when testing the tool:

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

## Expected Tool Behavior

The tool should:
1. Provide instructions to install BrowserStack SDK via pip
2. Run `browserstack-sdk setup` command
3. Generate a `browserstack.yml` configuration
4. Provide run commands using `browserstack-sdk pytest`

## Installation

```bash
python3 -m pip install -r requirements.txt
```

## Run Tests Locally (without BrowserStack)

```bash
pytest tests/
```
