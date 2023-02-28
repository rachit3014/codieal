const mongoose=require('mongoose')
const commentSchem =new mongoose.Schema({
    content:{
        type :String,
        required:true

    },
    //cooment belongs to a user
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    
        post:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Post'
        }
    },{
        timestamps:true
    
})
const Comment=mongoose.model('Comment',commentSchem)
module.exports=Comment