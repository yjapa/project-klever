const BalanceService = require('../services/BalanceService');

const balanceAddress = async (req, res) => {
  const { address } = req.params;
  const data = await BalanceService.balanceAddress(address);

  return res.status(200).json(data);
};

module.exports = {
  balanceAddress,
};
