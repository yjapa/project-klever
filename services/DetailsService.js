const DetailsModel = require('../models/DetailsModel');

const detailsAddress = async (address) => {
  const details = await DetailsModel.detailsAddress(address);

  return details;
};

module.exports = {
  detailsAddress,
};
