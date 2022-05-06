const axios = require('axios');
const https = require('https');
const { balanceAddress } = require('./BalanceModel')

const agent = new https.Agent({
  rejectUnauthorized: false
});

const detailsAddress = async (address) => {
  const { data } = await axios
  .get(
    `https://blockbook-bitcoin.tronwallet.me/api/v2/address/${address}`,
    { httpsAgent: agent }
  );

  // const teste = await balanceAddress(address);

  const details = {
    address: data.address,
    balance: data.balance,
    totalTx: data.txs,
    // balance: {
    //   confirmed: teste.data.confirmed,
    //   unconfirmed: teste.data.unconfirmed,
    // },
    total: {
      sent: data.totalSent,
      received: data.totalReceived,
    },
  };
  return details;
}

module.exports = {
  detailsAddress,
};
