import { test as baseTest } from "@playwright/test";
import { ApiHelper } from "../../src/api/ApiHelper";

// define type for API fixtures
type APIFixtures = {
  apihelper: ApiHelper;
};

export let test = baseTest.extend<APIFixtures>({
  apihelper: async ({ request, baseURL }, use) => {
    let apihelper = new ApiHelper(request, process.env.API_BASE_URL!);
    await use(apihelper);
  },
});

export { expect } from "@playwright/test";
