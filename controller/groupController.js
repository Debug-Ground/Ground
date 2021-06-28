var express = require('express');

function Group(req, res, next) {
    res.render('group');
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