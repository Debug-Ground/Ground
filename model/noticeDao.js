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

module.exports = {
    getNotice
}