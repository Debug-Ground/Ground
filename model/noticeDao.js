var db = require('../config/db');
var logger = require('../config/logger');

function getNotice(parameter) {
    return new Promise ((resolve, reject) => {
        if(parameter.searchText == undefined){
          db.query(`select * from Notice order by ndate desc `, function(error,db_data) {
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
        }
        else {
          db.query(`select * from Notice where ntitle LIKE '%${parameter.searchText}%' 
          or ncontent LIKE '%${parameter.searchText}%'  
          or nwriter LIKE '%${parameter.searchText}%' order by ndate desc `, function(error,db_data) {
            if(error) {
              logger.error(
              "DB error [Notice]"+
              "\n \t" + `select * from Notice where ntitle LIKE '%${parameter.searchText}%' 
              or ncontent LIKE '%${parameter.searchText}%'  
              or nwriter LIKE '%${parameter.searchText}%' order by ndate desc `+
              "\n \t" + error);
                reject('DB ERR');
            }
            else {
                resolve(db_data);
            }
          });
        }
  })
}

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

 function updateNotice(parameters) {
    return new Promise ((resolve, reject) => {
        db.query(`Update Notice set ntitle = '${parameters.ntitle}', ncontent = '${parameters.ncontent}', nwriter = '${parameters.nwriter}', ndate = '${parameters.ndate}' where nid ='${parameters.nid}'`, function(error ,db_data) {
         if (error) {
             logger.error(
                 "DB error [Notice]"+
                 "\n \t" + `Update Notice set ntitle = '${parameters.ntitle}', ncontent = '${parameters.ncontent}', nwriter = '${parameters.nwriter}', ndate = '${parameters.ndate}' where nid ='${parameters.nid}'` +
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
    insertNotice,
    updateNotice
}