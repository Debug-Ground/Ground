var express = require('express');
var questionDao = require('../model/questionDao');
var dayjs =  require('dayjs');

function question(req, res, next) {
  var parameter = {
    "searchText" : req.query.searchText
  }
  questionDao.getQuestion(parameter).then((db_data) => {
        res.render('question/question', {db_data, q_num : req.params.num , max_value : 10, dayjs,username : req.session.wName});
      }).catch(err=>res.send("<script>alert('err');</script>")); 
  }

function qinsertData(req, res, next) {
  var parameters = {
    "qtitle" : req.body.title,
    "qcontent" : req.body.summernote,
    "qdate" : new dayjs().format("YYYY-MM-DD HH-mm-ss"),
    "qwriter" : req.session.wName
  }
  console.log(parameters.qwriter)
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
    "qwriter" : req.session.wName,
    "qidx" : req.body.qidx
  }
  console.log(req.session.wName)
  questionDao.updateQuestion(parameters).then((db_data) => {
    res.redirect('/question/1')
  }).catch(err=>res.send("<script>alert('err');</script>"));
}

function qwrite(req, res, next) {
  res.render('question/question_write',{username : req.session.wName});
}

function qupdate(req, res, next) {
  var parameters = {
    "qid" : req.params.num
  }
  questionDao.getQuestionDetail(parameters).then((db_data)=>{
   res.render('question/question_update',{db_data,username : req.session.wName});
  }).catch(err=>res.send("<script>alert('err');</script>"));
}
function qadmin(req, res, next) {
  var parameters = {
    "qid": req.params.num
  }
  questionDao.getQuestionDetail(parameters).then((db_data) => {
    res.render('question/question_admin', {db_data,dayjs,username : req.session.wName});
  }).catch(err=>res.send("<script>alert('err');</script>")); 
}

function qadminUpdate(req, res, next) {
  var parameters = {
    "qid": req.params.num
  }
  questionDao.getQuestionDetail(parameters).then((db_data) => {
    res.render('question/question_adminUpdate', {db_data,dayjs,username : req.session.wName});
  }).catch(err=>res.send("<script>alert('err');</script>")); 
}

function updateAdminData(req,res, next) {
  var parameters = {
    "adminComment" : req.body.summernote,
    "qid" : req.body.qidx
  }
  questionDao.updateQuestionAdmin(parameters).then((db_data) => {
    res.redirect('/question/1')
  }).catch(err=>res.send("<script>alert('err');</script>"));
}

function qdetail(req, res, next) {
  var parameters = {
    "qid": req.params.num
  }
  questionDao.getQuestionDetail(parameters).then((db_data) => {
        res.render('question/question_detail', {db_data,dayjs,username : req.session.wName});
      }
    ).catch(err=>res.send("<script>alert('err');</script>")); 
}

function qdelete(req, res, next) {
  var parameters = {
    "qidx": req.body.qidx
  }
  questionDao.deleteQuestion(parameters).then((db_data) => {
    res.redirect('/question/1')
    }).catch(err=>res.send("<script>alert('err');</script>")); 
  }



module.exports = {
    question,
    qwrite,
    qdelete,
    qdetail,
    qinsertData,
    updateData,
    qupdate,
    qadmin,
    qadminUpdate,
    updateAdminData
}