const fs = require('fs');

const requestHandler=(req,res)=>{
    const url = req.url;
    const method = req.method;
    if(url === '/form'){
        res.write("<html>");
        res.write("<head><title>My first form</title></head>");
        res.write('<body><h1>Form</h1><form action="/formMessage" method = "POST" ><input type="text" name="userInput" /><button type ="submit" >click me</button></form></body>');
        res.write("</html>");
        return res.end();
    }
    if(url === '/formMessage' && method === 'POST' ){
        const body = [];
        req.on('data',(chunk)=>{
            // console.log('chunk =>', chunk);
            body.push(chunk);
            // console.log('body => ', body)
        })
        return req.on('end',()=>{
                const parseBody = Buffer.concat(body).toString();
                // console.log('parseBody=',parseBody);
                const message = parseBody.split('=')[1];
                fs.writeFile('formMessage.text',message,(err)=>{
                    res.statusCode = 302;
                    res.setHeader('Location','/form'); // this is (Location) accepted by the browser by default and we directed to where we want the user to by mentioning the path
                    return res.end();
            });
        });
    }
    res.setHeader("Content-type", "text/html"); // setting the header
        res.write("<html>");
        res.write("<head><title>My first title from response</title></head>");
        res.write("<body><h1>Hello from Node.js server </h1></body>");
        res.write("</html>");
        res.end(); // to tell the node we are done setting the response :)
        // process.exit();
}

module.exports = requestHandler;

