var db = require('../config/db');

function getGroup() {
    return new Promise ((resolve, reject) => {
        db.query(`select * from Group`, function(err,db_data) {
            if (error) {
                logger.error(
                    "DB error [Group]"+
                    "\n \t" + `select * from Group`+
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
    getGroup
}