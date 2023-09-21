const express=require('express');
const routers=express.Router();


routers.get('/add-product',(req,res,next)=>
{
    console.log("in the another middle ware")
    res.send('<form action=" /product" method="post"> <input type="text" name="title"> <button type="submit">Add Product</button> </form>');

   
})
routers.post('/product',(req,res,next)=>
{
    console.log(req.body)
    
    res.redirect('/');
   
})

module.exports=routers;