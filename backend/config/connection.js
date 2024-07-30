const mongoose=require("mongoose");

const connectionDB=async()=>{
    mongoose.connect(process.env.DB_URI).then(()=>{
        console.log(`database is connected successfully`)
    }).catch((error)=>{
        console.log("error in db connection", error)
    })
}


module.exports=connectionDB;
