const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose=require("mongoose")
const dotenv=require("dotenv");
const app =express()
app.use(cors())
app.use(bodyParser.json())
dotenv.config()
const {Schema}=mongoose
const courseSchema=new Schema({
    url:{
        type:String,
        require:true
    },
    courseName:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    teacherImg:{
        type:String,
        require:true
    },
    teacherName:{
        type:String,
        require:true
    }
}
,{ timestamps:true})

const Courses=mongoose.model("/courses",courseSchema)

//get all
app.get("/courses",(req,res)=>{
    Courses.find({},(err,docs)=>{
        if(!err){
            res.send(docs)
        }else{
            res.send({message:err})
        }
    })
})

//get by id
app.get("/courses/:id",(req,res)=>{
    const {id}=req.params
    Courses.findById(id,(err,docs)=>{
        if(!err){
            if(docs){
                res.send(docs)
            }else{
                res.send({message:"NOT FOUND"})
            }
        }else{
            res.send({message:err})
        }
    })
    
})

//delete
app.delete("/courses/:id",(req,res)=>{
    const {id}=req.params
    Courses.findByIdAndDelete(id,(err)=>{
        if(!err){
            res.send({message:"deleted"})
        }else{
            res.send({message:err})
        }
    })
})

//add({
app.post("/courses",(req,res)=>{
    let course=new Courses({
url:req.body.url,
courseName:req.body.courseName,
price:req.body.price,
teacherImg:req.body.teacherImg,
teacherName:req.body.teacherName
    })
    course.save()
    res.send({message:"SUCCESS"})
})

 const PORT=process.env.PORT
 const DB=process.env.DB_URL.replace("<password>",process.env.DB_PASSWORD)
 mongoose.connect(DB,(err)=>{
 if(!err){
    console.log("CONNECTED");
    app.listen(PORT,()=>{
        console.log(`server is running on ${PORT}`);
    })
 }
    
 }
 )

