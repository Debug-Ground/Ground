var express = require('express');
var router = express.Router();
var meetingController = require('../controller/meetingController')

/* GET home page. */
router.get('/', meetingController.meeting);
  
module.exports = router;