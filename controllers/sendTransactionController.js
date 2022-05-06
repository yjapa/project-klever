const sendTransactionService = require('../services/sendTransactionService');

const createTransaction = async (req, res) => {
  const data = req.body
  const create = await sendTransactionService.createTransaction(data);

  return res.status(200).json(create);
};

const getTransactions = async (_req, res) => {
  const transactions = await sendTransactionService.getTransactions();

  return res.status(200).json(transactions);
};

module.exports = {
  createTransaction,
  getTransactions,
};
