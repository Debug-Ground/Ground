var express = require('express');
var questionDao = require('../model/questionDao');
var jwtmiddle = require('../middleware/jwt');
var dayjs =  require('dayjs');

function question(req, res, next) {
  questionDao.getQuestion().then((db_data) => {
  let token = req.cookies.user;
  jwtmiddle.jwtCerti(token).then(
      (permission)=>{
        res.render('question', {db_data, q_num : req.params.num , max_value : 10, dayjs, permission});
      }).catch(err=>res.send("<script>alert('jwt err');</script>")); 
  }).catch(err=>res.send("<script>alert('err');</script>"));
}

function qinsertData(req, res, next) {
  let token = req.cookies.user;
  jwtmiddle.jwtCerti(token).then(
    (permission)=>{
  var parameters = {
    "qtitle" : req.body.title,
    "qcontent" : "문의사항 내용",
    "qdate" : new dayjs().format("YYYY-MM-DD HH-mm-ss"),
    "qwriter" : permission.user_name
  }
  questionDao.insertQuestion(parameters).then(
  (db_data) => {
      console.log(parameters.qwriter)
      res.redirect("/question/1")
    }).catch(err=>res.send("<script>alert('err');</script>"));
  }).catch(err=>res.send("<script>alert('jwt err');</script>"));
}
function qwrite(req, res, next) {
  let token = req.cookies.user;
  jwtmiddle.jwtCerti(token).then(
      (permission)=>{
        res.render('question_write', {permission});
      }
  ).catch(err=>res.send("<script>alert('jwt err');</script>")); 
}

function qdetail(req, res, next) {
  var parameters = {
    "qid": req.params.num
  }
  questionDao.getQuestionDetail(parameters).then((db_data) => {
    let token = req.cookies.user;
    jwtmiddle.jwtCerti(token).then(
      (permission)=>{
        res.render('question_detail', {permission,db_data});
      }
    ).catch(err=>res.send("<script>alert('jwt err');</script>")); 
  }).catch(err=>res.send("<script>alert('err');</script>"));
}

function qdelete(req, res, next) {
  var parameters = {
    "qidx": req.body.qidx
  }
  questionDao.deleteQuestion(parameters).then((db_data) => {
    let token = req.cookies.user;
    jwtmiddle.jwtCerti(token).then(
        (permission)=>{
          res.redirect('/question/1')
        }
    ).catch(err=>res.send("<script>alert('jwt err');</script>")); 
  }).catch(err=>res.send("<script>alert('err');</script>")); 
}



module.exports = {
    question,
    qwrite,
    qdelete,
    qdetail,
    qinsertData
}