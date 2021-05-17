var express = require('express');
var router = express.Router();
var faqController = require('../controller/faqController')

/* GET home page. */
router.get('/', faqController.faq);
  
module.exports = router;
