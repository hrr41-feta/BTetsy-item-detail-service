var mongoose = require('mongoose');
var productDetails = require('./index.js');
var data = require('./seedData.js');

// https://stackoverflow.com/questions/16726330/mongoose-mongodb-batch-insert
var onInsert = function(err, docs) {
  if (err) {
    console.log(err);
  } else {
    console.info('%d product details were successfully stored.', docs.length);
  }
};
console.log(productDetails);
productDetails.insertMany(data, onInsert);

