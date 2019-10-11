const mongoose = require('mongoose');
var seedData = require('./seedData.json');
//console.log(myData);

mongoose.connect('mongodb://localhost/BTetsy', { useNewUrlParser: true, useUnifiedTopology: true })
  .catch(error => console.log(error));
const itemDetailsSchema = new mongoose.Schema({
  vendorName: String,
  vendorFirstName: String,
  shopPolicies: {returnsAndExchanges: String, additionalPolicies: String},
  faq: [{question: String, answer: String}],
  vendorPhoto: String,
  vendorResponseTime: String,
  messages: [{userID: Number, message: String}],
  productId: [{productName: String, productDescription: String}]
});

const itemDetails = mongoose.model('itemDetails', itemDetailsSchema);


https://stackoverflow.com/questions/16726330/mongoose-mongodb-batch-insert
var onInsert = function(err, docs) {
  if (err) {
    console.log(err);
  } else {
    console.info('%d product details were successfully stored.', docs.length);
  }
};


itemDetails.insertMany(seedData, onInsert);


module.exports.itemDetails = itemDetails;