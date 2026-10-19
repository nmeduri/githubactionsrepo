import { test, expect } from "@playwright/test";

let OAUTH_CONFIG = {
  tokenurl: "https://accounts.spotify.com/api/token",
  granttype: process.env.OAUTH_GRANT_TYPE!,
  clientID: process.env.OAUTH_CLIENT_ID!,
  cleintSecret: process.env.OAUTH_CLIENT_SECRET!,
};

let accessToken: string;

test.beforeEach("POST-> generate access token", async ({ request }) => {
  let postResponse = await request.post(OAUTH_CONFIG.tokenurl, {
    form: {
      grant_type: OAUTH_CONFIG.granttype,
      client_id: OAUTH_CONFIG.clientID,
      client_secret: OAUTH_CONFIG.cleintSecret,
    },
  });
  expect(postResponse.status()).toBe(200);
  expect(postResponse.statusText()).toBe("OK");
  console.log("security details:", await postResponse.securityDetails());
  let jsonbody = await postResponse.json();
  accessToken = jsonbody.access_token;
  console.log("Access Token:", accessToken);
});

test("Get Album details", async ({ request }) => {
  let token = `Bearer ${accessToken}`;
  console.log("Permanent Token:", token);
  let getResponse = await request.get(
    "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg",
    {
      headers: {
        Authorization: token,
      },
    },
  );
  // let jsonbody=await getResponse.json();
  // console.log(jsonbody);
});
