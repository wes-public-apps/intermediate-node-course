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

// Create homepage
app.get('/',(req,res)=>{
  res.json({
    success: true,
    message: "Home!"
  })
})

// Create users page
app.get('/users',(req,res)=>{
  res.json({
    success: true,
    message: "users!"
  })
})

app.post('/users',(req,res)=>{
  User.create(
    {...req.body.newData},
    (err,data)=>sendResponse(res,err,data)
  );
})

// Manage User Specific Data
app.route('/users/:id')
  // Get user data from DB
  .get((req,res)=>{
    User.findById(
      req.params.id,
      (err,data)=>sendResponse(res,err,data)
    );
  })
  // update a specific user's information
  .put((req,res)=>{
    User.findByIdAndUpdate(
      req.params.id,
      {...req.body.newData},
      {new:true},
      (err,data)=>sendResponse(res,err,data)
    )
  })
  // DELETE
  .delete((req,res)=>{
    User.findByIdAndDelete(
      req.params.id,
      (err,data)=>sendResponse(res,err,data)
    )
  })

  //define global response handler method
  function sendResponse(res,err,data){
    if (err){
      res.json({
        success: false,
        message: err
      })
    } else if (!data){
      res.json({
        success: false,
        message: "Not Found"
      })
    } else {
      res.json({
        success: true,
        data: data
      })
    }
  }