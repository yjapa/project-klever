const express = require('express');
const app = express();
const { connection } = require('./connection');
const { DetailsRoute, BalanceRoute, sendTransactionRoute, receiveTransactionRoute } = require('./routes')
const middlewares = require('./middlewares');

app.use(express.json());

const startServer = () => {
  connection();
}

startServer();

app.use('/details', DetailsRoute);
app.use('/balance', BalanceRoute);
app.use('/balance', BalanceRoute);
app.use('/send', sendTransactionRoute);
app.use('/tx', receiveTransactionRoute);

app.use(middlewares.domainError);
app.use(middlewares.error);


app.listen(3000);
