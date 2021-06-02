var db = require('../config/db');
var logger = require('../config/logger');

function signUp(parameters) {
    return new Promise ((resolve, reject) => {
        db.query(`Insert into UserInfo set userId = '${parameters.userId}', userPw = '${parameters.userPw}' , userName = '${parameters.userName}' ,
         userEmail = '${parameters.userEmail}', userPhone = '${parameters.userPhone}', userGroup = '${parameters.userGroup}'`, function(error,db_data) {
            if (error) {
                logger.error(
                    "DB error [UserInfo]"+
                    "\n \t" + `Insert into UserInfo set userId = '${parameters.userId}', userPw = '${parameters.userPw}' , userName = '${parameters.userName}' ,
                    userEmail = '${parameters.userEmail}', userPhone = '${parameters.userPhone}', userGroup = '${parameters.userGroup}'` +
                    "\n \t" + error);
                reject('DB ERR');
                //throw error;
            }
            else {
                resolve(db_data);
            }
        });
    })
};

function search_UserDetail(parameters) {
    return new Promise(function (resolve, reject) {
        db.query(`SELECT * FROM UserInfo where userId="${parameters.user_id}" && userPw="${parameters.user_pw}"`, function (error, db_data) {
            if (error) {
                logger.error(
                    "DB error [UserInfo]"+
                    "\n \t" + `SELECT * FROM UserInfo where userId="${parameters.user_id}" && userPw="${parameters.user_pw}"` +
                    "\n \t" + error);
                reject('DB ERR');
                //throw error;
            }
            if(db_data[0]==undefined){
                reject("ID/PW를 확인하세요.")
            }
            else{
                resolve(db_data);
            }
        });
    })
}

function getFindId() {
    return new Promise ((resolve, reject) => {
        db.query(`select * from UserInfo`, function(err,db_data) {
            if(err) {
                reject(err);
            }
            else {
                resolve(db_data);
            }
        });
    })
};

function getFindPw() {
    return new Promise ((resolve, reject) => {
        db.query(`select * from UserInfo`, function(err,db_data) {
            if(err) {
                reject(err);
            }
            else {
                resolve(db_data);
            }
        });
    })
};


module.exports = {
    search_UserDetail,
    signUp,
    getFindId,
    getFindPw
}