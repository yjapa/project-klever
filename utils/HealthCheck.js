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
  
  const checkDetails = await detailsAddress(address);
  const checkBalance = await balanceAddress(address);
  const checkTransaction = await createTransaction(obj);
  const checkReceive = await receiveTransaction(transaction);

  const healthCheck = {
  uptime: process.uptime(),
  message: "UP" ,
  date: new Date(),
  checks: [
    {
      name: "/details/{address}",
      type: "internal",
      status: checkDetails ? "UP" : "DOWN"
    },
    {
      name: "/balance/{address}",
      type: "internal",
      status: checkBalance ? "UP" : "DOWN"
    },
    {
      name: "/send",
      type: "internal",
      status: checkTransaction ? "UP" : "DOWN"
    },
    {
      name: "/tx/{tx}",
      type: "internal",
      status: checkReceive ? "UP" : "DOWN"
    }
  ]
};

  return healthCheck;
}

module.exports = {
  check,
};
