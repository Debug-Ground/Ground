var express = require('express');
var router = express.Router();
var questionController = require('../controller/questionController')

//insert Question
router.get('/write', questionController.qwrite);
router.post('/qinsertData',questionController.qinsertData);

//delete Question
router.post('/delete',questionController.qdelete);


//show QuestionDetail
router.get('/detail/:num', questionController.qdetail)
//update Question
router.get('/update/:num',questionController.qupdate)
router.post('/updateData', questionController.updateData)

//insert qadmin
router.get('/adminComment/:num',questionController.qadmin)
router.post('/updateAdminData', questionController.updateAdminData)

//show QuestionMain 
router.get('/:num', questionController.question);

module.exports = router;
