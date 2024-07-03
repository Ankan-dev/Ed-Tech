const Product = require("../../models/product-model.js");

const getAllProducts = async (req,res)=>{
    const allProducts= await Product.find();
    try{
        if(allProducts){
            res.json({products:allProducts,success:true});
        }else{
            res.json({products:"No products are present",success:false});
        }
    }catch(error){
        res.json({message:error.message,success:false});
    }
}

const getProductsById = async (req,res)=>{
    let id=req.params.id;
    const findProducts=await Product.findById(id);
    try{
        if(findProducts){
            res.json({products:findProducts,success:true});
        }else{
            res.json({message:"products not present",success});
        }
    }catch(error){
        res.json({message:error.message,success:false});
    }
}

module.exports={getAllProducts,getProductsById};