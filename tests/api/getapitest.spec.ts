import { test, expect, request, APIResponse } from "@playwright/test";

// let user={
//     "id":101,
//     "name": "Test",
//     "email": "test@example.com",
//     "roles":["ADMIN","USER"]
// };

// let AUTH_TOKEN = {
//   Authorization:
//     "Bearer 52684b526279200ae7ec29dd95383aab1bb96017391c40b8d70c239be45a2fe9",
// };

// test("get All user GET api test", async ({ request }) => {
//   let response: APIResponse = await request.get(
//     "https://gorest.co.in/public/v2/users",
//     { headers: AUTH_TOKEN },
//   );
//   let jsonBody = await response.json();
//   // console.log(jsonBody);
//   console.log(response.status());
//   console.log(response.statusText());
// });

// test('Create an Employee Test',async({request})=>{
//   await request.post("https://gorest.co.in/public/v2/users",);
// })

test("Validate User GET API", async ({ request }) => {
  let response = {
    id: 101,
    name: "Test",
    email: "test@example.com",
    roles: ["ADMIN", "USER"],
  };

  // let apiresponse=await request.get('URL',{});
  // let response= await apiresponse.json();
  // expect.soft(response.status).toBe(200);
  // expect.soft(response.statusText().toBe('OK');

  // Validations of received response

  // id exists and is numeric
  // name exists and is non empty
  // email exists and has a valid format
  // roles exist and contain at least one role
  const [username, domain] = response.email.split("@");
  expect.soft(response).toHaveProperty("id");
  expect.soft(typeof response.id).toBe("number");
  expect.soft(response).toHaveProperty("name");
  expect.soft(response.name).not.toBe("");
  expect.soft(response).toHaveProperty("email");
  expect.soft(response.email).toContain("@");
  expect.soft(username).not.toBe("");
  expect.soft(domain.length).toBeGreaterThan(4);
  expect.soft(domain).toContain(".");
  expect.soft(response.roles).not.toBe("");
  expect.soft(Array.isArray(response.roles)).toBe(true);
  expect.soft(response.roles.length).toBeGreaterThan(0);
});
