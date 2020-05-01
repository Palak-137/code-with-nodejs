const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/employeDB',{useNewUrlParser:true},(err)=>{
    if(!err){console.log("mongoDB is cool")}
    else{console.log('error in connection :'+ err)}
});

require('./employe.model');