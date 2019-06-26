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
      first_name: body.first_name,
      last_name: body.last_name,
      email: body.email,
      password: body.password
    }).then(function(user) {
      callback(user);
    });
  },

  sign_in: function(email, password, callback) {
    this.find(email, function(result) {
      if (result) {
        // console.log(password);
        // console.log(result.password);
        if (bcrypt.compareSync(password, result.password)) {
          callback(result);
          return;
        }
      }
      callback(null);
    });
  },

  has_group: function(email, callback) {
    this.find(email, function(result) {
      if (result.group_id) {
        callback(result.group_id);
        return;
      }
      callback(null);
    });
  }
};

// module.exports = User;

// var sign_in_hander = fcuntion(req, res){
//     var email = req.body.email || undefined;
//     var password = req.body.password || undefined;
//
//
//     // if(email && password){
//     //     var md5 = crypto.createHash('md5');
//     //     md5.update(password);
//     //     var password_code = md5.digest('hex').substr(0,16);
//     //
//     //     Use.findOne({
//     //         where: {
//     //             email: email,
//     //             password: password_code
//     //         }
//     //     }).then(function(user){
//     //         if(user){
//     //             var sid = uuid.v1()
//     //         }
//     //     })
//     // }
//
//
//
// }
