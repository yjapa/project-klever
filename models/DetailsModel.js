const axios = require('axios');
const https = require('https');

const agent = new https.Agent({
  rejectUnauthorized: false
});

const detailsAddress = async (address) => {
    const response = await axios
    .get(
      `https://blockbook-bitcoin.tronwallet.me/api/v2/address/${address}`,
      { httpsAgent: agent }
    );
  return response;

}





module.exports = {
  detailsAddress,
};
