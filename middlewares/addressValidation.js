const { addressJoi } = require('../validation/addressJoi');

module.exports = (req, res, next) => {
	const address = req.params;

	const { error } = addressJoi.validate(address);

	if (error) {
		return res.status(401).json({ message: error.message });
	}
  
	next();
};
