var express = require('express');
var jwtmiddle = require('../middleware/jwt');

function company(req, res, next) {
  let token = req.cookies.user;
  jwtmiddle.jwtCerti(token).then(
      (permission)=>{
        res.render('company', {permission});
      }
  ).catch(err=>res.send("<script>alert('jwt err');</script>")); 
}

module.exports = {
    company
}