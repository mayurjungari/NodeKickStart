const express=require('express');
const routers=express.Router();

routers.get('/',(req,res,next)=>
{
    console.log("in the another middle ware")
    res.send('<h1>Hello from express</h1>')

    
})

module.exports=routers;