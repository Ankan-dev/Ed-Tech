const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.send("router working perfectly");
})

module.exports=router;