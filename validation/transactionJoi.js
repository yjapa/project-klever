const Joi = require('joi');

const transactionJoi = Joi.object({
  transaction: Joi.string().required().length(64).messages({
    'string.base': '"transaction" must be a string',
    'string.length': 'Invalid transaction, decoded address is of unknown format',
  }),
});

module.exports = {
  transactionJoi,
};
