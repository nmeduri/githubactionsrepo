import { test, expect } from "@playwright/test";

test("intercept mocking api", async ({ page }) => {
  let mockData = [
    {
      name: "naveen",
      place: "Bglr",
    },
    {
      name: "Meduri",
      place: "Chennai",
    },
  ];

  await page.route('**/index.php?route=product/search&search=macbook', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      //body: JSON.stringify(mockData),
      json:[
        {
          "name":"abc",
           "place":"Chennai"
        }
      ]
    });
  })

  await page.goto("https://abc.com/opencart/index.php?route=product/search&search=macbook");
  // await page.pause();
  // await page.waitForTimeout(3000);
})
