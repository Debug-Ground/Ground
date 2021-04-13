var express = require('express');
var index = require('../model/indexDao');

function indexmain(req, res, next) {
        res.render('index');
}

module.exports = {
    indexmain
}