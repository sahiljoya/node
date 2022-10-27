import Express from "express";
import { upSub } from "../controller/sub_cet.controller.js";
const subrouter = Express.Router()
subrouter.route("/sub/prectis").post(upSub)
export default subrouter