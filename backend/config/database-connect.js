const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://ankan12000220057:fkVGza8RP7Ayq6eV@alldatastorage.ibme5vj.mongodb.net/?retryWrites=true&w=majority&appName=AllDataStorage")
.then(()=>{
    console.log("Database Connected");
})
.catch((err)=>{
    console.log(err)
})

module.exports = mongoose.connection;