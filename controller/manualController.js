const { config } = require('dotenv');
var express = require('express');

function manual(req, res, next) {
  res.render('manual',{username : req.session.wName})
}

function getGuideFail(req, res, next) {
  var fdata =  req.query.data
  
  
    res.render('guid_fail',{"test":fdata,username : req.session.wName})
  
}

function getGuideSuccess(req, res, next) {
  var fdata =  req.query.data
  
  res.cookie('fdata', fdata)
    res.render('guid_success',{"test":fdata,username : req.session.wName})
  
}

function getGuideTesting(req, res, next) {
  var fdata =  req.query.data
  res.cookie('fdata', fdata)
    res.render('guid_testing',{ "test":fdata, username : req.session.wName})
  
}

function postGuide(req, res, next) {
  var data =  Object.keys(req.body)[0]
  console.log(data)

  if(data == "fail")
  {
    res.send({result:'fail'});
  }

}




module.exports = {
  manual,
  getGuideFail,
  getGuideSuccess,
  getGuideTesting,
  postGuide
}