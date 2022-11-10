var express = require('express');
var router = express.Router();
const electronics_controllers= require('../controllers/electronics');

/* GET home page. */
router.get('/',electronics_controllers.electronics_view_all_Page);
  


module.exports = router;