const Product = require('../models').products;
//TODO
module.exports = {
  create: function(body, callback) {
    Product.create({
      name: body.name,
      product_condition: body.condition,
      msrp: body.msrp,
      asin: body.asin,
      upc: body.upc,
      weight: body.weight,
      note: body.note,
      creator: body.creator
    }).then(function(product) {
      callback(product);
    });
  },

  findTen: function(creator = null, callback) {
    if (creator) {
      Product.findAll({
        limit: 10,
        where: {
          creator: creator
        },
        order: [['id', 'DESC']]
      }).then(function(products) {
        callback(products);
      });
    }
  },
  findAll: function(creator = null, callback) {
    if (creator) {
      Product.findAll({
        where: {
          creator: creator
        },
        order: [['id', 'DESC']]
      }).then(function(products) {
        callback(products);
      });
    }
  },

  findNameId: function(creator=null, callback) {
    if(creator) {
      Product.findAll({
        attributes: ['id', 'name'],
        where: {
          creator: creator
        },
        order: [['id', 'DESC']]
      }).then(function(nameids) {
        callback(nameids);
      });
    }
  },
  findProductName: function(id, callback) {
    if (id) {
      Product.findAll({
        attributes: ['name'],
        where: {
          id: id
        }
      }).then(function(productName) {
        callback(productName);
      });
    }
  }
};
