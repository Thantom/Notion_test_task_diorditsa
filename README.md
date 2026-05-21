# Booking.com Car Rental Automation

UI automation project for Booking.com car rental flow using:

- Playwright
- TypeScript
- Chromium browser

---

# Project Goal

Automate the core car rental flow:

- Open Booking.com Cars
- Search car rental in New York
- Select dates
- Verify results page
- Validate negative scenarios

---

# Tech Stack

- Playwright
- TypeScript
- Node.js

---

# Prerequisites

Install before starting:

## 1. Install Node.js

Download:

https://nodejs.org/

Verify installation:

```bash
node -v
npm -v
```

---

# Project Setup

## 1. Clone repository

```bash
git clone <YOUR_GITHUB_REPO_URL>
```

## 2. Open project

```bash
cd booking-playwright-cars
```

## 3. Install dependencies

```bash
npm install
```

## 4. Install Playwright browsers

```bash
npx playwright install
```

---

# Run Tests

## Run all tests

```bash
npm test
```

## Run tests in visible browser mode

```bash
npm run test:headed
```

## Open Playwright UI mode

```bash
npm run test:ui
```

---

# View HTML Report

After execution:

```bash
npm run report
```

Playwright opens HTML test report in browser.

---

# Test Scenarios Covered

## Positive

- Search rental cars in New York
- Select valid dates
- Open results page

## Negative

- Submit empty search
- Validate required fields

---

# Useful Playwright Commands

## Run single test file

```bash
npx playwright test tests/car-rental.spec.ts
```

## Run specific browser

```bash
npx playwright test --project=chromium
```

## Debug mode

```bash
npx playwright test --debug
```

---

# GitHub Push Steps

## Initialize git

```bash
git init
```

## Add files

```bash
git add .
```

## Commit

```bash
git commit -m "Initial Playwright framework setup"
```

## Connect GitHub repository

```bash
git remote add origin <YOUR_GITHUB_REPO_URL>
```

## Push code

```bash
git push -u origin main
```

---

# Recommended Improvements

Future enhancements:

- Page Object Model (POM)
- Environment variables
- API mocking
- Cross-browser testing
- CI/CD with GitHub Actions
- Parallel execution

---

# Common Beginner Errors

## Error: command not found: npm

Cause:
Node.js not installed.

Fix:
Install Node.js from:
https://nodejs.org/

---

## Error: No tests found

Cause:
Wrong test folder/file name.

Fix:
Ensure tests are inside `/tests`.

---

## Error: Browser executable doesn't exist

Fix:

```bash
npx playwright install
```

---

# Learning Resources

Playwright Docs:
https://playwright.dev/

TypeScript Docs:
https://www.typescriptlang.org/docs/

---

# Author

QA Automation Practice Project
