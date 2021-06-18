var express = require('express');

function indexmain(req, res, next) {
       res.render('index');
  }

module.exports = {
  indexmain
}