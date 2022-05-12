const { detailsAddress } = require('../models/DetailsModel');
const { balanceAddress } = require('../models/BalanceModel');
const { createTransaction } = require('../models/sendTransactionModel');
const { receiveTransaction } = require('../models/receiveTransactionModel');

const check = async () => {
  const obj = {
    txid: "9ec20061fc37196c2ca689c36b002b786d461ee054a0557793be1eba11163935",
    amount: "729049"
  };

  const address = "bc1qyzxdu4px4jy8gwhcj82zpv7qzhvc0fvumgnh0r";
  const transaction = "3654d26660dcc05d4cfb25a1641a1e61f06dfeb38ee2279bdb049d018f1830ab";

  const statusAPI = async (func, param) => {
    try {
      const status = await func(param);
      if (status) {
        return "UP"
      }
    } catch(err) {
      return "DOWN"
    }
  }

  const checkDetails = await statusAPI(detailsAddress, address)
  const checkBalance = await statusAPI(balanceAddress, address);
  const checkTransaction = await statusAPI(createTransaction, obj);
  const checkReceive = await statusAPI(receiveTransaction, transaction);

  const healthCheck = {
  uptime: process.uptime(),
  message: "UP" ,
  date: new Date(),
  checks: [
    {
      name: "/details/{address}",
      type: "internal",
      status: checkDetails
    },
    {
      name: "/balance/{address}",
      type: "internal",
      status: checkBalance
    },
    {
      name: "/send",
      type: "internal",
      status: checkTransaction
    },
    {
      name: "/tx/{tx}",
      type: "internal",
      status: checkReceive
    }
  ]
};

  return healthCheck;
}

module.exports = {
  check,
};
