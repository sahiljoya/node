import multer from "multer";
import path from "path";
const imagestorege = multer.diskStorage({
    destination :"images",
    filename:(req,file,callback)=>{
        callback(null.filename+"_"+Date.now()+path.extname(file.originalname))
    }
})
export const imageData = multer({
    storage:imagestorege,
    limits:{
        fileSize:300000*3
    },
    fileFilter(req,file,callback){
      
    }
})