const mongoose = require('mongoose');
const seedData = require('./seedData.json');
const itemDetails = require('./index.js').itemDetails;

var onInsert = function(err, docs) {
  if (err) {
    console.log(err);
  } else {
    console.info('%d item details were successfully stored.', docs.length);
  }
};
itemDetails.insertMany(seedData, onInsert);
