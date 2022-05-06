const sendTransactionModel = require('../models/sendTransactionModel');

const createTransaction = async (obj) => {
  const create = await sendTransactionModel.createTransaction(obj);

  return create
};

const getTransactions = async () => {
  const transactions = await sendTransactionModel.getTransactions();

  return transactions;
};

module.exports = {
  createTransaction,
  getTransactions,
};
