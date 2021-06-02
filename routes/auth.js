var express = require('express');
var router = express.Router();
var authController = require('../controller/authController')

// sign in 
router.get('/signIn', authController.signIn);
router.post('/signIn', authController.checkUser);

// sign up
router.get('/signUp', authController.signUp);
router.post('/signUp', authController.getSignUp);
  
// findid
router.get('/findId',authController.findId)
// findPw
router.get('/findPw',authController.findPw)
// logout
router.get('/logout', authController.logOut);

module.exports = router;