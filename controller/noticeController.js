var express = require('express');
var noticeDao = require('../model/noticeDao');
var dayjs =  require('dayjs');
const { data } = require('../config/logger');
var firebase = require("firebase/app");
FirebaseAuth = require('firebaseauth');
// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");
require("firebase/analytics")

function notice(req, res, next) {
  var parameter = {
    "searchText" : req.query.searchText
  }
  noticeDao.getNotice(parameter).then((db_data) => {
    res.render('notice', { db_data, n_num : req.params.num , max_value : 10, dayjs});
  }).catch(err=>res.send("<script>alert('err');</script>"));
}


function nwrite(req, res, next) {
  res.render('notice_write');
}

function nupdate(req, res, next) {
  var parameter = {
    "nid" : req.params.num
  }
  noticeDao.getNoticeDetail(parameter).then((db_data)=>{
    res.render('notice_update',{db_data});
  }).catch(err=>res.send("<script>alert('err');</script>"));
}

function insertData(req, res, next) {
  var parameters = {
    "ntitle" : req.body.title,
    "ncontent" : req.body.summernote,
    "ndate" : new dayjs().format("YYYY-MM-DD HH-mm-ss"),
    "nwriter" : req.body.writerx
  }
  noticeDao.insertNotice(parameters).then(
  (db_data) => {
      res.redirect("/notice/1")
    }).catch(err=>res.send("<script>alert('err');</script>"));
  }
  
  function updateData(req,res, next) {
    var parameters = {
      "ntitle" : req.body.title,
      "ncontent" : req.body.summernote,
      "ndate" : new dayjs().format("YYYY-MM-DD HH-mm-ss"),
      "nwriter" : req.body.writerx,
      "nid" : req.body.nidx
    }
    noticeDao.updateNotice(parameters).then((db_data) => {
      res.redirect('/notice/1')
    }).catch(err=>res.send("<script>alert('err');</script>"));
  }


function ndetail(req, res, next) {
  var parameters = {
    "nid" : req.params.num
   }
  noticeDao.getNoticeDetail(parameters).then((db_data) => {
    res.render('notice_detail', { db_data, n_num : req.params.num , max_value : 10, dayjs});
    }).catch(err=>res.send("<script>alert('err');</script>"));
  } 


function ndelete(req, res, next) {
  var parameters = {
    "nidx": req.body.nidx
  }
  noticeDao.deleteNotice(parameters).then((db_data) => {
    res.redirect('/notice/1');
  }).catch(err=>res.send("<script>alert('err');</script>")); 
}

module.exports = {
  notice,
  nwrite,
  ndetail,
  ndelete,
  nupdate,
  insertData,
  updateData
}