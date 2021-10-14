var express = require('express');
var noticeDao = require('../model/noticeDao');
var dayjs =  require('dayjs');

function notice(req, res, next) {
  var parameter = {
    "searchText" : req.query.searchText
  }
  noticeDao.getNotice(parameter).then((db_data) => {
    res.render('notice/notice', { db_data, n_num : req.params.num , max_value : 10, dayjs,username : req.session.wName});
  }).catch(err=>res.send("<script>alert('err');</script>"));
}


function nwrite(req, res, next) {
  res.render('notice/notice_write',{username : req.session.wName});
}

function nupdate(req, res, next) {
  var parameter = {
    "nid" : req.params.num
  }
  noticeDao.getNoticeDetail(parameter).then((db_data)=>{
    res.render('notice/notice_update',{db_data,username : req.session.wName});
  }).catch(err=>res.send("<script>alert('err');</script>"));
}

function insertData(req, res, next) {
  var parameters = {
    "ntitle" : req.body.title,
    "ncontent" : req.body.summernote,
    "ndate" : new dayjs().format("YYYY-MM-DD HH-mm-ss"),
    "nwriter" : req.session.wName
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
      "nwriter" : req.session.wName,
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
    res.render('notice/notice_detail', { db_data, n_num : req.params.num , max_value : 10, dayjs,username : req.session.wName});
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



//-------------------android 


function androidNotice(req, res, next) {
  noticeDao.androidNotice().then((db_data) => {
    var data = {
      message : "응답상태 성공였습니다",
      result : db_data
    }
    var jtest = JSON.stringify(data)
    var jsonOb = JSON.parse(jtest)

    console.log(jsonOb)
    res.json(jsonOb)
  }).catch(err=>res.send("<script>alert('err');</script>"));
}

function androidResult(req, res, next) {
  var parameters = {
    "ntitle" : req.body.ntitle,
    "ncontent" : req.body.ncontent,
    "ndate" : new dayjs().format("YYYY-MM-DD HH-mm-ss"),
    "nwriter" : req.session.wName
  }
  noticeDao.insertNotice(parameters).then((db_data) => {
    console.log(parameters);
    res.send('{"result":"ok"}')  
    }).catch(err=>res.send("<script>alert('err');</script>"));
  }

module.exports = {
  notice,
  nwrite,
  ndetail,
  ndelete,
  nupdate,
  insertData,
  updateData,
  androidNotice,
  androidResult
}