const express=require('express')
const router =express.Router();
const passport=require('passport')
const user_controller=require('../controllers/userControllers')
router.get('/profile',user_controller.profile)
router.get('/sign-up', user_controller.signUp);
router.get('/sign-in', user_controller.signIn);
router.post('/create',user_controller.create)


// use passport as a middleware to authenticate
router.post('/create-session',
user_controller.createSession)
module.exports=router