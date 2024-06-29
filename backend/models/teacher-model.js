const mongoose=require('mongoose');
//mongoose.connect("mongodb+srv://ankan12000220057:fkVGza8RP7Ayq6eV@alldatastorage.ibme5vj.mongodb.net/?retryWrites=true&w=majority&appName=AllDataStorage")

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
//fkVGza8RP7Ayq6eV