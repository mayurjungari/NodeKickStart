const http = require('http');


const server=http.createServer((req,res)=>
{
    const reqUrl=req.url;
    if(reqUrl==='/home')
    {
        res.write(' Welcome home')
        res.end();
    }
    else if(reqUrl==='/about')
    {
        res.write(' Welcome to About Us page')
        res.end();
    }
    else if(reqUrl==='/node')
    {
        res.write(' Welcome to my Node Js projecte')
        res.end();
    }
  
});
server.listen(4000);