const { transactionJoi } = require('../validation/transactionJoi');

module.exports = (req, res, next) => {
	const transaction = req.params;

	const { error } = transactionJoi.validate(transaction);

	if (error) {
		return res.status(401).json({ message: error.message });
	}
  
	next();
};
