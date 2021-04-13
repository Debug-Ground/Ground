var express = require('express');

function qwrite(req, res, next) {
    res.render('question_write');
}

module.exports = {
    qwrite
}