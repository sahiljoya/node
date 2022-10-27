import bcrypt from "bcrypt"
import Jwt from "jsonwebtoken"
import user from "../models/user.model.js"
export const userCreated = async(req,res)=>{
    try {
       const email = await user.findOne({email:req.body.email})
       const number = await user.findOne({mobile:req.body.mobile})
       if (email) {
        res.send({
            status:false,
            msg:"email is allready h",
            data:{}
        })
       }else if (number) {
        res.send({
            status:false,
            msg:"number is allready h",
            data:{}
        })
       }else{
        let pass = await bcrypt.hash(req.body.password,10)
        req.body.password = pass
        let d = await user.create(req.body)
        console.log("khan--");
        if (d) {
            d.token = await Jwt.sign({time:Date(),UserId:d._id},"merta")
            console.log("jhxjhg--",d);
            res.send(d)
        }else{
            res.send("jave ni")
        }
       }
    } catch (err) {
        res.send(err)
    }
}