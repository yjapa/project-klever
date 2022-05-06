const express = require('express');
const app = express();
const { connection } = require('./connection');
const { DetailsRoute, BalanceRoute, sendTransactionRoute, receiveTransactionRoute } = require('./routes')

app.use(express.json());

const startServer = () => {
  connection();
}

startServer();
// connection();
app.use('/details', DetailsRoute);
app.use('/balance', BalanceRoute);
app.use('/balance', BalanceRoute);
app.use('/send', sendTransactionRoute);
app.use('/tx', receiveTransactionRoute);

app.listen(3000);
