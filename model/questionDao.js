var db = require('../config/db');
var logger = require('../config/logger');

function getQuestion() {
    return new Promise ((resolve, reject) => {
        db.query(`select * from Question`, function(error,db_data) {
            if (error) {
                logger.error(
                    "DB error [Question]"+
                    "\n \t" + `select * from Question` +
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

 function insertQuestion(parameters) {
   return new Promise ((resolve, reject) => {
       db.query(`Insert into Question set qtitle = '${parameters.qtitle}', qcontent = '${parameters.qcontent}', qwriter = '${parameters.qwriter}', qdate = '${parameters.qdate}'`, function(error ,db_data) {
        if (error) {
            logger.error(
                "DB error [Notice]"+
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
    insertQuestion
}