import { APIResponse } from "@playwright/test";
import { test, expect } from "../../src/fixtures/apifixtures";

const TOKEN = process.env.API_TOKEN!;
let AUTH_HEADER = {
  Authorization: `Bearer ${TOKEN}`,
};

let recordID: string;
// sequence of test is : get all users -> post ->put->patch ->delete
test.describe.serial("running e2e gorest crud apis test", () => {
  test("get All user GET api test", async ({ apihelper }) => {
    let response = await apihelper.doGet("/public/v2/users/", AUTH_HEADER);
    expect(response.status).toBe(200);
   
  });

  test("create a user POST api test", async ({ apihelper }) => {
    let empData = {
      name: "API PW Automations",
      email: `pwtest${Date.now()}@example.com`,
      gender: "male",
      status: "active",
    };
    let response = await apihelper.doPost(
      "/public/v2/users/",
      empData,
      AUTH_HEADER,
    );

    console.log(response.body);
    recordID = response.body.id;
    console.log("Record ID:", recordID);
    expect.soft(response.status).toBe(201);
    expect.soft(response.statusText).toBe("Created");
    expect.soft(Object.keys(response.body).length).toBeGreaterThan(0);
    expect.soft(response.body).toHaveProperty("id");
    expect.soft(response.body).toHaveProperty("name");
    expect.soft(response.body).toHaveProperty("email");
    expect.soft(response.body).toHaveProperty("gender");
    expect.soft(response.body).toHaveProperty("status");
  });
  test("update a user PUT api test", async ({ apihelper }) => {
    let empData = {
      name: "API PW Automations12",
      gender: "male",
      status: "active",
    };
    let response = await apihelper.doPut(
      `/public/v2/users/${recordID}`,
      empData,
      AUTH_HEADER,
    );

    console.log(response.body);
    expect.soft(response.status).toBe(200);
    expect.soft(response.statusText).toBe("OK");
    expect.soft(Object.keys(response.body).length).toBeGreaterThan(0);
    expect.soft(response.body).toHaveProperty("id");
    expect.soft(response.body).toHaveProperty("name");
    expect.soft(response.body).toHaveProperty("email");
    expect.soft(response.body).toHaveProperty("gender");
    expect.soft(response.body).toHaveProperty("status");
  });

  test("Partial update/Patch a user PATCH api test", async ({ apihelper }) => {
    let empData = {
      status: "Inactive",
    };
    let response = await apihelper.doPut(
      `/public/v2/users/${recordID}`,
      empData,
      AUTH_HEADER,
    );

    console.log(response.body);
    expect.soft(response.status).toBe(200);
    expect.soft(response.statusText).toBe("OK");
    expect.soft(Object.keys(response.body).length).toBeGreaterThan(0);
    expect.soft(response.body).toHaveProperty("id");
    expect.soft(response.body).toHaveProperty("name");
    expect.soft(response.body).toHaveProperty("email");
    expect.soft(response.body).toHaveProperty("gender");
    expect.soft(response.body).toHaveProperty("status");
  });

  test("Delete a user DELETE api test", async ({ apihelper }) => {
    let empData = {
      status: "Inactive",
    };

    let response = await apihelper.doDelete(
      `/public/v2/users/${recordID}`,
      AUTH_HEADER,
    );
    expect.soft(response.status).toBe(204);
    expect.soft(response.statusText).toBe("No Content");
  });
});
