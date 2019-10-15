const mongoose = require('mongoose');
const itemDetails = require('./index.js').itemDetails;

var getOneItem = function() {
  return itemDetails.findOne({vendorLocation: 'California'})
    .then((res) => { return res; });
};

module.exports = {
  getOneItem
};
