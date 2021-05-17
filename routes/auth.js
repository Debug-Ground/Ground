var express = require('express');
var router = express.Router();
var authController = require('../controller/authController')

// sign in 
router.get('/signIn', authController.signIn);
router.post('/signIn', authController.checkUser);

// sign up
router.get('/signUp', authController.signUp);
router.post('/signUp', authController.getSignUp);
  
// logout
router.get('/logout', authController.logOut);

module.exports = router;