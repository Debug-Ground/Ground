var express = require('express');

function company(req, res, next) {      
  res.render('company',{username : req.session.wName});
}

module.exports = {
    company
}