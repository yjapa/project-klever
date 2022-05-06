const express = require('express');
const rescue = require('express-rescue');
const { getTransactions, createTransaction } = require('../controllers/sendTransactionController');

const transaction = express.Router();

transaction.post('/', rescue(createTransaction));

transaction.get('/', rescue(getTransactions));

module.exports = transaction;