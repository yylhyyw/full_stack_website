const User = require('../models').users;
const bcrypt = require('bcrypt');

module.exports = {
  find: function(email = null, callback) {
    if (email) {
      User.findOne({
        where: {
          email: email
        }
      }).then(function(user) {
        callback(user);
      });
    }
  },

  create: function(body, callback) {
    let pwd = body.password;
    body.password = bcrypt.hashSync(pwd, 10);

    User.create({
      username: body.username,
      phone: body.phone,
      email: body.email,
      password: body.password
    }).then(function(user) {
      callback(user);
    });
  },

  sign_in: function(email, password, callback) {
    this.find(email, function(result) {
      if (result) {
        if (bcrypt.compareSync(password, result.password)) {
          callback(result);
          return;
        }
      }
      callback(null);
    });
  }
};
