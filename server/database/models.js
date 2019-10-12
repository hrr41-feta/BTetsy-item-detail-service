const itemDetails = require('./index.js').itemDetails;
let fetch = callback => {
  let cb = (err, repos) => { callback(repos); };
  itemDetails.findOne(cb);
};

module.exports = {
  fetch
};
