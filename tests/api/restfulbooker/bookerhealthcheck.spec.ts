import {test,expect} from '@playwright/test';

let healthcheckURL=process.env.HEALTH_CHECK_URL;
test(' @smoke health check- restful booker api', async({request})=>{
    console.log('Health Check URL:',healthcheckURL);
       let healthcheckResponse=await request.get(`${healthcheckURL}`,{
            headers:{
                'Content-Type':'application/json',
                 Accept:'application/json'
            }
        })

        expect(healthcheckResponse.status()).toBe(201);
        expect(healthcheckResponse.statusText()).toBe('Created');
        expect(healthcheckResponse.securityDetails()).toBeDefined();
});