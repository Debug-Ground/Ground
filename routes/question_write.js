var express = require('express');
var router = express.Router();
var questionwriteController = require('../controller/question_writeController')

/* GET home page. */
router.get('/', questionwriteController.qwrite);
  
module.exports = router;
