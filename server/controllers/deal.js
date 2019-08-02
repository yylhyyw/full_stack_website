const Deal = require('../models').deals;
const Product = require('../models').products;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
//TODO
module.exports = {
  create: function(body, callback) {
    let deal_link = JSON.stringify(body.deallinks);
    body.deallinks = deal_link;
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
      creator: body.creator,
      members: body.members,
      bonus: body.bonus
    }).then(function(deal) {
      callback(deal);
    });
  },

  findTen: function(creator = null, callback) {
    if (creator) {
      Deal.findAll({
        // include: [{ model: Product }],
        where: {
          creator: creator,
          expires_at: {
            [Op.gte]: new Date()
          },
          quantity: {
            [Op.gt]: 0
          }
        },
        order: [['id', 'DESC']]
      }).then(function(deals) {
        callback(deals);
      });
    }
  },

  expiredRetrieve: function(creator = null, callback) {
    if (creator) {
      Deal.findAll({
        // include: [{ model: Product }],
        limit: 10,
        where: {
          creator: creator,
          [Op.or]: [
            {
              expires_at: {
                [Op.lte]: new Date()
              }
            },
            {
              quantity: {
                [Op.lte]: 0
              }
            }
          ]
        },
        order: [['id', 'DESC']]
      }).then(function(deals) {
        callback(deals);
      });
    }
  },
  individualReturn: function(id, quantity, callback) {
    if (id) {
      Deal.increment(['quantity'], {
        by: quantity,
        where: { id: id }
      }).then(function(result) {
        Deal.decrement(['quantityTaken'], {
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
  giveBackQty: function(body, callback) {
    if (body) {
      Deal.decrement(['quantityTaken'], {
        by: body.quantity,
        where: { id: body.dealId }
      }).then(function(res) {
        Deal.increment(['quantity'], {
          by: body.quantity,
          where: { id: body.dealId }
        }).then(function(result) {
          callback(result);
        });
      });
    }
  },
  update: function(deal, callback) {
    if (deal) {
      Deal.update(
        {
          quantity: deal.quantity,
          price: deal.price,
          expires_at: deal.expiresAt,
          note: deal.note,
          service_tag: deal.serviceTag,
          public: deal.dealPublic,
          notify: deal.notify,
          members: deal.members
        },
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
  },

  individualFind: function(creator = null, individual, callback) {
    if (creator) {
      Deal.findAll({
        // include: [{ model: Product }],
        where: {
          creator: creator,
          expires_at: {
            [Op.gte]: new Date()
          },
          members: {
            [Op.like]: '%' + individual + '%'
          },
          quantity: {
            [Op.gt]: 0
          }
        },
        order: [['id', 'DESC']]
      }).then(function(deals) {
        callback(deals);
      });
    }
  }
};
