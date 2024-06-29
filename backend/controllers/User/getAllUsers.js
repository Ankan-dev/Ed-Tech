const user=require('../../models/user-model.js')

const getAllUsers=async (req,res)=>{
    let allUsers=await user.find().sort({createdAt:-1});
    try{
        if(allUsers){
            res.json({"All-users":allUsers,success:true});
        }else{
            res.json({"All-users":"no users found",success:false});
        }
    }catch(error){
        res.json({"All-users":error.message ,success:false});
    }
}

module.exports=getAllUsers;