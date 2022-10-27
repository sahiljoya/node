import mongoose from "mongoose";
const cetegorry = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  status:{
    type:String,
    enum:["Active","deactive"],
    default:"Active"
  },
  createdAt:{type:Date,default:Date.now},
  updatedAt:{type:Date,default:Date.now}

  
})
const cetegory = mongoose.model("cetegory",cetegorry)
export default cetegory