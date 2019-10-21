const { itemDetails } = require('./index.js');

// eslint-disable-next-line func-names
const getOneItem = function () {
  return itemDetails.findOne();
};

// var getOneItem = async function() {
//   const itemDetails = await itemDetails.findOne({vendorLocation: "California"});
//   return itemDetails;
// }
module.exports = {
  getOneItem,
};
