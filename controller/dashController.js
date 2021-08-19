var express = require('express');
var dashDAO = require('../model/dashDAO')

function dash_main(req, res, next) {      
  res.render('dash_main');
}

function dash_checklist(req, res, next) { 
  dashDAO.select_Checklist().then((db_data)=> {
    res.json(db_data);
  })   
}

function dash_checklistInsert(req, res, next) { 
  var parameters = {
    "cList" : "내용" //req.body.cList
  }
  dashDAO.insert_Checklist(parameters).then((db_data)=> {
    res.json(db_data);
  })   
}
function dash_checklistDelete(req, res, next) { 
  var parameters = {
    "cid" : 1 // req.body.cid
  }
  dashDAO.delete_Checklist(parameters).then((db_data)=> {
    res.json(db_data);
  })   
}

module.exports = {
    dash_main,
    dash_checklist,
    dash_checklistInsert,
    dash_checklistDelete
}