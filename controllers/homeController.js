const Post=require('../models/posts')
module.exports.home= function(req,res){
    // return res.end('<h1>it is my home page</h1>')
    Post.find({},function(err,posts){
      return res.render('home',{
        title :'Home',
        posts:posts
      })      
    })




}
// module.exports.actionName = function(req, res){}