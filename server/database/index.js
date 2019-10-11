const mongoose = require('mongoose');
var seedData = require('./seedData.json');

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

module.exports = {
  itemDetails
};