var express = require('express');
var router = express.Router();
var dashController = require('../controller/dashController')

/* GET home page. */
router.get('/', dashController.dash_main);
router.get('/checklist', dashController.dash_checklist);
router.post('/insertCheck', dashController.dash_checklistInsert);
router.delete('/deleteCheck',dashController.dash_checklistDelete);

module.exports = router;