var express = require('express');

function manual(req, res, next) {
  res.render('manual',{username : req.session.wName})
}





module.exports = {
  manual
}