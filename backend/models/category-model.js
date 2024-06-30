const mongoose =require('mongoose');

const categorySchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    products:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'products'
        }
    ]
})

module.exports=mongoose.model("categories",categorySchema);