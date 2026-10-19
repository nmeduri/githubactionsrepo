import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class FormPage extends BasePage {
  // locators + actions

  // 1. private Locators
  private readonly header: Locator;

  // 2. Initializing the Locators

  constructor(page: Page) {
    super(page);
    this.header = page.getByRole("heading", {
      name: "Student Registration Form",
      level: 5,
    });
  }

  // 3. Actions

  /**
   * navigate to Form Page
   */
  async goToSubmitForm(): Promise<void> {
    // Wait for the full load event (Default: HTML, scripts, and all images/stylesheets are loaded)
    //await this.page.goto("automation-practice-form", { waitUntil: "load" });
    //1. Navigate and wait until there are no network connections for at least 500ms
    await this.page.goto("automation-practice-form", { waitUntil: "load" });
  }

  /**
   *
   * @returns pageTitle
   */
  async titleName(): Promise<string> {
    return await this.page.title();
  }

  /**
   *
   * @returns header Text
   */
  async getHeader(): Promise<string | null> {
    // Wait until it is visible in the DOM (Default state is 'visible')
    await this.header.waitFor({ state: "visible" });
    return await this.header.textContent();
  }
}
