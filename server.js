//import libraries
const express= require('express');
const mongoose= require('mongoose');
const bodyParser= require('body-parser');
const User = require('./models/User'); //import user schema

//define constants
const port=3000;
const app= express();

//register library functionality
app.use(bodyParser.json());

//list for traffic on port
app.listen(port, ()=>{
	console.log(`server is listening on port:${port}`)
})

//connect to database
mongoose.connect('mongodb://localhost/userData');

// CREATE
app.post('/users',(req,res)=>{
  // User.create()
})

app.route('/users/:id')
// READ
.get((req,res)=>{
  // User.findById()
})
// UPDATE
.put((req,res)=>{
  // User.findByIdAndUpdate()
})
// DELETE
.delete((req,res)=>{
  // User.findByIdAndDelete()
})