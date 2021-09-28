var express = require('express');
var dashDAO = require('../model/dashDAO')
var dayjs = require('dayjs');
const weather = require("../model/weather");
const request = require("request");
const https = require("https");
const fs = require("fs");
const querystring = require('querystring');

function dash_main(req, res, next) {      
  dashDAO.select_accidentCount().then((db_data)=> {
    acCount = db_data
    console.log(acCount)
    dashDAO.select_accidentDateCount().then((db_data)=>{
      dateCount = db_data
      console.log(dateCount)
      dashDAO.select_accidentDateCountGraph().then((db_data)=> {
        graphCount = db_data
        console.log(graphCount)
        dashDAO.select_WorkerCountGraph().then((db_data)=> {
         workCount = db_data
         console.log(workCount)
         dashDAO.select_WorkerStickGraph().then((db_data)=>{
           stickCount = db_data
           console.log(stickCount)
           dashDAO.select_Checklist().then((db_data)=> {
             checkData = db_data
             console.log(checkData)
             dashDAO.select_WorkerStatus().then((db_data)=> {
              workStatus = db_data
              console.log(db_data)
              dashDAO.select_mainWorker().then((db_data)=> {
                mainWorker = db_data
                console.log(mainWorker)
                dashDAO.select_mainAttendance().then((db_data)=>{
                  mainAt = db_data
                  console.log(mainAt)
                  dashDAO.select_TodayWorker().then((db_data)=> {
                    TodayWk = db_data
                    res.render('dash/main',{acCount,dateCount, graphCount,workCount,stickCount,workStatus, mainWorker, TodayWk,mainAt,dayjs});
                  })
                })
              })
            })
          })
         })
        })
      })
    })
  })
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
    res.render('dash/accident', { username : req.session.wName, db_data : db_data, a_num:req.params.num, max_value:7});  
  })    
}

function dash_accident_add(req, res, next) { 
  dashDAO.select_accident().then((db_data)=>{
    res.render('dash/accident_add', { username : req.session.wName, db_data : db_data});  
  })    
}

function dash_accident_insert(req, res, next) { 
  var parameters = {
    "aPeople":req.body.aPeople,
    "aGender":req.body.aGender,
    "aPhone":req.body.aPhone,
    "aGuardian":req.body.aGuardian,
    "aKind":req.body.aKind,
    "aDetail":req.body.aDetail,
    "aLocation":req.body.aLocation,
    "aImage":req.file.filename,
    "aMemo":req.body.aMemo
  }
  dashDAO.insert_accident(parameters).then((db_data)=>{
    res.redirect('/dash/accident/1')
  })    
}
function dash_accident_update(req,res,next){
  var parameters = {
    "aid" : req.params.num,
  }  
  dashDAO.select_accidentDetail(parameters).then((db_data)=>{
    res.render('dash/accident_update',{ username : req.session.wName,db_data})
  })  
}


function dash_accident_updatedata(req,res,next){
  var parameters = {
    "aid" : req.body.aidx,
    "aPeople":req.body.aPeople,
    "aGender":req.body.aGender,
    "aPhone":req.body.aPhone,
    "aGuardian":req.body.aGuardian,
    "aKind":req.body.aKind,
    "aDetail":req.body.aDetail,
    "aLocation":req.body.aLocation,
    "aMemo":req.body.aMemo
  }
  console.log(parameters)
  dashDAO.update_accident(parameters).then((db_data)=>{
    res.redirect('/dash/accident/1')
  })  
}

function dash_accident_detail(req, res, next) {
  var parameters = {
    "aid" : req.params.num
  } 
  dashDAO.select_accidentDetail(parameters).then((db_data)=>{
    console.log(db_data)
    res.render('dash/accident_detail', { username : req.session.wName, db_data : db_data});  
  })    
}

function dash_cctv(req, res, next) { 
    res.render('dash/cctv',{username : req.session.wName});  
}

function dash_manpower(req, res, next) { 
  dashDAO.select_manpower().then((db_data)=> {
    console.log(db_data)
    res.render('dash/manpower',{db_data,m_num:req.params.num, max_value:7,username : req.session.wName});  
  })
}

function dash_manpower_update(req, res, next) {
  var parameters ={
    "wid":req.params.num
  }
  dashDAO.select_manpowercheck(parameters).then((db_data)=> {
  console.log(db_data)
  res.render('dash/manpower_update',{db_data, username : req.session.wName});  
  })
}

function dash_manpower_detail(req, res, next) {
  var parameters = {
    "wid": req.params.num
  }
  dashDAO.select_manpowercheck(parameters).then((db_data)=> {
  console.log(db_data)
  res.render('dash/manpower_detail',{db_data, username : req.session.wName});  
  })
}

function dash_manpower_updatedata(req, res, next) { 
  var parameters = {
    "wid":req.body.widx,
    "wName":req.body.wName,
    "wRegular":req.body.wRegular,
    "wEmail":req.body.wEmail,
    "wPhone":req.body.wPhone,
    "wAddress":req.body.wAddress,
    "wImage" : req.file.filename,
    "wMemo":req.body.wMemo
  }
  console.log(req.file.filename)
  dashDAO.update_manpower(parameters).then((db_data)=> {
    res.redirect('/dash/manpower/1')
  })
}

function dash_notice(req, res, next) { 
  dashDAO.select_anNotice().then((db_data)=> {
    res.render('dash/notice',{db_data, an_num: req.params.num, max_value: 8});  
  })
}

function dash_notice_write(req, res, next) { 
  res.render('dash/notice_write',{username : req.session.wName});  
}

function dash_notice_insert(req, res, next) { 
  var parameters = {
    "antitle": req.body.nTitle,
    "ancontent": req.body.nContent
  }
  dashDAO.insert_anNotice(parameters).then((db_data)=> {
    res.redirect('/dash/notice/1')
  })
}

function dash_notice_update(req, res, next) { 
  var parameters = {
    "anid": req.params.num
  }
  dashDAO.select_anNoticeDetail(parameters).then((db_data)=> {
    console.log(db_data)
    res.render('dash/notice_update',{db_data, username : req.session.wName});
  })
}

function dash_notice_updatedata(req, res, next) { 
  var parameters = {
    "anid":req.body.anidx,
    "antitle": req.body.antitle,
    "ancontent": req.body.ancontent
  }
  dashDAO.update_anNotice(parameters).then((db_data)=> {
    res.redirect('/dash/notice/1')
  })
}

function dash_notice_detail(req, res, next) { 
  var parameters = {
    "anid": req.params.num
  }
  dashDAO.select_anNoticeDetail(parameters).then((db_data)=> {
    res.render('dash/notice_detail',{db_data, username : req.session.wName});
  })
}

function dash_timecard(req, res, next) { 
  dashDAO.select_timecard().then((db_data)=> {
    console.log(db_data)
    res.render('dash/timecard',{db_data, t_num:req.params.num, max_value:7,username : req.session.wName});
  })
}

function dash_work(req, res, next) { 
  dashDAO.select_WorkStatus().then((db_data)=>{
    console.log(db_data)
    res.render('dash/work',{db_data, ws_num:req.params.num, max_value:7,username : req.session.wName});  
  })
}

function dash_work_add(req, res, next) { 
  res.render('dash/work_add',{username : req.session.wName});  
}

function dash_work_insert(req, res, next) { 
  var parameters = {
    "wsManager":req.body.wsManager,
    "wsManagerRank":req.body.wsManagerRank,
    "wsWorkerNum":req.body.wsWorkerNum,
    "wsName":req.body.wsName,
    "wsStartDate":req.body.wsStartDate,
    "wsEndDate":req.body.wsEndDate,
    "wsLocation":req.body.wsLocation,
    "wsMemo":req.body.wsMemo,
  }
  dashDAO.insert_WorkStatus(parameters).then((db_data)=> {
    res.redirect('/dash/work_chart/1')
  })
}

function dash_work_update(req, res, next) { 
  var parameters = {
    "wsid": req.params.num
  }
  dashDAO.select_WorkStatusDetail(parameters).then((db_data)=> {
    console.log(db_data)
    res.render('dash/work_update',{db_data,username : req.session.wName});  
  })
}

function dash_work_updatedata(req, res, next) { 
  var parameters = {
    "wsid":req.body.wsidx,
    "wsManager":req.body.wsManager,
    "wsManagerRank":req.body.wsManagerRank,
    "wsWorkerNum":req.body.wsWorkerNum,
    "wsName":req.body.wsName,
    "wsStartDate":req.body.wsStartDate,
    "wsEndDate":req.body.wsEndDate,
    "wsLocation":req.body.wsLocation,
    "wsMemo":req.body.wsMemo,
  }
  dashDAO.update_WorkStatus(parameters).then((db_data)=> {
    res.redirect('/dash/work_chart/1')
  })
}


function dash_work_detail(req, res, next) { 
  var parameters = {
    "wsid": req.params.num
  }
  dashDAO.select_WorkStatusDetail(parameters).then((db_data)=> {
    console.log(db_data)
    res.render('dash/work_detail',{db_data,username : req.session.wName});  
  })
}

function dash_worker_chart(req, res, next) {
  dashDAO.select_WorkerStickGraph().then((db_data)=>{
    StickData = db_data
    dashDAO.select_regularCount().then((db_data)=> {
      RegularData = db_data
      res.render('dash/worker_chart',{StickData, RegularData,username : req.session.wName});    
    })
  })
}

function dash_test(req, res, next) { 
  res.render('dash/test',{username : req.session.wName});  
}

function dash_test_send(req, res, next) {
  parameters = {
      "wid": req.session.wid,
  }
  console.log(parameters.wid)
      var jdata = querystring.stringify({
                  'kakaoid': parameters.wid,
      })
      console.log(jdata)
      process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
      var options = {
                  method: 'POST',
                  hostname: "grounda.hopto.org",
                  port:5000,
                  path:"/test",
                  agent: false,
                  headers : {
                      'Content-Type':'application/x-www-form-urlencoded',
                      'Content-Length': Buffer.byteLength(jdata)   
                  },
                   rejectUnhauthorized : false,
                   requestCert: true,
                   strictSSL: false,
                   json:true
          }
      var req = https.request(options, (res) => {
              res.setEncoding('utf-8');
              res.on('data', (d) => {
                console.log(d);
              });
      });
      req.on('error', (e) => {
          console.error(e);
        });
      req.write(jdata)
      req.end();
      res.redirect('/dash/test')
}


function getWayWeather(req, res, next) {
    var parameters = {
        "lat": req.body.lat,
        "lon": req.body.lon
    }
    const weathers = new Object();

    weather.getWeatherAPI(parameters.lat, parameters.lon).then((body) => {
        let info = JSON.parse(body);

        weathers.temp = Math.ceil(info['current']['temp'])
        var headerInfo = {
            "temp": weathers.temp
        }

        res.send({"result": headerInfo})
    }).catch(err => res.send("<script>alert('weather err')</script>"));
}



function dash_insert_list(req, res, next) { 
  var parameters = {
    "cList":req.body.listinput
  }
  dashDAO.insert_mainChecklist(parameters).then((db_data)=>{
  })
}


function dash_delete_list(req, res, next) { 
  var parameters = {
    "cList":req.body.checkboxinput
  }
  console.log(parameters)
  dashDAO.delete_mainChecklist(parameters).then((db_data)=>{
  })
}

function dash_App_At(req, res, next) { 
  var parameters = {
    "wid":req.body.wid
  }
  console.log(parameters)
  dashDAO.select_Attendance(parameters).then((db_data)=>{
    res.send(db_data)
  })
}

function dash_reqApp_At(req, res, next) { 
  var parameters = {
    "wid":req.body.wid,
    "atDate":req.body.atDate
  }
  console.log(parameters)
  dashDAO.insert_Attendance(parameters).then((db_data)=>{
    res.send(db_data)
  })
}


module.exports = {
    dash_main,
    dash_checklist,
    dash_checklistInsert,
    dash_checklistDelete,
    dash_accident,
    dash_accident_add,
    dash_accident_insert,
    dash_accident_update,
    dash_accident_updatedata,
    dash_accident_detail,
    dash_cctv,
    dash_manpower,
    dash_manpower_update,
    dash_manpower_detail,
    dash_manpower_updatedata,
    dash_notice,
    dash_notice_write,
    dash_notice_insert,
    dash_notice_updatedata,
    dash_notice_update,
    dash_notice_detail,
    dash_timecard,
    dash_work,
    dash_work_add,
    dash_work_insert,
    dash_work_update,
    dash_work_updatedata,
    dash_work_detail,
    dash_worker_chart,
    dash_userchecklistUpdate,
    dash_worker_chart,
    dash_test,
    getWayWeather,
    dash_test_send,
    dash_insert_list,
    dash_delete_list,
    dash_App_At,
    dash_reqApp_At,
}