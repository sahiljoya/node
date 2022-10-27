import mongoose from "mongoose";
import image from "../models/image.prodect.js";
const prodect = new mongoose.Schema({
    name:{
        type:String,
        requires:true
    },
    price:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    is_popular:{
        type:Boolean,
        enum:[0,1],
        default:0
    },
    createBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
    },
    subCetegory:{
        type:mongoose.Schema.Types.ObjectId,ref:"subCetegory"
    },
    images:[image],
    status:{
        type:String,
        enum:["Active","deactive"],
        default:"Active"
    },
    createdAt:{type:Date,default:Date.now},
    updatedAt:{type:Date,default:Date.now},
})
const Prodect = mongoose.model("prodect",prodect)
export default Prodect