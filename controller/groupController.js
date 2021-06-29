var express = require('express');

function Group(req, res, next) {
    res.render('group');
} 

function GroupDetail(req, res, next) {
    res.render('group_detail');
}

module.exports = {
    Group,
    GroupDetail
}