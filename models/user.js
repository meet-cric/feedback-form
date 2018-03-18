const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const userSchema=new Schema({
  name:{
    type:String,
    unique:true,
    required:true
  },
  emailid:{
    type:String,
    required:true
  },
  comment:{
    type:String,
    required:true
  }
});
const userModel=mongoose.model('user',userSchema);
module.exports=userModel;
