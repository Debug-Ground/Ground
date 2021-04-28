var express = require('express');
var noticeDao = require('../model/noticeDao');
var dayjs =  require('dayjs')

function notice(req, res, next) {
  noticeDao.getNotice().then((db_data) => {
    res.render('notice', { db_data, n_num : req.params.num , max_value : 10, dayjs});
  }).catch(err=>res.send("<script>alert('err');</script>"));
}
function nwrite(req, res, next) {
  res.render('notice_write');
}
function ndetail(req, res, next) {
  res.render('notice_detail');
}

module.exports = {
  notice,
  nwrite,
  ndetail
}