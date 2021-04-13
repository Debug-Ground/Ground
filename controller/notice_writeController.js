var express = require('express');

function nwrite(req, res, next) {
    res.render('notice_write');
}

module.exports = {
    nwrite
}