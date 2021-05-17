var express = require('express');
var index = require('../model/indexDao');
var jwtmiddle = require('../middleware/jwt');

function indexmain(req, res, next) {
  let token = req.cookies.user;
  jwtmiddle.jwtCerti(token).then(
     (permission)=>{
       res.render('index', {permission});
     });  
  }

module.exports = {
  indexmain
}