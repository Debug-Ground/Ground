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
        res.render('question_detail', {permission});
      }
    ).catch(err=>res.send("<script>alert('jwt err');</script>")); 
  }).catch(err=>res.send("<script>alert('err');</script>"));
}


module.exports = {
    question,
    qwrite,
    qdetail
}