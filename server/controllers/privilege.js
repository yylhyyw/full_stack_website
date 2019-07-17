const Privilege = require('../models').privilege;

module.exports = {
  find: function(id = null, callback) {
    if (id) {
      Privilege.findOne({
        where: {
          id: id
        }
      }).then(function(user) {
        callback(user);
      });
    }
  }
};
