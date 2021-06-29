var express = require('express');
var groupDAO = require('../model/groupDao');


function Group(req, res, next) {
  groupDAO.getGroup().then((db_data) => {
    res.render('group', {db_data})
  }).catch(err=>res.send("<script>alert('err');</script>"));
}
 

function GroupDetail(req, res, next) {
    res.render('faq');
}
function GroupNotice(req, res, next) {
    res.render('faq');
}
function GroupQuestion(req, res, next) {
    res.render('faq');
}
module.exports = {
    Group,
    GroupDetail,
    GroupNotice,
    GroupQuestion
}