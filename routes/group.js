var express = require('express');
var router = express.Router();
var groupController = require('../controller/groupController')

/* GET home page. */
router.get('/', groupController.Group);

router.get('/group_detail', groupController.GroupDetail);
  
module.exports = router;