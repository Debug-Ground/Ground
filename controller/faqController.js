var express = require('express');
var jwtmiddle = require('../middleware/jwt');
function faq(req, res, next) {
    let token = req.cookies.user;
    jwtmiddle.jwtCerti(token).then(
        (permission)=>{
          res.render('faq', {permission});
        }
    ).catch(err=>res.send("<script>alert('jwt err');</script>")); 
}

module.exports = {
    faq
}