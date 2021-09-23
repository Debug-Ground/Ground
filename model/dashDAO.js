var db = require('../config/db');
var logger = require('../config/logger');

function select_Checklist() {
    return new Promise ((resolve, reject) => {
        db.query(`select * from CheckList`, function(err,db_data) {
            if (err) {
                logger.error(
                    "DB error [CheckList]"+
                    "\n \t" + `select * from CheckList`+
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

function update_UserChecklist(parameters) {
    return new Promise ((resolve, reject) => {
        db.query(`UPDATE Worker SET wIsCheck= '${parameters.wischeck}' where wid = '${parameters.wid}'`, function(err,db_data) {
            if (err) {
                logger.error(
                    "DB error [CheckList]"+
                    "\n \t" + `UPDATE Worker SET wIsCheck= '${parameters.wischeck}' where wid = '${parameters.wid}'`+
                    "\n \t" + err);
                reject('DB ERR');
                //throw error;
            }
            else {
                console.log("확인용/ "+ db_data)
                resolve(db_data);
            }
        });
    })
};


function insert_Checklist(parameters) {
    return new Promise ((resolve, reject) => {
        db.query(`INSERT INTO CheckList SET cList = '${parameters.cList}'`, function(err,db_data) {
            if (err) {
                logger.error(
                    "DB error [CheckList]"+
                    "\n \t" + `INSERT INTO CheckList SET cList = '${parameters.cList}'`+
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


function delete_Checklist(parameters) {
    return new Promise ((resolve, reject) => {
        db.query(`DELETE CheckList WHERE cid = '${parameters.cid}'`, function(err,db_data) {
            if (err) {
                logger.error(
                    "DB error [CheckList]"+
                    "\n \t" + `INSERT INTO CheckList SET cList = '${parameters.cList}'`+
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

function select_accident() {
    return new Promise ((resolve, reject) => {
        db.query(`SELECT * FROM Accident`, function(err,db_data) {
            if (err) {
                logger.error(
                    "DB error [Accident]"+
                    "\n \t" + `SELECT * FROM Accident`+
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

function select_anNotice() {
    return new Promise ((resolve, reject) => {
        db.query(`SELECT * FROM AdminNotice`, function(err,db_data) {
            if (err) {
                logger.error(
                    "DB error [AdminNotice]"+
                    "\n \t" + `SELECT * FROM AdminNotice`+
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

function select_anNoticeDetail(parameters) {
    return new Promise ((resolve, reject) => {
        db.query(`SELECT * FROM AdminNotice WHERE anid= '${parameters.anid}'`, function(err,db_data) {
            if (err) {
                logger.error(
                    "DB error [AdminNotice]"+
                    "\n \t" + `SELECT * FROM AdminNotice anid= '${parameters.anid}'`+
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

function insert_anNotice(parameters) {
    return new Promise ((resolve, reject) => {
        db.query(`INSERT INTO AdminNotice SET antitle= '${parameters.antitle}', ancontent= '${parameters.ancontent}' , anwriter = '운영자' , andate = NOW()`, function(err,db_data) {
            if (err) {
                logger.error(
                    "DB error [AdminNotice]"+
                    "\n \t" + `SELECT * FROM AdminNotice anid= '${parameters.anid}'`+
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

function select_accidentCount() {
    return new Promise ((resolve, reject) => {
        db.query(`SELECT if(aKind IS NULL, "total", aKind) AS kind, COUNT(aKind) AS count FROM Accident GROUP BY aKind WITH ROLLUP`, function(err,db_data) {
            if (err) {
                logger.error(
                    "DB error [Accident]"+
                    "\n \t" + `SELECT if(aKind IS NULL, "total", aKind) AS kind, COUNT(aKind) AS count FROM Accident GROUP BY aKind WITH ROLLUP'`+
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
function select_accidentDateCountGraph() {
    return new Promise ((resolve, reject) => {
        db.query(`SELECT * FROM(select DATE_FORMAT(aa.temp_date, '%Y-%m') date, COUNT(c.aDate) AS cnt FROM temp_date aa 
        LEFT JOIN Accident c ON (c.aDate = aa.temp_date) GROUP BY date) a WHERE date LIKE CONCAT('%',DATE_FORMAT(NOW(),'%Y'),'%')`, function(err,db_data) {
            if (err) {
                logger.error(
                    "DB error [Accident]"+
                    "\n \t" + `SELECT *	FROM(select DATE_FORMAT(aa.temp_date, '%Y-%m') date, COUNT(c.aDate) AS cnt FROM temp_date aa 
                    LEFT JOIN Accident c ON (c.aDate = aa.temp_date) GROUP BY date) a WHERE date LIKE CONCAT('%',DATE_FORMAT(NOW(),'%Y'),'%')
                    '`+
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

function select_accidentDateCount() {
    return new Promise ((resolve, reject) => {
        db.query(`SELECT YEAR('aDate') AS 'date', COUNT(*) AS cnt FROM Accident WHERE aDate LIKE CONCAT('%',DATE_FORMAT(NOW(), '%Y'),'%') GROUP BY 'Date'
                    UNION
                  SELECT MONTH('aDate') AS 'date', COUNT(*) AS cnt FROM Accident WHERE aDate LIKE CONCAT('%',DATE_FORMAT(NOW(), '%Y-%m'),'%') GROUP BY 'Date'
                    UNION
                  SELECT * FROM (SELECT DATE_FORMAT(aa.temp_date, '%Y-%m-%d') date, COUNT(w.wDate) AS cnt FROM temp_date aa
                  LEFT JOIN Worker w ON (w.wDate = aa.temp_date) GROUP BY date) a WHERE date LIKE CONCAT('%', DATE_FORMAT(NOW(),'%Y-%m-%d'),'%') GROUP BY date`, function(err,db_data) {
                if (err) {
                logger.error(
                    "DB error [Accident]"+
                    "\n \t" + `SELECT YEAR('aDate') AS 'date', COUNT(*) AS cnt FROM Accident WHERE aDate LIKE CONCAT('%',DATE_FORMAT(NOW(), '%Y'),'%') GROUP BY 'Date'
                                    UNION
                                SELECT MONTH('aDate') AS 'date', COUNT(*) AS cnt FROM Accident WHERE aDate LIKE CONCAT('%',DATE_FORMAT(NOW(), '%Y-%m'),'%') GROUP BY 'Date'
                                    UNION
                                SELECT * FROM (SELECT DATE_FORMAT(aa.temp_date, '%Y-%m-%d') date, COUNT(w.wDate) AS cnt FROM temp_date aa
                                LEFT JOIN Worker w ON (w.wDate = aa.temp_date) GROUP BY date) a WHERE date LIKE CONCAT('%', DATE_FORMAT(NOW(),'%Y-%m-%d'),'%') GROUP BY date`+
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


function select_WorkerCountGraph() {
    return new Promise ((resolve, reject) => {
        db.query(`SELECT * FROM (SELECT DATE_FORMAT(aa.temp_date, '%Y-%m-%d') date, COUNT(w.wDate) AS cnt FROM temp_date aa
                  LEFT JOIN Worker w ON (w.wDate = aa.temp_date) GROUP BY date) a WHERE date LIKE CONCAT('%', DATE_FORMAT(NOW(),'%Y-%m-%d'),'%') GROUP BY date
                    UNION
                  SELECT IF(DATE('wDate'),null,null) AS date, COUNT(wDate) AS cnt FROM Worker WHERE wdate IS NOT NULL GROUP BY date WITH ROLLUP ;`, function(err,db_data) {
            if (err) {
                logger.error(
                    "DB error [Worker]"+
                    "\n \t" + `SELECT * FROM (SELECT DATE_FORMAT(aa.temp_date, '%Y-%m-%d') date, COUNT(w.wDate) AS cnt FROM temp_date aa
                                LEFT JOIN Worker w ON (w.wDate = aa.temp_date) GROUP BY date) a WHERE date LIKE CONCAT('%', DATE_FORMAT(NOW(),'%Y-%m-%d'),'%') GROUP BY date
                                UNION
                                SELECT IF(DATE('wDate'),null,null) AS date, COUNT(wDate) AS cnt FROM Worker WHERE wdate IS NOT NULL GROUP BY date WITH ROLLUP ;`+
                    "\n \t" + err);
                reject('DB ERR');
                //throw error;
            }
            else {
                resolve(db_data);
            }
        });
    })
}

function select_WorkerStickGraph() {
    return new Promise ((resolve, reject) => {
        db.query(`SELECT * FROM(select DATE_FORMAT(aa.temp_date, '%Y-%m') date, COUNT(w.wDate) AS cnt FROM temp_date aa 
        LEFT JOIN Worker w ON (w.wDate = aa.temp_date) GROUP BY date) a WHERE date LIKE CONCAT('%',DATE_FORMAT(NOW(),'%Y'),'%') GROUP BY date  
        `, function(err,db_data) {
            if (err) {
                logger.error(
                    "DB error [Worker]"+
                    "\n \t" + `SELECT * FROM(select DATE_FORMAT(aa.temp_date, '%Y-%m') date, COUNT(w.wDate) AS cnt FROM temp_date aa 
                    LEFT JOIN Worker w ON (w.wDate = aa.temp_date) GROUP BY date) a WHERE date LIKE CONCAT('%',DATE_FORMAT(NOW(),'%Y'),'%') GROUP BY date`+
                    "\n \t" + err);
                reject('DB ERR');
                //throw error;
            }
            else {
                resolve(db_data);
            }
        });
    })
}

function select_WorkStatus() {
    return new Promise ((resolve, reject) => {
        db.query(`SELECT wsid, wsName, wsLocation, ROUND(((TIMESTAMPDIFF(DAY, wsStartDate, NOW()))/(TIMESTAMPDIFF(DAY, wsStartDate, wsEndDate))) * 100) AS percent, wsStartDate, wsEndDate, wsManager FROM WorkStatus`, function(err,db_data) {
            if (err) {
                logger.error(
                    "DB error [Worker]"+
                    "\n \t" + `SELECT wsid, wsName, wsLocation, wsStartDate, wsEndDate, wsManager FROM WorkStatus`+
                    "\n \t" + err);
                reject('DB ERR');
                //throw error;
            }
            else {
                resolve(db_data);
            }
        });
    })
}






module.exports = {
    select_Checklist,
    insert_Checklist,
    delete_Checklist,
    select_accident,
    update_UserChecklist,
    select_anNotice,
    insert_anNotice,
    select_anNoticeDetail,
    select_accidentCount,
    select_accidentDateCount,
    select_accidentDateCountGraph,
    select_WorkerCountGraph,
    select_WorkerStickGraph,
    select_WorkStatus                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
}