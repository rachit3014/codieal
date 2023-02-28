const express=require('express')
const router=express.Router();

const home_controller=require('../controllers/homeController')
router.get('/',home_controller.home)

router.use('/users', require('./user'));
router.use('/posts', require('./posts'));
// for anty further routes, access from here
// router.use('/routerName', require('./routerfile));

module.exports=router