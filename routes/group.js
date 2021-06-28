var express = require('express');
var router = express.Router();
var groupController = require('../controller/groupController')

/* GET home page. */
router.get('/', groupController.Group);
router.get('/detail/:num',groupController.Group);

  
module.exports = router;