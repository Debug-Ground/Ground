var express = require('express');
var router = express.Router();
var noticeController = require('../controller/noticeController')

/* GET home page. */
router.get('/write', noticeController.nwrite);
router.get('/detail/:num', noticeController.ndetail);
router.get('/:num', noticeController.notice);

module.exports = router;
