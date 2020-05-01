const mongoose = require('mongoose');
var  empolyeSchema = new mongoose.Schema({
    username:{
        type: String
    },
    email:{
        type: String
    },
    password:{
        type: String
    }
});
mongoose.model('employe',empolyeSchema);