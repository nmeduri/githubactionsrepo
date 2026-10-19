import { test, expect } from "@playwright/test";

import { Ajv } from "ajv";

const TOKEN = process.env.API_TOKEN;

let AUTH_TOKEN = {
  Authorization: `Bearer ${TOKEN}`,
};
let ajv = new Ajv();
let userSchema = {
  type: "object",
  properties: {
    id: {
      type: "number",
    },
    name: {
      type: "string",
    },
    email: {
      type: "string",
    },
    gender: {
      type: "string",
    },
    status: {
      type: "string",
    },
  },
  required: ["id", "name", "email", "gender", "status"],
};

test("schema validation test", async ({ request }) => {
  let userData = {
    name: "API PW Automations",
    email: `pwtest${Date.now()}@example.com`,
    gender: "male",
    status: "active",
  };
  // Create an user
  let postResponse = await request.post(
    `${process.env.API_BASE_URL}/public/v2/users`,
    {
      headers: AUTH_TOKEN,
      data: userData,
    },
  );

  console.log("The Base URL is:", process.env.API_BASE_URL);
  console.log(
    `************** ${postResponse.status()}, ${postResponse.statusText()}***********`,
  );
  let jsonBody = await postResponse.json();
  console.log(jsonBody);
  expect.soft(postResponse.status()).toBe(201);
  expect.soft(postResponse.statusText()).toBe("Created");
  let empID = jsonBody.id;
  console.log("The Employee Number is:", empID);

  // Get single user Record
  let getResponse = await request.get(
    `${process.env.API_BASE_URL}/public/v2/users/${empID}`,
    {
      headers: AUTH_TOKEN,
    },
  );
  let getJsonBody = await getResponse.json();
  console.log(getJsonBody);

  let body=JSON.stringify(await getResponse.json());
  console.log("The JSON BODY:",body);
  console.log("The Type :",typeof body);
  console.log("Type of JSONBODY", typeof jsonBody);
  // verify schema
  let validate = ajv.compile(userSchema);
  console.log(validate.schema);

  let isUserSchemaValid = validate(getJsonBody);
  if (!isUserSchemaValid) {
    console.log("SCHEMA ERRORS:", validate.errors);
  }
  expect(isUserSchemaValid).toBeTruthy();

    console.log("The Base URL is:", process.env.API_BASE_URL);
    console.log(
      `************** ${getResponse.status()}, ${getResponse.statusText()}***********`,
    );
    expect.soft(getResponse.status()).toBe(200);
    expect.soft(getResponse.statusText()).toBe("OK");
});
