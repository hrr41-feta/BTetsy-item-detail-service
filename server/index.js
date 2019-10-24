const express = require('express');
const models = require('./database/models.js');

const app = express();
app.use(express.json());
app.use(express.static(`${__dirname}/../client/dist`));
const port = 3000;
app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


app.get('/products/:productId', (req, res) => {
  const productId = req.params.productId;
  console.log(productId)
  models.getOneItem(productId)
    .then((value) => res.json(value))
    .catch((error) => error);
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${port}`);
});
