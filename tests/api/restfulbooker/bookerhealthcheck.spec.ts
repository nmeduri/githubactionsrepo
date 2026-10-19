import {test,expect} from '@playwright/test';

let healthcheckURL=process.env.HEALTH_CHECK_URL;
test('health check- restful booker api', async({request})=>{
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