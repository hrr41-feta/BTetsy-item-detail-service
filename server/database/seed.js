/* eslint-disable no-console */
/* eslint-disable func-names */
const seedData = require('./seedData.json');
const { itemDetails } = require('./index.js');

const onInsert = function (err, docs) {
  if (err) {
    console.log(err);
  } else {
    console.info('%d item details were successfully stored.', docs.length);
  }
};
itemDetails.insertMany(seedData, onInsert);
