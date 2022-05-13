const express = require('express');
const StatusCode = require('../utils/StatusCode');
const { getSummary } = require('../utils/Summary');


const summary = express.Router();

summary.get('/', async (_req, res) => {

	const response = await getSummary();

	return res.status(StatusCode.OK).send(response);
});

module.exports = summary;