var express = require('express');

function dash_main(req, res, next) {      
  res.render('dash_main');
}

module.exports = {
    dash_main
}