var express = require('express');

function manual(req, res, next) {
  res.render('manual',{username : req.session.wName})
}

function getGuide(req, res, next) {
  var equi = "success"
  res.render('guid',{username : req.session.wName, test : equi})
}

function postGuide(req, res, next) {
  var fdata =  Object.keys(req.body)[0]
  if (fdata == "fail") {
    var equi = "fail"
    res.render('guid',{username : req.session.wName, fdata, test : equi})
  }
  else if (fdata == "success")
  {
    var equi =  "success"
    res.render('guid',{username : req.session.wName, fdata, test : equi})
  }
  else {
    var equi = "ing"
    res.render('guid',{username : req.session.wName, fdata, test : equi})
  }

  console.log(Object.keys(req.body)[0])

    var data = req.body.data;
    console.log('POST Parameter = ' + data);
    var result = ' Succese';
    console.log(result);
    res.send({result:result});
  
}




module.exports = {
  manual,
  getGuide,
  postGuide
}