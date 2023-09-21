
const express = require('express');
const bodyparser = require('body-parser');
const adminroutes=require('./Routes/Admin')
const shoproutes=require('./Routes/Shop')

const app=express();
app.use(bodyparser.urlencoded({
    extended:false,
}
));
app.use(adminroutes);
app.use(shoproutes)
app.use((req,res,next)=>{
    res.status(404).send('<h1>Page Not Found</h1>')
})









app.listen(4000);

