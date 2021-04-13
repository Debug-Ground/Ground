var express = require('express');
var router = express.Router();
var noticeController = require('../controller/noticeController')

/* GET home page. */
router.get('/', noticeController.notice);

module.exports = router;
