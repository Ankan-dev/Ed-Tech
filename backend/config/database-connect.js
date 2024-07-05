const mongoose = require('mongoose');


mongoose.connect(process.env.DATABASE_CONNECT)
.then(()=>{
    console.log("Database Connected");
})
.catch((err)=>{
    console.log(err)
})

module.exports = mongoose.connection;
