var express = require('express');
var dashDAO = require('../model/dashDAO')

function dash_main(req, res, next) {      
  res.render('dash_main');
}

function dash_checklist(req, res, next) { 
  dashDAO.select_Checklist().then((db_data)=> {
      var data = {
          message : "응답상태 성공였습니다",
          result : db_data
      }
      var jtest = JSON.stringify(data)
      var jsonOb = JSON.parse(jtest)

      res.json(jsonOb)
  })   
}

function dash_userchecklistUpdate(req, res, next) {
    var parameters = {
        "wid" : req.body.uid,
        "wischeck": req.body.wischeck
    }

    var successData = {
        message : "1"
    }

    var sendJsonData = JSON.parse(JSON.stringify(successData))

    dashDAO.update_UserChecklist(parameters).then((db_data)=> {
        console.log(db_data)
        console.log("체크정보 업데이트");
        res.json(sendJsonData)
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

function dash_accident(req, res, next) { 
  dashDAO.select_accident().then((db_data)=>{
    res.render('dash_accident', { db_data : db_data});  
  })    
}
function dash_cctv(req, res, next) { 
    res.render('dash_cctv');  
}

function dash_manpower(req, res, next) { 
  res.render('dash_manpower');  
}

function dash_manpower_add(req, res, next) { 
    res.render('dash_manpower_add');  
}

function dash_manpower_detail(req, res, next) { 
  res.render('dash_manpower_detail');  
}

function dash_notice(req, res, next) { 
    res.render('dash_notice');  
}

function dash_notice_write(req, res, next) { 
  res.render('dash_notice_write');  
}

function dash_notice_detail(req, res, next) { 
  res.render('dash_notice_detail');  
}

function dash_timecard(req, res, next) { 
    res.render('dash_timecard');  
}

function dash_work(req, res, next) { 
    res.render('dash_work');  
}

function dash_work_add(req, res, next) { 
  res.render('dash_work_add');  
}

function dash_worker_chart(req, res, next) { 
    res.render('dash_worker_chart');  
}

module.exports = {
    dash_main,
    dash_checklist,
    dash_checklistInsert,
    dash_checklistDelete,
    dash_accident,
    dash_cctv,
    dash_manpower,
    dash_manpower_add,
    dash_manpower_detail,
    dash_notice,
    dash_notice_write,
    dash_notice_detail,
    dash_timecard,
    dash_work,
    dash_work_add,
    dash_worker_chart,
    dash_userchecklistUpdate
}