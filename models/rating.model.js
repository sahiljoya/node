import mongoose from "mongoose";
const rate = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,ref:"user",
        required:true
    },
    prodectID:{
        type:mongoose.Schema.Types.ObjectId,ref:"prodect",
        required:true
    },
    rating:{
        type:Number,
        enum:[1,2,3,4,5],
        required:true
    },
    rewiew:{
        type:String,
        required:false
    },
    status:{
        type:String,
        enum:["Active","deactive"],
        default:"Active"
    },
    createdAt:{type:Date,default:Date.now},
    updatedAt:{type:Date,default:Date.now},
})
const ratings = mongoose.model("rating",rate)
export default ratings