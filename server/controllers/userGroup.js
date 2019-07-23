const userGroup = require('../models').userGroups;

module.exports = {

  create: function(body, callback) {
    if (body) {
      userGroup.create({
        name: body.name,
        creator: body.creator,
        member: body.member,
      }).then(function(result) {
        callback(result);
      });
    }
  },

  delete: function(id, callback) {
    if(id){
      userGroup.destroy({
        where: {
        id: id}
      }).then(function(result) {
        callback(result);
      });
    }
  },

  retrieve: function(creator, callback) {
    if(creator) {
      userGroup.findAll({
        creator: creator
      }).then(function(result) {
        callback(result);
      });
    }
  }

};
