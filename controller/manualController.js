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
    console.log(fdata);
    res.send({result:fdata});
  }
  else if (fdata == "success")
  {
    console.log(fdata);
    res.send({result:fdata});
  }
  else if (fdata == "guiding"){
    console.log(fdata);
    res.send({result:fdata});
  }


}




module.exports = {
  manual,
  getGuide,
  postGuide
}