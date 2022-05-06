const express = require('express');
const rescue = require('express-rescue');
const { balanceAddress } = require('../controllers/BalanceController');

const balance = express.Router();

balance.get('/:address', rescue(balanceAddress));

module.exports = balance;