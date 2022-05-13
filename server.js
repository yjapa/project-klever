const express = require('express');
const app = express();
const { connection } = require('./connection');
const middlewares = require('./middlewares');
const { DetailsRoute, BalanceRoute, sendTransactionRoute, receiveTransactionRoute, HealthCheckRoute, SummaryRoute } = require('./routes');
require('dotenv');

const URL = 'mongodb://localhost:27017/';

app.use(express.json());

const startServer = () => {
	connection(URL);
};

startServer();

app.use('/', SummaryRoute);
app.use('/health', HealthCheckRoute);
app.use('/details', DetailsRoute);
app.use('/balance', BalanceRoute);
app.use('/send', sendTransactionRoute);
app.use('/tx', receiveTransactionRoute);

app.use(middlewares.domainError);
app.use(middlewares.error);

module.exports = app;
