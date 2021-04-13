var express = require('express');
var router = express.Router();
var noticewriteController = require('../controller/notice_writeController')

/* GET home page. */
router.get('/', noticewriteController.nwrite);
  
module.exports = router;
