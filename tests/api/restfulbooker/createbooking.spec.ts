import { test, expect } from "@playwright/test";

let booker_auth_URL = process.env.RESTFUL_BOOKER_TOKEN_URL;
let tokenID: string;
let bookingIds: number[] = [];
test.beforeAll(" create tokenid:", async ({ request }) => {
  let authResponse = await request.post(`${booker_auth_URL}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data: {
      username: "admin",
      password: "password123",
    },
  });
  expect(authResponse.status()).toBe(200);
  expect(authResponse.statusText()).toBe("OK");

  let jsonbody = await authResponse.json();
  tokenID = jsonbody.token;
  console.log("Token:", tokenID);
});

test(" create booking:", async ({ request }) => {
  let i;
  let userData = {
    firstname: "Jim",
    lastname: "Brown",
    totalprice: 111,
    depositpaid: true,
    bookingdates: {
      checkin: "2018-01-01",
      checkout: "2019-01-01",
    },
    additionalneeds: "Breakfast",
  };

  // POST Request - no credentials / Token required
  for (i = 1; i <= 5; i++) {
    let postResponse = await request.post(
      "https://restful-booker.herokuapp.com/booking",
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        data: userData,
      },
    );
    console.log(`Request ${i}: ${postResponse.status()}`);
    expect.soft(postResponse.status()).toBe(200);
    expect.soft(postResponse.statusText()).toBe("OK");
    let jsonbody = await postResponse.json();
    bookingIds.push(jsonbody.bookingid);
  }
  console.log("booking ids:", bookingIds);
  // PUT Request credentials/Token required

  for (let ele of bookingIds) {
    console.log(`BookingID:${ele}`);
    console.log(
      `Started Update operation -- https://restful-booker.herokuapp.com/booking/${ele}`,
    );
    let putResponse = await request.put(
      `https://restful-booker.herokuapp.com/booking/${ele}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Cookie: `token=${tokenID}`,
        },
        data: {
          firstname: "James",
          lastname: "Brown",
          totalprice: 111,
          depositpaid: true,
          bookingdates: {
            checkin: "2018-01-01",
            checkout: "2019-01-01",
          },
          additionalneeds: "Lunch",
        },
      },
    );

    expect(putResponse.status()).toBe(200);
    expect(putResponse.statusText()).toBe("OK");
    console.log(
      `##################### ${ele} Record Updated ############################### `,
    );
    console.log(
      `##################### ${ele} Get started ############################### `,
    );
    let getResponse = await request.get(
      `https://restful-booker.herokuapp.com/booking/${ele}`,
    );
    expect(getResponse.status()).toBe(200);
    expect(getResponse.statusText()).toBe("OK");

    // Partial update

    let partialResponse = await request.patch(
      `https://restful-booker.herokuapp.com/booking/${ele}`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Cookie: `token=${tokenID}`,
        },
        data: {
          firstname: "Tejovathi",
          lastname: "Meduri",
        },
      },
    ); // patch

    expect(partialResponse.status()).toBe(200);
    expect(partialResponse.statusText()).toBe("OK");

    // Delete
    let deleteResponse = await request.delete(
      `https://restful-booker.herokuapp.com/booking/${ele}`,
      {
        headers: {
          "Content-Type": "application/json",
          Cookie: `token=${tokenID}`,
        },
      },
    );

    expect(deleteResponse.status()).toBe(201);
    expect(deleteResponse.statusText()).toBe("Created");
  } // for loop
  console.log("all booking ids updated");
});
