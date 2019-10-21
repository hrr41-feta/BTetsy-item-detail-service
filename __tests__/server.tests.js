/* eslint-disable no-undef */
const axios = require('axios');
// const getOne = require('./server/models.js');
// describe('server tests', () => {
test('a get request should return an object', async () => {
  const findOneObject = await axios.get('http://127.0.0.1:3000/');
  expect(typeof (findOneObject.data)).toEqual('object');
  expect(Array.isArray(findOneObject.data.productId)).toEqual(true);
});
// })
