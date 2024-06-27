const mongoose=require('mongoose');

const userSchema= mongoose.Schema({
    fullname:{
        type:String,
        required:true,
        trim:true,
        minLength:3
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cart:{
        type:Array,
        default:[]
    },
    teacherOrStudent:{
        type:String,
        required:true
    },
    orders:{
        type: Array,
        default:[]
    },
    contact:{
        type:String,
        required:true
    },
    picture:{
        type:String
    }
})

module.exports=mongoose.model("users",userSchema);
//fkVGza8RP7Ayq6eV