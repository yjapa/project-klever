const Joi = require('joi');
const FIELD_REQUIRED = 'All fields must be filled';

const sendAmountJoi = Joi.object({
  txid: Joi.string().required().length(64).messages({
    'string.base': '"txid" must be a string',
    'string.length': 'Invalid txid',
    'any.required': FIELD_REQUIRED,
    'string.empty': FIELD_REQUIRED,
  }),
  amount: Joi.string().required().messages({
    'string.base': '"amount" must be a string',
    'any.required': FIELD_REQUIRED,
    'string.empty': FIELD_REQUIRED,
  }),
});

module.exports = {
  sendAmountJoi,
};
