var db = require('../config/db');

function getindex() {
    return new Promise ((resolve, reject) => {
        db.query(`select * from Gallery`, function(err,result) {
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
    getindex
}