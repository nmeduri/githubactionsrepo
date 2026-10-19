import { test, expect } from "@playwright/test";

test("headervalidations test", async ({ request }) => {
  let response = await request.get("https://gorest.co.in/public/v2/users");

  console.log("Status Code:", response.status());
  console.log("Status Text:", response.statusText());
  console.log("Response Body:", await response.body());
});

test(" Get All BookingIds", async ({ request }) => {
  let getResponse = await request.get(
    "https://restful-booker.herokuapp.com/booking",
  );
  expect(getResponse.status()).toBe(200);
  expect(getResponse.statusText()).toBe("OK");
  console.log("API Response Display:", getResponse);
  let jsonbody = await getResponse.json();
  console.log("JSONBODY:", jsonbody);
  console.log("Length of JSON:", jsonbody.length);
  let midIndex = Math.floor(jsonbody.length / 2);
  let midObj = jsonbody[midIndex];
  console.log("Middle Object:", midObj);
  expect(typeof midObj).toBe("object");
  let user = jsonbody.find((item: any) => item.bookingid === 120);

  console.log("User", user, user.bookingid);
  expect(user.bookingid).toBeTruthy();
  //validate response structure

  expect(Array.isArray(jsonbody)).toBeTruthy();
  expect(jsonbody.length).toBeGreaterThan(0);
  for (let ele of jsonbody) {
    expect(ele.bookingid).toBeDefined();
    expect(typeof ele.bookingid).toBe("number");
  }
});
let user: any = [
  {
    id: 101,
    name: "sdfsd",
  },
];

let res = user.find((item: any) => item.id === 101);
console.log(res.name);
