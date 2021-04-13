var express = require('express');
var index = require('../model/indexDao');

function company(req, res, next) {
        res.render('company');
}

module.exports = {
    company
}