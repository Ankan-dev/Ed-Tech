const express=require('express');
const app=express();
require("dotenv").config()
const db=require('./config/database-connect')
const cookieParser =require('cookie-parser');
const userRouter=require("./routes/userRouter.js");
const categoryRouter=require("./routes/categoryRouter.js")
const productsRouter=require("./routes/productsRouter.js");
const cartRouter=require("./routes/cartRouter.js");
const teacherRouter = require("./routes/teacherRouter.js");

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

//const Port=process.env.PORT || 8080

app.use("/app/user",userRouter);
app.use("/app/category",categoryRouter);
app.use("/app/products",productsRouter);
app.use("/app/cart",cartRouter)
app.use("/app/teacher",teacherRouter)

app.listen(3000);
