'use strict';
var db = require("../config/db");
var logger = require('../config/logger');

function insert_userInfo(parameters) {
    return new Promise(function (resolve, reject) {
        db.query(`INSERT INTO Worker SET wid = '${parameters.wid}', wName = '${parameters.wName}', wEmail = '${parameters.wEmail}', wImage = '${parameters.wImage}', wToken ='${parameters.wToken}'`, function (error, db_data) {
            if (error) {
                logger.error(
                    "DB error [Worker]"+
                    "\n \t" + `INSERT INTO Worker SET wid = '${parameters.wid}', wName = '${parameters.wName}', wEmail = '${parameters.wEmail}', wImage = '${parameters.wImage}', wToken ='${parameters.wToken}'` +
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
        db.query(`UPDATE Worker SET wid = '${parameters.wid}', wName = '${parameters.wName}', wEmail = '${parameters.wEmail}', wImage = '${parameters.wImage}', wToken='${parameters.wToken}' where wid = '${parameters.wid}' `, function (error, db_data) {
            if (error) {
                logger.error(
                    "DB error [Worker]"+
                    "\n \t" + `UPDATE Worker SET wid = '${parameters.wid}', wName = '${parameters.wName}', wEmail = '${parameters.wEmail}', wImage = '${parameters.wImage}', wToken='${parameters.wToken}' where wid = '${parameters.wid}'` +
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
    update_userInfo
}