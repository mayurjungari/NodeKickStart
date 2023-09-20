
const express = require('express');
const bodyparser = require('body-parser');
const app=express();
app.use(bodyparser.urlencoded({
    extended:false,
}
));

app.use('/add-product',(req,res,next)=>
{
    console.log("in the another middle ware")
    res.send('<form action=" /product" method="post"> <input type="text" name="title"> <button type="submit">Add Product</button> </form>');

   
})
app.post('/product',(req,res,next)=>
{
    console.log(req.body)
    
    res.redirect('/');
   
})

app.use('/',(req,res,next)=>
{
    console.log("in the another middle ware")
    res.send('<h1>Hello from express</h1>')

    
})






app.listen(4000);

