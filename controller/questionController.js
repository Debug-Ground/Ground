var express = require('express');
var index = require('../model/indexDao');

function question(req, res, next) {
        res.render('question');
}
function qwrite(req, res, next) {
    res.render('question_write');
}
function qdetail(req, res, next) {
    res.render('question_write');
}



module.exports = {
    question,
    qwrite,
    qdetail
}