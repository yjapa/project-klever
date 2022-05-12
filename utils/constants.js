const DETAILS = '/details/bc1qyzxdu4px4jy8gwhcj82zpv7qzhvc0fvumgnh0r';

const BALANCE = '/balance/bc1qyzxdu4px4jy8gwhcj82zpv7qzhvc0fvumgnh0r';

const NOT_FOUND_ADDRESS = (route) => `/${route}/bc1qyzxdu4px4jy8gwhcj82zpv7qzhvc0fvumgnh09`;

const INVALID_ADDRESS = (route) => `/${route}/bc1qyzxdu4px4jy8gwhc`;

const TX = '/tx/3654d26660dcc05d4cfb25a1641a1e61f06dfeb38ee2279bdb049d018f1830ab';

const NOT_FOUND_TRANSACTION = '/tx/e93e4d9e0ceb7d43c9d0932114391021c53fc1f25a8ee1101084818d81186cc9';

const INVALID_TRANSACTION = '/tx/e93e4d9e0ceb7d43c9d09321143910';

const SEND = '/send';

module.exports = {
	NOT_FOUND_TRANSACTION,
	INVALID_TRANSACTION,
	NOT_FOUND_ADDRESS,
	INVALID_ADDRESS,
	DETAILS,
	BALANCE,
	SEND,
	TX,
};
