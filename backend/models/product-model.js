const mongoose=require('mongoose');
const productSchema= mongoose.Schema({
    creator:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'teachers'
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'categories'
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
