const Users_groups_mapping = require('../models').users_groups_mapping;

//TODO
module.exports = {
    has_group: function(email, callback){
        if(email){
          Users_groups_mapping.findAll({
                where: {
                    user_email: email
                }
            }).then(function(emails) {
                callback(emails);
            });
        }
    }
}
