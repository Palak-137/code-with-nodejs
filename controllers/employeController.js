const express = require('express');
var router = express.Router();
const mongoose= require('mongoose');
const employe = mongoose.model('employe');

router.get('/',(req,res)=>{
    res.render('employe/login',);
});

router.post('/',(req,res)=>{
   insertcode(req,res);
});
 
function insertcode(req,res){
     var employes = new employe();
     employes.name = req.body.name;
     employes.email = req.body.email;
     employes.password = req.body.password;
     employes.save((err,doc)=>{
         if(!err)
         {res.redirect('/employe/list')}
         else
         {
             console.log("error in code dear :"+ err);
         }
     })
}

router.get('/list',(req,res)=>{
    res.json('from list');
});
module.exports = router;