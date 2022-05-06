const receiveTransactionModel = require('../models/receiveTransactionModel');

const receiveTransaction = async (transaction) => {
  const receive = await receiveTransactionModel.receiveTransaction(transaction);

  const addresses = receive.vin.map(({ addresses, value }) => ({
    address: addresses[0],
    value
  }));

  const { blockHeight, txid } = receive;

  return { addresses: addresses, block: blockHeight, txID: txid };
};

module.exports = {
  receiveTransaction,
};
