const DetailsModel = require('../models/DetailsModel');
const { balanceAddress } = require('../services/BalanceService');

const detailsAddress = async (address) => {
  const data = await DetailsModel.detailsAddress(address);

  const balance = await balanceAddress(address);

  const details = {
    address: data.address,
    balance: data.balance,
    totalTx: data.txs,
    balances: { ...balance },
    total: {
      sent: data.totalSent,
      received: data.totalReceived,
    },
  };

  return details;
};

module.exports = {
  detailsAddress,
};
