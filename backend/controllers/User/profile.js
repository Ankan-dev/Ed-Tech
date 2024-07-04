const user=require('../../models/user-model.js');

const profile=async (req,res)=>{
    res.json({user:req.user});
}
module.exports=profile;