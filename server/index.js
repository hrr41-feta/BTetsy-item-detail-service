const express = require('express');
const models = require('./database/models.js');

const app = express();
app.use(express.json());
app.use(express.static(`${__dirname}/../client/dist`));
const port = 3000;

app.get('/index', (req, res) => {
  models.getOneItem()
    .then((value) => res.json(value))
    .catch((error) => error);
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${port}`);
});
