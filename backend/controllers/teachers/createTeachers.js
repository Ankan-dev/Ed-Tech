const teacher = require('../../models/teacher-model.js');

const createTeacher=async (req,res)=>{
    const { fullname,email,password } = req.body;
    try{
        const checkTeacher= await teacher.findOne({email});
        if(checkTeacher)
            return res.json({message:"Teacher already exists",success:false});
        const createTeacher= await teacher.create({fullname,email,password });
        if(createTeacher){
            res.json({message:"Teacher created",success:true});
        }else{
            res.json({message:"Teacher not create",success:false});
        }
    }catch(error){
        res.json({message:error.message,success:false});
    }
}

module.exports=createTeacher;