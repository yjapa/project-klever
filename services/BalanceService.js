const BalanceModel = require('../models/BalanceModel');

const sumBalance = (data) => data.reduce((acc, curr) => {
  if (curr.confirmations < 2) {
    acc.unconfirmed += Number(curr.value);

    return acc;
  }
  acc.confirmed += Number(curr.value);

  return acc
}, {
  confirmed: 0,
  unconfirmed: 0,
});

const balanceAddress = async (address) => {
  const data = await BalanceModel.balanceAddress(address);

  const balance = sumBalance(data);

  return balance;
};

module.exports = {
  balanceAddress,
};
