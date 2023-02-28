const express=require('express');
const cookieParser = require('cookie-parser');
const port=8000;
const app=express();
//to convert the binary into utf 8
app.use(express.urlencoded())
//to connect database
const db=require('./config/mongoose')
// to use express layout
const expresslayout=require('express-ejs-layouts')
app.use(expresslayout)
//used for seesssion cookie
const session =require('express-session')
const passport=require('passport')
const passportLocal=require('./config/paasport_local_stargety')
const MongoStore = require('connect-mongo').session
app.use(cookieParser());
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
// to use static folder
app.use(express.static('./assets'))

//set up view engine
app.set('view engine','ejs')
app.set('views','./views')
//to encrypt the cookie
app.use(session({
    name:'codieal',
    //TO do later
    secret:'balshsomething',
    saveUninitialized:false,
    resave:false,
    Cookie:
    {
        maxAge:(1000*60*100)
    },
    //to store the session in mongo db
        store:new MongoStore({
            mongooseConnection: db,
            autoRemove: 'disabled'
        },
        function(err)
        {
            console.log(err||'connect db-mongo')

        }
        )
}))                                                                                                                                                                                                                                                                                                 
app.use(passport.initialize());
app.use(passport.session());
//to make acessible the user detail in html
app.use(passport.setAuthenticatedUser);
///
app.use('/',require('./route'))
//to check server is up or not
app.listen(port,function(err){
    if (err){
        console.log('error',err);
    }
    console.log("yup my server is ruuning ",port);
})