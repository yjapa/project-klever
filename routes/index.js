const DetailsRoute = require('./DetailsRoute');
const BalanceRoute = require('./BalanceRoute');
const sendTransactionRoute = require('./sendTransactionRoute');
const receiveTransactionRoute = require('./receiveTransactionRoute');
const HealthCheck = require('./HealthCheckRoute');

module.exports = {
  DetailsRoute,
  BalanceRoute,
  sendTransactionRoute,
  receiveTransactionRoute,
  HealthCheck,
};