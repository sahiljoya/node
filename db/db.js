import mongoose from "mongoose";
const db = async()=>{
    const con = await mongoose.connect( "mongodb://localhost:27017/prectise",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log("host---",con.connection.host);
}      
export default db                      