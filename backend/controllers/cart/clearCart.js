const cartModel = require('../../models/cart-model.js');
const mongoose = require('mongoose');

const clearCart= async(req,res)=>{
    //const id=req.params.userId;
    const userId = new mongoose.Types.ObjectId('6683b3d5dc4c2a217c497817');

    try{
        const Cart=await cartModel.findOne({user:userId});
        if(!Cart){
            Cart=new cartModel({items:[]});
        }else{
            Cart.items=[];
        }
        await Cart.save();
        res.json({message:"cart has been cleared",success:true});
    }catch(error){
        res.json({message:error.message,success:false})
    }
    
    
}

module.exports=clearCart