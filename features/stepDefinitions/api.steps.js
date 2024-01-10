const { Given, When, Then } = require('cucumber');
const request = require('supertest');
const expect = require('expect');

let apiUrl;
let response;
const requestBody = {
    "id": 1121,
    "category": {
      "id": 1,
      "name": "testCategory"
    },
    "name": "Test_doggie",
    "photoUrls": [
      "string"
    ],
    "tags": [
      {
        "id": 0,
        "name": "string"
      }
    ],
    "status": "available"
  };


Given('the API URL is {string}', function (url) {
    apiUrl = url;
});

When('make a POST request to {string}', async function (endpoint) {
    response = await request(apiUrl)
      .post(endpoint)
      .send(requestBody)
      .set('Content-Type', 'application/json');
  });
  
  Then('the response status is {int}', function (statusCode) {
    expect(response.status).toBe(statusCode);
  });

Then('the response body have the correct structure', function () {
  expect(response.body).toEqual(requestBody);
});

Then('delete pet', async function() {
    const id = requestBody.id;
    await request(apiUrl)
    .delete('/pet/' + id)
    .set('Content-Type', 'application/json')
    .then((res) => {
      response = res;
    });
    expect(response.status).toBe(200);
});
