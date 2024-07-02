const mongoose =require('mongoose');

const cartItemSchema = new mongoose.Schema({
    creator:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    product_id:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    desciption:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
})

const cartSchema= new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Users'
    },
    items:[cartItemSchema]
})

module.exports=mongoose.model('carts',cartSchema);