const Deal = require('../models').deals;
const Product = require('../models').products;
const Sequelize = require('sequelize');
//TODO
module.exports = {
  create: function(body, callback) {
    let deal_link = JSON.stringify(body.deallinks);
    body.deallinks = deal_link;
    console.log(body);
    Deal.create({
      products: body.products,
      product_name: body.productName,
      price: body.price,
      quantity: body.quantity,
      expires_at: body.expiresAt,
      note: body.note,
      service: body.serviceTag,
      public: body.dealPublic,
      notify: body.notify,
      creator: body.creator
    }).then(function(deal) {
      callback(deal);
    });
  },

  findTen: function(creator = null, callback) {
    if (creator) {
      Deal.findAll({
        // include: [{ model: Product }],
        limit: 10,
        where: {
          creator: creator
        },
        order: [['id', 'DESC']]
      }).then(function(deals) {
        callback(deals);
      });
    }
  },

  individualTaken: function(id, quantity, callback) {
    if (id) {
      Deal.decrement(['quantity'], {
        by: quantity,
        where: { id: id }
      }).then(function(result) {
        Deal.increment(['quantityTaken'], {
          by: quantity,
          where: { id: id }
        }).then(function(result) {
          Deal.findByPk(id).then(function(product) {
            callback(product);
          });
        });
      });
    }
  },

  update: function(deal, callback) {
    if (deal) {
      Deal.update(
        { quantity: deal.quantity, price: deal.price },
        {
          where: {
            id: deal.id
          }
        }
      ).then(function(result) {
        Deal.findByPk(deal.id).then(function(product) {
          callback(product);
        });
      });
    }
  }
};
