var express = require('express');

function manual(req, res, next) {
  res.render('manual');
}
   

module.exports = {
  manual
}