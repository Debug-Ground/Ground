var express = require('express');
var router = express.Router();
var questionController = require('../controller/questionController')

/* GET home page. */
router.get('/', questionController.question);
router.get('/write', questionController.qwrite);


module.exports = router;
