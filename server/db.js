const mongoose = require('mongoose');  //initializing moongoose package.

require("dotenv").config(); // importing dotenv file 
const uri = process.env.URI; // Variable to access conncection url.


mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true});  //url connection

var db  = mongoose.connection; //variable to export url conncetion into app.js file.

//cheking whether url connected or not.
db.on('connected', ()=>{
    console.log('MongoDB connection successfull');
});

db.on('error', ()=>{
    console.log('connection failed');

});

module.exports = mongoose; //exporting moongoose into app.js