 const { TooManyRequests } = require('http-errors')
 const mysql = require('mysql')
 require('dotenv').config();

 const db_config = {
     host : process.env.DB_host,
     port : process.env.DB_port,
     user : process.env.DB_user,
     password : process.env.DB_password,
     database : process.env.DB_database
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