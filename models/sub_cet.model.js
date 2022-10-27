import mongoose from "mongoose";
const subs = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["Active", "deactive"],
        default: "Active"
    },
    cetegoryId: {
        type: mongoose.Schema.Types.ObjectId, ref: "cetegory",
        required:true
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})
const Sub = mongoose.model("subCetegory", subs)
export default Sub