const Group = require('../models').groups;

//TODO
module.exports = {
    group_details: function(group_id, callback){
        if(group_id){
            Group.findOne({
                where: {
                    id: group_id
                }
            }).then(function(group) {
                callback(group);
            });
        }
    }
}
