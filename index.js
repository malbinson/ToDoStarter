//the index file that Node.js reads on start up.  //Everything "starts" with this file.

//require our "add-on" software
const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

//create and configure our Express instance
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('view engine', ejs)
app.use(express.static("public"))
app.use(require('./routes'));

//*********
//add the "Connect String" from classroom here
//*********


//start our serveer
app.listen(3000, () => {
  console.log('server started');
});