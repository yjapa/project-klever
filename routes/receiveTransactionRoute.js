const express = require('express');
const rescue = require('express-rescue');
const { receiveTransaction } = require('../controllers/receiveTransactionController');

const transaction = express.Router();

transaction.get('/:transaction', rescue(receiveTransaction));

module.exports = transaction;