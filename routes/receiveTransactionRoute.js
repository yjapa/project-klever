const express = require('express');
const rescue = require('express-rescue');
const { receiveTransaction } = require('../controllers/receiveTransactionController');
const { transactionValidation } = require('../middlewares');

const transaction = express.Router();

transaction.get('/:transaction', transactionValidation, rescue(receiveTransaction));

module.exports = transaction;
