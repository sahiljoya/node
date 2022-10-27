import mongoose from "mongoose";
const image = new mongoose.Schema({
    path:{
        type:String,
        required:true
    },
    fullpath:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["Active","deactive"],
        default:"Active"
    },
    createdAt:{type:Date,default:Date.now},
    UpdateAt:{type:Date,default:Date.now},
})
export default image