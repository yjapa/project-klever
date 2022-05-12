const request = require('supertest');
const app = require('../server');
const { TX, NOT_FOUND_TRANSACTION, INVALID_TRANSACTION } = require('../utils/constants');
const axios = require('axios');
const mockReceive = require('./mocks/receive/mockReceive.json');
const error = require('./mocks/receive/errorReceive.json');
const invalid = require('./mocks/receive/invalidReceive.json');

jest.mock('axios');

describe('Tests /tx', () => {
	beforeEach(() => {
		axios.get.mockClear();
	});

	const expectedResponse = {
		addresses: [
			{
				address: '1Kr6QSydW9bFQG1mXiPNNu6WpJGmUa9i1g',
				value: '18850407812'
			},
			{
				address: '345j2JWoSaDTwDAB14quFHjovgmkY8mFRh',
				value: '12499999552'
			},
			{
				address: '345j2JWoSaDTwDAB14quFHjovgmkY8mFRh',
				value: '5870000000'
			}
		],
		block: 735050,
		txID: 'e93e4d9e0ceb7d43c9d0932114391021c53fc1f25a8ee1101084818d81186cc5'
	};


	it('when request is successful', async () => {

		const mockAxios = {
			data: mockReceive,
		};

		axios.get = jest.fn().mockResolvedValue(mockAxios);

		const response = await request(app).get(TX);

		expect(response.status).toEqual(200);
		expect(response.body).toEqual(expectedResponse);
	});

	it('when the transaction does not exist', async () => {

		const mockAxiosError = {
			data: error,
		};

		axios.get = jest.fn().mockResolvedValue(mockAxiosError);

		const response = await request(app).get(NOT_FOUND_TRANSACTION);

		expect(response.status).toEqual(404);
		expect(response.body).toEqual({ message: 'Transaction not found' });
	});

	it('when the transaction is in valid', async () => {

		const mockAxiosInvalid = {
			data: invalid,
		};

		axios.get = jest.fn().mockResolvedValue(mockAxiosInvalid);

		const response = await request(app).get(INVALID_TRANSACTION);

		expect(response.status).toEqual(401);
		expect(response.body).toEqual({ message: 'Invalid transaction, decoded address is of unknown format' });
	});
});
