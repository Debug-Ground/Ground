 const mysql = require('mysql')
 require('dotenv').config();
 const crypto = require('crypto');
 
 var envArr = [process.env.host, process.env.port, process.env.user, process.env.password, process.env.database]
 const algorithm = 'aes-192-cbc';
 const key = process.env.SecretKey;
 const iv = Buffer.alloc(16, 0);
 var decipher = crypto.createDecipheriv(algorithm, key, iv);
 var envList =[];

 for(env of envArr) {
    decipher = crypto.createDecipheriv(algorithm, key, iv);
    let envData = decipher.update(env, 'hex', 'utf8');
    envData += decipher.final('utf8');
    envList.push(envData);
    envData = "";
 }
 const db_config = {
     host : envList[0],
     port : envList[1],
     user : envList[2],
     password : envList[3],
     database : envList[4]
 };

 const db = mysql.createConnection(db_config);
 handleDisconnect(db);
 function handleDisconnect(client){
     client.on('error', function (error) {
         if(!error.fatal) return;
         if (error.code !== 'PROTOCOL_CONNECTION_LOST') throw error;
          console.error('> Re-connecting lost MySQL connection : '+error.stack);
          db = mysql.createConnection(client.config);
          handleDisconnect(db);
          db.connect();
     });
 }

 module.exports = db;