const mongoose=require('mongoose');
//mongoose.connect("mongodb+srv://ankan12000220057:fkVGza8RP7Ayq6eV@alldatastorage.ibme5vj.mongodb.net/?retryWrites=true&w=majority&appName=AllDataStorage")

const productSchema= mongoose.Schema({
    creator:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'teachers'
    },
    category:{
        type:String,
        require:true
    },
    image:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    discount:{
        type:Number,
        default:0
    },
    enrolledStudents:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Users'
        }
    ]
})

module.exports=mongoose.model("products",productSchema);
