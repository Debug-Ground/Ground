var express = require('express');
var auth = require('../model/userinfoDao');

function signIn(req, res, next) {
	res.render('auth/signIn');
}

function signUp(req,res,next) {
	res.render('auth/signUp');
}
module.exports = {
  signIn,
  signUp
}