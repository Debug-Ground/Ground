var express = require('express');

function faq(req, res, next) {
    res.render('faq',{username : req.session.wName});
} 

module.exports = {
    faq
}