import Express from "express";
import db from "./db/db.js";
import cetRouter from "./routers/cetegorry.router.js";
import proRouter from "./routers/prodect.router.js";
import ratrouter from "./routers/rating.router.js";
import subrouter from "./routers/sub_cet.router.js";
import uRouter from "./routers/user.router.js";
const app = Express()
app.use(Express.json())
db()
app.use(uRouter)
app.use(cetRouter)
app.use(subrouter)
app.use(proRouter)
app.use(ratrouter)
app.listen(3003,(req,res)=>{
console.log("3003---port");
})