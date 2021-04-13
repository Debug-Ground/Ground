var express = require('express');
var router = express.Router();
var authController = require('../controller/authController')

/* GET home page. */
router.get('/signIn', authController.signIn);
router.get('/signUp', authController.signUp);
  
  
module.exports = router;