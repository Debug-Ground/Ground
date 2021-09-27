const fs = require('fs');
var multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req , file , cb ) {
      cb(null, 'public/upload')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname) 
    }
  })

var upload = multer({ storage: storage });

module.exports = upload;