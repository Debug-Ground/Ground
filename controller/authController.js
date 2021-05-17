var express = require('express');
var jwtmiddle = require('../middleware/jwt');
var authDAO = require('../model/authDao');

function signIn(req, res, next) {
	res.render('auth/signIn');
}

function signUp(req,res,next) {
	res.render('auth/signUp');
}

function checkUser(req, res, next) {
  var special_pattern = /[` ~!@#$%^&*|\\\'\";:\/?]/gi;
  
  if(special_pattern.test(req.body.username)|| special_pattern.test(req.body.userpass) ||
      req.body.username == undefined || req.body.userpass == undefined ||
      req.body.username == " " || req.body.userpass == " "||
      req.body.username == null || req.body.userpass == null){
      res.send("<script>alert('잘못된 값을 입력하셨습니다.'); history.go(-1);</script>")
  }else{
      var parameters = {
          "user_id": req.body.username,
          "user_pw" : req.body.userpass
      }
  
      authDAO.search_UserDetail(parameters).then(
          (db_data) => {
              if(db_data[0] != undefined){
                  var userData = {
                      user_id: db_data[0].userId,
                      user_name: db_data[0].userName
                  }
                  jwtmiddle.jwtCreate(userData).then(
                      (token)=>{
                          res.cookie("user", token);
                          res.redirect("/")
                      }
                    ).catch(err=>res.send("<script>alert('jwt err');</script>"));
              }else{
                  res.send("<script>alert('JWT is wrong...');history.go(-1);</script>")
              }
          }
      ).catch(err=>res.send("<script>alert('"+ err +"');history.go(-1);</script>"))
  }    
}
function logOut(req, res, next) {
    let token = req.cookies.user;
    res.clearCookie('user');
    res.redirect('/');
}

function revise_check(req, res, next) {
  let token = req.cookies.user;
  jwtmiddle.jwtCerti(token).then(
      (permission)=>{
          res.render('auth/revise_check', {permission});
      }
  ).catch(err=>res.send("<script>alert('jwt err');</script>"));    
}
module.exports = {
  signIn,
  signUp,
  checkUser,
  logOut
}

