#!/bin/bash

# Test script for all sample projects
# This script verifies that all sample projects are properly structured

echo "🧪 Testing Sample Projects for setupBrowserStackAutomateTests Tool"
echo "=================================================================="
echo ""

PROJECTS=(
  "nodejs-playwright-jest"
  "python-selenium-pytest"
  "nodejs-selenium-mocha"
  "nodejs-cypress"
)

FAILED=0
PASSED=0

for project in "${PROJECTS[@]}"; do
  echo "📦 Checking project: $project"
  
  if [ ! -d "$project" ]; then
    echo "   ❌ Directory not found"
    FAILED=$((FAILED + 1))
    continue
  fi
  
  cd "$project" || exit
  
  # Check for README
  if [ -f "README.md" ]; then
    echo "   ✅ README.md exists"
  else
    echo "   ❌ README.md missing"
    FAILED=$((FAILED + 1))
  fi
  
  # Check for test files
  if [ -d "tests" ] || [ -d "cypress" ]; then
    echo "   ✅ Test directory exists"
  else
    echo "   ❌ Test directory missing"
    FAILED=$((FAILED + 1))
  fi
  
  # Check for package.json or requirements.txt
  if [ -f "package.json" ] || [ -f "requirements.txt" ]; then
    echo "   ✅ Dependency file exists"
    PASSED=$((PASSED + 1))
  else
    echo "   ❌ Dependency file missing"
    FAILED=$((FAILED + 1))
  fi
  
  cd ..
  echo ""
done

echo "=================================================================="
echo "Summary: $PASSED projects passed, $FAILED checks failed"
echo ""

if [ $FAILED -eq 0 ]; then
  echo "✅ All sample projects are properly structured!"
  exit 0
else
  echo "❌ Some checks failed. Please review the projects."
  exit 1
fi
