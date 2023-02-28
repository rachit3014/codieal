const passport=require('passport');
const Localstargety=require('passport-local').Strategy
const User=require('../models/user')
//authentication using passport

passport.use(new Localstargety({
    usernameField:'email'

},
function(email,password,done){
    //find a user establish identity
    User.findOne({email:email},function(err,user){
        if (err){
            console.log('error in finding user---> pssport')
            return done(err)
        }
        if(!user|| user.password!=password){
            console.log('invalid password//username')
            return done(null,false)
        }
        return done(null,user)
    })
}
))
//serializing the user to decide which key is to be kept in the cookie
passport.serializeUser(function(user,done){
    done(null,user.id)
})
//deseializing the user from the key in cookie
passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
        if (err){
            console.log('error in finding user--------->passport')
            return done(err)
        }
        return done(null,user)
    })
})
// to sending the user detail when user login in the page
passport.checkAuthentication=function(req,res,next){
        // if the user is signed in, then pass on the request to the next function(controller's action)
        if (req.isAuthenticated()){
            return next()
        }
        //if the user is not signed in 
        return res.redirect('/users/sign-in')
}
passport.setAuthenticatedUser=function(req,res,next){
    if (req.isAuthenticated()){
        res.locals.user=req.user
    }
    next()
}
module.exports=passport