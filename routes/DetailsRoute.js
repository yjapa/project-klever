const express = require('express');
const rescue = require('express-rescue');
const { detailsAddress } = require('../controllers/DetailsController');

const details = express.Router();

details.get('/:address', rescue(detailsAddress));

module.exports = details;