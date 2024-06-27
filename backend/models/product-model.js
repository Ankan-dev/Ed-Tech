const mongoose=require('mongoose');
//mongoose.connect("mongodb+srv://ankan12000220057:fkVGza8RP7Ayq6eV@alldatastorage.ibme5vj.mongodb.net/?retryWrites=true&w=majority&appName=AllDataStorage")

const productSchema= mongoose.Schema({
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
    bgColor:{
        type: String,
    },
    panelColor:{
        type:String
    },
    textColor:{
        type:String
    }
})

module.exports=mongoose.model("products",productSchema);
//fkVGza8RP7Ayq6eV