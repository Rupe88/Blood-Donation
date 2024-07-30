const express=require("express");
const dotenv=require("dotenv");
const connectionDB = require("./config/connection");
dotenv.config();
const app=express();
const PORT=process.env.PORT || 3000

app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.listen(PORT,()=>{
    console.log(`server is running on htpp://localhost:${PORT}`)
    connectionDB();
})