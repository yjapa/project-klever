const mongoose = require('mongoose');
require('dotenv/config')

const USER_MONGO = process.env.MONGO_INITDB_ROOT_USERNAME || 'root';
const PASS_MONGO = process.env.MONGO_INITDB_ROOT_PASSWORD || 'password';

const options = {
	user: USER_MONGO, pass: PASS_MONGO, autoIndex: false, dbName: 'klever_challenger'
};

const connection = (mongoDatabaseURI) =>
	mongoose.connect(mongoDatabaseURI, options);

module.exports = {
	connection
};
