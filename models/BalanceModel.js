const axios = require('axios');
const https = require('https');

const agent = new https.Agent({
	rejectUnauthorized: false
});

const balanceAddress = async (address) => {
	const { data } = await axios
		.get(
			`https://blockbook-bitcoin.tronwallet.me/api/v2/utxo/${address}`,
			{ httpsAgent: agent }
		);

	return data;
};

module.exports = {
	balanceAddress,
};
