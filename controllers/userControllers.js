const User =require('../models/user')
module.exports.profile=function(req,res){
    return res.render('user_profile',{
        title: 'profile'
    })
}
//to render signup page
module.exports.signIn=function(req,res){
    return res.render('user_sign',{
        title: 'signin'
    })
}
//to render signin page
module.exports.signUp=function(req,res){
    return res.render('user_signup',{
        title:"signup"

    })
}
///to get sign up data

module.exports.create=function(req,res){
    if (req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('error in finding user in signing up'); return}

        if (!user){
            User.create(req.body, function(err, user){
                if(err){console.log('error in creating user while signing up'); return}

                return res.redirect('/users/sign-in');
            })
        }else{
            return res.redirect('back');
        }

    });
}

// sign in and create a session for the user
module.exports.createSession = function(req, res){  
    return res.redirect('/');
}