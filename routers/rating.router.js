import Express from "express";
import { getRat, ratUs } from "../controller/rating.controller.js";
const ratrouter = Express.Router()
ratrouter.route("/rating/prectis").post(ratUs)
ratrouter.route("/rating-rat/prectis").get(getRat)
export default ratrouter