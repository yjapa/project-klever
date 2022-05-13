const { sendAmountJoi } = require('../validation/sendAmountJoi');

module.exports = (req, res, next) => {
	const data = req.body;

	const { error } = sendAmountJoi.validate(data);

	if (error) {
		return res.status(401).json({ message: error.message });
	}
  
	next();
};
