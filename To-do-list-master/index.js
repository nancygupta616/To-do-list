// Require Express
const express=require('express');
const path=require('path');
const port=1129;

const app=express();
const db=require('./config/mongoose');
const Item=require('./models/listitem');

// Setting Up Template Engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

 // Only for forms
app.use(express.urlencoded());
app.use('/',require('./routes'));
app.use(express.static(path.join(__dirname,'assests')));

// Firing up the server
app.listen(port,function(err){
  if(err){
    console.log('Error in opening server');
    return ;
  }
  console.log('server is serving');
  return;
})