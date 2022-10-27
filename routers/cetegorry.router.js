import Express from "express";
import { upCetegory } from "../controller/cetegorry.controller.js";
const cetRouter = Express.Router()
cetRouter.route("/cetgory/prectis").post(upCetegory)
export default cetRouter