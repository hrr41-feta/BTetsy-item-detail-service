const faker = require('faker');
const fs = require('fs');
const csvWriter = require('csv-write-stream');

const writeDescription = fs.createWriteStream('description.csv');
writeDescription.write('id,vendorName,vendorFirstName,vendorLocation,vendorCountry,vendorPhoto,vendorResponseTime,productId\n', 'utf8');

const writeShopPolicies = fs.createWriteStream('shopPolicies.csv');
writeShopPolicies.write('id,productId,returnsAndExchange,shippingPolicies,additionalPolicies\n', 'utf8');

const writeFaq = fs.createWriteStream('faq.csv');
writeFaq.write('id,productId,question,answer\n', 'utf8');

const writeProduct = fs.createWriteStream('product.csv');
writeProduct.write('id,productId,productName,productDescription\n', 'utf8');


function writeDescriptionRecords(writer, encoding, callback) {
  let i = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;

      const selectHours = function() {
        var hours = ['a few', 24];
        var randomIndex = Math.floor(Math.random() * Math.floor(2));
        return hours[randomIndex];
      };
      let vendorName = '"' + faker.company.companyName() + '"';
      let vendorFirstName = '"' + faker.name.firstName() +'"';
      let vendorLocation = '"' + faker.address.state() + '"';
      let vendorCountry = '"' + faker.address.country() + '"';
      let vendorPhoto = faker.image.avatar();
      let vendorResponseTime = "This seller usually responds within " + selectHours() + " hours.";
      let productId = id;

      const data = `${id},${vendorName},${vendorFirstName},${vendorLocation},${vendorCountry},${vendorPhoto},${vendorResponseTime},${productId}\n`;

      if (i % 1000 === 0){
        console.log(i);
      }
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
}

writeDescriptionRecords(writeDescription, 'utf-8', () => {
  writeDescription.end();
});


function writeShopPolicesRecords(writer, encoding, callback) {
  let i = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const productId = id;
      const returnsAndExchange = '"' + faker.lorem.paragraph() + '"';
      const shippingPolicies = '"' + faker.lorem.paragraph() + '"';
      const additionalPolicies = '"' + faker.lorem.paragraph() + '"';
      const data = `${id},${productId},${returnsAndExchange},${shippingPolicies},${additionalPolicies}\n`;

      if (i % 1000 === 0){
        console.log(i);
      }
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
}

writeShopPolicesRecords(writeShopPolicies, 'utf-8', () => {
  writeShopPolicies.end();
});


function writeFaqRecords(writer, encoding, callback) {
  let i = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const productId = id;
      const question = faker.lorem.sentence() + '?';
      const answer = faker.lorem.sentence();
      const data = `${id},${productId},${question},${answer}\n`;

      if (i % 1000 === 0){
        console.log(i);
      }
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
}

writeFaqRecords(writeFaq, 'utf-8', () => {
  writeFaq.end();
});

function writeProductRecords(writer, encoding, callback) {
  let i = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const productId = id;
      const productName = '"' + faker.commerce.productName() + '"';
      const productDescription = '"' + faker.lorem.paragraphs() + '"';
      const data = `${id}, ${productId},${productName},${productDescription}\n`;

      if (i % 1000 === 0){
        console.log(i);
      }
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write();
}

writeProductRecords(writeProduct, 'utf-8', () => {
  writeProduct.end();
});
