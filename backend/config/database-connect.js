const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://ankanmandal2001:AVVhWNKDWxZI9Mx7@cluster0.1xwgjkh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("Database Connected");
})
.catch((err)=>{
    console.log(err)
})

module.exports = mongoose.connection;

//AVVhWNKDWxZI9Mx7