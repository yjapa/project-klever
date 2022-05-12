const receiveTransactionModel = require('../models/receiveTransactionModel');

const receiveTransaction = async (transaction) => {
	try {
		const receive = await receiveTransactionModel.receiveTransaction(transaction);
  
		const addresses = receive.vin.map(({ addresses, value }) => ({
			address: addresses[0],
			value
		}));
  
		const { blockHeight, txid } = receive;
  
		return { addresses: addresses, block: blockHeight, txID: txid };

	} catch (err) {
		const error = {
			code: 'notFound',
			message: 'Transaction not found',
		};
		throw error;
	}
};

module.exports = {
	receiveTransaction,
};
