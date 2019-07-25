var express = require('express');
var router = express.Router();

const dealController = require('../controllers').deal;
const userController = require('../controllers').user;
const PrivilegeController = require('../controllers').privilege;
const ProductController = require('../controllers').product;
const subscriptionController = require('../controllers').subscription;
const inboundController = require('../controllers').inbound;
const userGroupController = require('../controllers').userGroup;

// const user = new User();
// var sequelize = require("../models");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('index');
});

/*check if user is existed.
  check the user's privilege.
  return user's email and its privilege.*/

router.post('/signin', (req, res, next) => {
  const body = req.body;
  const returnValue = [];
  userController.sign_in(req.body.email, req.body.password, function(result) {
    if (result) {
      returnValue[0] = result.email;
      returnValue[1] = 'secret';
      //user is existed check privilege
      PrivilegeController.find(result.id, function(result) {
        if (result) {
          //privilege existed add company to the return value.
          returnValue[2] = 'company';
          res.status(201).send(returnValue);
        } else {
          //otherwise add individual to the return value.
          returnValue[2] = 'individual';
          res.status(201).send(returnValue);
        }
      });
    } else {
      res.status(401).json('Email and Password is not found!');
    }
  });
});

router.post('/register', (req, res, next) => {
  let userInput = {
    username: req.body.username,
    phone: req.body.phone,
    email: req.body.email,
    password: req.body.password
  };
  userController.create(userInput, function(user) {
    if (user) {
      res.status(201).json(user.email);
    } else {
      res.status(409).end();
    }
  });
});
router.post('/createdeal', (req, res, next) => {
  dealController.create(req.body, function(deal) {
    if (deal) {
      res.status(201).json(deal);
    } else {
      res.status(409).end();
    }
  });
});

router.post('/deal/individualFind', (req, res, next) => {
  dealController.individualFind(req.body.creator, req.body.individual, function(result) {
    if(result){
      res.status(201).send(result);
    } else{
      res.status(409).end();
    }
  })
})
router.post('/deal/active/firstTen', (req, res, next) => {
  dealController.findTen(req.body.creator, function(deals) {
    if (deals) {
      res.status(201).send(deals);
    } else {
      res.status(409).end();
    }
  });
});

router.post('/deal/update', (req, res, next) => {
  dealController.update(req.body, function(deal) {
    if (deal) {
      res.status(201).send(deal);
    } else {
      res.status(409).end();
    }
  });
});

router.post('/deal/expiredDeal', (req, res, next) => {
  dealController.expiredRetrieve(req.body.creator, function(deals) {
    if (deals) {
      res.status(201).send(deals);
    } else {
      res.status(409).end();
    }
  });
});
/**
 * product api
 */
// product add api:
router.post('/product/add', (req, res, next) => {
  ProductController.create(req.body, function(product) {
    if (product) {
      res.status(201).json(product.name);
    } else {
      res.status(409).end();
    }
  });
});

// product browsing api first ten:
router.post('/product/findten', (req, res, next) => {
  ProductController.findTen(req.body.creator, function(products) {
    if (products) {
      res.status(201).send(products);
    } else {
      res.status(409).end();
    }
  });
});

// product browsing:
router.post('/product/find', (req, res, next) => {
  ProductController.findAll(req.body.creator, function(products) {
    if (products) {
      res.status(201).send(products);
    } else {
      res.status(409).end();
    }
  });
});

// product nameId:

router.post('/product/nameid', (req, res, next) => {
  ProductController.findNameId(req.body.creator, function(nameids) {
    if (nameids) {
      res.status(201).send(nameids);
    } else {
      res.status(409).end();
    }
  });
});

/**
 *
 * subscription api middleware
 */

router.post('/subscription/find', (req, res, next) => {
  subscriptionController.findSubscriptions(req.body.company, function(
    subscribers
  ) {
    if (subscribers) {
      res.status(201).send(subscribers);
    } else {
      res.status(409).end();
    }
  });
});

router.post('/subscription/setactive', (req, res, next) => {
  subscriptionController.setActive(req.body, function(subscription) {
    if (subscription) {
      res.status(201).send(subscription);
    } else {
      res.status(409);
    }
  });
});

router.post('/subscription/setblock', (req, res, next) => {
  subscriptionController.setBlock(req.body, function(result) {
    if (result) {
      res.status(201).send(result);
    } else {
      res.status(409);
    }
  });
});

router.post('/subscription/approve', (req, res, next) => {
  subscriptionController.approve(req.body, function(result) {
    if (result) {
      res.status(201).send(result);
    } else {
      res.status(409);
    }
  });
});

router.post('/subscription/findTen', (req, res, next) => {
  subscriptionController.findSubscriptionsTen(req.body.company, function(
    subscribers
  ) {
    if (subscribers) {
      res.status(201).send(subscribers);
    } else {
      res.status(409).end();
    }
  });
});

router.post('/subscription/findTenBlocked', (req, res, next) => {
  subscriptionController.findSubscriptionsTenBlocked(req.body.company, function(
    subscribers
  ) {
    if (subscribers) {
      res.status(201).send(subscribers);
    } else {
      res.status(409).end();
    }
  });
});

router.post('/subscription/findTenWaiting', (req, res, next) => {
  subscriptionController.findSubscriptionsTenWaiting(req.body.company, function(
    subscribers
  ) {
    if (subscribers) {
      res.status(201).send(subscribers);
    } else {
      res.status(409).end();
    }
  });
});

// TODO: API return json for user view deals with its following.
router.post('/subscription/findfollowing', (req, res, next) => {
  subscriptionController.findfollowing(req.body.individual, function(companys) {
    if (companys) {
      res.status(201).send(companys);
    } else {
      res.status(409).end();
    }
  });
});

router.post('/subscription/check', (req, res, next) => {
  subscriptionController.check(req.body, function(result) {
    if (result) {
      res.status(201).send(result);
    } else {
      res.status(201).send(null);
    }
  });
});

router.post('/subscription/create', (req, res, next) => {
  subscriptionController.create(req.body, function(result) {
    if (result) {
      res.status(201).send(result);
    } else {
      res.status(409).end();
    }
  });
});
/**
 * inbound api post get
 */
router.post('/inbound/createPropose', (req, res, next) => {
  inboundController.create(req.body, null, function(results){
    if(results){
      res.status(201).send(results);
    }else{
      res.status(409).end();
    }
  });
});

router.post('/inbound/proposeConfirm', (req, res, next) => {
  inboundController.proposeConfirm(req.body, function(results) {
    if(results){
      res.status(201).send(results);
    } else {
      res.status(409).end();
    }
  })
})


 router.post('/inbound/proposeRetrieveCompany', (req, res, next) => {
  inboundController.proposeRetrieveCompany(req.body.company, function(records) {
    if(records){
      res.status(201).send(records);
    }else{
      res.status(409).end();
    }
  });
});

 router.post('/inbound/proposeRetrieve', (req, res, next) => {
  inboundController.proposeRetrieve(req.body.individual, function(records) {
    if (records) {
      res.status(201).send(records);
    } else {
      res.status(409).end();
    }
  });
});
router.post('/inbound/individualFind', (req, res, next) => {
  inboundController.getRecords(req.body.individual, function(records) {
    if (records) {
      res.status(201).send(records);
    } else {
      res.status(409).end();
    }
  });
});

router.post('/inbound/confirm', (req, res, next) => {
  inboundController.confirm(req.body.id, function(result) {
    if (result) {
      res.status(201).send(result);
    } else {
      res.status(409).end();
    }
  });
});

router.post('/inbound/add', (req, res, next) => {
  dealController.individualTaken(req.body.dealId, req.body.quantity, function(
    result
  ) {
    if (result) {
      inboundController.create(req.body, result, function(inbound) {
        if (inbound) {
          res.status(201).send(result);
        } else {
          res.status(409).end();
        }
      });
    } else {
      res.status(409).end();
    }
  });
});

router.post('/inbound/companyFind', (req, res, next) => {
  inboundController.getRecordsCompany(req.body.company, function(records) {
    if (records) {
      res.status(201).send(records);
    } else {
      res.status(409).end();
    }
  });
});

/**
 * user Group retrieve, create, delete.
 */

router.post('/group/create', (req, res, next) => {
  userGroupController.create(req.body, function(result) {
    if (result) {
      res.status(201).send(result);
    } else {
      res.status(409).end();
    }
  });
});

router.post('/group/retrieve', (req, res, next) => {
  console.log('got called');
  userGroupController.retrieve(req.body.creator, function(result) {
    if (result) {
      res.status(201).send(result);
    } else {
      res.status(409).end();
    }
  });
});

router.post('/group/delete', (req, res, next) => {
  userGroupController.delete(req.body.id, function(result) {
    if (result) {
      res.status(201).json('deleted');
    } else {
      res.status(201).send(null);
    }
  });
});

module.exports = router;
