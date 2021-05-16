var express = require('express');
var noticeDao = require('../model/noticeDao');
var jwtmiddle = require('../middleware/jwt')
var dayjs =  require('dayjs')

function notice(req, res, next) {
  noticeDao.getNotice().then((db_data) => {
    let token = req.cookies.user;
    jwtmiddle.jwtCerti(token).then(
        (permission)=>{
            res.render(
              res.render('notice', { db_data, n_num : req.params.num , max_value : 10, dayjs, permission}));
        }).catch(err=>res.send("<script>alert('jwt err');</script>"));
  }).catch(err=>res.send("<script>alert('err');</script>"));
}
function nwrite(req, res, next) {
  res.render('notice_write');
}
function ndetail(req, res, next) {
  var parameter = {
    "nid" : req.params.num
  }
  noticeDao.getNoticeDetail(parameter).then((db_data) => {
    res.render('notice_detail', { db_data, n_num : req.params.num , max_value : 10, dayjs});
  }).catch(err=>res.send("<script>alert('err');</script>"));
}

module.exports = {
  notice,
  nwrite,
  ndetail
}