import mongoose from "mongoose";
const use = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["Active","inactive"],
        default:"Active"
    },
    token:{
        type:String,
        required:false
    },
    
})
const user = mongoose.model("user",use)
export default user