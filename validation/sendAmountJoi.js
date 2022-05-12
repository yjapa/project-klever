const Joi = require('joi');
const FIELD_REQUIRED = 'All fields must be filled';

const sendAmountJoi = Joi.object({
	address: Joi.string().required().length(42).messages({
		'string.base': '"address" must be a string',
		'string.length': 'Invalid address, decoded address is of unknown format',
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
