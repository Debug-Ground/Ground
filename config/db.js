 const mysql = require('mysql')
 require('dotenv').config();
 const crypto = require('crypto');
 
 const db_config = {
    host : process.env.host,
    port : process.env.port,
    user : process.env.user,
    password : process.env.password,
    database : process.env.database
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