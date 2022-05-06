const BalanceModel = require('../models/BalanceModel');

const balanceAddress = async (address) => {
  const data = await BalanceModel.balanceAddress(address);

  return data;
};

module.exports = {
  balanceAddress,
};
