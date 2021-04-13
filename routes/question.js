var express = require('express');
var router = express.Router();
var questionController = require('../controller/questionController')

/* GET home page. */
router.get('/', questionController.question);
  
module.exports = router;
