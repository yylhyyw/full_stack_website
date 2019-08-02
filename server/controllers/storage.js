const Storage = require('../models').storages;

//TODO
module.exports = {
  retrieve: function(body, callback) {
    if (body) {
      Storage.findAll({
        where: { creator: body.creator }
      }).then(function(result) {
        callback(result);
      });
    }
  },
  add: function(body, callback) {
    if (body) {
      Storage.create({
        address: body.address,
        creator: body.creator
      }).then(function(result) {
        callback(result);
      });
    }
  },

  count: function(body, callback) {
    if (body) {
      Storage.findAndCountAll({
        where: { creator: body.creator }
      }).then(function(result) {
        callback(result);
      });
    }
  }
};
