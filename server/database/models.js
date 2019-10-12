let fetch = (model, callback) => {
  let cb = (err, repos) => { callback(repos); };
  model.findOne(cb);
};

module.exports = {
  fetch
};
