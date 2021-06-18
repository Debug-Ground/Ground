var express = require('express');

function faq(req, res, next) {
    res.render('faq');
} 

module.exports = {
    faq
}