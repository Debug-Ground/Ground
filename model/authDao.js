var db = require('../config/db');

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

function getNoticeDetail(parameter) {
  return new Promise ((resolve, reject) => {
      db.query(`select * from Notice where nid ='${parameter.nid}'`, function(err,db_data) {
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
    getNotice,
    getNoticeDetail
}