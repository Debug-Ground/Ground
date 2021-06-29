var express = require('express');
var router = express.Router();
var groupController = require('../controller/groupController')

/* GET home page. */
router.get('/', groupController.Group);
<<<<<<< HEAD

router.get('/group_detail', groupController.GroupDetail);
=======
router.get('/detail/:num',groupController.Group);

>>>>>>> 45f18ce68b14093d4b46b1157335b414565489ee
  
module.exports = router;