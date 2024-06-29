const mongoose = require('mongoose');
require("dotenv").config()

mongoose.connect(process.env.DATABASE_CONNECT)
.then(()=>{
    console.log("Database Connected");
})
.catch((err)=>{
    console.log(err)
})

module.exports = mongoose.connection;
