var express = require('express');
var index = require('../model/indexDao');

function question(req, res, next) {
        res.render('question');
}

module.exports = {
    question
}