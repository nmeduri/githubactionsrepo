import { test, expect, request, APIResponse } from "@playwright/test";
import { TestMetaDataHelper } from '../../src/utils/TestMetaDataHelper'
const TOKEN = process.env.API_TOKEN;
let AUTH_TOKEN = {
  Authorization: `Bearer ${TOKEN}`,
  // "Bearer 52684b526279200ae7ec29dd95383aab1bb96017391c40b8d70c239be45a2fe9",
};
let employeeID: number;

test.beforeAll(async ({ request }) => {
  let userData = {
    name: "API PW Automations",
    email: `pwautomation${Date.now()}@example.com`,
    gender: "male",
    status: "active",
  };
  let response: APIResponse = await request.post(
    "https://gorest.co.in/public/v2/users",
    {
      headers: {
        Authorization:
          "Bearer 52684b526279200ae7ec29dd95383aab1bb96017391c40b8d70c239be45a2fe9",
      },
      data: userData,
    },
  );

  let jsonBody = await response.json();
  console.log("JSONBODY:", jsonBody);
  employeeID = jsonBody.id;
  console.log("ID---:", employeeID);
});

test("Update an Employee Test", async ({ request }) => {
    TestMetaDataHelper.addMetadata({
    engineer: 'Naveen Meduri',
    module: 'Employee API',
    jira: 'ELNAPLAVI1-3761',
    priority: 'High',
    testType: 'API'
  });
  console.log("ID used for Update:", employeeID);
  let userData = {
    name: "API PW Automations14",
    email: `pwautomation${Date.now()}@example.com`,
    gender: "male",
    status: "active",
  };
  let response = await request.put(
    `https://gorest.co.in/public/v2/users/${employeeID}`,
    {
      headers: AUTH_TOKEN,
      data: userData,
    },
  );
  let jsonBody = await response.json();
  console.log(jsonBody);
  expect.soft(response.status()).toBe(200);
  expect.soft(response.statusText()).toBe("OK");
  expect.soft(jsonBody).toHaveProperty("id");
  expect.soft(jsonBody.id).not.toBe("");
  let ID = jsonBody.id;
  console.log(ID);
  expect.soft(jsonBody.id).toBe(Number(ID));
});

test("Patch an Employee Test", async ({ request }) => {
    TestMetaDataHelper.addMetadata({
    engineer: 'Naveen Meduri',
    module: 'Employee API',
    jira: 'ELNAPLAVI1-3761',
    priority: 'High',
    testType: 'API'
  });
  let userData = {
    status: "inactive",
  };
  let response = await request.patch(
    `https://gorest.co.in/public/v2/users/${employeeID}`,
    {
      headers: AUTH_TOKEN,
      data: userData,
    },
  );
  let jsonBody = await response.json();
  console.log(jsonBody);
  expect.soft(response.status()).toBe(200);
  expect.soft(response.statusText()).toBe("OK");
  expect.soft(jsonBody).toHaveProperty("id");
  expect.soft(jsonBody.id).not.toBe("");
  let ID = jsonBody.id;
  console.log(ID);
  expect.soft(jsonBody.id).toBe(Number(ID));
});
