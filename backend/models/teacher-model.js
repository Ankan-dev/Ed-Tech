const mongoose=require('mongoose');
const teacherSchema= mongoose.Schema({
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
    Products:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'products'
        }
    ],
    picture:{
        type:String
    },

})

module.exports=mongoose.model("teachers",teacherSchema);
