const request = require('supertest');
const app = require('../server');
const { TX } = require('../utils/constants')

describe('Tests /tx', () => {
  it('when request is successful', async () => {
    const response = await request(app).get(TX);

    expect(response.statusCode).toEqual(200);
  })
});