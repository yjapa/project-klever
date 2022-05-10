const express = require('express');
const app = express();
const { connection } = require('./connection');
const middlewares = require('./middlewares');
const { DetailsRoute, BalanceRoute, sendTransactionRoute, receiveTransactionRoute, HealthCheck } = require('./routes')

app.use(express.json());

const startServer = () => {
  connection();
}

startServer();

app.use('/health', HealthCheck);
app.use('/details', DetailsRoute);
app.use('/balance', BalanceRoute);
app.use('/send', sendTransactionRoute);
app.use('/tx', receiveTransactionRoute);

app.use(middlewares.domainError);
app.use(middlewares.error);

app.listen(3000);
