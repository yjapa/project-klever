const sendTransactionService = require('../services/sendTransactionService');
const StatusCode = require('../utils/StatusCode');

const createTransaction = async (req, res) => {
  const data = req.body;
  const create = await sendTransactionService.createTransaction(data);

  return res.status(StatusCode.CREATED).json(create);
};

module.exports = {
  createTransaction,
};
