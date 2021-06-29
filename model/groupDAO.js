var db = require('../config/db');
var logger = require('../config/logger');

function getGroup() {
    return new Promise ((resolve, reject) => {
        db.query(`select * from Class`, function(err,db_data) {
            if (err) {
                logger.error(
                    "DB error [Group]"+
                    "\n \t" + `select * from Group`+
                    "\n \t" + err);
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
    getGroup
}