var express = require('express');
var router = express.Router();
var groupController = require('../controller/groupController')

/* GET home page. */
router.get('/', groupController.Group);
  
module.exports = router;