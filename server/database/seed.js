var seeder = require('mongoose-seed');
var data = require('./seedData.js');
var itemDetails = require('./index.js');
seeder.connect('mongodb://localhost/item-details', function() {
  seeder.loadModels([
    './server/database/index.js'
  ]);
  seeder.clearModels(['itemDetails'], function() {
    seeder.populateModels(data, function() {
      seeder.disconnect();
    });
  });
});