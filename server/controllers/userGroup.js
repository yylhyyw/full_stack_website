const userGroup = require('../models').userGroups;

module.exports = {

  update:function(body, callback) {
    if (body) {
      userGroup.update({
        member: body.groupMember,
      }, {where : {id: body.groupId}}).then(function(result) {
        callback(result);
      });
    }
  },

  create: function(body, members, callback) {
    if (body) {
      userGroup.create({
        name: body.name,
        creator: body.creator,
        member: members,
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
