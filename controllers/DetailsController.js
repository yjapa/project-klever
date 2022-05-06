const DetailsService = require('../services/DetailsService');

const detailsAddress = async (req, res) => {
  const { address } = req.params;

  const details = await DetailsService.detailsAddress(address);

  return res.status(200).json(details);
};

module.exports = {
  detailsAddress,
};
