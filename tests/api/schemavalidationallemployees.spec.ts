import { test, expect } from "../../src/fixtures/apifixtures";

import  schemaValidation  from "ajv";

const TOKEN = process.env.API_TOKEN;

let AUTH_TOKEN = {
  Authorization: `Bearer ${TOKEN}`,
};
let schema = new schemaValidation();
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
let allusersSchema = {
  type: "array",
  items: userSchema,
};
test("schema validation all users test", async ({ request }) => {
  // Get single user Record
  let getResponse = await request.get(
    `${process.env.API_BASE_URL}/public/v2/users`,
    {
      headers: AUTH_TOKEN,
    },
  );
  let getJsonBody = await getResponse.json();
  console.log('Json body:',getJsonBody);

  // verify schema
  let validate = schema.compile(allusersSchema);
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
