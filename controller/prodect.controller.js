import Prodect from "../models/prodect.model.js"

export const pro = async (req, res) => {
    try {
        var allData = []
        req.files.forEach((image, key) => {
            //   console.log("req.file------",req.files);
            var imagetype = ''
            if (image.mimetype == "image/png") {
                imagetype = "png"
            } else if (image.mimetype == 'image/jpg') {
                imagetype = "jpg"
            }
            let imageData = {
                path: image.filename,
                fullpath: "localhost:3003/" + image.path,
                type: imagetype
            }
            //  console.log("imageData---",imageData);
            allData.push(imageData)
        });
        req.body.images = allData
        const create = await Prodect.create(req.body)
        // console.log("creatData--",create);
        if (create) {
            res.send({
                create
            })
        } else (
            "erorororororrororro"
        )
    } catch (Error) {
        res.send({
            status: false,
            msg: "jhgfd",
            data: Error
        })
    }
}