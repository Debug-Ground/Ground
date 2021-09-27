var express = require('express');
var router = express.Router();
var manualController = require('../controller/manualController')

/* GET home page. */
router.get('/', manualController.manual);
router.get('/guide',manualController.guide);
module.exports = router;