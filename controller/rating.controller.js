import ratings from "../models/rating.model.js"

export const ratUs = async (req, res) => {
    try {   
        req.body.prodectID = req.body.prodect_id
        req.body.userId = req.body.user_id
        console.log(req.body);
        const get = await ratings.findOne({  prodectID: req.body.prodectID ,userId: req.body.userId})
        console.log(get);
        if (get) {
            res.send({
                status:false,
                msg:"you are allready ratet",
                data:{}
            })
        }else{
        const crearet =await ratings.create(req.body)
        if (crearet) {
            res.send({
                status:true,
                msg:"thank you",
                data:crearet
            })
        }else{
            res.send({
                status:false,
                msg:"some detaile miss",
                data:{}
            })
        }
        }
    } catch (error) {
        res.send({
            status:false,
            msg:"something wrong",
            data:error
        })
    }
}

export const getRat = async(req,res)=>{
    try {
        const findD = await ratings.find({status:"Active"}).populate("prodectID").populate("userId")
        if (findD) {
            res.send({
                status:true,
                msg:"get data",
                data:findD
            })
        }else{
            res.send({
                status:false,
                msg:"some detaile miss",
                data:{}
            }) 
        }
    } catch (err) {
         res.send({
            status:false,
            msg:"something wrong",
            data:err
        })
    }
}

export const getSarch = async(req,res)=>{
    try {
        var where = {}
        if (req.body.rating) {
           where.rating = req.body.rating
        }
        const search = await rating.find(where)
    } catch (errr) {
        
    }
}