const receiveTransactionService = require('../services/receiveTransactionService');

const receiveTransaction = async (req, res) => {
  const { transaction } = req.params;

  const receive = await receiveTransactionService.receiveTransaction(transaction);

  return res.status(200).json(receive);
};

module.exports = {
  receiveTransaction,
};
