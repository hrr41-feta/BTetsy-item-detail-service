const { itemDetails } = require('./index.js');

// eslint-disable-next-line func-names
const getOneItem = function (productId) {
  return itemDetails.findOne({productId});
};

// var getOneItem = async function() {
//   const itemDetails = await itemDetails.findOne({vendorLocation: "California"});
//   return itemDetails;
// }
module.exports = {
  getOneItem,
};
