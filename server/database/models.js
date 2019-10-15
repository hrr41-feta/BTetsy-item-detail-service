const mongoose = require('mongoose');
const itemDetails = require('./index.js').itemDetails;

var getOneItem = function() {
  return itemDetails.findOne();
};

// var getOneItem = async function() {
//   const itemDetails = await itemDetails.findOne({vendorLocation: "California"});
//   return itemDetails;
// }
module.exports = {
  getOneItem
};
