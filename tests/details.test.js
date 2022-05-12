const request = require('supertest');
const app = require('../server');
const { DETAILS, NOT_FOUND_ADDRESS, INVALID_ADDRESS } = require('../utils/constants');
const axios = require('axios');
const mockDetails = require('./mocks/details/mockDetails.json');
const error = require('./mocks/details/errorDetails.json');
const invalid = require('./mocks/details/invalidDetails.json');

jest.mock('axios');

describe('Tests /details', () => {

	beforeEach(() => {
		axios.get.mockClear();
	});

	const expectedResponse = {
		address: 'bc1qyzxdu4px4jy8gwhcj82zpv7qzhvc0fvumgnh0r',
		balance: '459200853',
		totalTx: 214230,
		balances: {
			confirmed: '-6676515',
			unconfirmed: '13'
		},
		total: {
			sent:
      '1382389181143',
			received: '1382848381996'
		}
	};

	it('when request is successful', async () => {
		const mockAxios = {
			data: mockDetails,
		};

		axios.get = jest.fn().mockResolvedValue(mockAxios);

		const response = await request(app).get(DETAILS);

		expect(response.status).toEqual(200);
		expect(response.body).toEqual(expectedResponse);
	});

	it('when the address does not exist', async () => {
		const mockAxiosError = {
			data: error,
		};

		axios.get = jest.fn().mockResolvedValue(mockAxiosError);

		const response = await request(app).get(NOT_FOUND_ADDRESS('details'));
    
		expect(response.status).toEqual(404);
		expect(response.body).toEqual({ message: 'Address not found'});
	});

	it('when the address is invalid', async () => {
		const mockAxiosInvalid = {
			data: invalid,
		};

		axios.get = jest.fn().mockResolvedValue(mockAxiosInvalid);

		const response = await request(app).get(INVALID_ADDRESS('details'));

		expect(response.status).toEqual(401);
		expect(response.body).toEqual({ message: 'Invalid address, decoded address is of unknown format'});
	});
});