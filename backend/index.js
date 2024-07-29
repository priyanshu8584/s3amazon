
import express from "express"
import cors from "cors"
import axios from "axios"
const app=new express();
 app.use("/*",cors());

 app.get("/",async (req,res)=>{
     const response=await axios.get("https://s3.amazonaws.com/roxiler.com/product_transaction.json")
   
     res.json(response.data);
     
 })
 app.listen(3000,(req,res)=>{
   console.log('running on port 3000')
 })