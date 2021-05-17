var express = require('express');
var jwtmiddle = require('../middleware/jwt');

function manual(req, res, next) {
    let token = req.cookies.user;
    jwtmiddle.jwtCerti(token).then(
        (permission)=>{
          res.render('manual', {permission});
        }
    ).catch(err=>res.send("<script>alert('jwt err');</script>")); 
  }

module.exports = {
  manual
}