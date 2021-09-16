var express = require('express');
var dashDAO = require('../model/dashDAO')
const weather = require("../model/weather");

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

function dash_notice(req, res, next) { 
    res.render('dash_notice');  
}

function dash_timecard(req, res, next) { 
    res.render('dash_timecard');  
}

function dash_work_chart(req, res, next) { 
    res.render('dash_work_chart');  
}

function dash_worker_chart(req, res, next) { 
    res.render('dash_worker_chart');  
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

module.exports = {
    dash_main,
    dash_checklist,
    dash_checklistInsert,
    dash_checklistDelete,
    dash_accident,
    dash_cctv,
    dash_manpower,
    dash_manpower_add,
    dash_notice,
    dash_timecard,
    dash_work_chart,
    dash_worker_chart,
    getWayWeather
}