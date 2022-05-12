const DetailsModel = require('../models/DetailsModel');

const detailsAddress = async (address) => {
	try {
		const { data } = await DetailsModel.detailsAddress(address);

		const details = {
			address: data.address,
			balance: data.balance,
			totalTx: data.txs,
			balances: {
				confirmed: data.unconfirmedBalance.toString(),
				unconfirmed: data.unconfirmedTxs.toString(),
			},
			total: {
				sent: data.totalSent,
				received: data.totalReceived,
			},
		};

		return details;
    
	} catch (err) {
		const error = {
			code: 'notFound',
			message: 'Address not found',
		};
		throw error;
	}
};

module.exports = {
	detailsAddress,
};
