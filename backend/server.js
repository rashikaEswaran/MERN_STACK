const express=require("express")
const cors=require("cors")

const app=express()
app.use(cors())
app.use(express.json())

app.get("/api/get",(req,res)=>
{
    res.status(200).json({
        success:true,
        message:"Ok success"
    })
})

app.listen(500,()=>
{
    console.log("SERVER IS RUNNING")
})