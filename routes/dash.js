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
router.get('/accident_add', dashController.dash_accident_add);
router.get('/accident_detail', dashController.dash_accident_detail);
router.get('/cctv',dashController.dash_cctv);
router.get('/manpower',dashController.dash_manpower);
router.get('/manpower_add',dashController.dash_manpower_add);
router.get('/manpower_detail',dashController.dash_manpower_detail);
router.get('/notice/:num',dashController.dash_notice);
router.get('/noticeWrite',dashController.dash_notice_write);
router.post('/noticeInsert',dashController.dash_notice_insert);
router.get('/noticeDetail/:num',dashController.dash_notice_detail);
router.get('/timecard',dashController.dash_timecard);
router.get('/work_chart/:num',dashController.dash_work);
router.get('/work_chart_add',dashController.dash_work_add);
router.get('/work_chart_detail',dashController.dash_work_detail);
router.get('/worker_chart',dashController.dash_worker_chart);
router.post('/getWayWeather',dashController.getWayWeather);


router.get('/manpowerUpdate', dashController.dash_manpower_update);
module.exports = router;