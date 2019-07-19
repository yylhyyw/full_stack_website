const Inbound = require('../models').inbounds;

module.exports = {
  getRecords: function(creator, callback) {
    if (creator) {
      Inbound.findAll({
        where: {
          individual: creator
        },
        order: [['id', 'DESC']]
      }).then(function(records) {
        callback(records);
      });
    }
  },

  confirm: function(id, callback) {
    if (id) {
      Inbound.update(
        { status: 1 },
        {
          where: {
            id: id
          }
        }
      ).then(function(result) {
        callback(result);
      });
    }
  },

  create: function(body, callback) {
    if(body) {
      Inbound.create({
        product: body.product,
        price: body.price,
        quantity: body.quantity,
        warehouse: body.warehouse,
        company: body.company,
        individual: body.individual,
        status: 0,
        companyStatus:body.companyStatus
      }).then(function(inbound) {
        callback(inbound);
      });
    }
  },

  getRecordsCompany: function(company, callback) {
    if (company) {
      Inbound.findAll({
        where: {
          company: company
        },
        order: [['id', 'DESC']]
      }).then(function(records) {
        callback(records);
      });
    }
  },
};
