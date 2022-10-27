import Sub from "../models/sub_cet.model.js"

export const upSub = async(req,res)=>{
    try {
    const createSub = await Sub.create(req.body)
        if (createSub) {
            res.send({
                status:true,
                msg:"sub cetegory data add ",
                data:createSub,
            })
        }else{
            res.send({
                status:false,
                msg:"no thanks",
                data:{}
            })
            
        }
    } catch (error) {
        res.send({
            status:false,
            msg:"sonthing wrong thanks",
            data:error
        })
    }
}