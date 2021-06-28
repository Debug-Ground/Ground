var express = require('express');

function Group(req, res, next) {
    res.render('group');
} 

module.exports = {
    Group
}