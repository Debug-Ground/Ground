var db = require('../config/db');
var logger = require('../config/logger');

function signUp(parameters) {
    return new Promise ((resolve, reject) => {
        db.query(`Insert into UserInfo set id = '${id}', pw = '${pw}' , name = '${name}' , email = '${email}', phone = '${phone}', group = '${group}'`, function(err,db_data) {
            if(err) {
                reject(err);
            }
            else {
                resolve(db_data);
            }
        });
    })
};

function search_UserDetail(parameters) {
    return new Promise(function (resolve, rejcet) {
        db.query(`SELECT * FROM UserInfo where userId="${parameters.user_id}" && userPw="${parameters.user_pw}"`, function (error, db_data) {
            if (error) {
                logger.error(
                    "DB error [UserInfo]"+
                    "\n \t" + `SELECT * FROM UserInfo where userId="${parameters.user_id}" && userPw="${parameters.user_pw}"` +
                    "\n \t" + error);
                rejcet('DB ERR');
                //throw error;
            }
            if(db_data[0]==undefined){
                rejcet("ID/PW를 확인하세요.")
            }
            else{
                resolve(db_data);
            }
        });
    })
}


module.exports = {
    search_UserDetail,
    signUp 
}