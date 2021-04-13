var express = require('express');
var index = require('../model/indexDao');

function notice(req, res, next) {
        res.render('notice');
}

module.exports = {
    notice
}