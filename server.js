require('./models/db');
const express = require('express');
var app = express();
const emphbs = require('express-handlebars');
const path = require('path');
const bodyparser = require('body-parser')

app.use(bodyparser.urlencoded({
    extended:true
}));
app.use(bodyparser.json());

const employController = require("./controllers/employeController");
app.set('views',path.join(__dirname,'/views/'))
app.engine('hbs',emphbs({extname:'hbs',defaultLayout:'mainlayout',layoutsdir:__dirname+'/views/layout'}));
app.set('view engine','hbs');

app.listen(3000,()=>{
    console.log('express server is running on 3000');
});
app.use('/employe',employController);