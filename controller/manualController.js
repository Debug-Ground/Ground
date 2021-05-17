var express = require('express');
var index = require('../model/indexDao');

function manual(req, res, next) {
        res.render('manual');
}

module.exports = {
    manual
}