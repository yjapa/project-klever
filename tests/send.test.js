const request = require('supertest');
const app = require('../server');
const { SEND } = require('../utils/constants')

describe('Tests /send', () => {
  it('when request is successful', async () => {
    const response = await request(app).post(SEND);

    expect(response.statusCode).toEqual(201);
  })
});