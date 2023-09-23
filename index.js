const express =require('express');
const path=require('path')
const adminroutes=require('./Routes/Admin')
const shoproutes=require('./Routes/Shop')
const contactroutes=require('./Routes/contact')
const sucessroutes=require('./Routes/success')
const bodyparser=require('body-parser')
const app=express();
app.use(bodyparser.urlencoded({
    extended : false
}))
app.use(express.static(path.join(__dirname,'public')))


app.use(adminroutes);
app.use(shoproutes);
app.use(contactroutes);
app.use(sucessroutes)

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'Views', 'not.html'));
  });
  

app.listen(4000,()=>{
    console.log("server is runiiing on 4000")
}) 