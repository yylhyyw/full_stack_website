const user = require('./user');
const group = require('./Group');
const deal= require('./Deal');
const privilege = require('./privilege');
const product = require('./product');
const subscription = require('./subscription');
const inbound = require('./inbound');

module.exports = {
    group,
    user,
    deal,
    privilege,
    product,
    subscription,
    inbound,
};
