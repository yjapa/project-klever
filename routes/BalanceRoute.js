const express = require('express');
const rescue = require('express-rescue');
const { balanceAddress } = require('../controllers/BalanceController');
const { addressValidation } = require('../middlewares');

const balance = express.Router();

balance.get('/:address', addressValidation, rescue(balanceAddress));

module.exports = balance;
