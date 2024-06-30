const category=require('../../models/category-model.js')

const createCategory=async(req,res)=>{
    const {categoryName}=req.body;
    try{
        let checkCategory=await category.findOne({categoryName});
        if(checkCategory){
            res.json({message:"category already exists",success:true});
        }else{
            let createCategory=await category.create({categoryName});
            res.json({message:"category is created",success:true});
        }
    }catch(error){
        res.json({message:error.message,success:false});
    }
}

module.exports=createCategory;