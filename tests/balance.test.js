const request = require('supertest');
const app = require('../server');
const { BALANCE } = require('../utils/constants')

describe('Tests /balance', () => {
  it('when request is successful', async () => {
    const response = await request(app).get(BALANCE);

    expect(response.statusCode).toEqual(200);
  })
});