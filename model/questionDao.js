var db = require('../config/db');
var logger = require('../config/logger');

function getQuestion(parameter) {
    return new Promise ((resolve, reject) => {
        if(parameter.searchText == undefined){
          db.query(`select * from Question order by qdate desc `, function(error,db_data) {
              if(error) {
                logger.error(
                "DB error [Question]"+
                "\n \t" + `select * from Question order by qdate desc `+
                "\n \t" + error);
                  reject('DB ERR');
              }
              else {
                  resolve(db_data);
              }
          });
        }
        else {
          db.query(`select * from Question where qtitle LIKE '%${parameter.searchText}%' 
          or qcontent LIKE '%${parameter.searchText}%'  
          or qwriter LIKE '%${parameter.searchText}%'
          or qadmin_comment LIKE '%${parameter.searchText}%'
          order by qdate desc `, function(error,db_data) {
            if(error) {
              logger.error(
              "DB error [Question]"+
              "\n \t" + `select * from Question where qtitle LIKE '%${parameter.searchText}%' 
              or qcontent LIKE '%${parameter.searchText}%'  
              or qwriter LIKE '%${parameter.searchText}%'
              or qadmin_comment LIKE '%${parameter.searchText}%'
              order by qdate desc `+
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

 function insertQuestion(parameters) {
   return new Promise ((resolve, reject) => {
       db.query(`Insert into Question set qtitle = '${parameters.qtitle}', qcontent = '${parameters.qcontent}', qwriter = '${parameters.qwriter}', qdate = '${parameters.qdate}'`, function(error ,db_data) {
        if (error) {
            logger.error(
                "DB error [Question]"+
                "\n \t" + `Insert into Question set qtitle = '${parameters.qtitle}', qcontent = '${parameters.qcontent}', qwriter = '${parameters.qwriter}', qdate = '${parameters.qdate}'` +
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
 function updateQuestion(parameters) {
  return new Promise ((resolve, reject) => {
      db.query(`Update Question set qtitle = '${parameters.qtitle}', qcontent = '${parameters.qcontent}', qwriter = '${parameters.qwriter}', qdate = '${parameters.qdate}' where qid ='${parameters.qidx}'`, function(error ,db_data) {
       if (error) {
           logger.error(
               "DB error [Question]"+
               "\n \t" + `Update Question set qtitle = '${parameters.qtitle}', qcontent = '${parameters.qcontent}', qwriter = '${parameters.qwriter}', qdate = '${parameters.qdate}' where qid ='${parameters.qidx}'` +
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

 function updateQuestionAdmin(parameters) {
  return new Promise ((resolve, reject) => {
      db.query(`Update Question set qadmin_comment = '${parameters.adminComment}' WHERE qid = '${parameters.qid}'`, function(error ,db_data) {
       if (error) {
           logger.error(
               "DB error [Question]"+
               "\n \t" + `Update Question set qadmin_comment = '${parameters.adminComment}' WHERE qid = '${parameters.qid}''`+
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


 function deleteQuestion(parameters) {
    return new Promise ((resolve, reject) => {
        db.query(`Delete from Question WHERE qid = '${parameters.qidx}'`, function(error ,db_data) {
         if (error) {
             logger.error(
                 "DB error [Question]"+
                 "\n \t" + `Delete from Question WHERE qid = '${parameters.qidx}'` +
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
 

function getQuestionDetail(parameters) {
  return new Promise ((resolve, reject) => {
      db.query(`select * from Question where qid ='${parameters.qid}'`, function(error, db_data) {
        if (error) {
            logger.error(
                "DB error [Question]"+
                "\n \t" + `select * from Question where qid ='${parameters.qid}'`+
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

module.exports = {
    getQuestion,
    getQuestionDetail,
    insertQuestion,
    deleteQuestion,
    updateQuestion,
    updateQuestionAdmin
}