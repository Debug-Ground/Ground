var express = require('express');
var router = express.Router();
var questionController = require('../controller/questionController')

//insert Question
router.get('/write', questionController.qwrite);
router.post('/qinsertData',questionController.qinsertData);

//delete Question
router.post('/delete',questionController.qdelete);

//show QuestionMain 
router.get('/:num', questionController.question);

//show QuestionDetail
router.get('/detail/:num', questionController.qdetail)



module.exports = router;
