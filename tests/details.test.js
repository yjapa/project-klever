const request = require('supertest');
const app = require('../server');
const { DETAILS } = require('../utils/constants')

describe('Tests /details', () => {
  it('when request is successful', async () => {
    const response = await request(app).get(DETAILS);

    expect(response.statusCode).toEqual(200);
  })
});