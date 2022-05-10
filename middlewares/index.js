const domainError = require('./domainError');
const error = require('./error');
const addressValidation = require('./addressValidation');
const transactionValidation = require('./transactionValidation');
const sendAmountValidation = require('./sendAmountValidation');

module.exports = {
  domainError,
  error,
  addressValidation,
  transactionValidation,
  sendAmountValidation,
};
