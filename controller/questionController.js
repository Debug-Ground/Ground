var express = require('express');
var index = require('../model/indexDao');
var jwtmiddle = require('../middleware/jwt');

function question(req, res, next) {
  let token = req.cookies.user;
  jwtmiddle.jwtCerti(token).then(
      (permission)=>{
        res.render('question', {permission});
      }
  ).catch(err=>res.send("<script>alert('jwt err');</script>")); 
}
function qwrite(req, res, next) {
  let token = req.cookies.user;
  jwtmiddle.jwtCerti(token).then(
      (permission)=>{
        res.render('qwrite', {permission});
      }
  ).catch(err=>res.send("<script>alert('jwt err');</script>")); 
}

function qdetail(req, res, next) {
  let token = req.cookies.user;
  jwtmiddle.jwtCerti(token).then(
      (permission)=>{
        res.render('qdetail', {permission});
      }
  ).catch(err=>res.send("<script>alert('jwt err');</script>")); 
}


module.exports = {
    question,
    qwrite,
    qdetail
}