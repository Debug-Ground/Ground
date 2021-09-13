var express = require('express');

function indexmain(req, res, next) {
       res.render('index',{username : req.session.wName});
  }

module.exports = {
  indexmain
}