var express = require('express');
var index = require('../model/indexDao');

function meeting(req, res, next) {
        res.render('meeting');
}

module.exports = {
    meeting
}