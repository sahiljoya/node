import cetegory from "../models/cetegory.model.js"
export const upCetegory = async (req, res) => {
    try {
        const get = await cetegory.findOne({ name: req.body.name })
        if (get) {
            res.send({
                status: false,
                msg: "cetegory is allready asixet",
                data: {}
            })
        } else {
            let creatCet = await cetegory.create(req.body)
            if (creatCet) {
                res.send({
                    status: true,
                    msg: "cetegory created success",
                    data: creatCet
                })
            } else {
                res.send({
                    status: false,
                    msg: "cetegory note creat",
                    data: {}
                })
            }
        }
    } catch (error) {
        res.status(401).send({
            status: false,
            msg: "somthing wrong",
            data: error
        })
    }
}