var express = require('express');

function company(req, res, next) {      
  res.render('company');
}

module.exports = {
    company
}