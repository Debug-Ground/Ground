var express = require('express');
var router = express.Router();
var manualController = require('../controller/manualController')

/* GET home page. */
router.get('/', manualController.manual);
router.post('/guide',manualController.postGuide);
router.get('/guide',manualController.getGuide);
module.exports = router;