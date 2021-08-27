var express = require('express');
var passport = require('passport');
var KakaoStrategy = require('passport-kakao').Strategy;
var router = express.Router();
var indexController = require('../controller/indexController')


router.use('/auth', require('./auth')); //auth.js 연결

/* GET home page. */
router.get('/', indexController.indexmain);

module.exports = router;
