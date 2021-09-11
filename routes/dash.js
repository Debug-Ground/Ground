var express = require('express');
var router = express.Router();
var dashController = require('../controller/dashController')

/* GET home page. */
router.get('/', dashController.dash_main);

//checklist select insert delete
router.get('/checklist', dashController.dash_checklist);
router.post('/insertCheck', dashController.dash_checklistInsert);
router.delete('/deleteCheck',dashController.dash_checklistDelete);
router.post('/updateUserCheck',dashController.dash_userchecklistUpdate);

//accideent
router.get('/accident', dashController.dash_accident);
router.get('/cctv',dashController.dash_cctv);
router.get('/manpower',dashController.dash_manpower);
router.get('/manpower_add',dashController.dash_manpower_add);
router.get('/manpower_detail',dashController.dash_manpower_detail);
router.get('/notice',dashController.dash_notice);
router.get('/notice_write',dashController.dash_notice_write);
router.get('/notice_detail',dashController.dash_notice_detail);
router.get('/timecard',dashController.dash_timecard);
router.get('/work_chart',dashController.dash_work);
router.get('/work_chart_add',dashController.dash_work_add);
router.get('/worker_chart',dashController.dash_worker_chart);

module.exports = router;