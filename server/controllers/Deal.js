const Deal = require('../models').deal;

//TODO
module.exports = {
  create: function(body, callback) {
    let deal_link = JSON.stringify(body.deallinks);
    body.deallinks = deal_link;
    Deal.create({
      deal_title: body.title,
      deal_link: body.deallinks,
      deal_warehouse: body.warehouse,
      deal_price: body.price,
      deal_quantity: body.quantity,
      deal_description: body.description,
      deal_creator: 'test'
    }).then(function(deal) {
      callback(deal);
    });
  },

  findTen: function(creator = null, callback) {
    if (creator) {
      Deal.findAll(
        { limit: 10 },
        {
          where: {
            deal_creator: creator
          }
        }
      ).then(function(deals) {
        callback(deals);
      });
    }
  }
};
