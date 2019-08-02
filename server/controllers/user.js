const User = require('../models').users;
const bcrypt = require('bcrypt');
const Sequelize = require('sequelize');

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

  findActivated: function(email = null, callback) {
    if (email) {
      User.findOne({
        where: {
          email: email,
          status: 1
        }
      }).then(function(user) {
        callback(user);
      });
    }
  },

  activate: function(username, callback) {
    User.update(
      {
        status: true
      },
      {
        where: {
          username: username
        }
      }
    ).then(function(result) {
      callback(result);
    });
  },
  create: function(body, callback) {
    let pwd = body.password;
    body.password = bcrypt.hashSync(pwd, 10);

    User.create({
      username: body.username,
      phone: body.phone,
      email: body.email,
      password: body.password,
      status: false
    })
      .then(function(user) {
        callback(null, user);
      })
      .catch(function(err) {
        callback('error', err);
      });
  },

  sign_in: function(email, password, callback) {
    this.findActivated(email, function(result) {
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
