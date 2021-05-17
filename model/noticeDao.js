var db = require('../config/db');

function getNotice() {
    return new Promise ((resolve, reject) => {
        db.query(`select * from Notice`, function(err,db_data) {
            if(err) {
                reject(err);
            }
            else {
                resolve(db_data);
            }
        });
    })
};

// function insertNotice() {
//   return new Promise ((resolve, reject) => {
//       db.query(`Insert into Notice set ntitle = '${ntitle}', ncontent = '${ncontent}', nwriter = '${nwriter}', ndate = '${date}'`, function(err,db_data) {
//           if(err) {
//               reject(err);
//           }
//           else {
//               resolve(db_data);
//           }
//       });
//   })
// };

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