const mongoose=require('mongoose');

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
    teacherOrStudent:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    picture:{
        type:String
    }
})

module.exports=mongoose.model("Users",userSchema);
//fkVGza8RP7Ayq6eV