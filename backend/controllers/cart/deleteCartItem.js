const cartModel = require('../../models/cart-model.js');
const mongoose = require('mongoose');

const deleteCartItem= async (req,res)=>{
    const product=req.params.id;
    const userId = req.user._id
    try{
        const Cart= await cartModel.findOne({user:userId})
        //console.log(Cart);
        if(Cart){
            Cart.items=Cart.items.filter(item=>item.product_id.toString()!==product);
            await Cart.save();
            //console.log(Cart);
            res.json({message:"product is removed from the cart",success:"true"});
            
        }else{
            
            res.json({message:"cart not found",success:"false"});
        }

    }catch(error){
        res.json({message:error.message,success:"false"});
    }   
}

module.exports=deleteCartItem