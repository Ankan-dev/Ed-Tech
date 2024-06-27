const express=require('express');
const app=express();
const db=require('./config/database-connect')
const cookieParser =require('cookie-parser');
const userRouter=require("./routes/userRouter");

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use("/user",userRouter);

app.listen(3000);
