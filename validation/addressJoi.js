const Joi = require('joi');

const addressJoi = Joi.object({
	address: Joi.string().required().length(42).messages({
		'string.base': '"address" must be a string',
		'string.length': 'Invalid address, decoded address is of unknown format',
	}),
});

module.exports = {
	addressJoi,
};
