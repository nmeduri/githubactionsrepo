# Student Registration Form Web API Automation Framework

## Project Overview

This project is an automated testing framework developed using **Playwright with TypeScript** for testing the Student Registration Form application.

The framework is designed to provide:

- UI test automation
- API test automation
- Reusable Page Object Model components
- External test data management
- Environment-based configuration
- Cross-browser execution
- HTML reporting
- Maintainable and scalable test automation

---

## 🛠️ Technology Stack

| Technology        | Purpose                  |
| ----------------- | ------------------------ |
| Playwright        | UI and API automation    |
| TypeScript        | Programming language     |
| Node.js           | Runtime environment      |
| npm               | Dependency management    |
| Playwright Test   | Test runner              |
| Page Object Model | Framework design pattern |
| Git               | Version control          |
| GitHub            | Source code repository   |

---

## Project Structure

StudentRegistrationFormWebApiAutomationFramework/
│
├── .github/
│ └── workflows/
│ └── playwright.yml
│
├── src/
│ ├── pages/
│ │ ├── BasePage.ts
│ │ └── StudentRegistrationFormPage.ts
└── FormPage.ts
│ │
│ ├── fixtures/
│ │ ├── pagefixtures.ts
│ │ └── apifixtures.ts
│ │
│ └── utils/
└── CsvHelper.ts
│
├── tests/
│ ├── studentregistrationform.spec.ts
│ └── api/
│
├── testdata/
│ ├── _.json
│ ├── _.csv
│ └── \*.xlsx
│
├── test-results/
├── playwright-report/
│
├── playwright.config.ts
├── package.json
├── package-lock.json
├── tsconfig.json
├── .gitignore
├── .env.example
└── README.md

## Prerequisites

Install the following before executing the tests:

- Node.js
- npm
- Git
- Visual Studio Code or any preferred IDE

Verify the installation:

```bash
node --version
npm --version
git --version
```

---

## 🚀 Installation

Clone the repository:

```bash
git clone <https://github.com/nmeduri/StudentRegistrationFormWebApiAutomationFramework.git>
```

Navigate to the project directory:

```bash
cd StudentRegistrationFormWebApiAutomationFramework
```

Install project dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## Environment Configuration

Environment-specific configuration should not contain credentials directly in the source code.

Create a local environment file based on `.env.dev` or `.env.qa`.

Example:

```env
BASE_URL=https://example.com
USER_NAME=your_username
PASSWORD_P=your_password
```

### Important

Do not commit the following files to Git:

```text
.env
.env.dev
.env.qa
.env.prod
```

Sensitive information should never be stored in the GitHub repository.

Use `.env.example` to document the required variables.

---

## Running Tests

### Run all Playwright tests

```bash
npx playwright test
```

### Run tests in headed mode

```bash
npx playwright test --headed
```

### Run a specific test file

```bash
npx playwright test tests/studentregistrationform.spec.ts
```

### Run a specific test

```bash
npx playwright test -g "Validate Page Title Test"
```

### Run tests using a specific browser

```bash
npx playwright test --project=chromium
```

```bash
npx playwright test --project=firefox
```

```bash
npx playwright test --project=webkit
```

---

## Cross-Browser Testing

The framework can be configured to execute tests against:

- Chromium
- Firefox
- WebKit

Example:

```bash
npx playwright test --project=chromium
```

---

## Test Reports

After execution, Playwright generates the HTML report.

Open the report using:

```bash
npx playwright show-report
```

The report provides:

- Test execution status
- Failed tests
- Execution duration
- Error details
- Screenshots
- Traces
- Test steps

---

## Screenshots, Videos and Traces

Playwright can capture debugging artifacts for failed tests.

Typical artifacts include:

```text
test-results/
playwright-report/
```

These generated files should not normally be committed to Git.

They are excluded through `.gitignore`.

---

## Framework Design

The framework follows the **Page Object Model (POM)** design pattern.

### BasePage

`BasePage.ts` contains common reusable browser operations.

Examples:

- Click
- Fill
- Select
- Get text
- Wait for element
- Navigation utilities

### StudentRegistrationFormPage

`StudentRegistrationFormPage.ts` contains page-specific:

- Locators
- Actions
- Form operations
- Validation methods

This keeps test cases clean and separates test logic from page implementation.

---

## Fixtures

The framework uses Playwright fixtures to provide reusable objects to test cases.

Example:

```typescript
test("Validate Page Title Test", async ({ formPage, page }) => {
  const pageTitle = await page.title();

  console.log("Page Title:", pageTitle);

  await expect(page).toHaveTitle("demosite");
});
```

Fixtures help reduce duplicate setup code and improve framework maintainability.

---

## 🔌 API Automation

The framework can also support API testing using Playwright's API request capabilities.

Typical API operations include:

```text
GET
POST
PUT
PATCH
DELETE
```

## 📋 Test Data Management

Test data can be maintained separately from test scripts.

Supported formats may include:

- JSON
- CSV
- Excel

Example:

text
testdata/

Separating test data from test scripts makes the framework easier to maintain and allows the same test flow to be executed with multiple datasets.

## 🔄 CI/CD

The project can be integrated with **GitHub Actions** for automated execution.

Example workflow location:

```text
.github/
└── workflows/
    └── playwright.yml
```

The CI pipeline can perform:

1. Checkout source code
2. Install Node.js
3. Install npm dependencies
4. Install Playwright browsers
5. Execute automated tests
6. Generate test reports
7. Publish test artifacts

---

## 🧹 Git and .gitignore

The repository should not contain generated files, dependencies, credentials, or temporary files.

Examples excluded by `.gitignore`:

```text
node_modules/
.env
.env.*
test-results/
playwright-report/
allure-results/
dist/
coverage/
```

The following files should normally be committed:

```text
src/
tests/
testdata/
playwright.config.ts
package.json
package-lock.json
tsconfig.json
.env.example
.gitignore
README.md
.github/workflows/
```

---

## 🔍 Code Quality Guidelines

The framework follows these practices:

- Use TypeScript strict typing
- Prefer reusable Page Object methods
- Avoid duplicate locators
- Keep test data separate from test logic
- Avoid hard-coded credentials
- Prefer reliable locators
- Avoid unnecessary `waitForTimeout()`
- Use Playwright auto-waiting wherever possible
- Keep assertions in test cases where appropriate
- Use meaningful test names
- Keep configuration centralized
- Do not commit generated reports or secrets

## 📈 Future Enhancements

The framework can be enhanced with:

- Parallel execution
- Multiple environment support
- API + UI end-to-end scenarios
- Allure reporting
- Docker execution
- GitHub Actions CI/CD
- Retry mechanism for failed tests
- Test tagging such as smoke/regression
- Excel/CSV/JSON data-driven testing
- Centralized logging
- API schema validation
- Accessibility testing
- Performance testing integration

## 👤 Author

**Naveen Meduri**

QA Automation / Test Automation Engineer


Run your tests and generate the Allure report
Step 1 — Clean previous reports
Removes the previous Allure and Playwright report folders.
npm run clean

Step 2 — Execute tests
Runs your Playwright tests.
npm test

Step 3 — Generate Allure HTML
Creates the report from the latest results.
npm run allure:generate

Step 4 — Open the report
Opens the generated Allure report.
npm run allure:open

You can also run everything from test execution through report opening with:
npm test
npm run allure:report

Verify cleanup:
Test-Path .\allure-results
Test-Path .\allure-report
Test-Path .\reports\html-report

Generate a fresh Allure report:
npm test
npm run allure:generate
npm run allure:open


/** 
Here are the commands I recommend for your OpenCart Playwright TypeScript framework on Windows.
*/

Step 1: Clone the project
If you haven't cloned the repository yet:

git clone <your-repository-url>
Navigate to the project folder:
cd OPENCART_APRIL_WEB_API_FRAMEWORK

Step 2: Check Node.js and npm
node -v
npm -v

These commands verify that Node.js and npm are installed.

Step 3: Install dependencies
npm ci
Why npm ci? It installs the dependency versions recorded in package-lock.json, giving you a more consistent setup.

If the repository doesn't contain package-lock.json, use:

npm install

Step 4: Install Playwright browsers

npx playwright install

If you only need Chromium:
npx playwright install chromium

This installs the browser binaries required by your Playwright configuration.

Step 5: Configure environment variables

If your project uses .env.dev or another environment file, check the README for the required setup.

For example, if your framework expects .env.dev, create or obtain that file with the necessary configuration. Don't commit passwords, access tokens, or other secrets to GitHub.

Step 6: Run your tests
npm run test

Run tests in headed mode:
npm run test:headed

Run only the Chromium project:
npm run test:chrome

All commands in sequence:
clone the project
cd to project folder

node -v
npm -v
npm ci
npx playwright install
npm run test
npm run test:report

// "allure:clean": "if exist allure-results rmdir /s /q allure-results & if exist allure-report rmdir /s /q allure-report",

To run batch file:
.\versiontests.bat run from command prompt
