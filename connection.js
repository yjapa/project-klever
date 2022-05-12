const mongoose = require('mongoose');

const connection = (mongoDatabaseURI = 'mongodb://localhost:27017/klever_challenger') =>
	mongoose.connect(mongoDatabaseURI);

module.exports = {
	connection
};
