var express = require('express');

function Group(req, res, next) {
    res.render('faq');
} 

module.exports = {
    Group
}