const express = require('express');
const models = require('./database/models.js');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));
const port = 3000;
app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


//Create
app.post('/api/description', (req, res) => {
  models.postOneItem(req.body)
  .then((value) => res.status(200).json(value))
  .catch((err) => {
    res.status(404)
    res.send('Failed to post item');
  });
});

//Read
app.get('/api/description/:productId', (req, res) => {
  const productId = req.params.productId;
  console.log(productId);
  models.getOneItem(productId)
    .then((value) => res.status(200).json(value))
    .catch((err) => {
      res.status(404)
      res.send('Product not found');
    });
});

//Update
app.put('/api/description/:productId', function (req, res) {
  var productId = req.params.productId;
  var updatedItem = req.body;
  models.updateOneItem(productId, updatedItem)
    .then((value) => res.status(200).json(value))
    .catch((err) => {
      res.status(404)
      res.send(`Item ${productId} not updated`);
    });
})

//Delete
app.delete('/api/description/:productId', function (req, res) {
  var productId = req.params.productId;
  models.deleteOneItem(productId)
    .then((value) => res.status(200).json(value))
    .catch((err) => {
      res.status(404)
      res.send(`Item ${productId} not deleted`);
    });
})


app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${port}`);
});
