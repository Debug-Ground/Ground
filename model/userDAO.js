'use strict';
var db = require("../config/db");
var logger = require('../config/logger');

function insert_userInfo(parameters) {
    return new Promise(function (resolve, reject) {
<<<<<<< HEAD
        db.query(`INSERT INTO Worker SET wid = '${parameters.wid}', wName = '${parameters.wName}', wEmail = '${parameters.wEmail}', wImage = '${parameters.wImage}', wRegular='사원', wDate=NOW()`, function (error, db_data) {
            if (error) {
                logger.error(
                    "DB error [Worker]"+
                    "\n \t" + `INSERT INTO Worker SET wid = '${parameters.wid}', wName = '${parameters.wName}', wEmail = '${parameters.wEmail}', wImage = '${parameters.wImage}'  ,wRegular='사원',   wDate=NOW()` +
=======
        db.query(`INSERT INTO Worker SET wid = '${parameters.wid}', wName = '${parameters.wName}', wEmail = '${parameters.wEmail}', wImage = '${parameters.wImage}',wRegular = '일용직',  wDate=NOW()`, function (error, db_data) {
            if (error) {
                logger.error(
                    "DB error [Worker]"+
                    "\n \t" + `INSERT INTO Worker SET wid = '${parameters.wid}', wName = '${parameters.wName}', wEmail = '${parameters.wEmail}', wImage = '${parameters.wImage}' ,wRegular = '일용직',  wDate=NOW()` +
>>>>>>> cdfa7602f101eed96a6ee35581d7cf54bea53c63
                    "\n \t" + error);
                reject('DB ERR');
                //throw error;
            } 
            else{
                resolve(db_data);
            }
        });
    })
}

function select_userFind(parameters) {
    return new Promise(function (resolve, reject) {
        db.query(`SELECT * FROM Worker WHERE wid= '${parameters.wid}'`, function (error, db_data) {
            if (error) {
                logger.error(
                    "DB error [Worker]"+
                    "\n \t" + `select wid, wName FROM Worker WHERE wid='${parameters.wid}'` +
                    "\n \t" + error);
                reject('DB ERR');
                //throw error;
            }
            else{
                resolve(db_data);
            }
        });
    })
}

function update_userInfo(parameters) {
    return new Promise(function (resolve, reject) {
        db.query(`UPDATE Worker SET wid = '${parameters.wid}', wName = '${parameters.wName}', wEmail = '${parameters.wEmail}', wImage = '${parameters.wImage}' where wid = '${parameters.wid}' `, function (error, db_data) {
            if (error) {
                logger.error(
                    "DB error [Worker]"+
                    "\n \t" + `UPDATE Worker SET wid = '${parameters.wid}', wName = '${parameters.wName}', wEmail = '${parameters.wEmail}', wImage = '${parameters.wImage}' where wid = '${parameters.wid}'` +
                    "\n \t" + error);
                reject('DB ERR');
                //throw error;
            }
            else{
                resolve(db_data);
            }
        });
    })
}

function select_RegularDate(parameters){
    return new Promise(function (resolve, reject) {
        db.query(`SELECT wDate, wRegular FROM Worker WHERE wid= '${parameters.wid}'`, function (error, db_data) {
            if (error) {
                logger.error(
                    "DB error [Worker]"+
                    "\n \t" + `SELECT wDate, wRegular FROM Worker WHERE wid= '${parameters.wid}'` +
                    "\n \t" + error);
                reject('DB ERR');
                //throw error;
            }
            else{
                resolve(db_data);
            }
        });
    })
}

module.exports = {
    insert_userInfo,
    select_userFind,
    update_userInfo,
    select_RegularDate
}