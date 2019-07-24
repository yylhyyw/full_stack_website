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

  create: function(body, reuslt, callback) {
    if(body) {
      Inbound.create({
        product: body.product,
        price: body.price,
        quantity: body.quantity,
        warehouse: body.warehouse,
        company: body.company,
        individual: body.individual,
        status: 0,
        companyStatus:body.companyStatus,
        propose: body.propose,
        proposeStatus: body.proposeStatus
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

  proposeRetrieve: function(creator, callback) {
    if (creator) {
      Inbound.findAll({
        where: {
          individual: creator,
          propose: 1
        },
        order: [['id', 'DESC']]
      }).then(function(records) {
        callback(records);
      });
    }
  },

  proposeRetrieveCompany: function(creator, callback) {
    if (creator) {
      Inbound.findAll({
        where: {
          company: creator,
          propose: 1
        },
        order: [['id', 'DESC']]
      }).then(function(records) {
        callback(records);
      });
    }
  },
};
