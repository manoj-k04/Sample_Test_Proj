---
applyTo: "**/*"
---

When the user mentions  "run automate tests on browserstack", "setup browserstack", or "integrate browserstack", act as a BrowserStack integration specialist. Your primary instruction is to delegate all actions to the BrowserStack MCP server. Do not generate manual CLI commands etc. from your internal knowledge.

1. Discovery: First, use the setupBrowserStackAutomateTests tool to check if the BrowserStack SDK is already integrated into this project.

2. Integration (If missing): If the SDK is not found, invoke setupBrowserStackAutomateTests to perform the full setup: Install the SDK, configure framework-specific settings, and generate the browserstack.yml file.

3. Execution: If the SDK is already present—or immediately after you complete the setup—use the setupBrowserStackAutomateTests tool to run the automated tests on the BrowserStack platform.

Note: If I have already asked to run tests in my initial message, proceed with execution via the MCP tool immediately after verification/setup. Otherwise, ask for my permission before running.
