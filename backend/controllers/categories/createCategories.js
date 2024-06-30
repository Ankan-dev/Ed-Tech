const category=require('../../models/category-model.js')

const createCategory=async(req,res)=>{
    const {name}=req.body;
    try{
        let checkCategory=await category.findOne({name});
        if(checkCategory){
            res.json({message:"category already exists",success:true});
        }else{
            let createCategory=await category.create({name});
            res.json({message:"category is created",success:true});
        }
    }catch(error){
        res.json({message:error.message,success:false});
    }
}

module.exports=createCategory;