
import {test,expect} from '@playwright/test';

test('Intercept network calls',async({page})=>{

   await page.route('**/*',async route=>{
   await route.continue();
   console.log(route.request().method(),route.request().url());
   });
   await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

})