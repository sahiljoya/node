import multer from "multer";
import path from "path";
const diskStorege = multer.diskStorage({
    destination: "images",
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})
export const ImageUpload = multer({
    storage: diskStorege,
    limits: {
        fileSize: 3000000 * 3
    },
    fileFilter(req,file,cb){
        if (!file.originalname.match(/\.(png|jpg|jpeg)$/)){
            return cb (new Error('please enter valid image'))
        }
        cb(undefined,true)
    }
})