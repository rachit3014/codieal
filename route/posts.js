const express=require('express')
const router =express.Router();
const passport=require('passport')
const passportController=require('../controllers/posts_controller')
router.post('/create',passport.checkAuthentication,passportController.create)
module.exports=router   