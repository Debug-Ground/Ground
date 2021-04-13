var express = require('express');
var index = require('../model/indexDao');

function faq(req, res, next) {
        res.render('faq');
}

module.exports = {
    faq
}