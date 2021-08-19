var express = require('express');
var router = express.Router();
var dashController = require('../controller/dashController')

/* GET home page. */
router.get('/', dashController.dash_main);
  
module.exports = router;