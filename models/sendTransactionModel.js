const { model } = require('mongoose');
const TransactionSchema = require('../schemas/TransactionSchema');

const transactionModel = model('transactions', TransactionSchema);

const createTransaction = async (obj) => {
  await transactionModel.create(obj);

  const transactions = getTransactions();

  return transactions;
};

const getTransactions = async () => {
  const transactions = await transactionModel.find({}, { _id: 0 });

  return { utxos: transactions };
};


module.exports = {
  createTransaction,
};
