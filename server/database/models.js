const { itemDetails } = require('./index.js');

// eslint-disable-next-line func-names
const getOneItem = function (productId) {
  return itemDetails.findOne({ productId });
};

//delete One item
const deleteOneItem = function (productId) {
  return itemDetails.deleteOne({ productId });
};


//update one item
const updateOneItem = function (productId, input) {
  return itemDetails.findOneAndUpdate({ productId }, input);
}

//post one item
const postOneItem = function (input) {
  var newItem = new itemDetails({
    vendorName: input.vendorName,
    vendorFirstName: input.vendorFirstName,
    vendorCountry: input.vendorCountry,
    shopPolicies: {
      returnsAndExchange: input.shopPolicies.returnsAndExchange,
      shippingPolicies: input.shopPolicies.shippingPolicies,
      additionalPolicies: input.shopPolicies.additionalPolicies
      },
    faq: [{ question: input.faq[0].question,
            answer: input.faq[0].answer }],
    vendorPhoto: input.vendorPhoto,
    vendorResponseTime: input.vendorResponseTime,
    productId: input.productId,
    product: { productName:input.product.productName, productDescription: input.product.productDescription },
  })
  return newItem.save();

}


module.exports = {
  getOneItem,
  postOneItem,
  deleteOneItem,
  updateOneItem
};
