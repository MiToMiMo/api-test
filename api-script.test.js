const request = require('supertest');

const apiUrl = 'https://petstore.swagger.io/v2';

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

test('POST /pet returns a 200 status code', async () => {
  const response = await request(apiUrl)
    .post('/pet')
    .send(requestBody)
    .set('Content-Type', 'application/json');

  expect(response.status).toBe(200);
  console.log(response);
});

test('POST /pet returns the correct response body structure', async () => {
  const response = await request(apiUrl)
    .post('/pet')
    .send(requestBody)
    .set('Content-Type', 'application/json');

    expect(response.body).toEqual(requestBody);
  console.log(response);
});