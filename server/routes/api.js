var express = require('express');
var router = express.Router();

const userController = require('../controllers').user;
const groupController = require('../controllers').group;
const usersGroupsMappingController = require('../controllers').users_groups_mapping;

// const user = new User();
// var sequelize = require("../models");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/register', function(req, res, next) {
  res.render('register');
});

router.post('/signin', (req, res, next) => {
  var group_name = 'Group';
  var group_desc = "you don't have any group";
  userController.sign_in(req.body.email, req.body.password, function(result) {
    if (result) {
      // console.log(result.first_name);
      // userController.has_group(result.email, function(group_id) {
      //   groupController.group_details(group_id, function(group) {
      //     group_name = group.group_name;
      //     group_desc = group.group_desc;
      //     console.log(group_name);
      //     res.render('main-page', {
      //       user_welcome_name: 'Hello ' + result.first_name + ', ',
      //       group_name: group_name,
      //       group_desc: group_desc
      //     });
      //   });
      // });
      usersGroupsMappingController.has_group(req.body.email, function(emails){

      });
    } else {
      res.send('Email/Password incorrect!');
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

  userController.create(userInput, function(first_name) {
    if (first_name) {
      res.send('Welcome ' + first_name);
    } else {
      res.send('Unable to create account');
    }
  });
});

module.exports = router;
