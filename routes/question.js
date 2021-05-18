var express = require('express');
var router = express.Router();
var questionController = require('../controller/questionController')

/* GET home page. */
router.get('/write', questionController.qwrite);
router.get('/:num', questionController.question);
router.get('/detail/:num', questionController.qdetail)


module.exports = router;
