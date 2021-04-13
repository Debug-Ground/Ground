var db = require('../config/db');

function getauth() {
    return new Promise ((resolve, reject) => {
        db.query(`select * from UserInfo`, function(err,result) {
            if(err) {
                reject(err);
            }
            else {
                resolve(result);
            }
        });
    })
};

module.exports = {
    getauth
}