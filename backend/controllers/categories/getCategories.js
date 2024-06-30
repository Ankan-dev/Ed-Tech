let category=require("../../models/category-model");

let getCategories= async (req,res)=>{
    try{
        let getAllCategories= await category.find();
        if(getAllCategories){
            res.json({allCategories:getAllCategories,success:true});
        }else{
            res.json({message:"categories not present",success:false})
        }
    }catch(error){
        res.json({message:error.message,success:false})
    }
}

module.exports=getCategories;