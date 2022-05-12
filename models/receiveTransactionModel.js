const axios = require('axios');
const https = require('https');

const agent = new https.Agent({
	rejectUnauthorized: false
});

const receiveTransaction = async (transaction) => {
	const { data } = await axios
		.get(
			`https://blockbook-bitcoin.tronwallet.me/api/v2/tx/${transaction}`,
			{ httpsAgent: agent }
		);

	return data;
};

module.exports = {
	receiveTransaction,
};
