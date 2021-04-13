var express = require('express');
var router = express.Router();
var companyController = require('../controller/companyController')

/* GET home page. */
router.get('/', companyController.company);
  
module.exports = router;
