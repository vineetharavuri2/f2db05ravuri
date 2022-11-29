var express = require('express');
var router = express.Router();
const electronics_controllers= require('../controllers/electronics');
// A little function to check if we have an authorized user and continue on 

// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
 

/* GET home page. */
router.get('/',secured,electronics_controllers.electronics_view_all_Page);
  
/* GET detail electronics page */ 
router.get('/detail', secured,electronics_controllers.electronics_view_one_Page); 

/* GET create electronics page */ 
router.get('/create', secured,electronics_controllers.electronics_create_Page); 

/* GET create update page */ 
router.get('/update', secured,electronics_controllers.electronics_update_Page);

/* GET delete electronics page */ 
router.get('/delete', secured,electronics_controllers.electronics_delete_Page); 

module.exports = router;