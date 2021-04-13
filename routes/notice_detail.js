var express = require('express');
var router = express.Router();
var noticedetailController = require('../controller/notice_detailController')

/* GET home page. */
router.get('/', noticedetailController.ndetail);
  
module.exports = router;