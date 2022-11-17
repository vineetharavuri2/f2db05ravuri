var express = require('express');
var router = express.Router();
const electronics_controllers= require('../controllers/electronics');

/* GET home page. */
router.get('/',electronics_controllers.electronics_view_all_Page);
  
/* GET detail electronics page */ 
router.get('/detail', electronics_controllers.electronics_view_one_Page); 

/* GET create electronics page */ 
router.get('/create', electronics_controllers.electronics_create_Page); 

/* GET create update page */ 
router.get('/update', electronics_controllers.electronics_update_Page);

/* GET delete electronics page */ 
router.get('/delete', electronics_controllers.electronics_delete_Page); 

module.exports = router;