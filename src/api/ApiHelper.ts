import { APIRequestContext, APIResponse } from "@playwright/test";

export class ApiHelper {
  private readonly request: APIRequestContext;
  private readonly baseURL: string;

  constructor(request: APIRequestContext, baseURL: string) {
    this.request = request;
    this.baseURL = baseURL;
  }

  // helper methods

  // Get Method
  async doGet(endPoint: string, headers?: Record<string, string>) {
    console.log(`${this.baseURL}${endPoint}`);
    let response: APIResponse = await this.request.get(
      `${this.baseURL}${endPoint}`,
      {
        headers: headers,
      },
    );
    let jsonbody = await response.json();
    console.log(jsonbody);
    return {
      status: response.status(),
      body: jsonbody,
    };
  }

  // Post Method

  async doPost(
    endPoint: string,
    empData: Object,
    headers?: Record<string, string>,
  ) {
    let response: APIResponse = await this.request.post(
      `${this.baseURL}${endPoint}`,
      {
        headers: headers,
        data: empData,
      },
    );

    let jsonBody = await response.json();
    console.log(jsonBody);
    return {
      status: response.status(),
      statusText: response.statusText(),
      body: await response.json(),
    };
  }

  // Putt Method

  async doPut(
    endPoint: string,
    empData: Object,
    headers?: Record<string, string>,
  ) {
    let response: APIResponse = await this.request.put(
      `${this.baseURL}${endPoint}`,
      {
        headers: headers,
        data: empData,
      },
    );

    let jsonBody = await response.json();
    console.log(jsonBody);
    return {
      status: response.status(),
      statusText: response.statusText(),
      body: await response.json(),
    };
  }

  // Put Method

  async doPatch(
    endPoint: string,
    empData: Object,
    headers?: Record<string, string>,
  ) {
    let response: APIResponse = await this.request.patch(
      `${this.baseURL}${endPoint}`,
      {
        headers: headers,
        data: empData,
      },
    );

    let jsonBody = await response.json();
    console.log(jsonBody);
    return {
      status: response.status(),
      statusText: response.statusText(),
      body: await response.json(),
    };
  }

  // delete method
  async doDelete(endPoint: string, headers?: Record<string, string>) {
    let response: APIResponse = await this.request.delete(
      `${this.baseURL}${endPoint}`,
      {
        headers: headers,
      },
    );   
    return {
      status: response.status(),
      statusText: response.statusText(),
    };
  }
}
