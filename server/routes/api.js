var express = require('express');
var router = express.Router();

const dealController = require('../controllers').deal;
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
    } else {
      res.status(404).json('Email and Password is not found!');
    }
  });
});

router.post('/register', (req, res, next) => {
  let userInput = {
    first_name: req.body.FirstName,
    last_name: req.body.LastName,
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

module.exports = router;
