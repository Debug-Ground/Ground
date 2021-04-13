var express = require('express');

function ndetail(req, res, next) {
    res.render('notice_detail');
}

module.exports = {
    ndetail
}