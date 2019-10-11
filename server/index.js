const express = require('express');
let app = express();
app.use(express.json());
app.use(express.static(__dirname + '/../client/dist'));
const port = 3000;

app.get('/', function(req, res) {
  console.log('app is functional');
  res.end();
});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});