const express = require('express');
const rescue = require('express-rescue');
const { createTransaction } = require('../controllers/sendTransactionController');
const { sendAmountValidation } = require('../middlewares');

const transaction = express.Router();

transaction.post('/', sendAmountValidation, rescue(createTransaction));

module.exports = transaction;
