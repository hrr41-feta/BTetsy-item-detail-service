const faker = require('faker');

const selectHours = function() {
  var hours = ['a few', 24];
  var randomIndex = Math.floor(Math.random() * Math.floor(2));

  return hours[randomIndex];
}

var qAndA = function() {
  var qALength = Math.floor(Math.random() * Math.floor(6));
  var qAArr = [];

  for (var i = 0; i < qALength; i++) {
    qAArr.push({
      question: faker.lorem.sentence() + '?',
      answer: faker.lorem.sentence()
    })
  }
  return qAArr;
};


var createData = function(records) {
  //records is the number of records
  var itemsArr = [];

  for (var i = 0; i < records; i++) {
    itemsArr.push({
      vendorName: faker.company.companyName(),
      vendorFirstName: faker.name.firstName(),
      vendorLocation: faker.address.state(),
      vendorCountry: faker.address.country(),
      shopPolicies: JSON.stringify({
        returnsAndExchange: faker.lorem.paragraph(),
        shippingPolicies: faker.lorem.paragraph(),
        additionalPolicies: faker.lorem.paragraph()
      }),
      faq: JSON.stringify(qAndA()),
      vendorPhoto: faker.image.avatar(),
      vendorResponseTime: "This seller usually responds within " + selectHours() + " hours.",
      productId: i,
      product: JSON.stringify({
        productName: faker.commerce.productName(),
        productDescription: faker.lorem.paragraphs()
      })
    });
  }

  return itemsArr;
}

module.exports = {
  createData
};

