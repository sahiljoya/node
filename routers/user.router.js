import Express from "express";
import { userCreated } from "../controller/user.controller.js";
const uRouter = Express.Router()
uRouter.route("/user/prectic").post(userCreated)
export default uRouter