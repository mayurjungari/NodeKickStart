const fs = require('fs');
const requestHandeler=(req,res)=>{
    const reqUrl = req.url;
    
if (reqUrl === '/') {

    // Read the message from the "message.txt" file
    fs.readFile('message.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        }

        res.write('<html>');
        res.write('<head><title> Enter Message</title></head>');
        res.write('<body>');
        
        // Display the message if it exists
        if (data) {
            res.write(` ${data}`);
        }

        res.write('<form action="/message" method="POST"> <input type="text" name="message"> <button type="submit">Send Me</button></form>');

        
        
        
        res.write('</body>');
        res.write('</html>');
        return res.end();
    });
} else if (reqUrl === '/message' && req.method === 'POST') {
    const body = [];

    req.on('data', (chunk) => {
        body.push(chunk);
    });

    req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        const message = parsedBody.split('=')[1];

        fs.writeFile('message.txt', message, (err) => {
            if (err) {
                console.error(err);
                res.statusCode = 500;
                res.end('Error saving message');
            } else {
                res.statusCode = 302;

                res.setHeader('Location', '/');
                return res.end();
            }
        });
    });
} else {
    
    res.write('Welcome home');
    res.end();
}

}
module.exports=requestHandeler;