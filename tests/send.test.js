const request = require('supertest');
const app = require('../server');
const mongoose = require('mongoose');
const axios = require('axios');
const sinon = require('sinon');
const { SEND } = require('../utils/constants');
const TransactionSchema = require('../schemas/TransactionSchema');
const clearDataBase = require('../utils/db');

jest.mock('axios');

describe('Tests /send', () => {
	beforeEach( async () => {
		sinon.stub(mongoose, 'model').returns({
			create: sinon.stub().resolves('Created a new transaction')
		});
		sendModel = mongoose.model('transactions', TransactionSchema);
		axios.get.mockClear();
		axios.post.mockClear();
		await clearDataBase();
	});

	afterEach(async () => {
		jest.restoreAllMocks();
	});

	let sendModel;

	const obj = {
		address: 'bc1qyzxdu4px4jy8gwhcj82zpv7qzhvc0fvumgnh0r',
		amount: '729049'
	};

	it('when request is successful', async () => {
		const resMongoose = await sendModel.create(obj);

		const response = await request(app)
			.post(SEND)
			.send({
				address: 'bc1qyzxdu4px4jy8gwhcj82zpv7qzhvc0fvumgnh0r',
				amount: '729049'
			});

		expect(resMongoose).toEqual('Created a new transaction');
		expect(response.status).toEqual(201);
	});
});

describe('Tests /send errors', () => {
	it('when the address is not passed', async () => {

		const response = await request(app)
			.post(SEND)
			.send({
				amount: '729049',
			});

		expect(response.status).toEqual(401);
		expect(response.body).toEqual({ message: 'All fields must be filled' });
	});

	it('when the address format is wrong', async () => {

		const response = await request(app)
			.post(SEND)
			.send({
				address: 'bc1qyzxdu4px4jy8gwhcj82',
				amount: '729049',
			});

		expect(response.status).toEqual(401);
		expect(response.body).toEqual({ message: 'Invalid address, decoded address is of unknown format' });
	});

	it('when the amount is not passed', async () => {

		const response = await request(app)
			.post(SEND)
			.send({
				address: 'bc1qyzxdu4px4jy8gwhcj82zpv7qzhvc0fvumgnh0r',
			});

		expect(response.status).toEqual(401);
		expect(response.body).toEqual({ message: 'All fields must be filled' });
	});

	it('when the amount is not a string', async () => {

		const response = await request(app)
			.post(SEND)
			.send({
				address: 'bc1qyzxdu4px4jy8gwhcj82zpv7qzhvc0fvumgnh0r',
				amount: 729049,
			});

		expect(response.status).toEqual(401);
		expect(response.body).toEqual({ message: '"amount" must be a string' });
	});
});
