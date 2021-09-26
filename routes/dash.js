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
router.get('/accident/:num', dashController.dash_accident);
router.get('/accident_add', dashController.dash_accident_add);
router.get('/accident_detail/:num', dashController.dash_accident_detail);
//cctv
router.get('/cctv',dashController.dash_cctv);
//manpower
router.get('/manpower/:num',dashController.dash_manpower);
router.get('/manpower_add',dashController.dash_manpower_add);
router.get('/manpower_detail/:num',dashController.dash_manpower_detail);

//notice
router.get('/notice/:num',dashController.dash_notice);
router.get('/noticeWrite',dashController.dash_notice_write);
router.post('/noticeInsert',dashController.dash_notice_insert);
router.get('/noticeDetail/:num',dashController.dash_notice_detail);
//timecare
router.get('/timecard/:num',dashController.dash_timecard);
//workchart
router.get('/work_chart/:num',dashController.dash_work);
router.get('/work_chart_add',dashController.dash_work_add);
router.get('/work_chart_detail/:num',dashController.dash_work_detail);
router.get('/worker_chart',dashController.dash_worker_chart);

router.post('/getWayWeather',dashController.getWayWeather);

router.get('/test',dashController.dash_test);
router.post('/test',dashController.dash_test_send);

router.post('/insertmaincheck',dashController.dash_insert_list);
router.get('/manpowerUpdate', dashController.dash_manpower_update);
module.exports = router;