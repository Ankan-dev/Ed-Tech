const cartModel = require('../../models/cart-model.js');

const getCartDetails= async (req,res)=>{
    const userId=req.user._id;
    try{
        const getCart= await cartModel.findOne({user:userId});
        if(getCart){
            res.json({cart:getCart,success:true});
        }else{
            res.json({message:"cart not found",success:"false"});
        }

    }catch(error){
        res.json({message:error.message,success:"false"});
    }   
}

module.exports=getCartDetails