const { model } = require('mongoose');
const TransactionSchema = require('../schemas/TransactionSchema');

const transactionModel = model('transactions', TransactionSchema);

const createTransaction = async (obj) => {
  const create = await transactionModel.create(obj);

  return create
};

const getTransactions = async () => {
  const transactions = await transactionModel.find({}, { _id: 0 });

  return { utxos: transactions };
};

module.exports = {
  getTransactions,
  createTransaction,
};
