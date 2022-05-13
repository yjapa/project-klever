const request = require('supertest');
const app = require('../server');
const { BALANCE, NOT_FOUND_ADDRESS, INVALID_ADDRESS } = require('../utils/constants');
const axios = require('axios');
const mockBalance = require('./mocks/balance/mockBalance.json');
const error = require('./mocks/balance/errorBalance.json');
const invalid = require('./mocks/balance/invalidBalance.json');

describe('Tests /details', () => {

	afterEach(() => {
		axios.get.mockClear();
	});

	const expectedResponse = {
		confirmed: 89032279,
		unconfirmed: 120871065
	};

	it('when request is successful', async () => {
		const mockAxios = {
			data: mockBalance,
		};

		axios.get = jest.fn().mockResolvedValue(mockAxios);

		const response = await request(app).get(BALANCE);

		expect(response.status).toEqual(200);
		expect(response.body).toEqual(expectedResponse);
	});

	it('when the address does not exist', async () => {
		const mockAxiosError = {
			data: error,
		};

		axios.get = jest.fn().mockResolvedValue(mockAxiosError);

		const response = await request(app).get(NOT_FOUND_ADDRESS('balance'));

		expect(response.status).toEqual(404);
		expect(response.body).toEqual({ message: 'Address not found'});
	});

	it('when the address is invalid', async () => {
		const mockAxiosInvalid = {
			data: invalid,
		};

		axios.get = jest.fn().mockResolvedValue(mockAxiosInvalid);

		const response = await request(app).get(INVALID_ADDRESS('balance'));

		expect(response.status).toEqual(401);
		expect(response.body).toEqual({ message: 'Invalid address, decoded address is of unknown format'});
	});
});
