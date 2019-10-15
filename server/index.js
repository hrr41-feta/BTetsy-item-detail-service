const express = require('express');
const models = require('./database/models.js');
let app = express();
app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));
const port = 3000;

app.get('/', function(req, res) {
  models.getOneItem()
    .then((value) => res.json(value))
    .catch((error) => console.log(error));
  //res.json(itemDetailsModel.getOneItem());
});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
