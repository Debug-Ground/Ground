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

function insert_accident(parameters) {
    return new Promise ((resolve, reject) => {
        db.query(`INSERT INTO Accident SET aPeople = '${parameters.aPeople}',
            aGender = '${parameters.aGender}',
            aPhone = '${parameters.aPhone}',
            aGuardian = '${parameters.aGuardian}',
            aDate = NOW(),
            aKind = '${parameters.aKind}',
            aDetail = '${parameters.aDetail}',
            aLocation = '${parameters.aLocation}',
            aImage = '${parameters.aImage}',
            aMemo = '${parameters.aMemo}'`, function(err,db_data) {
            if (err) {
                logger.error(
                    "DB error [Accident]"+
                    "\n \t" + `INSERT INTO Accident SET aPeople = '${parameters.aPeople}',
                    aGender = '${parameters.aGender}',
                    aPhone = '${parameters.aPhone}',
                    aGuardian = '${parameters.aGuardian}',
                    aKind = '${parameters.aKind}',
                    aDetail = '${parameters.aDetail}',
                    aLocation = '${parameters.aLocation}',
                    aImage = '${parameters.aImage}',
                    aMemo = '${parameters.aMemo}'`+
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

function update_accident(parameters) {
    return new Promise ((resolve, reject) => {
        db.query(`UPDATE Accident SET aPeople = '${parameters.aPeople}',
            aGender = '${parameters.aGender}',
            aPhone = '${parameters.aPhone}',
            aGuardian = '${parameters.aGuardian}',
            aKind = '${parameters.aKind}',
            aDetail = '${parameters.aDetail}',
            aLocation = '${parameters.aLocation}',
            aImage = '${parameters.aImage}',
            aMemo = '${parameters.aMemo}' WHERE aid = '${parameters.aid}'`, function(err,db_data) {
            if (err) {
                logger.error(
                    "DB error [Accident]"+
                    "\n \t" + `UPDATE Accident SET aPeople = '${parameters.aPeople}',
                    aGender = '${parameters.aGender}',
                    aPhone = '${parameters.aPhone}',
                    aGuardian = '${parameters.aGuardian}',
                    aKind = '${parameters.aKind}',
                    aDetail = '${parameters.aDetail}',
                    aLocation = '${parameters.aLocation}',
                    aImage = '${parameters.aImage}',
                    aMemo = '${parameters.aMemo}' WHERE aid = '${parameters.aid}'`+
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

function select_accidentDetail(parameters) {
    return new Promise ((resolve, reject) => {
        db.query(`SELECT * FROM Accident WHERE aid = '${parameters.aid}'`, function(err,db_data) {
            if (err) {
                logger.error(
                    "DB error [Accident]"+
                    "\n \t" + `SELECT * FROM Accident WHERE aid = '${parameters.aid}'`+
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
function update_anNotice(parameters) {
    return new Promise ((resolve, reject) => {
        db.query(`UPDATE AdminNotice SET antitle= '${parameters.antitle}', ancontent= '${parameters.ancontent}' , anwriter = '운영자' , andate = NOW() WHERE anid = '${parameters.anid}' `, function(err,db_data) {
            if (err) {
                logger.error(
                    "DB error [AdminNotice]"+
                    "\n \t" + `UPDATE AdminNotice SET antitle= '${parameters.antitle}', ancontent= '${parameters.ancontent}' , anwriter = '운영자' , andate = NOW()`+
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

function select_TodayWorker() {
    return new Promise ((resolve, reject) => {
        db.query(`SELECT COUNT(atid) AS cnt FROM ( SELECT atid FROM Attendance WHERE atDate LIKE CONCAT('%', DATE_FORMAT(NOW(),'%Y-%m-%d'),'%') GROUP BY atid) A`, function(err,db_data) {
            if (err) {
                logger.error(
                    "DB error [Attendance]"+
                    "\n \t" + `SELECT COUNT(atid) AS cnt FROM ( SELECT atid FROM Attendance WHERE atDate LIKE CONCAT('%', DATE_FORMAT(NOW(),'%Y-%m-%d'),'%') GROUP BY atid) A`+
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
        db.query(`SELECT a.adate,a.cnt, @va := @va + a.cnt as cum1 FROM (
            SELECT * FROM( SELECT DATE_FORMAT(aa.temp_date, '%Y-%m') adate, COUNT(w.wDate) AS cnt FROM temp_date aa 
            LEFT JOIN Worker w ON (w.wDate = aa.temp_date) GROUP BY adate) a WHERE adate LIKE CONCAT('%',DATE_FORMAT(NOW(),'%Y'),'%') GROUP BY adate ) a,
            (SELECT @va := 0) b`, function(err,db_data) {
            if (err) {
                logger.error(
                    "DB error [Worker]"+
                    "\n \t" + `
                        SELECT a.adate,a.cnt, @va := @va + a.cnt as cum1 FROM (
                        SELECT * FROM( SELECT DATE_FORMAT(aa.temp_date, '%Y-%m') adate, COUNT(w.wDate) AS cnt FROM temp_date aa 
                        LEFT JOIN Worker w ON (w.wDate = aa.temp_date) GROUP BY adate) a WHERE adate LIKE CONCAT('%',DATE_FORMAT(NOW(),'%Y'),'%') GROUP BY adate ) a,
                        (SELECT @va := 0) b`+
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


function select_WorkStatusDetail(parameters) {
    return new Promise ((resolve, reject) => {
        db.query(`SELECT * , ROUND(((TIMESTAMPDIFF(DAY, wsStartDate, NOW()))/(TIMESTAMPDIFF(DAY, wsStartDate, wsEndDate))) * 100) AS percent FROM WorkStatus WHERE wsid = '${parameters.wsid}'`, function(err,db_data) {
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

function insert_WorkStatus(parameters) {
    return new Promise ((resolve, reject) => {
        db.query(`INSERT INTO WorkStatus SET wsManager = '${parameters.wsManager}',
            wsManagerRank = '${parameters.wsManagerRank}',
            wsWorkerNum = '${parameters.wsWorkerNum}',
            wsName = '${parameters.wsName}',
            wsStartDate = '${parameters.wsStartDate}',
            wsEndDate = '${parameters.wsEndDate}',
            wsLocation = '${parameters.wsLocation}',
            wsMemo = '${parameters.wsMemo}'
             `, function(err,db_data) {
            if (err) {
                logger.error(
                    "DB error [Worker]"+
                    "\n \t" + `INSERT INTO WorkStatus SET wsManager = '${parameters.wsManager}',
                    wsManagerRank = '${parameters.wsManagerRank}',
                    wsWorkerNum = '${parameters.wsWorkerNum}',
                    wsName = '${parameters.wsName}',
                    wsStartDate = '${parameters.wsStartDate}',
                    wsEndDate = '${parameters.wsEndDate}',
                    wsLocation = '${parameters.wsLocation}',
                    wsMemo = '${parameters.wsMemo}'`+
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

function update_WorkStatus(parameters) {
    return new Promise ((resolve, reject) => {
        db.query(`UPDATE WorkStatus SET wsManager = '${parameters.wsManager}',
            wsManagerRank = '${parameters.wsManagerRank}',
            wsWorkerNum = '${parameters.wsWorkerNum}',
            wsName = '${parameters.wsName}',
            wsStartDate = '${parameters.wsStartDate}',
            wsEndDate = '${parameters.wsEndDate}',
            wsLocation = '${parameters.wsLocation}',
            wsMemo = '${parameters.wsMemo}' WHERE wsid = '${parameters.wsid}'
             `, function(err,db_data) {
            if (err) {
                logger.error(
                    "DB error [Worker]"+
                    "\n \t" + `UPDATE WorkStatus SET wsManager = '${parameters.wsManager}',
                    wsManagerRank = '${parameters.wsManagerRank}',
                    wsWorkerNum = '${parameters.wsWorkerNum}',
                    wsName = '${parameters.wsName}',
                    wsStartDate = '${parameters.wsStartDate}',
                    wsEndDate = '${parameters.wsEndDate}',
                    wsLocation = '${parameters.wsLocation}',
                    wsMemo = '${parameters.wsMemo}' WHERE wsid = '${parameters.wsid}'`+
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

function select_WorkerStatus() {
    return new Promise ((resolve, reject) => {
        db.query(`SELECT wsName, wsEndDate, sStatus FROM WorkStatus LIMIT 7;`, function(err,db_data) {
            if (err) {
                logger.error(
                    "DB error [WorkStatus]"+
                    "\n \t" + `SELECT wsName, wsEndDate, sStatus FROM WorkStatus LIMIT 7;`+
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

function insert_mainChecklist(parameters) {
    return new Promise ((resolve, reject) => {
        db.query(`Insert Into CheckList SET cList='${parameters.cList}'`, function(err,db_data) {
            if (err) {
                logger.error(
                    "DB error [CheckList]"+
                    "\n \t" + `Insert Into CheckList SET cList='${parameters.cList}'`+
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
function select_mainChecklist() {
    return new Promise ((resolve, reject) => {
        db.query(`SELECT cList FROM CheckList`, function(err,db_data) {
            if (err) {
                logger.error(
                    "DB error [CheckList]"+
                    "\n \t" + `SELECT cList FROM CheckList`+
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

function delete_mainChecklist(parameters) {
    return new Promise ((resolve, reject) => {
        db.query(`Delete FROM CheckList WHERE cList = '${parameters.cList}'`, function(err,db_data) {
            if (err) {
                logger.error(
                    "DB error [CheckList]"+
                    "\n \t" + `Delete FROM CheckList WHERE cList = '${parameters.cList}'`+
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

function select_manpower() {
    return new Promise ((resolve, reject) => {
        db.query(`SELECT wid, wName, wRegular, wDate FROM Worker`, function(err,db_data) {
            if (err) {
                logger.error(
                    "DB error [CheckList]"+
                    "\n \t" + `SELECT cList FROM CheckList`+
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

function select_manpowercheck(parameters) {
    return new Promise ((resolve, reject) => {
        db.query(`SELECT wid,wName,wGender,wEmail,wPhone,wRegular,wImage,wAddress,wMemo FROM Worker WHERE wid = '${parameters.wid}'`, function(err,db_data) {
            if (err) {
                logger.error(
                    "DB error [Worker]"+
                    "\n \t" + `SELECT wName FROM Worker`+
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
function update_manpower(parameters) {
    return new Promise ((resolve, reject) => {
        db.query(`UPDATE Worker SET wName = '${parameters.wName}',
        wRegular = '${parameters.wRegular}',
        wGender = '${parameters.wGender}',
        wEmail = '${parameters.wEmail}',
        wPhone = '${parameters.wPhone}',
        wAddress = '${parameters.wAddress}',
        wImage = '${parameters.wImage}',
        wMemo = '${parameters.wMemo}' WHERE wid = '${parameters.wid}'`, function(err,db_data) {
            if (err) {
                logger.error(
                    "DB error [Worker]"+
                    "\n \t" + `UPDATE Worker SET wName = '${parameters.wName}',
                    wRegular = '${parameters.wRegular}',
                    wGender = '${parameters.wGender}',
                    wEmail = '${parameters.wEmail}',
                    wPhone = '${parameters.wPhone}',
                    wImage = '${parameters.wImage}',
                    wAddress = '${parameters.wAddress}',
                    wMemo = '${parameters.wMemo}' WHERE wid = '${parameters.wid}'`+
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
function select_timecard() {
    return new Promise ((resolve, reject) => {
        db.query(`SELECT wid, wImage ,wName ,wRegular, wAttendanceDate, wEquipment FROM Worker`, function(err,db_data) {
            if (err) {
                logger.error(
                    "DB error [Worker]"+
                    "\n \t" + `select wIamge ,wName ,wRegular, wAttendanceDate, wEquipment from worker
                    `+
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
function select_regularCount() {
    return new Promise ((resolve, reject) => {
        db.query(`SELECT wRegular,COUNT(wRegular) AS count FROM Worker GROUP BY wRegular`, function(err,db_data) {
            if (err) {
                logger.error(
                    "DB error [Worker]"+
                    "\n \t" + `SELECT wRegular,COUNT(wRegular) AS count FROM Worker GROUP BY wRegular`+
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
function select_mainWorker() {
    return new Promise ((resolve, reject) => {
        db.query(`SELECT wName, wRegular FROM Worker WHERE wDate LIKE CONCAT('%', DATE_FORMAT(NOW(),'%Y-%m-%d'),'%') `, function(err,db_data) {
            if (err) {
                logger.error(
                    "DB error [Worker]"+
                    "\n \t" + `SELECT wName, wRegular FROM Worker WHERE wDate LIKE CONCAT('%', DATE_FORMAT(NOW(),'%Y-%m-%d'),'%')`+
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
function select_mainAttendance() {
    return new Promise ((resolve, reject) => {
        db.query(`SELECT w.wName, w.wRegular, a.atDate, w.wImage FROM Attendance a JOIN Worker w ON a.wid = w.wid ORDER BY a.atDate DESC LIMIT 5`, function(err,db_data) {
            if (err) {
                logger.error(
                    "DB error [Worker]"+
                    "\n \t" + `SELECT wRegular,COUNT(wRegular) AS count FROM Worker GROUP BY wRegular`+
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
// 안드로이드 보내주는 부분
function select_Attendance(parameters) {
    return new Promise ((resolve, reject) => {
        db.query(`SELECT * FROM Attendance WHERE wid = '${parameters.wid}'`, function(err,db_data) {
            if (err) {
                logger.error(
                    "DB error [Attendance]"+
                    "\n \t" + `SELECT * FROM Attendance WHERE wid = '${parameters.wid}'`+
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

//안드로이드에서 값 받는것
function insert_Attendance(parameters) {
    return new Promise ((resolve, reject) => {
        db.query(`INSERT INTO Attendance SET wid = '${parameters.wid}' , atDate = '${parameters.atDate}'`, function(err,db_data) {
            if (err) {
                logger.error(
                    "DB error [Attendance]"+
                    "\n \t" + `INSERT INTO Attendance SET wid = '${parameters.wid}' , atDate = '${parameters.atDate}'`+
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
    select_Checklist,
    insert_Checklist,
    delete_Checklist,
    select_accident,
    insert_accident,
    update_accident,
    select_accidentDetail,
    update_UserChecklist,
    select_anNotice,
    insert_anNotice,
    update_anNotice,
    select_anNoticeDetail,
    select_accidentCount,
    select_accidentDateCount,
    select_accidentDateCountGraph,
    select_WorkerCountGraph,
    select_WorkerStickGraph,
    select_WorkStatus,
    insert_WorkStatus,
    update_WorkStatus, 
    select_WorkStatusDetail,             
    select_WorkerStatus,
    insert_mainChecklist,
    select_mainChecklist,
    delete_mainChecklist,
    select_manpower,
    select_manpowercheck,
    update_manpower,
    select_timecard,
    select_regularCount,
    select_mainWorker,
    select_mainAttendance,
    select_TodayWorker,
    select_Attendance,
    insert_Attendance                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
}