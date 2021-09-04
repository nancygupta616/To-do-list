// Require Moongoose

const mongoose=require('mongoose');
// Mongo Schema

const itemSchema=new mongoose.Schema({
  description:{
    type:String,
    required:true
  },
  category:{
    type:String,
    required:true
  },
  date:{
    type:String,
    required:true
  }
})

const Item=mongoose.model('item',itemSchema);

module.exports=Item;