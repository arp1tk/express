var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

const userModel =require("./users");

mongoose.connect('mongodb://127.0.0.1:27017/practise', { useNewUrlParser: true, useUnifiedTopology: true });




router.get('/', function(req, res, next) {
  res.send('<p>Hello</p>');
});

router.get('/allusers', async function(req,res){

  const allusers = await userModel.find().maxTimeMS(20000); 
  
  res.send(allusers);

  

})

module.exports = router;
