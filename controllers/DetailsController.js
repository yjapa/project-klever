const DetailsService = require('../services/DetailsService');
const StatusCode = require('../utils/StatusCode');

const detailsAddress = async (req, res) => {
  const { address } = req.params;

  const details = await DetailsService.detailsAddress(address);

  return res.status(StatusCode.OK).json(details);
};

module.exports = {
  detailsAddress,
};
