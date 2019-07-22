const Subscription = require('../models').subscriptions;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
//TODO
module.exports = {
  findSubscriptions: function(company, callback) {
    if (company) {
      Subscription.findAll({
        where: {
          company: company
        }
      }).then(function(subscribers) {
        callback(subscribers);
      });
    }
  },

  setActive: function(body, callback) {
    if (body) {
      Subscription.update(
        { status: 1 },
        {
          where: {
            company: body.company,
            individual: body.individual
          }
        }
      ).then(function(result) {
        Subscription.findOne({
          where: { company: body.company, individual: body.individual }
        }).then(function(result) {
          callback(result);
        });
      });
    }
  },

  setBlock: function(body, callback) {
    if (body) {
      Subscription.update(
        { status: 2 },
        {
          where: {
            company: body.company,
            individual: body.individual
          }
        }
      ).then(function(result) {
        Subscription.findOne({
          where: { company: body.company, individual: body.individual }
        }).then(function(result) {
          callback(result);
        });
      });
    }
  },

  approve: function(body, callback) {
    if (body) {
      Subscription.update(
        { status: 1 },
        {
          where: {
            company: body.company,
            individual: body.individual
          }
        }
      ).then(function(result) {
        callback(result);
      });
    }
  },

  findSubscriptionsTen: function(company, callback) {
    if (company) {
      Subscription.findAll({
        limit: 10,
        where: {
          company: company,
          status: { [Op.ne]: 2 }
        }
      }).then(function(subscribers) {
        callback(subscribers);
      });
    }
  },

  findSubscriptionsTenBlocked: function(company, callback) {
    if (company) {
      Subscription.findAll({
        limit: 10,
        where: {
          company: company,
          status: { [Op.eq]: 2 }
        }
      }).then(function(subscribers) {
        callback(subscribers);
      });
    }
  },
  findSubscriptionsTenWaiting: function(company, callback) {
    if (company) {
      Subscription.findAll({
        limit: 10,
        where: {
          company: company,
          status: { [Op.eq]: 0 }
        }
      }).then(function(subscribers) {
        callback(subscribers);
      });
    }
  },

  findfollowing: function(individual, callback) {
    if (individual) {
      Subscription.findAll({
        attributes: [
          [Sequelize.fn('DISTINCT', Sequelize.col('company')), 'company']
        ],
        where: {
          individual: individual
        }
        // plain: true
      }).then(function(companies) {
        callback(companies);
      });
    }
  }
};
