const express=require('express');
const app=express();
const db=require('./config/database-connect')
const cookieParser =require('cookie-parser');
const userRouter=require("./routes/userRouter.js");
const categoryRouter=require("./routes/categoryRouter.js")
const productsRouter=require("./routes/productsRouter.js");

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use("/app/user",userRouter);
app.use("/app/category",categoryRouter);
app.use("/app/products",productsRouter);

app.listen(3000);
