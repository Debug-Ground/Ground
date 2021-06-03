var db = require('../config/db');
var logger = require('../config/logger');

function getNotice() {
    return new Promise ((resolve, reject) => {
        db.query(`select * from Notice`, function(error,db_data) {
            if(error) {
              logger.error(
              "DB error [Notice]"+
              "\n \t" + `select * from Notice`+
              "\n \t" + error);
                reject('DB ERR');
            }
            else {
                resolve(db_data);
            }
        });
    })
};

 function insertNotice(parameters) {
   return new Promise ((resolve, reject) => {
       db.query(`Insert into Notice set ntitle = '${parameters.ntitle}', ncontent = '${parameters.ncontent}', nwriter = '${parameters.nwriter}', ndate = '${parameters.ndate}'`, function(error ,db_data) {
        if (error) {
            logger.error(
                "DB error [Notice]"+
                "\n \t" + `Insert into Notice set ntitle = '${parameters.ntitle}', ncontent = '${parameters.ncontent}', nwriter = '${parameters.nwriter}', ndate = '${parameters.ndate}'` +
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

 function deleteNotice(parameters) {
    return new Promise ((resolve, reject) => {
        db.query(`Delete from Notice WHERE nid = '${parameters.nidx}'`, function(error ,db_data) {
         if (error) {
             logger.error(
                 "DB error [Notice]"+
                 "\n \t" + `Delete from Notice WHERE nid = '${parameters.nidx}'` +
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
    getNoticeDetail,
    deleteNotice,
    insertNotice
}