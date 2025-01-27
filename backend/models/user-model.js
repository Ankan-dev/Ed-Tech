const mongoose=require('mongoose');
const bcrypt =require('bcrypt')

const userSchema= mongoose.Schema({
    fullname:{
        type:String,
        require:true,
        trim:true,
        minLength:3
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    contact:{
        type:String
    },
    picture:{
        type:String
    },
    purchasedCourses:[
       {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'products'
       }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    },
    refreshToken:{
        type:String
    }
})



module.exports=mongoose.model("Users",userSchema);
