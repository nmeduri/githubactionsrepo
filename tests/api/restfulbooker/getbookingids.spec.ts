import { test, expect } from "@playwright/test";

/**
 *  Returns the ids of all the bookings that exist within the API.
 */
test(" @regression Get All BookingIds", async ({ request }) => {
  let getResponse = await request.get(
    "https://restful-booker.herokuapp.com/booking",
  );
  expect(getResponse.status()).toBe(200);
  expect(getResponse.statusText()).toBe("OK");
  console.log("API Response Display:", getResponse);
  let jsonbody = await getResponse.json();
  console.log("JSONBODY:", jsonbody);
  console.log("Length of body:");
});

/**
 * 
 * Can take optional query strings to search and return a subset of booking ids.

get
 */
test(" Get subset BookingIds", async ({ request }) => {
  let getResponse = await request.get(
    "https://restful-booker.herokuapp.com/booking",
    {
      params: {
        firstname: "Teju",
        lastname: "Meduri",
      },
    },
  );
  expect(getResponse.status()).toBe(200);
  expect(getResponse.statusText()).toBe("OK");
  let jsonbody = await getResponse.json();
  console.log(jsonbody);
  console.log(typeof jsonbody);
  console.log(Array.isArray(jsonbody));
  for (let ele of jsonbody) {
    console.log(ele.bookingid);
  }
});

/**
 * URL encoded example
 */
test(" URL encoding", async ({ request }) => {
  let getResponse = await request.post(
    "https://restful-booker.herokuapp.com/booking",
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      // data:
      //  'firstname=Jim&lastname=Brown&totalprice=111&depositpaid=true&bookingdates%5Bcheckin%5D=2018-01-01&bookingdates%5Bcheckout%5D=2018-01-02'
      form: {
        firstname: "Tejovathi",
        lastname: "Meduri",
        totalprice: 111,
        depositpaid: true,
        "bookingdates[checkin]": "2018-09-01",
        "bookingdates[checkout]": "2018-09-02",
        additionalneeds: "Breakfast",
      },
    },
  );
  expect(getResponse.status()).toBe(200);
  expect(getResponse.statusText()).toBe("OK");
  let bookingId = await getResponse.json();
  console.log(bookingId.bookingid);
});
