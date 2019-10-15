const axios = require('axios');
// const getOne = require('./server/models.js');
test('a get request should return an object', async () => {
  let findOneObject = await axios.get('http://127.0.0.1:3000/');
  //console.log(blach);
  expect(typeof(findOneObject)).toEqual('object')
});




// describe('Sample Test', () => {
//   it('should test that true === true', () => {
//     expect(true).toBe(true);
//   });
// });
