var express = require('express');
var questionDao = require('../model/questionDao');
var dayjs =  require('dayjs');

function question(req, res, next) {
  questionDao.getQuestion().then((db_data) => {
        res.render('question', {db_data, q_num : req.params.num , max_value : 10, dayjs});
      }).catch(err=>res.send("<script>alert('jwt err');</script>")); 
  }

function qinsertData(req, res, next) {
  var parameters = {
    "qtitle" : req.body.title,
    "qcontent" : req.body.summernote,
    "qdate" : new dayjs().format("YYYY-MM-DD HH-mm-ss"),
    "qwriter" : req.body.writerx
  }
  questionDao.insertQuestion(parameters).then(
  (db_data) => {
    console.log(req.body.summernote)
      res.redirect("/question/1")
    }).catch(err=>res.send("<script>alert('err');</script>"));
}
function updateData(req,res, next) {
  var parameters = {
    "qtitle" : req.body.title,
    "qcontent" : req.body.summernote,
    "qdate" : new dayjs().format("YYYY-MM-DD HH-mm-ss"),
    "qwriter" : req.body.writerx,
    "qidx" : req.body.qidx
  }
  questionDao.updateQuestion(parameters).then((db_data) => {
    res.redirect('/question/1')
  }).catch(err=>res.send("<script>alert('err');</script>"));
}

function qwrite(req, res, next) {
        res.render('question_write');
}

function qupdate(req, res, next) {
  var parameters = {
    "qid" : req.params.num
  }
  questionDao.getQuestionDetail(parameters).then((db_data)=>{
   res.render('question_update',{db_data});
  }).catch(err=>res.send("<script>alert('err');</script>"));
}

function qdetail(req, res, next) {
  var parameters = {
    "qid": req.params.num
  }
  questionDao.getQuestionDetail(parameters).then((db_data) => {
        res.render('question_detail', {db_data,dayjs});
      }
    ).catch(err=>res.send("<script>alert('jwt err');</script>")); 
}

function qdelete(req, res, next) {
  var parameters = {
    "qidx": req.body.qidx
  }
  questionDao.deleteQuestion(parameters).then((db_data) => {
    res.redirect('/question/1')
    }).catch(err=>res.send("<script>alert('jwt err');</script>")); 
  }



module.exports = {
    question,
    qwrite,
    qdelete,
    qdetail,
    qinsertData,
    updateData,
    qupdate
}