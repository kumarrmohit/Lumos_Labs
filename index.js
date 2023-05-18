const express=require("express")
const{connection}=require("./config/db")
const{userRouter}=require("./routes/User")
const {noteRouter}=require("./routes/nft")
const rateLimit = require('express-rate-limit')
const{authenticate}=require("./middleware/authentication")
require('dotenv').config()
const port=process.env.port||3000

const app=express()


app.use(express.json())
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000,
	max: 100, 
	standardHeaders: true,
	legacyHeaders: false,
})
app.use(limiter)


app.get("/",(req,res)=>{
    res.end("Home page")
})

app.use("/users",userRouter)
app.use(authenticate)
app.use('/nfts',noteRouter);

app.listen(port,async()=>{
    try{
        await connection
    }
    catch(err){
        console.log(err.message)
    }
    console.log(`server is running ${port}`)
})