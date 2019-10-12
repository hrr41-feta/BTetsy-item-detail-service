const express = require('express');
const itemDetails = require('./database/index.js').itemDetails;
const fetch = require('./database/models.js').fetch;
let app = express();
app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));
const port = 3000;

app.get('/', function(req, res) {
  console.log(itemDetails);
  console.log(fetch);
  res.status(200);
  fetch(itemDetails, res.send.bind(res));
});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
