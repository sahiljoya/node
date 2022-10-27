import Express from "express"
import { pro } from "../controller/prodect.controller.js"
import { ImageUpload } from "../servish/image.sevish.js"
const proRouter = Express.Router()
proRouter.route("/prodect/prectis").post(ImageUpload.array("images",3),pro)
export default proRouter