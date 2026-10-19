import { test, expect } from "@playwright/test";
import fs from "node:fs/promises";

test("headervalidations test", async ({ request }) => {
  let response = await request.get("https://gorest.co.in/public/v2/users");

  //1. read from all headers
  let headers = response.headers();
  console.log("Headrs:", headers);
  expect(headers["content-type"]).toContain("application/json");
  expect(headers["server"]).toContain("cloudflare");

  //2. read from single header
  let headers1 = response.headersArray();
  //  console.log('Headers:',headers1);
  for (let ele of headers1) {
    console.log(ele.name, ele.value);
  }
});

test.skip("Interview questions test", async ({ request }) => {
  let response = await request.get("https://gorest.co.in/public/v2/users");

  // Q1. How do you validate that an API returns JSON?
  expect(response.headers()["content-type"]).toContain("application/json");

  // Q2. How do you validate a redirect response?
  expect(response.status()).toBe(301);
  expect(response.headers()["location"]).toContain("");

  // Q3. How do you validate a secure cookie?

  //HTTP/1.1 200 OK
  // Set-Cookie: sessionId=abc123; HttpOnly; Secure; SameSite=Lax
  // Content-Type: application/json

  expect(response.status()).toBe(200);
  expect(response.headers()["Set-Cookie"]).toContain("sessionId=");
  expect(response.headers()["Set-Cookie"]).toContain("HttpOnly");
  expect(response.headers()["Set-Cookie"]).toContain("Secure");

  // Q4. How do you validate a file download response?

  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toContain("application/pdf"); // if it is pdf file
  expect(response.headers()["content-type"]).toContain("image/png"); // if it is PNG
});

test.skip("", async ({ playwright }) => {
  await playwright.request.newContext();
});

test.skip("Download PDF using API", async ({ request }) => {
  const response = await request.get("https://example.com/files/report.pdf");

  // Validate status code
  expect(response.status()).toBe(200);

  // Validate content type
  expect(response.headers()["content-type"]).toContain("application/pdf");

  // Get binary file content
  const fileBuffer = await response.body();

  // Save the downloaded file
  await fs.writeFile("report.pdf", fileBuffer);

  // Validate file size
  expect(fileBuffer.length).toBeGreaterThan(0);
});
