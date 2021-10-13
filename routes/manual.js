var express = require('express');
var router = express.Router();
var manualController = require('../controller/manualController')

/* GET home page. */
router.get('/', manualController.manual);
router.post('/guide',manualController.postGuide);
router.get('/guide_fail',manualController.getGuideFail);
router.get('/guide_success',manualController.getGuideSuccess);
router.get('/guide_testing',manualController.getGuideTesting);

module.exports = router;