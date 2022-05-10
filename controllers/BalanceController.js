const BalanceService = require('../services/BalanceService');
const StatusCode = require('../utils/StatusCode');

const balanceAddress = async (req, res) => {
  const { address } = req.params;
  const data = await BalanceService.balanceAddress(address);

  return res.status(StatusCode.OK).json(data);
};

module.exports = {
  balanceAddress,
};
