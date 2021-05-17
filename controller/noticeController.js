var express = require('express');
var noticeDao = require('../model/noticeDao');
var jwtmiddle = require('../middleware/jwt')
var dayjs =  require('dayjs');
const { NetworkAuthenticationRequire } = require('http-errors');

function notice(req, res, next) {
  noticeDao.getNotice().then((db_data) => {
    let token = req.cookies.user;
    jwtmiddle.jwtCerti(token).then(
        (permission)=>{
            res.render('notice', { db_data, n_num : req.params.num , max_value : 10, dayjs, permission});
        }).catch(err=>res.send("<script>alert('jwt err');</script>"));
  }).catch(err=>res.send("<script>alert('err');</script>"));
}

function nwrite(req, res, next) {
    let token = req.cookies.user;
    jwtmiddle.jwtCerti(token).then(
        (permission)=>{
            res.render('notice_write', {permission});
        }).catch(err=>res.send("<script>alert('jwt err');</script>"));
  }

function insertData(req, res, next) {
  let token = req.cookies.user;
  jwtmiddle.jwtCerti(token).then(
    (permission)=>{
  var parameters = {
    "ntitle" : req.body.title,
    "ncontent" : "내용",
    "ndate" : new dayjs().format("YYYY-MM-DD HH-mm-ss"),
    "nwriter" : permission.user_name
  }
  noticeDao.insertNotice(parameters).then(
  (db_data) => {
      console.log(parameters.nwriter)
      res.redirect("/notice/1")
    }).catch(err=>res.send("<script>alert('err');</script>"));
  }).catch(err=>res.send("<script>alert('jwt err');</script>"));
}

function ndetail(req, res, next) {
  var parameters = {
    "nid" : req.params.num
  }
  noticeDao.getNoticeDetail(parameters).then((db_data) => {let token = req.cookies.user;
    jwtmiddle.jwtCerti(token).then(
      (permission)=>{
        res.render('notice_detail', { db_data, n_num : req.params.num , max_value : 10, dayjs, permission});
      }).catch(err=>res.send("<script>alert('jwt err');</script>"));
    }).catch(err=>res.send("<script>alert('err');</script>"));
}

module.exports = {
  notice,
  nwrite,
  ndetail,
  insertData
}