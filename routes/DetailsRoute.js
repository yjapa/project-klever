const express = require('express');
const rescue = require('express-rescue');
const { detailsAddress } = require('../controllers/DetailsController');
const { addressValidation } = require('../middlewares');

const details = express.Router();

details.get('/:address', addressValidation, rescue(detailsAddress));

module.exports = details;
