var express = require('express');
var router = express.Router();

const userController = require('../controllers').user;
const groupController = require('../controllers').group;
const usersGroupsMappingController = require('../controllers')
  .users_groups_mapping;

// const user = new User();
// var sequelize = require("../models");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('index');
});

router.post('/signin', (req, res, next) => {
  userController.sign_in(req.body.email, req.body.password, function(result) {
    if (result) {
      usersGroupsMappingController.has_group(result.email, function(emails) {
        res.send(emails);
      });
    }else {
      res.send(result);
    }
  });
});

router.post('/register', (req, res, next) => {
  let userInput = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password
  };
  var is_createed = new Boolean(false);
  userController.create(userInput, function(first_name) {
    if (first_name) {
      is_created = true;
      res.send(is_created);
    } else {
      is_created = false;
      res.send(is_created);
    }
  });
});

module.exports = router;
