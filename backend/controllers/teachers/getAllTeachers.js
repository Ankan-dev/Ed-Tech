const teacher = require('../../models/teacher-model.js');


const getAllTeachers= async (req,res)=>{
    try{
        const allTeachers=await teacher.find()

        if(allTeachers){
            res.json({Teachers:allTeachers,success:true});
        }else{
            res.json({message:"No teachers in the record",success:false});
        }
    }catch(error){
        res.json({message:error.message,success:false});
    }
}

module.exports=getAllTeachers;