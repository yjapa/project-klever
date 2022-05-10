const sendTransactionModel = require('../models/sendTransactionModel');

const createTransaction = async (obj) => {
  const create = await sendTransactionModel.createTransaction(obj);

  return create
};

module.exports = {
  createTransaction,
};
