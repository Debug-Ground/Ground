var express = require('express');
var groupDAO = require('/home/developer/Ground/model/groupDAO.js');


function Group(req, res, next) {
  groupDAO.getGroup().then((db_data) => {
    res.render('group', {db_data,username : req.session.wName})
  }).catch(err=>res.send("<script>alert('err');</script>"));
}
 

function GroupDetail(req, res, next) {
    res.render('group_detail',{username : req.session.wName});
}

function GroupNotice(req, res, next) {
    res.render('faq',{username : req.session.wName});
}
function GroupQuestion(req, res, next) {
    res.render('faq',{username : req.session.wName});
}
module.exports = {
    Group,
    GroupDetail,
    GroupNotice,
    GroupQuestion
}